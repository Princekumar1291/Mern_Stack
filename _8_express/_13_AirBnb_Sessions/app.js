// Core Modules
const path = require("path");

// External Module
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

// Local Module
const { hostRouter } = require("./routers/hostRouter");
const storeRouter = require("./routers/storeRouter");
const authRouter = require("./routers/authRouter");
const rootDir = require("./util/path-util");
const errorController = require('./controllers/errorController');

const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(rootDir, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
// Use express-session middleware

const sessionStore = new MongoDBStore({
  uri: "mongodb+srv://princekumar7320918928:uYvKrN9WlfdauaiK@princecluster.ns8if.mongodb.net/airbnb?retryWrites=true&w=majority&appName=PrinceCluster",
  collection: 'sessions'
})
app.use(session({
  secret: 'PrinceMaurya', // Secret key to sign the session ID cookie
  resave: false,              // Prevents resaving a session if nothing has changed
  saveUninitialized: false,   // Don't save uninitialized sessions (e.g., sessions with no data)
  store: sessionStore,               // Use the MongoDB session store
  cookie: {                   // Cookie options
    secure: false,            // Set to true if using HTTPS
    maxAge: 60000             // Session expiration time in milliseconds (e.g., 1 minute)
  }
}));

app.use(storeRouter);
app.use('/host',(req,res,next)=>{
  if(req.session.isLoggedIn){
    next();
  }else{
    return res.redirect('/login');
  }
})
app.use("/host", hostRouter);
app.use(authRouter);

app.use(errorController.get404);


const PORT = 3001;
const MONGO_DB_URL = "mongodb+srv://princekumar7320918928:uYvKrN9WlfdauaiK@princecluster.ns8if.mongodb.net/airbnb?retryWrites=true&w=majority&appName=PrinceCluster";
mongoose.connect(MONGO_DB_URL).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}`);
  });
});