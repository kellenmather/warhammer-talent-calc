exports.skills = [    
    // BELOW THIS LINE IS ALREADY IN MONGODB

    // BELOW THIS LINE IS ALREADY IN MONGODB

    // BELOW THIS LINE IS ALREADY IN MONGODB

    // BELOW THIS LINE IS ALREADY IN MONGODB

    // BELOW THIS LINE IS ALREADY IN MONGODB

    // BELOW THIS LINE IS ALREADY IN MONGODB

    // BELOW THIS LINE IS ALREADY IN MONGODB

    // BELOW THIS LINE IS ALREADY IN MONGODB

    // BELOW THIS LINE IS ALREADY IN MONGODB

    // BELOW THIS LINE IS ALREADY IN MONGODB

    // BELOW THIS LINE IS ALREADY IN MONGODB

    // BELOW THIS LINE IS ALREADY IN MONGODB

    // BELOW THIS LINE IS ALREADY IN MONGODB

    // BELOW THIS LINE IS ALREADY IN MONGODB

    // BELOW THIS LINE IS ALREADY IN MONGODB

    // BELOW THIS LINE IS ALREADY IN MONGODB

    // BELOW THIS LINE IS ALREADY IN MONGODB

    // BELOW THIS LINE IS ALREADY IN MONGODB

    // BELOW THIS LINE IS ALREADY IN MONGODB

    // BELOW THIS LINE IS ALREADY IN MONGODB

    // BELOW THIS LINE IS ALREADY IN MONGODB

    // BELOW THIS LINE IS ALREADY IN MONGODB

    // BELOW THIS LINE IS ALREADY IN MONGODB

    // BELOW THIS LINE IS ALREADY IN MONGODB

    // BELOW THIS LINE IS ALREADY IN MONGODB

    // BELOW THIS LINE IS ALREADY IN MONGODB

    // BELOW THIS LINE IS ALREADY IN MONGODB

    // BELOW THIS LINE IS ALREADY IN MONGODB
    {
        name: "Hard to Hit",
        description: "Hand-to-hand combat is a lethal match of cut and thrust. However, i's not all about offensive strikes; parries and other defensive moves can also win the day.",
        icon: "character-defense",
        ranks: [
            { effects: [{ icon: "defense-character", description: "Melee defense: +6"}] },
            { effects: [{ icon: "defense-character", description: "Melee defense: +12"}] }
        ]
    },
    {
        name: "Blade Master",
        description: "This warrior is one with their blade; it is an extension of their will, making them a worthy foe in combat.",
        icon: "character-attack",
        ranks: [
            { effects: [{ icon: "melee-character", description: "Melee attack: +6" }] },
            { effects: [{ icon: "melee-character", description: "Melee attack: +12" }] }
        ]
    },
    {
        name: "Indomitable",
        description: "The iron will and indomitable presence of this leader ensures their followers remain steadfast when facing peril.",
        icon: "character-morale",
        ranks: [
            { effects: [{ icon: "morale-character", description: "Leadership: +6" }] },
            { effects: [{ icon: "morale-character", description: "Leadership: +12" }] }
        ]
    },
    {
        name: "Deadly Onslaught",
        description: "The war is endless. The cycle of charging, clashing, and bloody hand-to-hand fighting is without end. It will never stop.",
        icon: "ability-deadly-onslaught",
        ranks: [
            { effects: [{ icon: "ability-deadly-onslaught", description: "Ability: \"Deadly Onslaught\"" }] }
        ],
        spell: {
            description: "Character ability",
            cooldown: "90",
            rarity: "uncommon",
            attributes: {
                type: "Augment",
                duration: "31 seconds",
                target: "Self",
                effects: [
                    { text: "+25%", icon: "icon-armor-piercing", postText: "Armor-Piercing Weapon Damage", color: "green" },
                    { text: "+25%", icon: "icon-damage-base", postText: "Base Weapon Damage", color: "green" },
                    { text: "+36%", icon: "charge-character", postText: "Charge Bonus", color: "green" }
                ]
            }
        }
    },
    {
        name: "Heroic Killing Blow",
        description: "There are powerful beings who can decapitate a dragon or plunge a sword into the heart of a griffon in one might strike.",
        icon: "ability-heroic-killing-blow",
        ranks: [
            { effects: [{ icon: "ability-heroic-killing-blow", description: "Ability: \"Heroic Killing Blow\"" }] }
        ],
        spell: {
            description: "Character ability",
            cooldown: "90",
            rarity: "uncommon",
            attributes: {
                type: "Augment",
                duration: "25 seconds",
                target: "Self",
                effects: [
                    { text: "+50%", icon: "icon-armor-piercing", postText: "Armor-Piercing Weapon Damage", color: "green" },
                    { text: "+50%", icon: "icon-damage-base", postText: "Base Weapon Damage", color: "green" }
                ]
            }
        }
    },
    {
        name: "Wound-Maker",
        description: "Such is their power and ferocity, a wound-maker will ravage the foe, cutting and pulverising until there is only one exit - death.",
        icon: "character-damage",
        ranks: [
            { effects: [{ icon: "damage", description: "Weapon strength: +10%" }] },
            { effects: [{ icon: "damage", description: "Weapon strength: +20%" }] }
        ]
    },
    {
        name: "Full Plate Armour",
        description: "Full-Plate armour protects the wearer from head-to-foot. Many shuch suits are blessed or imbued with arcane ability.",
        icon: "character-armor",
        ranks: [
            { effects: [{ icon: "armor-character", description: "Armor: +7" }] },
            { effects: [{ icon: "armor-character", description: "Armor: +15" }] }
        ]
    },
    {
        name: "Blade Shield",
        description: "A blade that sings in defence will not let its wielder be penetrated.",
        icon: "character-defense",
        ranks: [
            { effects: [{ icon: "defense-character", description: "Melee defense: +6"}] },
            { effects: [{ icon: "defense-character", description: "Melee defense: +12"}] }
        ]
    },
    {
        name: "Expeditious Endeavour",
        description: "What the enemy cannot see, it cannot hit. What the enemy cannot see, it cannot survive.",
        icon: "character-speed",
        ranks: [
            { effects: [{ icon: "movement-character", description: "Speed: +7%" }] },
            { effects: [{ icon: "movement-character", description: "Speed: +15%" }] }
        ]
    },
    {
        name: "Inspiring Presence",
        description: "There are Lords that radiate power, confidence and fear, inspiring their followers to great or terrible acts.",
        icon: "battle-morale",
        ranks: [
            { effects: [{ icon: "morale", description: "Characte's aura leadership effect: +5" }] }
        ]
    },
    {
        name: "Rally!",
        description: "To rally the troops and bring them back to the fore takes strong leadership skills and an iron will.",
        icon: "ability-rally",
        ranks: [
            { effects: [
                { icon: "ability-rally", description: "Passive ability: \"Rally!\"" }
            ] }
        ],
        spell: {
            description: "Character ability",
            rarity: "common",
            cooldown: "60",
            attributes: {
                type: [
                    { text: "Augment (Area)" },
                    { text: "Only acts on targets when in area" }
                ],
                duration: "14 seconds",
                target: [
                    { text: "Self" },
                    { text: "Affects allies in range" }
                ],
                effectRange: "40m",
                effects: [
                    { text: "+16", icon: "morale-character", postText: "Leadership", color: "green" }
                ]
            }
        }
    },
    {
        name: "Route Marcher",
        description: "Those who know the land and its secrets will travel faster and further than the foes who don't",
        icon: "campaign-movement",
        ranks: [
            { effects: [{ icon: "campaign-movement", description: "Campaign movement range: +10%" }] }
        ]
    },
    {
        name: "Iron Disciplinarian",
        description: "This Lord expects utter obedience from the smallfolk, and has little time for insurrections or petty revolts.",
        icon: "campaign-public-order",
        ranks: [
            { effects: [{ icon: "public-order", description: "Public order: +1", postScript: "local province", ps: "local province" }] },
            { effects: [{ icon: "public-order", description: "Public order: +2", postScript: "local province", ps: "local province" }] },
            { effects: [{ icon: "public-order", description: "Public order: +3", postScript: "local province", ps: "local province" }] }            

        ]
    },
    {
        name: "Draftmaster",
        description: "Someone has to ensure the numbers and quality of recruits remain high.",
        icon: "campaign-experience",
        ranks: [
            { effects: [
                { icon: "experience", description: "Recruit rank: +1 for all units" },
                { icon: "army", description: "Local recruitment capacity: +1", ps: "local province" }
            ] }          
        ]
    },
    {
        name: "Lightning Strike",
        description: "The time to strike is now!",
        icon: "campaign-subterfuge",
        ranks: [
            { effects: [{ icon: "subterfuge", description: "Enables lightning strike battles when reinforcements are present" }] }
        ]
    },
    {
        name: "Quartermaster",
        description: "A good quartermaster can ration equipment and foodstuffs efficiently, making supplies last longer.",
        icon: "campaign-military-spending",
        ranks: [
            { effects: [{ icon: "coin", description: "Upkeep: -3% for all units", ps: "Lord's army" }] },
            { effects: [{ icon: "coin", description: "Upkeep: -8% for all units", ps: "Lord's army" }] },
            { effects: [{ icon: "coin", description: "Upkeep: -15% for all units", ps: "Lord's army" }] }
        ]
    },
    {
        name: "Elven Healing",
        description: "The ancient Asur arts teach one to heal as well as how to harm.",
        icon: "campaign-replenishment",
        ranks: [
            { effects: [
                { icon: "disaster", description: "Attrition: -3% casualties suffered from all attrition", ps: "Lord's army" },
                { icon: "replenishment", description: "Casualty replenishment rate: +3%", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "disaster", description: "Attrition: -8% casualties suffered from all attrition", ps: "Lord's army" },
                { icon: "replenishment", description: "Casualty replenishment rate: +8%", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "disaster", description: "Attrition: -15% casualties suffered from all attrition", ps: "Lord's army" },
                { icon: "replenishment", description: "Casualty replenishment rate: +15%", ps: "Lord's army" }
            ] }
        ]
    },
    {
        name: "Renowned & Feared",
        description: "This Lor's many deeds - both on and off the battlefield - have brought them renown among their allies and made them feared by their enemies.",
        icon: "campaign-agent",
        ranks: [
            { effects: [
                { icon: "coin", description: "Upkeep: -8% for all units", ps: "Lord's army" },
                { icon: "campaign-movement", description: "Campaign movement range: +5%" },
                { icon: "agent", description: "Enemy Hero action success chance: -10%" },
                { icon: "agent", description: "Hero self-defense: +25% chance of wounding aggressors" },
                { icon: "experience", description: "Recruit rank: +1 for all units" }
            ] }     
        ]
    },
    {
        name: "Devastating Charge",
        description: "Some creatures charge home with such fury that the very ground shakes beneath their feet.",
        icon: "character-charge",
        ranks: [
            { effects: [{ icon: "charge-character", description: "Charge bonus: +15" }] },
            { effects: [{ icon: "charge-character", description: "Charge bonus: +30" }] }
        ]
    },
    {
        name: "Deadeye",
        description: "Although precision in missile combat is something that can be learned, this one was born with a high degree of natural talent.",
        icon: "character-ammo",
        ranks: [
            { effects: [
                { icon: "ammo-character", description: "Ammunition: +15%" },
                { icon: "reload-time-character", description: "Reload time reduction: +7%" }
            ] },
            { effects: [
                { icon: "ammo-character", description: "Ammunition: +30%" },
                { icon: "reload-time-character", description: "Reload time reduction: +15%" }
            ] }
        ]
    },
    {
        name: "Piercing Shots",
        description: "The forest teaches a warrior not only when to fire but where, which makes a bigger difference.",
        icon: "character-ranged-damage",
        ranks: [
            { effects: [{ icon: "ranged-damage-character", description: "Missile damage: +7%" }] },
            { effects: [{ icon: "ranged-damage-character", description: "Missile damage: +15%" }] }
        ]
    },
    {
        name: "Loose!",
        description: "The authorisation to loose arrows without adherence to drill makes for an irregular - and  therefore far deadlier -hail of pointed death.",
        icon: "darken-the-skies",
        ranks: [
            { effects: [
                { icon: "darken-the-skies", description: "Passive ability: \"Loose!\"" }
            ] }
        ],
        spell: {
            description: "Character ability",
            rarity: "common",
            attributes: {
                type: [
                    { text: "Augment (Area)" },
                    { text: "Only acts on targets when in area" }
                ],
                duration: "Constant",
                target: [
                    { text: "Self" },
                    { text: "Affects allies in range" }
                ],
                effectRange: "40m",
                effects: [
                    { text: "+10", icon: "reload-time-stat", postText: "Reload Skill", color: "green" },
                ]
            }
         }
    },
    {
        name: "Darken the Skies",
        description: "Above the battlefield, the air is filled with arrows; a shroud of pure death blotting out the sun.",
        icon: "darken-the-skies",
        ranks: [
            { effects: [
                { icon: "darken-the-skies", description: "Replaces: \"Loose!\"" },
                { icon: "darken-the-skies", description: "Passive ability: \"Darken the Skies\"" }
            ] }
        ],
        spell: {
            description: "Character ability",
            rarity: "uncommon",
            attributes: {
                type: [
                    { text: "Augment (Area)" },
                    { text: "Only acts on targets when in area" }
                ],
                duration: "Constant",
                target: [
                    { text: "Self" },
                    { text: "Affects allies in range" }
                ],
                effectRange: "40m",
                effects: [
                    { text: "+20", icon: "reload-time-stat", postText: "Reload Skill", color: "green" },
                ]
            }
         }
    },
    {
        name: "Evasion",
        description: "Those with such skills can evade enemy attacks with ease and break from combat, should they feel that it is tactically important to do so.",
        icon: "spell-evasion",
        ranks: [
            { effects: [{ icon: "spell-evasion", description: "Passive ability: \"Evasion\"" }] }
        ],
        spell: {
            description: "Character ability",
            rarity: "common",
            attributes: {
                type: "Augment",
                duration: "Constant",
                target: "Self",
                effects: [
                    { text: "+5", icon: "defense-character", postText: "Melee Defense", color: "green" },
                    { text: "+6%", icon: "movement-character", postText: "Speed", color: "green" }
                ]
            }
        }
    },
    {
        name: "Arcane Conduit",
        description: "A strong mind is needed to channel the Winds of Magic. Those that have such a gift become arcane conduits - funnelling the magical tempest to their cause.",
        icon: "spell-arcane-conduit",
        ranks: [
            { effects: [{ icon: "spell-arcane-conduit", description: "Ability: \"Arcane Conduit\"" }] }
        ],
        spell: {
            description: "Character ability",
            rarity: "uncommon",
            cooldown: "90",
            attributes: {
                type: "Augment of the Winds",
                duration: "40 seconds",
                target: "Self",
                effects: [
                    { text: "Improved", icon: "magic-pool", postText: "power recharge rate", uptick: "up-green", color: "green" },
                    { text: "Increase to", icon: "magic-replenish", postText: "power reserves", uptick: "up-green", color: "green" }
                ]
            }
        }
    },
    {
        name: "Earthing",
        description: "By stabbing a staff or some arcane conduit into the ground, an accomplished magic-user can earth or tether the Winds and hopefully reduce a chance of miscasting.",
        icon: "character-magic",
        ranks: [
            { effects: [
                { icon: "magic-character", description: "Miscast base chance: -15%" }
            ] }
        ]
    },
    {
        name: "Magical Reserves",
        description: "A few magic-users have the ability to store the Winds of Magic for later use, increasing their spellcasting power when it really counts.",
        icon: "character-magic",
        ranks: [
            { effects: [
                { icon: "magic", description: "Winds of Magic power reserve: +15" }
            ] }
        ]
    },
    {
        name: "Foe-Seeker",
        description: "From one bloodied, lifeless corpse to the next, this one is always looking for the next adversary to best.",
        icon: "ability-foe-seeker",
        ranks: [
            { effects: [{ icon: "ability-foe-seeker", description: "Ability: \"Foe-Seeker\"" }] }
        ],
        spell: {
            description: "Character ability",
            cooldown: "60",
            rarity: "common",
            attributes: {
                type: "Augment",
                duration: "25 seconds",
                target: "Self",
                effects: [
                    { text: "+24%", icon: "movement-character", postText: "Speed", color: "green" },
                    { text: "+18%", icon: "fatigue", postText: "Vigour", color: "green" }
                ]
            }
         }
    },
    {
        name: "Immortality",
        description: "Who wants to live forever? As it turns out, most beings wouldn't say no...",
        icon: "character-wound-time",
        ranks: [{ effects: [{ icon: "wound-time", description: "When normally killed in battle, this Lord will be wounded instead" }] }]
    },
    {
        name: "Kindleflame",
        description: "Fire feeds fire, two blazes together are stronger and hotter than two apart. The Kindleflame intensifies such fire.",
        icon: "spell-kindleflame",
        ranks: [
            { effects: [{ icon: "spell-kindleflame", description: "Passive ability: \"Kindleflame\"" }] }
        ],
        spell: {
            description: "Lore attribute",
            rarity: "common",
            attributes: {
                type: "Ward Save Hex (Area)",
                duration: "Constant",
                target: [
                    { text: "Around self" },
                    { text: "Affects enemies in range" }
                ],
                activeIf: "Casting",
                effectRange: "Map-wide",
                effects: [
                    { text: "Kindleflame (15 seconds)", color: "red" },
                    { text: "+22% Weakness to", icon: "icon-fire", postText: "Fire Damage", color: "red" }
                ]
            }
        }
    },
    {
        name: "Smoke & Mirrors",
        description: "A conjured shadow is just as obfuscating as a real one - the Shadow Wizard is master or mistress of the \"concealing\" arts.",
        icon: "spell-smoke-mirrors",
        ranks: [
            { effects: [{ icon: "spell-smoke-mirrors", description: "Passive ability: \"Smoke & Mirrors\"" }] }
        ],
        spell: {
            description: "Lore attribute",
            rarity: "common",
            attributes: {
                type: "Augment (Area)",
                duration: "Constant",
                target: [
                    { text: "Self" },
                    { text: "Affects allies in range" }
                ],
                activeIf: "Casting",
                effectRange: "Map-wide",
                effects: [
                    { text: "Smoke & Mirrors (24 seconds)", color: "green" },
                    { text: "+12%", icon: "movement-character", postText: "Speed", color: "green" }
                ]
            }
        }
    },
    {
        name: "Life-Leeching",
        description: "Spellcaster who practice Death Magic can channel the life force of foes into their spells.",
        icon: "spell-life-leeching",
        ranks: [
            { effects: [{ icon: "spell-life-leeching", description: "Passive ability: \"Life-Leeching\"" }] }
        ],
        spell: {
            description: "Lore attribute",
            rarity: "common",
            attributes: {
                type: "Augment of the Winds",
                duration: "Constant",
                target: "Self",
                activeIf: "Casting",
                effects: [
                    { text: "Improved", icon: "magic-replenish", postText: "power recharge rate", color: "green" },
                    { text: "Life Leeching (25 seconds)" }
                ]
            }
        }
    },
    {
        name: "Wild Heart",
        description: "The spellcaster attunes the magic of the wild, channelling its ancient and arcane power.",
        icon: "spell-wild-heart",
        ranks: [
            { effects: [{ icon: "spell-wild-heart", description: "Passive ability: \"Wild Heart\"" }] }
        ],
        spell: {
            description: "Lore attribute",
            rarity: "common",
            attributes: {
                type: "Augment of the Winds (Area)",
                duration: "Constant",
                target: "Self",
                activeIf: "Casting",
                effects: [
                    { text: "Improved", icon: "magic-replenish", postText: "power recharge rate", uptick: "up-green", color: "green" },
                    { text: "Improved", icon: "magic-pool", postText: "power reserves", uptick: "up-green", color: "green" },
                    { text: "Wild Heart (29 seconds)" }
                ]
            }
        }
    },
    {
        name: "Flock of Doom",
        description: "With a mighty bellow, the caster invokes Corvus the Crow Lord, summoning his servants to peck at the fo's eyes.",
        icon: "spell-flock-of-doom",
        ranks: [
            { effects: [
                { icon: "spell-flock-of-doom", description: "Spell: \"Flock of Doom Upgraded\"" },
                { icon: "spell-flock-of-doom", description: "Overcast spell: \"Flock of Doom Upgraded\"" },
                { icon: "spell-flock-of-doom", description: "Cooldown: -30% to \"Flock of Doom\"" }
            ] },
            { effects: [
                { icon: "spell-flock-of-doom", description: "Overcast spell: \"Flock of Doom Upgraded\"" },
                { icon: "spell-flock-of-doom", description: "Cooldown: -50% to \"Flock of Doom\"" },
                { icon: "spell-flock-of-doom", description: "Winds of Magic cost: -1 for \"Flock of Doom\"" },
                { icon: "spell-flock-of-doom", description: "Winds of Magic cost: -2 for \"Flock of Doom Upgraded\"" },
                { icon: "spell-flock-of-doom", description: "Miscast base chance: -15% for \"Flock of Doom Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "common",
            cost: [12, 10],
            cooldown: "30",
            attributes: {
                type: [
                    { text: "Direct Damage (Area)"},
                    { text: "Only acts on targets when in area"}
                ],
                duration: "14 seconds",
                target: [
                    { text: "Ground, Enemy" },
                    { text: "Affects enemies in range" },
                    { text: "300m", uptick: "range" }
                ],
                effectRange: "30m",
                miscastChance:  {"0": "50", "1": "35"},
                effects: [
                    { text: "Extended effect duration", uptick: "up-blue", color: "blue" },
                    { text: "Extended cast range", uptick: "up-blue", color: "blue" },
                    { text: "Causes damage to combatants", uptick: "up-green", color: "green" },
                    { text: "Strong vs. multiple combatants", uptick: "up-green", color: "green" },
                    { text: "High chance opponent will resist damage", uptick: "down-red", color: "red" },
                    { text: "Weak vs. a single combatant", uptick: "down-red", color: "red" }
                ]
            }
        }
    },
    {
        name: "The Enfeebling Foe",
        description: "When cast this spell enfeebles enemy minds; they feel the crushing weight of reality bearing down upon them.",
        icon: "spell-the-enfeebling-foe",
        ranks: [
            { effects: [
                { icon: "spell-the-enfeebling-foe", description: "Spell: \"The Enfeebling Foe Upgraded\"" },
                { icon: "spell-the-enfeebling-foe", description: "Overcast spell: \"The Enfeebling Foe Upgraded\"" },
                { icon: "spell-the-enfeebling-foe", description: "Cooldown: -30% to \"The Enfeebling Foe\"" }
            ] },
            { effects: [
                { icon: "spell-the-enfeebling-foe", description: "Overcast spell: \"The Enfeebling Foe Upgraded\"" },
                { icon: "spell-the-enfeebling-foe", description: "Cooldown: -50% to \"The Enfeebling Foe\"" },
                { icon: "spell-the-enfeebling-foe", description: "Winds of Magic cost: -1 for \"The Enfeebling Foe\"" },
                { icon: "spell-the-enfeebling-foe", description: "Winds of Magic cost: -2 for \"The Enfeebling Foe Upgraded\"" },
                { icon: "spell-the-enfeebling-foe", description: "Miscast base chance: -15% for \"The Enfeebling Foe Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "common",
            cost: [10, 8],
            cooldown: "30",
            attributes: {
                type: "Hex",
                duration: "44 seconds",
                target: [
                    { text: "Enemy" },
                    { text: "200m", uptick: "range" }
                ],
                miscastChance:  {"0": "50", "1": "35"},
                effects: [
                    { text: "Extended effect duration", uptick: "up-blue", color: "blue" },
                    { text: "-24", icon: "defense-character", postText: "Melee Defense", uptick: "down-red", color: "red" },
                    { text: "-24", icon: "melee-character", postText: "Melee Attack", uptick: "down-red", color: "red" }
                ]
            }
        }
    },
    {
        name: "Flaming Sword of Rhuin",
        description: "The Wizard ensorcels allied weapons, making them burn with a savage fire. The targets of the spell are augmented with superior flaming blades.",
        icon: "spell-flaming-sword-of-rhuin",
        ranks: [
            { effects: [
                { icon: "spell-flaming-sword-of-rhuin", description: "Spell: \"Flaming Sword of Rhuin Upgraded\"" },
                { icon: "spell-flaming-sword-of-rhuin", description: "Overcast spell: \"Flaming Sword of Rhuin Upgraded\"" },
                { icon: "spell-flaming-sword-of-rhuin", description: "Cooldown: -30% to \"Flaming Sword of Rhuin\"" }
            ] },
            { effects: [
                { icon: "spell-flaming-sword-of-rhuin", description: "Overcast spell: \"Flaming Sword of Rhuin Upgraded\"" },
                { icon: "spell-flaming-sword-of-rhuin", description: "Cooldown: -50% to \"Flaming Sword of Rhuin\"" },
                { icon: "spell-flaming-sword-of-rhuin", description: "Winds of Magic cost: -2 for \"Flaming Sword of Rhuin\"" },
                { icon: "spell-flaming-sword-of-rhuin", description: "Winds of Magic cost: -2 for \"Flaming Sword of Rhuin Upgraded\"" },
                { icon: "spell-flaming-sword-of-rhuin", description: "Miscast base chance: -15% for \"Flaming Sword of Rhuin Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "uncommon",
            cost: [12, 10],
            cooldown: "44",
            attributes: {
                type: [
                    { text: "Augment (Area)"},
                    { text: "Only acts on target when in area"}
                ],
                duration: "44 seconds",
                target: [
                    { text: "Self, Ground, Ally" },
                    { text: "Affects allies in range" },
                    { text: "200m", uptick: "range" }
                ],
                effectRange: "40m",
                miscastChance:  {"0": "50", "1": "35"},
                imbues: [{ text: "Magical Damage", icon: "icon-fire", postText: "Fire Damage", uptick: "icon-magic" }],
                effects: [
                    { text: "Extended effect duration", uptick: "up-blue", color: "blue" },
                    { text: "+30%", icon: "icon-damage-base", postText: "Base Weapon Damage", color: "green" },
                    { text: "+25%", icon: "icon-ranged-damage-base", postText: "Base Missile Damage", color: "green" }
                ]
            }
        }
    },
]