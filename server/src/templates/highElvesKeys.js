const HighElves = require('./highElves.js');
const Schools = require('./magicSchools.js');

let highelves = {
    tyrion: [
        { ...HighElves.rows.row1.tyrion },
        { ...HighElves.rows.row2.highElves },
        { ...HighElves.rows.row3.tyrion },
        { ...HighElves.rows.row4.tyrion },
        { ...HighElves.rows.row6.tyrion },
        { ...HighElves.rows.row9.highElves }
    ],
    teclis: [
        { ...HighElves.rows.row1.teclis },
        { ...HighElves.rows.row2.teclis },
        { ...HighElves.rows.row3.teclis },
        { ...HighElves.rows.row4.teclis },
        { ...HighElves.rows.row6.prince },
        { ...HighElves.rows.row9.highElves }
    ],
    alarielle: [
        { ...HighElves.rows.row1.alarielle },
        { ...HighElves.rows.row2.alarielle },
        { ...HighElves.rows.row3.alarielle },
        { ...HighElves.rows.row6.prince },
        { ...HighElves.rows.row9.alarielle }
    ],
    imrik: [
        { ...HighElves.rows.row1.imrik },
        { ...HighElves.rows.row2.imrik },
        { ...HighElves.rows.row3.imrik },
        { ...HighElves.rows.row6.imrik },
        { ...HighElves.rows.row9.highElves }
    ],
    alith: [
        { ...HighElves.rows.row1.alith },
        { ...HighElves.rows.row2.alith },
        { ...HighElves.rows.row3.alith },
        { ...HighElves.rows.row6.princess },
        { ...HighElves.rows.row9.alith }
    ],
    eltharion: [
        { ...HighElves.rows.row1.eltharion },
        { ...HighElves.rows.row2.eltharion },
        { ...Schools.magic.highMagic},
        { ...HighElves.rows.row4.eltharion },
        { ...HighElves.rows.row6.eltharion },
        { ...HighElves.rows.row9.highElves }
    ],
    alastar: [
        { ...HighElves.rows.row1.alastar },
        { ...HighElves.rows.row2.alastar },
        { ...HighElves.rows.row3.alastar },
        { ...HighElves.rows.row6.prince },
        { ...HighElves.rows.row9.highElves }
    ],
    prince: [
        { ...HighElves.rows.row1.prince },
        { ...HighElves.rows.row2.highElves },
        { ...HighElves.rows.row3.prince },
        { ...HighElves.rows.row6.prince },
        { ...HighElves.rows.row9.highElves }
    ],
    princess: [
        { ...HighElves.rows.row1.princess },
        { ...HighElves.rows.row2.highElves },
        { ...HighElves.rows.row3.princess },
        { ...HighElves.rows.row6.princess },
        { ...HighElves.rows.row9.highElves }
    ],
    archmage: [
        { ...HighElves.rows.row1.archmage },
        { ...HighElves.rows.row2.highElves },
        { ...HighElves.rows.row6.princess },
        { ...HighElves.rows.row9.alith }
    ]
}

exports.getLord = (lord, type) => {
    let data = JSON.parse(JSON.stringify(highelves[lord]));
    if (Schools.magic[type]) {
        // High Elves are the only race to have a mage lord that does not have Evasion and Arcane Conduit we work around that below
        let holder = JSON.parse(JSON.stringify(Schools.magic[type])) // prevent unintended manipulation of Schools
        holder.content[2].blockContent = ["potentialEnergy"]; // replace Evasion with Potential Energy
        holder.content[3].restrictionChoice = "potentialEnergy"; // replace the dependency
        holder.content[4].blockContent = ["greaterArcaneConduit"]; // replace Arcane Conduit with Greater Arcane Conduit
        data.push(holder)
    }
    return data
}