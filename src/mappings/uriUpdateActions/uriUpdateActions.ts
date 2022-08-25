import { NfToken, UriUpdateAction } from '../../model';
import * as utils from '../utils';
import * as erc1155 from '../../abi/erc1155';
import { getTokenEntityId } from '../utils/common';

export function createUriUpdateActions({
  id,
  token,
  newValue,
  oldValue
}: {
  id: string;
  token: NfToken;
  newValue: string | null;
  oldValue: string | null;
}): UriUpdateAction {
  const block = utils.common.blockContextManager.getCurrentBlock();
  const event = utils.common.blockContextManager.getCurrentEvent();

  return new UriUpdateAction({
    id,
    token,
    newValue,
    oldValue,
    timestamp: new Date(block.timestamp),
    blockNumber: BigInt(block.height.toString()),
    txnHash: event.evmTxHash
  });
}

export async function handleErc1155UriChanged(): Promise<void> {
  const event = utils.common.blockContextManager.getCurrentEvent();

  const { id, value } = erc1155.events['URI(string,uint256)'].decode(
    event.args
  );

  const token = await utils.entity.nfTokenManager.get(
    getTokenEntityId(event.args.address, id.toString()),
    {
      currentOwner: true,
      collection: true
    }
  );

  if (!token) throw new Error('Token is not existing.');

  const oldUriVal = token.uri || null;
  token.uri = value;

  await utils.entity.uriUpdateActionsManager.getOrCreate(
    event.id,
    token,
    value,
    oldUriVal
  );

  utils.entity.nfTokenManager.add(token);
}
