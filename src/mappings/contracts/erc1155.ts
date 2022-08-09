import { Contract as Erc1155Contract } from '../../abi/erc1155';
import { Context } from '../../processor';
import * as utils from '../utils';

export function getContractErc1155({
  ctx,
  contractAddress
}: {
  ctx: Context;
  contractAddress: string;
}): Erc1155Contract {
  const block = utils.common.blockContextManager.getCurrentBlock();
  return new Erc1155Contract(
    { _chain: ctx._chain, block: { height: block.height } },
    contractAddress
  );
}
