exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.string('username').notNullable().defaultTo('');
    table.string('username').notNullable().defaultTo('');
    table.specificType('password', 'char(255)').notNullable();
    table.string('email').notNullable().unique();
    table.text('profile_picture_img').defaultTo('');
    table.text('bio').defaultTo('');
    table.boolean('admin').defaultTo(FALSE);
    table.boolean('moderator').defaultTo(FALSE);
    table.boolean('professional').defaultTo(FALSE);
    table.boolean('verified_user').defaultTo(FALSE);
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
