import { TransferType } from '../../model';
import { BigNumber } from 'ethers';

export const EMPTY_ADDRESS = '0x0000000000000000000000000000000000000000';

export function getTokenEntityId(address: string, tokenId?: string): string {
  return `${address.substring(0, 6)}-${address.substring(
    address.length - 6,
    address.length
  )}${tokenId ? `-${tokenId}` : ''}`;
}

export function getNftTransferEntityId(
  eventId: string,
  tokenId: string
): string {
  return `${eventId}-${tokenId}`;
}

export function getAccountTransferEntityId(
  accountId: string,
  transferId: string
): string {
  return `${accountId}-${transferId}`;
}

export function getAccountFTokenBalanceEntityId(
  accountId: string,
  tokenId: string
): string {
  return `${accountId}-${tokenId}`;
}

export function isMint(from: string, to: string): boolean {
  return from === EMPTY_ADDRESS && to !== EMPTY_ADDRESS;
}

export function isBurn(from: string, to: string): boolean {
  return to === EMPTY_ADDRESS && from !== EMPTY_ADDRESS;
}

export function getTransferType(from: string, to: string): TransferType {
  if (isMint(from, to)) {
    return TransferType.MINT;
  }
  if (isBurn(from, to)) {
    return TransferType.BURN;
  }

  return TransferType.TRANSFER;
}

export function getTokenTotalSupply(
  currentAmount: bigint,
  newAmount: bigint,
  txType: TransferType
): bigint {
  let newValue = currentAmount;

  switch (txType) {
    case TransferType.MINT:
      newValue = BigInt(
        BigNumber.from(currentAmount).add(BigNumber.from(newAmount)).toString()
      );
      break;
    case TransferType.BURN:
      newValue = BigInt(
        BigNumber.from(currentAmount).sub(BigNumber.from(newAmount)).toString()
      );
      break;
    case TransferType.TRANSFER:
      /**
       * In case squid missed MINT event for particular token, we use fists occurred TRANSFER amount for initialization
       * of token total supply. It's more workaround cases when squid is starting not from first block.
       */
      if (currentAmount === BigInt(0)) {
        newValue = newAmount;
      }
      break;
    default:
  }

  return newValue >= BigInt(0) ? newValue : BigInt(0);
}

export function getTokenBurnedStatus(currentAmount: BigInt): boolean {
  return currentAmount <= BigInt(0);
}

export function* splitIntoBatches<T>(
  list: T[],
  maxBatchSize: number
): Generator<T[]> {
  if (list.length <= maxBatchSize) {
    yield list;
  } else {
    let offset = 0;
    while (list.length - offset > maxBatchSize) {
      yield list.slice(offset, offset + maxBatchSize);
      offset += maxBatchSize;
    }
    yield list.slice(offset);
  }
}
