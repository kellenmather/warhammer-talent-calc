exports.skills = [
    {
        ref: "swordOfTorgald",
        name: "Sword of Torgald",
        description: "Although King Torgald's blade is a prized trophy, it is also an eternal reminder of the consequences of grand proclamations afore the Gods.",
        icon: "item-weapon",
        quest: true,
        ranks: [
            { effects: [
                { icon: "public-order", description: "Public order: +5", ps: "all provinces" },
                { icon: "melee-character", description: "Melee attack: +10" },
                { icon: "damage", description: "Weapon strength: +10%" },
                { icon: "income", description: "Income from post-battle loot: +10%" },
                { icon: "ability-sword-of-torgald", description: "Ability: \"Sword of Torgald\"" }
            ] }
        ],
        spell: {
            description: "Weapon",
            rarity: "legendary",
            cooldown: "120",
            attributes: {
                type: "Augment",
                duration: "44 seconds",
                target: "Self",
                effects: [
                    { text: "+90%", postText: "Base Weapon Damage", icon: "icon-base-damage", color: "green" }
                ]
            }
        }
    },
    {
        ref: "theWintertoothCrown",
        name: "The Wintertooth Crown",
        description: "Whether by the crown's own properties, or by the grace of the Dark Gods, all things bestial and savage obey the wearer.",
        icon: "item-enchanted",
        quest: true,
        ranks: [
            { effects: [
                { icon: "defense-character", description: "Melee defense: +10" },
                { icon: "subterranean", description: "Chance of intercepting an army using the Underway, beast-paths or Worldroots: +10%" },
                { icon: "religion-chaos", description: "Chaos corruption: +5", ps: "local province" },
                { icon: "treasury", description: "Recruitment cost: -10%", ps: "Lord's army" },
                { icon: "ability-the-wintertooth-crown", description: "Ability: \"The Wintertooth Crown\"" }
            ] }
        ],
        spell: {
            description: "Item",
            rarity: "legendary",
            cooldown: "120",
            attributes: {
                type: [ 
                    { text: "Augment" },
                    { text: "Instantly affects targets in area" } 
                ],
                duration: "24 seconds",
                target: [
                    { text: "Self" },
                    { text: "Affects allies in range" }
                ],
                effectRange: "40m",
                effects: [
                    { text: "Unbreakable", icon: "unbreakable", color: "green", uptick: "up-green" }
                ]
            }
        }
    },
    {
        ref: "norscanWarhorse",
        name: "Norscan Warhorse",
        description: "The horses of Norsca live for battle, even choosing to graze on the bones of the fallen over grass.",
        icon: "warhorse",
        ranks: [
            { effects: [{ icon: "mount", description: "Mount: Norscan Warhorse" }] }
        ]
    },
    {
        ref: "marauderChariot",
        name: "Marauder Chariot",
        description: "Marauder mobs are awarded even greater mobility when riding their crude chariots of bone and wood, lashed together with the guts and sinew of the vanquished.",
        icon: "chaos-chariot",
        ranks: [
            { effects: [{ icon: "mount", description: "Mount: Marauder Chariot" }] }
        ]
    },
    {
        ref: "warMammoth",
        name: "War Mammoth",
        description: "Tainted and savage they may be, but these behemoths remain willing to bear high-status Marauders into battle, trampling flat everything foolish enough to get in their way.",
        icon: "mammoth",
        ranks: [
            { effects: [{ icon: "mount", description: "Mount: War Mammoth" }] }
        ]
    },
    {
        ref: "eyeOfTheGods",
        name: "Eye of the Gods",
        description: "The slightest glance, the merest glimpse from one of the Dark Gods is sufficient to propel their playthings to ever-greater feats of desolation.",
        icon: "character-damage",
        ranks: [
            { effects: [{ icon: "damage", description: "Weapon strength: +7% (when attacking)" }] }
        ]
    },
    {
        ref: "mutantRegeneration",
        name: "Mutant Regeneration",
        description: "The uncanny ability of quickly regenerating even the most grievous wounds; in due course, almost all will be healed.",
        icon: "character-replenishment",
        ranks: [{ effects: [
            { icon: "replenishment", description: "Casualty replenishment rate: +25% for all Norscan Troll, Norscan Ice Troll & Fimir Warrior units", ps: "Lord's army" },
            { icon: "resistance-missile", description: "Missile resistance: 20% for Norscan Trolls & Norscan Ice Trolls units", ps: "Lord's army" }
        ] }]
    },
    {
        ref: "kingOfTrolls",
        name: "King of Trolls",
        description: "Brooding upon his rocky throne, Throgg has pledged to fight all comers, with all the monsters of Troll Country at his side.",
        icon: "character-military-spending",
        ranks: [{ effects: [
            { icon: "public-order", description: "Public order: +2", ps: "local province" },
            { icon: "morale", description: "Leadership: +12 for Norscan Trolls & Norscan Ice Trolls units", ps: "Lord's army" },
            { icon: "coin", description: "Upkeep: -10% for all Norscan Troll & Norscan Ice Troll & Fimir Warrior units", ps: "Lord's army" }
        ] }]
    },
    {
        ref: "primordialMasters",
        name: "Primordial Masters",
        description: "Although corrupt with change and frozen to the very core of their icy hearts, the Frost-Wyrms of the northern wastes are no less vicious for it.",
        icon: "character-defense",
        ranks: [{ effects: [
            { icon: "defense", description: "Melee defense: +15 for Frost-Wyrm units", ps: "Lord's army" },
            { icon: "charge", description: "Charge bonus: +15 for Frost-Wyrm units", ps: "Lord's army" }
        ] }]
    },
    {
        ref: "monstrousFiends",
        name: "Monstrous Fiends",
        description: "Witlessly stupid, yet bone-crushingly powerful. Do not be deceived.",
        icon: "character-defense",
        ranks: [{ effects: [
            { icon: "morale", description: "Leadership: +10 for Fimir Warrior units", ps: "Lord's army" },
            { icon: "melee", description: "Melee attack: +15 for Norscan Trolls & Norscan Ice Trolls units", ps: "Lord's army" },
            { icon: "defense", description: "Melee defense: +15 for all Fimir Warrior units", ps: "Lord's army" },
            { icon: "defense", description: "Melee defense: +15 for Norscan Trolls & Norscan Ice Trolls units", ps: "Lord's army" }
        ] }]
    },
    {
        ref: "theEternalChallenger",
        name: "The Eternal Challenger",
        description: "Beware drunken boasts made in sight of the Dark Gods, lest they hold you to such claims...",
        icon: "character-damage",
        ranks: [
            { effects: [{ icon: "armor-piercing-character", description: "Armour-piercing weapon damage: +15" }] }
        ]
    },
    {
        ref: "worldWalker",
        name: "World Walkers",
        description: "Cursed to seek the deadliest opponents to best and kill in single combat, Wulfrik must forever walk the world.",
        icon: "character-ambush",
        ranks: [{ effects: [
            { icon: "ambush", description: "Ambush success chance: +15%", ps: "Lord's army" },
            { icon: "underway", description: "Chance of intercepting an army using the Underway, beast-paths or Worldroots: +20%" }
        ] }]
    },
    {
        ref: "juggernautsOfTheSarl",
        name: "Juggernauts of the Sarl",
        description: "Towering mountains of muscle and flesh, these War Mammoths give Wulfrik's tribe the edge over all comers.",
        icon: "character-attack",
        ranks: [{ effects: [
            { icon: "melee", description: "Melee attack: +15 for all Mammoth units", ps: "Lord's army" },
            { icon: "character", description: "Leadership aura size: +10% for War Mammoth (Warshrine) units", ps: "Lord's army" }
        ] }]
    },
    {
        ref: "ferventCreatures",
        name: "Fervent Creatures",
        description: "Skin Wolves in the Wanderer's service enjoy the speed and skill beyond even their preternatural capabilities.",
        icon: "character-charge",
        ranks: [{ effects: [
            { icon: "defense", description: "Melee defense: +15 for all Skin Wolves units", ps: "Lord's army" },
            { icon: "charge", description: "Charge bonus: +15 for all Skin Wolves units", ps: "Lord's army" }
        ] }]
    },
    {
        ref: "voiceOfTheDarkGods",
        name: "Voice of the Dark Gods",
        description: "This Lord speaks with a dread booming voice - a gift from his Dark Masters to ensure obedience.",
        icon: "character",
        ranks: [
            { effects: [{ icon: "character", description: "Leadership aura size: +80%" }] }
        ]
    },
    {
        ref: "auraOfChaos",
        name: "Aura of Chaos",
        description: "The shadow of the Ruinous Powers looms large, protecting those who bear their mark.",
        icon: "character-ward-save",
        ranks: [
            { effects: [{ icon: "resistance-missile", description: "Missile resistance: 10%" }] }
        ]
    },
    {
        ref: "copiousVomit",
        name: "Copious Vomit",
        description: "\"HUUUURGGEHH!!! BLUUUURGGEHH!!! HUUUUUUUUURRRRRGGGGGGGGGGEHH!!!\"",
        icon: "ability-copious-vomit",
        ranks: [
            { effects: [{ icon: "ability-copious-vomit", description: "Ability: \"Copious Vomit\"" }] }
        ],
        spell: {
            description: "Lord ability",
            cooldown: "60",
            uses: 3,
            rarity: "uncommon",
            attributes: {
                type: "Magic Missile",
                target: [
                    { text: "Enemy" },
                    { text: "60m", uptick: "range" }
                ],
                cannotUseIf: "Engaged in melee, Climbing",
                cannotTargetIf: "Flying",
                projectileRange: "60m",
                effects: [
                    { text: "Powerful explosion", uptick: "up-green", color: "green" },
                    { text: "Strong vs. a single unit", uptick: "up-green", color: "green" },
                    { text: "Good against armour", uptick: "up-green", color: "green" }
                ]
            }
         }
    },
    {
        ref: "seafang",
        name: "Seafang",
        description: "There's no outrunning the terrible, flying Longship known as the 'Seafang'; once in its sights, an ogonising, merciless death is your only possible destination.",
        icon: "ability-seafang",
        ranks: [
            { effects: [{ icon: "ability-seafang", description: "Ability: \"Seafang\"" }] }
        ],
        spell: {
            description: "Lord ability",
            cooldown: "90",
            uses: 3,
            rarity: "uncommon",
            attributes: {
                type: "Wind",
                duration: "8 seconds",
                target: [
                    { text: "Ground" },
                    { text: "150m", uptick: "range" }
                ],
                cannotUseIf: "Climbing",
                cannotTargetIf: "Flying, On a wall",
                effects: [
                    { text: "Causes massive", icon: "icon-magic", postText: "magical damage", uptick: "up-green", color: "green" },
                    { text: "Small, forward-moving area of effect", uptick: "up-green", color: "green" },
                    { text: "Strong vs. multiple units", uptick: "up-green", color: "green" }
                ],
                contact: [
                    { icon: "icon-frostbite", postText: "Frostbite! (10 seconds)", color: "red" },
                    { text: "-36%", icon: "movement-character", postText: "Speed", color: "red" }
                ]
            }
         }
    },
    {
        ref: "drinkerOfBlood",
        name: "Drinker of Blood",
        description: "Dining upon the blood of slaughtered enemies may attract the notice, and maybe the favour, of the Hound.",
        icon: "character-attack",
        ranks: [
            { effects: [{ icon: "melee-character", description: "Melee defense: +6"}] },
            { effects: [
                { icon: "armor-piercing-character", description: "Armour-piercing weapon damage: +15"},
                { icon: "melee-character", description: "Melee defense: +12"}
            ] }
        ]
    },
    {
        ref: "chronsWrath",
        name: "Chron's Wrath",
        description: "The Great Hound of War thirsts eternally for blood and slaughter, its rage manifesting itself in the unstoppable martial spirit of its warriors.",
        icon: "character-charge",
        ranks: [
            { effects: [{ icon: "charge-character", description: "Charge bonus: +12"}] },
            { effects: [{ icon: "charge-character", description: "Charge bonus: +30"}] }
        ]
    },
    {
        ref: "furyOfTheHound",
        name: "Fury of the Hound",
        description: "The Hound's unearthly fury is personified by its Champions' thirst for war and hunger for unending blood and violence.",
        icon: "ability-berserk",
        ranks: [
            { effects: [
                { icon: "ability-rage", description: "Replaces: \"Rage\"" },
                { icon: "ability-berserk", description: "Passive ability: \"Berserk\"" }
            ] }
        ],
        spell: {
            name: "Berserk",
            description: "Unit ability",
            cooldown: "30",
            rarity: "rare",
            attributes: {
                type: "Augment",
                duration: "90 seconds",
                disabledIf: "Leadership is broken",
                rechargeIf: "Engaged in melee",
                effects: [
                    { icon: "stage-1", postText: "Stage One (30 seconds)", color: "green" },
                    { text: "+22%", icon: "resistance-physical", postText: "Physical Resistance", color: "green" },
                    { icon: "stage-2", postText: "Stage Two (30 seconds)", color: "green" },
                    { text: "+13", icon: "melee-character", postText: "Melee Attack", color: "green" },
                    { text: "+22%", icon: "resistance-physical", postText: "Physical Resistance", color: "green" },
                    { icon: "stage-3", postText: "Stage Three (30 seconds)", color: "green" },
                    { text: "+13", icon: "melee-character", postText: "Melee Attack", color: "green" },
                    { text: "+22%", icon: "resistance-physical", postText: "Physical Resistance", color: "green" },
                    { text: "Rampage!", uptick: "down-red", color: "red" }
                ]
            }
         }
    },
    {
        ref: "noxiousVessel",
        name: "Noxious Vessel",
        description: "Thusly, the virulent maladies of the Crow are borne forth to repulse and infect its mortal foes; there lieth victory eternal.",
        icon: "character-damage",
        ranks: [
            { effects: [
                { icon: "resistance-missile", description: "Missile resistance: 8%"}
            ] },
            { effects: [
                { icon: "resistance-missile", description: "Missile resistance: 15%"},
                { icon: "damage", description: "Weapon strength: +15%"}
            ] }
        ]
    },
    {
        ref: "putrefyingOoze",
        name: "Putrefying Ooze",
        description: "This fetid, disgusting pus is so repulsive to the untainted that it mimics traditional armour of far greater substance.",
        icon: "character-armor",
        ranks: [
            { effects: [{ icon: "armor-character", description: "Armour: +7"}] },
            { effects: [{ icon: "armor-character", description: "Armour: +15"}] }
        ]
    },
    {
        ref: "plagueOfTheCrow",
        name: "Plague of the Crow",
        description: "Unstable and miscreated, the Crow's strength spreads and grows like the most successful of diseases, consuming all before consuming itself and beginning again.",
        icon: "regeneration",
        ranks: [
            { effects: [
                { icon: "poison", description: "Enables poison attacks" },
                { icon: "ability-regeneration", description: "Passive ability: \"Regeneration\"" }
            ] }
        ],
        spell: {
            description: "Unit ability",
            rarity: "common",
            attributes: {
                type: "Regeneration",
                duration: "Constant",
                target: "Self",
                effects: [
                    { text: "Restores", icon: "hp", postText: "4 Hit Points per second", uptick: "up-green", color: "green" },
                    { text: "+25% Weakness to", postText: "Fire Damage", icon: "icon-fire", color: "red" }
                ]
            }
         }
    },
    {
        ref: "indulgerInTheExotic",
        name: "Indulger in the Exotic",
        description: "The Serpent's temptations come in many forms, all of them designed to appeal to the twisted desires buried deep within us all.",
        icon: "character-damage",
        ranks: [
            { effects: [
                { icon: "health-character", description: "Hit points: +7%"}
            ] },
            { effects: [
                { icon: "health-character", description: "Hit points: +15%"},
                { icon: "vigour", description: "Vigour loss reduction: -15%"}
            ] }
        ]
    },
    {
        ref: "intoxicatingVisions",
        name: "Intoxicating Visions",
        description: "Seductive images of sensual luxuries may tempt the enemy from their chosen paths onto roads much, much less travelled and from which there can be no return.",
        icon: "character-morale",
        ranks: [
            { effects: [{ icon: "morale-character", description: "Leadership: +6"}] },
            { effects: [{ icon: "morale-character", description: "Leadership: +12"}] }
        ]
    },
    {
        ref: "seductionOfTheSerpent",
        name: "Seduction of the Serpent",
        description: "Although the youngest of the Dark Gods, the serpent is no less potent and can bind mortals to eternal service with alluring visions or tantalising temptations.",
        icon: "ability-seduction-of-the-serpent",
        ranks: [
            { effects: [
                { icon: "attribute-psychology", description: "Attribute: Immune to Psychology" },
                { icon: "ability-seduction-of-the-serpent", description: "Passive ability: \"Seduction of the Serpent\"" }
            ] }
        ],
        spell: {
            description: "Lord ability",
            cooldown: "90",
            rarity: "uncommon",
            attributes: {
                type: "Augment",
                duration: "17 seconds",
                target: "Self",
                effects: [
                    { text: "+24", icon: "defense-character", postText: "Melee Defense", color: "green" },
                    { text: "+16", icon: "morale-character", postText: "Leadership", color: "green" }
                ],
                imbued: [
                    { icon: "morale-mallus", postText: "Discouraged! (10 seconds)", color: "red" },
                    { text: "-16", icon: "morale-character", postText: "Leadership", color: "red" }
                ]
            }
         }
    },
    {
        ref: "spiritWanderer",
        name: "Spirit Wanderer",
        description: "More fool they who go to war and quest with minds unfocused, for they risk the Eagle's desolate, underhand deceptions.",
        icon: "character-speed",
        ranks: [
            { effects: [
                { icon: "movement-character", description: "Speed: +3%"}
            ] },
            { effects: [
                { icon: "movement-character", description: "Speed: +15%"},
                { icon: "resistance-magic", description: "Magic resistance: 15%"}
            ] }
        ]
    },
    {
        ref: "darkDeceiver",
        name: "Dark Deceiver",
        description: "The Eagle weaves a complex web of duplicity around its servants, further bracing their combat abilities in subtle, unexpected ways.",
        icon: "character-defense",
        ranks: [
            { effects: [{ icon: "defense-character", description: "Melee defense: +6"}] },
            { effects: [{ icon: "defense-character", description: "Melee defense: +12"}] }
        ]
    },
    {
        ref: "sorceryOfTheEagle",
        name: "Sorcery of the Eagle",
        description: "Although the youngest of the Dark Gods, the serpent is no less potent and can bind mortals to eternal service with alluring visions or tantalising temptations.",
        icon: "spell-fireball",
        ranks: [
            { effects: [
                { icon: "magical-attacks", description: "Enables magical attacks" },
                { icon: "spell-fireball", description: "Bound spell: \"Fireball\"" }
            ] }
        ],
        spell: {
            name: "Fireball",
            description: "Bound spell",
            rarity: "common",
            uses: 4,
            cooldown: "60",
            attributes: {
                type: "Magic Missile",
                target: [
                    { text: "Enemy" },
                    { text: "300m", uptick: "range" }
                ],
                cannotUseIf: "Manning equipment, Climbing",
                projectileRange: "300m",
                effects: [
                    { text: "Causes moderate magical & fire damage", uptick: "up-green", color: "green" },
                    { text: "Powerful explosion", uptick: "up-green", color: "green" },
                    { text: "Strong vs. multiple combatants", uptick: "up-green", color: "green" },
                    { text: "Effective at long range", uptick: "up-green", color: "green" },
                    { text: "Weak against armor", uptick: "down-red", color: "red" }
                ]
            }
        }
    
    },
    {
        ref: "deadlyBlade",
        name: "Deadly Blade",
        description: "A deadly blade is especially lethal when in the hands of this master death-maker, killer and slaughterer!",
        icon: "character-attack",
        ranks: [
            { effects: [{ icon: "melee-character", description: "Melee defense: +6"}] },
            { effects: [{ icon: "melee-character", description: "Melee defense: +12"}] }
        ]
    },
    {
        ref: "quicksilver",
        name: "Quicksilver",
        description: "Blink and you die.",
        icon: "character-speed",
        ranks: [
            { effects: [{ icon: "movement-character", description: "Speed: +7%"}] },
            { effects: [{ icon: "movement-character", description: "Speed: +15%"}] }
        ]
    },
    {
        ref: "hunterOfChampions",
        name: "Hunter of Champions",
        description: "Cursed to wander the length and breadth of the world, his never-ending quest to challenge and best the most gifted warriors.",
        icon: "ability-hunter-of-champions",
        ranks: [
            { effects: [{ icon: "ability-hunter-of-champions", description: "Ability: \"Hunter of Champions\"" }] }
        ],
        spell: {
            description: "Lord ability",
            cooldown: "90",
            rarity: "uncommon",
            attributes: {
                type: "Hex",
                duration: "24 seconds",
                target: [
                    { text: "Enemy" },
                    { text: "100m", uptick: "range" }
                ],
                targetIf: "Unit is a Lord or Hero",
                effects: [
                    { text: "-48%", icon: "movement-character", postText: "Speed", color: "red" },
                    { text: "-30", icon: "armor-character", postText: "Armour", color: "red" },
                    { text: "-40", icon: "defense-character", postText: "Melee Defense", color: "red" }
                ]
            }
         }
    },
    {
        ref: "dominatingPresence",
        name: "Dominating Presence",
        description: "A Chaos Lord dominates - lesser beings cringe from a being that is so intently under scrutiny from the Dark Gods.",
        icon: "battle-morale",
        ranks: [
            { effects: [{ icon: "morale", description: "Character's aura leadership effect: +5" }] }
        ]
    },
    {
        ref: "fearsomeWarriors",
        name: "Fearsome Warriors",
        description: "Those who do not bend the knee to the Gods of the North soon find all they hold dear obliterated before them.",
        icon: "battle-attack",
        ranks: [
            { effects: [
                { icon: "melee", description: "Melee attack: +4 for Marauders, Marauder Spearmen, Marauder Berserkers, and Marauder Champions units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "weapon-damage", description: "Weapon strength: +6% for Marauders, Marauder Spearmen, Marauder Berserkers, and Marauder Champions units", ps: "Lord's army" },
                { icon: "melee", description: "Melee attack: +6 for Marauders, Marauder Spearmen, Marauder Berserkers, and Marauder Champions units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "weapon-damage", description: "Weapon strength: +12% for Marauders, Marauder Spearmen, Marauder Berserkers, and Marauder Champions units", ps: "Lord's army" },
                { icon: "melee", description: "Melee attack: +8 for Marauders, Marauder Spearmen, Marauder Berserkers, and Marauder Champions units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        ref: "beastSlayers",
        name: "Beast Slayers",
        description: "Delighting in death and suffering, these savage warriors follow their ignoble Lord wherever he goes.",
        icon: "battle-ranged-damage",
        ranks: [
            { effects: [
                { icon: "ranged-damage", description: "Missile strength: +6% for Marauder Hunters, Marauder Horsemen, and Marauder Horsemasters units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "ammo", description: "Ammunition: +10% for Marauder Hunters, Marauder Horsemen, and Marauder Horsemasters units", ps: "Lord's army" },
                { icon: "ranged-damage", description: "Missile strength: +9% for Marauder Hunters, Marauder Horsemen, and Marauder Horsemasters units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "ammo", description: "Ammunition: +20% for Marauder Hunters, Marauder Horsemen, and Marauder Horsemasters units", ps: "Lord's army" },
                { icon: "ranged-damage", description: "Missile strength: +12% for Marauder Hunters, Marauder Horsemen, and Marauder Horsemasters units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        ref: "unnaturalSelection",
        name: "Unnatural Selection",
        description: "Only the fiercest creatures can survive the frozen north; the strongest are rounded up for war and starved into viciousness, ready for the next battle.",
        icon: "battle-speed",
        ranks: [
            { effects: [
                { icon: "movement", description: "Speed: +6% for Norscan Warhounds, Norscan Ice Wolves, and Marauder Chariots units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "movement", description: "Speed: +9% for Norscan Warhounds, Norscan Ice Wolves, and Marauder Chariots units", ps: "Lord's army" },
                { icon: "charge", description: "Charge bonus: +6 for Norscan Warhounds, Norscan Ice Wolves, and Marauder Chariots units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "movement", description: "Speed: +12% for Norscan Warhounds, Norscan Ice Wolves, and Marauder Chariots units", ps: "Lord's army" },
                { icon: "charge", description: "Charge bonus: +12 for Norscan Warhounds, Norscan Ice Wolves, and Marauder Chariots units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        ref: "frostbitten",
        name: "Frostbitten",
        description: "The intense cold cuts into the flesh, burning the foe's extremities until they drop off altogether!",
        icon: "battle-attack",
        ranks: [
            { effects: [
                { icon: "melee", description: "Melee attack: +4 for Skin Wolves, Norscan Trolls, and Norscan Ice Troll units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "weapon-damage", description: "Weapon strength: +6% for Skin Wolves, Norscan Trolls, and Norscan Ice Troll units", ps: "Lord's army" },
                { icon: "melee", description: "Melee attack: +6 for Skin Wolves, Norscan Trolls, and Norscan Ice Troll units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "weapon-damage", description: "Weapon strength: +12% for Skin Wolves, Norscan Trolls, and Norscan Ice Troll units", ps: "Lord's army" },
                { icon: "melee", description: "Melee attack: +8 for Skin Wolves, Norscan Trolls, and Norscan Ice Troll units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        ref: "hailOfTeeth",
        name: "Hail of Teeth",
        description: "The razor-sharp hail of the north is not the only danger in the Norscan sky - its airborne beasts are just as deadly and far less predictable.",
        icon: "battle-defense",
        ranks: [
            { effects: [
                { icon: "melee", description: "Melee attack: +4 for Manticore and Frost Wyrm units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "melee", description: "Melee attack: +6 for Manticore and Frost Wyrm units", ps: "Lord's army" },
                { icon: "armor", description: "Armour: +6 for Manticore and Frost Wyrm units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "melee", description: "Melee attack: +8 for Manticore and Frost Wyrm units", ps: "Lord's army" },
                { icon: "armor", description: "Armour: +12 for Manticore and Frost Wyrm units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        ref: "monstersOfTheNorth",
        name: "Monsters of the North",
        description: "Giant, deadly, and able to take orders, this Lord's monstrosities are especially terrifying and lethal.",
        icon: "battle-attack",
        ranks: [
            { effects: [
                { icon: "melee", description: "Melee attack: +4 for Fimir Warriors, Norscan Giant, Feral Mammoth, and War Mammoth units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "melee", description: "Melee attack: +6 for Fimir Warriors, Norscan Giant, Feral Mammoth, and War Mammoth units", ps: "Lord's army" },
                { icon: "defense", description: "Melee defense: +4 for Fimir Warriors, Norscan Giant, Feral Mammoth, and War Mammoth units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "melee", description: "Melee attack: +8 for Fimir Warriors, Norscan Giant, Feral Mammoth, and War Mammoth units", ps: "Lord's army" },
                { icon: "defense", description: "Melee defense: +8 for Fimir Warriors, Norscan Giant, Feral Mammoth, and War Mammoth units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        ref: "championsOfTheNorth",
        name: "Champions of the North",
        description: "In spite of their savage nature, they are possessed of a savage code of conduct and form a loose brotherhood of those considered worthy.",
        icon: "battle-armor",
        ranks: [
            { effects: [
                { icon: "resistance-physical", description: "Physical resistance: 15% for Marauders, Marauder Spearmen, Marauder Berserkers, and Marauder Champions units", rank: 7, ps: "Lord's army" },
                { icon: "armor", description: "Armour: +12 for Marauders, Marauder Spearmen, Marauder Berserkers, and Marauder Champions units", rank: 7, ps: "Lord's army" },
                { icon: "defense", description: "Melee defense: +5 for Marauders, Marauder Spearmen, Marauder Berserkers, and Marauder Champions units", rank: 7, ps: "Lord's army" },
            ] }
        ]
    },
    {
        ref: "hardenedHunters",
        name: "Hardened Hunters",
        description: "No beast too large, no adversary too great; no quarry - mortal or otherwise - can evade them.",
        icon: "battle-ranged-damage",
        ranks: [
            { effects: [
                { icon: "resistance-missile", description: "Missile resistance: 15% for Marauder Hunters, Marauder Horsemen, and Marauder Horsemasters units", psIcon: "goldChevron", rank: 7, ps: "Lord's army" },
                { icon: "ranged-damage", description: "Missile damage: +12% for Marauder Hunters, Marauder Horsemen, and Marauder Horsemasters units", rank: 7, ps: "Lord's army" },
                { icon: "reload-time", description: "Reload time reduction: +10% for Marauder Hunters, Marauder Horsemen, and Marauder Horsemasters units", rank: 7, ps: "Lord's army" },
            ] }
        ]
    },
    {
        ref: "icyWrath",
        name: "Icy Wrath",
        description: "The intense cold and near-constant darkness of the far north make for a certain kind of killer.",
        icon: "battle-damage",
        ranks: [
            { effects: [
                { icon: "weapon-damage", description: "Weapon strength: +12% for Norscan Warhounds, Norscan Ice Wolves, Manticore, Skin Wolves, and Marauder Chariots units", rank: 7, ps: "Lord's army" },
                { icon: "melee", description: "Melee attack: +5 for Norscan Warhounds, Norscan Ice Wolves, Manticore, Skin Wolves, and Marauder Chariots units", rank: 7, ps: "Lord's army" },
                { icon: "charge", description: "Charge bonus: +12 for Norscan Warhounds, Norscan Ice Wolves, Manticore, Skin Wolves, and Marauder Chariots units", rank: 7, ps: "Lord's army" }
            ] }
        ]
    },
    {
        ref: "hulksOfDeath",
        name: "Hulks of Death",
        description: "The freezing darkness and stunning violence of the far north bring no small solace to those who have lost everything and wish to forget.",
        icon: "battle-ward-save",
        ranks: [
            { effects: [
                { icon: "armor", description: "Armour: +12 for Norscan Trolls, Norscan Ice Trolls, Frost Wyrm, Norscan Giant, Fimir, Feral Mammoth, and War Mammoth units", rank: 7, ps: "Lord's army" },
                { icon: "resistance-ward-save", description: "Ward save: 8% for Norscan Trolls, Norscan Ice Trolls, Frost Wyrm, Norscan Giant, Fimir, Feral Mammoth, and War Mammoth units", rank: 7, ps: "Lord's army" },
                { icon: "weapon-damage", description: "Weapon strength: +12% for Norscan Trolls, Norscan Ice Trolls, Frost Wyrm, Norscan Giant, Fimir, Feral Mammoth, and War Mammoth units", rank: 7, ps: "Lord's army" }
            ] }
        ]
    },
    {
        ref: "fightOrDie",
        name: "Fight or Die!",
        description: "There is no other choice. There never was.",
        icon: "ability-fight-or-die",
        ranks: [
            { effects: [
                { icon: "ability-rally", description: "Replaces: \"Rally!\"" },
                { icon: "ability-fight-or-die", description: "Ability: \"Fight or Die!\"" }
            ] }
        ],
        spell: {
            description: "Lord ability",
            rarity: "uncommon",
            cooldown: "90",
            attributes: {
                type: [
                    { text: "Augment (Area)" },
                    { text: "Instantly affects targets in area" }
                ],
                duration: "18 seconds",
                target: [
                    { text: "Self" },
                    { text: "Affects allies in range" }
                ],
                effectRange: "40m",
                effects: [
                    { text: "+24", icon: "melee-character", postText: "Melee Attack", color: "green" },
                    { text: "+16", icon: "morale-character", postText: "Leadership", color: "green" }
                ]
            }
        }
    },
    {
        ref: "despoilers",
        name: "Despoilers",
        description: "To despoil, to corrupt and ruin, to break the mortals and take their gods from them - this is what Chaos wants.",
        icon: "campaign-military-spending",
        ranks: [
            { effects: [{ icon: "income", description: "Income from sacking settlements: +3%" }] },
            { effects: [{ icon: "income", description: "Income from sacking settlements: +8%" }] },
            { effects: [{ icon: "income", description: "Income from sacking settlements: +15%" }] }            

        ]
    },
    {
        ref: "norseResilience",
        name: "Norse Resilience",
        description: "The bleak, brutal landscape of the far north breeds bloody, warlike tribes in thrall to Chaos' delicious, twisted power.",
        icon: "campaign-replenishment",
        ranks: [{ effects: [{ icon: "replenishment", description: "Casualty replenishment rate: +5%" }] }]
    },
    {
        ref: "swellingOfDoom",
        name: "Swelling of Doom",
        description: "Maybe it is the influence of the Dark Gods that has caused the populace to burgeon and proliferate beyond their natural bounds?",
        icon: "campaign-growth",
        ranks: [
            { effects: [{ icon: "growth", description: "Growth: +8", ps: "local province" }] },
            { effects: [{ icon: "growth", description: "Growth: +20", ps: "local province" }] },
            { effects: [{ icon: "growth", description: "Growth: +36", ps: "local province" }] }            

        ]
    },
    {
        ref: "devourersOfFlesh",
        name: "Devourers of Flesh",
        description: "Once Wulfrik has made his infernal offerings, the mangled gore that ermains is devoured by his ravenous, insatiable Werekin.",
        icon: "campaign-agent",
        ranks: [{ effects: [
            { icon: "werekin", description: "Hero recruit rank: +5 for Skin Wolf Werekin", ps: "local province" },
            { icon: "werekin", description: "Hero capacity: +1 for Skin Wolf Werekin" }
        ] }]
    },
    {
        ref: "mastersOfTheFen",
        name: "Masters of the Fen",
        description: "The Troll King's horde control the wind-whipped hinterlands of Troll Country, and may yet extend their despoiling influence much further afield.",
        icon: "campaign-agent",
        ranks: [{ effects: [
            { icon: "fimir", description: "Hero recruit rank: +5 for Fimir Balefiends", ps: "local province" },
            { icon: "fimir", description: "Hero capacity: +1 for Fimir Balefiends" }
        ] }]
    },
    {
        ref: "savageSkills",
        name: "Savage Skills",
        description: "There's something about the harsh, unforgiving nature of northern life that makes its occupants fight harder and longer than many of their soft, southern equivalents.",
        icon: "campaign-experience",
        ranks: [
            { effects: [{ icon: "experience", description: "Recruit rank: +1 for all units" }] },
            { effects: [{ icon: "experience", description: "Recruit rank: +2 for all units" }] },
            { effects: [{ icon: "experience", description: "Recruit rank: +3 for all units" }] }
        ]
    },
    {
        ref: "unnaturalHealing",
        name: "Unnatural Healing",
        description: "Something strange - something no scholar really wishes to discover - governs who dies and who lives in the warlike northern wastes.",
        icon: "campaign-replenishment",
        ranks: [{ effects: [{ icon: "replenishment", description: "Casualty replenishment rate: +10%", ps: "Lord's army" }] }]
    },
    {
        ref: "fuelledByWar",
        name: "Fuelled by War",
        description: "War and glory before the Gods are the determining elements in every decision made; there is nothing else worth living - or dying - for.",
        icon: "campaign-military-spending",
        ranks: [
            { effects: [{ icon: "coin", description: "Upkeep: -3% for all units", ps: "Lord's army" }] },
            { effects: [{ icon: "coin", description: "Upkeep: -8% for all units", ps: "Lord's army" }] },
            { effects: [{ icon: "coin", description: "Upkeep: -15% for all units", ps: "Lord's army" }] }
        ]
    },
    {
        ref: "spawnOfChaos",
        name: "Spawn of Chaos",
        description: "The tendrils (and tentacles!) of the Northern Gods reach down from the poles and far across the world, twisting and corrupting all they touch.",
        icon: "campaign-experience",
        ranks: [
            { effects: [{ icon: "experience", description: "Unit experience gain per turn: +150", ps: "Lord's army" }] }
        ]
    },
    // already in db

    // already in db

    // already in db

    // already in db

    // already in db

    // already in db

    // already in db

    // already in db

    // already in db

    // already in db

    // already in db

    // already in db
    {
        ref: "devastatingCharge",
        name: "Devastating Charge",
        description: "Some creatures charge home with such fury that the very ground shakes beneath their feet.",
        icon: "character-charge",
        ranks: [
            { effects: [{ icon: "charge-character", description: "Charge bonus: +15" }] },
            { effects: [{ icon: "charge-character", description: "Charge bonus: +30" }] }
        ]
    },
    {
        ref: "serveOrDie",
        name: "Serve Or Die",
        description: "You will serve me, wretch, or you will die, there is no other option.",
        icon: "campaign-military-spending",
        ranks: [
            { effects: [{ icon: "treasury", description: "Recruitment cost: -3%", ps: "Lord's army" }] },
            { effects: [{ icon: "treasury", description: "Recruitment cost: -8%", ps: "Lord's army" }] },
            { effects: [{ icon: "treasury", description: "Recruitment cost: -15%", ps: "Lord's army" }] }            
        ]
    },
    {
        ref: "standYourGround",
        name: "Stand Your Ground!",
        description: "On the battlefield, the craven's path is an easy one, but for those champions that choose to stand? Fortune will surely favour them and their troops.",
        icon: "stand-your-ground",
        ranks: [
            { effects: [
                { icon: "ability-rally", description: "Replaces: \"Rally!\"" },
                { icon: "stand-your-ground", description: "Ability: \"Stand Your Ground!\"" }
            ] }
        ],
        spell: {
            description: "Character ability",
            rarity: "uncommon",
            cooldown: "90",
            attributes: {
                type: [
                    { text: "Augment (Area)" },
                    { text: "Instantly affects targets in area" }
                ],
                duration: "18 seconds",
                target: [
                    { text: "Self" },
                    { text: "Affects allies in range" }
                ],
                effectRange: "40m",
                effects: [
                    { text: "+24", icon: "defense-character", postText: "Melee Defense", color: "green" },
                    { text: "+16", icon: "morale-character", postText: "Leadership", color: "green" }
                ]
            }
        }
    },
    {
        ref: "foeSeeker",
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
        ref: "fervour",
        name: "Fervour",
        description: "This one fights with a fervour to be both admired and despised.",
        icon: "character-damage",
        ranks: [
            { effects: [{ icon: "damage", description: "Weapon strength: +10%" }] },
            { effects: [{ icon: "damage", description: "Weapon strength: +20%" }] }
        ]
    },
    {
        ref: "hardToHit",
        name: "Hard to Hit",
        description: "Hand-to-hand combat is a lethal match of cut and thrust. However, it's not all about offensive strikes; parries and other defensive moves can also win the day.",
        icon: "character-defense",
        ranks: [
            { effects: [{ icon: "defense-character", description: "Melee defense: +6"}] },
            { effects: [{ icon: "defense-character", description: "Melee defense: +12"}] }
        ]
    },
    {
        ref: "tenacity",
        name: "Tenacity",
        description: "This one will not go down easily - it will be necessary to break both the will and the body first.",
        icon: "character-health",
        ranks: [
            { effects: [{ icon: "health-character", description: "Hit points: +7%" }] },
            { effects: [{ icon: "health-character", description: "Hit points: +15%" }] }
        ]
    },
    {
        ref: "conviction",
        name: "Conviction",
        description: "Such is this one's conviction that others have no choice but to believe.",
        icon: "character-morale",
        ranks: [
            { effects: [{ icon: "charge-character", description: "Leadership: +4" }] },
            { effects: [{ icon: "charge-character", description: "Leadership: +9" }] }
        ]
    },
    {
        ref: "wildEyed",
        name: "Wild-Eyed",
        description: "Don't look into their eyes, there is only death there!",
        icon: "character-attack",
        ranks: [
            { effects: [{ icon: "melee-character", description: "Melee attack: +4" }] },
            { effects: [{ icon: "melee-character", description: "Melee attack: +9" }] }
        ]
    },
    {
        ref: "earthing",
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
        ref: "magicalReserves",
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
        ref: "arcaneConduit",
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
        ref: "evasion",
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
        ref: "immortality",
        name: "Immortality",
        description: "Who wants to live forever? As it turns out, most beings wouldn't say no...",
        icon: "character-wound-time",
        ranks: [{ effects: [{ icon: "wound-time", description: "When normally killed in battle, this Lord will be wounded instead" }] }]
    },
    {
        ref: "rally",
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
        ref: "standOrDie",
        name: "Stand or Die!",
        description: "Hatred is an energy source just like any other, to be harnessed and directed at will.",
        icon: "ability-stand-or-die",
        ranks: [
            { effects: [
                { icon: "ability-rally", description: "Replaces: \"Rally!\"" },
                { icon: "ability-stand-or-die", description: "Ability: \"Stand or Die!\"" }
            ] }
        ],
        spell: {
            description: "Character ability",
            rarity: "uncommon",
            cooldown: "90",
            attributes: {
                type: [
                    { text: "Augment (Area)" },
                    { text: "Instantly affects targets in area" }
                ],
                duration: "18 seconds",
                target: [
                    { text: "Self" },
                    { text: "Affects allies in range" }
                ],
                effectRange: "40m",
                effects: [
                    { text: "+24", icon: "defense-character", postText: "Melee Defense", color: "green" },
                    { text: "+16", icon: "morale-character", postText: "Leadership", color: "green" }
                ]
            }
        }
    },
    {
        ref: "inspiringPresence",
        name: "Inspiring Presence",
        description: "There are Lords that radiate power, confidence and fear, inspiring their followers to great or terrible acts.",
        icon: "battle-morale",
        ranks: [
            { effects: [{ icon: "morale", description: "Character's aura leadership effect: +5" }] }
        ]
    },
    {
        ref: "indomitable",
        name: "Indomitable",
        description: "The iron will and indomitable presence of this leader ensures their followers remain steadfast when facing peril.",
        icon: "character-morale",
        ranks: [
            { effects: [{ icon: "morale-character", description: "Leadership: +6" }] },
            { effects: [{ icon: "morale-character", description: "Leadership: +12" }] }
        ]
    },
    {
        ref: "bladeMaster",
        name: "Blade Master",
        description: "This warrior is one with their blade; it is an extension of their will, making them a worthy foe in combat.",
        icon: "character-attack",
        ranks: [
            { effects: [{ icon: "melee-character", description: "Melee attack: +6" }] },
            { effects: [{ icon: "melee-character", description: "Melee attack: +12" }] }
        ]
    },
    {
        ref: "thickSkinned",
        name: "Thick-Skinned",
        description: "Creatures with tough hides or some kind of natural armour are tough nuts to crack - even a powerful attack may fall foul of their thick-skin.",
        icon: "character-armor",
        ranks: [
            { effects: [
                { icon: "armor-character", description: "Armour: +7" }
            ] },
            { effects: [
                { icon: "armor-character", description: "Armour: +15" }
            ] }
        ]
    },
    {
        ref: "scarredVeteran",
        name: "Scarred Veteran",
        description: "The scars on this storied warrior reveal a veteran of many battles, a being not easy to kill and one worthy of respect and fear.",
        icon: "character-health",
        ranks: [
            { effects: [
                { icon: "health-character", description: "Hit points: +7%" }
            ] },
            { effects: [
                { icon: "health-character", description: "Hit points: +15%" }
            ] }
        ]
    },
    {
        ref: "bladeShield",
        name: "Blade Shield",
        description: "A blade that sings in defence will not let its wielder be penetrated.",
        icon: "character-defense",
        ranks: [
            { effects: [{ icon: "defense-character", description: "Melee defense: +6"}] },
            { effects: [{ icon: "defense-character", description: "Melee defense: +12"}] }
        ]
    },
    {
        ref: "piercingShots",
        name: "Piercing Shots",
        description: "The forest teaches a warrior not only when to fire but where, which makes a bigger difference.",
        icon: "character-ranged-damage",
        ranks: [
            { effects: [{ icon: "ranged-damage-character", description: "Missile damage: +7%" }] },
            { effects: [{ icon: "ranged-damage-character", description: "Missile damage: +15%" }] }
        ]
    },
    {
        ref: "woundMaker",
        name: "Wound-Maker",
        description: "Such is their power and ferocity, a wound-maker will ravage the foe, cutting and pulverising until there is only one exit - death.",
        icon: "character-damage",
        ranks: [
            { effects: [{ icon: "damage", description: "Weapon strength: +10%" }] },
            { effects: [{ icon: "damage", description: "Weapon strength: +20%" }] }
        ]
    },
    {
        ref: "expeditiousEndeavour",
        name: "Expeditious Endeavour",
        description: "What the enemy cannot see, it cannot hit. What the enemy cannot see, it cannot survive.",
        icon: "character-speed",
        ranks: [
            { effects: [{ icon: "movement-character", description: "Speed: +7%" }] },
            { effects: [{ icon: "movement-character", description: "Speed: +15%" }] }
        ]
    },
    {
        ref: "deadeye",
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
        ref: "slippery",
        name: "Slippery",
        description: "Those who are \"slippery\" cannot be cornered or pinned - they simply \"slip\" away...",
        icon: "ability-slippery",
        ranks: [
            { effects: [{ icon: "ability-slippery", description: "Ability: \"Slippery\"" }] }
        ],
        spell: {
            description: "Hero ability",
            cooldown: "60",
            rarity: "common",
            attributes: {
                type: "Augment",
                duration: "25 seconds",
                target: "Self",
                effects: [
                    { text: "+24%", icon: "movement-character", postText: "Speed", color: "green" },
                    { text: "+24%", icon: "defense-character", postText: "Melee Defense", color: "green" }
                ]
            }
         }
    },
    {
        ref: "deadlyOnslaught",
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
        ref: "routeMarcher",
        name: "Route Marcher",
        description: "Those who know the land and its secrets will travel faster and further than the foes who don't",
        icon: "campaign-movement",
        ranks: [
            { effects: [{ icon: "campaign-movement", description: "Campaign movement range: +10%" }] }
        ]
    },
    {
        ref: "looter",
        name: "Looter",
        description: "Those that excel as looters make sure that every coin or gold tooth is found and added to the plunder. Woe betide the warrior that misses even a single copper token!",
        icon: "campaign-military-spending",
        ranks: [
            { effects: [{ icon: "income", description: "Income from looting settlements: -3%" }] },
           {effects: [{ icon: "income", description: "Income from looting settlements: -8%" }] },
           { ffects: [{ icon: "income", description: "Income from looting settlements: -15%" }] }            
        ]
    },
    {
        ref: "ancientCunning",
        name: "Ancient Cunning",
        description: "Such long-lived creatures develop a level of guile that mortals cannot match.",
        icon: "campaign-ambush",
        ranks: [
            { effects: [
                { icon: "ambush", description: "Ambush success chance: +6%", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "ambush", description: "Ambush success chance: +16%", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "ambush", description: "Ambush success chance: +30%", ps: "Lord's army" }
            ] }            
        ]
    },
    {
        ref: "bondedService",
        name: "Bonded Service",
        description: "The Lords rule, the peasants toil. Nothing has changed in over a thousand years.",
        icon: "campaign-military-spending",
        ranks: [
            { effects: [{ icon: "treasury", description: "Recruitment cost: -3%", ps: "Lord's army" }] },
            { effects: [{ icon: "treasury", description: "Recruitment cost: -8%", ps: "Lord's army" }] },
            { effects: [{ icon: "treasury", description: "Recruitment cost: -15%", ps: "Lord's army" }] }            
        ]
    },
    {
        ref: "draftmaster",
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
        ref: "lightningStrike",
        name: "Lightning Strike",
        description: "The time to strike is now!",
        icon: "campaign-subterfuge",
        ranks: [
            { effects: [{ icon: "subterfuge", description: "Enables lightning strike battles when reinforcements are present" }] }
        ]
    },
    {
        ref: "quartermaster",
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
        ref: "wary",
        name: "Wary",
        description: "This warrior has been ambushed previously and got themselves and many of their compatriots away safely. Such things make one naturally suspicious.",
        icon: "campaign-ambush",
        ranks: [
            { effects: [
                { icon: "agent", description: "Enemy Hero action success chance: -3%" },
                { icon: "ambush", description: "Ambush defense chance: +8%", ps: "Lord's army" },
            ] },
            { effects: [
                { icon: "agent", description: "Enemy Hero action success chance: -8%" },
                { icon: "ambush", description: "Ambush defense chance: +16%", ps: "Lord's army" },
            ] },
            { effects: [
                { icon: "agent", description: "Enemy Hero action success chance: -15%" },
                { icon: "ambush", description: "Ambush defense chance: +30%", ps: "Lord's army" },
            ] }
        ]
    },
    {
        ref: "renownedFeared",
        name: "Renowned & Feared",
        description: "This Lord's many deeds - both on and off the battlefield - have brought them renown among their allies and made them feared by their enemies.",
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
        ref: "wyssansWildform",
        name: "Wyssan's Wildform",
        description: "The spellcaster unleashes the best within, using its fury to transform allies into bestial forms.",
        icon: "spell-wyssans-wildform",
        ranks: [
            { effects: [
                { icon: "spell-wyssans-wildform", description: "Overcast spell: \"Wyssan's Wildform Upgraded\"" },
                { icon: "spell-wyssans-wildform", description: "Cooldown: -30% to \"Wyssan's Wildform\"" }
            ] },
            { effects: [
                { icon: "spell-wyssans-wildform", description: "Overcast spell: \"Wyssan's Wildform Upgraded\"" },
                { icon: "spell-wyssans-wildform", description: "Cooldown: -50% to \"Wyssan's Wildform\"" },
                { icon: "spell-wyssans-wildform", description: "Winds of Magic cost: -1 for \"Wyssan's Wildform\"" },
                { icon: "spell-wyssans-wildform", description: "Winds of Magic cost: -1 for \"Wyssan's Wildform Upgraded\"" },
                { icon: "spell-wyssans-wildform", description: "Miscast base chance: -15% for \"Wyssan's Wildform Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "common",
            cost: [8, 7],
            cooldown: "28",
            attributes: {
                type: [
                    { text: "Augment"},
                    { text: "Instantly affects targets in area"}
                ],
                target: [
                    { text: "Self, Ground, Ally" },
                    { text: "Affects allies in range" },
                    { text: "300m", uptick: "range" }
                ],
                effectRange: "40m",
                miscastChance:  {"0": "50", "1": "35"},
                effects: [
                    { text: "Added effect area", uptick: "up-blue", color: "blue" },
                    { text: "+30", icon: "armor-character", postText: "Armor", uptick: "up-green", color: "green" },
                    { text: "+30%", icon: "icon-damage-base", postText: "Base Weapon Damage", uptick: "up-green", color: "green" }
                ]
            }
        }
    },
    {
        ref: "theAmberSpear",
        name: "The Amber Spear",
        description: "Sounding a gnarled horn, the caster summons a glowing amber spear and hurls it at the foe with uncanny accuracy.",
        icon: "spell-the-amber-spear",
        ranks: [
            { effects: [
                { icon: "spell-the-amber-spear", description: "Spell: \"The Amber Spear Upgraded\"" },
                { icon: "spell-the-amber-spear", description: "Overcast spell: \"The Amber Spear Upgraded\"" },
                { icon: "spell-the-amber-spear", description: "Cooldown: -30% to \"The Amber Spear\"" }
            ] },
            { effects: [
                { icon: "spell-the-amber-spear", description: "Overcast spell: \"The Amber Spear Upgraded\"" },
                { icon: "spell-the-amber-spear", description: "Cooldown: -50% to \"The Amber Spear\"" },
                { icon: "spell-the-amber-spear", description: "Winds of Magic cost: -2 for \"The Amber Spear\"" },
                { icon: "spell-the-amber-spear", description: "Winds of Magic cost: -2 for \"The Amber Spear Upgraded\"" },
                { icon: "spell-the-amber-spear", description: "Miscast base chance: -15% for \"The Amber Spear Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "uncommon",
            cost: [11, 9],
            cooldown: "43",
            attributes: {
                type: "Magic Missile",
                target: [
                    { text: "Enemy" },
                    { text: "200m", uptick: "range" }
                ],
                cannotUseIf: "Manning equipment, Climbing",
                projectileRange: "200m",
                miscastChance:  {"0": "50", "1": "35"},
                effects: [
                    { text: "Increased", icon: "icon-armor-piercing", postText: "armor-piercing damage", uptick: "up-blue", color: "blue" },
                    { text: "Greater", icon: "icon-armor-piercing-ranged", postText: "armor-piercing explosion damage", uptick: "up-blue", color: "blue" },
                    { text: "Causes moderate", icon: "icon-magic", postText: "magical damage", uptick: "up-green", color: "green" },
                    { text: "Effective at all ranges", uptick: "up-green", color: "green" },
                    { text: "Good against armor", uptick: "up-green", color: "green" },
                    { text: "Can cause damage to friendly combatants", uptick: "down-red", color: "red" }
                ]
            }
        }
    },
    {
        ref: "wildHeart",
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
        ref: "flockOfDoom",
        name: "Flock of Doom",
        description: "With a mighty bellow, the caster invokes Corvus the Crow Lord, summoning his servants to peck at the foe's eyes.",
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
        ref: "pannsImpenetrablePelt",
        name: "Pann's Impenetrable Pelt",
        description: "Calling upon the beast spirits of the wild, the caster sheathes vulnerable flesh in unyielding fur and hide.",
        icon: "spell-panns-impenetrable-pelt",
        ranks: [
            { effects: [
                { icon: "spell-panns-impenetrable-pelt", description: "Spell: \"Pann's Impenetrable Pelt Upgraded\"" },
                { icon: "spell-panns-impenetrable-pelt", description: "Overcast spell: \"Pann's Impenetrable Pelt Upgraded\"" },
                { icon: "spell-panns-impenetrable-pelt", description: "Cooldown: -30% to \"Pann's Impenetrable Pelt\"" }
            ] },
            { effects: [
                { icon: "spell-panns-impenetrable-pelt", description: "Overcast spell: \"Pann's Impenetrable Pelt Upgraded\"" },
                { icon: "spell-panns-impenetrable-pelt", description: "Cooldown: -50% to \"Pann's Impenetrable Pelt\"" },
                { icon: "spell-panns-impenetrable-pelt", description: "Winds of Magic cost: -1 for \"Pann's Impenetrable Pelt\"" },
                { icon: "spell-panns-impenetrable-pelt", description: "Winds of Magic cost: -2 for \"Pann's Impenetrable Pelt Upgraded\"" },
                { icon: "spell-panns-impenetrable-pelt", description: "Miscast base chance: -15% for \"Pann's Impenetrable Pelt Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "uncommon",
            cost: [13, 11],
            cooldown: "43",
            attributes: {
                type: [
                    { text: "Augment (Area)"},
                    { text: "Instantly affects targets in area"}
                ],
                duration: "44 seconds",
                target: [
                    { text: "Self, Ground, Ally" },
                    { text: "Affects allies in range" },
                    { text: "200m", uptick: "range" }
                ],
                effectRange: "40m",
                miscastChance:  {"0": "50", "1": "35"},
                effects: [
                    { text: "Good against AP damage", uptick: "up-green", color: "green" },
                    { text: "Added effect area", uptick: "up-blue", color: "blue" },
                    { text: "+24%", icon: "movement-character", postText: "Speed", uptick: "up-green", color: "green" },
                    { text: "+22%", icon: "resistance-physical", postText: "Physical Resistance", uptick: "up-green", color: "green" }
                ]
            }
        }
    },
    {
        ref: "theCurseOfAnraheir",
        name: "The Curse of Anraheir",
        description: "Nebulous nature spirits assail the foe, clawing at them with hands not nearly as insubstantial as they appear.",
        icon: "spell-the-curse-of-anraheir",
        ranks: [
            { effects: [
                { icon: "spell-the-curse-of-anraheir", description: "Spell: \"The Curse of Anraheir Upgraded\"" },
                { icon: "spell-the-curse-of-anraheir", description: "Overcast spell: \"The Curse of Anraheir Upgraded\"" },
                { icon: "spell-the-curse-of-anraheir", description: "Cooldown: -30% to \"The Curse of Anraheir\"" }
            ] },
            { effects: [
                { icon: "spell-the-curse-of-anraheir", description: "Overcast spell: \"The Curse of Anraheir Upgraded\"" },
                { icon: "spell-the-curse-of-anraheir", description: "Cooldown: -50% to \"The Curse of Anraheir\"" },
                { icon: "spell-the-curse-of-anraheir", description: "Winds of Magic cost: -2 for \"The Curse of Anraheir\"" },
                { icon: "spell-the-curse-of-anraheir", description: "Winds of Magic cost: -2 for \"The Curse of Anraheir Upgraded\"" },
                { icon: "spell-the-curse-of-anraheir", description: "Miscast base chance: -15% for \"The Curse of Anraheir Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "rare",
            cost: [14, 12],
            cooldown: "47",
            attributes: {
                type: [
                    { text: "Hex"},
                    { text: "Instantly affects targets in area"}
                ],
                target: [
                    { text: "Ground, Enemy" },
                    { text: "Affects enemies in range" },
                    { text: "200m", uptick: "range" }
                ],
                effectRange: "55m",
                miscastChance:  {"0": "50", "1": "35"},
                effects: [
                    { text: "Increased effect area", uptick: "up-blue", color: "blue" },
                    { text: "-24", icon: "melee-character", postText: "Melee Attack", color: "red" },
                    { text: "-30", icon: "accuracy-character", postText: "Accuracy", color: "red" },
                    { text: "-24%", icon: "movement-character", postText: "Speed", color: "red" }
                ]
            }
        }
    },
    {
        ref: "transformationOfKadon",
        name: "Transformation of Kadon",
        description: "Kadon, a master of forms, was able to shift his shape into anything he chose. This mastery is used to summon a Manticore, as if Kadon himself fights for you.",
        icon: "spell-transformation-of-kadon",
        ranks: [
            { effects: [
                { icon: "spell-transformation-of-kadon", description: "Spell: \"Transformation of Kadon\"" },
                { icon: "magic-character", description: "Winds of Magic cost: -6 for \"Transformation of Kadon\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "rare",
            cooldown: "45",
            cost: [8],
            uses: 2,
            attributes: {
                type: "Augment",
                target: [
                    { text: "Self, Ground" },
                    { text: "60m", uptick: "range" }
                ],
                cannotUseIf: "Climbing",
                cannotTargetIf: "Climbing or manning equipment or on a platform",
                effects: [
                    { text: "Summons a Manticore", uptick:"up-green", color: "green" },
                    { text: "Powerful unit ideal for combat", uptick: "up-green", color: "green" },
                    { text: "Summoned units degrade over time", uptick: "down-red", color: "red" },
                    { text: "Spawned unit fights in this battle only", uptick: "down-red", color: "red" }
                ]
            }
        }
    },
]