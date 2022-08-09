import { ContractStandard, FToken } from '../../model';
import { Context } from '../../processor';
import { getTokenDetails } from './utils';

export async function createFToken({
  contractAddress,
  contractStandard,
  ctx
}: {
  contractAddress: string;
  contractStandard: ContractStandard;
  ctx: Context;
}): Promise<FToken> {
  const { name, symbol, decimals } = await getTokenDetails({
    contractAddress,
    contractStandard,
    ctx
  });

  return new FToken({
    id: contractAddress,
    name,
    symbol,
    decimals
  });
}