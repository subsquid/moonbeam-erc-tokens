import * as erc1155 from '../../../abi/erc1155';
import * as utils from '../../utils';
import { ContractStandard, TransferDirection } from '../../../model';

export async function handleErc1155TransferSingle(): Promise<void> {
  const event = utils.common.blockContextManager.getCurrentEvent();

  const {
    operator,
    from,
    to,
    id: tokenId,
    value: amount
  } = erc1155.events[
    'TransferSingle(address,address,address,uint256,uint256)'
  ].decode(event.args);

  const transfer = await utils.entity.nftTransferManager.getOrCreate({
    contractStandard: ContractStandard.ERC1155,
    isBatch: false,
    amount,
    tokenId,
    from,
    to,
    operator
  });

  await utils.entity.accountsNftTransferManager.getOrCreate({
    account: transfer.from,
    direction: TransferDirection.From,
    transfer
  });

  await utils.entity.accountsNftTransferManager.getOrCreate({
    account: transfer.to,
    direction: TransferDirection.To,
    transfer
  });
}

export async function handleErc1155TransferBatch(): Promise<void> {
  const event = utils.common.blockContextManager.getCurrentEvent();

  const { operator, from, to, ids, values } = erc1155.events[
    'TransferBatch(address,address,address,uint256[],uint256[])'
  ].decode(event.args);

  for (let i = 0; i < ids.length; i++) {
    const transfer = await utils.entity.nftTransferManager.getOrCreate({
      contractStandard: ContractStandard.ERC1155,
      isBatch: true,
      amount: values[i],
      tokenId: ids[i],
      from,
      to,
      operator
    });

    await utils.entity.accountsNftTransferManager.getOrCreate({
      account: transfer.from,
      direction: TransferDirection.From,
      transfer
    });

    await utils.entity.accountsNftTransferManager.getOrCreate({
      account: transfer.to,
      direction: TransferDirection.To,
      transfer
    });
  }
}
