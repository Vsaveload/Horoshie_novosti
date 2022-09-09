import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  const initState = { path: req.originalUrl };
  res.layout(initState);
});
export default router;
