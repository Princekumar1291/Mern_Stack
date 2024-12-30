const http=require('http');
const PORT=3000;

const requestHandler = (req, res) => {
  // console.log(Object.keys(req));
  // console.log(req.statusMessage);
  
  // console.log(Object.keys(res));
  // console.log(req._trailer);

  console.log(Object.getOwnPropertyNames(req));
};

// Example usage with your incoming request object.


const requestHandler1=(req,res)=>{
  console.log("request url: ",req.url);
  console.log("request method: ",req.method);
  console.log("request headers: ",req.headers);
  console.log("request body: ",req.body);
}

const requestHandler2=(req,res)=>{
  console.log("request url: ",req.url);
  console.log("request method: ",req.method);
  console.log("request headers: ",req.headers);
  console.log("request body: ",req.body);
  res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head>');
  res.write('<title>My First Page</title>');
  res.write('</head>');
  res.write('<body>');
  res.write('<h1>Hello from my Node.js Server!</h1>');
  res.write('</body>');
  res.write('</html>');
  res.end();
}


const requestHandler3=(req,res)=>{
  res.setHeader('Content-Type','text/html');
  res.write(`
    <html>
      <head>
        <title>My First Page</title>
      </head>
      <body>
        <h1>Hello from my Node.js Server!</h1>
      </body>
    </html>
  `);
  res.end();
}



const server=http.createServer(requestHandler3);

server.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`);
});
