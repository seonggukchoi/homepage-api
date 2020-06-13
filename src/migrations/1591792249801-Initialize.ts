import { MigrationInterface, QueryRunner } from 'typeorm';

export class Initialize1591792249801 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      # CREATE USER homepage_api IDENTIFIED WITH mysql_native_password BY 'HomepageApi2020!';
      # CREATE DATABASE homepage;
      # GRANT ALL ON homepage.* TO homepage_api;
      # FLUSH PRIVILEGES;

      CREATE TABLE organizations (
        id int NOT NULL AUTO_INCREMENT,
        name varchar(50) NOT NULL,
        url text,
        created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        PRIMARY KEY (id)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

      CREATE TABLE projects (
        id int NOT NULL AUTO_INCREMENT,
        order int NOT NULL DEFAULT '9999',
        name varchar(50) NOT NULL,
        description text,
        from date DEFAULT NULL,
        to date DEFAULT NULL,
        status enum('left','progress') NOT NULL,
        created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        PRIMARY KEY (id)
      ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

      CREATE TABLE stacks (
        id int NOT NULL AUTO_INCREMENT,
        name varchar(50) NOT NULL,
        created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        PRIMARY KEY (id)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

      CREATE TABLE project_roles (
        id int NOT NULL AUTO_INCREMENT,
        name varchar(50) NOT NULL,
        contribution_percentage int NOT NULL,
        from date DEFAULT NULL,
        to date DEFAULT NULL,
        created_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
        updated_at datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        projectId int DEFAULT NULL,
        PRIMARY KEY (id),
        KEY FK_c289c4af5520c6aa2a41ddfe2e9 (projectId),
        CONSTRAINT FK_c289c4af5520c6aa2a41ddfe2e9 FOREIGN KEY (projectId) REFERENCES projects (id)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

      CREATE TABLE projects_organizations_organizations (
        projectsId int NOT NULL,
        organizationsId int NOT NULL,
        PRIMARY KEY (projectsId,organizationsId),
        KEY IDX_f122d1c337ff24ac65791c592c (projectsId),
        KEY IDX_28b4cd0bd966cc134625f07b80 (organizationsId),
        CONSTRAINT FK_28b4cd0bd966cc134625f07b80b FOREIGN KEY (organizationsId) REFERENCES organizations (id) ON DELETE CASCADE,
        CONSTRAINT FK_f122d1c337ff24ac65791c592ca FOREIGN KEY (projectsId) REFERENCES projects (id) ON DELETE CASCADE
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

      CREATE TABLE projects_stacks_stacks (
        projectsId int NOT NULL,
        stacksId int NOT NULL,
        PRIMARY KEY (projectsId,stacksId),
        KEY IDX_2ca8f742be8e7f39a188186368 (projectsId),
        KEY IDX_0801374b48813a2ef32ef3f0f5 (stacksId),
        CONSTRAINT FK_0801374b48813a2ef32ef3f0f53 FOREIGN KEY (stacksId) REFERENCES stacks (id) ON DELETE CASCADE,
        CONSTRAINT FK_2ca8f742be8e7f39a188186368a FOREIGN KEY (projectsId) REFERENCES projects (id) ON DELETE CASCADE
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      # DROP USER homepage_api;
      # DROP DATABASE homepage;

      DROP TABLE organizations;
      DROP TABLE projects;
      DROP TABLE stacks;
      DROP TABLE project_roles;
      DROP TABLE projects_organizations_organizations;
      DROP TABLE projects_stacks_stacks;
    `);
  }
}
