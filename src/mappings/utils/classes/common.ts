import type { FindOptionsRelations } from 'typeorm';
import { FindOneOptions, EntityClass } from '@subsquid/typeorm-store';
import { Context } from '../../../processor';

interface EntityWithId {
  id: string;
}

export class EntitiesManager<Entity extends EntityWithId> {
  context: Context | null = null;

  entitiesMap: Map<string, Entity> = new Map();

  init(ctx: Context) {
    this.context = ctx;
    return this;
  }

  add(entity: Entity): void {
    this.entitiesMap.set(entity.id, entity);
  }

  /**
   * Method returns entity item ONLY by its "ID"
   *
   * @param entity
   * @param id
   * @param relations
   */
  async get(
    entity: EntityClass<Entity>,
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

      item = (await this.context.store.get(entity, requestParams)) || null;
    }

    return item;
  }

  async saveAll(): Promise<void> {
    if (!this.context) throw new Error('context is not defined');
    await this.context.store.save([...this.entitiesMap.values()]);
    this.entitiesMap.clear();
  }
}
