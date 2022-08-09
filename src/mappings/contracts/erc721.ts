import { Contract as Erc721Contract } from '../../abi/erc721';
import { Context } from '../../processor';
import * as utils from '../utils';

export function getContractErc721({
  ctx,
  contractAddress
}: {
  ctx: Context;
  contractAddress: string;
}): Erc721Contract {
  const block = utils.common.blockContextManager.getCurrentBlock();
  return new Erc721Contract(
    { _chain: ctx._chain, block: { height: block.height } },
    contractAddress
  );
}
