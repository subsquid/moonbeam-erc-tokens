import { lookupArchive } from '@subsquid/archive-registry';
import { Store, TypeormDatabase } from '@subsquid/typeorm-store';
import {
  BatchContext,
  SubstrateBatchProcessor,
  BatchProcessorItem
} from '@subsquid/substrate-processor';
import * as erc20 from './abi/erc20';
import * as erc721 from './abi/erc721';
import * as erc1155 from './abi/erc1155';
import * as modules from './mappings';
import * as config from './config';
import * as utils from './mappings/utils';

const database = new TypeormDatabase();
const processor = new SubstrateBatchProcessor()
  .setBatchSize(config.batchSize)
  .setDataSource({
    chain: config.chainNode,
    archive: lookupArchive(config.archiveName, { release: 'FireSquid' })
  })
  .setTypesBundle(config.typesBundleName)
  .addEvmLog('*', {
    filter: [
      [
        erc20.events['Transfer(address,address,uint256)'].topic,
        erc721.events['Transfer(address,address,uint256)'].topic,
        erc1155.events[
          'TransferBatch(address,address,address,uint256[],uint256[])'
        ].topic,
        erc1155.events[
          'TransferSingle(address,address,address,uint256,uint256)'
        ].topic,
        erc1155.events['URI(string,uint256)'].topic
      ]
    ]
  });

type Item = BatchProcessorItem<typeof processor>;
export type Context = BatchContext<Store, Item>;

processor.run(database, async (ctx: Context) => {
  utils.entity.initAllEntityManagers(ctx);
  await utils.entity.prefetchEntities(ctx);

  for (const block of ctx.blocks) {
    for (const item of block.items) {
      if (item.name === 'EVM.Log') {
        utils.common.blockContextManager.init(block.header, item.event);
        switch ((item.event.args.log || item.event.args).topics[0]) {
          case erc20.events['Transfer(address,address,uint256)'].topic:
          case erc721.events['Transfer(address,address,uint256)'].topic:
            try {
              await modules.handleErc20Transfer();
            } catch (e) {
              try {
                await modules.handleErc721Transfer();
              } catch (error) {
                // console.log(error);
              }
            }
            break;
          case erc1155.events[
            'TransferBatch(address,address,address,uint256[],uint256[])'
          ].topic:
            await modules.handleErc1155TransferBatch();
            break;
          case erc1155.events[
            'TransferSingle(address,address,address,uint256,uint256)'
          ].topic:
            await modules.handleErc1155TransferSingle();
            break;
          case erc1155.events['URI(string,uint256)'].topic:
            await modules.handleErc1155UriChanged();
            break;
          default:
        }
        utils.common.blockContextManager.resetBlockContext();
      }
    }
  }

  await utils.entity.saveAllEntities();
});
