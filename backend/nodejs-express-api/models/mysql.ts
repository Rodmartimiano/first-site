import knex from "knex";

const knexConnection = knex({
  client: "mysql2",
  connection: {
    host: "mysql8033_rodteus",
    port: 3306,
    user: "mysql",
    password: "root",
    database: "rodteus_development",
  },
});

export default function connectDB() {
  return knexConnection;
}
