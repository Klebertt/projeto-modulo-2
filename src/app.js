const express = require('express');
const alunoRouter = require('./carrosRouter');

const database = require('./db');

const app = express();
app.use(express.json());

app.use('/carros', carrosRouter);

app.listen(3000, async () => {
    const resultDb = await database.sync({ alter: true });
    console.log('server started');
})