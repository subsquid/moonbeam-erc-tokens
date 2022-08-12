import { getTokenEntityId } from './common';
import {
  accountsManager,
  fTokenManager,
  nfTokenManager,
  ftTransferManager,
  uriUpdateActionsManager,
  nftTransferManager,
  collectionManager,
  accountsFtTransferManager,
  accountsNftTransferManager,
  accountFTokenBalancesManager,
  initAllEntityManagers,
  saveAllEntities,
  prefetchEntities,
} from './entityUtils';

import { blockContextManager } from './blockContextUtils';

export const entity = {
  accountsManager,
  fTokenManager,
  nfTokenManager,
  ftTransferManager,
  nftTransferManager,
  uriUpdateActionsManager,
  collectionManager,
  accountsFtTransferManager,
  accountsNftTransferManager,
  accountFTokenBalancesManager,
  initAllEntityManagers,
  saveAllEntities,
  prefetchEntities
};
export const common = { getTokenEntityId, blockContextManager };
