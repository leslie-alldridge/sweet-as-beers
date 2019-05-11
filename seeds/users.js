exports.seed = function(knex, Promise) {
  return knex("users")
    .del()
    .then(function() {
      return knex("users").insert([
        {
          id: 1,
          username: "Leslie",
          hash: "##",
          email: "leslie@gmail.com"
        },
        {
          id: 2,
          username: "Yuzu",
          hash: "##",
          email: "yuz@gmail.com"
        },
        {
          id: 3,
          username: "Luke",
          hash: "##",
          email: "luke@gmail.com"
        }
      ]);
    });
};
