import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import personalAccount from '../../components/PersonalAccount';
import { Tag, User, Count } from '../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const initState = { path: req.originalUrl };
  res.layout(initState);
});

router.get('/personalaccount', async (req, res) => {
  const userName = 'bob';

  const goodTagsIs = await User.findOne({ where: { name: userName } }) // User.findByPk(id)
    .then(async (user) => Count.findAll({ where: { isgood: true, user_id: user.id }, include: Tag }));

  const badTagsIs = await User.findOne({ where: { name: userName } }) // User.findByPk(id)
    .then(async (user) => Count.findAll({ where: { isgood: false, user_id: user.id }, include: Tag }));

  const initState = { path: req.originalUrl, goodTagsIs, badTagsIs };
  res.layout(initState);
});

export default router;
