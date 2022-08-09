import * as entityManagerClasses from './classes';
import { Context } from '../../processor';

export function initAllEntityManagers(ctx: Context): void {
  accountsManager.init(ctx);
  collectionManager.init(ctx);
  fTokenManager.init(ctx);
  nfTokenManager.init(ctx);
  uriUpdateActionsManager.init(ctx);
  ftTransferManager.init(ctx);
  nftTransferManager.init(ctx);
  accountsFtTransferManager.init(ctx);
  accountsNftTransferManager.init(ctx);
}

export async function saveAllEntities(): Promise<void> {
  await accountsManager.saveAll();
  await collectionManager.saveAll();
  await fTokenManager.saveAll();
  await nfTokenManager.saveAll();
  await uriUpdateActionsManager.saveAll();
  await ftTransferManager.saveAll();
  await nftTransferManager.saveAll();
  await accountsFtTransferManager.saveAll();
  await accountsNftTransferManager.saveAll();
}

export const accountsManager = new entityManagerClasses.AccountsManager();
export const fTokenManager = new entityManagerClasses.FTokenManager();
export const nfTokenManager = new entityManagerClasses.NfTokenManager();
export const uriUpdateActionsManager = new entityManagerClasses.UriUpdateActionsManager();
export const ftTransferManager = new entityManagerClasses.FtTransferManager();
export const nftTransferManager = new entityManagerClasses.NftTransferManager();
export const collectionManager = new entityManagerClasses.CollectionManager();
export const accountsFtTransferManager =
  new entityManagerClasses.AccountsFtTransferManager();
export const accountsNftTransferManager =
  new entityManagerClasses.AccountsNftTransferManager();
