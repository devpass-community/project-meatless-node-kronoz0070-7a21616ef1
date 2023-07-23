function findByIdRepository(table, id) {
  return `SELECT * FROM ${table} WHERE id = ${id}`;
}

module.exports = findByIdRepository;
