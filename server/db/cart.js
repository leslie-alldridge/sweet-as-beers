const environment = process.env.NODE_ENV || "development";
const config = require("../../knexfile")[environment];
const knex = require("knex")(config);

module.exports = {
  saveOrder,
  getAllOrders
};

function saveOrder(order, testDb) {
  const connection = testDb || knex;
  return connection("orders")
    .insert({ order: JSON.stringify(order) })
    .select();
}

function getAllOrders(testDb) {
  const connection = testDb || knex;
  return connection("orders").select();
}
