import { ethers } from 'ethers';
import { chainNode } from '../config';
import { Contract as Erc20Contract } from '../abi/erc20';
import { Contract as Erc721Contract } from '../abi/erc721';
import { ContractStandard } from '../model';
import { Context } from '../processor';

const contractsInstances = new Map<string, ethers.Contract>();
const wsProvider = new ethers.providers.WebSocketProvider(chainNode);

export const getContract = (
  address: string,
  contractAbi: ethers.utils.Interface
): ethers.Contract | undefined => {
  if (contractsInstances.has(address)) return contractsInstances.get(address);

  contractsInstances.set(
    address,
    new ethers.Contract(address.toLowerCase(), contractAbi, wsProvider)
  );
  return contractsInstances.get(address);
};

export const getContractInstance = ({
  blockHeight,
  ctx,
  contractAddress,
  contractStandard
}: {
  blockHeight: number;
  ctx: Context;
  contractAddress: string;
  contractStandard: ContractStandard;
}): Erc20Contract | Erc721Contract => {
  let Contract = null;

  switch (contractStandard) {
    case ContractStandard.ERC20:
      Contract = Erc20Contract;
      break;
    case ContractStandard.ERC721:
      Contract = Erc721Contract;
      break;
  }
  if (!Contract) throw new Error();

  return new Contract(
    { _chain: ctx._chain, block: { height: blockHeight } },
    contractAddress
  );
};
