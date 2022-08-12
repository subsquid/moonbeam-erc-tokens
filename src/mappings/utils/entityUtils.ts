import * as entityManagerClasses from './classes';
import { Context } from '../../processor';
import * as erc20 from '../../abi/erc20';
import * as erc721 from '../../abi/erc721';
import * as erc1155 from '../../abi/erc1155';
import { getAccountFTokenBalanceEntityId, getTokenEntityId } from './common';
import {
  Account,
  AccountFtTransfer,
  AccountNftTransfer,
  Collection,
  FToken,
  FtTransfer,
  NfToken,
  NftTransfer,
  UriUpdateAction,
  AccountFTokenBalance
} from '../../model';

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
  accountFTokenBalancesManager.init(ctx);
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
  await accountFTokenBalancesManager.saveAll();
}

export const accountsManager = new entityManagerClasses.AccountsManager(
  Account
);
export const accountFTokenBalancesManager =
  new entityManagerClasses.AccountFTokenBalancesManager(AccountFTokenBalance);
export const fTokenManager = new entityManagerClasses.FTokenManager(FToken);
export const nfTokenManager = new entityManagerClasses.NfTokenManager(NfToken);
export const uriUpdateActionsManager =
  new entityManagerClasses.UriUpdateActionsManager(UriUpdateAction);
export const ftTransferManager = new entityManagerClasses.FtTransferManager(
  FtTransfer
);
export const nftTransferManager = new entityManagerClasses.NftTransferManager(
  NftTransfer
);
export const collectionManager = new entityManagerClasses.CollectionManager(
  Collection
);
export const accountsFtTransferManager =
  new entityManagerClasses.AccountsFtTransferManager(AccountFtTransfer);
export const accountsNftTransferManager =
  new entityManagerClasses.AccountsNftTransferManager(AccountNftTransfer);

export async function prefetchEntities(ctx: Context): Promise<void> {
  for await (const block of ctx.blocks) {
    for await (const item of block.items) {
      if (item.name === 'EVM.Log') {
        let decodedEvent = null;
        switch (item.event.args.topics[0]) {
          /**
           * ===================================================================
           */
          case erc20.events['Transfer(address,address,uint256)'].topic:
          case erc721.events['Transfer(address,address,uint256)'].topic:
            try {
              decodedEvent = erc20.events[
                'Transfer(address,address,uint256)'
              ].decode(item.event.args);
              accountsManager.addPrefetchItemId([
                decodedEvent.from,
                decodedEvent.to
              ]);
              fTokenManager.addPrefetchItemId(
                item.event.args.address.toString()
              );
              accountFTokenBalancesManager.addPrefetchItemId([
                getAccountFTokenBalanceEntityId(
                  decodedEvent.from.toString(),
                  item.event.args.address.toString()
                ),
                getAccountFTokenBalanceEntityId(
                  decodedEvent.to.toString(),
                  item.event.args.address.toString()
                )
              ]);
            } catch (e) {
              try {
                decodedEvent = erc721.events[
                  'Transfer(address,address,uint256)'
                ].decode(item.event.args);
                accountsManager.addPrefetchItemId([
                  decodedEvent.from,
                  decodedEvent.to
                ]);
                nfTokenManager.addPrefetchItemId(
                  getTokenEntityId(
                    item.event.args.address.toString(),
                    decodedEvent.tokenId.toString()
                  )
                );
                collectionManager.addPrefetchItemId(
                  item.event.args.address.toString()
                );
              } catch (err) {}
            }

            break;
          /**
           * ===================================================================
           */
          case erc1155.events[
            'TransferBatch(address,address,address,uint256[],uint256[])'
          ].topic:
            decodedEvent = erc1155.events[
              'TransferBatch(address,address,address,uint256[],uint256[])'
            ].decode(item.event.args);
            accountsManager.addPrefetchItemId([
              decodedEvent.operator,
              decodedEvent.from,
              decodedEvent.to
            ]);
            nfTokenManager.addPrefetchItemId(
              decodedEvent.ids.map((id) =>
                getTokenEntityId(
                  item.event.args.address.toString(),
                  id.toString()
                )
              )
            );
            collectionManager.addPrefetchItemId(
              item.event.args.address.toString()
            );
            break;
          /**
           * ===================================================================
           */
          case erc1155.events[
            'TransferSingle(address,address,address,uint256,uint256)'
          ].topic:
            decodedEvent = erc1155.events[
              'TransferSingle(address,address,address,uint256,uint256)'
            ].decode(item.event.args);
            accountsManager.addPrefetchItemId([
              decodedEvent.operator,
              decodedEvent.from,
              decodedEvent.to
            ]);
            nfTokenManager.addPrefetchItemId(
              getTokenEntityId(
                item.event.args.address.toString(),
                decodedEvent.id.toString()
              )
            );
            collectionManager.addPrefetchItemId(
              item.event.args.address.toString()
            );
            break;
          /**
           * ===================================================================
           */
          case erc1155.events['URI(string,uint256)'].topic:
            decodedEvent = erc1155.events['URI(string,uint256)'].decode(
              item.event.args
            );
            nfTokenManager.addPrefetchItemId(
              getTokenEntityId(
                item.event.args.address.toString(),
                decodedEvent.id.toString()
              )
            );
            break;

          default:
        }
      }
    }
  }
  await accountsManager.prefetchEntities();
  await fTokenManager.prefetchEntities();
  await nfTokenManager.prefetchEntities({
    currentOwner: true,
    collection: true
  });
  await accountFTokenBalancesManager.prefetchEntities({
    token: true,
    account: true
  });
}
