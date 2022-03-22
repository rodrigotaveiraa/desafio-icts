
exports.up = function (knex) {
    return knex.schema.createTable("volumes", function (table) {
      table.string("Date");
      table.float("Open");
      table.float("High");
      table.float("Low");
      table.double("Close");
      table.double("Volume");
      table.string("Status");
    });
};
  
exports.down = function (knex) {
    return knex.schema.dropTableIfExists("volumes");
};