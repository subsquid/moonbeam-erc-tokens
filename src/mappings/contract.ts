import { ethers } from 'ethers';
import { chainNode } from '../config';

const contractsInstances = new Map<string, ethers.Contract>();
const wsProvider = new ethers.providers.WebSocketProvider(chainNode);

export const getContract = (
  address: string,
  contractAbi: ethers.utils.Interface
): ethers.Contract | undefined => {
  if (contractsInstances.has(address))
    return contractsInstances.get(address);

  contractsInstances.set(
    address,
    new ethers.Contract(
      address.toLowerCase(),
      contractAbi,
      wsProvider
    )
  );
  return contractsInstances.get(address)
};
