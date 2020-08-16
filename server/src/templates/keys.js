const Darkelves = require('../templates/darkElves.js');
const Schools = require('../templates/schools.js');

// This is where each lord has his row reference data saved
exports.darkelves = {
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
        { ...Schools.magicSchools.darkMagic },
        { ...Darkelves.rows.row6.malekith },
        { ...Darkelves.rows.row9.darkElves }
    ]
    // sorceress: {
    //     darkMagic: {
    //         row1 = rows2.row1.sorceress,
    //         row2 = rows2.row2.lords,
    //         row4 = rows2.row4.darkMagic,
    //         row6 = rows2.row6.shield,
    //         row9 = rows2.row9.darkElves
    //     }
    // },

}