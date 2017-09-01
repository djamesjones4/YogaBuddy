exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function() {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert([
          {
            id: 1,
            // TO DO: change to actual hash after user creation is working. DEVELOPMEN PASSWORD ONLY
            username: "Ruca Love",
            hashed_password: "password",
            email: "haley.kalb@gmail.com",
            profile_picture_img: "/images/profilePictures/rucalove.jpg",
            bio: "When I do yoga, I like to relax and enjoy myself!",
            admin: true,
            moderator: true,
            professional: true,
            verified_user: true,
            created_at: new Date('2016-06-29 14:26:16 UTC'),
            updated_at: new Date('2016-06-29 14:26:16 UTC')
          },
          {
            id: 2,
            username: "GeeGeorge",
            // TO DO: change to actual hash after user creation is working. DEVELOPMEN PASSWORD ONLY
            hashed_password: "password",
            email: "gee.george@gmail.com",
            profile_picture_img: "/images/profilePictures/gee.png",
            bio: "I like to dance, sing, and do yoga. Get to know me!",
            admin: false,
            moderator: true,
            professional: false,
            verified_user: true,
            created_at: new Date('2016-06-29 14:26:16 UTC'),
            updated_at: new Date('2016-06-29 14:26:16 UTC')
          },
          {
            id: 3,
            // TO DO: change to actual hash after user creation is working. DEVELOPMEN PASSWORD ONLY
            username: "DerekJones",
            hashed_password: "password",
            email: "derek.jones@gmail.com",
            profile_picture_img: "/images/profilePictures/derek.jpg",
            bio: "I live, breathe, eat and sleep yoga!",
            admin: false,
            moderator: true,
            professional: true,
            verified_user: true,
            created_at: new Date('2016-06-29 14:26:16 UTC'),
            updated_at: new Date('2016-06-29 14:26:16 UTC')
          },
          {
            id: 4,
            // TO DO: change to actual hash after user creation is working. DEVELOPMEN PASSWORD ONLY
            username: "CPT",
            hashed_password: "password",
            email: "christian.taggart@gmail.com",
            profile_picture_img: "/images/profilePictures/christian.jpg",
            bio: "I invented yoga, everyone else is a poser",
            admin: false,
            moderator: false,
            professional: false,
            verified_user: false,
            created_at: new Date('2016-06-29 14:26:16 UTC'),
            updated_at: new Date('2016-06-29 14:26:16 UTC')
          },
          {
            id: 5,
            // TO DO: change to actual hash after user creation is working. DEVELOPMEN PASSWORD ONLY
            username: "Kevin",
            hashed_password: "password",
            email: "kevin.conrad@gmail.com",
            profile_picture_img: "/images/profilePictures/kevin.jpg",
            bio: "Warrior 2 is my favorite!",
            admin: true,
            moderator: true,
            professional: false,
            verified_user: true,
            created_at: new Date('2016-06-29 14:26:16 UTC'),
            updated_at: new Date('2016-06-29 14:26:16 UTC')
          },
          {
            id: 6,
            // TO DO: change to actual hash after user creation is working. DEVELOPMEN PASSWORD ONLY
            username: "Sunshine Daydream",
            hashed_password: "password",
            email: "test@test.com",
            profile_picture_img: "http://www.vitamin-ha.com/wp-content/uploads/2012/06/VH-yoga_cat.jpg",
            bio: "Yoga is my favorite pastime.",
            admin: false,
            moderator: false,
            professional: false,
            verified_user: false,
            created_at: new Date('2016-06-29 14:26:16 UTC'),
            updated_at: new Date('2016-06-29 14:26:16 UTC')
          }
        ])
      ])
    }).then(() => {
      return knex.raw("SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));")
    })
}
