module.exports = class Data1658325969079 {
  name = 'Data1658325969079'

  async up(db) {
    await db.query(`CREATE TABLE "token" ("id" character varying NOT NULL, "name" text NOT NULL, "symbol" text NOT NULL, "decimals" integer, "contract_standard" character varying(6), "contract_address" text NOT NULL, CONSTRAINT "PK_82fae97f905930df5d62a702fc9" PRIMARY KEY ("id"))`)
    await db.query(`CREATE TABLE "transfer" ("id" character varying NOT NULL, "block_number" numeric NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "event_index" integer NOT NULL, "amount" numeric, "from_id" character varying NOT NULL, "to_id" character varying NOT NULL, "token_id" character varying, CONSTRAINT "PK_fd9ddbdd49a17afcbe014401295" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_76bdfed1a7eb27c6d8ecbb7349" ON "transfer" ("from_id") `)
    await db.query(`CREATE INDEX "IDX_0751309c66e97eac9ef1149362" ON "transfer" ("to_id") `)
    await db.query(`CREATE INDEX "IDX_b27b1150b8a7af68424540613c" ON "transfer" ("token_id") `)
    await db.query(`CREATE TABLE "account" ("id" character varying NOT NULL, "transfers_total_count" integer NOT NULL, "transfers_sent_count" integer NOT NULL, "transfers_received_count" integer NOT NULL, CONSTRAINT "PK_54115ee388cdb6d86bb4bf5b2ea" PRIMARY KEY ("id"))`)
    await db.query(`ALTER TABLE "transfer" ADD CONSTRAINT "FK_76bdfed1a7eb27c6d8ecbb73496" FOREIGN KEY ("from_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "transfer" ADD CONSTRAINT "FK_0751309c66e97eac9ef11493623" FOREIGN KEY ("to_id") REFERENCES "account"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    await db.query(`ALTER TABLE "transfer" ADD CONSTRAINT "FK_b27b1150b8a7af68424540613c7" FOREIGN KEY ("token_id") REFERENCES "token"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
  }

  async down(db) {
    await db.query(`DROP TABLE "token"`)
    await db.query(`DROP TABLE "transfer"`)
    await db.query(`DROP INDEX "public"."IDX_76bdfed1a7eb27c6d8ecbb7349"`)
    await db.query(`DROP INDEX "public"."IDX_0751309c66e97eac9ef1149362"`)
    await db.query(`DROP INDEX "public"."IDX_b27b1150b8a7af68424540613c"`)
    await db.query(`DROP TABLE "account"`)
    await db.query(`ALTER TABLE "transfer" DROP CONSTRAINT "FK_76bdfed1a7eb27c6d8ecbb73496"`)
    await db.query(`ALTER TABLE "transfer" DROP CONSTRAINT "FK_0751309c66e97eac9ef11493623"`)
    await db.query(`ALTER TABLE "transfer" DROP CONSTRAINT "FK_b27b1150b8a7af68424540613c7"`)
  }
}
