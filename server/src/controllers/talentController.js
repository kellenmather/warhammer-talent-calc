const db = require('../tempDataBase/db.js');
const Keys = require('../templates/keys.js');

exports.getRows = (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true);

    let params = req.params;
    let response;

    response = Keys.getLord(params.lord, params.type)

    res.send({ response });
};

// TODO: shift skills from tempDB to MongoDB
exports.getSkills = (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true);

    let response = db.skills
    res.send({ response });
};
