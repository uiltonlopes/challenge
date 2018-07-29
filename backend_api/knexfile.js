const conn = {
    host: '127.0.0.1',
    user: 'postgres',
    password: 'postgres',
    database: 'challenge',
    charset: 'utf8'
};

const options = {
    development: {
        client: 'pg',
        connection: conn,
        migrations: {
            directory: __dirname + '/db/migrations',
          },
        seeds: {
            directory: __dirname + '/db/seeds',
          },
      },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: __dirname + '/db/migrations',
          },
        seeds: {
            directory: __dirname + '/db/seeds/production',
          },
      },
  };

var environment = process.env.NODE_ENV || 'development';
var config = options[environment];
module.exports = config;