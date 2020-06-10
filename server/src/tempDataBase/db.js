/**
 * Listed below are all valid values for the 'type' field
 * type: lord = all lords of X race
 *       Generic lord types:
 * type: magic = all magic lords of X race
 * type: range = range lords
 * type: melee = melee lords
 *       Lores types of Magic:
 * type: light, fire, death, metal, heavens, bigWaagh, littleWaagh, vampires, beasts, wild, shadows, life, plague, ruin, stealth high, dark, nehekhara, deep
 *       
 *       Dark Elf specific:
 * type: dreadlord (melee & range)
 * type: beastmaster
 */

 /**
  * For example a supremese sorceros (fire) lord would first check to see if X row had a type for:
  * fire (then)
  * magic
  * lord
  */

exports.rows = [
    {
        row: 1,
        race: 'DE',
        name: ['dreadlord'],
        type: null,
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
    {
        row: 2,
        race: 'DE',
        name: ['dreadlord', 'sorceress', 'beastmaster'],
        type: null,
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
    },
    // {
    //     row: 2,
    //     race: 'DE',
    //     name: ['ark'],
    //     type: null,
    //     content: [
    //         {
    //             restrictionLevel: 10,
    //             restrictionLimited: ['Revered Name of Power'],
    //             blockContent: ['Martial Name of Power']
    //         },
    //         {
    //             restrictionLevel: 10,
    //             restrictionLimited: ['Martial Name of Power'],
    //             blockContent: ['Revered Name of Power']
    //         },
    //         {
    //             blockContent: ['Unassailable']
    //         },
    //         {
    //             blockContent: ['Unstoppable']
    //         },
    //         {
    //             blockContent: ['Unknowable']
    //         }
    //     ]
    // },
    {
        row: 3,
        race: 'DE',
        name: ['dreadlord'],
        type: 'range',
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
    {
        row: 6,
        race: 'DE',
        type: 'range',
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
    {
        row: 9,
        race: 'DE',
        type: null,
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
];

exports.skills = [
    {
        name: 'Dark Steed',
        description: "True horses no longer, Dark Magic corrupts the finest Elven steeds and turns them into black-flanked killers.",
        icon: "darkSteed",
        ranks: [
            { effects: [{ icon: 'mount', description: "Mount: Dark Steed" }] }
        ]
    },
    {
        name: 'Cold One',
        description: "Dark, feral beasts indigenous to Naggaroth, tempted from their damp, warm caves to bear the Druchii to battle.",
        icon: "coldOne",
        ranks: [
            { effects: [{ icon: 'mount', description: "Mount: Cold One" }] }
        ]
    },
    {
        name: 'Dark Pegasus',
        description: "The corrupted Dark Pegasi fly south from the Chaos Wastes to Naggaroth's Iron Mountains to make their nests.",
        icon: "darkPegasus",
        ranks: [
            { effects: [{ icon: 'mount', description: "Mount: Dark Pegasus" }] }
        ]
    },
    {
        name: 'Black Dragon',
        description: "Secretly nurtured by Malekith, Black Dragons are enchanted with Dark Magic that corrupts and enhances.",
        icon: "blackDragon",
        ranks: [
            { effects: [
                { icon: 'piercingDmg', description: "Mount: Black Dragon" }
            ] }
        ]
    },
    {
        name: 'Sadistic',
        description: "There is great pleasure to be derived from the humiliation and suffering of others; this one has felt and revelled in it.",
        icon: "sword",
        ranks: [
            { effects: [
                { icon: 'piercingDmg', description: "Armour-piercing damage: +12" },
                { icon: 'charge', description: "Charge bonus: +5" },
                { icon: 'sword', description: "Melee attack: +3" }
            ] }
        ]
    },
    {
        name: 'Eternal Hatred',
        description: "The strength of this warrior's attack never wavers for an instance, such is the opprobrium felt for their hated High Elf cousins.",
        icon: "damage",
        ranks: [
            { effects: [
                { icon: 'damage', description: "Weapon strength: +10% when fighting against High Elves" },
                { icon: 'damage', description: "Weapon strength: +6%" }
            ] }
        ]
    },
    {
        name: 'Ward of Khaine', // TODO implement explanation
        description: "The Bloody-handed God watches over his disciples.",
        icon: "ward",
        ranks: [{ effects: [{ icon: 'missileRes', description: "Missile resistance: 10%" }] }]
    },
    {
        name: 'Ward of Hekarti', // TODO implement explanation
        description: "Magic's dark mistress has a care for her dutiful acolytes.",
        icon: "ward",
        ranks: [{ effects: [{ icon: 'magicRes', description: "Magic resistance: 10%" }] }]
    },
    {
        name: 'Immortality',
        description: "Who wants to live forever? As it turns out, most beings wouldn't say no...",
        icon: "crackSkull",
        ranks: [{ effects: [{ icon: 'crackSkull', description: "When normally killed in battle, this Lord will be wounded instead" }] }]
    },
    {
        name: 'Martial Name of Power',
        description: "This one has adopted a warrior name to strike fear into enemy hearts, a moniker backed up by their deeds in battle.",
        icon: "trait",
        ranks: [
            { effects: [{ icon: 'trait', description: "Choose a Name of Power that improves the Character's own combat skills" }] }
        ]
    },
    {
        name: 'Revered Name of Power',
        description: "This one's chosen name is muttered in hushed tones, reflecting as it does their vile proclivities.",
        icon: "trait",
        ranks: [
            { effects: [{ icon: 'trait', description: "Choose a Name of Power that improves the Lord's army" }] }
        ]
    },
    {
        name: 'Aristocratic Name of Power',
        description: "Some family names are best forgotten; others are worthy of resurrection, as they engender fear and respect among the masses.",
        icon: "trait",
        ranks: [
            { effects: [{ icon: 'trait', description: "Choose a Name of Power that influences the province in which Lord is standing or the faction as a whole" }] }
        ]
    },
    {
        name: 'Sea Dragon Cloak',
        description: "The tough, scaly hide of the sea dragon provides excellent protection against all manner of blows.",
        icon: "armor",
        ranks: [
            { effects: [{ icon: 'armor', description: "Armour: +5" }] }
        ]
    },
    {
        name: 'Devastating Charge',
        description: "Some creatures charge home with such fury that the very ground shakes beneath their feet.",
        icon: "charge",
        ranks: [
            { effects: [{ icon: 'charge', description: "Charge bonus: +15" }] },
            { effects: [{ icon: 'charge', description: "Charge bonus: +30" }] }
        ]
    },
    {
        name: 'Deadeye',
        description: "Although precision in missile combat is something that can be learned, this one was born with a high degree of natural talent.",
        icon: "ammunition",
        ranks: [
            { effects: [
                { icon: 'ammunition', description: "Ammunition: +15%" },
                { icon: 'missile', description: "Reload time reduction: +7%" }
            ] },
            { effects: [
                { icon: 'ammunition', description: "Ammunition: +30%" },
                { icon: 'missile', description: "Reload time reduction: +15%" }
            ] }
        ]
    },
    {
        name: 'Blade Master',
        description: "This warrior is one with their blade; it is an extension of their will, making them a worthy foe in combat.",
        icon: "sword",
        ranks: [
            { effects: [{ icon: 'sword', description: "Melee attack: +6" }] },
            { effects: [{ icon: 'sword', description: "Melee attack: +12" }] }
        ]
    },
    {
        name: 'Indomitable',
        description: "The iron will and indomitable presence of this leader ensures their followers remain steadfast when facing peril.",
        icon: "leadership",
        ranks: [
            { effects: [{ icon: "leadership", description: "Leadership: +6" }] },
            { effects: [{ icon: "leadership", description: "Leadership: +12" }] }
        ]
    },
    {
        name: 'Foe-Seeker', // TODO add the spell to spell DB
        description: "From one bloodied, lifeless corpse to the next, this one is always looking for the next adversary to best.",
        icon: "foeSeeker",
        ranks: [
            { effects: [{ icon: 'foeSeeker', description: "Ability: 'Foe-Seeker'" }] }
        ]
    },
    {
        name: 'Wound-Maker',
        description: "Such is their power and ferocity, a wound-maker will ravage the foe, cutting and pulverising until there is only one exit - death.",
        icon: "damage",
        ranks: [
            { effects: [{ icon: 'damage', description: "Weapon strength: +10%" }] },
            { effects: [{ icon: 'damage', description: "Weapon strength: +20%" }] }
        ]
    },
    {
        name: 'Full Plate Armour',
        description: "Full-Plate armour protects the wearer from head-to-foot. Many shuch suits are blessed or imbued with arcane abilities.",
        icon: "armor",
        ranks: [
            { effects: [{ icon: 'armor', description: "Armor: +7" }] },
            { effects: [{ icon: 'armor', description: "Armor: +15" }] }
        ]
    },
    {
        name: 'Piercing Shots',
        description: "The forest teaches a warrior not only when to fire but where, which makes a bigger difference.",
        icon: "missile",
        ranks: [
            { effects: [{ icon: 'missile', description: "Missile damage: +7%" }] },
            { effects: [{ icon: 'missile', description: "Missile damage: +15%" }] }
        ]
    },
    {
        name: 'Expeditious Endeavour',
        description: "What the enemy cannot see, it cannot hit. What the enemy cannot see, it cannot survive.",
        icon: "speed",
        ranks: [
            { effects: [{ icon: 'speed', description: "Speed: +7%" }] },
            { effects: [{ icon: 'speed', description: "Speed: +15%" }] }
        ]
    },
    {
        name: 'Volley of Dark Arrows', // TODO add the spell to spell DB
        description: "By which an unexpected shower of pointy death rains down upon the unfortunate targets. Ouch!",
        icon: "arrowVolley",
        ranks: [
            { effects: [{ icon: 'arrowVolley', description: "Ability: 'Volley of Dark Arrows'" }] }
        ]
    },
    {
        name: 'Inspiring Presence',
        description: "There are Lords that radiate power, confidence and fear, inspiring their followers to great or terrible acts.",
        icon: "leadership",
        ranks: [
            { effects: [{ icon: "leadership", description: "Character's aura leadership effect: +5" }] }
        ]
    },
    {
        name: 'Line Breaker',
        description: "Magic is a most useful tool on the field of battle, but generally secondary in the face of good, old-fashioned brute force.",
        icon: "shield",
        ranks: [
            { effects: [
                { icon: 'shield', description: "Melee defence: +4 for Dreadspears, Bleakswords and Black Ark Corsairs units", psIcon: 'redFlag', postScript: "Lord's army" }
            ] },
            { effects: [
                { icon: 'sword', description: "Melee attack: +6 for Dreadspears, Bleakswords and Black Ark Corsairs units", psIcon: 'redFlag', postScript: "Lord's army" },
                { icon: 'shield', description: "Melee defence: +6 for Dreadspears, Bleakswords and Black Ark Corsairs units", psIcon: 'redFlag', postScript: "Lord's army" }
            ] },
            { effects: [
                { icon: 'sword', description: "Melee attack: +8 for Dreadspears, Bleakswords and Black Ark Corsairs units", psIcon: 'redFlag', postScript: "Lord's army" },
                { icon: 'shield', description: "Melee defence: +8 for Dreadspears, Bleakswords and Black Ark Corsairs units", psIcon: 'redFlag', postScript: "Lord's army" }
            ] }
        ]
    },
    {
        name: 'Sheafmaster',
        description: "Marshalling missile troops effectively - even elites - is all about timing.",
        icon: "ammunition",
        ranks: [
            { effects: [
                { icon: 'ammunition', description: "Ammunition: +8% for Darkshards, Black Ark Corsairs and Reaper Bolt Thrower units", psIcon: 'redFlag', postScript: "Lord's army" }
            ] },
            { effects: [
                { icon: 'ammunition', description: "Ammunition: +12% for Darkshards, Black Ark Corsairs and Reaper Bolt Thrower units", psIcon: 'redFlag', postScript: "Lord's army" },
                { icon: 'missile', description: "Reload time reduction: +7% for Darkshards, Black Ark Corsairs and Reaper Bolt Thrower units", psIcon: 'redFlag', postScript: "Lord's army" }
            ] },
            { effects: [
                { icon: 'ammunition', description: "Ammunition: +20% for Darkshards, Black Ark Corsairs and Reaper Bolt Thrower units", psIcon: 'redFlag', postScript: "Lord's army" },
                { icon: 'missile', description: "Reload time reduction: +10% for Darkshards, Black Ark Corsairs and Reaper Bolt Thrower units", psIcon: 'redFlag', postScript: "Lord's army" }
            ] }
        ]
    },
    {
        name: 'Raid Leader',
        description: "The most effective raiders have a plan that is certain to succeed and stick to it; this one ensures that they do.",
        icon: "charge",
        ranks: [
            { effects: [
                { icon: 'charge', description: "Charge bonus: +6 for Shades, Dark Riders, Doomfire Warlocks and Scourgerunner Chariot units", psIcon: 'redFlag', postScript: "Lord's army" }
            ] },
            { effects: [
                { icon: 'missile', description: "Missile damage: +9% for Shades, Dark Riders, Doomfire Warlocks and Scourgerunner Chariot units", psIcon: 'redFlag', postScript: "Lord's army" },
                { icon: 'shield', description: "Melee defense: +6 for Shades, Dark Riders, Doomfire Warlocks and Scourgerunner Chariot units", psIcon: 'redFlag', postScript: "Lord's army" },
                { icon: 'charge', description: "Charge bonus: +9 for Shades, Dark Riders, Doomfire Warlocks and Scourgerunner Chariot units", psIcon: 'redFlag', postScript: "Lord's army" }
            ] },
            { effects: [
                { icon: 'missile', description: "Missile damage: +12% for Shades, Dark Riders, Doomfire Warlocks and Scourgerunner Chariot units", psIcon: 'redFlag', postScript: "Lord's army" },
                { icon: 'shield', description: "Melee defense: +8 for Shades, Dark Riders, Doomfire Warlocks and Scourgerunner Chariot units", psIcon: 'redFlag', postScript: "Lord's army" },
                { icon: 'charge', description: "Charge bonus: +12 for Shades, Dark Riders, Doomfire Warlocks and Scourgerunner Chariot units", psIcon: 'redFlag', postScript: "Lord's army" }
            ] }
        ]
    },
    {
        name: 'Lash Master',
        description: "Judicious, or even not-so-judicious, use of the lash tends to get the desired results, so why hold back?",
        icon: "damage",
        ranks: [
            { effects: [
                { icon: 'damage', description: "Weapon strength: +6% for Harpies, War Hydra, Kharibdyss, Black Dragon, Feral Manticore and Bloodwrack Madusae units", psIcon: 'redFlag', postScript: "Lord's army" }
            ] },
            { effects: [
                { icon: 'damage', description: "Weapon strength: +9% for Harpies, War Hydra, Kharibdyss, Black Dragon, Feral Manticore and Bloodwrack Madusae units", psIcon: 'redFlag', postScript: "Lord's army" },
                { icon: 'charge', description: "Charge bonus: +9 for Harpies, War Hydra, Kharibdyss, Black Dragon, Feral Manticore and Bloodwrack Madusae units", psIcon: 'redFlag', postScript: "Lord's army" },
                { icon: 'missile', description: "Reload time reduction: +9% for Harpies, War Hydra, Kharibdyss, Black Dragon, Feral Manticore and Bloodwrack Madusae units", psIcon: 'redFlag', postScript: "Lord's army" }
            ] },
            { effects: [
                { icon: 'damage', description: "Weapon strength: +12% for Harpies, War Hydra, Kharibdyss, Black Dragon, Feral Manticore and Bloodwrack Madusae units", psIcon: 'redFlag', postScript: "Lord's army" },
                { icon: 'charge', description: "Charge bonus: +12 for Harpies, War Hydra, Kharibdyss, Black Dragon, Feral Manticore and Bloodwrack Madusae units", psIcon: 'redFlag', postScript: "Lord's army" },
                { icon: 'missile', description: "Reload time reduction: +12% for Harpies, War Hydra, Kharibdyss, Black Dragon, Feral Manticore and Bloodwrack Madusae units", psIcon: 'redFlag', postScript: "Lord's army" }
            ] }
        ]
    },
    {
        name: 'Knight Lord',
        description: "The ability to command the savage, untamed Cold Ones should not be underestimated - not everyone has the knack!",
        icon: "sword",
        ranks: [
            { effects: [
                { icon: 'sword', description: "Melee attack: +4 for Cold One Knights, Cold One Dread Knights and Cold One Chariot units", psIcon: 'redFlag', postScript: "Lord's army" }
            ] },
            { effects: [
                { icon: 'sword', description: "Melee attack: +6 for Cold One Knights, Cold One Dread Knights and Cold One Chariot units", psIcon: 'redFlag', postScript: "Lord's army" },
                { icon: 'shield', description: "Melee defense: +6 for Cold One Knights, Cold One Dread Knights and Cold One Chariot units", psIcon: 'redFlag', postScript: "Lord's army" }
            ] },
            { effects: [
                { icon: 'sword', description: "Melee attack: +8 for Cold One Knights, Cold One Dread Knights and Cold One Chariot units", psIcon: 'redFlag', postScript: "Lord's army" },
                { icon: 'shield', description: "Melee defense: +8 for Cold One Knights, Cold One Dread Knights and Cold One Chariot units", psIcon: 'redFlag', postScript: "Lord's army" }
            ] }
        ]
    },
    {
        name: 'Slaughterlord',
        description: "An elite even amongst elites, this accomplished warrior directs the cut-and-thrust of melee - a choreographer of death, you might say.",
        icon: "sword",
        ranks: [
            { effects: [{ icon: 'sword', description: "Melee attack: +4 for Witch Elves, Har Ganeth Executioners, Black Guard of Naggarond and Sisters of Slaughter units", psIcon: 'redFlag', postScript: "Lord's army" }] },
            { effects: [
                { icon: 'sword', description: "Melee attack: +6 for Witch Elves, Har Ganeth Executioners, Black Guard of Naggarond and Sisters of Slaughter units", psIcon: 'redFlag', postScript: "Lord's army" },
                { icon: 'shield', description: "Melee defense: +6 for Witch Elves, Har Ganeth Executioners, Black Guard of Naggarond and Sisters of Slaughter units", psIcon: 'redFlag', postScript: "Lord's army" }
            ] },
            { effects: [
                { icon: 'sword', description: "Melee attack: +8 for Witch Elves, Har Ganeth Executioners, Black Guard of Naggarond and Sisters of Slaughter units", psIcon: 'redFlag', postScript: "Lord's army" },
                { icon: 'shield', description: "Melee defense: +8 for Witch Elves, Har Ganeth Executioners, Black Guard of Naggarond and Sisters of Slaughter units", psIcon: 'redFlag', postScript: "Lord's army" }
            ] }
        ]
    },
    {
        name: 'Loose!',
        description: "The authorisation to loose arrows without adherence to drill makes for an irregular - and  therefore far deadlier -hail of pointed death.",
        icon: 'blackArrow',
        ranks: [
            { effects: [
                { icon: 'blackArrow', description: "Passive ability: 'Loose!'" }
            ] }
        ]
    },
    {
        name: 'Cull the Unworthy',
        description: "Those who fail to make the grade don't just die, they're tortured and used for target practice!",
        icon: "armor",
        ranks: [
            { effects: [
                { icon: 'damage', description: "Weapon strength: +12% for Bleakswords, Dreadspears, Darkshards and Reaper Bolt Thrower units", psIcon: 'goldChevron', postScript: "Rank 7 and above", ppsIcon: 'redFlag', postPostScript: "Lord's army" },
                { icon: 'missile', description: "Missile damage: +12% for Bleakswords, Dreadspears, Darkshards and Reaper Bolt Thrower units", psIcon: 'goldChevron', postScript: "Rank 7 and above", ppsIcon: 'redFlag', postPostScript: "Lord's army" },
                { icon: 'armor', description: "Armour: +10 for Bleakswords, Dreadspears, Darkshards and Reaper Bolt Thrower units", psIcon: 'goldChevron', postScript: "Rank 7 and above", ppsIcon: 'redFlag', postPostScript: "Lord's army" },
                { icon: 'missileRes', description: "Missile resistance: 15% for Bleakswords, Dreadspears, Darkshards and Reaper Bolt Thrower units", psIcon: 'goldChevron', postScript: "Rank 7 and above", ppsIcon: 'redFlag', postPostScript: "Lord's army" }
            ] }
        ]
    },
    {
        name: 'Ravager Rewards',
        description: "You'd think that pillaging the land would bring payment enough. You'd be wrong.",
        icon: "speed",
        ranks: [
            { effects: [
                { icon: 'speed', description: "Speed: +10% for Black Ark Corsairs, Shades, Dark Riders, Doomfire Warlocks and Scourgerunner Chariot units", psIcon: 'goldChevron', postScript: "Rank 7 and above", ppsIcon: 'redFlag', postPostScript: "Lord's army" },
                { icon: 'target', description: "Range: +15% for Black Ark Corsairs, Shades, Dark Riders, Doomfire Warlocks and Scourgerunner Chariot units", psIcon: 'goldChevron', postScript: "Rank 7 and above", ppsIcon: 'redFlag', postPostScript: "Lord's army" },
                { icon: 'armor', description: "Armour: +10  for Black Ark Corsairs, Shades, Dark Riders, Doomfire Warlocks and Scourgerunner Chariot units", psIcon: 'goldChevron', postScript: "Rank 7 and above", ppsIcon: 'redFlag', postPostScript: "Lord's army" }
            ] }
        ]
    },
    {
        name: 'Favour the Fortunate',
        description: "The gods help those who help themselves - raising them above the rank and file to elite status.",
        icon: "sword",
        ranks: [
            { effects: [
                { icon: 'charge', description: "Charge bonus: +12 for Black Guard of Naggarond, Har Ganeth Executioners, Cold One Knights, Cold One Dread Knights and Cold One Chariot units", psIcon: 'goldChevron', postScript: "Rank 7 and above", ppsIcon: 'redFlag', postPostScript: "Lord's army" },
                { icon: 'damage', description: "Weapon strength: +12% for Black Guard of Naggarond, Har Ganeth Executioners, Cold One Knights, Cold One Dread Knights and Cold One Chariot units", psIcon: 'goldChevron', postScript: "Rank 7 and above", ppsIcon: 'redFlag', postPostScript: "Lord's army" },
                { icon: 'armor', description: "Armour: +5 for Black Guard of Naggarond, Har Ganeth Executioners, Cold One Knights, Cold One Dread Knights and Cold One Chariot units", psIcon: 'goldChevron', postScript: "Rank 7 and above", ppsIcon: 'redFlag', postPostScript: "Lord's army" }
            ] }
        ]
    },
    {
        name: 'Confer Bloodlust',
        description: "The murderous, unforgiving rage of Khaine can be transferred from a Lord to his legions.",
        icon: "damage",
        ranks: [
            { effects: [
                { icon: 'damage', description: "Weapon strength: +12% for Witch Elves, Harpies, War Hydra, Kharibdyss, Black Dragon, Feral Manticore, Sisters of Slaughter and bloodwrack Medusae units", psIcon: 'goldChevron', postScript: "Rank 7 and above", ppsIcon: 'redFlag', postPostScript: "Lord's army" },
                { icon: 'speed', description: "Speed +10% for Witch Elves, Harpies, War Hydra, Kharibdyss, Black Dragon, Feral Manticore, Sisters of Slaughter and bloodwrack Medusae units", psIcon: 'goldChevron', postScript: "Rank 7 and above", ppsIcon: 'redFlag', postPostScript: "Lord's army" },
                { icon: 'physicalRes', description: "Physical resistance: +10% for Witch Elves, Harpies, War Hydra, Kharibdyss, Black Dragon, Feral Manticore, Sisters of Slaughter and bloodwrack Medusae units", psIcon: 'goldChevron', postScript: "Rank 7 and above", ppsIcon: 'redFlag', postPostScript: "Lord's army" }
            ] }
        ]
    },
    {
        name: 'Darken the Skies',
        description: "Above the battlefield, the air is filled with arrows; a shroud of pure death blotting out the sun.",
        icon: 'hailOfArrows',
        ranks: [
            { effects: [
                { icon: 'blackArrow', description: "Replaces: 'Loose!'" },
                { icon: 'hailOfArrows', description: "Passive ability: 'Darken the Skies'" }
            ] }
        ]
    },
    {
        name: 'Route Marcher',
        description: "Those who know the land and its secrets will travel faster and further than the foes who don't",
        icon: 'compass',
        ranks: [
            { effects: [{ icon: 'compass', description: "Campaign movement range: +10%" }] }
        ]
    },
    {
        name: 'Iron Disciplinarian',
        description: "This Lord expects utter obedience from the smallfolk, and has little time for insurrections or petty revolts.",
        icon: 'face',
        ranks: [
            { effects: [{ icon: 'face', description: "Public order: +1", postScript: "local province" }] },
            { effects: [{ icon: 'face', description: "Public order: +2", postScript: "local province" }] },
            { effects: [{ icon: 'face', description: "Public order: +3", postScript: "local province" }] }            

        ]
    },
    {
        name: 'Dreaded Slaver',
        description: "This one ensures that those captured in battle wished they'd died on the field, so great is the cruelty that awaits them.",
        icon: "coin",
        ranks: [
            { effects: [{ icon: "coin", description: "Casualties captured post-battle: +5%" }] },
            { effects: [{ icon: "coin", description: "Casualties captured post-battle: +12%" }] },
            { effects: [{ icon: "coin", description: "Casualties captured post-battle: +25%" }] }            
        ]
    },
    {
        name: 'Serve Or Die',
        description: "You will serve me, wretch, or you will die, there is no other option.",
        icon: "coin",
        ranks: [
            { effects: [{ icon: "coin", description: "Recruitment cost: -3%", psIcon: 'redFlag', postScript: "Lord's army" }] },
            { effects: [{ icon: "coin", description: "Recruitment cost: -8%", psIcon: 'redFlag', postScript: "Lord's army" }] },
            { effects: [{ icon: "coin", description: "Recruitment cost: -15%", psIcon: 'redFlag', postScript: "Lord's army" }] }            
        ]
    },
    {
        name: 'Infamous Raider',
        description: "If there were annals detailing the dastardly deeds of the sackers and looters of the world, this inveterate brigand would feature heavily.",
        icon: "coin",
        ranks: [
            { effects: [
                { icon: "coin", description: "Income from raiding: +5%", psIcon: 'redFlag', postScript: "Lord's army" },
                { icon: "coin", description: "Income from looting settlements: +4%" },
                { icon: "coin", description: "Income from sacking settlements: +4%" }
            ] },
            { effects: [
                { icon: "coin", description: "Income from raiding: +12%", psIcon: 'redFlag', postScript: "Lord's army" },
                { icon: "coin", description: "Income from looting settlements: +9%" },
                { icon: "coin", description: "Income from sacking settlements: +9%" }
            ] },
            { effects: [
                { icon: "coin", description: "Income from raiding: +20%", psIcon: 'redFlag', postScript: "Lord's army" },
                { icon: "coin", description: "Income from looting settlements: +15%" },
                { icon: "coin", description: "Income from sacking settlements: +15%" }
            ] }            
        ]
    },
    {
        name: 'Draftmaster',
        description: "Someone has to ensure the numbers and quality of recruits remain high.",
        icon: 'doubleChevron',
        ranks: [
            { effects: [
                { icon: 'doubleChevron', description: "Recruit rank: +1 for all units" },
                { icon: 'redFlag', description: "Local recruitment capacity: +1", postScript: "local province" }
            ] }          
        ]
    },
    {
        name: 'Lightning Strike',
        description: "The time to strike is now!",
        icon: 'dagger',
        ranks: [
            { effects: [{ icon: 'dagger', description: "Enables lightning strike battles when reinforcements are present" }] }
        ]
    },
    {
        name: 'Quartermaster',
        description: "A good quartermaster can ration equipment and foodstuffs efficiently, making supplies last longer.",
        icon: "coin",
        ranks: [
            { effects: [{ icon: "coin", description: "Upkeep: -3% for all units", psIcon: 'redFlag', postScript: "Lord's army" }] },
            { effects: [{ icon: "coin", description: "Upkeep: -8% for all units", psIcon: 'redFlag', postScript: "Lord's army" }] },
            { effects: [{ icon: "coin", description: "Upkeep: -15% for all units", psIcon: 'redFlag', postScript: "Lord's army" }] }
        ]
    },
    {
        name: 'Fleeting Shadow',
        description: "Knowing precisely where and when to launch an ambush, and against who, takes an unusual level of guile.",
        icon: 'arrowSkull',
        ranks: [
            { effects: [
                { icon: 'arrowSkull', description: "Ambush success chance: +6%", psIcon: 'redFlag', postScript: "Lord's army" },
                { icon: 'arrowSkull', description: "Ambush defense chance: +5%" }
            ] },
            { effects: [
                { icon: 'arrowSkull', description: "Ambush success chance: +16%", psIcon: 'redFlag', postScript: "Lord's army" },
                { icon: 'arrowSkull', description: "Ambush defense chance: +10%" }
            ] },
            { effects: [
                { icon: 'arrowSkull', description: "Ambush success chance: +30%", psIcon: 'redFlag', postScript: "Lord's army" },
                { icon: 'arrowSkull', description: "Ambush defense chance: +20%" },
                { icon: 'vanguard', description: "Attribute: Vanguard Deployment" } // TODO this skill has gameplay explanation
            ] }            
        ]
    },
    {
        name: 'Elven Healing',
        description: "The ancient Asur arts teach one to heal as well as how to harm.",
        icon: 'plus',
        ranks: [
            { effects: [
                { icon: 'skullCrossBones', description: "Attrition: -3% casualties suffered from all attrition", psIcon: 'redFlag', postScript: "Lord's army" },
                { icon: 'plus', description: "Casualty replenishment rate: +3%", psIcon: 'redFlag', postScript: "Lord's army" }
            ] },
            { effects: [
                { icon: 'skullCrossBones', description: "Attrition: -8% casualties suffered from all attrition", psIcon: 'redFlag', postScript: "Lord's army" },
                { icon: 'plus', description: "Casualty replenishment rate: +8%", psIcon: 'redFlag', postScript: "Lord's army" }
            ] },
            { effects: [
                { icon: 'skullCrossBones', description: "Attrition: -15% casualties suffered from all attrition", psIcon: 'redFlag', postScript: "Lord's army" },
                { icon: 'plus', description: "Casualty replenishment rate: +15%", psIcon: 'redFlag', postScript: "Lord's army" }
            ] }
        ]
    },
    {
        name: 'Renowned & Feared',
        description: "This Lord's many deeds - both on and off the battlefield - have brought them renown among their allies and made them feared by their enemies.",
        icon: 'daggerEye',
        ranks: [
            { effects: [
                { icon: "coin", description: "Upkeep: -8% for all units", psIcon: 'redFlag', postScript: "Lord's army" },
                { icon: 'compass', description: "Campaign movement range: +5%" },
                { icon: 'daggerEye', description: "Enemy Hero action success chance: -10%" },
                { icon: 'daggerEye', description: "Hero self-defense: +25% chance of wounding aggressors" },
                { icon: 'doubleChevron', description: "Recruit rank: +1 for all units" }
            ] }     
        ]
    }
];
