const db = require('../tempDataBase/db.js');

exports.get = (req, res) => {
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    let response = db.rows
    console.log('req =>', db);
    res.send({ response });
}
