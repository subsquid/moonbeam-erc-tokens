# Moonbeam ERC squid

This squid uses Firesquid framework version, 
[EVM logs indexing feature](https://docs.subsquid.io/develop-a-squid/squid-processor/evm-support) 
and [batch processing flow](https://docs.subsquid.io/develop-a-squid/squid-processor/batch-processor-in-action).

**It accumulates data about ERC20, ERC721, ERC1155 tokens, such as:**
- ERC20 token details;
- ERC721/ERC115 token details:
  - _token details;_
  - _token URI update events;_
- account details :
  - _transfers;_
  - _owned ERC721/ERC1155 tokens;_
  - _ERC20 token balances;_
- ERC20 token transfers;
- ERC721/ERC115 token transfers;

More details about data schema you can find in [schema.graphql](./schema.graphql) file.

**Tracked events:**
- `Transfer` - for ERC20 and ERC721
- `TransferSingle`, `TransferBatch`, `URI` - for ERC721 and ERC1155


### Particular qualities of implementation:

1) Squid is looking for all contracts which are fit to standards ERC20, ERC721, ERC1155 and not for 
any specific contract by address. As result, only standard events for these contract standards are 
tracked (`Transfer`, `TransferSingle`, `TransferBatch`, `URI`).
2) Some ERC721/ERC1155 token balances can be not quite accurate in current squid. Reason - some contracts has 
custom actions, which don't emit `Transfer` event. As result, squid logic cannot track token status changes
in such cases. However, ERC20 contract balances are accurate.
3) Some of ERC721 tokens can have `null` value of `name` and `symbol` fields during some period of time.
Reason - some contracts have these particular fields as editable fields and values are changing
after mint process. Squid logic checks on each `Transfer | TransferSingle | TransferBatch` event
if interacted token has `name` and `symbol` value. If not, actual data will be requested to the
appropriate contract.

## Prerequisites

* node >= 16.x
* docker

## Local running

```bash
# 1. Install dependencies
npm install

# 2. Generate types regarding spec versions from archive and configs in ./typegen/typegen.json
make typegen

# 3. Run script, which will 
#    - generate models based on schema.graphql file
#    - build project typescript source
#    - run docker container and configure Postgres DB there
npm run db:reset

# 4. Run processor
npm run processor:start

# 5. The above command will block the terminal
#    being busy with fetching the chain data, 
#    transforming and storing it in the target database.
#
#    To start the graphql server open the separate terminal
#    and run
npx squid-graphql-server
```

Fo more details `How to develop?`, check this [FAQ](./FAQ.md) or [this](https://github.com/subsquid/squid-evm-template) project template.