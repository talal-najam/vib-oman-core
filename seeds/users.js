exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1111,
          first_name: "Talal",
          last_name: "Najam",
          email: "talalnajam98@gmail.com",
          image:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          password: "123456",
          is_admin: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2222,
          first_name: "Anas",
          last_name: "Mukaddam",
          email: "anas.mukaddam@viboman.com",
          image:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          password: "cookies",
          is_admin: true,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3333,
          first_name: "Farhan",
          last_name: "Nadir",
          email: "farhan.nadir@noob.com",
          image:
            "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          password: "noob",
          is_admin: false,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ]);
    });
};
