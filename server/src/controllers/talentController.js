const db = require('../tempDataBase/db.js');
const Keys = require('../templates/keys.js');

exports.getRows = (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true);

    let params = req.params;
    let response;

    // if (params.type) {
    //     response = keys[params.race][params.lord][params.type]
    // } else {
    //     response = keys[params.race][params.lord]
    // }
    console.log(params.lord, params.type)
    response = Keys.getLord(params.lord, params.type)

    console.log('what the controller got: ', response)

    res.send({ response });
};

// TODO: shift skills from tempDB to MongoDB
exports.getSkills = (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true);

    let response = db.skills
    res.send({ response });
};
