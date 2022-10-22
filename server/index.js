import 'dotenv/config';
import express from 'express';
import morgan from 'morgan';

import databaseInit from './db';
import routes from './routes';

const { PORT = 3000, NODE_ENV } = process.env;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/api/v1', routes);
app.use((error, req, res, next) => {
  if (res.headersSent) {
    return next(error);
  }
  const isDev = NODE_ENV === 'development';
  return res.status(500).json({
    message: 'Something went wrong',
    error: isDev ? error : null
  });
});

app.listen(PORT, () => {
  databaseInit();
  console.log(`app started and listening on port ${PORT}`)
})