export enum EntityManagerItem {
  account = 'account',
  token = 'token',
  transfer = 'transfer'
}

export enum FTokenBalanceAction {
  add = 'add',
  sub = 'sub'
}

export type TokenDetails = {
  name: string | null;
  symbol: string | null;
  decimals: number | null;
  uri: string | null;
};
