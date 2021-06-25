import {MigrationInterface, QueryRunner, TableCheck, TableColumn } from "typeorm";

export class AlterUserAddPassword1624621437715 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "users",
            new TableColumn(
                {
                    name: "password",
                    type: "varchar",
                    isNullable: true
                }
            )
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("users", "password");
    }

}
