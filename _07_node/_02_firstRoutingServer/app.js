const http = require("http");
const fs = require("fs");
const PORT = 5000;

const requestHandler1 = (req, res) => {
  console.log("request url: ", req.url);
  res.setHeader("Content-Type", "text/html");
  if (req.url === "/") {
    res.write(`
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
    `);

  }
  else if(req.url === "/buy-product"){
    console.log("form data received: ");
    const arr=[];
    req.on("data",(data)=>{
      // console.log(data.toString());
      arr.push(data);
    })
    req.on("end",()=>{
      const body=Buffer.concat(arr).toString();
      console.log(body);
    })
    fs.writeFileSync('product.txt',"this is data");
    res.statusCode=302;
    res.setHeader('Location','/products');
    console.log('Sending Response');
  } 
  else if(req.url === "/products"){
    res.write(`
      <html>
        <head>
          <title>My Products Page</title>
        </head>
        <body>
          <h1>Products Page</h1>
        </body>
      </html>
      `)
  }
  else if (req.url === "/about") {
    res.write(`
      <html>
        <head>
          <title>My About Page</title>
        </head>
        <body>
          <h1>About Page</h1>
        </body>
      </html>
    `);
  } else if (req.url === "/contact") {
    res.write(`
      <html>
        <head>
          <title>My Contact Page</title>
        </head>
        <body>
          <h1>Contact Page</h1>
        </body>
      </html>
    `);
  } else {
    res.statusCode = 404;
    res.write(`
      <html>
        <head>
          <title>Page Not Found</title>
        </head>
        <body>
          <h1>404 Page Not Found</h1>
        </body>
      </html>
    `);
  }

  res.end();
};

const server = http.createServer(requestHandler1);
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

