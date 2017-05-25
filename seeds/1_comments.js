        exports.seed = function(knex, Promise) {
          // Deletes ALL existing entries
          return knex('comments').del()
            .then(function() {
              return Promise.all([
                // Inserts seed entries
                knex('comments').insert([
                    {
                        id: 1,
                        verified: false,
                        comment_text : "Keep pulling your shoulders apart, and don't allow your lower back to sag down. Also, the shoulder blades typically want to dip in the middle - don't let that happen. Keep pulling the shoulder blades outward.",
                        comment_img : "http://lovemyyoga.com/images/Upward%20Dog.jpg",
                        created_at : new Date('2016-06-29 14:26:16 UTC'),
                        updated_at : new Date('2016-06-29 14:26:16 UTC')
                    },
                    {
                        id: 2,
                        verified: false,
                        comment_text : "SAMPLE text here.",
                        comment_img : "http://lovemyyoga.com/images/Upward%20Dog.jpg",
                        created_at : new Date('2016-06-29 14:26:16 UTC'),
                        updated_at : new Date('2016-06-29 14:26:16 UTC')
                    },
                    {
                        id: 3,
                        verified: true,
                        comment_text : "SAMPLE text here.",
                        comment_img : "http://lovemyyoga.com/images/Upward%20Dog.jpg",
                        created_at : new Date('2016-06-29 14:26:16 UTC'),
                        updated_at : new Date('2016-06-29 14:26:16 UTC')
                    },
                    {
                        id: 4,
                        verified: true,
                        comment_text : "SAMPLE text here.",
                        comment_img : "http://lovemyyoga.com/images/Upward%20Dog.jpg",
                        created_at : new Date('2016-06-29 14:26:16 UTC'),
                        updated_at : new Date('2016-06-29 14:26:16 UTC')
                    },
                    {
                        id: 5,
                        verified: false,
                        comment_text : "SAMPLE text here.",
                        comment_img : "http://lovemyyoga.com/images/Upward%20Dog.jpg",
                        created_at : new Date('2016-06-29 14:26:16 UTC'),
                        updated_at : new Date('2016-06-29 14:26:16 UTC')
                    }
                  ])
              ]);
            }).then(() => {
              return knex.raw("SELECT setval('comments_id_seq', (SELECT MAX(id) FROM comments));")
            });
        };
