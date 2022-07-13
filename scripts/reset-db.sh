set -e
npx squid-typeorm-codegen
npm run build
rm -rf db/migrations/*.js
npx docker-compose down
sleep 3
npx docker-compose up -d
sleep 5
npx squid-typeorm-migration generate
npx squid-typeorm-migration apply