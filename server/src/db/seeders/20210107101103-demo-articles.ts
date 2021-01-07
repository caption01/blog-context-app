module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Articles", [
      {
        title: "ep.0 - from eng to dev",
        link: "www.google.com",
        tags: ["js", "react", "docker"],
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "ep.1 - how to perpare your self",
        link: "www.youtube.com",
        tags: ["ts", "docker"],
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "ep.2 - not show",
        link: "www.youtube.com",
        tags: ["ts", "docker"],
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Articles", null, {});
  },
};
