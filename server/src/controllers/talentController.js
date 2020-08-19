const db = require('../tempDataBase/db.js');
const DarkElvesKeys = require('../templates/darkElvesKeys.js');
const HighElvesKeys = require('../templates/highElvesKeys.js');

exports.getRows = (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true);

    let params = req.params;
    let response;

    console.log(params)
    
    switch (params.race) {
        case 'darkelves':
            response = DarkElvesKeys.getLord(params.lord, params.type)
            break;
        case 'highelves':
            console.log('he case');
            response = HighElvesKeys.getLord(params.lord, params.type)
            break;
        default:
            console.log('error');
    }

    // response = DarkElvesKeys.getLord(params.lord, params.type)

    res.send({ response });
};

// TODO: shift skills from tempDB to MongoDB
exports.getSkills = (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true);

    let response = db.skills
    res.send({ response });
};
