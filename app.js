// JESUS CRISTO É O SENHOR !!!
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.listen(4000, (req, res) => {
    console.log("SERVE ON: Localhost:40000")
})

