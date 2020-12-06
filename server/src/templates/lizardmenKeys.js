const Lizardmen = require('./lizardmen.js');
const Schools = require('./magicSchools.js');


let lizardmen = {
    saurus: [
        { ...Lizardmen.rows.row1.saurus },
        { ...Lizardmen.rows.row2.saurus },
        { ...Lizardmen.rows.row3.saurus },
        { ...Lizardmen.rows.row6.lizardmen },
        { ...Lizardmen.rows.row9.lizardmen }
    ],
    kroxigor: [
        { ...Lizardmen.rows.row1.kroxigor },
        { ...Lizardmen.rows.row2.kroxigor },
        { ...Lizardmen.rows.row3.kroxigor },
        { ...Lizardmen.rows.row6.lizardmen },
        { ...Lizardmen.rows.row9.lizardmen }
    ],
    skink: [
        { ...Lizardmen.rows.row1.skink },
        { ...Lizardmen.rows.row2.skink },
        { ...Lizardmen.rows.row3.saurus },
        { ...Lizardmen.rows.row6.lizardmen },
        { ...Lizardmen.rows.row9.lizardmen }
    ],
    slann: [
        { ...Lizardmen.rows.row1.slann },
        { ...Lizardmen.rows.row2.slann },
        { ...Lizardmen.rows.row4.slann },
        { ...Lizardmen.rows.row6.slann },
        { ...Lizardmen.rows.row9.lizardmen }
    ],
    mazdamundi: [
        { ...Lizardmen.rows.row1.mazdamundi },
        { ...Lizardmen.rows.row2.mazdamundi },
        { ...Lizardmen.rows.row3.mazdamundi },
        { ...Lizardmen.rows.row4.mazdamundi },
        { ...Lizardmen.rows.row6.slann },
        { ...Lizardmen.rows.row9.lizardmen }
    ],
    kroqgar: [
        { ...Lizardmen.rows.row1.kroqgar },
        { ...Lizardmen.rows.row2.saurus },
        { ...Lizardmen.rows.row3.kroqgar },
        { ...Lizardmen.rows.row4.kroqgar },
        { ...Lizardmen.rows.row6.lizardmen },
        { ...Lizardmen.rows.row9.lizardmen }
    ],
    tehenhauin: [
        { ...Lizardmen.rows.row1.tehenhauin },
        { ...Lizardmen.rows.row2.tehenhauin },
        { ...Schools.magic.beasts },
        { ...Lizardmen.rows.row4.tehenhauin },
        { ...Lizardmen.rows.row6.lizardmen },
        { ...Lizardmen.rows.row9.lizardmen }
    ],
    tiktaqto: [
        { ...Lizardmen.rows.row1.tiktaqto },
        { ...Lizardmen.rows.row2.saurus },
        { ...Lizardmen.rows.row3.tiktaqto },
        { ...Lizardmen.rows.row4.tiktaqto },
        { ...Lizardmen.rows.row6.lizardmen },
        { ...Lizardmen.rows.row9.lizardmen }
    ],
    nakai: [
        { ...Lizardmen.rows.row1.nakai },
        { ...Lizardmen.rows.row2.nakai },
        { ...Lizardmen.rows.row3.kroxigor },
        { ...Lizardmen.rows.row6.lizardmen },
        { ...Lizardmen.rows.row9.nakai }
    ],
    gorrok: [
        { ...Lizardmen.rows.row1.gorrok },
        { ...Lizardmen.rows.row2.gorrok },
        { ...Lizardmen.rows.row3.saurus },
        { ...Lizardmen.rows.row6.lizardmen },
        { ...Lizardmen.rows.row9.nakai }
    ]
}

exports.getLord = (lord, type) => {
    let data = JSON.parse(JSON.stringify(lizardmen[lord]));
    if (Schools.magic[type]) {
        let holder = JSON.parse(JSON.stringify(Schools.magic[type])) // prevent unintended manipulation of Schools
        holder.content[4].blockContent = ["greaterArcaneConduit"]; // replace Arcane Conduit with Greater Arcane Conduit
        data.push(holder)
    }
    return data
}
