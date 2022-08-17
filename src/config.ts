require('dotenv').config();

export const batchSize = process.env.BATCH_SIZE
  ? parseInt(process.env.BATCH_SIZE)
  : 30;

export const contractCallTimeout = process.env.CONTRACT_CALL_TIMEOUT
    ? parseInt(process.env.CONTRACT_CALL_TIMEOUT)
    : 10;

export const chainNode =
  process.env.CHAIN_NODE || 'wss://moonbeam.api.onfinality.io/public-ws';

export const archiveName = 'moonbeam'
export const typesBundleName = 'moonbeam'

