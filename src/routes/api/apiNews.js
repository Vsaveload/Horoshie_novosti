import express from 'express';
import axios from 'axios';
import * as cheerio from 'cheerio';
import { Tag, Count } from '../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const html = await axios('http://www.vedomosti.ru/newsline/out/rss.xml');
  const resData = cheerio.load(html.data);
  const allItem = resData.html('item');
  const allTitle = resData.html('title');
  const titleArr = allTitle.split('<title>').join('').split('</title>').slice(2, -1);
  const linkArr = allItem.match(/<link>.*/gmi).join('').split('<link>').filter((el) => el !== '');
  const result = titleArr.map((el, i) => ({ title: el, link: linkArr[i] }));
  res.json(result);
});

router.post('/createtag', async (req, res) => {
  try {
    const { name, tagChoise } = req.body;

    const [newTag] = await Tag.findOrCreate({ where: { name } });
    if (tagChoise === 'true') {
      await Count.findOrCreate({
        where: {
          user_id: req.session.userId,
          tag_id: newTag.id,
          isgood: true,
        },
      });
    } else {
      Count.findOrCreate({
        where: {
          user_id: req.session.userId,
          tag_id: newTag.id,
          isgood: false,
        },
      });
    }
    res.json(newTag);
  } catch (error) {
    console.error(error);
  }
});

export default router;
