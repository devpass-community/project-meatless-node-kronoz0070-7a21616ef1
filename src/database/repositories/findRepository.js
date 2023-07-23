function findRepository(table) {
  return `SELECT * FROM ${table}`;
}

module.exports = findRepository;
