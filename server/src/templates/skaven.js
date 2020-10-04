exports.rows = {
    row1: {
        warlord: {
            row: 1,
            content: [
                {
                    restrictionLevel: 12,
                    blockContent: ['bonebreaker']
                },
                {
                    restrictionLevel: 8,
                    blockContent: ['sneaky']
                },
                {
                    restrictionLevel: 8,
                    blockContent: ['tricksy']
                },
                {
                    restrictionLevel: 13,
                    blockContent: ['warpstoneWeapon']
                },
                {
                    restrictionLevel: 20,
                    blockContent: ['immortality']
                }
            ]
        },
        assassin: {
            row: 1,
            content: [
                {
                    blockContent: ['tougherThanHeSeems']
                },
                {
                    restrictionLevel: 8,
                    blockContent: ['ratFu']
                },
                {
                    restrictionLevel: 8,
                    blockContent: ['sneaky']
                },
                {
                    restrictionLevel: 8,
                    blockContent: ['tricksy']
                },
                {
                    restrictionLevel: 20,
                    blockContent: ['immortality']
                }
            ]
        },
        warlock: {
            row: 1,
            content: [
                {
                    restrictionLevel: 7,
                    blockContent: ['doomFlayer']
                },
                {
                    restrictionLevel: 15,
                    blockContent: ['doomwheel']
                },
                {
                    restrictionLevel: 8,
                    blockContent: ['sneaky']
                },
                {
                    restrictionLevel: 8,
                    blockContent: ['tricksy']
                },
                {
                    restrictionLevel: 20,
                    blockContent: ['immortality']
                }
            ]
        },
        seer: {
            row: 1,
            content: [
                {
                    restrictionLevel: 16,
                    blockContent: ['screamingBell']
                },
                {
                    restrictionLevel: 4,
                    blockContent: ['warpstoneTokens']
                },
                {
                    restrictionLevel: 8,
                    blockContent: ['sneaky']
                },
                {
                    restrictionLevel: 8,
                    blockContent: ['tricksy']
                },
                {
                    restrictionLevel: 20,
                    blockContent: ['immortality']
                }
            ]
        },
    },
    row2: {
        warlord: {
            row: 2,
            content: [
                {
                    restrictionLevel: 13,
                    restrictionLimited: ['dastardlyDevious', 'ravenousExpansion'],
                    blockContent: ['lifeIsCheap']
                },
                {
                    restrictionLevel: 13,
                    restrictionLimited: ['lifeIsCheap', 'ravenousExpansion'],
                    blockContent: ['dastardlyDevious']
                },
                {
                    restrictionLevel: 13,
                    restrictionLimited: ['lifeIsCheap', 'dastardlyDevious'],
                    blockContent: ['ravenousExpansion']
                }
            ]
        },
        assassin: {
            row: 2,
            content: [
                {
                    restrictionLevel: 6,
                    blockContent: ['expertAmbusher']
                },
                {
                    restrictionChoice: 'expertAmbusher',
                    blockContent: ['stabInTheBack', 'concealmentBombs', 'shurikenJitsu']
                },
                {
                    restrictionCount: 3,
                    blockContent: ['cracklebombs']
                }
            ]
        },
        warlock: {
            row: 2,
            content: [
                {
                    restrictionLevel: 10,
                    blockContent: ['powerOverload']
                },
                {
                    restrictionLevel: 10,
                    blockContent: ['specimenCollector']
                },
                {
                    restrictionLevel: 13,
                    restrictionChoice: 'specimenCollector',
                    blockContent: ['vehicleEngineer', 'weaponsEngineer', 'constructionEngineer']
                },
                {
                    restrictionCount: 1,
                    blockContent: ['brassOrb']
                }
            ]
        },
        seer: {
            row: 2,
            content: [
                {
                    restrictionLevel: 13,
                    blockContent: ['voiceOfTheHornedRat']
                },
                {
                    restrictionLevel: 13,
                    blockContent: ['envoyOfTheCouncil']
                }
            ]
        }
    },
    row3: {
        warlord: {
            row: 3,
            content: [
                {
                    blockContent: ['tailWeapon'],
                },
                {
                    restrictionChoice: 'tailWeapon',
                    blockContent: ['ruinDecay', 'thickSkinned', 'bladeMaster', 'indomitable'],
                },
                {
                    restrictionCount: 4,
                    blockContent: ['verminousValour']
                },
                {
                    restrictionChoice: 'foeSeeker',
                    blockContent: ['woundMaker', 'scarredVeteran', 'bladeShield', 'expeditiousEndeavour']
                },
                {
                    restrictionCount: 4,
                    blockContent: ['deadlyOnslaught']
                }
            ]
        },
        assassin: {
            row: 3,
            content: [
                {
                    blockContent: ['tailWeapon'],
                },
                {
                    restrictionChoice: 'tailWeapon',
                    blockContent: ['ruinDecay', 'deadeye', 'bladeMaster', 'indomitable'],
                },
                {
                    restrictionCount: 4,
                    blockContent: ['slippery']
                },
                {
                    restrictionChoice: 'foeSeeker',
                    blockContent: ['woundMaker', 'scarredVeteran', 'piercingShots', 'expeditiousEndeavour']
                },
                {
                    restrictionCount: 4,
                    blockContent: ['deadlyOnslaught']
                }
            ]
        }
    },
    row4: {
        warlock: {
            row: 4,
            content: [
                {
                    blockContent: ['tailWeapon'],
                },
                {
                    restrictionChoice: 'tailWeapon',
                    blockContent: ['augmentedWeapon', 'scarredVeteran', 'warpForgedArmour', 'fearRepressionStimuli'],
                }
            ]
        },
        seer: {
            row: 4,
            content: [
                {
                    blockContent: ['tailWeapon'],
                },
                {
                    restrictionChoice: 'tailWeapon',
                    blockContent: ['woundMaker', 'scarredVeteran', 'expeditiousEndeavour'],
                }
            ]
        }
    },
    row6: {
        warlord: {
            row: 6,
            content: [
                {
                    blockContent: ['inspiringPresence']
                },
                {
                    restrictionChoice: 'inspiringPresence',
                    blockContent: ['packLeader', 'infiltrator', 'blastmaster', 'respectedFeared', 'moulderKnowledge', 'engineeringSkill']
                },
                {
                    restrictionCount: 6,
                    blockContent: ['rally']
                },
                {
                    restrictionChoice: 'rally',
                    blockContent: ['whipSmart', 'gutterWise', 'warpSmart', 'mutagenicElixirs']
                },
                {
                    restrictionCount: 1,
                    blockContent: ['standOrDie']
                }
            ]
        }
    },
    row9: {
        skaven: {
            row: 9,
            content: [
                {
                    blockContent: ['routeMarcher']
                },
                {
                    restrictionChoice: 'routeMarcher',
                    blockContent: ['looter', 'ancientCunning', 'bondedService', { name: 'dictatorial', restrictionLimited: ['corruptive'] }, { name: 'corruptive', restrictionLimited: ['dictatorial'] }]
                },
                {
                    restrictionCount: 4,
                    blockContent: ['draftmaster']
                },
                {
                    restrictionChoice: 'draftmaster',
                    blockContent: ['lightningStrike', 'quartermaster', 'wary', 'mineAllMine']
                },
                {
                    restrictionCount: 4,
                    blockContent: ['renownedFeared']
                }
            ]          
        }
    }
}
