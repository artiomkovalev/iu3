const sqlite3 = require("sqlite3");

const db = new sqlite3.Database("./main.db");

db.serialize();

const createDb = () => new Promise((res, rej) => {
  db.run(`CREATE TABLE comics (id INTEGER PRIMARY KEY, src TEXT, date TEXT)`, [], (r, _) => res(r));
});

const insertNewComics = (id, src, date) => new Promise((res, rej) => {
  db.run(`INSERT INTO comics (id, src, date) VALUES (?, ?, ?)`, [id, src, date], (r, _) => res(r));
});

const getComics = (date) => new Promise((res, rej) => {
  db.get(`SELECT * FROM comics WHERE date = ? LIMIT 1`, [date], (e, row) => res(row));
});

const getLastComics = (offset = 0) => new Promise((res, rej) => {
  db.all(`SELECT * FROM comics ORDER BY date DESC LIMIT 7 OFFSET ?`, [offset], (_, rows) => res(rows));
});

const deleteComics = (id) => new Promise((res, rej) => {
  db.run(`DELETE FROM comics WHERE id = ?`, [id], (r, _) => res(r));
});

const deleteDb = () => new Promise((res, rej) => {
  db.run(`DROP TABLE IF EXISTS comics`, [], (r, _) => res(r));
});

const closeDb = () => db.close();

module.exports = {
  createDb,
  insertNewComics,
  getComics,
  getLastComics,
  deleteDb,
  closeDb,
  deleteComics
};
