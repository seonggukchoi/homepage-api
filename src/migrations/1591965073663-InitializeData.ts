import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitializeData1591965073663 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO \`homepage\`.\`projects\` (\`order\`, \`name\`, \`description\`, \`from\`, \`to\`, \`status\`) VALUES 
      (0, 'Homepage', 'Published homepage for introducing myself.', '2019-08-13', NULL, 'progress'),
      (1, 'Sodam Auth', 'Integrated authentication server for Project Sodam', '2019-10-06', NULL, 'progress'),
      (9999, 'ONDA Easysell', NULL,'2017-11-01', '2018-12-14', 'left'),
      (9999, 'ONDA Plus', 'ONDA Pension PMS', '2018-02-04', '2018-11-30', 'left'),
      (2, 'ONDA Wave', 'ONDA B&B/Guest House PMS', '2019-01-02', NULL, 'progress'),
      (3, 'ONDA CMS', 'ONDA Channel Manager Service integrating with ONDA products', '2020-02-02', NULL, 'progress');

      INSERT INTO \`homepage\`.\`project_roles\` (\`name\`, \`contribution_percentage\`, \`from\`, \`to\`, \`projectId\`) VALUES 
      ('Front-End Developer', 100, '2019-08-13', NULL, 1),
      ('Back-End Developer', 100, '2020-04-26', NULL, 1),
      ('Web Designer', 100, '2019-08-13', NULL, 1),
      ('Back-End Developer', 100, '2019-10-06', NULL, 2),
      ('Front-End Developer', 30, '2019-01-02', NULL, 5),
      ('Back-End Developer', 50, '2019-01-02', NULL, 5),
      ('Back-End Developer', 40, '2020-02-02', NULL, 6),
      ('Front-End Developer', 70, '2017-11-01', '2018-12-14', 3),
      ('Back-End Developer', 40, '2018-02-01', '2018-12-14', 3),
      ('Front-End Developer', 40, '2018-02-04', '2018-11-30', 4),
      ('Back-End Developer', 30, '2018-03-01', '2018-11-30', 4);

      INSERT INTO \`homepage\`.\`stacks\` (\`name\`) VALUES 
      ('Angular'), ('Apollo'), ('Express.js'), ('GraphQL'), ('MySQL'),
      ('Nest.js'), ('Node.js'), ('PostgreSQL'), ('Rx.js'), ('Sequelize.js'),
      ('TypeORM'), ('TypeScript'), ('Vue.js'), ('Vuex');

      INSERT INTO \`homepage\`.\`organizations\` (\`name\`, \`url\`) VALUES 
      ('T Port Inc.', 'https://onda.me');

      INSERT INTO \`homepage\`.\`projects_stacks_stacks\` (\`projectsId\`, \`stacksId\`) VALUES 
      (1,5), (1,6), (1,7), (1,11), (1,12), (1,13), (1,14),
      (2,5), (2,6), (2,7), (2,11), (2,12), (3,1),
      (3,2), (3,4), (3,5), (3,7), (3,9), (3,10), (3,12),
      (4,1), (4,2), (4,4), (4,5), (4,7), (4,9), (4,10), (4,12),
      (5,3), (5,5), (5,6), (5,7), (5,8), (5,10), (5,11), (5,12), (5,13), (5,14),
      (6,3), (6,5), (6,7), (6,11), (6,12);

      INSERT INTO \`homepage\`.\`projects_organizations_organizations\` (\`projectsId\`, \`organizationsId\`) VALUES
      (3, 1), (4, 1), (5, 1), (6, 1);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      TRUNCATE TABLE organizations;
      TRUNCATE TABLE projects;
      TRUNCATE TABLE stacks;
      TRUNCATE TABLE project_roles;
      TRUNCATE TABLE projects_organizations_organizations;
      TRUNCATE TABLE projects_stacks_stacks;
    `);
  }
}
