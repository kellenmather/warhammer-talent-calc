const darkelves = require('../templates/darkElves.js');

exports.darkelves = {
    dreadlord: {
        crossbow: [
            { ...darkelves.rows.row1.dreadlord },
            { ...darkelves.rows.row2.lords },
            { ...darkelves.rows.row3.crossbow },
            { ...darkelves.rows.row6.crossbow },
            { ...darkelves.rows.row9.darkElves }
        ],
        shield: [
            { ...darkelves.rows.row1.dreadlord },
            { ...darkelves.rows.row2.lords },
            { ...darkelves.rows.row3.shield },
            { ...darkelves.rows.row6.shield },
            { ...darkelves.rows.row9.darkElves }
        ]
    },
    beastmaster: [
        { ...darkelves.rows.row1.beastmaster },
        { ...darkelves.rows.row2.lords },
        { ...darkelves.rows.row3.beastmaster },
        { ...darkelves.rows.row4.beastmaster },
        { ...darkelves.rows.row6.beastmaster },
        { ...darkelves.rows.row9.darkElves }
    ],
    malekith: [
        { ...darkelves.rows.row1.malekith },
        { ...darkelves.rows.row2.malekith },
        { ...darkelves.rows.row3.malekith },
        { ...darkelves.rows.row4.malekith },
        { ...darkelves.rows.row6.malekith },
        { ...darkelves.rows.row9.darkElves }
    ]
    // sorceress: {
    //     darkMagic: {
    //         row1 = rows2.row1.sorceress,
    //         row2 = rows2.row2.lords,
    //         row4 = rows2.row4.sorceress,
    //         row6 = rows2.row6.shield,
    //         row9 = rows2.row9.darkElves
    //     }
    // },

}