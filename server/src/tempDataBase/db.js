exports.skills = [
    {
        ref: "coldOneLizardmen",
        name: "Cold One",
        description: "Dark, feral beasts indigenous to Lustria, tempted from their topical jungles to bear the Lizardmen to battle.",
        icon: "cold-one",
        ranks: [
            { effects: [{ icon: "mount", description: "Mount: Cold One" }] }
        ]
    },
    {
        ref: "carnosaur",
        name: "Carnosaur",
        description: "The ultimate jungle hunters, these large, apex predators have terrorised the primordial jungles since the dawn of existence.",
        icon: "carnosaur",
        ranks: [
            { effects: [{ icon: "mount", description: "Mount: Carnosaur" }] }
        ]
    },
    {
        ref: "obedienceBringsVictory",
        name: "Obedience Brings Victory!",
        description: "Orders must be followed and the chain of command honoured; only then will the Great Plan be served.",
        icon: "character",
        ranks: [
            { effects: [
                { icon: "character", description: "Leadership aura size: +50%" },
                { icon: "morale-character", description: "Character's aura leadership effect: +5" }
            ] }          
        ]
    },
    {
        ref: "agilityOfTheLizard",
        name: "Agility of the Lizard",
        description: "Lizardmen can move with deceptive speed and agaility when they have to.",
        icon: "character-ward-save",
        ranks: [
            { effects: [{ icon: "resistance-missile", description: "Missile resistance: 10%" }] }
        ]
    },
    {
        ref: "telekinesis",
        name: "Telekinesis",
        description: "The power ot move objects without touching them makes missiles attacks against this one largely pointless.",
        icon: "character-ward-save",
        ranks: [
            { effects: [{ icon: "resistance-missile", description: "Missile resistance: 15%" }] }
        ]
    },
    {
        ref: "reservesOfEldritchEnergy",
        name: "Reserves of Eldritch Energy",
        description: "The power of the Old Ones, stored for future use so that - at percisely the right time - the Great Plan may be advanced.",
        icon: "character-magic",
        ranks: [{ effects: [{ icon: "magic", description: "Winds of Magic power reserve: +8" }] }]
    },
    {
        ref: "becalmingCogitation",
        name: "Becalming Cogitation",
        description: "Contemplation is the path to alignment, to the correct interpretation of the Great Plan.",
        icon: "character-magic",
        ranks: [{ effects: [{ icon: "magic", description: "Enemy Winds of Magic power reserve: -15", ps: "Local Region" }] }]
    },
    {
        ref: "arcaneConvergence",
        name: "Arcane Convergence",
        description: "All shall be one, as it is written.",
        icon: "character-magic",
        ranks: [{ effects: [{ icon: "magic", description: "Winds of Magic power reserve: +20" }] }]
    },
    {
        ref: "focusOfMysteries",
        name: "Focus of Mysteries",
        description: "Through millennia of study, total mastery over magic may be attained.",
        icon: "spell-banishment",
        ranks: [
            { effects: [{ icon: "spell-banishment", description: "Bound spell: \"Banishment\"" }] }
        ],
        spell: {
            name: "Banishment",
            description: "Bound spell",
            rarity: "rare",
            cooldown: "120",
            uses: 2,
            attributes: {
                type: "Vortex",
                duration: "18 seconds",
                target: [
                    { text: "Ground" },
                    { text: "150m", uptick: "range" },
                ],
                cannotUseIf: "Climbing",
                cannotTargetIf: "On a wall",
                effects: [
                    { text: "Causes moderate", icon: "icon-magic", postText: "magical damage", uptick: "up-green", color: "green" },
                    { text: "Can disrupt unit formation", uptick: "up-green", color: "green" },
                    { text: "Huge, randomly-moving area of effect", uptick: "up-green", color: "green" },
                    { text: "Strong vs. multiple units", uptick: "up-green", color: "green" },
                    { text: "Good against armour", uptick: "up-green", color: "green" }

                ]
            }
        }
    },
    {
        ref: "protectionOfTheOldOnes",
        name: "Protection of the Old Ones",
        description: "Across teh gulf of space, the serene Potec has shared the secrets of time so that the Lizardmen may protect themselves against supernatural attack.",
        icon: "character-ward-save",
        ranks: [
            { effects: [{ icon: "resistance-magic", description: "Magic resistance: 10%" }] }
        ]
    },
    {
        ref: "unfathomablePresence",
        name: "Unfathomable Presence",
        description: "The Mage-Priest's thought patterns are so alien that they are even beyond the perception of enemy Wizards.",
        icon: "character-ward-save",
        ranks: [
            { effects: [{ icon: "resistance-magic", description: "Magic resistance: 15%" }] }
        ]
    },
    {
        ref: "soulOfStone",
        name: "Soul of Stone",
        description: "Cold, merciless, without pity, obeying only logic. Hardened against magic's ill-effects.",
        icon: "character-magic",
        ranks: [{ effects: [{ icon: "magic-character", description: "Miscast base chance: -40%" }] }]
    },
    {
        ref: "theHarrowingScrutiny",
        name: "The Harrowing Scrutiny",
        description: "Within the Slann's gaze shines the cold-blooded crutiny of the Old Ones.",
        icon: "terror",
        ranks: [
            { effects: [
                { icon: "public-order", description: "Public order: +3", ps: "local province" },
                { icon: "attribute-terror", description: "Attribute: Causes Terror" }
            ] }          
        ]
    },
    {
        ref: "transcendentHealing",
        name: "Transcendent Healing",
        description: "When wounded, the Slann's sheer force of will literally recombines his body.",
        icon: "regeneration",
        ranks: [
            { effects: [{ icon: "regeneration", description: "Passive ability: \"Regeneration\"" }] }
        ],
        spell: {
            name: "Regeneration",
            description: "Unit ability",
            rarity: "common",
            attributes: {
                type: "Regeneration",
                duration: "Constant",
                target: "Self",
                effects: [
                    { text: "Restores", icon: "hp", postText: "4 Hit Points per second", uptick: "up-green", color: "green" },
                    { text: "+25% Weakness to", icon: "icon-fire", postText: "Fire Damage", color: "red" }
                ]
            }
        }
    },
    {
        ref: "honouredElder",
        name: "Honoured Elder",
        description: "Those Saurus not lost to war may live to a great age - their long service esteemed and respected by younger Lizardmen hungry for experience.",
        icon: "honoured-elder",
        ranks: [
            { effects: [
                { icon: "public-order", description: "Public Order: +1" },
                { icon: "resistance-ward-save", description: "Ward save: 5%" },
                { icon: "coin", description: "Upkeep: -5% for Saurus and Cold One units", ps: "Lord's army" },
                { icon: "coin", description: "Upkeep: -5% for Temple Guards units", ps: "Lord's army" }
            ] }          
        ]
    },
    {
        ref: "blessingOfChotec",
        name: "Blessing of Chotec",
        description: "\"Whilst one brother lives in darkness, the other, his double-twin, exists in light. Behold!\"",
        icon: "blessing-of-chotec",
        ranks: [
            { effects: [
                { icon: "health-character", description: "Hit points: +10%" },
                { icon: "construction", description: "Construction time: -1 for Province Capital/Settlement buildings", ps: "local province" },
                { icon: "income", description: "Income from Settlement buildings: +2%", ps: "all regions" }
            ] }          
        ]
    },
    {
        ref: "blessingOfQuetzl",
        name: "Blessing of Quetzl",
        description: "\"By your scales be you blessed by the divine protector\"",
        icon: "blessing-of-quetzl",
        ranks: [
            { effects: [
                { icon: "armor-character", description: "Armour: +10" },
                { icon: "coin", description: "Upkeep: -20% for Saurus Infantry and Temple Guard units", ps: "Lord's army" }
            ] }          
        ]
    },
    {
        ref: "blessingOfTepok",
        name: "Blessing of Tepok",
        description: "\"Brothers of Great Tlazcotl, Tepok of the Air shall always be honoured. Let it be done.\"",
        icon: "blessing-of-tepok",
        ranks: [
            { effects: [
                { icon: "magic", description: "Hit points: +10%" },
                { icon: "resistance-magic", description: "Magic resistance: 5% for all units", ps: "Lord's army" },
                { icon: "movement", description: "Speed: +5% for all units", ps: "Lord's army" }
            ] }          
        ]
    },
    {
        ref: "blessingOfHuanchi",
        name: "Blessing of Huanchi",
        description: "\"Cousin of darkness, Huanchi's priests too chall dwell in twilight.\"",
        icon: "blessing-of-huanchi",
        ranks: [
            { effects: [
                { icon: "morale-character", description: "Character's aura leadership effect: +5" },
                { icon: "ambush", description: "Ambush success chance: +20%", ps: "Lord's army" },
                { icon: "income", description: "Income from post-battle loot: +20%" }
            ] }          
        ]
    },
    {
        ref: "blessingOfTlazcotl",
        name: "Blessing of Tlazcotl",
        description: "\"The universe resides within his reflective eyes; embrace the coldness of blessed certainty.\"",
        icon: "blessing-of-tlazcotl",
        ranks: [
            { effects: [
                { icon: "public-order", description: "Public order: +5", ps: "local province" },
                { icon: "replenishment", description: "Casualty replenishment rate: +10%", ps: "Lord's army" },
                { icon: "religion", description: "Untainted: +3", ps: "local province" }
            ] }          
        ]
    },
    {
        ref: "blessingOfItzl",
        name: "Blessing of Itzl",
        description: "\"Creator-meld of the beast, Itzl be praised!\"",
        icon: "blessing-of-itzl",
        ranks: [
            { effects: [
                { icon: "morale", description: "Leadership: +10 during ambushes", ps: "Lord's army" },
                { icon: "morale", description: "Leadership: +5 for Stegadon, Bastiladon, Terradon, Ripperdactyl, Carnosaur and Dread Saurian units", ps: "Lord's army" },
                { icon: "coin", description: "Upkeep: -20% for Terradon Riders, Ripperdactyl Riders, Salamander and Razordon Hunting Packs, Cold Ones, Ancient Salamander, Stegadon, Bastiladon, Carnosaur and Dread Saurian units", ps: "local province" }
            ] }          
        ]
    },
    {
        ref: "obdurateTilDeath",
        name: "Obdurate 'Til Death",
        description: "Dogged determination alone can keep one alive for centuries.",
        icon: "endurance-aura",
        ranks: [
            { effects: [{ icon: "ability-deadly-onslaught", description: "Ability: \"Endurance Aura\"" }] }
        ],
        spell: {
            name: "Aura of Endurance",
            description: "Lord ability",
            rarity: "uncommon",
            attributes: {
                type: [
                    { text: "Augment (Area)" },
                    { text: "Only acts on targets when in area" }
                ],
                duration: "Constant",
                target: [
                    { text: "Self" },
                    { text: "Affects allies in range" },
                ],
                effectRange: "40m",
                effects: [
                    { text: "+5", icon: "defense-character", postText: "Melee Defense", color: "green" },
                    { text: "+5%", icon: "resistance-missile", postText: "Missile Resistance", color: "green" }
                ]
            }
        }
    },
    {
        ref: "reptilianInstincts",
        name: "Reptilian Instincts",
        description: "Cold consideration of the target, for just a second before it attacks with speed and aggression, are the mark of the reptile.",
        icon: "character-damage",
        ranks: [
            { effects: [
                { icon: "charge-character", description: "Charge bonus: +15" },
                { icon: "damage", description: "Weapon strength: +10%" }
            ] }
        ]
    },
    {
        ref: "intimidatingBulk",
        name: "Intimidating Bulk",
        description: "Smaller, weaker races frighten easily afore the size and aggression of the Kroxigor.",
        icon: "terror",
        ranks: [
            { effects: [
                { icon: "bonus-vs-large-character", description: "Bonus vs. Large: +10" },
                { icon: "attribute-terror", description: "Attribute: Causes Terror" }
            ] }
        ]
    },
    {
        ref: "meatShield",
        name: "Meat Shield",
        description: "Rock-hard muscles and razor-sharp teeth bolstered by a tough, fleshy screen make the Kroxigor almost indestructible in battle.",
        icon: "meat-shield",
        ranks: [
            { effects: [{ icon: "resistance-physical", description: "Physical resistance: 10% for Kroxigor and Sacred Kroxigor units", ps: "Lord's army" }] }
        ]
    },
    {
        ref: "dealerInDeath",
        name: "Dealer in Death",
        description: "Death surely awaits you with sharp and pointy teeth!",
        icon: "dealer-in-death",
        ranks: [
            { effects: [
                { icon: "weapon-damage", description: "Weapon strength: +10% for Kroxigor and Sacred Kroxigor units", ps: "Lord's army" },
                { icon: "melee", description: "Melee attack: +8 for Kroxigor and Sacred Kroxigor units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        ref: "reptilianResilience",
        name: "Reptilian Resilience",
        description: "A low body temperature means the Lizardmen can operate normally in environments which would overhelm lesser races.",
        icon: "character-health",
        ranks: [
            { effects: [{ icon: "health-character", description: "Hit points: +10%" }] }
        ]
    },
    {
        ref: "predatoryFighter",
        name: "Predatory Fighter",
        description: "Of course, those who live to kill must also kill to live...",
        icon: "character-damage",
        ranks: [
            { effects: [
                { icon: "charge-character", description: "Charge bonus: +5" },
                { icon: "damage", description: "Weapon strength: +5%" }
            ] }          
        ]
    },
    {
        ref: "enforcerOfOrder",
        name: "Enforcer of Order",
        description: "The Plan *will* be observed, even if every member of the younger races has to die to achieve the Old Ones' goals.",
        icon: "character-damage",
        ranks: [
            { effects: [
                { icon: "damage", description: "Weapon strength: +2%" },
                { icon: "damage", description: "Weapon strength: +10% when fighting against Skaven" }
            ] },
            { effects: [
                { icon: "damage", description: "Weapon strength: +5%" },
                { icon: "damage", description: "Weapon strength: +10% when fighting against Greenskins, Skaven, Dark Elves, Warriors of Chaos, Norsca and Beastmen" }
            ] }
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
        ref: "proudWarrior",
        name: "Proud Warrior",
        description: "A long-serving member of an ancient, honourable tradition.",
        icon: "battle-attack",
        ranks: [
            { effects: [
                { icon: "melee", description: "Melee attack: +4 for Saurus units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "melee", description: "Melee attack: +6 for Saurus units", ps: "Lord's army" },
                { icon: "armor", description: "Armour: +6 for Saurus units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "melee", description: "Melee attack: +8 for Saurus units", ps: "Lord's army" },
                { icon: "armor", description: "Armour: +8 for Saurus units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        ref: "miasmaOfDespair",
        name: "Miasma of Despair",
        description: "Dogged determination alone can keep one alive for centuries.",
        icon: "ability-miasma-of-despair",
        ranks: [
            { effects: [{ icon: "ability-miasma-of-despair", description: "Ability: \"Miasma of Despair\"" }] }
        ],
        spell: {
            description: "Lord ability",
            cooldown: "90",
            rarity: "uncommon",
            attributes: {
                type: [
                    { text: "Hex (Area)" },
                    { text: "Instantly affects targets when in area" }
                ],
                duration: "16 seconds",
                target: [
                    { text: "Around self" },
                    { text: "Affects enemies in range" },
                ],
                effectRange: "40m",
                effects: [
                    { text: "-24%", icon: "movement-character", postText: "Speed", color: "red" },
                    { text: "-8", icon: "morale-character", postText: "Leadership", color: "red" },
                    { text: "-9%", icon: "fatigue", postText: "Vigour", color: "red" }
                ]
            }
        }
    },
    {
        ref: "auraOfInertia",
        name: "Aura of Inertia",
        description: "The enemy aren't going anywhere fast - in fact, they're not going anywhere at all!",
        icon: "ability-aura-of-inertia",
        ranks: [
            { effects: [
                { icon: "ability-miasma-of-despair", description: "Replaces: \"Miasma of Despair\"" },
                { icon: "ability-aura-of-inertia", description: "Ability: \"Aura of Inertia\"" }
            ] }
        ],
        spell: {
            description: "Lord ability",
            cooldown: "90",
            rarity: "rare",
            attributes: {
                type: [
                    { text: "Hex (Area)" },
                    { text: "Instantly affects targets when in area" }
                ],
                duration: "24 seconds",
                target: [
                    { text: "Around self" },
                    { text: "Affects enemies in range" },
                ],
                effectRange: "40m",
                effects: [
                    { text: "-24%", icon: "movement-character", postText: "Speed", color: "red" },
                    { text: "-8", icon: "morale-character", postText: "Leadership", color: "red" },
                    { text: "-9%", icon: "fatigue", postText: "Vigour", color: "red" }
                ]
            }
        }
    },
    {
        ref: "skirmisher",
        name: "Skirmisher",
        description: "This seasoned warrior understands irregular combat perfectly: when to attack, when to hold back, when to withdraw behind heavier lines.",
        icon: "battle-ranged-damage",
        ranks: [
            { effects: [
                { icon: "ranged-damage", description: "Missile strength: +6% for Skink and Chameleon Skink units", ps: "Lord's army" },
                { icon: "ranged-damage", description: "Missile strength: +6% for Salamander and Razordon Hunting Pack units", ps: "Lord's army" },
                { icon: "weapon-damage", description: "Weapon strength: +6% for Skink, Chameleon Skink and Red Crested Skink units", ps: "Lord's army" },
                { icon: "weapon-damage", description: "Weapon strength: +6% for Salamander and Razordon Hunting Pack units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "ranged-damage", description: "Missile strength: +9% for Skink and Chameleon Skink units", ps: "Lord's army" },
                { icon: "ranged-damage", description: "Missile strength: +9% for Salamander and Razordon Hunting Pack units", ps: "Lord's army" },
                { icon: "weapon-damage", description: "Weapon strength: +9% for Skink, Chameleon Skink and Red Crested Skink units", ps: "Lord's army" },
                { icon: "weapon-damage", description: "Weapon strength: +9% for Salamander and Razordon Hunting Pack units", ps: "Lord's army" },
                { icon: "defense", description: "Melee defense: +6 for Skink, Chameleon Skink and Red Crested Skink units", ps: "Lord's army" },
                { icon: "defense", description: "Melee defense: +6 for Salamander and Razordon Hunting Pack units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "ranged-damage", description: "Missile strength: +12% for Skink and Chameleon Skink units", ps: "Lord's army" },
                { icon: "ranged-damage", description: "Missile strength: +12% for Salamander and Razordon Hunting Pack units", ps: "Lord's army" },
                { icon: "weapon-damage", description: "Weapon strength: +12% for Skink, Chameleon Skink and Red Crested Skink units", ps: "Lord's army" },
                { icon: "weapon-damage", description: "Weapon strength: +12% for Salamander and Razordon Hunting Pack units", ps: "Lord's army" },
                { icon: "defense", description: "Melee defense: +8 for Skink, Chameleon Skink and Red Crested Skink units", ps: "Lord's army" },
                { icon: "defense", description: "Melee defense: +8 for Salamander and Razordon Hunting Pack units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        ref: "swfitRider",
        name: "Swift Rider",
        description: "Only the finest beast riders can hang on whilst their mounts crash through the jungle undergrowth or smash through the foe's ranks.",
        icon: "battle-speed",
        ranks: [
            { effects: [
                { icon: "movement", description: "Speed: +5% for Terradon Riders, Ripperdactyl Riders and Cold One units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "weapon-damage", description: "Weapon strength: +9% for Terradon Riders, Ripperdactyl Riders and Cold One units", ps: "Lord's army" },
                { icon: "movement", description: "Speed: +7% for Terradon Riders, Ripperdactyl Riders and Cold One units", ps: "Lord's army" },
                { icon: "ranged-damage", description: "Missile strength: +9% for Terradon Riders units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "weapon-damage", description: "Weapon strength: +12% for Terradon Riders, Ripperdactyl Riders and Cold One units", ps: "Lord's army" },
                { icon: "movement", description: "Speed: +10% for Terradon Riders, Ripperdactyl Riders and Cold One units", ps: "Lord's army" },
                { icon: "ranged-damage", description: "Missile strength: +12% for Terradon Riders units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        ref: "sacredGuardian",
        name: "Sacred Guardian",
        description: "It is a great honour to direct the elite warriors who protect the Plan from calamity.",
        icon: "battle-attack",
        ranks: [
            { effects: [
                { icon: "melee", description: "Melee attack: +4 for Kroxigor, Sacred Kroxigor and Temple Guard units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "melee", description: "Melee attack: +6 for Kroxigor, Sacred Kroxigor and Temple Guard units", ps: "Lord's army" },
                { icon: "defense", description: "Melee defense: +6 for Kroxigor, Sacred Kroxigor and Temple Guard units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "melee", description: "Melee attack: +8 for Kroxigor, Sacred Kroxigor and Temple Guard units", ps: "Lord's army" },
                { icon: "defense", description: "Melee defense: +8 for Kroxigor, Sacred Kroxigor and Temple Guard units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        ref: "huntLeader",
        name: "Hunt Leader",
        description: "The most intelligent hunter tends to move swiftly up the chain of command.",
        icon: "battle-attack",
        ranks: [
            { effects: [
                { icon: "melee", description: "Melee attack: +4 for Feral Carnosaur and Dread Saurian units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "weapon-damage", description: "Weapon strength: +9% for Feral Carnosaur and Dread Saurian units", ps: "Lord's army" },
                { icon: "melee", description: "Melee attack: +6 for Feral Carnosaur and Dread Saurian units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "weapon-damage", description: "Weapon strength: +12% for Feral Carnosaur and Dread Saurian units", ps: "Lord's army" },
                { icon: "melee", description: "Melee attack: +8 for Feral Carnosaur and Dread Saurian units", ps: "Lord's army" },
            ] }
        ]
    },
    {
        ref: "beastDriver",
        name: "Beast Driver",
        description: "The largest, most aggressive creatures - usually the oldest bulls of the herd - must be directed, lest their independent spirit lead them astray.",
        icon: "battle-ranged-damage",
        ranks: [
            { effects: [
                { icon: "weapon-damage", description: "Weapon strength: +6% for Stegadon, Ancient Salamander and Bastiladon units", ps: "Lord's army" },
                { icon: "ranged-damage", description: "Missile strength: +6% for Stegadon, Ancient Salamander and Bastiladon units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "weapon-damage", description: "Weapon strength: +9% for Stegadon, Ancient Salamander and Bastiladon units", ps: "Lord's army" },
                { icon: "defense", description: "Melee defense: +6 for Stegadon, Ancient Salamander and Bastiladon units", ps: "Lord's army" },
                { icon: "ranged-damage", description: "Missile strength: +9% for Stegadon, Ancient Salamander and Bastiladon units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "weapon-damage", description: "Weapon strength: +12% for Stegadon, Ancient Salamander and Bastiladon units", ps: "Lord's army" },
                { icon: "defense", description: "Melee defense: +8 for Stegadon, Ancient Salamander and Bastiladon units", ps: "Lord's army" },
                { icon: "ranged-damage", description: "Missile strength: +12% for Stegadon, Ancient Salamander and Bastiladon units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        ref: "jungleDominion",
        name: "Jungle Dominion",
        description: "The unforgiving law of the jungle is most clear on matters of ascendancy.",
        icon: "battle-damage",
        ranks: [
            { effects: [
                { icon: "weapon-damage", description: "Weapon strength: +12% for Saurus and Temple Guards units", rank: 7, ps: "Lord's army" },
                { icon: "armor", description: "Armour: +10 for Saurus and Temple Guards units", rank: 7, ps: "Lord's army" },
                { icon: "resistance-magic", description: "Magic resistance: 15% for Saurus and Temple Guards units", rank: 7, ps: "Lord's army" }
            ] }
        ]
    },
    {
        ref: "spawnKin",
        name: "Spawn-Kin",
        description: "Braves who emerge from teh same spawning often share a deep connection - a bond which provides considerable advantages in battle.",
        icon: "battle-defense",
        ranks: [
            { effects: [
                { icon: "resistance-missile", description: "Missile resistance: 15% for Skinks, Chameleon Skinks, Red Crested Skinks, Salamander and Razordon Hunting Packs, Kroxigor and Sacred Kroxigor units", rank: 7, ps: "Lord's army" },
                { icon: "defense", description: "Melee defense: +5 for Skinks, Chameleon Skinks, Red Crested Skinks, Salamander and Razordon Hunting Packs, Kroxigor and Sacred Kroxigor units", rank: 7, ps: "Lord's army" },
                { icon: "morale", description: "Leadership: +5 for Skinks, Chameleon Skinks, Red Crested Skinks, Salamander and Razordon Hunting Packs, Kroxigor and Sacred Kroxigor units", rank: 7, ps: "Lord's army" }
            ] }
        ]
    },
    {
        ref: "soulBound",
        name: "Soul Bound",
        description: "Mount and rider, together as one at their very cores. Indivisible.",
        icon: "battle-attack",
        ranks: [
            { effects: [
                { icon: "melee", description: "Melee attack: +5 for Cold One, Terradon Riders and Ripperdactyl units", rank: 7, ps: "Lord's army" },
                { icon: "defense", description: "Melee defense: +5 for Cold One, Terradon Riders and Ripperdactyl units", rank: 7, ps: "Lord's army" },
                { icon: "resistance-missile", description: "Missile resistance: 15% for Cold One, Terradon Riders and Ripperdactyl units", rank: 7, ps: "Lord's army" }
            ] }
        ]
    },
    {
        ref: "epicentrist",
        name: "Epicentrist",
        description: "You need to be at the very centre of this pack of furious monsters to have the minutest chance of controlling their rage. Good luck!",
        icon: "battle-armor",
        ranks: [
            { effects: [
                { icon: "armor", description: "Armour: +10 for Ancient Salamander, Bastiladon, Stegadon, Feral Carnosaur and Dread Saurian units", rank: 7, ps: "Lord's army" },
                { icon: "charge", description: "Charge bonus: +12 for Ancient Salamander, Bastiladon, Stegadon, Feral Carnosaur and Dread Saurian units", rank: 7, ps: "Lord's army" },
                { icon: "morale", description: "Leadership: +5 for Ancient Salamander, Bastiladon, Stegadon, Feral Carnosaur and Dread Saurian units", rank: 7, ps: "Lord's army" }
            ] }
        ]
    },
    {
        ref: "slannForcefield",
        name: "Slann Forcefield",
        description: "The resilience of the Old Ones is channelled into an energy barrier that protects its users from the full brunt of magical attacks against them.",
        icon: "ability-slann-forcefield",
        ranks: [
            { effects: [
                { icon: "ability-rally", description: "Replaces: \"Rally!\"" },
                { icon: "ability-slann-forcefield", description: "Ability: \"Slann Forcefield\"" }
            ] }
        ],
        spell: {
            description: "Character ability",
            rarity: "uncommon",
            cooldown: "90",
            attributes: {
                type: [
                    { text: "Ward Save (Area)" },
                    { text: "Only acts on targets when in area" }
                ],
                duration: "17 seconds",
                target: [
                    { text: "Self, Ground, Ally" },
                    { text: "Affects allies in range" },
                    { text: "150m", uptick: "range" }
                ],
                effectRange: "40m",
                effects: [
                    { text: "+8", icon: "morale-character", postText: "Leadership", color: "green" },
                    { text: "+22%", icon: "resistance-ward-save", postText: "Damage Resistance", color: "green" }
                ]
            }
        }
    },
    {
        ref: "fervent",
        name: "Fervent",
        description: "Through our acts, the gods will cleanse the lands.",
        icon: "religion",
        ranks: [
            { effects: [
                { icon: "religion", description: "Untainted: +1" },
            ] },
            { effects: [
                { icon: "religion", description: "Untainted: +2" },
            ] },
            { effects: [
                { icon: "religion", description: "Untainted: +3" },
            ] }
        ]
    },
    {
        ref: "geomanticSustenance",
        name: "Geomantic Sustenance",
        description: "The power generated by the overarching Geomantic Web can also be used to nourish the Saurus on the march.",
        icon: "campaign-military-spending",
        ranks: [
            { effects: [{ icon: "coin", description: "Upkeep: -3% for all units", ps: "Lord's army" }] },
            { effects: [{ icon: "coin", description: "Upkeep: -8% for all units", ps: "Lord's army" }] },
            { effects: [{ icon: "coin", description: "Upkeep: -15% for all units", ps: "Lord's army" }] }            
        ]
    },
    {
        ref: "giftsOfTheJungle",
        name: "Gifts of the Jungle",
        description: "Life in the jungle means knowing the difference between which flora can heal and what, if ingested, will kill you.",
        icon: "campaign-replenishment",
        ranks: [
            { effects: [{ icon: "replenishment", description: "Casualty replenishment rate: +3%", ps: "Lord's army" }] },
            { effects: [{ icon: "replenishment", description: "Casualty replenishment rate: +8%", ps: "Lord's army" }] },
            { effects: [{ icon: "replenishment", description: "Casualty replenishment rate: +15%", ps: "Lord's army" }] }            
        ]
    },
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
        name: "Cascading Fire-Cloak",
        description: "A blazing aura surrounds the Pyromancer's chosen ally, shielding them with protective flame and augmenting their abilities.",
        icon: "spell-cascading-fire-cloak",
        ranks: [
            { effects: [
                { icon: "spell-cascading-fire-cloak", description: "Spell: \"Cascading Fire-Cloak\"" },
                { icon: "spell-cascading-fire-cloak", description: "Cooldown: -50 to \"Cascading Fire-Cloak\"" },
                { icon: "spell-cascading-fire-cloak", description: "Winds of Magic cost: -1 for \"Cascading Fire-Cloak\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "common",
            attributes: {
                type: "Augment",
                duration: "19 seconds",
                target: [
                    { text: "Self, Ally" },
                    { text: "200m", uptick: "range" }
                ],
                effects: [
                    { text: "+25%", icon: "icon-armor-piercing", postText: "Armor-Piercing Weapon Damage", color: "green" },
                    { text: "+24", icon: "defense-character", postText: "Melee Defense", color: "green" }
                ]
            }
        }
    },
    {
        name: "The Burning Head",
        description: "A cackling, flaming visage appears before the Wizard. With a gleeful screech, it swirls around the battlefield, immolating anything in its way.",
        icon: "spell-the-burning-head",
        ranks: [
            { effects: [
                { icon: "spell-the-burning-head", description: "Spell: \"The Burning Head Upgraded\"" },
                { icon: "spell-the-burning-head", description: "Overcast spell: \"The Burning Head Upgraded\"" },
                { icon: "spell-the-burning-head", description: "Cooldown: -30% to \"The Burning Head\"" }
            ] },
            { effects: [
                { icon: "spell-the-burning-head", description: "Overcast spell: \"The Burning Head Upgraded\"" },
                { icon: "spell-the-burning-head", description: "Cooldown: -50% to \"The Burning Head\"" },
                { icon: "spell-the-burning-head", description: "Winds of Magic cost: -2 for \"The Burning Head\"" },
                { icon: "spell-the-burning-head", description: "Winds of Magic cost: -3 for \"The Burning Head Upgraded\"" },
                { icon: "spell-the-burning-head", description: "Miscast base chance: -15% for \"The Burning Head Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "uncommon",
            cost: [16, 13],
            cooldown: "37",
            attributes: {
                type: "Wind",
                duration: "20 seconds",
                target: [
                    { text: "Ground" },
                    { text: "150m", uptick: "range" }
                ],
                cannotUseIf: "Climbing",
                cannotTargetIf: "Flying, On a wall",
                miscastChance:  {"0": "50", "1": "35"},
                effects: [
                    { text: "Increased effect area", uptick: "up-blue", color: "blue" },
                    { text: "Causes major magical & fire damage", uptick: "up-green", color: "green" },
                    { text: "Small, forward-moving area of effect", uptick: "up-green", color: "green" },
                    { text: "Strong vs. multiple units", uptick: "up-green", color: "green" },
                    { text: "Good against armor", uptick: "up-green", color: "green" }
                ],
                contact: [
                    { text: "Burnt! (10 seconds)", color: "red" },
                    { text: "-8", icon: "morale-mallus", postText: "Leadership", color: "red" }
                ]
            }
        }
    },
    {
        name: "Piercing Bolts of Burning",
        description: "A Wizard conjures a boiling ball of magical flame and hurls it at a nearby foe.",
        icon: "spell-piercing-bolts-of-burning",
        ranks: [
            { effects: [
                { icon: "spell-piercing-bolts-of-burning", description: "Spell: \"Piercing Bolts of Burning Upgraded\"" },
                { icon: "spell-piercing-bolts-of-burning", description: "Overcast spell: \"Piercing Bolts of Burning Upgraded\"" },
                { icon: "spell-piercing-bolts-of-burning", description: "Cooldown: -30% to \"Piercing Bolts of Burning\"" }
            ] },
            { effects: [
                { icon: "spell-piercing-bolts-of-burning", description: "Overcast spell: \"Piercing Bolts of Burning Upgraded\"" },
                { icon: "spell-piercing-bolts-of-burning", description: "Cooldown: -50% to \"Piercing Bolts of Burning\"" },
                { icon: "spell-piercing-bolts-of-burning", description: "Winds of Magic cost: -2 for \"Piercing Bolts of Burning\"" },
                { icon: "spell-piercing-bolts-of-burning", description: "Winds of Magic cost: -3 for \"Piercing Bolts of Burning Upgraded\"" },
                { icon: "spell-piercing-bolts-of-burning", description: "Miscast base chance: -15% for \"Piercing Bolts of Burning Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "rare",
            cost: [17, 14],
            cooldown: "47",
            attributes: {
                type: "Bombardment",
                duration: "9 seconds",
                target: [
                    { text: "Ground" },
                    { text: "200m", uptick: "range" }
                ],
                cannotUseIf: "Climbing",
                miscastChance:  {"0": "50", "1": "35"},
                effects: [
                    { text: "Increased number of missiles", icon: "icon-armor-piercing-ranged", postText: "armor-piercing damage", uptick: "up-blue", color: "blue" },
                    { text: "Wider strike area", uptick: "up-blue", color: "blue" },
                    { text: "Causes major magical & fire damage", uptick: "up-green", color: "green" },
                    { text: "Large strike area", uptick: "up-green", color: "green" },
                    { text: "Good against armor", uptick: "up-green", color: "green" },
                    { text: "Strong vs. a single unit", uptick: "up-green", color: "green" }                ]
            }
        }
    },
    {
        name: "Flame Storm",
        description: "A Wizard conjures a boiling ball of magical flame and hurls it at a nearby foe.",
        icon: "spell-flame-storm",
        ranks: [
            { effects: [
                { icon: "spell-flame-storm", description: "Overcast spell: \"Flame Storm Upgraded\"" },
                { icon: "spell-flame-storm", description: "Cooldown: -30% to \"Flame Storm\"" }
            ] },
            { effects: [
                { icon: "spell-flame-storm", description: "Overcast spell: \"Flame Storm Upgraded\"" },
                { icon: "spell-flame-storm", description: "Cooldown: -50% to \"Flame Storm\"" },
                { icon: "spell-flame-storm", description: "Winds of Magic cost: -3 for \"Flame Storm\"" },
                { icon: "spell-flame-storm", description: "Winds of Magic cost: -3 for \"Flame Storm Upgraded\"" },
                { icon: "spell-flame-storm", description: "Miscast base chance: -15% for \"Flame Storm Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "rare",
            cost: [20, 17],
            cooldown: "50",
            attributes: {
                type: "Vortex",
                target: [
                    { text: "Ground" },
                    { text: "150m", uptick: "range" }
                ],
                cannotUseIf: "Manning equipment, Climbing",
                miscastChance:  {"0": "50", "1": "35"},
                effects: [
                    { text: "Extended effect duration", uptick: "up-blue", color: "blue" },
                    { text: "Increased damage", uptick: "up-blue", color: "blue" },
                    { text: "Causes major magical & fire damage", uptick: "up-green", color: "green" },
                    { text: "Large, randomly-moving area of effect", uptick: "up-green", color: "green" },
                    { text: "Strong vs. multiple units", uptick: "up-green", color: "green" },
                    { text: "Weak vs. a single combatant", uptick: "down-red", color: "red" }
                ]
            }
        }
    },
    {
        name: "Fireball",
        description: "A Wizard conjures a boiling ball of magical flame and hurls it at a nearby foe.",
        icon: "spell-fireball",
        ranks: [
            { effects: [
                { icon: "spell-fireball", description: "Overcast spell: \"Fireball Upgraded\"" },
                { icon: "spell-fireball", description: "Cooldown: -30% to \"Fireball\"" }
            ] },
            { effects: [
                { icon: "spell-fireball", description: "Overcast spell: \"Fireball Upgraded\"" },
                { icon: "spell-fireball", description: "Cooldown: -50% to \"Fireball\"" },
                { icon: "spell-fireball", description: "Winds of Magic cost: -1 for \"Fireball\"" },
                { icon: "spell-fireball", description: "Winds of Magic cost: -2 for \"Fireball Upgraded\"" },
                { icon: "spell-fireball", description: "Miscast base chance: -15% for \"Fireball Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "common",
            cost: [9, 7],
            cooldown: "29",
            attributes: {
                type: "Magic Missile",
                target: [
                    { text: "Enemy" },
                    { text: "300m", uptick: "range" }
                ],
                cannotUseIf: "Manning equipment, Climbing",
                miscastChance:  {"0": "50", "1": "35"},
                effects: [
                    { text: "Increased", icon: "icon-armor-piercing-ranged", postText: "armor-piercing damage", uptick: "up-blue", color: "blue" },
                    { text: "Greater", icon: "icon-armor-piercing-ranged", postText: "armor-piercing explosion damage", uptick: "up-blue", color: "blue" },
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
        name: "Greater Arcane Conduit",
        description: "A strong mind is needed to channel the Winds of Magic. Those that have such a gift become arcane conduits - funnelling the magical tempest to their cause.",
        icon: "spell-arcane-conduit",
        ranks: [
            { effects: [{ icon: "character", description: "Passive ability: \"Greater Arcane Conduit\"" }] }
        ],
        spell: {
            description: "Character ability",
            rarity: "rare",
            attributes: {
                type: "Augment of the Winds",
                duration: "Constant",
                target: "Self",
                effects: [
                    { text: "Improved", icon: "magic-pool", postText: "power recharge rate", uptick: "up-green", color: "green" },
                    { text: "Increase to", icon: "magic-replenish", postText: "power reserves", uptick: "up-green", color: "green" }
                ]
            }
        }
    },
    {
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