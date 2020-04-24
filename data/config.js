// instead of hardcoding in a config object
// use this file

const knex = require("knex");
const knexfile = require("../knexfile.js");
// we must select the development obj from our knexfile
const db = knex(knexfile.development);

// expor tfor use in codebase
module.exports = db;
