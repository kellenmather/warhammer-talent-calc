const db = require('../tempDataBase/db.js');

exports.getRows = (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true);

    let response = db.rows
    console.log('req =>', db);
    res.send({ response });
};

exports.getSkills = (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true);

    let response = db.skills
    console.log('req =>', db);
    res.send({ response });
};
