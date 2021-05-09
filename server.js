'use strict';

const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.send("Hello, my name is Krishn Agarwal!");
});

app.post("/post", (req, res) => {
    res.send("Sending my name!");
});

app.listen(3000, '0.0.0.0');
