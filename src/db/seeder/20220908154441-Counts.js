const { User } = require('../models');
const { Tag } = require('../models');

async function findId(model, name) {
  return (await model.findOne({ where: { name } })).id;
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Counts',
      [
        {
          user_id: await findId(User, 'bob'),
          tag_id: await findId(Tag, 'Рестораны'),
          isgood: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: await findId(User, 'beb'),
          tag_id: await findId(Tag, 'Рестораны'),
          isgood: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: await findId(User, 'bab'),
          tag_id: await findId(Tag, 'Рестораны'),
          isgood: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: await findId(User, 'bob'),
          tag_id: await findId(Tag, 'Папая'),
          isgood: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: await findId(User, 'beb'),
          tag_id: await findId(Tag, 'Бетмен'),
          isgood: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: await findId(User, 'bab'),
          tag_id: await findId(Tag, 'Папая'),
          isgood: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: await findId(User, 'bob'),
          tag_id: await findId(Tag, 'Конь-людоед'),
          isgood: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: await findId(User, 'bob'),
          tag_id: await findId(Tag, '42'),
          isgood: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: await findId(User, 'bab'),
          tag_id: await findId(Tag, 'Дезинтеграция'),
          isgood: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: await findId(User, 'bob'),
          tag_id: await findId(Tag, 'Финансы'),
          isgood: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: await findId(User, 'bab'),
          tag_id: await findId(Tag, 'Теория всего'),
          isgood: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: await findId(User, 'beb'),
          tag_id: await findId(Tag, 'Финансы'),
          isgood: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: await findId(User, 'beb'),
          tag_id: await findId(Tag, 'Иприт'),
          isgood: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: await findId(User, 'bab'),
          tag_id: await findId(Tag, 'Иприт'),
          isgood: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: await findId(User, 'bob'),
          tag_id: await findId(Tag, 'Иприт'),
          isgood: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // {
        //   user_id: 1,
        //   tag_id: 1,
        //   isgood: true,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   user_id: 2,
        //   tag_id: 1,
        //   isgood: true,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   user_id: 3,
        //   tag_id: 1,
        //   isgood: true,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   user_id: 1,
        //   tag_id: 4,
        //   isgood: true,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   user_id: 2,
        //   tag_id: 5,
        //   isgood: false,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   user_id: 3,
        //   tag_id: 4,
        //   isgood: true,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   user_id: 1,
        //   tag_id: 6,
        //   isgood: true,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   user_id: 1,
        //   tag_id: 10,
        //   isgood: false,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   user_id: 3,
        //   tag_id: 7,
        //   isgood: false,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   user_id: 1,
        //   tag_id: 2,
        //   isgood: false,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   user_id: 3,
        //   tag_id: 9,
        //   isgood: true,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   user_id: 2,
        //   tag_id: 2,
        //   isgood: true,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   user_id: 2,
        //   tag_id: 6,
        //   isgood: false,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   user_id: 3,
        //   tag_id: 6,
        //   isgood: true,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   user_id: 1,
        //   tag_id: 6,
        //   isgood: true,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Counts', null, {});
  },
};
