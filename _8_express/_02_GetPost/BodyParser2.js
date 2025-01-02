<form action="/submit" method="post">
  <input type="text" name="user[name]" value="John Doe" />
  <input type="text" name="user[address][street]" value="123 Main St" />
  <input type="text" name="user[address][city]" value="Anytown" />
  <button type="submit">Submit</button>
</form>



const express = require('express');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/submit', (req, res) => {
  console.log(req.body);
  // Output: { 'user[name]': 'John Doe', 'user[address][street]': '123 Main St', 'user[address][city]': 'Anytown' }
  res.send("Form with nested data (not parsed into objects) submitted!");
});

