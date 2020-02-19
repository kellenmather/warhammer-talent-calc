const express = require('express');
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
// const ip = networkInterfaces[interfaceKeys[1]][0]['address'];
const ip = 'localhost'
// process.env.SERVER_IP = ip;
console.log('Server ip is: ' + ip);


// require route files here
const talentRouter = require('./routes/talent');

// dependency set up
app.use(morgan('combined'));
app.use(cors());
app.use(cors({
    origin:['http://' + ip + ':' + '8080'],
    //methods:['GET','POST'],
    credentials: false
}));
  
app.use(bodyParser.json());

// route libraries setup
app.use('/talent', talentRouter);

app.get('/', (req, res) => {
    res.json({
        message: 'Behold The MEVN Stack!'
    });
});

// const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});
