exports.up = knex =>
  knex.schema.createTable("orders", table => {
    table.increments("id").primary();
    table.string("order");
    table.string("status").defaultTo("pending");
  });

exports.down = knex => knex.schema.dropTable("orders");
