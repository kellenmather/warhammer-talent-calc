'use strict';

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

// load port from process.env file
const port = process.env.PORT || 4000;
const uri = process.env.URI || 'enterURIHere';

// retrieve vm ip address
const os = require('os');
const networkInterfaces = os.networkInterfaces();
const interfaceKeys = Object.keys(networkInterfaces);
// currently the 'ens' key is always the 2nd key revisit later
const ip = networkInterfaces[interfaceKeys[1]][0]['address'];
// const ip = 'localhost'
process.env.SERVER_IP = ip;

// require route files here
const talentRouter = require('./routes/talent');
const messageRouter = require('./routes/message');

// dependency set up
app.use(morgan('combined'));
app.use(cors({
    origin: ['http://' + ip + ':' + '8080', 'http://localhost:8080']
    //methods:['GET'],
}));
  
app.use(bodyParser.json());

// route libraries setup
app.use('/talent', talentRouter);
app.use('/message', messageRouter);

// ============================================
// TEMPORARY SWITCH - set to true to skip MongoDB
// and use hardcoded data from tempDataBase
// ============================================
const USE_HARDCODED_DATA = true;

function listen() {
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    if (USE_HARDCODED_DATA) {
      console.log('Running in HARDCODED DATA mode (no MongoDB)');
    }
  });
}

function connect() {
  mongoose.connection
    .on('error', console.error.bind(console, 'connection error'))
    .on('disconnected', connect)
    .once('open', listen);

  return mongoose.connect(uri, {
    // Note: useNewUrlParser and useUnifiedTopology are no longer needed in Mongoose 6+
    // keepAlive is also deprecated but left for reference
  });
}

if (USE_HARDCODED_DATA) {
  // Skip MongoDB entirely for local testing
  listen();
} else {
  // Real production path
  connect();
}
