const knex = require("knex");
const config = require("../../knexfile")[process.env.NODE_ENV || "development"];

module.exports = knex(config);
