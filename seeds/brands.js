exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("brands")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("brands").insert([
        {
          id: 1,
          name: "Razer",
          image:
            "https://logos-world.net/wp-content/uploads/2020/11/Razer-Symbol.jpg",
          description:
            "Razer Inc., is a Singaporean-American multinational technology company that designs, develops, and sells gaming hardware",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          name: "MSI",
          image: "https://i.ytimg.com/vi/Qt0GFuslOjk/maxresdefault.jpg",
          description:
            "Micro-Star International Co., Ltd is a Taiwanese multinational information technology corporation headquartered in New Taipei City, Taiwan",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          name: "Zotac",
          image:
            "https://static.wikia.nocookie.net/pcbuildingsim/images/f/f1/Zotac-Logo-1-1500x1000.jpg/revision/latest?cb=20181217044421",
          description:
            "ZOTAC is a computer hardware manufacturer founded and based in Hong Kong.",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 4,
          name: "ASUS",
          image:
            "https://logos-world.net/wp-content/uploads/2020/07/Asus-Logo-1995-present.png",
          description:
            "ASUSTek Computer Inc. is a Taiwanese multinational computer and phone hardware and electronics company headquartered in Beitou District, Taipei, Taiwan",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 5,
          name: "ROG",
          image: "https://i.ibb.co/WPtzVv8/ROG.png",
          description:
            "Republic Of Gamers - A brand of desktop and laptop hardware from Asus that is geared toward the gamer.",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 6,
          name: "HyperX",
          image:
            "https://images.squarespace-cdn.com/content/v1/55ef0e29e4b099e22cdc9eea/1547055341193-QDPQU3CUS16CTZO2MK52/hyperx-logo.jpg",
          description:
            "HyperX is a gaming gear brand committed to making sure every gamer feels they are included. No matter who you are, or what you play, WE'RE ALL GAMERS.",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ]);
    });
};
