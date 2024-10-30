const express = require('express');
const bodyParser = require('body-parser');
const {hostRouter} = require('./routers/hostRouter');
const storeRouter = require('./routers/storeRouter');
const path = require('path');
const rootDir = require('./utils.js/path-util');


const app = express();

app.set('view engine','ejs');
app.set('views',path.join(rootDir,'views'));

app.use(express.static(path.join(rootDir,'public')));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(storeRouter);
app.use('/host',hostRouter);

app.use((req, res, next) => {
  res.status(404).render('404',{pageTitle: 'Page not found'});
});

app.listen(3000,()=>{
  console.log('Server is running on http://localhost:3000');
})