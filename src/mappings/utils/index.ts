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
  initAllEntityManagers,
  saveAllEntities
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
  initAllEntityManagers,
  saveAllEntities
};
export const common = { getTokenEntityId, blockContextManager };
