module.exports = {
  db: {
    name: "db",
    connector: "memory"
  },
  dev: {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    url: process.env.DATABASE_URL,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASS,
    name: "dev",
    user: process.env.DATABASE_USER,
    useNewUrlParser: true,
    connector: "mongodb"
  }
};
