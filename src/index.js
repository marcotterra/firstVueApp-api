import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

import dotenv from 'dotenv';
import Promise from 'bluebird';

import configs from './configs';
import auth from './routes/auth';
import user from './routes/user';

const { PORT } = configs;

dotenv.config();
const app = express();
app.use(morgan('combine'));
app.use(bodyParser.json());
app.use(cors());
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URL);

app.use('/auth', auth);
app.use('/user', user);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});
