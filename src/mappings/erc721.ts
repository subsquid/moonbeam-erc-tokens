import { EvmLogEvent, SubstrateBlock } from '@subsquid/substrate-processor';
import * as erc721 from '../abi/erc721';
import { handleTransfer } from './transfer';
import { ContractStandard } from '../model';
import { Context } from '../processor';

export async function handleErc721Transfer(
  ctx: Context,
  block: SubstrateBlock,
  event: EvmLogEvent
): Promise<void> {
  const { from, to, tokenId } = erc721.events[
    'Transfer(address,address,uint256)'
  ].decode(event.args);

  await handleTransfer({
    contractStandard: ContractStandard.ERC721,
    tokenId: tokenId.toString(),
    event,
    ctx,
    block,
    from,
    to
  });
}
