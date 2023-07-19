const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/database.db');

async function insertQuery (query) {
  return new Promise((resolve, reject) => {
    db.run(query, function(err) {
      if (err) {
        reject(err);
        return;
      }

      resolve(this.lastID);
    });
  });
};

async function selectQuery (query) {
  return new Promise((resolve, reject) => {
    db.all(query, (err, rows) => {
      if (err) {
        reject(err)
      }
      
      resolve(rows);
    });
  });
};

module.exports = { insertQuery, selectQuery };