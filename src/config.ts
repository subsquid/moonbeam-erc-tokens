require('dotenv').config();

export const batchSize = process.env.BATCH_SIZE
  ? parseInt(process.env.BATCH_SIZE)
  : 100;

export const chainNode =
  process.env.CHAIN_NODE || 'wss://wss.api.moonbeam.network';

export const indexerEndpointUrl =
  process.env.INDEXER_ENDPOINT_URL ||
  'https://moonbeam.archive.subsquid.io/graphql';
