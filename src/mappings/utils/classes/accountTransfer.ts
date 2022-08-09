import {
  Account,
  AccountFtTransfer,
  AccountNftTransfer,
  FtTransfer,
  NftTransfer,
  TransferDirection
} from '../../../model';
import { EntitiesManager } from './common';
import {
  createAccountFtTransfer,
  createAccountNftTransfer
} from '../../accountTransfer';

export class AccountsFtTransferManager extends EntitiesManager<AccountFtTransfer> {
  async getOrCreate({
    id = null,
    account,
    transfer,
    direction
  }: {
    id?: string | null;
    account: Account;
    transfer: FtTransfer;
    direction: TransferDirection;
  }): Promise<AccountFtTransfer> {
    if (!this.context) throw new Error('context is not defined');
    let accountTransfer = id ? await this.get(AccountFtTransfer, id) : null;

    if (!accountTransfer) {
      accountTransfer = createAccountFtTransfer(account, transfer, direction);
    }
    this.add(accountTransfer);

    return accountTransfer;
  }
}

export class AccountsNftTransferManager extends EntitiesManager<AccountNftTransfer> {
  async getOrCreate({
    id = null,
    account,
    transfer,
    direction
  }: {
    id?: string | null;
    account: Account;
    transfer: NftTransfer;
    direction: TransferDirection;
  }): Promise<AccountNftTransfer> {
    if (!this.context) throw new Error('context is not defined');
    let accountTransfer = id ? this.entitiesMap.get(id) : null;

    if (!accountTransfer) {
      accountTransfer = id
        ? await this.context.store.get(AccountNftTransfer, id)
        : null;
      if (!accountTransfer) {
        accountTransfer = createAccountNftTransfer(
          account,
          transfer,
          direction
        );
      }
      this.add(accountTransfer);
    }

    return accountTransfer;
  }
}
