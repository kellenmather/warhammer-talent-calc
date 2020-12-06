const WoodElves = require('./woodElves.js');
const Schools = require('./magicSchools.js');

// This is where each lord has his row reference data saved

let woodElves = {
    orion: [
        { ...WoodElves.rows.row1.orion },
        { ...WoodElves.rows.row2.orion },
        { ...WoodElves.rows.row3.orion },
        { ...WoodElves.rows.row5.orion },
        { ...WoodElves.rows.row6.woodElves },
        { ...WoodElves.rows.row9.woodElves }
    ],
    durthu: [
        { ...WoodElves.rows.row1.durthu },
        { ...Schools.magic.durthu },
        { ...WoodElves.rows.row3.durthu },
        { ...WoodElves.rows.row5.durthu },
        { ...WoodElves.rows.row6.woodElves },
        { ...WoodElves.rows.row9.woodElves }
    ],
    twilight: [
        { ...WoodElves.rows.row1.twilight },
        { ...WoodElves.rows.row2.twilight },
        { ...WoodElves.rows.row3.twilight },
        { ...WoodElves.rows.row6.woodElves },
        { ...WoodElves.rows.row9.woodElves }
    ],
    drycha: [
        { ...WoodElves.rows.row1.drycha },
        { ...WoodElves.rows.row2.drycha },
        { ...Schools.magic.shadow },
        { ...WoodElves.rows.row5.durthu },
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
        { ...WoodElves.rows.row1.treeman },
        { ...Schools.magic.treeman },
        { ...WoodElves.rows.row3.woodElves },
        { ...WoodElves.rows.row5.woodElves },
        { ...WoodElves.rows.row6.woodElves },
        { ...WoodElves.rows.row9.woodElves }
    ],
    spellweaver: [
        { ...WoodElves.rows.row1.spellweaver },
        { ...WoodElves.rows.row2.spellweaver },
        { ...WoodElves.rows.row5.woodElves },
        { ...WoodElves.rows.row6.woodElves },
        { ...WoodElves.rows.row9.woodElves }
    ],
    malevolent: [
        { ...WoodElves.rows.row2.woodElves },
        { ...WoodElves.rows.row4.malevolent },
        { ...WoodElves.rows.row6.woodElves },
        { ...WoodElves.rows.row9.woodElves }
    ]
}

exports.getLord = (lord, type) => {
    console.log(lord, type)
    let data = JSON.parse(JSON.stringify(woodElves[lord]));
    if (Schools.magic[type]) data.push(Schools.magic[type]);
    if (lord === "malevolent") data.push(WoodElves.rows.row1[lord + type]);
    return data;
}