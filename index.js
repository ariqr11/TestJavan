const dotenv = require('dotenv')
dotenv.config();
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 1997;
const axios = require('axios');

app.use(express.json());
app.use(cors());


app.get('/', (req, res) => { res.status(200).send(`<h1 style='background:black ;color:white;padding:20px;text-align:center'>TEST NODE JS JAVAN</h1>`) })

const { userRouter, assetRouter } = require('./routers')
app.use('/user', userRouter);
app.use('/asset', assetRouter);


app.listen(PORT, () => console.log('Running', PORT))