import {
  Account,
  AccountFTokenBalance,
  ContractStandard,
  FToken
} from '../../../model';
import { EntitiesManager } from './common';
import { createAccountFTokenBalances } from '../../accountFTokenBalances';
import { getAccountFTokenBalanceEntityId } from '../common';
import { FTokenBalanceAction } from '../../../common/types';
import { getTokenBalanceOf } from '../../tokens/utils';

export class AccountFTokenBalancesManager extends EntitiesManager<AccountFTokenBalance> {
  constructor(entity: typeof AccountFTokenBalance) {
    super({ entity });
  }

  async updateFTokenBalance({
    account,
    token,
    contractAddress,
    amount,
    action
  }: {
    account: Account;
    token: FToken;
    contractAddress: string;
    amount: bigint;
    action: FTokenBalanceAction;
  }): Promise<void> {
    const accountBalanceId = getAccountFTokenBalanceEntityId(
      account.id,
      token.id
    );

    let existingAccountBalance = await this.get(accountBalanceId, {
      token: true,
      account: true
    });

    if (!existingAccountBalance) {
      existingAccountBalance = await this.getOrCreate({
        id: accountBalanceId,
        account,
        token,
        contractAddress
      });
    } else {
      switch (action) {
        case FTokenBalanceAction.add:
          existingAccountBalance.amount += amount;
          break;
        case FTokenBalanceAction.sub:
          existingAccountBalance.amount -= amount;
          break;
        default:
      }
    }

    this.add(existingAccountBalance);
  }

  async getOrCreate({
    id = null,
    account,
    token,
    contractAddress
  }: {
    id?: string | null;
    account: Account;
    token: FToken;
    contractAddress: string;
  }): Promise<AccountFTokenBalance> {
    if (!this.context) throw new Error('context is not defined');

    let accountFTokenBalance = id ? await this.get(id) : null;

    if (!accountFTokenBalance) {
      accountFTokenBalance = createAccountFTokenBalances({
        account,
        token,
        amount: await getTokenBalanceOf({
          accountAddress: account.id,
          contractAddress,
          contractStandard: ContractStandard.ERC20,
          ctx: this.context
        })
      });
    }

    return accountFTokenBalance;
  }
}
