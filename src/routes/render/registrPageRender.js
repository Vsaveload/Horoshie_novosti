import express from 'express';

const router = express.Router();

router.get('/regin', (req, res) => {
  const initState = { path: req.originalUrl };
  res.layout(initState);
});

router.get('/login', (req, res) => {
  const initState = { path: req.originalUrl };
  res.layout(initState);
});

export default router;
