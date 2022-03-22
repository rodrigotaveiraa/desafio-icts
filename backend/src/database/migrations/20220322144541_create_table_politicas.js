
exports.up = function (knex) {
    return knex.schema.createTable("politicas", function (table) {
      table.increments();
      table.string("otimo");
      table.string("critico");
      table.string("bom");
    });
};
  
exports.down = function (knex) {
    return knex.schema.dropTableIfExists("politicas");
};