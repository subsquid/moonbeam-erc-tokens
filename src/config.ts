require('dotenv').config();

export const dbName = process.env.DB_NAME || 'super_api_erc20';
export const dbUser = process.env.DB_USER || 'dev';
export const dbPass = process.env.DB_PASS || 'qweasdzxc1';
export const dbHost = process.env.DB_HOST || 'localhost';
export const dbPort = parseInt(process.env.DB_PORT || '') || 5432;
export const batchSize = process.env.BATCH_SIZE
  ? parseInt(process.env.BATCH_SIZE)
  : 50;

export const erc20ContractAddr = '0x0000000000000000000000000000000000000802';
export const avaxContractAddr = '0x4792C1EcB969B036eb51330c63bD27899A13D84e';

export const chainNode =
  process.env.CHAIN_NODE || 'wss://wss.api.moonbeam.network';

export const indexerEndpointUrl =
  process.env.INDEXER_ENDPOINT_URL ||
  'https://moonbeam.archive.subsquid.io/graphql';

export const warningLogsTrace = process.env.WARNING_LOGS_TRACE || 'true';
export const eventLogsTrace = process.env.EVENT_LOGS_TRACE || 'false';
