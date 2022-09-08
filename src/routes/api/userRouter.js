import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../db/models';

const router = express.Router();

router.post('/regin', async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPass = await bcrypt.hash(password, 10);
  try {
    const currUser = await User.create({ name, email, password: hashedPass });
    req.session.userId = currUser.id;
    req.session.userEmail = currUser.email;
    //   res.sendStatus(200);
    res.json({ name: currUser.email });
  } catch (err) {
    console.error(err);
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const currUser = await User.findOne({ where: { email } });
  const compare = await bcrypt.compare(password, currUser.password);
  if (compare) {
    req.session.userId = currUser.id;
    req.session.userEmail = currUser.email;
    // res.sendStatus(200);
    res.json({ name: currUser.email });
  } else {
    res.status(500).json({ message: 'Email или пароль не верны' });
  }
});
router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('user_sid');
  res.sendStatus(200);
});

export default router;
