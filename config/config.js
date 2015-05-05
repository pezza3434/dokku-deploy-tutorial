module.exports = {
  development: {
    username: 'root',
    password: 'root',
    database: 'myapp',
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 8889
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql'
  }
};
