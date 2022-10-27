const express = require('express');
const cors= require('cors');
const dotenv = require('dotenv')
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("."));

dotenv.config();

app.get('/get', (req, res) => {
    res.send('hello')
})

//ket noi den database

//tao model
//database first, code first
//truy van du lieu



app.listen(8080,(req, res) => {
    console.log('listen on port')
})

