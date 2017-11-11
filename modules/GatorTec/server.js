const db = require('./server/config/db.js');
const port = process.env.PORT || 8080;
const mongoose = require('mongoose');
const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoStore = require('connect-mongo')(expressSession);

// App Configuration
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('client'));
app.use(cookieParser());
app.use(expressSession({
  // saveUninitialized: true,
  // resave: false,
  store: new mongoStore({ mongooseConnection: db }),
  secret: 'Software-Engineering-2B_GatorTec-Service-Tracker',
  name: 'session'
}));
app.use(passport.initialize());
app.use(passport.session());

require('./server/config/passport.js')(passport);

// Routing files
const repairOrderRouter = require('./server/routes/repairOrderRoutes.js');
const userRouter = require('./server/routes/userRoutes.js');

// Requests made to modify specific models are sent to the corresponding router
app.use('/repairOrder', repairOrderRouter);
app.use('/user', userRouter);

// Serves the homepage index.html
app.get('/', function(req, res){
  res.sendFile('./client/index.html', { root: __dirname });
});

// Redirects all unrecognized paths to the root path a.k.a the homepage
app.get('/*', function(req, res){
  return res.redirect('/');
});

// Sets the port which the server listens to requests from
app.listen(port, function(){
  console.log('Server listening on port ' + port);
});
