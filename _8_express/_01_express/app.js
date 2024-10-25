const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log("First middleware",`${req.method} ${req.url}`);
    next();
});

app.use((req, res, next) => { //it will run for all routes
    console.log("Second middleware",`${req.method} ${req.url}`);
    next();
});

app.use("/test",(req,res,next)=>{  //it will run for all routes starting with /test
    console.log("Third middleware",`${req.method} ${req.url}`);
    res.send("<h1>Test</h1>");
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});


//notes
// order matters
// can not call next() after res.send()
// "/" matches all routes
// calling res.send() implicitly calls res.end()