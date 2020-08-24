'use strict';

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

// load port from process.env file
const port = process.env.PORT || 4000;

// retrieve vm ip address
const os = require('os');
const networkInterfaces = os.networkInterfaces();
const interfaceKeys = Object.keys(networkInterfaces);
// // currently the 'ens' key is always the 2nd key revisit later
const ip = networkInterfaces[interfaceKeys[1]][0]['address'];
// const ip = 'localhost'
process.env.SERVER_IP = ip;
console.log('Server ip is: ' + ip);


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

// const port = process.env.PORT || 4000;
// app.listen(port, () => {
//     console.log(`listening on ${port}`);
// });

function listen() {
    app.listen(port);
    console.log(`listening on ${port}`);
}

const uri = "mongodb+srv://templ-placeholder"


connect();

function connect() {
    mongoose.connection
      .on('error', console.error.bind(console, 'connection error'))
      .on('disconnected', connect)
      .once('open', listen)
    return mongoose.connect(uri, {
      keepAlive: 1,
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
}