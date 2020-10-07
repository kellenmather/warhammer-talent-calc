exports.rows = {
    row1: {
        orion: {
            row: 1,
            content: [
                {
                    quest: 8,
                    blockContent: ['hornOfTheWildHunt']
                },
                {
                    quest: 13,
                    blockContent: ['cloakOfIsha']
                },
                {
                    quest: 18,
                    blockContent: ['spearOfKurnous']
                },
                {
                    blockContent: ['asuryansCommand']
                },
                {
                    restrictionLevel: 10,
                    blockContent: ['rainOfSpines']
                },
                {
                    restrictionLevel: 10,
                    blockContent: ['speedOfTheHunter']
                }
            ]
        },
        durthu: {
            row: 1,
            content: [
                {
                    quest: 8,
                    blockContent: ['swordOfDaith']
                },
                {
                    restrictionLevel: 5,
                    blockContent: ['rageOfKurnous']
                },
                {
                    restrictionLevel: 5,
                    blockContent: ['theSkeweringBranch']
                },
                {
                    restrictionLevel: 8,
                    blockContent: ['skinOfTheWoods']
                },
                {
                    restrictionLevel: 10,
                    blockContent: ['rainOfSpines']
                },
                {
                    restrictionLevel: 10,
                    blockContent: ['speedOfTheHunter']
                }
            ]
        },
        glade: {
            row: 1,
            content: [
                {
                    restrictionLevel: 4,
                    blockContent: ['elvenSteedWoodElves']
                },
                {
                    restrictionLevel: 12,
                    blockContent: ['greatEagleWoodElves']
                },
                {
                    restrictionLevel: 18,
                    blockContent: ['forestDragon']
                },
                {
                    restrictionLevel: 10,
                    blockContent: ['speedOfTheHunter']
                },
                {
                    restrictionLevel: 10,
                    blockContent: ['rainOfSpines']
                },
                {
                    restrictionLevel: 20,
                    blockContent: ['immortality']
                }
            ]
        },
        treeman: {
            row: 1,
            content: [
                {
                    restrictionLevel: 5,
                    blockContent: ['theSkeweringBranch']
                },
                {
                    restrictionLevel: 8,
                    blockContent: ['skinOfTheWoods']
                },
                {
                    restrictionLevel: 10,
                    blockContent: ['rainOfSpines']
                },
                {
                    restrictionLevel: 10,
                    blockContent: ['speedOfTheHunter']
                },
                {
                    restrictionLevel: 20,
                    blockContent: ['immortality']
                }
            ]
        },
    },
    row2: {
        orion: {
            row: 2,
            content: [
                {
                    quest: 1,
                    blockContent: ['hawksTalon'],
                },
                {
                    restrictionChoice: 'hawksTalon',
                    blockContent: ['fleetfinger', 'piercingShots', 'bottomlessQuiver', 'expeditiousEndeavour'],
                },
                {
                    restrictionCount: 5,
                    blockContent: ['preyOfAnathRaema']
                }
            ]
        },
        glade: {
            row: 2,
            content: [
                {
                    blockContent: ['arrowOfKurnous'],
                },
                {
                    restrictionChoice: 'arrowOfKurnous',
                    blockContent: ['fleetfinger', 'piercingShots', 'bottomlessQuiver', 'expeditiousEndeavour'],
                },
                {
                    restrictionCount: 5,
                    blockContent: ['preyOfAnathRaema']
                }
            ]
        }
    },
    row3: {
        orion: {
            row: 3,
            content: [
                {
                    quest: 1,
                    blockContent: ['houndsOfOrion'],
                },
                {
                    restrictionChoice: 'houndsOfOrion',
                    blockContent: ['enduranceOfTheOak', 'impenetrableBark', 'temperedRigour', 'violentDelights'],
                },
                {
                    restrictionCount: 5,
                    blockContent: ['deadlyOnslaught']
                }
            ]
        },
        woodElves: {
            row: 3,
            content: [
                {
                    blockContent: ['foeSeeker'],
                },
                {
                    restrictionChoice: 'foeSeeker',
                    blockContent: ['enduranceOfTheOak', 'impenetrableBark', 'temperedRigour', 'violentDelights'],
                },
                {
                    restrictionCount: 5,
                    blockContent: ['deadlyOnslaught']
                }
            ]
        }
    },
    row5: {
        woodElves: {
            row: 5,
            content: [
                {
                    blockContent: ['callOfTheWoods']
                },
                {
                    restrictionChoice: 'callOfTheWoods',
                    restrictionLevel: 6,
                    blockContent: ['howlOfTheForest']
                },
                {
                    blockContent: ['theEyeOfKurnous']
                },
                {
                    restrictionChoice: 'theEyeOfKurnous',
                    restrictionLevel: 6,
                    blockContent: ['sightBeyondSight']
                },
            ]
        }
    },
    row6: {
        woodElves: {
            row: 6,
            content: [
                {
                    blockContent: ['inspiringPresence']
                },
                {
                    restrictionChoice: 'inspiringPresence',
                    blockContent: ['piercingThorns', 'boltsOfTheForest', 'strikingBranches', 'swingingBoughs', 'ancientBark', 'wingsOfTheForest']
                },
                {
                    restrictionCount: 6,
                    blockContent: ['rally']
                },
                {
                    restrictionChoice: 'rally',
                    blockContent: ['shieldOfTheForest', 'naturesQuiver', 'swiftSturdy', 'theForestsRoar']
                },
                {
                    restrictionCount: 1,
                    blockContent: ['standYourGround']
                }
            ]
        }
    },
    row9: {
        woodElves: {
            row: 9,
            content: [
                {
                    blockContent: ['everReachingTendrils']
                },
                {
                    restrictionChoice: 'everReachingTendrils',
                    blockContent: ['wondersOfTheForest', 'naturesSalve', 'obscuringCanopy', 'growthOfTheForest']
                },
                {
                    restrictionCount: 5,
                    blockContent: ['openBranches']
                },
                {
                    restrictionChoice: 'openBranches',
                    blockContent: ['swiftfingers', 'perenniality', 'homeAmongstTheBoughs']
                },
                {
                    restrictionCount: 5,
                    blockContent: ['lightningStrike']
                }
            ]
        }
    }
}