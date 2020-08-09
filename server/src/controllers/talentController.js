const db = require('../tempDataBase/db.js');
const keys = require('../templates/keys.js');

exports.getRows = (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true);

    let params = req.params;
    let response;

    if (params.type) {
        response = keys[params.race][params.lord][params.type]
    } else {
        response = keys[params.race][params.lord]
    }

    res.send({ response });
};

// TODO: shift skills from tempDB to MongoDB
exports.getSkills = (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true);

    let response = db.skills
    res.send({ response });
};
