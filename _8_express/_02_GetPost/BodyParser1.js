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
  console.log(req.body); 
  // Output: { name: 'John Doe', email: 'john@example.com' }
  res.send("Form submitted!");
});
