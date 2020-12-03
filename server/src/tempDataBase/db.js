exports.skills = [
    {
        ref: "hornOfTheWildHunt",
        name: "Horn of the Wild Hunt",
        description: "When this ancient and revered relic is blown, all Elven forces are driven to the Hunt with a savage determination.",
        icon: "item-enchanted",
        quest: true,
        ranks: [
            { effects: [
                { icon: "defense-character", description: "Melee defense: +10" },
                { icon: "underway", description: "Chance of intercepting an army using the Underway, beast-paths or Worldroots: +10%" },
                { icon: "morale", description: "Leadership: +8", ps: "Lord's army" },
                { icon: "ability-horn-of-the-wild-hunt", description: "Ability: \"Horn of the Wild Hunt\"" }
            ] }
        ],
        spell: {
            description: "Item",
            rarity: "legendary",
            cooldown: "120",
            attributes: {
                type: "Augment (Area)",
                duration: "24 seconds",
                target: [
                    { text: "Self" },
                    { text: "Affects allies in range" }
                ],
                effectRange: "Map-wide",
                effects: [
                    { text: "+54%", icon: "charge-character", postText: "Charge Bonus", color: "green" }
                ]
            }
        }
    },
    {
        ref: "cloakOfIsha",
        name: "Cloak of Isha",
        description: "This cloak, renewed annually by Ariel herself, is all Orion needs to protect himself.",
        icon: "item-talisman",
        quest: true,
        ranks: [
            { effects: [
                { icon: "defense-character", description: "Melee defense: +5" },
                { icon: "resistance-magic", description: "Magic resistance: 10%" },
                { icon: "agent", description: "Enemy Hero action success chance: -10%" },
                { icon: "religion", description: "Untainted: +5", ps: "local province" },
                { icon: "ability-talisman", description: "Passive ability: \"Cloak of Isha\"" }
            ] }
        ],
        spell: {
            description: "Item",
            rarity: "legendary",
            attributes: {
                type: "Augment (Area)",
                duration: "Constant",
                target: "Self",
                disabledIf: "Hitpoints greater than 20%",
                effects: [
                    { text: "Restores", postText: "8 Hit Points per second", icon: "hp", uptick: "up-green", color: "green" },
                    { text: "+44%", postText: "Damage Resistance", icon: "resistance-ward-save", color: "green" }
                ]
            }
        }
    },
    {
        ref: "spearOfKurnous",
        name: "Spear of Kurnous",
        description: "When Orion hurls this living weapon with fierce purpose it fells the most powerful foes before returning to its master.",
        icon: "item-weapon",
        quest: true,
        ranks: [
            { effects: [
                { icon: "ranged-damage-character", description: "Missile strength: +10%" },
                { icon: "magical-attacks", description: "Enables magical attacks" },
                { icon: "treasury", description: "Recruitment cost: -10%", ps: "Lord's army" },
                { icon: "income", description: "Income from post-battle loot: +10%" },
                { icon: "ability-spear-of-kurnous", description: "Ability: \"Spear of Kurnous\"" }
            ] }
        ],
        spell: {
            description: "Weapon",
            rarity: "legendary",
            cooldown: "120",
            attributes: {
                type: "Magic Missile",
                target: [
                    { text: "Enemy" },
                    { text: "200m", uptick: "range" }
                ],
                projectileRange: "200m",
                effects: [
                    { text: "Causes", postText: "armour-piercing damage", icon: "armor-piercing-character", uptick: "up-green", color: "green" },
                    { text: "Effective at all ranges", uptick: "up-green", color: "green" },
                    { text: "Good penetration", uptick: "up-green", color: "green" },
                    { text: "Can cause damage to friendly combatants", uptick: "down-red", color: "red" }
                ]
            }
        }
    },
    {
        ref: "swordOfDaith",
        name: "Sword of Daith",
        description: "This blade, like Durthu himself, is steeped in millennia of bitterness and rage waiting to be unleashed.",
        icon: "item-weapon",
        quest: true,
        ranks: [
            { effects: [
                { icon: "melee-character", description: "Melee attack: +10" },
                { icon: "magical-attacks", description: "Enables magical attacks" },
                { icon: "treasury", description: "Recruitment cost: -10%", ps: "Lord's army" },
                { icon: "income", description: "Income from post-battle loot: +10%" },
                { icon: "ability-sword-of-daith", description: "Ability: \"Sword of Daith\"" }
            ] }
        ],
        spell: {
            description: "Weapon",
            rarity: "legendary",
            cooldown: "120",
            uses: 2,
            attributes: {
                type: [
                    { text: "Direct Damage (Area)" },
                    { text: "Only acts on targets when in area" }
                ],
                duration: "17 seconds",
                target: [
                    { text: "Ground, Enemy" },
                    { text: "Affects enemies in range" },
                    { text: "100m", uptick: "range" }
                ],
                effectRange: "30m",
                effects: [
                    { text: "Causes damage to combatants", uptick: "up-green", color: "green" },
                    { text: "Strong vs. multiple combatants", uptick: "up-green", color: "green" },
                    { text: "Chance opponent will resist damage", uptick: "down-red", color: "red" },
                    { text: "Weak vs. a single combatant", uptick: "down-red", color: "red" },
                    { text: "-30", icon: "armor-character", postText: "Armour", uptick: "down-red", color: "red" }
                ]
            }
        }
    },
    {
        ref: "elvenSteedWoodElves",
        name: "Elven Steed",
        description: "The bond between rider and steed goes beyond friendship or family; they act as one.",
        icon: "elven-steed",
        ranks: [
            { effects: [{ icon: "mount", description: "Mount: Elven Steed" }] }
        ]
    },
    {
        ref: "greatEagleWoodElves",
        name: "Great Eagle",
        description: "Fly on your wings, like an eagle. Touch the sun. Track the foe, ambush, and defeat.",
        icon: "great-eagle",
        ranks: [
            { effects: [{ icon: "mount", description: "Mount: Great Eagle" }] }
        ]
    },
    {
        ref: "forestDragon",
        name: "Forest Dragon",
        description: "Hailing from deep within the forests of the Old World, this dragon breathes deadly, poisonous fumes instead of fire.",
        icon: "forest-dragon",
        ranks: [
            { effects: [{ icon: "mount", description: "Mount: Forest Dragon" }] }
        ]
    },
    {
        ref: "rageOfKurnous",
        name: "Rage of Kurnous",
        description: "The forest has a great rage, which is manifest in its warriors' violent deeds in Kurnous' name.",
        icon: "character-damage",
        ranks: [{ effects: [{ icon: "damage", description: "Weapon strength: +5% for all units", ps: "all armies factionwide" }] }]
    },
    {
        ref: "theSkeweringBranch",
        name: "The Skewering Branch",
        description: "No hide nor armour can stand against the piercing fury of a Dryad or Tree Kin's savage limbs.",
        icon: "character-damage",
        ranks: [{ effects: [
            { icon: "armor-piercing", description: "Armour-piercing weapon damage: +3 for Dryads units", ps: "Lord's army" },
            { icon: "armor-piercing", description: "Armour-piercing weapon damage: +10 for Tree Kin units", ps: "Lord's army" }
        ] }]
    },
    {
        ref: "skinOfTheWoods",
        name: "Skin of the Woods",
        description: "Hewn from the same forest that surrounds them, Tree Kin withstand attacks like the forest withstands the fury of the seasons.",
        icon: "character-ward-save",
        ranks: [{ effects: [{ icon: "resistance-ward-save", description: "Ward save: 20% for Tree Kin units", ps: "Lord's army" }] }]
    },
    {
        ref: "asuryansCommand",
        name: "Asuryan's Command",
        description: "The Creator blesses the Master of the Hunt, ensuring his shots always fly far and true.",
        icon: "character-ranged-damage",
        ranks: [{ effects: [{ icon: "ranged-damage", description: "Missile strength: +5%", ps: "all armies factionwide" }] }]
    },
    {
        ref: "rainOfSpines",
        name: "Rain of Spines",
        description: "A ranger should give no reprieve to the foe. Arrows must fall like a deluge, as deadly as lightning.",
        icon: "character-ranged-damage",
        ranks: [{ effects: [{ icon: "reload-time", description: "Reload time reduction: +12%", ps: "Lord's army" }] }]
    },
    {
        ref: "speedOfTheHunter",
        name: "Speed of the Hunter",
        description: "Elven hunters emulate Kurnous, the God of the Hunt. Their speed and swiftness is therefore without peer.",
        icon: "character-speed",
        ranks: [{ effects: [{ icon: "movement", description: "Speed: +6% for Elven units", ps: "Lord's army" }] }]
    },
    {
        ref: "arrowOfKurnous",
        name: "Arrow of Kurnous",
        description: "When the arrow flies farther, it may kill sooner, which is vital in the Hunt.",
        icon: "ability-arrow-of-kurnous",
        ranks: [
            { effects: [{ icon: "ability-arrow-of-kurnous", description: "Ability: \"Arrow of Kurnous\"" }] }
        ],
        spell: {
            description: "Hero ability",
            cooldown: "90",
            uses: 3,
            rarity: "uncommon",
            attributes: {
                type: "Magic Missiles",
                duration: "5 seconds",
                target: [
                    { text: "Enemy" },
                    { text: "600m", uptick: "range" }
                ],
                projectileRange: "600m",
                effects: [
                    { text: "Causes", icon: "icon-armor-piercing", postText: "armour-piercing damage", uptick: "up-green", color: "green" },
                    { text: "Good penetration", uptick: "up-green", color: "green" },
                    { text: "Effective at long range", uptick: "up-green", color: "green" }
                ]
            }
         }
    },
    {
        ref: "hawksTalon",
        name: "Hawk's Talon",
        description: "Nature manifests at Orion's call, raining a flurry of arrows upon the enemy in defense of Athel Loren.",
        icon: "ability-hawks-talon",
        ranks: [
            { effects: [{ icon: "ability-hawks-talon", description: "Ability: \"Hawk's Talon\"" }] }
        ],
        spell: {
            description: "Weapon",
            cooldown: "90",
            uses: 3,
            rarity: "uncommon",
            attributes: {
                type: "Bombardment",
                duration: "5 seconds",
                target: [
                    { text: "Ground" },
                    { text: "200m", uptick: "range" }
                ],
                effects: [
                    { text: "Causes moderate", icon: "icon-magic", postText: "magical damage", uptick: "up-green", color: "green" },
                    { text: "Medium strike area", uptick: "up-green", color: "green" },
                    { text: "Strong vs. a single unit", uptick: "up-green", color: "green" },
                    { text: "Good against armour", uptick: "up-green", color: "green" },
                    { text: "Weak vs. a single combatant", uptick: "down-red", color: "red" }
                ]
            }
         }
    },
    {
        ref: "fleetfinger",
        name: "Fleetfinger",
        description: "Nook and fire. Nook again, and fire. Nook a third time, and fire. all in a heartbeat.",
        icon: "character-ranged-damage",
        ranks: [
            { effects: [{ icon: "reload-time-character", description: "Reload time reduction: +7%" }] },
            { effects: [{ icon: "reload-time-character", description: "Reload time reduction: +15%" }] }
        ]
    },
    {
        ref: "piercingShots",
        name: "Piercing Shots",
        description: "The forest teaches a warrior not only when to fire but where, which makes a bigger difference.",
        icon: "character-ranged-damage",
        ranks: [
            { effects: [{ icon: "ranged-damage-character", description: "Missile strength: +7%" }] },
            { effects: [{ icon: "ranged-damage-character", description: "Missile strength: +15%" }] }
        ]
    },
    {
        ref: "bottomlessQuiver",
        name: "Bottomless Quiver",
        description: "Always willing to fight on, a widened quiver allows arrows to rain, almost without end.",
        icon: "character-ammo",
        ranks: [
            { effects: [{ icon: "ammo-character", description: "Missile strength: +15%" }] },
            { effects: [{ icon: "ammo-character", description: "Missile strength: +30%" }] }
        ]
    },
    {
        ref: "preyOfAnathRaema",
        name: "Prey of Anath Raema",
        description: "By all means summon the bloodthirsty Goddess of the Hunt to assist you, but always make sure you thank her afterwards...",
        icon: "ability-prey-of-anath-raema",
        ranks: [
            { effects: [{ icon: "ability-prey-of-anath-raema", description: "Ability: \"Prey of Anath Raema\"" }] }
        ],
        spell: {
            description: "Character ability",
            cooldown: "90",
            uses: 3,
            rarity: "uncommon",
            attributes: {
                type: "Hex",
                duration: "16 seconds",
                target: [
                    { text: "Enemy" },
                    { text: "100m", uptick: "range" }
                ],
                effects: [
                    { text: "-22%", icon: "resistance-missile", postText: "Missile Resistance", uptick: "down-red", color: "red" },
                    { text: "Cannot move", uptick: "down-red", color: "red" }
                ]
            }
         }
    },
    {
        ref: "houndsOfOrion",
        name: "Hounds of Orion",
        description: "Orion's wolves run with their Lord, defending his person with great savagery and scant regard for their own lives.",
        icon: "ability-hounds-of-orion",
        ranks: [
            { effects: [{ icon: "ability-hounds-of-orion", description: "Ability: \"Hounds of Orion\"" }] }
        ],
        spell: {
            description: "Lord ability",
            cooldown: "90",
            uses: 3,
            rarity: "uncommon",
            attributes: {
                type: "Vortex",
                duration: "13 seconds",
                target: [
                    { text: "Ground" },
                    { text: "150m", uptick: "range" }
                ],
                cannotTargetIf: "Flying, On a wall",
                effects: [
                    { text: "Causes major", icon: "icon-magic", postText: "magical damage", uptick: "up-green", color: "green" },
                    { text: "Medium, randomly-moving area of effect", uptick: "up-green", color: "green" },
                    { text: "Strong vs. multiple units", uptick: "up-green", color: "green" },
                    { text: "Weak vs. a single combatant", uptick: "down-red", color: "red" }
                ]
            }
         }
    },
    {
        ref: "enduranceOfTheOak",
        name: "Endurance of the Oak",
        description: "Taking their cue from the forest itself, the Lord endures and overcomes all.",
        icon: "character-health",
        ranks: [
            { effects: [{ icon: "health-character", description: "Hit points: +7%" }] },
            { effects: [{ icon: "health-character", description: "Hit points: +15%" }] }
        ]
    },
    {
        ref: "impenetrableBark",
        name: "Impenetrable Bark",
        description: "Using the forest itself as a shield, this Lord is protected by their devotion to Athel Loren.",
        icon: "character-armor",
        ranks: [
            { effects: [{ icon: "armor-character", description: "Armour: +15" }] },
            { effects: [{ icon: "armor-character", description: "Armour: +30" }] }
        ]
    },
    {
        ref: "temperedRigour",
        name: "Tempered Rigour",
        description: "When to strike, when to block, when to dodge. These are all skills the warriors of Athel Loren must perfect.",
        icon: "character-attack",
        ranks: [
            { effects: [
                { icon: "defense-character", description: "Melee defense: +6" },
                { icon: "melee-character", description: "Melee attack: +6" }
            ] },
            { effects: [
                { icon: "defense-character", description: "Melee defense: +12" },
                { icon: "melee-character", description: "Melee attack: +12" }
            ] }
        ]
    },
    {
        ref: "violentDelights",
        name: "Violent Delights",
        description: "There is no greater thrill than to be in the midst of battle, slaughtering in the forest's name.",
        icon: "character-damage",
        ranks: [
            { effects: [{ icon: "damage", description: "Weapon strength: +15%" }] },
            { effects: [{ icon: "damage", description: "Weapon strength: +30%" }] }
        ]
    },
    {
        ref: "callOfTheWoods",
        name: "Call of the Woods",
        description: "The Lord embodies the forest; as a result of this, their warriors feel a greater call to defend it.",
        icon: "ability-call-of-the-woods",
        ranks: [
            { effects: [{ icon: "ability-call-of-the-woods", description: "Passive ability: \"Call of the Woods\"" }] }
        ],
        spell: {
            description: "Lord ability",
            rarity: "common",
            attributes: {
                type: [
                    { text: "Augment" },
                    { text: "Only acts on targets when in area" }
                ],
                duration: "Constant",
                target: [
                    { text: "Self" },
                    { text: "Affects allies in range" }
                ],
                effectRange: "30m",
                effects: [
                    { text: "+5", icon: "melee-character", postText: "Melee Attack", color: "green" }
                ]
            }
         }
    },
    {
        ref: "howlOfTheForest",
        name: "Howl of the Forest",
        description: "The Lord charges their troops to fight for Athel Loren, for their very souls are tethered to its fate.",
        icon: "ability-call-of-the-woods",
        ranks: [
            { effects: [
                { icon: "ability-call-of-the-woods", description: "Replaces ability: \"Call of the Woods\"" },
                { icon: "ability-howl-of-the-forest", description: "Passive ability: \"Howl of the Forest\"" }
            ] }
        ],
        spell: {
            description: "Lord ability",
            rarity: "uncommon",
            attributes: {
                type: [
                    { text: "Augment" },
                    { text: "Only acts on targets when in area" }
                ],
                duration: "Constant",
                target: [
                    { text: "Self" },
                    { text: "Affects allies in range" }
                ],
                effectRange: "40m",
                effects: [
                    { text: "+9", icon: "melee-character", postText: "Melee Attack", color: "green" }
                ]
            }
         }
    },
    {
        ref: "theEyeOfKurnous",
        name: "The Eye of Kurnous",
        description: "The Lord sets their eye upon the foe, imbuing their troops with Kurnous' spirit and the will to see his enemies destroyed.",
        icon: "ability-the-eye-of-kurnous",
        ranks: [
            { effects: [{ icon: "ability-the-eye-of-kurnous", description: "Passive ability: \"The Eye of Kurnous\"" }] }
        ],
        spell: {
            description: "Lord ability",
            rarity: "common",
            attributes: {
                type: [
                    { text: "Augment" },
                    { text: "Only acts on targets when in area" }
                ],
                duration: "Constant",
                target: [
                    { text: "Self" },
                    { text: "Affects allies in range" }
                ],
                effectRange: "30m",
                effects: [
                    { text: "+10%", icon: "icon-ranged-damage-base", postText: "Base Missile Damage", color: "green" }
                ]
            }
         }
    },
    {
        ref: "sightBeyondSight",
        name: "Sight Beyond Sight",
        description: "The Lord charges their troops to fight for Athel Loren, for their very souls are tethered to its fate.",
        icon: "ability-sight-beyond-sight",
        ranks: [
            { effects: [
                { icon: "ability-the-eye-of-kurnous", description: "Replaces ability: \"The Eye of Kurnous\"" },
                { icon: "ability-sight-beyond-sight", description: "Passive ability: \"Sight Beyond Sight\"" }
            ] }
        ],
        spell: {
            description: "Lord ability",
            rarity: "uncommon",
            attributes: {
                type: [
                    { text: "Augment" },
                    { text: "Only acts on targets when in area" }
                ],
                duration: "Constant",
                target: [
                    { text: "Self" },
                    { text: "Affects allies in range" }
                ],
                effectRange: "40m",
                effects: [
                    { text: "+15%", icon: "icon-ranged-damage-base", postText: "Base Missile Damage", color: "green" }
                ]
            }
         }
    },
    {
        ref: "piercingThorns",
        name: "Piercing Thorns",
        description: "Every blade and barbed branch will eventually find its mark - when they do, the forest's infinite anger is truly felt.",
        icon: "battle-attack",
        ranks: [
            { effects: [
                { icon: "melee", description: "Melee attack: +4 for Eternal Guard and Dryad units", ps: "Lord's army" },
            ] },
            { effects: [
                { icon: "melee", description: "Melee attack: +6 for Eternal Guard and Dryad units", ps: "Lord's army" },
                { icon: "weapon-damage", description: "Weapon strength: +6% for Eternal Guard and Dryad units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "melee", description: "Melee attack: +8 for Eternal Guard and Dryad units", ps: "Lord's army" },
                { icon: "weapon-damage", description: "Weapon strength: +12% for Eternal Guard and Dryad units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        ref: "boltsOfTheForest",
        name: "Bolts of the Forest",
        description: "Let each bolt be imbued with the strength of Kurnous, and bring death to all his enemies.",
        icon: "battle-ranged-damage",
        ranks: [
            { effects: [
                { icon: "ranged-damage", description: "Missile strength: +6% for Glade Guard, Deepwood Scouts, and Waywatchers units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "reload-time", description: "Reload time reduction: +5% for Glade Guard, Deepwood Scouts, and Waywatchers units", ps: "Lord's army" },
                { icon: "ranged-damage", description: "Missile strength: +9% for Glade Guard, Deepwood Scouts, and Waywatchers units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "reload-time", description: "Reload time reduction: +10% for Glade Guard, Deepwood Scouts, and Waywatchers units", ps: "Lord's army" },
                { icon: "ranged-damage", description: "Missile strength: +12% for Glade Guard, Deepwood Scouts, and Waywatchers units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        ref: "strikingBranches",
        name: "Striking Branches",
        description: "Let the enemy feel the fury of nature, embodied in these warriors as they crash through their lines.",
        icon: "battle-speed",
        ranks: [
            { effects: [
                { icon: "movement", description: "Speed: +6% for Glade Riders, Wild Riders, and Sisters of the Thorn units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "movement", description: "Speed: +9% for Glade Riders, Wild Riders, and Sisters of the Thorn units", ps: "Lord's army" },
                { icon: "charge", description: "Charge bonus: +6 for Glade Riders, Wild Riders, and Sisters of the Thorn units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "movement", description: "Speed: +12% for Glade Riders, Wild Riders, and Sisters of the Thorn units", ps: "Lord's army" },
                { icon: "charge", description: "Charge bonus: +12 for Glade Riders, Wild Riders, and Sisters of the Thorn units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        ref: "swingingBoughs",
        name: "Swinging Boughs",
        description: "The warrior strikes with the strength of a swinging tree limb; few can stand against such strength.",
        icon: "battle-attack",
        ranks: [
            { effects: [
                { icon: "melee", description: "Melee attack: +4 for Wardancers and Wildwood Ranger units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "melee", description: "Melee attack: +6 for Wardancers and Wildwood Ranger units", ps: "Lord's army" },
                { icon: "defense", description: "Melee defense: +4 for Wardancers and Wildwood Ranger units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "melee", description: "Melee attack: +8 for Wardancers and Wildwood Ranger units", ps: "Lord's army" },
                { icon: "defense", description: "Melee defense: +8 for Wardancers and Wildwood Ranger units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        ref: "ancientBark",
        name: "Ancient Bark",
        description: "Centuries upon centuries of existence have given these ancient tree spirits a natural armour, mitigating any physical blows dealth against them.",
        icon: "battle-defense",
        ranks: [
            { effects: [
                { icon: "armor", description: "Armour: +6 for Tree Kin and Treeman units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "resistance-physical", description: "Physical resistance: 5% for Tree Kin and Treeman units", ps: "Lord's army" },
                { icon: "armor", description: "Armour: +9 for Tree Kin and Treeman units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "resistance-physical", description: "Physical resistance: 10% for Tree Kin and Treeman units", ps: "Lord's army" },
                { icon: "armor", description: "Armour: +12 for Tree Kin and Treeman units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        ref: "wingsOfTheForest",
        name: "Wings of the Forest",
        description: "Not all of the forest's guardians are rooted to the ground - flying enemies will always be in danger from the woodland's airborne protectors.",
        icon: "battle-damage",
        ranks: [
            { effects: [
                { icon: "weapon-damage", description: "Weapon strength: +6% for Hawk Riders, Great Eagle, and Forest Dragon units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "weapon-damage", description: "Weapon strength: +9% for Hawk Riders, Great Eagle, and Forest Dragon units", ps: "Lord's army" },
                { icon: "charge", description: "Charge bonus: +9 for Hawk Riders, Great Eagle, and Forest Dragon units", ps: "Lord's army" },
                { icon: "reload-time", description: "Reload time reduction: +5% for Hawk Riders units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "weapon-damage", description: "Weapon strength: +12% for Hawk Riders, Great Eagle, and Forest Dragon units", ps: "Lord's army" },
                { icon: "charge", description: "Charge bonus: +12 for Hawk Riders, Great Eagle, and Forest Dragon units", ps: "Lord's army" },
                { icon: "reload-time", description: "Reload time reduction: +10% for Hawk Riders units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        ref: "shieldOfTheForest",
        name: "Shield of the Forest",
        description: "Armour as hard as the ancient bark of the forest, it repels blows that would rend others asunder.",
        icon: "battle-defense",
        ranks: [
            { effects: [
                { icon: "resistance-physical", description: "Physical resistance: 15% for Eternal Guard, Dryads, Wardancers, and Wildwood Ranger units", rank: 7, ps: "Lord's army" },
                { icon: "armor", description: "Armour: +12 for Eternal Guard, Dryads, Wardancers, and Wildwood Ranger units", rank: 7, ps: "Lord's army" },
                { icon: "defense", description: "Melee defense: +5 for Eternal Guard, Dryads, Wardancers, and Wildwood Ranger units", rank: 7, ps: "Lord's army" }
            ] }
        ]
    },
    {
        ref: "naturesQuiver",
        name: "Nature's Quiver",
        description: "What is a ranger without an arrow? Who can be the best without dozens?",
        icon: "battle-range",
        ranks: [
            { effects: [
                { icon: "resistance-missile", description: "Missile resistance: 15% for Glade Guard, Deepwood Scouts, and Waywatchers units", rank: 7, ps: "Lord's army" },
                { icon: "ammo", description: "Ammunition: +20% for Glade Guard, Deepwood Scouts, and Waywatchers units", rank: 7, ps: "Lord's army" },
                { icon: "accuracy", description: "Range: +10% for Glade Guard, Deepwood Scouts, and Waywatchers units", rank: 7, ps: "Lord's army" }
            ] }
        ]
    },
    {
        ref: "swiftSturdy",
        name: "Swift & Sturdy",
        description: "Moving like the wind, whistling past tree ranches, the riders of the forest hunt any who would do harm to the place they call home.",
        icon: "battle-ranged-damage",
        ranks: [
            { effects: [
                { icon: "defense", description: "Melee defense: +5 for Wild Riders, Glade Riders, Sisters of the Thorn, and Hawk Riders units", rank: 7, ps: "Lord's army" },
                { icon: "weapon-damage", description: "Weapon strength: +12% for Wild Riders, Glade Riders, Sisters of the Thorn, and Hawk Riders units", rank: 7, ps: "Lord's army" },
                { icon: "charge", description: "Charge bonus: +12 for Wild Riders, Glade Riders, Sisters of the Thorn, and Hawk Riders units", rank: 7, ps: "Lord's army" },
                { icon: "ranged-damage", description: "Missile strength: +12% for Glade Riders, Sisters of the Thorn, and Hawk Riders units", rank: 7, ps: "Lord's army" },
            ] }
        ]
    },
    {
        ref: "theForestsRoar",
        name: "The Forest's Roar",
        description: "All of Athel Loren shouts with a fury as old as the ages, and the enemy knows its power.",
        icon: "battle-attack",
        ranks: [
            { effects: [
                { icon: "resistance-missile", description: "Missile resistance: 15% for Tree Kin, Treeman, Great Eagel, and Forest Dragon units", rank: 7, ps: "Lord's army" },
                { icon: "melee", description: "Melee attack: +5 for Tree Kin, Treeman, Great Eagel, and Forest Dragon units", rank: 7, ps: "Lord's army" },
                { icon: "defense", description: "Melee defense: +5 for Tree Kin, Treeman, Great Eagel, and Forest Dragon units", rank: 7, ps: "Lord's army" }
            ] }
        ]
    },
    {
        ref: "everReachingTendrils",
        name: "Ever-Reaching Tendrils",
        description: "The denizens of the forest will travel many miles to see those who sould threaten Athel Loren put to rout.",
        icon: "campaign-movement",
        ranks: [
            { effects: [{ icon: "campaign-movement", description: "Campaign movement range: +10%" }] }
        ]
    },
    {
        ref: "wondersOfTheForest",
        name: "Wonders of the Forest",
        description: "Athel Loren provides for its deserving children, with wondrous boons gifted in recognition of their many endeavours.",
        icon: "campaign-military-spending",
        ranks: [
            { effects: [
                { icon: "income", description: "Income from post-battle loot: +10%", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "income", description: "Income from post-battle loot: +20%", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "income", description: "Income from post-battle loot: +30%", ps: "Lord's army" }
            ] }            
        ]
    },
    {
        ref: "naturesSalve",
        name: "Nature's Salve",
        description: "The Worldroots provide succour for their children, purging the forests of any corrupting infestation.",
        icon: "campaign-untainted",
        ranks: [
            { effects: [{ icon: "religion", description: "Untainted: +1", ps: "local province" }] },
            { effects: [{ icon: "religion", description: "Untainted: +2", ps: "local province" }] },
            { effects: [{ icon: "religion", description: "Untainted: +3", ps: "local province" }] }            

        ]
    },
    {
        ref: "obscuringCanopy",
        name: "Obscuring Canopy",
        description: "The magics of the woods obscure and connive, able to turn enemy blades away from their targets.",
        icon: "campaign-agent",
        ranks: [
            { effects: [{ icon: "agent", description: "Enemy Hero action success chance: -5%" }] },
            { effects: [{ icon: "agent", description: "Enemy Hero action success chance: -9%" }] },
            { effects: [{ icon: "agent", description: "Enemy Hero action success chance: -13%" }] }            

        ]
    },
    {
        ref: "growthOfTheForest",
        name: "Growth of the Forest",
        description: "The forest provides for its warriors, rehabilitating and regenerating wounds suffered in its defense.",
        icon: "campaign-replenishment",
        ranks: [{ effects: [{ icon: "replenishment", description: "Casualty replenishment rate: +5%", ps: "Lord's army" }] }]
    },
    {
        ref: "openBranches",
        name: "Open Branches",
        description: "From all corners of the forest, they come to defend their homes.",
        icon: "campaign-army",
        ranks: [{ effects: [{ icon: "army", description: "Global recruitment capacity: +1" }] }]
    },
    {
        ref: "swiftfingers",
        name: "Swiftfingers",
        description: "The dead do not want for material possessions, yet the living may yet find value in them...",
        icon: "campaign-magic",
        ranks: [
            { effects: [
                { icon: "item-ability", description: "Post battle chance of stealing a magic item: +5%" }
            ] },
            { effects: [
                { icon: "item-ability", description: "Post battle chance of stealing a magic item: +10%" },
            ] },
            { effects: [
                { icon: "item-ability", description: "Post battle chance of stealing a magic item: +15%" },
            ] }
        ]
    },
    {
        ref: "perenniality",
        name: "Perenniality",
        description: "Like the forest itself, the warriors of Athel Loren ebb and flow and regenerate with the passing of time.",
        icon: "campaign-replenishment",
        ranks: [{ effects: [{ icon: "replenishment", description: "Casualty replenishment rate: +10%", ps: "Lord's army" }] }]
    },
    {
        ref: "homeAmongstTheBoughs",
        name: "Home Amongst the Boughs",
        description: "The forest-dwellers draw from the strength of Kurnous to fight ever harder, and be ever stronger.",
        icon: "campaign-experience",
        ranks: [
            { effects: [{ icon: "experience", description: "Recruit rank: +1 for all units" }] },
            { effects: [{ icon: "experience", description: "Recruit rank: +2 for all units" }] },
            { effects: [{ icon: "experience", description: "Recruit rank: +3 for all units" }] }
        ]
    },
    {
        ref: "transformationOfKadonEagle",
        name: "Transformation of Kadon",
        description: "Kadon, a master of forms, was able to shift his shape into anything he chose. This mastery is used to summon a Great Eagle, as if Kadon himself fights for you.",
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
                    { text: "Summons a Great Eagle", uptick:"up-green", color: "green" },
                    { text: "Powerful unit ideal for combat", uptick: "up-green", color: "green" },
                    { text: "Summoned units degrade over time", uptick: "down-red", color: "red" },
                    { text: "Spawned unit fights in this battle only", uptick: "down-red", color: "red" }
                ]
            }
        }
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