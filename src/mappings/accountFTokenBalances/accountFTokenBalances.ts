import { Account, AccountFTokenBalance, FToken } from '../../model';
import * as utils from '../utils';
import { getAccountFTokenBalanceEntityId } from '../utils/common';

export function createAccountFTokenBalances({
  account,
  token,
  amount
}: {
  account: Account;
  token: FToken;
  amount: bigint;
}): AccountFTokenBalance {
  const block = utils.common.blockContextManager.getCurrentBlock();

  return new AccountFTokenBalance({
    id: getAccountFTokenBalanceEntityId(account.id, token.id),
    token,
    account,
    amount,
    updatedAt: new Date(block.timestamp),
    updatedAtBlock: BigInt(block.height.toString())
  });
}
