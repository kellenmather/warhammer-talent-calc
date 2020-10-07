const WoodElves = require('./woodElves.js');
const Schools = require('./magicSchools.js');

// This is where each lord has his row reference data saved

let woodElves = {
    orion: [
        { ...WoodElves.rows.row1.orion },
        { ...WoodElves.rows.row2.orion },
        { ...WoodElves.rows.row3.orion },
        { ...WoodElves.rows.row5.woodElves },
        { ...WoodElves.rows.row6.woodElves },
        { ...WoodElves.rows.row9.woodElves }
    ],
    durthu: [
        { ...WoodElves.rows.row1.durthu },
        { ...Schools.magic.durthu },
        { ...WoodElves.rows.row3.woodElves },
        { ...WoodElves.rows.row5.woodElves },
        { ...WoodElves.rows.row6.woodElves },
        { ...WoodElves.rows.row9.woodElves }
    ],
    glade: [
        { ...WoodElves.rows.row1.glade },
        { ...WoodElves.rows.row2.glade },
        { ...WoodElves.rows.row3.woodElves },
        { ...WoodElves.rows.row5.woodElves },
        { ...WoodElves.rows.row6.woodElves },
        { ...WoodElves.rows.row9.woodElves }
    ],
    treeman: [
        { ...WoodElves.rows.row1.durthu },
        { ...Schools.magic.durthu },
        { ...WoodElves.rows.row3.woodElves },
        { ...WoodElves.rows.row5.woodElves },
        { ...WoodElves.rows.row6.woodElves },
        { ...WoodElves.rows.row9.woodElves }
    ]
}

exports.getLord = (lord, type) => {
    let data = woodElves[lord][type] ? woodElves[lord][type] : woodElves[lord];
    if (Schools.magic[type]) data.push(Schools.magic[type])
    return data
}