import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddAppTable1726583797621 implements MigrationInterface {
  name = 'AddAppTable1726583797621';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "app_entity" (
                "id" SERIAL NOT NULL,
                "name" character varying NOT NULL,
                CONSTRAINT "PK_785e980b5ae9d53bf5e6dc74c85" PRIMARY KEY ("id")
            )
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DROP TABLE "app_entity"
        `);
  }
}
