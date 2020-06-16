/* eslint-disable */

module.exports = {
  application: {
    port: 20000,
    cors: true,
  },
  database: {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'homepage_api',
    password: 'HomepageApi2020!',
    database: 'homepage',
    migrationsTableName: '_migrations',
    migrations: ['./dist/migrations/*.js'],
    synchronize: true,
    logging: ['query', 'error'],
    extra: {
      connectionLimit: 30,
    },
    cli: {
      migrationsDir: 'migrations',
    },
  },
};
