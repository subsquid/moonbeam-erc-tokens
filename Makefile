process: migrate
	@node -r dotenv/config lib/processor.js


serve:
	@npx squid-graphql-server


migrate:
	@npx squid-typeorm-migration apply


migration:
	@npx squid-typeorm-migration generate


build:
	@npm run build


codegen:
	@npx squid-typeorm-codegen

evmtypegen:
	@npx squid-evm-typegen --abi src/abi/erc20.json --output src/abi/erc20.ts

typegen: moonbeamVersions.json
	@npx squid-substrate-typegen ./typegen/typegen.json


moonbeamVersions.json:
	@make explore


explore:
	@npx squid-substrate-metadata-explorer \
		--chain wss://wss.api.moonbeam.network \
		--archive https://moonbeam.archive.subsquid.io/graphql \
		--out ./typegen/moonbeamVersions.jsonl


up:
	@docker-compose up -d


down:
	@docker-compose down


.PHONY: process serve start codegen migration migrate up down
