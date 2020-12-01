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
        },
        throgg: {
            row: 1,
            content: [
                {
                    quest: 9,
                    blockContent: ['theWintertoothCrown']
                },
                {
                    restrictionLevel: 7,
                    blockContent: ['eyeOfTheGods']
                },
                {
                    restrictionLevel: 12,
                    blockContent: ['mutantRegeneration']
                },
                {
                    restrictionLevel: 15,
                    blockContent: ['kingOfTrolls']
                },
                {
                    blockContent: ['primordialMasters']
                },
                {
                    blockContent: ['monstrousFiends']
                },
                {
                    blockContent: ['voiceOfTheDarkGods']
                },
                {
                    restrictionLevel: 9,
                    blockContent: ['auraOfChaos']
                }
            ]
        },
        marauder: {
            row: 1,
            content: [
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
                    blockContent: ['voiceOfTheDarkGods']
                },
                {
                    restrictionLevel: 20,
                    blockContent: ['immortality']
                }
            ]
        }
    },
    row2: {
        marauder: {
            row: 2,
            content: [
                {
                    restrictionLimited: ['noxiousVessel', 'putrefyingOoze', 'spiritWanderer', 'darkDeceiver', 'indulgerInTheExotic', 'intoxicatingVisions'],
                    blockContent: ['drinkerOfBlood', 'chronsWrath'],
                },
                {
                    restrictionCount: 4,
                    blockContent: ['furyOfTheHound'],
                },
                {
                    restrictionLimited: ['drinkerOfBlood', 'chronsWrath', 'spiritWanderer', 'darkDeceiver', 'indulgerInTheExotic', 'intoxicatingVisions'],
                    blockContent: ['noxiousVessel', 'putrefyingOoze']
                },
                {
                    restrictionCount: 4,
                    blockContent: ['plagueOfTheCrow'],
                },
                {
                    restrictionLimited: ['spiritWanderer', 'darkDeceiver', 'noxiousVessel', 'putrefyingOoze', 'drinkerOfBlood', 'chronsWrath'],
                    blockContent: ['indulgerInTheExotic', 'intoxicatingVisions'],
                },
                {
                    restrictionCount: 4,
                    blockContent: ['seductionOfTheSerpent'],
                },
                {
                    restrictionLimited: ['indulgerInTheExotic', 'intoxicatingVisions', 'noxiousVessel', 'putrefyingOoze', 'drinkerOfBlood', 'chronsWrath'],
                    blockContent: ['spiritWanderer', 'darkDeceiver']
                },
                {
                    restrictionCount: 4,
                    blockContent: ['sorceryOfTheEagle']
                }
            ]
        }
    },
    row3: {
        // marauder: {
        //     row: 3,
        //     content: [
        //         {
        //             restrictionLimited: ['spiritWanderer', 'darkDeceiver', 'noxiousVessel', 'putrefyingOoze', 'drinkerOfBlood', 'chronsWrath'],
        //             blockContent: ['indulgerInTheExotic', 'intoxicatingVisions'],
        //         },
        //         {
        //             restrictionCount: 4,
        //             blockContent: ['seductionOfTheSerpent'],
        //         },
        //         {
        //             restrictionLimited: ['indulgerInTheExotic', 'intoxicatingVisions', 'noxiousVessel', 'putrefyingOoze', 'drinkerOfBlood', 'chronsWrath'],
        //             blockContent: ['spiritWanderer', 'darkDeceiver']
        //         },
        //         {
        //             restrictionCount: 4,
        //             blockContent: ['sorceryOfTheEagle']
        //         }
        //     ]
        // },
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
        },
        throgg: {
            row: 3,
            content: [
                {
                    quest: 1,
                    blockContent: ['copiousVomit'],
                },
                {
                    restrictionChoice: 'copiousVomit',
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
        },
        throgg: {
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
                    blockContent: ['mastersOfTheFen']
                },
                {
                    restrictionChoice: 'mastersOfTheFen',
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