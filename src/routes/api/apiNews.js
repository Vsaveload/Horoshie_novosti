import express from 'express';
import axios from 'axios';
import * as cheerio from 'cheerio';

const router = express.Router();

router.get('/', async (req, res) => {
  const html = await axios('http://www.vedomosti.ru/newsline/out/rss.xml');
  const resData = cheerio.load(html.data);
  const allItem = resData.html('item');
  const allTitle = resData.html('title');
  const titleArr = allTitle.split('<title>').join('').split('</title>').slice(2, -1);
  const linkArr = allItem.match(/<link>.*/gmi).join('').split('<link>').filter((el) => el !== '');
  const result = titleArr.map((el, i) => ({ title: el, link: linkArr[i] }));
  console.log(result);
  res.json(result);
});

export default router;
