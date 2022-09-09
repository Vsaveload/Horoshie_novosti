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
  const { userId } = req.session;

  const goodTagsIs = await Count.findAll({ where: { isgood: true, user_id: userId }, include: Tag });

  const badTagsIs = await Count.findAll({ where: { isgood: false, user_id: userId }, include: Tag });

  const initState = { path: req.originalUrl, goodTagsIs, badTagsIs };
  res.layout(initState);
});

export default router;
