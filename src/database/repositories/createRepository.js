function createRepository(table, data) {
  const columns = Object.keys(data).join(", ");
  const values = Object.values(data)
    .map((value) => (typeof value === "string" ? `'${value}'` : value))
    .join(", ");

  return `INSERT INTO ${table} (${columns}) VALUES (${values})`;
}

module.exports = createRepository;
