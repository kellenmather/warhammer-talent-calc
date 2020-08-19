const Darkelves = require('./darkElves.js');
const Schools = require('./magicSchools.js');

let highelves = {
    tyrion: [
        { ...Darkelves.rows.row1.malekith },
        { ...Darkelves.rows.row2.malekith },
        { ...Darkelves.rows.row3.malekith },
        { ...Schools.magic.fire },
        { ...Darkelves.rows.row6.malekith },
        { ...Darkelves.rows.row9.darkElves }
    ]
}

exports.getLord = (lord, type) => {
    let response = highelves[lord][type] ? highelves[lord][type] : highelves[lord];
    if (Schools.magic[type]) response.push(Schools.magic[type])
    return response
}