const DarkElves = require('./darkElves.js');
const Schools = require('./magicSchools.js');

// This is where each lord has his row reference data saved

let darkelves = {
    dreadlord: {
        crossbow: [
            { ...DarkElves.rows.row1.dreadlord },
            { ...DarkElves.rows.row2.lords },
            { ...DarkElves.rows.row3.crossbow },
            { ...DarkElves.rows.row6.crossbow },
            { ...DarkElves.rows.row9.darkElves }
        ],
        shield: [
            { ...DarkElves.rows.row1.dreadlord },
            { ...DarkElves.rows.row2.lords },
            { ...DarkElves.rows.row3.shield },
            { ...DarkElves.rows.row6.shield },
            { ...DarkElves.rows.row9.darkElves }
        ]
    },
    beastmaster: [
        { ...DarkElves.rows.row1.beastmaster },
        { ...DarkElves.rows.row2.lords },
        { ...DarkElves.rows.row3.beastmaster },
        { ...DarkElves.rows.row4.beastmaster },
        { ...DarkElves.rows.row6.beastmaster },
        { ...DarkElves.rows.row9.darkElves }
    ],
    blackArk: [
        { ...DarkElves.rows.row1.blackArk },
        { ...DarkElves.rows.row2.blackArk },
        { ...DarkElves.rows.row3.crossbow },
        { ...DarkElves.rows.row6.crossbow },
        { ...DarkElves.rows.row9.darkElves }
    ],
    malekith: [
        { ...DarkElves.rows.row1.malekith },
        { ...DarkElves.rows.row2.malekith },
        { ...Schools.magic.darkMagic },
        { ...DarkElves.rows.row4.malekith },
        { ...DarkElves.rows.row6.malekith },
        { ...DarkElves.rows.row9.darkElves }
    ],
    malus: [
        { ...DarkElves.rows.row1.malus },
        { ...DarkElves.rows.row2.malus },
        { ...DarkElves.rows.row3.shield },
        { ...DarkElves.rows.row6.shield },
        { ...DarkElves.rows.row9.darkElves }
    ],
    lokhir: [
        { ...DarkElves.rows.row1.lokhir },
        { ...DarkElves.rows.row2.lokhir },
        { ...DarkElves.rows.row3.shield },
        { ...DarkElves.rows.row6.shield },
        { ...DarkElves.rows.row9.darkElves }
    ],
    morathi: [
        { ...DarkElves.rows.row1.morathi },
        { ...DarkElves.rows.row2.morathi },
        { ...DarkElves.rows.row3.morathi },
        { ...DarkElves.rows.row4.morathi },
        { ...DarkElves.rows.row6.malekith },
        { ...DarkElves.rows.row9.darkElves }
    ],
    hellebron: [
        { ...DarkElves.rows.row1.hellebron },
        { ...DarkElves.rows.row2.hellebron },
        { ...DarkElves.rows.row3.hellebron },
        { ...DarkElves.rows.row6.malekith },
        { ...DarkElves.rows.row9.darkElves }
    ],
    sorceress: [
        { ...DarkElves.rows.row1.sorceress },
        { ...DarkElves.rows.row2.lords },
        { ...DarkElves.rows.row6.shield },
        { ...DarkElves.rows.row9.darkElves }
    ]
}

exports.getLord = (lord, type) => {
    let data = darkelves[lord][type] ? darkelves[lord][type] : darkelves[lord];
    if (Schools.magic[type]) data.push(Schools.magic[type])
    return data
}