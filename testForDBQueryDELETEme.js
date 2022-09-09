// const { User, Count, Tag } = require('./src/db/models');

// User.findOne({ where: { name: 'bob' } })
//   .then((d) => d.id)
//   .then((userId) => Count.findAll({ where: { isgood: true, user_id: userId } }))
//   .then((data) => data.forEach((elem) => Tag.findAll({ where: { id: elem.tag_id } })
//     .then((tagObjects) => { const theThing = tagObjects.map((elele) => elele.name); return theThing; })));
// // Count.findAll({ where: { isgood: true } }).then(console.log);
// // // User.findAll().then(console.log);
// // Tag.findAll({ where: id });

// async function zooz() {
//   const userName = 'bob';
//   const goodTags = await User.findOne({ where: { name: userName } }) // User.findByPk(id)
//     .then(async (user) => Count.findAll({ where: { isgood: true, user_id: user.id }, include: Tag }));

//   // const tagIds = await goodTags.map((el) => el.dataValues.tag_id);

//   // const tagNames = await tagIds.map(async (e) => {
//   //   const tagObject = await Tag.findOne({ where: { id: e } });
//   //   console.log(tagObject);
//   //   const tagNameAsync = tagObject.dataValues.name;
//   return goodTags;

//   return tagNames;
// }
// zooz();
// zooz().then(console.log);
// Tag.findAll({ where: { id: data.tag_id } }))
//     .then((tagObjects) => console.log(tagObjects));

// goodtags.map(async(el) => await Tag.findOne({ where: { id: el.dataValues.tag_id } }))
// .then(async (goodtags) => console.log(goodtags.map(async(el) => await Tag.findOne({ where: { id: el.dataValues.tag_id } }))));
