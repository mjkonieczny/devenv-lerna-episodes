import express from 'express';
import cors from 'cors';
import { createShuffledDeck } from 'core';

const app = express();

app.use(cors());

app.get('/', (_, res) => res.send(createShuffledDeck()));

app.listen(3000);
