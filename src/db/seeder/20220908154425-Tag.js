module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Tags',
      [
        {
          name: 'Рестораны',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Финансы',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Политика',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Папая',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Бетмен',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Конь-людоед',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Иприт',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Дезинтеграция',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Теория всего',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: '42',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tags', null, {});
  },
};
