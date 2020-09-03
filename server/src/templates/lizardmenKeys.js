const Lizardmen = require('./lizardmen.js');
const Schools = require('./magicSchools.js');


let lizardmen = {
    saurus: [
        { ...Lizardmen.rows.row1.saurus },
        { ...Lizardmen.rows.row2.saurus },
        { ...Lizardmen.rows.row3.saurus },
        { ...Lizardmen.rows.row6.saurus },
        { ...Lizardmen.rows.row9.saurus }
    ],
    kroxigor: [
        { ...Lizardmen.rows.row1.kroxigor },
        { ...Lizardmen.rows.row2.kroxigor },
        { ...Lizardmen.rows.row3.kroxigor },
        { ...Lizardmen.rows.row6.saurus },
        { ...Lizardmen.rows.row9.saurus }
    ],
    skink: [
        { ...Lizardmen.rows.row1.skink },
        { ...Lizardmen.rows.row2.skink },
        { ...Lizardmen.rows.row3.saurus },
        { ...Lizardmen.rows.row6.saurus },
        { ...Lizardmen.rows.row9.saurus }
    ],
    slann: [
        { ...Lizardmen.rows.row1.slann },
        { ...Lizardmen.rows.row2.slann },
        { ...Lizardmen.rows.row4.slann },
        { ...Lizardmen.rows.row6.slann },
        { ...Lizardmen.rows.row9.saurus }
    ]
}

exports.getLord = (lord, type) => {
    let data = lizardmen[lord][type] ? lizardmen[lord][type] : lizardmen[lord];
    if (Schools.magic[type]) {
        let holder = JSON.parse(JSON.stringify(Schools.magic[type])) // prevent unintended manipulation of Schools
        holder.content[4].blockContent = ["Greater Arcane Conduit"]; // replace Arcane Conduit with Greater Arcane Conduit
        console.log(holder.content[4].blockContent)
        data.push(holder)
    }
    return data
}
