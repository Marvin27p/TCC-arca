module.exports = {
  client: "mysql",
  connection: {
    host: "localhost",
    port: "3306",
    database: "cadastro",
    user: "root",
    password: "",
  },
  pool: {
    min: 2,
    max: 10,
  },
};
