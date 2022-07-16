import { createConnection } from "mysql";

const config = {
  host: "database",
  user: "root",
  password: "example",
  database: "nodedb",
};

const connection = createConnection(config);

function connectDatabase() {
  connection.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
  });
}

export { connection, connectDatabase };
