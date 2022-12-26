const dotenv = require('dotenv')
dotenv.config();
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 1997;

app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
    res.status(200).send('<h1>TEST JAVAN</h1>')
})


app.listen(PORT, () => console.log('Running', PORT))