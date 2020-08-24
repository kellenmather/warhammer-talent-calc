const db = require('../tempDataBase/db.js');
const DarkElvesKeys = require('../templates/darkElvesKeys.js');
const HighElvesKeys = require('../templates/highElvesKeys.js');
const mongoose = require('mongoose');
const Skill = mongoose.model('Skill', new mongoose.Schema());

exports.getRows = (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true);

    let params = req.params;
    let response = { rows: null, skills: null };

    console.log(params)
    
    switch (params.race) {
        case 'darkelves':
            response.rows = DarkElvesKeys.getLord(params.lord, params.type)
            break;
        case 'highelves':
            console.log('he case');
            response.rows = HighElvesKeys.getLord(params.lord, params.type)
            break;
        default:
            console.log('error');
    }

    // push every skill name to skillArray to prep mongoDB query
    let skillArray = [];
    for (let i = 0; i < response.rows.length; i++) {
        for (let j = 0; j < response.rows[i].content.length; j++) {
            skillArray = skillArray.concat(response.rows[i].content[j].blockContent);
        }
    }

    // get all skills from mongoDB that are listed in skillArray
    if (params.race === 'darkelves') {
        Skill.find({ name: { $in: skillArray } }, function(err, test) {
            if (test) {
                response.skills = test
                console.log(test)
                res.send(response);
            } else {
                console.error('skills not received: ', err);
            }
        })
    } else {
        response.skills = db.skills;
        res.send(response)
    }
};
