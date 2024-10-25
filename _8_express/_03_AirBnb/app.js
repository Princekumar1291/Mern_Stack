const express = require('express');
const fs=require('fs');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log("First middleware",`${req.method} ${req.url} ${req.body}`);
  next();
});

app.use((req, res, next) => {
  res.send(`
    <h1>Page not found</h1>
    <a href="/">Go back</a>
  `) 
});

app.listen(3000,()=>{
  console.log('Server is running on http://localhost:3000');
})