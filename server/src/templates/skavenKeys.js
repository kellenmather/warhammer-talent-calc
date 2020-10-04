const Skaven = require('./skaven.js');
const Schools = require('./magicSchools.js');

// This is where each lord has his row reference data saved

let skaven = {
    warlord: [
        { ...Skaven.rows.row1.warlord },
        { ...Skaven.rows.row2.warlord },
        { ...Skaven.rows.row3.warlord },
        { ...Skaven.rows.row6.warlord },
        { ...Skaven.rows.row9.skaven }
    ],
    assassin: [
        { ...Skaven.rows.row1.assassin },
        { ...Skaven.rows.row2.assassin },
        { ...Skaven.rows.row3.assassin },
        { ...Skaven.rows.row6.warlord },
        { ...Skaven.rows.row9.skaven }
    ],
    warlock: [
        { ...Skaven.rows.row1.warlock },
        { ...Skaven.rows.row2.warlock },
        { ...Schools.magic.warlock },
        { ...Skaven.rows.row4.warlock },
        { ...Skaven.rows.row6.warlord },
        { ...Skaven.rows.row9.skaven }
    ],
    seer: [
        { ...Skaven.rows.row1.seer },
        { ...Skaven.rows.row2.seer },
        { ...Skaven.rows.row4.seer },
        { ...Skaven.rows.row6.warlord },
        { ...Skaven.rows.row9.skaven }
    ]
}

exports.getLord = (lord, type) => {
    let data = skaven[lord][type] ? skaven[lord][type] : skaven[lord];
    if (Schools.magic[type]) data.push(Schools.magic[type])
    return data
}