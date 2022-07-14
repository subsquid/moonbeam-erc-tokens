import { Account, ContractStandard, Token, Transfer } from '../model';
import { Store } from '@subsquid/typeorm-store';
import * as helpers from './helpers';
import { getNftId, getTokenId } from './utils';
import { Context } from '../processor';

const accounts: Map<string, Account> = new Map();
const tokens: Map<string, Token> = new Map();
const transfers: Map<string, Transfer> = new Map();

export async function getAccount(id: string, store: Store): Promise<Account> {
  let account = accounts.get(id);

  if (!account) {
    account = await store.get(Account, id);
    if (!account) {
      account = helpers.createAccount(id);
    }
    setAccount(account);
  }

  return account;
}

export function setAccount(account: Account): void {
  accounts.set(account.id, account);
}

export async function getToken({
  tokenId,
  contractAddress,
  contractStandard,
  ctx
}: {
  tokenId?: string;
  contractAddress: string;
  contractStandard: ContractStandard;
  ctx: Context;
}): Promise<Token> {
  const currentTokenId = tokenId ? getNftId(contractAddress, tokenId): getTokenId(contractAddress);
  let token = tokens.get(currentTokenId);

  if (!token) {
    token = await ctx.store.get(Token, currentTokenId);
    if (!token) {
      token = await helpers.createToken(
        currentTokenId,
        contractAddress,
        contractStandard
      );
    }
    tokens.set(token.id, token);
  }

  return token;
}

export function addTransfer(transfer: Transfer) {
  transfers.set(transfer.id, transfer);
}

export async function saveAll(ctx: Context): Promise<void> {
  await ctx.store.save([...accounts.values()]);
  await ctx.store.save([...tokens.values()]);
  await ctx.store.save([...transfers.values()]);
  accounts.clear();
  tokens.clear();
  transfers.clear();
}
