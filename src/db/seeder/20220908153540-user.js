module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'bob',
          email: '2@2',
          password: '123',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'beb',
          email: '3@3',
          password: '12345678',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'bab',
          email: '4@sdfsdfsdfsdfsdfsdf',
          password: '123sdfsdfsdfsdfsdfs',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
