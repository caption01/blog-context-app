module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        username: "bombay",
        password: "bombaypass",
        email: "bombay@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: "john",
        password: "johnpass",
        email: "john@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
