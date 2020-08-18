const Darkelves = require('../templates/darkElves.js');
const Schools = require('./magicSchools.js');

// This is where each lord has his row reference data saved

let darkelves = {
    dreadlord: {
        crossbow: [
            { ...Darkelves.rows.row1.dreadlord },
            { ...Darkelves.rows.row2.lords },
            { ...Darkelves.rows.row3.crossbow },
            { ...Darkelves.rows.row6.crossbow },
            { ...Darkelves.rows.row9.darkElves }
        ],
        shield: [
            { ...Darkelves.rows.row1.dreadlord },
            { ...Darkelves.rows.row2.lords },
            { ...Darkelves.rows.row3.shield },
            { ...Darkelves.rows.row6.shield },
            { ...Darkelves.rows.row9.darkElves }
        ]
    },
    beastmaster: [
        { ...Darkelves.rows.row1.beastmaster },
        { ...Darkelves.rows.row2.lords },
        { ...Darkelves.rows.row3.beastmaster },
        { ...Darkelves.rows.row4.beastmaster },
        { ...Darkelves.rows.row6.beastmaster },
        { ...Darkelves.rows.row9.darkElves }
    ],
    blackArk: [
        { ...Darkelves.rows.row1.blackArk },
        { ...Darkelves.rows.row2.blackArk },
        { ...Darkelves.rows.row3.crossbow },
        { ...Darkelves.rows.row6.crossbow },
        { ...Darkelves.rows.row9.darkElves }
    ],
    malekith: [
        { ...Darkelves.rows.row1.malekith },
        { ...Darkelves.rows.row2.malekith },
        { ...Darkelves.rows.row3.malekith },
        { ...Schools.magic.fire },
        { ...Darkelves.rows.row6.malekith },
        { ...Darkelves.rows.row9.darkElves }
    ],
    malus: [
        { ...Darkelves.rows.row1.malus },
        { ...Darkelves.rows.row2.malus },
        { ...Darkelves.rows.row3.shield },
        { ...Darkelves.rows.row6.shield },
        { ...Darkelves.rows.row9.darkElves }
    ],
    lokhir: [
        { ...Darkelves.rows.row1.lokhir },
        { ...Darkelves.rows.row2.lokhir },
        { ...Darkelves.rows.row3.shield },
        { ...Darkelves.rows.row6.shield },
        { ...Darkelves.rows.row9.darkElves }
    ],
    morathi: [
        { ...Darkelves.rows.row1.morathi },
        { ...Darkelves.rows.row2.morathi },
        { ...Darkelves.rows.row3.morathi },
        { ...Schools.magic.morathi },
        { ...Darkelves.rows.row6.malekith },
        { ...Darkelves.rows.row9.darkElves }
    ],
    hellebron: [
        { ...Darkelves.rows.row1.hellebron },
        { ...Darkelves.rows.row2.hellebron },
        { ...Darkelves.rows.row3.hellebron },
        { ...Darkelves.rows.row6.malekith },
        { ...Darkelves.rows.row9.darkElves }
    ],
    sorceress: [
        { ...Darkelves.rows.row1.sorceress },
        { ...Darkelves.rows.row2.lords },
        { ...Darkelves.rows.row6.shield },
        { ...Darkelves.rows.row9.darkElves }
    ]
}

exports.getLord = (lord, type) => {
    let response = darkelves[lord][type] ? JSON.parse(JSON.stringify(darkelves[lord][type])) : JSON.parse(JSON.stringify(darkelves[lord]));
    if (Schools.magic[type]) response.push(Schools.magic[type])
    return response
}