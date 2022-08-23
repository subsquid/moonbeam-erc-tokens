import type { FindOptionsRelations } from 'typeorm';
import { FindOneOptions, EntityClass } from '@subsquid/typeorm-store';
import { Context } from '../../../processor';
import { FindOptionsWhere } from 'typeorm';
import { splitIntoBatches } from '../common';

interface EntityWithId {
  id: string;
}

export class EntitiesManager<Entity extends EntityWithId> {
  context: Context | null = null;

  entity: EntityClass<Entity>;

  prefetchItemIdsList: string[] = [];

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

  /**
   * Add entity ID to the list for prefetch process.
   */
  addPrefetchItemId(itemIdOrList: string | string[]): void {
    if (Array.isArray(itemIdOrList)) {
      this.prefetchItemIdsList.push(...itemIdOrList);
    } else {
      this.prefetchItemIdsList.push(itemIdOrList);
    }
  }

  /**
   * Clear collected list of entity IDs for prefetch process.
   */
  resetPrefetchItemIdsList(): void {
    this.prefetchItemIdsList = [];
  }

  /**
   * Prefetch entities which are collected in the beginning of the batch
   * data processing flow.
   *
   * @param relations
   */
  async prefetchEntities(
    relations?: FindOptionsRelations<Entity>
  ): Promise<void> {
    if (!this.context) throw new Error('context is not defined');
    if (
      !this.prefetchItemIdsList ||
      this.prefetchItemIdsList.length === 0
    )
      return;

    for (const chunk of splitIntoBatches(this.prefetchItemIdsList, 1000)) {
      const chunkRes = await this.context.store.find(this.entity, {
        where: chunk.map((id): FindOptionsWhere<Entity> => {
          return { id } as FindOptionsWhere<Entity>;
        }),
        ...(!!relations && { relations })
      });

      for (const chunkResItem of chunkRes) {
        this.add(chunkResItem);
      }
    }

    this.resetPrefetchItemIdsList();
  }

  /**
   * Get entity by ID either from local cache or DB, if it's not existing in
   * local cache ("entitiesMap").
   *
   * @param id: string
   * @param relations?: FindOptionsRelations<Entity>
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

  /**
   * Save all entities from local cache at once.
   * This action should be evoked in the end of batch data processing flow.
   */
  async saveAll(): Promise<void> {
    if (!this.context) throw new Error('context is not defined');
    await this.context.store.save([...this.entitiesMap.values()]);
    this.entitiesMap.clear();
  }
}
