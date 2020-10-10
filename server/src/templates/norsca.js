exports.rows = {
    row1: {
        wulfrik: {
            row: 1,
            content: [
                {
                    quest: 9,
                    blockContent: ['swordOfTorgald']
                },
                {
                    restrictionLevel: 4,
                    blockContent: ['norscanWarhorse']
                },
                {
                    restrictionLevel: 10,
                    blockContent: ['marauderChariot']
                },
                {
                    restrictionLevel: 18,
                    blockContent: ['warMammoth']
                },
                {
                    restrictionLevel: 7,
                    blockContent: ['eyeOfTheGods']
                },
                {
                    restrictionLevel: 12,
                    blockContent: ['theEternalChallenger']
                },
                {
                    restrictionLevel: 15,
                    blockContent: ['worldWalker']
                },
                {
                    blockContent: ['juggernautsOfTheSarl']
                },
                {
                    blockContent: ['ferventCreatures']
                },
                {
                    blockContent: ['voiceOfTheDarkGods']
                },
                {
                    restrictionLevel: 9,
                    blockContent: ['auraOfChaos']
                }
            ]
        }
    },
    row3: {
        wulfrik: {
            row: 3,
            content: [
                {
                    quest: 1,
                    blockContent: ['seafang'],
                },
                {
                    restrictionChoice: 'seafang',
                    blockContent: ['devastatingCharge', 'thickSkinned', 'hardToHit', 'deadlyBlade'],
                },
                {
                    restrictionCount: 4,
                    blockContent: ['foeSeeker']
                },
                {
                    restrictionChoice: 'foeSeeker',
                    blockContent: ['woundMaker', 'scarredVeteran', 'indomitable', 'quicksilver'],
                },
                {
                    restrictionCount: 4,
                    blockContent: ['hunterOfChampions']
                }
            ]
        }
    },
    row6: {
        norsca: {
            row: 6,
            content: [
                {
                    blockContent: ['dominatingPresence']
                },
                {
                    restrictionChoice: 'dominatingPresence',
                    blockContent: ['fearsomeWarriors', 'beastSlayers', 'unnaturalSelection', 'frostbitten', 'hailOfTeeth', 'monstersOfTheNorth']
                },
                {
                    restrictionCount: 6,
                    blockContent: ['rally']
                },
                {
                    restrictionChoice: 'rally',
                    blockContent: ['championsOfTheNorth', 'hardenedHunters', 'icyWrath', 'hulksOfDeath']
                },
                {
                    restrictionCount: 1,
                    blockContent: [ 'standOrDie', 'fightOrDie', { name: 'standOrDie', restrictionLimited: ['fightOrDie'] }, { name: 'fightOrDie', restrictionLimited: ['standOrDie'] }]
                }
            ]
        }
    },
    row9: {
        norsca: {
            row: 9,
            content: [
                {
                    blockContent: ['routeMarcher']
                },
                {
                    restrictionChoice: 'routeMarcher',
                    blockContent: ['despoilers', 'serveOrDie', 'norseResilience', 'swellingOfDoom']
                },
                {
                    restrictionCount: 4,
                    blockContent: ['devourersOfFlesh']
                },
                {
                    restrictionChoice: 'devourersOfFlesh',
                    blockContent: ['lightningStrike', 'savageSkills', 'unnaturalHealing', 'fuelledByWar']
                },
                {
                    restrictionCount: 4,
                    blockContent: ['spawnOfChaos']
                }
            ]
        }
    }
}