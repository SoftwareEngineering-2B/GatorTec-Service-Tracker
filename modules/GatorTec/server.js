const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

// Routing files
const repairOrderRouter = require('./server/routes/repairOrderRoutes.js');
const employeeRouter = require('./server/routes/employeeRoutes.js');
const registrationRouter = require('./server/routes/registrationRouter.js');

// Connects to the mongoDB database using the mongoDB URI
mongoose.connect('mongodb://meanjs:meanjs@ds139844.mlab.com:39844/meanjs-swe', { useMongoClient: true }, function(){
    console.log('mongodb connected');
});

app.use(bodyParser.json());
app.use(express.static('client'));

// Requests made to modify specific models are sent to the corresponding router
app.use('/repairOrder', repairOrderRouter);
app.use('/employee', employeeRouter);
app.use('/register', registrationRouter);

// Serves the homepage index.html
app.get('/', function(req, res){
  res.sendFile('./client/views/loginPage.html', { root: __dirname });
});

// Redirects all unrecognized paths to the root path a.k.a the homepage
app.get('/*', function(req, res){
  return res.redirect('/');
});

// Sets port 8080 as the port which the server listens to requests from
app.listen(8080, function(){
  console.log('Server listening on port 8080');
});
