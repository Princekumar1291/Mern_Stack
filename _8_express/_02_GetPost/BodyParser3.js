<form action="/submit" method="post">
  <input type="text" name="user[name]" value="John Doe" />
  <input type="text" name="user[address][street]" value="123 Main St" />
  <input type="text" name="user[address][city]" value="Anytown" />
  <button type="submit">Submit</button>
</form>




const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
  console.log(req.body);
  // Output: { user: { name: 'John Doe', address: { street: '123 Main St', city: 'Anytown' } } }
  res.send("Form with nested data (parsed into objects) submitted!");
});
