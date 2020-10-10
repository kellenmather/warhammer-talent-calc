const Norsca = require('./norsca.js');
const Schools = require('./magicSchools.js');

// This is where each lord has his row reference data saved

let norsca = {
    wulfrik: [
        { ...Norsca.rows.row1.wulfrik },
        { ...Norsca.rows.row3.wulfrik },
        { ...Norsca.rows.row6.norsca },
        { ...Norsca.rows.row9.norsca }
    ]
}

exports.getLord = (lord, type) => {
    let data = norsca[lord][type] ? norsca[lord][type] : norsca[lord];
    if (Schools.magic[type]) data.push(Schools.magic[type])
    return data
}