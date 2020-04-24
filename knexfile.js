// Update with your config settings.

// defining our database connection
module.exports = {
  development: {
    client: "sqlite3", // specifying the DBMS
    useNullAsDefault: true, // a flag required for SQLite
    // location of our db
    connection: {
      filename: "./data/cars.db3",
    },
  },
};
