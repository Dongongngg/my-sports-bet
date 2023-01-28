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

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  }),
);

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'Server is working',
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port} in ${env} mode`);
});
