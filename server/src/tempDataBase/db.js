exports.skills = [
    {
        name: 'Dark Steed',
        description: "True horses no longer, Dark Magic corrupts the finest Elven steeds and turns them into black-flanked killers.",
        icon: "dark-steed",
        ranks: [
            { effects: [{ icon: 'mount', description: "Mount: Dark Steed" }] }
        ]
    },
    {
        name: 'Cold One',
        description: "Dark, feral beasts indigenous to Naggaroth, tempted from their damp, warm caves to bear the Druchii to battle.",
        icon: "cold-one",
        ranks: [
            { effects: [{ icon: 'mount', description: "Mount: Cold One" }] }
        ]
    },
    {
        name: 'Dark Pegasus',
        description: "The corrupted Dark Pegasi fly south from the Chaos Wastes to Naggaroth's Iron Mountains to make their nests.",
        icon: "dark-pegasus",
        ranks: [
            { effects: [{ icon: 'mount', description: "Mount: Dark Pegasus" }] }
        ]
    },
    {
        name: 'Black Dragon',
        description: "Secretly nurtured by Malekith, Black Dragons are enchanted with Dark Magic that corrupts and enhances.",
        icon: "black-dragon",
        ranks: [
            { effects: [
                { icon: 'mount', description: "Mount: Black Dragon" }
            ] }
        ]
    },
    {
        name: 'Sadistic',
        description: "There is great pleasure to be derived from the humiliation and suffering of others; this one has felt and revelled in it.",
        icon: "character-attack",
        ranks: [
            { effects: [
                { icon: 'armor-piercing-character', description: "Armour-piercing damage: +12" },
                { icon: 'charge-character', description: "Charge bonus: +5" },
                { icon: 'melee-character', description: "Melee attack: +3" }
            ] }
        ]
    },
    {
        name: 'Eternal Hatred',
        description: "The strength of this warrior's attack never wavers for an instance, such is the opprobrium felt for their hated High Elf cousins.",
        icon: "character-damage",
        ranks: [
            { effects: [
                { icon: 'weapon-damage-character', description: "Weapon strength: +10% when fighting against High Elves" },
                { icon: 'weapon-damage-character', description: "Weapon strength: +6%" }
            ] }
        ]
    },
    {
        name: 'Ward of Khaine', // TODO implement explanation
        description: "The Bloody-handed God watches over his disciples.",
        icon: "character-ward-save",
        ranks: [{ effects: [{ icon: 'resistance-missile', description: "Missile resistance: 10%" }] }]
    },
    {
        name: 'Ward of Hekarti', // TODO implement explanation
        description: "Magic's dark mistress has a care for her dutiful acolytes.",
        icon: "character-ward-save",
        ranks: [{ effects: [{ icon: 'resistance-magic', description: "Magic resistance: 10%" }] }]
    },
    {
        name: 'Immortality',
        description: "Who wants to live forever? As it turns out, most beings wouldn't say no...",
        icon: "character-wound-time",
        ranks: [{ effects: [{ icon: 'wound-time', description: "When normally killed in battle, this Lord will be wounded instead" }] }]
    },
    {
        name: 'Martial Name of Power',
        description: "This one has adopted a warrior name to strike fear into enemy hearts, a moniker backed up by their deeds in battle.",
        icon: "martial-name-of-power",
        ranks: [
            { effects: [{ icon: 'trait-dark-elves', description: "Choose a Name of Power that improves the Character's own combat skills" }] }
        ]
    },
    {
        name: 'Revered Name of Power',
        description: "This one's chosen name is muttered in hushed tones, reflecting as it does their vile proclivities.",
        icon: "revered-name-of-power",
        ranks: [
            { effects: [{ icon: 'trait-dark-elves', description: "Choose a Name of Power that improves the Lord's army" }] }
        ]
    },
    {
        name: 'Aristocratic Name of Power',
        description: "Some family names are best forgotten; others are worthy of resurrection, as they engender fear and respect among the masses.",
        icon: "aristocratic-name-of-power",
        ranks: [
            { effects: [{ icon: 'trait-dark-elves', description: "Choose a Name of Power that influences the province in which Lord is standing or the faction as a whole" }] }
        ]
    },
    {
        name: 'Sea Dragon Cloak',
        description: "The tough, scaly hide of the sea dragon provides excellent protection against all manner of blows.",
        icon: "character-armor",
        ranks: [
            { effects: [{ icon: 'armor-character', description: "Armour: +5" }] }
        ]
    },
    {
        name: 'Devastating Charge',
        description: "Some creatures charge home with such fury that the very ground shakes beneath their feet.",
        icon: "character-charge",
        ranks: [
            { effects: [{ icon: 'charge-character', description: "Charge bonus: +15" }] },
            { effects: [{ icon: 'charge-character', description: "Charge bonus: +30" }] }
        ]
    },
    {
        name: 'Hard to Hit',
        description: "Hand-to-hand combat is a lethal match of cut and thrust. However, it's not all about offensive strikes; parries and other defensive moves can also win the day.",
        icon: "character-defense",
        ranks: [
            {
                effects: [
                    { icon: 'defense-character', description: "Melee defense: +6"}
                ]
            },
            {
                effects: [
                    { icon: 'defense-character', description: "Melee defense: +12"}
                ]
            }
        ]
    },
    {
        name: 'Deadeye',
        description: "Although precision in missile combat is something that can be learned, this one was born with a high degree of natural talent.",
        icon: "character-ammo",
        ranks: [
            { effects: [
                { icon: 'ammo-character', description: "Ammunition: +15%" },
                { icon: 'reload-time-character', description: "Reload time reduction: +7%" }
            ] },
            { effects: [
                { icon: 'ammo-character', description: "Ammunition: +30%" },
                { icon: 'reload-time-character', description: "Reload time reduction: +15%" }
            ] }
        ]
    },
    {
        name: 'Blade Master',
        description: "This warrior is one with their blade; it is an extension of their will, making them a worthy foe in combat.",
        icon: "character-attack",
        ranks: [
            { effects: [{ icon: 'melee-character', description: "Melee attack: +6" }] },
            { effects: [{ icon: 'melee-character', description: "Melee attack: +12" }] }
        ]
    },
    {
        name: 'Indomitable',
        description: "The iron will and indomitable presence of this leader ensures their followers remain steadfast when facing peril.",
        icon: "character-morale",
        ranks: [
            { effects: [{ icon: "morale-character", description: "Leadership: +6" }] },
            { effects: [{ icon: "morale-character", description: "Leadership: +12" }] }
        ]
    },
    {
        name: 'Foe-Seeker',
        description: "From one bloodied, lifeless corpse to the next, this one is always looking for the next adversary to best.",
        icon: "abilities-foe-seeker",
        ranks: [
            { effects: [{ icon: 'abilities-foe-seeker', description: "Ability: 'Foe-Seeker'" }] }
        ],
        spell: {
            description: 'Character ability',
            cooldown: '60',
            rarity: 'common',
            attributes: {
                type: 'Augment',
                duration: '25 seconds',
                target: 'Self',
                effects: [
                    { text: '+24%', icon: 'battle-movement-character', postText: 'Speed', color: 'green' },
                    { text: '+18%', icon: 'fatigue', postText: 'Vigour', color: 'blue' }
                ]
            }
         }
    },
    {
        name: 'Wound-Maker',
        description: "Such is their power and ferocity, a wound-maker will ravage the foe, cutting and pulverising until there is only one exit - death.",
        icon: "character-damage",
        ranks: [
            { effects: [{ icon: 'weapon-damage-character', description: "Weapon strength: +10%" }] },
            { effects: [{ icon: 'weapon-damage-character', description: "Weapon strength: +20%" }] }
        ]
    },
    {
        name: 'Full Plate Armour',
        description: "Full-Plate armour protects the wearer from head-to-foot. Many shuch suits are blessed or imbued with arcane abilities.",
        icon: "character-armor",
        ranks: [
            { effects: [{ icon: 'armor-character', description: "Armor: +7" }] },
            { effects: [{ icon: 'armor-character', description: "Armor: +15" }] }
        ]
    },
    {
        name: 'Blade Shield',
        description: "A blade that sings in defence will not let its wielder be penetrated.",
        icon: "character-defense",
        ranks: [
            {
                effects: [
                    { icon: "defense-character", description: "Melee defense: +6"}
                ]
            },
            {
                effects: [
                    { icon: "defense-character", description: "Melee defense: +12"}
                ]
            }
        ]
    },
    {
        name: 'Piercing Shots',
        description: "The forest teaches a warrior not only when to fire but where, which makes a bigger difference.",
        icon: "character-ranged-damage",
        ranks: [
            { effects: [{ icon: 'ranged-damage-character', description: "Missile damage: +7%" }] },
            { effects: [{ icon: 'ranged-damage-character', description: "Missile damage: +15%" }] }
        ]
    },
    {
        name: 'Expeditious Endeavour',
        description: "What the enemy cannot see, it cannot hit. What the enemy cannot see, it cannot survive.",
        icon: "character-speed",
        ranks: [
            { effects: [{ icon: 'battle-movement-character', description: "Speed: +7%" }] },
            { effects: [{ icon: 'battle-movement-character', description: "Speed: +15%" }] }
        ]
    },
    {
        name: 'Deadly Onslaught',
        description: "The war is endless. The cycle of charging, clashing, and bloody hand-to-hand fighting is without end. It will never stop.",
        icon: "deadly-onslaught",
        ranks: [
            { effects: [{ icon: 'deadly-onslaught', description: "Ability: 'Deadly Onslaught'" }] }
        ],
        spell: {
            description: 'Character ability',
            cooldown: '90',
            rarity: 'uncommon',
            attributes: {
                type: 'Augment',
                duration: "31 seconds",
                target: "Self",
                effects: [
                    { text: '+25%', icon: 'icon-armor-piercing', postText: 'Armor-Piercing Weapon Damage', color: 'green' },
                    { text: '+25%', icon: 'icon-damage-base', postText: 'Base Weapon Damage', color: 'green' },
                    { text: '+36%', icon: 'charge-character', postText: 'Charge Bonus', color: 'green' }
                ]
            }
        }
    },
    {
        name: 'Volley of Dark Arrows',
        description: "By which an unexpected shower of pointy death rains down upon the unfortunate targets. Ouch!",
        icon: "volley-of-dark-arrows",
        ranks: [
            { effects: [{ icon: 'volley-of-dark-arrows', description: "Ability: 'Volley of Dark Arrows'" }] }
        ],
        spell: {
            description: 'Character ability',
            cooldown: '90',
            rarity: 'uncommon',
            uses: '3',
            attributes: {
                type: 'Magic Missiles',
                target: [
                    { text: 'Enemy' },
                    { text: '200m', uptick: 'range' }
                ],
                effects: [
                    { text: 'Causes', icon: 'icon-armor-piercing', postText: 'Armor-piercing damage', color: 'green', uptick: 'up-green' },
                    { text: 'Good penetration', color: 'green', uptick: 'up-green' },
                    { text: 'Effective at long range', color: 'green', uptick: 'up-green' }
                ]
            }
        }
    },
    {
        name: 'Inspiring Presence',
        description: "There are Lords that radiate power, confidence and fear, inspiring their followers to great or terrible acts.",
        icon: "battle-morale",
        ranks: [
            { effects: [{ icon: "morale", description: "Character's aura leadership effect: +5" }] }
        ]
    },
    {
        name: 'Line Breaker',
        description: "Magic is a most useful tool on the field of battle, but generally secondary in the face of good, old-fashioned brute force.",
        icon: "battle-defense",
        ranks: [
            { effects: [
                { icon: 'defense', description: "Melee defense: +4 for Dreadspears, Bleakswords and Black Ark Corsairs units", psIcon: 'redFlag', postScript: "Lord's army" }
            ] },
            { effects: [
                { icon: 'melee', description: "Melee attack: +6 for Dreadspears, Bleakswords and Black Ark Corsairs units", psIcon: 'redFlag', postScript: "Lord's army" },
                { icon: 'defense', description: "Melee defense: +6 for Dreadspears, Bleakswords and Black Ark Corsairs units", psIcon: 'redFlag', postScript: "Lord's army" }
            ] },
            { effects: [
                { icon: 'melee', description: "Melee attack: +8 for Dreadspears, Bleakswords and Black Ark Corsairs units", psIcon: 'redFlag', postScript: "Lord's army" },
                { icon: 'defense', description: "Melee defense: +8 for Dreadspears, Bleakswords and Black Ark Corsairs units", psIcon: 'redFlag', postScript: "Lord's army" }
            ] }
        ]
    },
    {
        name: 'Sheafmaster',
        description: "Marshalling missile troops effectively - even elites - is all about timing.",
        icon: "battle-ammo",
        ranks: [
            { effects: [
                { icon: 'ammo', description: "Ammunition: +8% for Darkshards, Black Ark Corsairs and Reaper Bolt Thrower units", psIcon: 'redFlag', postScript: "Lord's army" }
            ] },
            { effects: [
                { icon: 'ammo', description: "Ammunition: +12% for Darkshards, Black Ark Corsairs and Reaper Bolt Thrower units", psIcon: 'redFlag', postScript: "Lord's army" },
                { icon: 'reload-time', description: "Reload time reduction: +7% for Darkshards, Black Ark Corsairs and Reaper Bolt Thrower units", psIcon: 'redFlag', postScript: "Lord's army" }
            ] },
            { effects: [
                { icon: 'ammo', description: "Ammunition: +20% for Darkshards, Black Ark Corsairs and Reaper Bolt Thrower units", psIcon: 'redFlag', postScript: "Lord's army" },
                { icon: 'reload-time', description: "Reload time reduction: +10% for Darkshards, Black Ark Corsairs and Reaper Bolt Thrower units", psIcon: 'redFlag', postScript: "Lord's army" }
            ] }
        ]
    },
    {
        name: 'Raid Leader',
        description: "The most effective raiders have a plan that is certain to succeed and stick to it; this one ensures that they do.",
        icon: "battle-charge",
        ranks: [
            { effects: [
                { icon: 'charge', description: "Charge bonus: +6 for Shades, Dark Riders, Doomfire Warlocks and Scourgerunner Chariot units", psIcon: 'redFlag', postScript: "Lord's army" }
            ] },
            { effects: [
                { icon: 'ranged-damage', description: "Missile damage: +9% for Shades, Dark Riders, Doomfire Warlocks and Scourgerunner Chariot units", psIcon: 'redFlag', postScript: "Lord's army" },
                { icon: 'defense', description: "Melee defense: +6 for Shades, Dark Riders, Doomfire Warlocks and Scourgerunner Chariot units", psIcon: 'redFlag', postScript: "Lord's army" },
                { icon: 'charge', description: "Charge bonus: +9 for Shades, Dark Riders, Doomfire Warlocks and Scourgerunner Chariot units", psIcon: 'redFlag', postScript: "Lord's army" }
            ] },
            { effects: [
                { icon: 'ranged-damage', description: "Missile damage: +12% for Shades, Dark Riders, Doomfire Warlocks and Scourgerunner Chariot units", psIcon: 'redFlag', postScript: "Lord's army" },
                { icon: 'defense', description: "Melee defense: +8 for Shades, Dark Riders, Doomfire Warlocks and Scourgerunner Chariot units", psIcon: 'redFlag', postScript: "Lord's army" },
                { icon: 'charge', description: "Charge bonus: +12 for Shades, Dark Riders, Doomfire Warlocks and Scourgerunner Chariot units", psIcon: 'redFlag', postScript: "Lord's army" }
            ] }
        ]
    },
    {
        name: 'Lash Master',
        description: "Judicious, or even not-so-judicious, use of the lash tends to get the desired results, so why hold back?",
        icon: "battle-damage",
        ranks: [
            { effects: [
                { icon: 'weapon-damage', description: "Weapon strength: +6% for Harpies, War Hydra, Kharibdyss, Black Dragon, Feral Manticore and Bloodwrack Madusae units", psIcon: 'redFlag', postScript: "Lord's army" }
            ] },
            { effects: [
                { icon: 'weapon-damage', description: "Weapon strength: +9% for Harpies, War Hydra, Kharibdyss, Black Dragon, Feral Manticore and Bloodwrack Madusae units", psIcon: 'redFlag', postScript: "Lord's army" },
                { icon: 'charge', description: "Charge bonus: +9 for Harpies, War Hydra, Kharibdyss, Black Dragon, Feral Manticore and Bloodwrack Madusae units", psIcon: 'redFlag', postScript: "Lord's army" },
                { icon: 'reload-time', description: "Reload time reduction: +9% for Harpies, War Hydra, Kharibdyss, Black Dragon, Feral Manticore and Bloodwrack Madusae units", psIcon: 'redFlag', postScript: "Lord's army" }
            ] },
            { effects: [
                { icon: 'weapon-damage', description: "Weapon strength: +12% for Harpies, War Hydra, Kharibdyss, Black Dragon, Feral Manticore and Bloodwrack Madusae units", psIcon: 'redFlag', postScript: "Lord's army" },
                { icon: 'charge', description: "Charge bonus: +12 for Harpies, War Hydra, Kharibdyss, Black Dragon, Feral Manticore and Bloodwrack Madusae units", psIcon: 'redFlag', postScript: "Lord's army" },
                { icon: 'reload-time', description: "Reload time reduction: +12% for Harpies, War Hydra, Kharibdyss, Black Dragon, Feral Manticore and Bloodwrack Madusae units", psIcon: 'redFlag', postScript: "Lord's army" }
            ] }
        ]
    },
    {
        name: 'Knight Lord',
        description: "The ability to command the savage, untamed Cold Ones should not be underestimated - not everyone has the knack!",
        icon: "battle-attack",
        ranks: [
            { effects: [
                { icon: 'melee', description: "Melee attack: +4 for Cold One Knights, Cold One Dread Knights and Cold One Chariot units", psIcon: 'redFlag', postScript: "Lord's army" }
            ] },
            { effects: [
                { icon: 'melee', description: "Melee attack: +6 for Cold One Knights, Cold One Dread Knights and Cold One Chariot units", psIcon: 'redFlag', postScript: "Lord's army" },
                { icon: 'defense', description: "Melee defense: +6 for Cold One Knights, Cold One Dread Knights and Cold One Chariot units", psIcon: 'redFlag', postScript: "Lord's army" }
            ] },
            { effects: [
                { icon: 'melee', description: "Melee attack: +8 for Cold One Knights, Cold One Dread Knights and Cold One Chariot units", psIcon: 'redFlag', postScript: "Lord's army" },
                { icon: 'defense', description: "Melee defense: +8 for Cold One Knights, Cold One Dread Knights and Cold One Chariot units", psIcon: 'redFlag', postScript: "Lord's army" }
            ] }
        ]
    },
    {
        name: 'Slaughterlord',
        description: "An elite even amongst elites, this accomplished warrior directs the cut-and-thrust of melee - a choreographer of death, you might say.",
        icon: "battle-attack",
        ranks: [
            { effects: [{ icon: 'melee', description: "Melee attack: +4 for Witch Elves, Har Ganeth Executioners, Black Guard of Naggarond and Sisters of Slaughter units", psIcon: 'redFlag', postScript: "Lord's army" }] },
            { effects: [
                { icon: 'melee', description: "Melee attack: +6 for Witch Elves, Har Ganeth Executioners, Black Guard of Naggarond and Sisters of Slaughter units", psIcon: 'redFlag', postScript: "Lord's army" },
                { icon: 'defense', description: "Melee defense: +6 for Witch Elves, Har Ganeth Executioners, Black Guard of Naggarond and Sisters of Slaughter units", psIcon: 'redFlag', postScript: "Lord's army" }
            ] },
            { effects: [
                { icon: 'melee', description: "Melee attack: +8 for Witch Elves, Har Ganeth Executioners, Black Guard of Naggarond and Sisters of Slaughter units", psIcon: 'redFlag', postScript: "Lord's army" },
                { icon: 'defense', description: "Melee defense: +8 for Witch Elves, Har Ganeth Executioners, Black Guard of Naggarond and Sisters of Slaughter units", psIcon: 'redFlag', postScript: "Lord's army" }
            ] }
        ]
    },
    {
        name: 'Strength Through Spite',
        description: "Hatred is an energy source just like any other, to be harnessed and directed at will.",
        icon: 'strength-through-spite',
        ranks: [
            { effects: [
                { icon: 'strength-through-spite', description: "Passive ability: 'Strength Through Spite'" }
            ] }
        ],
        spell: {
            description: 'Character ability',
            rarity: 'common',
            attributes: {
                type: [
                    { text: 'Augment (Area)' },
                    { text: 'Only acts on targets when in area' }
                ],
                duration: 'Constant',
                target: [
                    { text: 'Self' },
                    { text: 'Affects allies in range' }
                ],
                effectRange: '30m',
                effects: [
                    { text: '+5', icon: 'melee-character', postText: 'Melee Attack', color: 'green' }
                ]
            }
        }
    },
    {
        name: 'Loose!',
        description: "The authorisation to loose arrows without adherence to drill makes for an irregular - and  therefore far deadlier -hail of pointed death.",
        icon: 'darken-the-skies',
        ranks: [
            { effects: [
                { icon: 'darken-the-skies', description: "Passive ability: 'Loose!'" }
            ] }
        ],
        spell: {
            description: 'Character ability',
            rarity: 'common',
            attributes: {
                type: [
                    { text: 'Augment (Area)' },
                    { text: 'Only acts on targets when in area' }
                ],
                duration: 'Constant',
                target: [
                    { text: 'Self' },
                    { text: 'Affects allies in range' }
                ],
                effectRange: '40m',
                effects: [
                    { text: '+10', icon: 'reload-time-stat', postText: 'Reload Skill', color: 'green' },
                ]
            }
         }
    },
    {
        name: 'Cull the Unworthy',
        description: "Those who fail to make the grade don't just die, they're tortured and used for target practice!",
        icon: "battle-armor",
        ranks: [
            { effects: [
                { icon: 'weapon-damage', description: "Weapon strength: +12% for Bleakswords, Dreadspears, Darkshards and Reaper Bolt Thrower units", psIcon: 'goldChevron', postScript: "Rank 7 and above", ppsIcon: 'redFlag', postPostScript: "Lord's army" },
                { icon: 'ranged-damage', description: "Missile damage: +12% for Bleakswords, Dreadspears, Darkshards and Reaper Bolt Thrower units", psIcon: 'goldChevron', postScript: "Rank 7 and above", ppsIcon: 'redFlag', postPostScript: "Lord's army" },
                { icon: 'armor', description: "Armour: +10 for Bleakswords, Dreadspears, Darkshards and Reaper Bolt Thrower units", psIcon: 'goldChevron', postScript: "Rank 7 and above", ppsIcon: 'redFlag', postPostScript: "Lord's army" },
                { icon: 'resistance-missile', description: "Missile resistance: 15% for Bleakswords, Dreadspears, Darkshards and Reaper Bolt Thrower units", psIcon: 'goldChevron', postScript: "Rank 7 and above", ppsIcon: 'redFlag', postPostScript: "Lord's army" }
            ] }
        ]
    },
    {
        name: 'Ravager Rewards',
        description: "You'd think that pillaging the land would bring payment enough. You'd be wrong.",
        icon: "battle-speed",
        ranks: [
            { effects: [
                { icon: 'battle-movement', description: "Speed: +10% for Black Ark Corsairs, Shades, Dark Riders, Doomfire Warlocks and Scourgerunner Chariot units", psIcon: 'goldChevron', postScript: "Rank 7 and above", ppsIcon: 'redFlag', postPostScript: "Lord's army" },
                { icon: 'accuracy', description: "Range: +15% for Black Ark Corsairs, Shades, Dark Riders, Doomfire Warlocks and Scourgerunner Chariot units", psIcon: 'goldChevron', postScript: "Rank 7 and above", ppsIcon: 'redFlag', postPostScript: "Lord's army" },
                { icon: 'armor', description: "Armour: +10  for Black Ark Corsairs, Shades, Dark Riders, Doomfire Warlocks and Scourgerunner Chariot units", psIcon: 'goldChevron', postScript: "Rank 7 and above", ppsIcon: 'redFlag', postPostScript: "Lord's army" }
            ] }
        ]
    },
    {
        name: 'Favour the Fortunate',
        description: "The gods help those who help themselves - raising them above the rank and file to elite status.",
        icon: "battle-attack",
        ranks: [
            { effects: [
                { icon: 'charge', description: "Charge bonus: +12 for Black Guard of Naggarond, Har Ganeth Executioners, Cold One Knights, Cold One Dread Knights and Cold One Chariot units", psIcon: 'goldChevron', postScript: "Rank 7 and above", ppsIcon: 'redFlag', postPostScript: "Lord's army" },
                { icon: 'weapon-damage', description: "Weapon strength: +12% for Black Guard of Naggarond, Har Ganeth Executioners, Cold One Knights, Cold One Dread Knights and Cold One Chariot units", psIcon: 'goldChevron', postScript: "Rank 7 and above", ppsIcon: 'redFlag', postPostScript: "Lord's army" },
                { icon: 'armor', description: "Armour: +5 for Black Guard of Naggarond, Har Ganeth Executioners, Cold One Knights, Cold One Dread Knights and Cold One Chariot units", psIcon: 'goldChevron', postScript: "Rank 7 and above", ppsIcon: 'redFlag', postPostScript: "Lord's army" }
            ] }
        ]
    },
    {
        name: 'Confer Bloodlust',
        description: "The murderous, unforgiving rage of Khaine can be transferred from a Lord to his legions.",
        icon: "battle-damage",
        ranks: [
            { effects: [
                { icon: 'weapon-damage', description: "Weapon strength: +12% for Witch Elves, Harpies, War Hydra, Kharibdyss, Black Dragon, Feral Manticore, Sisters of Slaughter and bloodwrack Medusae units", psIcon: 'goldChevron', postScript: "Rank 7 and above", ppsIcon: 'redFlag', postPostScript: "Lord's army" },
                { icon: 'battle-movement', description: "Speed +10% for Witch Elves, Harpies, War Hydra, Kharibdyss, Black Dragon, Feral Manticore, Sisters of Slaughter and bloodwrack Medusae units", psIcon: 'goldChevron', postScript: "Rank 7 and above", ppsIcon: 'redFlag', postPostScript: "Lord's army" },
                { icon: 'resistance-physical', description: "Physical resistance: +10% for Witch Elves, Harpies, War Hydra, Kharibdyss, Black Dragon, Feral Manticore, Sisters of Slaughter and bloodwrack Medusae units", psIcon: 'goldChevron', postScript: "Rank 7 and above", ppsIcon: 'redFlag', postPostScript: "Lord's army" }
            ] }
        ]
    },
    {
        name: 'Kindle the Fury',
        description: "Hatred is an energy source just like any other, to be harnessed and directed at will.",
        icon: 'kindle-the-fury',
        ranks: [
            { effects: [
                { icon: 'strength-through-spite', description: "Replaces: 'Strength Through Spite'" },
                { icon: 'kindle-the-fury', description: "Passive ability: 'Kindle the Fury'" }
            ] }
        ],
        spell: {
            description: 'Lord ability',
            rarity: 'rare',
            attributes: {
                type: [
                    { text: 'Augment (Area)' },
                    { text: 'Only acts on targets when in area' }
                ],
                duration: 'Constant',
                target: [
                    { text: 'Self' },
                    { text: 'Affects allies in range' }
                ],
                effectRange: '40m',
                effects: [
                    { text: '+9', icon: 'melee-character', postText: 'Melee Attack', color: 'green' },
                    { text: '+8%', icon: 'icon-melee-base', postText: 'Base Weapon Damage', color: 'green' }
                ]
            }
        }
    },
    {
        name: 'Darken the Skies',
        description: "Above the battlefield, the air is filled with arrows; a shroud of pure death blotting out the sun.",
        icon: 'darken-the-skies',
        ranks: [
            { effects: [
                { icon: 'darken-the-skies', description: "Replaces: 'Loose!'" },
                { icon: 'darken-the-skies', description: "Passive ability: 'Darken the Skies'" }
            ] }
        ],
        spell: {
            description: 'Character ability',
            rarity: 'uncommon',
            attributes: {
                type: [
                    { text: 'Augment (Area)' },
                    { text: 'Only acts on targets when in area' }
                ],
                duration: 'Constant',
                target: [
                    { text: 'Self' },
                    { text: 'Affects allies in range' }
                ],
                effectRange: '40m',
                effects: [
                    { text: '+20', icon: 'reload-time-stat', postText: 'Reload Skill', color: 'green' },
                ]
            }
         }
    },
    {
        name: 'Route Marcher',
        description: "Those who know the land and its secrets will travel faster and further than the foes who don't",
        icon: 'campaign-movement',
        ranks: [
            { effects: [{ icon: 'campaign-movement', description: "Campaign movement range: +10%" }] }
        ]
    },
    {
        name: 'Iron Disciplinarian',
        description: "This Lord expects utter obedience from the smallfolk, and has little time for insurrections or petty revolts.",
        icon: 'campaign-public-order',
        ranks: [
            { effects: [{ icon: 'public-order', description: "Public order: +1", postScript: "local province" }] },
            { effects: [{ icon: 'public-order', description: "Public order: +2", postScript: "local province" }] },
            { effects: [{ icon: 'public-order', description: "Public order: +3", postScript: "local province" }] }            

        ]
    },
    {
        name: 'Dreaded Slaver',
        description: "This one ensures that those captured in battle wished they'd died on the field, so great is the cruelty that awaits them.",
        icon: "campaign-slaves",
        ranks: [
            { effects: [{ icon: "slaves", description: "Casualties captured post-battle: +5%" }] },
            { effects: [{ icon: "slaves", description: "Casualties captured post-battle: +12%" }] },
            { effects: [{ icon: "slaves", description: "Casualties captured post-battle: +25%" }] }            
        ]
    },
    {
        name: 'Serve Or Die',
        description: "You will serve me, wretch, or you will die, there is no other option.",
        icon: "campaign-military-spending",
        ranks: [
            { effects: [{ icon: "treasury", description: "Recruitment cost: -3%", psIcon: 'redFlag', postScript: "Lord's army" }] },
            { effects: [{ icon: "treasury", description: "Recruitment cost: -8%", psIcon: 'redFlag', postScript: "Lord's army" }] },
            { effects: [{ icon: "treasury", description: "Recruitment cost: -15%", psIcon: 'redFlag', postScript: "Lord's army" }] }            
        ]
    },
    {
        name: 'Infamous Raider',
        description: "If there were annals detailing the dastardly deeds of the sackers and looters of the world, this inveterate brigand would feature heavily.",
        icon: "campaign-military-spending",
        ranks: [
            { effects: [
                { icon: "coin-plus", description: "Income from raiding: +5%", psIcon: 'redFlag', postScript: "Lord's army" },
                { icon: "coin-plus", description: "Income from looting settlements: +4%" },
                { icon: "coin-plus", description: "Income from sacking settlements: +4%" }
            ] },
            { effects: [
                { icon: "coin-plus", description: "Income from raiding: +12%", psIcon: 'redFlag', postScript: "Lord's army" },
                { icon: "coin-plus", description: "Income from looting settlements: +9%" },
                { icon: "coin-plus", description: "Income from sacking settlements: +9%" }
            ] },
            { effects: [
                { icon: "coin-plus", description: "Income from raiding: +20%", psIcon: 'redFlag', postScript: "Lord's army" },
                { icon: "coin-plus", description: "Income from looting settlements: +15%" },
                { icon: "coin-plus", description: "Income from sacking settlements: +15%" }
            ] }            
        ]
    },
    {
        name: 'Draftmaster',
        description: "Someone has to ensure the numbers and quality of recruits remain high.",
        icon: 'campaign-experience',
        ranks: [
            { effects: [
                { icon: 'experience', description: "Recruit rank: +1 for all units" },
                { icon: 'army', description: "Local recruitment capacity: +1", postScript: "local province" }
            ] }          
        ]
    },
    {
        name: 'Lightning Strike',
        description: "The time to strike is now!",
        icon: 'campaign-subterfuge',
        ranks: [
            { effects: [{ icon: 'subterfuge', description: "Enables lightning strike battles when reinforcements are present" }] }
        ]
    },
    {
        name: 'Quartermaster',
        description: "A good quartermaster can ration equipment and foodstuffs efficiently, making supplies last longer.",
        icon: "campaign-military-spending",
        ranks: [
            { effects: [{ icon: "coin", description: "Upkeep: -3% for all units", psIcon: 'redFlag', postScript: "Lord's army" }] },
            { effects: [{ icon: "coin", description: "Upkeep: -8% for all units", psIcon: 'redFlag', postScript: "Lord's army" }] },
            { effects: [{ icon: "coin", description: "Upkeep: -15% for all units", psIcon: 'redFlag', postScript: "Lord's army" }] }
        ]
    },
    {
        name: 'Fleeting Shadow',
        description: "Knowing precisely where and when to launch an ambush, and against who, takes an unusual level of guile.",
        icon: 'campaign-ambush',
        ranks: [
            { effects: [
                { icon: 'ambush', description: "Ambush success chance: +6%", psIcon: 'redFlag', postScript: "Lord's army" },
                { icon: 'ambush', description: "Ambush defense chance: +5%" }
            ] },
            { effects: [
                { icon: 'ambush', description: "Ambush success chance: +16%", psIcon: 'redFlag', postScript: "Lord's army" },
                { icon: 'ambush', description: "Ambush defense chance: +10%" }
            ] },
            { effects: [
                { icon: 'ambush', description: "Ambush success chance: +30%", psIcon: 'redFlag', postScript: "Lord's army" },
                { icon: 'ambush', description: "Ambush defense chance: +20%" },
                { icon: 'vanguard', description: "Attribute: Vanguard Deployment" } // TODO this skill has gameplay explanation
            ] }            
        ]
    },
    {
        name: 'Elven Healing',
        description: "The ancient Asur arts teach one to heal as well as how to harm.",
        icon: 'campaign-replenishment',
        ranks: [
            { effects: [
                { icon: 'disaster', description: "Attrition: -3% casualties suffered from all attrition", psIcon: 'redFlag', postScript: "Lord's army" },
                { icon: 'replenishment', description: "Casualty replenishment rate: +3%", psIcon: 'redFlag', postScript: "Lord's army" }
            ] },
            { effects: [
                { icon: 'disaster', description: "Attrition: -8% casualties suffered from all attrition", psIcon: 'redFlag', postScript: "Lord's army" },
                { icon: 'replenishment', description: "Casualty replenishment rate: +8%", psIcon: 'redFlag', postScript: "Lord's army" }
            ] },
            { effects: [
                { icon: 'disaster', description: "Attrition: -15% casualties suffered from all attrition", psIcon: 'redFlag', postScript: "Lord's army" },
                { icon: 'replenishment', description: "Casualty replenishment rate: +15%", psIcon: 'redFlag', postScript: "Lord's army" }
            ] }
        ]
    },
    {
        name: 'Renowned & Feared',
        description: "This Lord's many deeds - both on and off the battlefield - have brought them renown among their allies and made them feared by their enemies.",
        icon: 'campaign-agent',
        ranks: [
            { effects: [
                { icon: "coin", description: "Upkeep: -8% for all units", psIcon: 'redFlag', postScript: "Lord's army" },
                { icon: 'campaign-movement', description: "Campaign movement range: +5%" },
                { icon: 'agent', description: "Enemy Hero action success chance: -10%" },
                { icon: 'agent', description: "Hero self-defense: +25% chance of wounding aggressors" },
                { icon: 'experience', description: "Recruit rank: +1 for all units" }
            ] }     
        ]
    }
];
