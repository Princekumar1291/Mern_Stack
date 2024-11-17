const express = require('express');
const app = express();
const bodyParser=require('body-parser');
const path=require('path');
const rootDir = require('./utils/rootDir');
const userRouter = require('./routers/user');
const ownerRouter = require('./routers/owner');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(rootDir,'public')))

app.set('view engine','ejs');
app.set('views',path.join(rootDir,'views'))

app.use('/',userRouter);
app.use('/host',ownerRouter);


app.listen(5000,()=>{
  console.log("Server Started");
})