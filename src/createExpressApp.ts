/**
 * Creates Express ready to start app and
 * returns the app
 */
import bodyParser from 'body-parser';
import express from 'express';
import handleErrors from '@middleware/handleErrors';
import router from '@routes/createRouter';

const app = express()
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use('/api', router())
  .use(handleErrors);

export default app;
