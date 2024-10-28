import knex from "knex";

const knexConnection = knex({
  client: "mysql2",
  connection: {
    host: "127.0.0.1",
    port: 3306,
    user: "mysql",
    password: "root",
    database: "rodteus_test",
  },
});

export default function connectDB() {
  return knexConnection;
}
