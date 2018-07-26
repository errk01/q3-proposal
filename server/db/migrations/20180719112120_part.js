
exports.up = function(knex, Promise) {
  return knex.schema.createTable("part", (table) => {
    table.increments();
    table.text("url_img");
    table.string("partName");
    table.integer("partNumber");
    table.integer("price");
    table.text("detail");
    table.boolean("inCart");
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("part");

};
