module.exports = {
    development: {
      client: "mysql2",
      connection: {
        user: "userdev",
        password: "password",
        database: "productsDB",
      },
      migrations: {
        tableName: "knex_migrations",
        directory: `./src/database/migrations`,
      },
      pool: { min: 0, max: 7 },
    },
  };