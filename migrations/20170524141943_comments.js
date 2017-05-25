exports.up = function(knex) {
  return knex.schema.createTable('comments', (table) => {
    table.increments()
    table.boolean('verified').defaultTo(false)
    table.text('comment_text').notNullable().defaultTo('')
    table.text('comment_img').defaultTo('')
    table.integer('user_id').notNullable().references('yoga_users.id').onDelete('CASCADE')
    table.integer('post_id').notNullable().references('yoga_posts.id').onDelete('CASCADE')
    table.timestamps(true, true)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('comments')
}
