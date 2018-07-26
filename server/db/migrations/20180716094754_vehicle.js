
exports.up = function(knex, Promise) {
  return knex.schema.createTable("vehicle",(table)=>{
  table.increments(); 
 table.string("make"); 
 table.string("model"); 
 table.integer("year"); 
 table.string("engine");
 table.integer("partNumber"); 
 table.text("reason");
 table.text("note");
  table.integer("user_id")
 .notNullable()
 .references('id')
 .inTable('user')
 .onDelete('CASCADE')
 .index(); 
 table.timestamps(true, true); 
})
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("vehicle");

};
