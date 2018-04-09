import express from 'express';
import * as bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

const app = express();
app.use(morgan('combine'));
app.use(bodyParser.json());
app.use(cors());

const PORT = 8000;

app.get('/status', (req, res) => {
    res.send({
        message: 'Ola mundo !'
    })
})


app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`);
})