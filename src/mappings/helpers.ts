import { Account, ContractStandard, Token } from '../model';
import { addTimeout } from '@subsquid/util-timeout';
import { getContractInstance } from './contract';
import { Context } from '../processor';

export function createAccount(id: string): Account {
  return new Account({
    transfersTotalCount: 0,
    transfersSentCount: 0,
    transfersReceivedCount: 0,
    id
  });
}

export async function createToken({
  tokenId,
  contractAddress,
  contractStandard,
  blockHeight,
  ctx
}: {
  tokenId: string;
  contractAddress: string;
  contractStandard: ContractStandard;
  blockHeight: number;
  ctx: Context;
}): Promise<Token> {
  const contractInst = getContractInstance({
    ctx,
    blockHeight,
    contractStandard,
    contractAddress
  });
  if (!contractInst) throw new Error();

  return new Token({
    id: tokenId,
    name: await addTimeout(contractInst.name(), 2),
    symbol: await addTimeout(contractInst.symbol(), 2),
    decimals:
      contractStandard === ContractStandard.ERC20 && 'decimals' in contractInst
        ? await addTimeout(contractInst.decimals(), 2)
        : null,
    contractStandard,
    contractAddress
  });
}
