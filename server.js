const express =require('express');

const port = 3000;

const app = express();

app.get('/', (req,res) => {res.send("Hello Browser")});

app.get('/brent', (req,res) => {res.send("Hello Brent")});

app.get('/joshua', (req,res) => {res.send("Hello Joshua")});

app.get('/jj', (req,res) => {res.send("Hello JJ")});

app.get('/austin', (req,res) => {res.send("Hello Austin")});

app.listen(port, ()=>console.log("Listening"));

