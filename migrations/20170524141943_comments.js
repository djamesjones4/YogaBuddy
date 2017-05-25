exports.up = function(knex) {
  return knex.schema.createTable('comments', (table) => {
    table.increments();
    table.boolean('verified').defaultTo(FALSE);
    table.string('varchar').notNullable().defaultTo('');
    table.string('email').notNullable().unique();
    table.specificType('hashed_password', 'char(60)').notNullable();
    table.timestamps(true, true);

    comment_text = models.TextField()
    comment_img = models.TextField(blank=True, null=True)
    user_id = models.ForeignKey(Users, on_delete=models.CASCADE)
    post_id = models.ForeignKey(Posts, on_delete=models.CASCADE)
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('comments');
};
