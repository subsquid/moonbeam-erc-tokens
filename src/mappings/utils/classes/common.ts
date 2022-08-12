import type { FindOptionsRelations } from 'typeorm';
import { FindOneOptions, EntityClass } from '@subsquid/typeorm-store';
import { Context } from '../../../processor';
import { FindOptionsWhere } from 'typeorm';

interface EntityWithId {
  id: string;
}

export class EntitiesManager<Entity extends EntityWithId> {
  context: Context | null = null;

  entity: EntityClass<Entity>;

  preprocessingItemIdsList: string[] = [];

  entitiesMap: Map<string, Entity> = new Map();

  constructor({ entity }: { entity: EntityClass<Entity> }) {
    this.entity = entity;
  }

  init(ctx: Context) {
    this.context = ctx;
    return this;
  }

  add(entity: Entity): void {
    this.entitiesMap.set(entity.id, entity);
  }

  addPrefetchItemId(itemIdOrList: string | string[]): void {
    if (Array.isArray(itemIdOrList)) {
      this.preprocessingItemIdsList.push(...itemIdOrList);
    } else {
      this.preprocessingItemIdsList.push(itemIdOrList);
    }
  }

  resetPrefetchItemIdsList(): void {
    this.preprocessingItemIdsList = [];
  }

  async prefetchEntities(
    relations?: FindOptionsRelations<Entity>
  ): Promise<void> {
    if (!this.context) throw new Error('context is not defined');
    if (
      !this.preprocessingItemIdsList ||
      this.preprocessingItemIdsList.length === 0
    )
      return;
    const fetchRes = await this.context.store.find(this.entity, {
      where: this.preprocessingItemIdsList.map(
        (id): FindOptionsWhere<Entity> => {
          // @ts-ignore
          return { id };
        }
      ),
      ...(!!relations && { relations })
    });

    fetchRes.forEach((item) => this.add(item));
    this.resetPrefetchItemIdsList();
  }

  /**
   * Method returns entity item ONLY by its "ID"
   *
   * @param id
   * @param relations
   */
  async get(
    id: string,
    relations?: FindOptionsRelations<Entity>
  ): Promise<Entity | null> {
    if (!this.context) throw new Error('context is not defined');
    let item = this.entitiesMap.get(id) || null;

    if (!item) {
      const requestParams = {
        where: { id }
      } as FindOneOptions<Entity>;

      if (relations) requestParams.relations = relations;

      item = (await this.context.store.get(this.entity, requestParams)) || null;
    }

    return item;
  }

  async saveAll(): Promise<void> {
    if (!this.context) throw new Error('context is not defined');
    await this.context.store.save([...this.entitiesMap.values()]);
    this.entitiesMap.clear();
  }
}
