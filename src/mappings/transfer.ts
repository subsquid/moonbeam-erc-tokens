import { ContractStandard, Transfer, Account, Token } from '../model';

import { EvmLogEvent, SubstrateBlock } from '@subsquid/substrate-processor';
import { BigNumber } from 'ethers';
import { entitiesManager } from './entityUtils';
import { Context } from '../processor';
import { EntityManagerItem } from '../common/types';

type SaveTransactionInput = {
  event: EvmLogEvent;
  ctx: Context;
  block: SubstrateBlock;
  from: string;
  to: string;
  contractStandard: ContractStandard;
  value?: BigNumber;
  tokenId?: string;
};

export async function handleTransfer(
  props: SaveTransactionInput
): Promise<void> {
  const { block, event, from, to, value, tokenId, contractStandard } = props;

  const fromAccount = (await entitiesManager.get({
    entityName: EntityManagerItem.account,
    id: from
  })) as Account;
  const toAccount = (await entitiesManager.get({
    entityName: EntityManagerItem.account,
    id: to
  })) as Account;

  const transfer = new Transfer({
    id: event.id,
    blockNumber: BigInt(block.height),
    timestamp: new Date(block.timestamp),
    eventIndex: event.indexInBlock,
    from: fromAccount,
    to: toAccount,
    token: (await entitiesManager.get({
      entityName: EntityManagerItem.token,
      contractAddress: event.args.address,
      contractStandard,
      id: tokenId,
      blockHeight: block.height
    })) as Token,
    amount: value ? BigInt(value.toString()) : null
  });

  fromAccount.transfersSentCount += 1;
  fromAccount.transfersTotalCount += 1;

  toAccount.transfersReceivedCount += 1;
  toAccount.transfersTotalCount += 1;

  entitiesManager.add(EntityManagerItem.transfer, transfer);
}
