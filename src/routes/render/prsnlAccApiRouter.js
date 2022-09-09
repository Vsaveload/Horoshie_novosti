import express from 'express';
import { Tag, User, Count } from '../../db/models';
import tag from '../../db/models/tag';

const router = express.Router();

router.get('/goodtags', async (req, res) => {
  try {
    const userName = 'bob';

    const goodTags = await User.findOne({ where: { name: userName } }) // User.findByPk(id)
      .then(async (user) => Count.findAll({ where: { isgood: true, user_id: user.id }, include: Tag }));

    res.json({ goodTags });
  } catch (err) {
    console.error(err);
  }
});

router.get('/badtags', async (req, res) => {
  try {
    const userName = 'bob';

    const goodTags = await User.findOne({ where: { name: userName } }) // User.findByPk(id)
      .then(async (user) => Count.findAll({ where: { isgood: false, user_id: user.id }, include: Tag }));

    res.json({ badTags });
  } catch (err) {
    console.error(err);
  }
});

router.delete('/:tagid', async (req, res) => {
  try {
    const userName = 'bob';// User.findByPk(id)

    const { tagid } = req.params;

    const userId = 1;

    const CountForDeletion = await Count.findOne(({ where: { user_id: userId, tag_id: tagid } }));

    await Count.destroy({ where: { id: CountForDeletion.id } });

    res.sendStatus(201);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

export default router;
