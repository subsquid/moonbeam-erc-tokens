import { ethers } from 'ethers';
import { chainNode } from './config';

const contractsInstances = new Map<string, ethers.Contract>();

export const getContract = (
  address: string,
  contractAbi: ethers.utils.Interface
): Promise<ethers.Contract | undefined> => {
  if (contractsInstances.has(address))
    return Promise.resolve(contractsInstances.get(address));

  return new Promise((res) => {
    /**
     * This timeout is required to avoid WebSocket error 429 (too many requests)
     * during first processed blocks, when processor makes calls to contracts for
     * fetching details for new (not saved in DB) tokens.
     */
    setTimeout(() => {
      contractsInstances.set(
        address,
        new ethers.Contract(
          address.toLowerCase(),
          contractAbi,
          new ethers.providers.WebSocketProvider(chainNode)
        )
      );
      res(contractsInstances.get(address));
    }, 2000);
  });
};
