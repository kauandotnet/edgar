import {MigrationInterface, QueryRunner} from "typeorm";

export class UserHouse1590486686008 implements MigrationInterface {
    name = 'UserHouse1590486686008'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "house" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "PK_8c9220195fd0a289745855fe908" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "email" character varying NOT NULL, "apiToken" text, "password" character varying NOT NULL, "currentHouseId" uuid, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "api-token" ON "user" ("apiToken") `);
        await queryRunner.query(`CREATE TYPE "user_house_role_enum" AS ENUM('ROLE_OWNER', 'ROLE_GUEST')`);
        await queryRunner.query(`CREATE TABLE "user_house" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "role" "user_house_role_enum" NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, "houseId" uuid NOT NULL, "userId" uuid NOT NULL, CONSTRAINT "PK_377ac48e9144269163aaeeba389" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "voucher_role_enum" AS ENUM('ROLE_OWNER', 'ROLE_GUEST')`);
        await queryRunner.query(`CREATE TABLE "voucher" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "code" character varying NOT NULL, "username" character varying NOT NULL, "role" "voucher_role_enum" NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, "houseId" uuid NOT NULL, "userId" uuid NOT NULL, CONSTRAINT "PK_677ae75f380e81c2f103a57ffaf" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_9193429e70a5168bbbeb54c1e69" FOREIGN KEY ("currentHouseId") REFERENCES "house"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_house" ADD CONSTRAINT "FK_db876abe7acfa9c963593a96d50" FOREIGN KEY ("houseId") REFERENCES "house"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_house" ADD CONSTRAINT "FK_782c389a1831c1ccf38e4453acb" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "voucher" ADD CONSTRAINT "FK_956ccbb4a7127de91aaf131ea88" FOREIGN KEY ("houseId") REFERENCES "house"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "voucher" ADD CONSTRAINT "FK_80a57d757e0be8225f261c7994f" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "voucher" DROP CONSTRAINT "FK_80a57d757e0be8225f261c7994f"`);
        await queryRunner.query(`ALTER TABLE "voucher" DROP CONSTRAINT "FK_956ccbb4a7127de91aaf131ea88"`);
        await queryRunner.query(`ALTER TABLE "user_house" DROP CONSTRAINT "FK_782c389a1831c1ccf38e4453acb"`);
        await queryRunner.query(`ALTER TABLE "user_house" DROP CONSTRAINT "FK_db876abe7acfa9c963593a96d50"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_9193429e70a5168bbbeb54c1e69"`);
        await queryRunner.query(`DROP TABLE "voucher"`);
        await queryRunner.query(`DROP TYPE "voucher_role_enum"`);
        await queryRunner.query(`DROP TABLE "user_house"`);
        await queryRunner.query(`DROP TYPE "user_house_role_enum"`);
        await queryRunner.query(`DROP INDEX "api-token"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "house"`);
    }

}
