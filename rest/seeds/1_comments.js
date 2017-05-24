        exports.seed = function(knex, Promise) {
          // Deletes ALL existing entries
          return knex('comments').del()
            .then(function() {
              return Promise.all([
                // Inserts seed entries
                knex('comments').insert([{
                  id: 1,
                  varchar: 'Rowling',
                  email: 'jkrowling@gmail.com',
                  hashed_password: 'cptcptcptcptcptcptcptcptcptcptcptcptcptcptcptcptcptcptcptcpt',
                  created_at: new Date('2016-06-29 14:26:16 UTC'),
                  updated_at: new Date('2016-06-29 14:26:16 UTC')
                }])
              ]);
            }).then(() => {
              return knex.raw("SELECT setval('comments_id_seq', (SELECT MAX(id) FROM comments));")
            });
        };
