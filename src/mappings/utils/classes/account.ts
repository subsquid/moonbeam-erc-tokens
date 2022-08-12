import { Account } from '../../../model';
import { createAccount } from '../../accounts';
import { EntitiesManager } from './common';

export class AccountsManager extends EntitiesManager<Account> {
  constructor(entity: typeof Account) {
    super({ entity });
  }

  async getOrCreate(id: string): Promise<Account> {
    if (!this.context) throw new Error('context is not defined');
    let account = await this.get(id);

    if (!account) {
      account = createAccount(id);
    }
    this.add(account);

    return account;
  }
}
