import { Transfer, ContractStandard } from '../model';

import { EvmLogEvent, SubstrateBlock } from '@subsquid/substrate-processor';
import { BigNumber } from 'ethers';
import { addTransfer, getAccount, getToken, setAccount } from './entityUtils';
import { Context } from '../processor';

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
  const { block, event, from, to, value, tokenId, contractStandard, ctx } =
    props;

  const fromAccount = await getAccount(from, ctx.store);
  const toAccount = await getAccount(to, ctx.store);

  const transfer = new Transfer({
    id: event.evmTxHash,
    blockNumber: BigInt(block.height),
    timestamp: new Date(block.timestamp),
    eventIndex: event.indexInBlock,
    from: fromAccount,
    to: toAccount,
    token: await getToken({
      contractAddress: event.args.address,
      contractStandard,
      tokenId,
      ctx
    }),
    amount: value ? BigInt(value.toString()) : null
  });

  fromAccount.transfersSentCount += 1;
  fromAccount.transfersTotalCount += 1;

  toAccount.transfersReceivedCount += 1;
  toAccount.transfersTotalCount += 1;

  setAccount(fromAccount);
  setAccount(toAccount);

  addTransfer(transfer);
}
