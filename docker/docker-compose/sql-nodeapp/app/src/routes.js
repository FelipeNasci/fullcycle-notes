import { Router } from "express";
import { connection as database } from "./mysql-connection.js";
import { createTable, insertInto, responseTemplate } from "./helpers.js";

const routes = Router();
("use strict");

routes.get("/", async (req, res) => {
  process.stdout.write("\x1Bc"); //clear console

  database.query(createTable("persons"), (error) => {
    if (error) throw error;
    database.query(insertInto("persons"), (error) => {
      if (error) throw error;
      database.query("SELECT * FROM persons ORDER BY id DESC;", (error, results) => {
        if (error) throw error;
        res.send(responseTemplate(results));
      });
    });
  });
});

export default routes;
