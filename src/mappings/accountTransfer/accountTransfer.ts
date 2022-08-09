import {
  AccountNftTransfer,
  AccountFtTransfer,
  TransferDirection,
  Account,
  FtTransfer,
  NftTransfer
} from '../../model';
import { getAccountTransferEntityId } from '../utils/common';

export function createAccountFtTransfer(
  account: Account,
  transfer: FtTransfer,
  direction: TransferDirection
): AccountFtTransfer {
  return new AccountFtTransfer({
    id: getAccountTransferEntityId(account.id, transfer.id),
    transfer,
    account,
    direction
  });
}

export function createAccountNftTransfer(
  account: Account,
  transfer: NftTransfer,
  direction: TransferDirection
): AccountNftTransfer {
  return new AccountNftTransfer({
    id: getAccountTransferEntityId(account.id, transfer.id),
    transfer,
    account,
    direction
  });
}
