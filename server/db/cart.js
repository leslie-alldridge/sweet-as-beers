const environment = process.env.NODE_ENV || "development";
const config = require("../../knexfile")[environment];
const knex = require("knex")(config);

module.exports = {
  saveOrder
};

function saveOrder(order, testDb) {
  const connection = testDb || knex;
  return connection("orders")
    .insert(order)
    .select();
}
