exports.up = knex =>
  knex.schema.createTable("orders", table => {
    table.increments("id").primary();
    table.string("order");
  });

exports.down = knex => knex.schema.dropTable("orders");
