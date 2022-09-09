import express from 'express';
import { Tag, User, Count } from '../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const initState = { path: req.originalUrl };
  res.layout(initState);
});

router.get('/personalaccount', async (req, res) => {
  const { userId } = req.session;
  const { userEmail } = req.session;

  const goodTagsIs = await Count.findAll({ where: { isgood: true, user_id: userId }, include: Tag });

  const badTagsIs = await Count.findAll({ where: { isgood: false, user_id: userId }, include: Tag });

  const initState = {
    path: req.originalUrl, goodTagsIs, badTagsIs, userEmail,
  };
  res.layout(initState);
});

export default router;
