const express = require('express');
const bodyParser = require('body-parser');


<form action="/submit" method="post">
  <input type="text" name="name" value="John Doe" />
  <input type="email" name="email" value="john@example.com" />
  <button type="submit">Submit</button>
</form>
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/submit', (req, res) => {
  console.log(req.body); // Output: { name: 'John Doe', email: 'john@example.com' }
  res.send("Form submitted!");
});



<form action="/submit" method="post">
  <input type="text" name="user[name]" value="John Doe" />
  <input type="text" name="user[address][street]" value="123 Main St" />
  <input type="text" name="user[address][city]" value="Anytown" />
  <button type="submit">Submit</button>
</form>
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/submit', (req, res) => {
  console.log(req.body);
  // Output: { 'user[name]': 'John Doe', 'user[address][street]': '123 Main St', 'user[address][city]': 'Anytown' }
});





<form action="/submit" method="post">
  <input type="text" name="user[name]" value="John Doe" />
  <input type="text" name="user[address][street]" value="123 Main St" />
  <input type="text" name="user[address][city]" value="Anytown" />
  <button type="submit">Submit</button>
</form>
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
  console.log(req.body);
  // Output: { user: { name: 'John Doe', address: { street: '123 Main St', city: 'Anytown' } } }
});
