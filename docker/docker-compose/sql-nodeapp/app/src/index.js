import express from "express";

import { connectDatabase } from "./mysql-connection.js";
import routes from "./routes.js";

const app = express();
const port = 3000;

connectDatabase();

app.use(routes); 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
