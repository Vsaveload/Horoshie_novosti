import express from 'express';
import session from 'express-session';
import store from 'session-file-store';
import layoutMW from './middlewars/layoutMW';
import startPageRender from './routes/render/startPageRender';
import prsnlAccApiRouter from './routes/render/prsnlAccApiRouter';
import apiNews from './routes/api/apiNews';
import newsPageRender from './routes/render/newsPageRender';
import registrPageRender from './routes/render/registrPageRender';
import userController from './routes/api/userRouter';

const PORT = 3000;
const app = express();

const FileStore = store(session);

const sessionConfig = {
  name: 'user_sid', // Имя куки для хранения id сессии. По умолчанию - connect.sid
  secret: process.env.SESSION_SECRET ?? 'test', // Секретное слово для шифрования, может быть любым
  resave: false, // Пересохранять ли куку при каждом запросе
  saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
  store: new FileStore(),
  cookie: {
    maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
    httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
  },
};

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sessionConfig));
app.use(layoutMW);

app.use('/', startPageRender);
app.use('/api/v1', prsnlAccApiRouter);
app.use('/', registrPageRender);
app.use('/api/v1/auth', userController);
app.use('/news', newsPageRender);
app.use('/apinews/v1', apiNews);

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
