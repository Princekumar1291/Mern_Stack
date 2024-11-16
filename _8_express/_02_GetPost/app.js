const express = require('express');
const fs = require('fs');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); //to send json data Often sent by HTML forms. It’s suitable for basic data (key-value pairs) 

app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Document</title>
        </head>
        <body>
          <form action="/buy-product" method="POST">
            <label for="product">Product</label>
            <input type="text" name="product">
            <label for="budget">Budget</label>
            <input type="text" name="budget" id="budget"> 
            <input type="submit" value="Buy">
          </form>
        </body>
        </html>
    `)
});

app.post('/buy-product', (req, res) => {
    console.log("form data received: ", req.body);
    console.log("form data received: ", JSON.stringify(req.body));
    const filePath = path.join(__dirname, 'products.json');
    fs.writeFile(filePath, JSON.stringify(req.body), (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            return res.status(500).send('Server Error');
        }
        res.redirect('/products');
    })
})

app.get('/products', (req, res) => {
    res.send(`
        <html>
          <head>
            <title>My Products Page</title>
          </head>
          <body>
            <h1>Products Page</h1>
          </body>
        </html>
    `)
})

app.use((req, res, next) => {
    res.send("<h1>404 - Page not found</h1>");
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
