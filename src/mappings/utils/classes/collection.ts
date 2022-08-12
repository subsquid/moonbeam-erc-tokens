import {
  Collection,
  ContractStandard
} from '../../../model';
import { createCollection } from '../../collections';
import { EntitiesManager } from './common';

/**
 * ::::::::::::: ERC721/ERC1155 TOKEN COLLECTION :::::::::::::
 */
export class CollectionManager extends EntitiesManager<Collection> {
  constructor(entity: typeof Collection) {
    super({ entity });
  }

  async getOrCreate({
    id,
    contractStandard
  }: {
    id: string;
    contractStandard: ContractStandard;
  }): Promise<Collection> {
    if (!this.context) throw new Error('context is not defined');

    let collection = await this.get(id);

    if (!collection) {
      collection = createCollection({
        id,
        contractStandard
      });
    }
    this.add(collection);

    return collection;
  }
}
