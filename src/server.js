import express from 'express';
import morgan from 'morgan';
import session from 'express-session';
import store from 'session-file-store';
import layoutMW from './middlewars/layoutMW';
import startPageRender from './routes/render/startPageRender';
import apiNews from './routes/api/apiNews';
import newsPageRender from './routes/render/newsPageRender';

const PORT = 3000;
const app = express();

// const FileStore = store(session);

// const sessionConfig = {
//   name: 'user_sid', // Имя куки для хранения id сессии. По умолчанию - connect.sid
//   secret: process.env.SESSION_SECRET ?? 'test', // Секретное слово для шифрования, может быть любым
//   resave: false, // Пересохранять ли куку при каждом запросе
//   saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
//   store: new FileStore(),
//   cookie: {
//     maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
//     httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
//   },
// };

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(session(sessionConfig));
app.use(layoutMW);

app.use('/', startPageRender);
app.use('/news', newsPageRender);
app.use('/apinews', apiNews);

app.listen(PORT, () => console.log(`App has started on port ${PORT}`));
