import express from 'express';

const app = express();

const port = process.env.APP_PORT;
const env = process.env.APP_ENV;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port} in ${env} mode`);
});
