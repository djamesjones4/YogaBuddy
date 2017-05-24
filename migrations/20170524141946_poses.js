exports.up = function(knex) {
  return knex.schema.createTable('poses', (table) => {
    table.increments();
    table.string('varchar').notNullable().defaultTo('');
    table.string('email').notNullable().unique();
    table.specificType('hashed_password', 'char(60)').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('poses');
};
