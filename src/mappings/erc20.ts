import { EvmLogEvent, SubstrateBlock } from '@subsquid/substrate-processor';
import * as erc20 from '../abi/erc20';
import { handleTransfer } from './transfer';
import { ContractStandard } from '../model';
import { Context } from '../processor';

export async function handleErc20Transfer(
  ctx: Context,
  block: SubstrateBlock,
  event: EvmLogEvent
): Promise<void> {
  const { from, to, value } = erc20.events[
    'Transfer(address,address,uint256)'
  ].decode(event.args);

  await handleTransfer({
    contractStandard: ContractStandard.ERC20,
    event,
    ctx,
    block,
    from,
    to,
    value
  });
}
