import { Account, ContractStandard, Token } from '../model';
import { ethers } from 'ethers';
import * as erc20 from '../abi/erc20';
import * as erc721 from '../abi/erc721';
import { getContract } from '../contract';

export function createAccount(id: string): Account {
  return new Account({
    transfersTotalCount: 0,
    transfersSentCount: 0,
    transfersReceivedCount: 0,
    id
  });
}

export async function createToken(
  tokenId: string,
  contractAddress: string,
  contractStandard: ContractStandard
): Promise<Token> {
  let abi: ethers.utils.Interface;
  switch (contractStandard) {
    case ContractStandard.ERC20:
      abi = erc20.abi;
      break;
    case ContractStandard.ERC721:
      abi = erc721.abi;
      break;
  }

  if (!abi) throw new Error();

  const contractInst = await getContract(contractAddress, abi);
  if (!contractInst) throw new Error();

  return new Token({
    id: tokenId,
    name: await contractInst.name(),
    symbol: await contractInst.symbol(),
    decimals:
      contractStandard === ContractStandard.ERC20
        ? await contractInst.decimals()
        : null,
    contractStandard,
    contractAddress
  });
}
