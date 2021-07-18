require("dotenv").config();

module.exports = {
  development: {
    client: process.env.DEV_DB_CLIENT,
    connection: {
      host: process.env.DEV_DB_HOST,
      user: process.env.DEV_DB_USER,
      database: process.env.DEV_DB_NAME,
    },
  },

  production: {
  },
};
