exports.rows = {
    row1: {
        dreadlord: {
            row: 1,
            content: [
                {
                    restrictionLevel: 4,
                    blockContent: ['Dark Steed']
                },
                {
                    restrictionLevel: 7,
                    blockContent: ['Cold One']
                },
                {
                    restrictionLevel: 14,
                    blockContent: ['Dark Pegasus']
                },
                {
                    restrictionLevel: 18,
                    blockContent: ['Black Dragon']
                },
                {
                    restrictionLevel: 4,
                    blockContent: ['Sadistic']
                },
                {
                    restrictionLevel: 6,
                    blockContent: ['Eternal Hatred']
                },
                {
                    restrictionLevel: 10,
                    blockContent: ['Ward of Khaine']
                },
                {
                    restrictionLevel: 10,
                    blockContent: ['Ward of Hekarti']
                },
                {
                    restrictionLevel: 20,
                    blockContent: ['Immortality']
                }
            ]
        },
        sorceress: {
            row: 1,
            content: [
                {
                    restrictionLevel: 7,
                    blockContent: ['Dark Steed']
                },
                {
                    restrictionLevel: 12,
                    blockContent: ['Cold One']
                },
                {
                    restrictionLevel: 16,
                    blockContent: ['Dark Pegasus']
                },
                {
                    restrictionLevel: 18,
                    blockContent: ['Manticore']
                },
                {
                    restrictionLevel: 22,
                    blockContent: ['Black Dragon']
                },
                {
                    restrictionLevel: 4,
                    blockContent: ["Hekarti's Blessing"]
                },
                {
                    restrictionLevel: 8,
                    blockContent: ['Ward of Khaine']
                },
                {
                    restrictionLevel: 8,
                    blockContent: ['Ward of Hekarti']
                },
                {
                    restrictionLevel: 20,
                    blockContent: ['Immortality']
                }
            ]
        }
    },
    row2: {
        lords: {
            row: 2,
            content: [
                {
                    restrictionLevel: 10,
                    restrictionLimited: ['Revered Name of Power', 'Aristocratic Name of Power'],
                    blockContent: ['Martial Name of Power']
                },
                {
                    restrictionLevel: 10,
                    restrictionLimited: ['Martial Name of Power', 'Aristocratic Name of Power'],
                    blockContent: ['Revered Name of Power']
                },
                {
                    restrictionLevel: 10,
                    restrictionLimited: ['Martial Name of Power', 'Revered Name of Power'],
                    blockContent: ['Aristocratic Name of Power']
                }
            ]
        }
    },
    row3: {
        crossbow: {
            row: 3,
            content: [
                {
                    blockContent: ['Sea Dragon Cloak'],
                    seadragoncloak: 0
                },
                {
                    restrictionChoice: 'Sea Dragon Cloak',
                    blockContent: ['Devastating Charge', 'Deadeye', 'Blade Master', 'Indomitable'],
                },
                {
                    restrictionCount: 4,
                    blockContent: ['Foe-Seeker']
                },
                {
                    restrictionChoice: 'Foe-Seeker',
                    blockContent: ['Wound-Maker', 'Full Plate Armour', 'Piercing Shots', 'Expeditious Endeavour']
                },
                {
                    restrictionCount: 4,
                    blockContent: ['Volley of Dark Arrows']
                }
            ]
        },
        shield: {
            row: 3,
            content: [
                {
                    blockContent: ['Sea Dragon Cloak'],
                    seadragoncloak: 0
                },
                {
                    restrictionChoice: 'Sea Dragon Cloak',
                    blockContent: ['Devastating Charge', 'Hard to Hit', 'Blade Master', 'Indomitable'],
                },
                {
                    restrictionCount: 4,
                    blockContent: ['Foe-Seeker']
                },
                {
                    restrictionChoice: 'Foe-Seeker',
                    blockContent: ['Wound-Maker', 'Full Plate Armour', 'Blade Shield', 'Expeditious Endeavour']
                },
                {
                    restrictionCount: 4,
                    blockContent: ['Deadly Onslaught']
                }
            ]
        }
    },
    row6: {
        crossbow: {
            row: 6,
            content: [
                {
                    blockContent: ['Inspiring Presence']
                },
                {
                    restrictionChoice: 'Inspiring Presence',
                    blockContent: ['Line Breaker', 'Sheafmaster', 'Raid Leader', 'Lash Master', 'Knight Lord', 'Slaughterlord']
                },
                {
                    restrictionCount: 6,
                    blockContent: ['Loose!']
                },
                {
                    restrictionChoice: 'Loose!',
                    blockContent: ['Cull the Unworthy', 'Ravager Rewards', 'Favour the Fortunate', 'Confer Bloodlust']
                },
                {
                    restrictionCount: 1,
                    blockContent: ['Darken the Skies']
                }
            ]
        },
        shield: {
            row: 6,
            content: [
                {
                    blockContent: ['Inspiring Presence']
                },
                {
                    restrictionChoice: 'Inspiring Presence',
                    blockContent: ['Line Breaker', 'Sheafmaster', 'Raid Leader', 'Lash Master', 'Knight Lord', 'Slaughterlord']
                },
                {
                    restrictionCount: 6,
                    blockContent: ['Strength Through Spite']
                },
                {
                    restrictionChoice: 'Loose!',
                    blockContent: ['Cull the Unworthy', 'Ravager Rewards', 'Favour the Fortunate', 'Confer Bloodlust']
                },
                {
                    restrictionCount: 1,
                    blockContent: ['Kindle the Fury']
                }
            ]
        }
    },
    row9: {
        darkElves: {
            row: 9,
            content: [
                {
                    blockContent: ['Route Marcher']
                },
                {
                    restrictionChoice: 'Route Marcher',
                    blockContent: ['Iron Disciplinarian', 'Dreaded Slaver', 'Serve Or Die', 'Infamous Raider']
                },
                {
                    restrictionCount: 4,
                    blockContent: ['Draftmaster']
                },
                {
                    restrictionChoice: 'Draftmaster',
                    blockContent: ['Lightning Strike', 'Quartermaster', 'Fleeting Shadow', 'Elven Healing']
                },
                {
                    restrictionCount: 4,
                    blockContent: ['Renowned & Feared']
                }
            ]          
        }
    }
}
