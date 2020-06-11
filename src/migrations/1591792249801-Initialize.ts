import { MigrationInterface, QueryRunner } from 'typeorm';

export class Initialize1591792249801 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        # CREATE USER homepage_api IDENTIFIED WITH mysql_native_password BY 'HomepageApi2020!';
        # CREATE DATABASE homepage;
        # GRANT ALL ON homepage.* TO homepage_api;
        # FLUSH PRIVILEGES;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        # DROP USER homepage_api;
        # DROP DATABASE homepage;
    `);
  }
}
