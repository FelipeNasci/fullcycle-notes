import { faker } from "@faker-js/faker";

export const createTable = (tableName) =>
  // `DROP TABLE ${tableName};` +
  `CREATE TABLE IF NOT EXISTS ${tableName} (` +
  `id int not null auto_increment primary key,` +
  `name varchar(255),` +
  `age int` +
  `)`;

export const insertInto = (tableName) =>
  `INSERT INTO ${tableName} (age, name)` +
  `VALUES ('${faker.random.numeric(2)}', '${faker.name.findName()}');`;

export const responseTemplate = (results = []) => `
  <html>
    <head>
      <style>
        table {
          font-family: arial, sans-serif;
          border-collapse: collapse;
          width: 100%;
        }
        td, th {
          border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;
        }
        tr:nth-child(even) {
          background-color: #dddddd;
        }
      </style>
    </head>
    <body>
      <h1>Full Cycle Rocks!</h1>
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
        ${results.map(
          ({ name, age }) =>
            `
            <tr>
              <td>${name}</td>
              <td>${age}</td>
            </tr>
            `
        )}
      </table>
    </body>
  </html>
`;
