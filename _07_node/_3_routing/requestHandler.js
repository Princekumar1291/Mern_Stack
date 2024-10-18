const fs = require("fs");
const { URLSearchParams } = require("url");


const requestHandler = (req, res) => {
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
    res.end();
  }
  else if(req.url === "/buy-product"){
    console.log("form data received: ");
    const arr=[];
    req.on("data",(data)=>{
      arr.push(data);
    })
    req.on("end",()=>{
      const body=Buffer.concat(arr).toString();
      console.log(body);
      const params= new URLSearchParams(body);
      console.log(params);
      const paramsObject=Object.fromEntries(params);
      console.log(paramsObject);
      fs.appendFile(__filename + '.product.txt', JSON.stringify(paramsObject) + '\n', (err) => {
        if (err) {
          console.error(err);
          res.statusCode = 500;
          res.end("Internal Server Error");
        }
        else {
          res.statusCode = 302;
          res.setHeader("Location", "/products");
          res.end();
        }
      });
    })
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
    res.end();
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
    res.end();
  } 
  else if (req.url === "/contact") {
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
    res.end();
  } 
  else {
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
    res.end();
  }
};

// export { requestHandler }; //named export

module.exports=requestHandler //default export

// module.exports={           //object export
//   requestHandler1: requestHandler,
//   requestHandler2: requestHandler
// }
