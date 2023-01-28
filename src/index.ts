import bodyParser from 'body-parser';
import cors from 'cors';
import * as dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';

if (process.env.APP_ENV === 'development') {
  console.log('loading .env from root...');
  dotenv.config();
}

const port = process.env.APP_PORT;
const env = process.env.APP_ENV;

const app = express();

app.use(cors);
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(env, () => {
  console.log(`Example app listening on port ${port} in ${env} mode`);
});
