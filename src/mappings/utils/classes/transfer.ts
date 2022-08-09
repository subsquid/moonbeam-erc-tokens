import { BigNumber } from 'ethers';
import {
  ContractStandard,
  FtTransfer,
  NftTransfer,
  TransferType
} from '../../../model';
import { accountsManager, fTokenManager, nfTokenManager } from '../entityUtils';
import { EntitiesManager } from './common';
import {
  getNftTransferEntityId,
  getTokenTotalSupply,
  getTokenBurnedStatus,
  getTransferType
} from '../common';
import * as utils from '../index';

/**
 * ::::::::::::: TRANSFERS ERC20 TOKEN :::::::::::::
 */
export class FtTransferManager extends EntitiesManager<FtTransfer> {
  async getOrCreate({
    from,
    to,
    amount
  }: {
    from: string;
    to: string;
    amount: BigNumber;
  }): Promise<FtTransfer> {
    const block = utils.common.blockContextManager.getCurrentBlock();
    const event = utils.common.blockContextManager.getCurrentEvent();

    const fromAccount = await accountsManager.getOrCreate(from);
    const toAccount = await accountsManager.getOrCreate(to);

    const transfer = new FtTransfer({
      id: event.id,
      blockNumber: BigInt(block.height),
      timestamp: new Date(block.timestamp),
      eventIndex: event.indexInBlock,
      txnHash: event.evmTxHash,
      from: fromAccount,
      to: toAccount,
      token: await fTokenManager.getOrCreate({
        contractAddress: event.args.address,
        contractStandard: ContractStandard.ERC20
      }),
      amount: BigInt(amount.toString()),
      transferType: getTransferType(from, to)
    });

    this.add(transfer);

    return transfer;
  }
}
/**
 * ::::::::::::: TRANSFERS ERC721/ERC1155 TOKEN :::::::::::::
 */
export class NftTransferManager extends EntitiesManager<NftTransfer> {
  async getOrCreate({
    from,
    to,
    operator,
    amount,
    tokenId,
    isBatch,
    contractStandard
  }: {
    from: string;
    to: string;
    operator?: string;
    amount: BigNumber;
    tokenId: BigNumber;
    isBatch: boolean;
    contractStandard: ContractStandard;
  }): Promise<NftTransfer> {
    const block = utils.common.blockContextManager.getCurrentBlock();
    const event = utils.common.blockContextManager.getCurrentEvent();

    const fromAccount = await accountsManager.getOrCreate(from);
    const toAccount = await accountsManager.getOrCreate(to);
    const operatorAccount = operator
      ? await accountsManager.getOrCreate(operator)
      : null;
    const token = await nfTokenManager.getOrCreate({
      id: tokenId,
      contractAddress: event.args.address,
      owner: toAccount,
      contractStandard
    });
    const transferType = getTransferType(from, to);

    token.amount = getTokenTotalSupply(
      token.amount,
      BigInt(amount.toString()),
      transferType
    );
    token.isBurned =
      contractStandard === ContractStandard.ERC721
        ? transferType === TransferType.BURN
        : getTokenBurnedStatus(token.amount);

    nfTokenManager.add(token);

    const transfer = new NftTransfer({
      id: getNftTransferEntityId(event.id, tokenId.toString()),
      blockNumber: BigInt(block.height),
      timestamp: new Date(block.timestamp),
      eventIndex: event.indexInBlock,
      txnHash: event.evmTxHash,
      amount: BigInt(amount.toString()),
      from: fromAccount,
      to: toAccount,
      operator: operatorAccount,
      transferType,
      token,
      isBatch
    });

    this.add(transfer);

    return transfer;
  }
}
