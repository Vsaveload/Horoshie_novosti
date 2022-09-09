import express from 'express';

const router = express.Router();

router.get('/registration', (req, res) => {
  const { userEmail } = req.session;
  const initState = { path: req.originalUrl, userEmail };
  res.layout(initState);
});

router.get('/login', (req, res) => {
  const { userEmail } = req.session;
  const initState = { path: req.originalUrl, userEmail };
  res.layout(initState);
});

export default router;
