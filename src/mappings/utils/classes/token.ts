import {
  Account,
  Collection,
  ContractStandard,
  FToken,
  NfToken
} from '../../../model';
import { SubstrateBlock } from '@subsquid/substrate-processor';
import { createFToken, createNfToken } from '../../tokens';
import { BigNumber } from 'ethers';
import { getTokenEntityId } from '../common';
import { EntitiesManager } from './common';
import { getTokenDetails } from '../../tokens/utils';

/**
 * ::::::::::::: ERC20 TOKEN :::::::::::::
 */
export class FTokenManager extends EntitiesManager<FToken> {
  constructor(entity: typeof FToken) {
    super({ entity });
  }

  async getOrCreate({
    contractAddress,
    contractStandard
  }: {
    contractAddress: string;
    contractStandard: ContractStandard;
  }): Promise<FToken> {
    if (!this.context) throw new Error('context is not defined');
    let token = await this.get(contractAddress);

    if (!token || (token && (!token.name || !token.symbol))) {
      token = await createFToken({
        ctx: this.context,
        contractAddress,
        contractStandard
      });
    } else if (token && (!token.name || !token.symbol)) {
      const tokenDetails = await getTokenDetails({
        contractAddress,
        contractStandard,
        ctx: this.context
      });
      token.name = tokenDetails.name;
      token.symbol = tokenDetails.symbol;
    }
    this.add(token);

    return token;
  }
}

/**
 * ::::::::::::: ERC721/ERC1155 TOKEN :::::::::::::
 */
export class NfTokenManager extends EntitiesManager<NfToken> {
  constructor(entity: typeof NfToken) {
    super({ entity });
  }

  async getOrCreate({
    id,
    contractAddress,
    contractStandard,
    owner
  }: {
    id: BigNumber;
    contractAddress: string;
    contractStandard: ContractStandard;
    owner: Account;
  }): Promise<NfToken> {
    if (!this.context) throw new Error('context is not defined');

    const tokenEntityId = getTokenEntityId(contractAddress, id.toString());
    let token = await this.get(tokenEntityId, {
      currentOwner: true,
      collection: true
    });

    if (!token || (token && (!token.name || !token.symbol))) {
      token = await createNfToken({
        id: tokenEntityId,
        nativeId: id,
        ctx: this.context,
        contractAddress,
        contractStandard,
        owner
      });
    }

    this.add(token);

    return token;
  }
}
