import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  const { userEmail } = req.session;
  const initState = { path: req.originalUrl, userEmail };
  res.layout(initState);
});
export default router;
