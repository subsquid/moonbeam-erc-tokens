import { Account, ContractStandard, Token, Transfer } from '../model';
import * as helpers from './helpers';
import { getTokenEntityId } from './utils';
import { Context } from '../processor';
import { EntityManagerItem } from '../common/types';

class EntitiesManager {
  private context: Context | null = null;

  private entitiesScope: {
    [key in EntityManagerItem]: Map<string, Transfer | Account | Token>;
  } = {
    [EntityManagerItem.account]: new Map(),
    [EntityManagerItem.token]: new Map(),
    [EntityManagerItem.transfer]: new Map()
  };

  get isInitialized() {
    return !!this.context;
  }

  init(ctx: Context) {
    this.context = ctx;

    return this;
  }

  add(entityName: EntityManagerItem, entity: Transfer | Account | Token) {
    this.entitiesScope[entityName].set(entity.id, entity);
  }

  get({
    entityName,
    id,
    contractAddress,
    contractStandard,
    blockHeight
  }: {
    entityName: EntityManagerItem;
    id?: string;
    contractAddress?: string;
    contractStandard?: ContractStandard;
    blockHeight?: number;
  }): Promise<Transfer | Account | Token> {
    switch (entityName) {
      case EntityManagerItem.account:
        if (!id) throw new Error();
        return this.getAccount(id);
      case EntityManagerItem.token:
        if (!contractAddress || !contractStandard || blockHeight === undefined)
          throw new Error();
        return this.getToken({
          id,
          contractAddress,
          contractStandard,
          blockHeight
        });
      default:
        throw new Error();
    }
  }

  private async getAccount(id: string) {
    if (!this.context) throw new Error();
    let account = this.entitiesScope[EntityManagerItem.account].get(id);

    if (!account) {
      account = await this.context.store.get(Account, id);
      if (!account) {
        account = helpers.createAccount(id);
      }
      this.add(EntityManagerItem.account, account);
    }

    return account;
  }

  private async getToken({
    id,
    contractAddress,
    contractStandard,
    blockHeight
  }: {
    id?: string;
    contractAddress: string;
    contractStandard: ContractStandard;
    blockHeight: number;
  }) {
    if (!this.context) throw new Error();
    const currentTokenId = getTokenEntityId(contractAddress, id);
    let token = this.entitiesScope[EntityManagerItem.token].get(currentTokenId);

    if (!token) {
      token = await this.context.store.get(Token, currentTokenId);
      if (!token || (token && (!token.name || !token.symbol))) {
        token = await helpers.createToken({
          tokenId: currentTokenId,
          ctx: this.context,
          contractAddress,
          contractStandard,
          blockHeight
        });
      }
      this.add(EntityManagerItem.token, token);
    }

    return token;
  }

  async saveAll() {
    if (!this.context) throw new Error();
    let entityGroupName: EntityManagerItem;
    for (entityGroupName in this.entitiesScope) {
      if (!this.entitiesScope || !this.entitiesScope[entityGroupName]) return;
      await this.context.store.save([
        ...this.entitiesScope[entityGroupName]!.values()
      ]);
      this.entitiesScope[entityGroupName]!.clear();
    }
  }
}

export const entitiesManager = new EntitiesManager();
