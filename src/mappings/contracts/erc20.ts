import { Contract as Erc20Contract } from '../../abi/erc20';
import { Context } from '../../processor';
import * as utils from "../utils";

export function getContractErc20({
  ctx,
  contractAddress
}: {
  ctx: Context;
  contractAddress: string;
}): Erc20Contract {
  const block = utils.common.blockContextManager.getCurrentBlock();

  return new Erc20Contract(
    { _chain: ctx._chain, block: { height: block.height } },
    contractAddress
  );
}
