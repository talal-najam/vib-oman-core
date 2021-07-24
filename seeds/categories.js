exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("categories")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("categories").insert([
        {
          id: 1,
          name: "Gaming PCs",
          image: "",
          description: "Fully powered gaming RIGs",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          name: "Monitors",
          image: "",
          description: "Gaming monitors for the ultimate experience",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          name: "Peripherals",
          image: "",
          description: "Keyboards, Mouse, Headphones etc.",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 4,
          name: "Gaming Chairs",
          image: "",
          description: "A gamer's throne!",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 5,
          name: "Components",
          image: "",
          description: "PC components sold separately for ultimate flexibility",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 6,
          name: "Software",
          image: "",
          description: "Browse the list of latest software and games",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ]);
    });
};
