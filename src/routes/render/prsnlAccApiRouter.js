import express from 'express';
import { Tag, User, Count } from '../../db/models';

const router = express.Router();

router.get('/goodtags', async (req, res) => {
  try {
    const { userId } = req.session;

    const goodTags = await Count.findAll({ where: { isgood: true, user_id: userId }, include: Tag });

    console.log(`adshkfgaskdfksagflksak----------------------${goodTags}------------------`);

    res.json(goodTags);
  } catch (err) {
    console.error(err);
  }
});

router.get('/badtags', async (req, res) => {
  try {
    const { userId } = req.session;

    const badTags = await Count.findAll({ where: { isgood: false, user_id: userId }, include: Tag });

    res.json(badTags);
  } catch (err) {
    console.error(err);
  }
});

router.delete('/:tagid', async (req, res) => {
  try {
    const { tagid } = req.params;

    const { userId } = req.session;

    const CountForDeletion = await Count.findOne(({ where: { user_id: userId, tag_id: tagid } }));

    await Count.destroy({ where: { id: CountForDeletion.id } });

    res.sendStatus(201);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

export default router;
