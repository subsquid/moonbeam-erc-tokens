set -e
npx squid-typeorm-codegen
npm run build
./reset-db.sh