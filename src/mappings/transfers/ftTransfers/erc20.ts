import * as erc20 from '../../../abi/erc20';
import * as utils from '../../utils';
import { TransferDirection } from '../../../model';
import { FTokenBalanceAction } from '../../../common/types';

export async function handleErc20Transfer(): Promise<void> {
  const event = utils.common.blockContextManager.getCurrentEvent();

  const {
    from,
    to,
    value: amount
  } = erc20.events['Transfer(address,address,uint256)'].decode(event.args);

  const transfer = await utils.entity.ftTransferManager.getOrCreate({
    amount,
    from,
    to
  });

  await utils.entity.accountsFtTransferManager.getOrCreate({
    account: transfer.from,
    direction: TransferDirection.From,
    transfer
  });

  await utils.entity.accountFTokenBalancesManager.updateFTokenBalance({
    account: transfer.from,
    token: transfer.token,
    contractAddress: event.args.address,
    amount: BigInt(amount.toString()),
    action: FTokenBalanceAction.sub
  });

  await utils.entity.accountsFtTransferManager.getOrCreate({
    account: transfer.to,
    direction: TransferDirection.To,
    transfer
  });

  await utils.entity.accountFTokenBalancesManager.updateFTokenBalance({
    account: transfer.to,
    token: transfer.token,
    contractAddress: event.args.address,
    amount: BigInt(amount.toString()),
    action: FTokenBalanceAction.add
  });
}
