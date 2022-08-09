import { Collection, ContractStandard } from '../../model';
import * as utils from '../utils';

export function createCollection({
  id,
  contractStandard
}: {
  id: string;
  contractStandard: ContractStandard;
}): Collection {
  const block = utils.common.blockContextManager.getCurrentBlock();

  return new Collection({
    id,
    collectionType: contractStandard,
    createdAtBlock: BigInt(block.height),
    createdAt: new Date(block.timestamp)
  });
}
