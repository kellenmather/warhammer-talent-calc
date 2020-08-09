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
    }
    // sorceress: {
    //     darkMagic: {
    //         row1 = rows2.row1.sorceress,
    //         row2 = rows2.row2.lords,
    //         row4 = rows2.row4.sorceress,
    //         row6 = rows2.row6.shield,
    //         row9 = rows2.row9.darkElves
    //     }
    // },
    // malekith: {
    //     row1 = rows.row1.malekith,
    //     row2 = rows.row2.malekith,
    //     row3 = rows.row3.malekith,
    //     row4 = rows.row4.sorceress,
    //     row6 = rows.row6.shield,
    //     row9 = rows.row9.darkElves
    // }
}