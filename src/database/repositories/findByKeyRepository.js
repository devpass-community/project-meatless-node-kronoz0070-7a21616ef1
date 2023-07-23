function findByKeyRepository(table, key, value) {
  return `SELECT * FROM ${table} WHERE ${key} = ${value}`;
}

module.exports = findByKeyRepository;
