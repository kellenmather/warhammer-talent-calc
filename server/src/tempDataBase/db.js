exports.skills = [
    {
        ref: "sunburstStandardOfHexoatl",
        name: "Sunburst Standard of Hexoatl",
        description: "This radiant golden totem generates a golden globe of power that shields those within from harm.",
        icon: "sunburst-standard-of-hexoatl",
        quest: true,
        ranks: [
            { effects: [
                { icon: "sunburst-standard-of-hexoatl", description: "Passive ability: \"Sunburst Standard of Hexoatl\"" }
            ] }
        ],
        spell: {
            description: "Item",
            rarity: "legendary",
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
                    { text: "12%", icon: "resistance-missile", postText: "Missile Resistance", color: "green" },
                    { text: "+9", icon: "defense-character", postText: "Melee Defense", color: "green" }
                ]
            }
        }
    },
    {
        ref: "cobraMaceOfMazdamundi",
        name: "Cobra Mace of Mazdamundi",
        description: "This mace has a life of its own; it strikes out with lightning speed to bite enemy weapons before a blow is struck.",
        icon: "item-weapon",
        quest: true,
        ranks: [
            { effects: [
                { icon: "item-ability", description: "Armor: +15" },
                { icon: "melee-character", description: "Melee attack: +15" },
                { icon: "damage", description: "Weapon strength: +12%" },
                { icon: "poison", description: "Enables poison attacks" },
                { icon: "religion", description: "Untainted: +5", ps: "local province" }
            ] }
        ]
    },
    {
        ref: "reveredSpearOfTlanxla",
        name: "Revered Spear of Tlanxla",
        description: "An unspeakably powerful weapon once said to have been wielded by the warlike Old One diety, Tlanxla.",
        icon: "item-weapon",
        quest: true,
        ranks: [
            { effects: [
                { icon: "public-order", description: "Public order: +3", ps: "all provinces" },
                { icon: "bonus-vs-large-character", description: "Bonus vs. Large: +12" },
                { icon: "charge-character", description: "Charge bonus: +30" },
                { icon: "melee-character", description: "Melee attack: +7" },
                { icon: "damage", description: "Weapon strength: +12%" },
                { icon: "magical-attacks", description: "Enables magical attacks" }
            ] }
        ]
    },
    {
        ref: "handOfGods",
        name: "Hand of Gods",
        description: "Bolts of cleansing energy fly from the spellcaster's hands, searing evil wherever they strike.",
        icon: "item-enchanted",
        quest: true,
        ranks: [
            { effects: [
                { icon: "armor-piercing-character", description: "Armour-piercing weapon damage: +10" },
                { icon: "defense-character", description: "Melee Defense: +6" },
                { icon: "melee-character", description: "Melee attack: +3" },
                { icon: "resistance-ward-save", description: "Ward save: 5%" },
                { icon: "income", description: "Income from post-battle loot: +20%" },
                { icon: "spell-shems-burning-gaze", description: "Bound spell: \"Hand of Gods\"" }
            ] }
        ],
        spell: {
            description: "Item",
            rarity: "legendary",
            cooldown: "120",
            uses: 2,
            attributes: {
                type: "Magic Missiles",
                target: [
                    { text: "Enemy" },
                    { text: "250m", uptick: "range" },
                ],
                effects: [
                    { text: "Causes major magical & fire damage", uptick: "up-green", color: "green" },
                    { text: "Good against armour", uptick: "up-green", color: "green" },
                    { text: "Strong vs. a single combatant", uptick: "up-green", color: "green" },
                    { text: "Good against large combatants", uptick: "up-green", color: "green" },
                    { text: "Good from a high angle", uptick: "up-green", color: "green" }
                ]
            }
        }
    },
    {
        ref: "bladeOfTheSerpentsTongue",
        name: "Blade of the Serpent's Tongue",
        description: "This sacrificial dagger was crafted by the most skilled of Chaqua's Skink artificers and enchanted to drip with deadly venom!",
        icon: "item-weapon",
        quest: true,
        ranks: [
            { effects: [
                { icon: "armor-piercing-character", description: "Armour-piercing weapon damage: +15" },
                { icon: "damage", description: "Weapon strength: +14%" },
                { icon: "religion", description: "Untainted: +2", ps: "local province" },
                { icon: "ability-sword", description: "Passive ability: \"Blade of the Serpent's Tongue\"" }
            ] }
        ],
        spell: {
            description: "Weapon",
            rarity: "legendary",
            attributes: {
                type: [
                    { text: "Augment (Area)" },
                    { text: "Only acts on targets when in area" }
                ],
                duration: "Constant",
                target: [
                    { text: "Self" },
                    { text: "Affects allies in range", uptick: "range" },
                ],
                effectRange: "40m",
                effects: [
                    { text: "+8%", icon: "charge-character", postText: "Charge Bonus", color: "green" }
                ],
                imbued: [
                    { icon: "icon-poison", postText: "Poison! (10 seconds)", color: "red" },
                    { text: "-20%", icon: "icon-armor-piercing-ranged", postText: "Armour-Piercing Missile Damage", color: "red" },
                    { text: "-20%", icon: "icon-ranged-damage-base", postText: "Base Missile Damage", color: "red" },
                    { text: "-20%", icon: "icon-damage-base", postText: "Base Weapon Damage", color: "red" },
                    { text: "-24%", icon: "movement-character", postText: "Speed", color: "red" },
                    { text: "-20%", icon: "icon-armor-piercing", postText: "Armour-Piercing Weapon Damage", color: "red" }
                ]
            }
        }
    },
    {
        ref: "plaqueOfSotek",
        name: "Plaque of Sotek",
        description: "Upon this stone plaque is inscribed an extract of the Prophecy of Sotek that grants additional warding to Tehenhauin.",
        icon: "item-enchanted",
        quest: true,
        ranks: [
            { effects: [
                { icon: "public-order", description: "Public order: +3", ps: "all provinces" },
                { icon: "magic", description: "Winds of Magic starting amount: +15" },
                { icon: "ability-arcane", description: "Passive ability: \"Plaque of Sotek\"" }
            ] }
        ],
        spell: {
            description: "Item",
            rarity: "legendary",
            attributes: {
                type: "Ward Save",
                target: "Self",
                activeIf: "casting",
                effects: [
                    { text: "Plaque of Sotek (21 seconds)", color: "green" },
                    { text: "+22%", icon: "resistance-ward-save", postText: "Damage Resistance", color: "green" },
                    { text: "+12", icon: "morale-character", postText: "Damage Resistance", color: "green" }
                ]
            }
        }
    },
    {
        ref: "bladeOfTheAncientSkies",
        name: "Blade of the Ancient Skies",
        description: "Carved from the dense, fossilised jawbone of a monstrous, sky-borne predator that became extinct during ages long past.",
        icon: "item-weapon",
        quest: true,
        ranks: [
            { effects: [
                { icon: "public-order", description: "Public order: +3", ps: "all provinces" },
                { icon: "morale", description: "Leadership: +10", ps: "Lord's army" },
                { icon: "ability-sword", description: "Passive ability: \"Blade of the Ancient Skies\"" }
            ] }
        ],
        spell: {
            description: "Weapon",
            rarity: "legendary",
            attributes: {
                type: "Augment",
                duration: "Constant",
                target: "Self",
                activeIf: "Flying",
                effects: [
                    { text: "+18%", icon: "icon-base-damage", postText: "Base Weapon Damage", color: "green" },
                    { text: "+16", icon: "melee-character", postText: "Melee Attack", color: "green" },
                    { text: "+18%", icon: "icon-armor-piercing", postText: "Armour-Piercing Weapon Damage", color: "green" }
                ]
            }
        }
    },
    {
        ref: "maskOfHeavens",
        name: "Mask of Heavens",
        description: "Its wearer will become one with the mighty Terradons, who will then move in tandem as a single, mighty consciousness.",
        icon: "item-enchanted",
        quest: true,
        ranks: [
            { effects: [
                { icon: "campaign-movement", description: "Campaign movement range: +10%" },
                { icon: "attribute-fatigue-immune", description: "Attribute: Perfect Vigour" },
                { icon: "ability-enchanted", description: "Passive ability: \"Mask of Heavens\"" }
            ] }
        ],
        spell: {
            description: "Weapon",
            rarity: "legendary",
            attributes: {
                type: [
                    { text: "Augment (Area)" },
                    { text: "Only acts on targets when in area" }
                ],
                duration: "Constant",
                target: [ 
                    { text: "Self" },
                    { text: "Only acts on targets when in area" },
                ],
                targetIf: "Flying unit",
                effectRange: "55m",
                effects: [
                    { text: "+23", icon: "armor-character", postText: "Armour", color: "green" },
                    { text: "+9", icon: "defense-character", postText: "Melee Defense", color: "green" }
                ]
            }
        }
    },
    {
        ref: "goldenTributes",
        name: "Golden Tributes",
        description: "Thought of as a jungle-spirit made flesh, the Wanderer is treated with great deference and adorned with ceremonial tokens.",
        icon: "item-enchanted",
        quest: true,
        ranks: [
            { effects: [
                { icon: "defense-character", description: "Melee defense: +5" },
                { icon: "resistance-ward-save", description: "Ward save: 5%" },
                { icon: "ability-arcane", description: "Passive ability: \"Golden Tributes\"" }
            ] }
        ],
        spell: {
            description: "Item",
            rarity: "legendary",
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
                effects: [
                    { icon: "attribute-fatigue-immune", postText: "Perfect Vigour", uptick: "up-green", color: "green" }
                ]
            }
        }
    },
    {
        ref: "theOghamShard",
        name: "The Ogham Shard",
        description: "The shard is a fractured piece of one of the original Ogham Waystones, whose mystical properties may keep Chaos at bay.",
        icon: "item-talisman",
        quest: true,
        ranks: [
            { effects: [
                { icon: "resistance-magic", description: "Magic resistancer: 25%" },
                { icon: "replenishment", description: "Casualty replenishment rate: +5%", ps: "Lord's army" },
                { icon: "religion", description: "Untainted: +3", ps: "local provinces" }
            ] }
        ]
    },
    {
        ref: "maceOfUlumak",
        name: "Mace of Ulumak",
        description: "It is believed that the Old Ones themselves guide the hand of he who wields the Mace of Ulumak.",
        icon: "item-weapon",
        quest: true,
        ranks: [
            { effects: [
                { icon: "resistance-physical", description: "Physical resistance: 18%" },
                { icon: "ability-mace-of-ulumak", description: "Ability: \"Mace of Ulumak\"" }
            ] }
        ],
        spell: {
            description: "Weapon",
            rarity: "legendary",
            cooldown: "120",
            attributes: {
                type: "Augment",
                duration: "24 seconds",
                target: "Self",
                effects: [
                    { text: "+50%", icon: "icon-armor-piercing", postText: "Armour-Piercing Weapon Damage", color: "green" },
                    { text: "+40", icon: "melee-character", postText: "Melee Attack", color: "green" },
                    { text: "+50%", icon: "icon-base-damage", postText: "Base Weapon Damage", color: "green" }
                ]
            }
        }
    },
    {
        ref: "theShieldOfAeons",
        name: "The Shield of Aeons",
        description: "A dozen Kroxigor were needed to haul this matchless shield to the mainland and generations of Skink artisans laboured to carve it.",
        icon: "item-armour",
        quest: true,
        ranks: [
            { effects: [
                { icon: "armor-character", description: "Armour: +15" },
                { icon: "resistance-fire", description: "Fire resistance: 30%" },
                { icon: "ability-shield-of-aeons", description: "Ability: \"Shield of Aeons\"" }
            ] }
        ],
        spell: {
            description: "Item",
            rarity: "legendary",
            cooldown: "120",
            attributes: {
                type: [
                    { text: "Augment (Area)" },
                    { text: "Only acts on targets in area" }
                ],
                duration: "23 seconds",
                target: [
                    { text: "Self" },
                    { text: "Affects allies in range" }
                ],
                effectRange: "40m",
                effects: [
                    { text: "+60", icon: "armor-character", postText: "Armour", color: "green" },
                    { icon: "charge-reflector", postText: "Expert Charge Defense", uptick: "up-green", color: "green" }
                ]
            }
        }
    },
    {
        ref: "tougherThanHeSeems",
        name: "Tougher Than He Seems",
        description: "Make no mistake - in most cases, a Master Assassin's training is quite literally a baptism of fire.",
        icon: "character-health",
        ranks: [
            { effects: [{ icon: "health-character", description: "Hit points: +10%" }] }
        ]
    },
    {
        ref: "ratFu",
        name: "Rat-Fu",
        description: "By its very nature, being good at killing requires that you are equally adept at not dying.",
        icon: "character-agent",
        ranks: [
            { effects: [
                { icon: "agent", description: "Hero self-defense: +15% chance of wounding aggressors" },
                { icon: "agent", description: "Enemy Hero action success chance: -15%", ps: "enemy characters in region" }
            ] }
        ]
    },
    {
        ref: "bonebreaker",
        name: "Bonebreaker",
        description: "A specially-engineered bread of Rat Ogre, the Bonebreaker has a braced platform strapped or bolted to its back for carrying a skaven Warlord to battle.",
        icon: "rat-ogre",
        ranks: [
            { effects: [{ icon: "mount", description: "Mount: Bonebreaker" }] }
        ]
    },
    {
        ref: "doomFlayer",
        name: "Doom-Flayer",
        description: "A motorised ball of whirling, razor-sharp, eviscerating death, designed to plough through enemy lines with hellish vigour.",
        icon: "doom-flayer",
        ranks: [
            { effects: [{ icon: "mount", description: "Mount: Doom-Flayer" }] }
        ]
    },
    {
        ref: "doomwheel",
        name: "Doomwheel",
        description: "Those opponents who smile at first sight of this powerful war machine clearly have no idea what's about to hit them.",
        icon: "doom-wheel",
        ranks: [
            { effects: [{ icon: "mount", description: "Mount: Doomwheel" }] }
        ]
    },
    {
        ref: "screamingBell",
        name: "Screaming Bell",
        description: "An unholy battle altar dedicated to the Great Horned Rat, its ominous tolling strikes awe into evil Skaven hearts and fear into their opponents.",
        icon: "screaming-bell",
        ranks: [
            { effects: [{ icon: "mount", description: "Mount: Screaming Bell" }] }
        ]
    },
    {
        ref: "warpstoneTokens",
        name: "Warpstone Tokens",
        description: "As an aid to spellcasting, they are peerless. It is highly dangerous, of course, but a sure-fire route to limitless power.",
        icon: "character-magic",
        ranks: [
            { effects: [
                { icon: "magic-character", description: "Miscast base chance: +5%", color: "red" },
                { icon: "magic", description: "Winds of Magic power reserve: +13" }
            ] }
        ]
    },
    {
        ref: "sneaky",
        name: "Sneaky",
        description: "Furtive, scheming, sly, cunning, underhand, devious, conniving, double-dealing, and sneaky - valuable traits if you wish to stay alive!",
        icon: "character-ward-save",
        ranks: [
            { effects: [{ icon: "resistance-missile", description: "Missile resistance: 10%" }] }
        ]
    },
    {
        ref: "tricksy",
        name: "Tricksy",
        description: "All Skaven are unprincipled and untrustworthy by their fould natures. However, this is rarely a disadvantage in the face of the enemy.",
        icon: "character-ward-save",
        ranks: [
            { effects: [{ icon: "resistance-magic", description: "Magic resistance: 10%" }] }
        ]
    },
    {
        ref: "warpstoneWeapon",
        name: "Warpstone Weapon",
        description: "If you've got the Warptokens and the contacts, you can get all mannor of fine, murderous armaments crafted to fit claw or tail perfectly.",
        icon: "character-damage",
        ranks: [
            { effects: [
                { icon: "magic-character", description: "Miscast base chance: -15%" },
                { icon: "magic", description: "Winds of Magic power reserve: +15" }
            ] }
        ]
    },
    {
        ref: "lifeIsCheap",
        name: "Life is Cheap",
        description: "It should be no surprise that a race without a shred of honour or decency between them have even less regard for each other's lives.",
        icon: "life-is-cheap",
        ranks: [
            { effects: [
                { icon: "replenishment", description: "Casualty replenishment rate: +10%", ps: "Lord's army" },
                { icon: "coin", description: "Upkeep: -33% for Skavenslaves units", ps: "Lord's army" },
                { icon: "armor", description: "Armour: +5 for Skavenslaves units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "replenishment", description: "Casualty replenishment rate: +20%", ps: "Lord's army" },
                { icon: "coin", description: "Upkeep: -50% for Skavenslaves units", ps: "Lord's army" },
                { icon: "armor", description: "Armour: +10 for Skavenslaves units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        ref: "dastardlyDevious",
        name: "Dastardly & Devious",
        description: "The best-laid plans - those involving murder with poison and knives - must remain secret, under pain of a hideous death involving poison and knives...",
        icon: "dastardly-devious",
        ranks: [
            { effects: [
                { icon: "subterfuge", description: "Assassinate action: Additional 8% success chance", ps: "Heroes in local region" },
                { icon: "ambush", description: "Ambush success chance: +15%", ps: "Lord's army" },
                { icon: "treasury", description: "Hero action cost: -33%", ps: "Heroes in local region" }
            ] },
            { effects: [
                { icon: "subterfuge", description: "Assassinate action: Additional 12% success chance", ps: "Heroes in local region" },
                { icon: "ambush", description: "Ambush success chance: +25%", ps: "Lord's army" },
                { icon: "treasury", description: "Hero action cost: -50%", ps: "Heroes in local region" }
            ] }
        ]
    },
    {
        ref: "ravenousExpansion",
        name: "Ravenous Expansion",
        description: "If you wish to expand into new territory, it helps to head-up a voracious, colonising force that breed like... er, oh!",
        icon: "ravenous-expansion",
        ranks: [
            { effects: [
                { icon: "growth", description: "Growth: +2", ps: "all provinces" },
                { icon: "income", description: "Income from Settlement buildings: +2%", ps: "all regions" },
                { icon: "religion-skaven", description: "Skaven corruption: +2", ps: "local province" },
                { icon: "religion-skaven", description: "Skaven corruption in adjacent provinces: +1" }
            ] },
            { effects: [
                { icon: "growth", description: "Growth: +4", ps: "all provinces" },
                { icon: "income", description: "Income from Settlement buildings: +4%", ps: "all regions" },
                { icon: "religion-skaven", description: "Skaven corruption: +4", ps: "local province" },
                { icon: "religion-skaven", description: "Skaven corruption in adjacent provinces: +2" }
            ] }
        ]
    },
    {
        ref: "voiceOfTheHornedRat",
        name: "Voice of the Horned Rat",
        description: "All the hate, envy, and malice uttered in prayer each day, returned a thousand-fold.",
        icon: "character",
        ranks: [
            { effects: [
                { icon: "character", description: "Leadership aura size: +20%" },
                { icon: "morale-character", description: "Character's aura leadership effect: +10" }
            ] }
        ]
    },
    {
        ref: "envoyOfTheCouncil",
        name: "Envoy of the Council",
        description: "Skaven society is a tyranny moderated by assassination; this one is its ambassador.",
        icon: "character-diplomacy",
        ranks: [
            { effects: [{ icon: "diplomacy", description: "Diplomatic relations: +10 with Skaven" }] }
        ]
    },
    {
        ref: "expertAmbusher",
        name: "Expert Ambusher",
        description: "Kill-Surprise!",
        icon: "character-ambush",
        ranks: [
            { effects: [
                { icon: "character", description: "Leadership aura size: +50% during ambushes" },
                { icon: "ambush", description: "Ambush success chance: +15%", ps: "Lord's army" }
            ] }
        ]
    },
    {
        ref: "stabInTheBack",
        name: "Stab in the Back",
        description: "The Skaven are renowned for their cheap shots and sucker punches, but the Assassins of Eshin are masters of both!",
        icon: "character-speed",
        ranks: [
            { effects: [
                { icon: "movement-character", description: "Speed: +10%" },
                { icon: "ranged-damage-character", description: "Missile strength: +15%" }
            ] }
        ]
    },
    {
        ref: "concealmentBombs",
        name: "Concealment Bombs",
        description: "When a bomb is smashed, a dark smoke curls out, concealing those who wish to hide and choking everyone else.",
        icon: "ability-concealment-bombs",
        ranks: [
            { effects: [{ icon: "character", description: "Ability: \"Concealment bombs\" for Night Runners and Gutter Runners units", ps: "Lord's army" }] }
        ]
    },
    {
        ref: "shurikenJitsu",
        name: "Shuriken-Jitsu",
        description: "Beware the concealed weaponry of those trained in the art of delivering death from the shadows...",
        icon: "character-ranged-damage",
        ranks: [
            { effects: [{ icon: "ranged-damage", description: "Missile strength: +10% for Night Runners and Gutter Runners units", ps: "Lord's army" }] }
        ]
    },
    {
        ref: "cracklebombs",
        name: "Cracklebombs",
        description: "A curious combination of far east invention and Skryre ingenuity, the Cracklebomb contains staggering explosive power in a small package.",
        icon: "ability-cracklebombs",
        ranks: [
            { effects: [{ icon: "ability-cracklebombs", description: "Ability: \"Cracklebomb\"" }] }
        ],
        spell: {
            description: "Character ability",
            cooldown: "90",
            uses: 3,
            rarity: "uncommon",
            attributes: {
                type: "Magic Missile",
                target: [
                    { text: "Enemy" },
                    { text: "70m", uptick: "range" },
                ],
                cannotUseIf: "Manning equipment, Engaged in melee, Climbing",
                projectileRange: "70m",
                effects: [
                    { text: "Causes magical & fire damage", uptick: "up-green", color: "green" },
                    { text: "Powerful explosion", uptick: "up-green", color: "green" }
                ]
            }
        }
    },
    {
        ref: "powerOverload",
        name: "Power Overload",
        description: "Warp-energy is pulsing - through his veins a charge is racing. On a scale of one to ten, this one's operating on eleven!",
        icon: "character-cooldown",
        ranks: [
            { effects: [{ icon: "magic-cooldown", description: "Cooldown: -10% to all spells" }] }
        ]
    },
    {
        ref: "specimenCollector",
        name: "Specimen Collector",
        description: "This one harvests what he needs, forever on a quest to acquire the 'resources' made necessary by his research.",
        icon: "character-replenishment",
        ranks: [
            { effects: [
                { icon: "public-order", description: "Public order: -2", ps: "local enemy province" },
                { icon: "replenishment", description: "Casualty replenishment rate: +10%", ps: "Lord's army" }
            ] }
        ]
    },
    {
        ref: "vehicleEngineer",
        name: "Vehicle Engineer",
        description: "Although in a somewhat ad-hoc fashion, he nevertheless fixes things as he goes, managing to avoid more than a few scrapes in the process already.",
        icon: "character-experience",
        ranks: [
            { effects: [
                { icon: "treasury", description: "Recruitment duration: -1 for Doom-Flayers and Doomwheel units", ps: "Lord's army" },
                { icon: "experience", description: "Recruit rank: +1 for Doom-Flayer and Doomwheel units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        ref: "weaponsEngineer",
        name: "Weapons Engineer",
        description: "If you could once kill with it, this one can make it kill again, more and better.",
        icon: "character-military-spending",
        ranks: [
            { effects: [{ icon: "coin", description: "Upkeep: -15% for Warplock Jezzail, Ratling Gun and Warpfire Thrower Weapon Team units" }] }
        ]
    },
    {
        ref: "constructionEngineer",
        name: "Construcction Engineer",
        description: "This one's natural talents lend themselves to the technical side of construction, ensuring vital buildings stay mostly upright when they are required to do so.",
        icon: "character-construction",
        ranks: [
            { effects: [
                { icon: "treasury", description: "Construction cost: -15% for all buildings", ps: "local region" },
                { icon: "construction", description: "Construction time: -15% for all buildings", ps: "local province" }
            ] }
        ]
    },
    {
        ref: "brassOrb",
        name: "Brass Orb",
        description: "Possession of this orb enables the user to inexorably drag the foe into a turbulent vortex of pain and death.",
        icon: "ability-brass-orb",
        ranks: [
            { effects: [{ icon: "ability-brass-orb", description: "Ability: \"Brass Orb\"" }] }
        ],
        spell: {
            description: "Character ability",
            cooldown: "90",
            uses: 3,
            rarity: "uncommon",
            attributes: {
                type: "Vortex",
                duration: "13 seconds",
                target: [
                    { text: "Ground" },
                    { text: "200m", uptick: "range" },
                ],
                effects: [
                    { text: "Causes minor", postText: "magical damage", icon: "icon-magic", uptick: "up-green", color: "green" },
                    { text: "Huge, stationary area of effect", uptick: "up-green", color: "green" },
                    { text: "Can disrupt unit formation", uptick: "up-green", color: "green" },
                    { text: "Strong vs. multiple units", uptick: "up-green", color: "green" },
                    { text: "Good against armour", uptick: "up-green", color: "green" }
                ]
            }
        }
    },
    {
        ref: "tailWeapon",
        name: "Tail Weapon",
        description: "Whether by attachment or mutation, something nasty and spiky on your tail has got to bring no little advantage in battle.",
        icon: "character-attack",
        ranks: [
            { effects: [
                { icon: "melee-character", description: "Melee attack: +3" },
                { icon: "damage", description: "Weapon strength: +4%" }
            ] }
        ]
    },
    {
        ref: "augmentedWeapon",
        name: "Augmented Weapon",
        description: "This blade is attached to a Warp-generator that channels crackling energy along the weapon.",
        icon: "character-damage",
        ranks: [
            { effects: [
                { icon: "melee-character", description: "Melee attack: +7" },
                { icon: "damage", description: "Weapon strength: +5%" },
                { icon: "magical-attacks", description: "Enables magical attacks" }
            ] },
            { effects: [
                { icon: "melee-character", description: "Melee attack: +15" },
                { icon: "damage", description: "Weapon strength: +10%" },
                { icon: "magical-attacks", description: "Enables magical attacks" }
            ] }
        ]
    },
    {
        ref: "warpForgedArmour",
        name: "Warp-Forged Armour",
        description: "A Warpstone-enchanted breastplate and a thick steel helmet are useful to protect the wearer from shrapnel.",
        icon: "character-armor",
        ranks: [
            { effects: [
                { icon: "armor-character", description: "Armour: +15" },
                { icon: "resistance-missile", description: "Missile resistance: 5%" }
            ] },
            { effects: [
                { icon: "armor-character", description: "Armour: +30" },
                { icon: "resistance-missile", description: "Missile resistance: 10%" }
            ] }
        ]
    },
    {
        ref: "fearRepressionStimuli",
        name: "Fear Repression Stimuli",
        description: "There's nothing that cannot be conquered, even perfidious, duplicitous, treacherous fear.",
        icon: "character-morale",
        ranks: [
            { effects: [
                { icon: "morale-character", description: "Leadership: +8" }
            ] },
            { effects: [
                { icon: "morale-character", description: "Character's aura leadership effect: +5" },
                { icon: "morale-character", description: "Leadership: +8" }
            ] }
        ]
    },
    {
        ref: "ruinDecay",
        name: "Ruin & Decay",
        description: "As you might expect, the forces of order are repelled by the Skaven and their myriad disgusting, disease-ridden ways.",
        icon: "character-damage",
        ranks: [
            { effects: [
                { icon: "damage", description: "Weapon strength: +2%" },
                { icon: "damage", description: "Weapon strength: +10% when fighting against Lizardmen and Dwarfs" }
            ] },
            { effects: [
                { icon: "damage", description: "Weapon strength: +5%" },
                { icon: "damage", description: "Weapon strength: +10% when fighting against Lizardmen, Dwarfs, High Elves, Greenskins and Men" }
            ] }
        ]
    },
    {
        ref: "verminousValour",
        name: "Verminous Valour",
        description: "There is a sense in which the Skaven's natural cowardice can appear to be the very pinnacle of honourable conduct.",
        icon: "ability-verminous-valour",
        ranks: [
            { effects: [{ icon: "ability-verminous-valour", description: "Ability: \"Verminous Valour\"" }] }
        ],
        spell: {
            description: "Character ability",
            cooldown: "60",
            rarity: "common",
            attributes: {
                type: "Augment",
                duration: "17 seconds",
                target: "Self",
                effects: [
                    { text: "Explosion does not affect friendly troops", uptick: "up-green", color: "green" },
                    { text: "Allows chance ot escape melee", uptick: "up-green", color: "green" },
                    { text: "Poor against large combatants", uptick: "down-red", color: "red" },
                    { text: "+24%", icon: "movement-character", postText: "Speed", color: "green" },
                    { text: "+8", icon: "morale-character", postText: "Leadership", color: "green" }
                ]
            }
        }
    },
    {
        ref: "warpLightning",
        name: "Warp Lightning",
        description: "Dire greenish-black lightning strikes at the Skaven's chittered command.",
        icon: "spell-warp-lightning",
        ranks: [
            { effects: [
                { icon: "spell-warp-lightning", description: "Overcast spell: \"Warp Lightning\"" },
                { icon: "spell-warp-lightning", description: "Cooldown: -30% to \"Warp Lightning\"" }
            ] },
            { effects: [
                { icon: "spell-warp-lightning", description: "Overcast spell: \"Warp Lightning Upgraded\"" },
                { icon: "spell-warp-lightning", description: "Cooldown: -50% to \"Warp Lightning\"" },
                { icon: "spell-warp-lightning", description: "Winds of Magic cost: -1 for \"Warp Lightning\"" },
                { icon: "spell-warp-lightning", description: "Winds of Magic cost: -2 for \"Warp Lightning Upgraded\"" },
                { icon: "spell-warp-lightning", description: "Miscast base chance: -15% for \"Warp Lightning Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            cooldown: "30",
            cost: [11, 9],
            rarity: "common",
            attributes: {
                type: "Bombardment",
                duration: "5 seconds",
                target: [
                    { text: "Ground" },
                    { text: "200m", uptick: "range" }
                ],
                cannotUseIf: "Climbing",
                miscastChance:  {"0": "50", "1": "35"},
                effects: [
                    { text: "Increased number of missiles", uptick: "up-blue", color: "blue" },
                    { text: "Causes moderate", icon: "icon-magic", postText: "magical damage", uptick: "up-green", color: "green" },
                    { text: "Medium strike area", uptick: "up-green", color: "green" },
                    { text: "Good against armour", uptick: "up-green", color: "green" },
                    { text: "Strong vs. multiple combatants", uptick: "up-green", color: "green" },
                    { text: "Weak vs. a single combatant", uptick: "down-red", color: "red" }
                ]
            }
        }
    },
    {
        ref: "muskOfFear",
        name: "Musk of Fear",
        description: "As the Lore of Ruin siphons the Winds of MAgic, an unholy despair takes hold on the surface dwellers... the rats lurk in the shadows.",
        icon: "spell-musk-of-fear",
        ranks: [
            { effects: [{ icon: "spell-musk-of-fear", description: "Passive ability: \"Musk of Fear\"" }] }
        ],
        spell: {
            description: "Lore attribute",
            rarity: "common",
            attributes: {
                type: "Hex (Area)",
                duration: "Constant",
                target: [
                    { text: "Around self" },
                    { text: "Affects enemies in range" }
                ],
                activeIf: "Casting",
                effectRange: "Map-wide",
                effects: [
                    { text: "Musk of Fear (8 seconds)", color: "red" },
                    { text: "-12", icon: "melee-character", postText: "Melee Attack", color: "red" },
                    { text: "-4", icon: "morale-character", postText: "Leadership", color: "red" }
                ]
            }
        }
    },
    {
        ref: "howlingWarpgale",
        name: "Howling Warpgale",
        description: "The caster gestures twitchingly to the skies and fierce gales swirl about, making flight impossible.",
        icon: "spell-howling-warpgale",
        ranks: [
            { effects: [
                { icon: "spell-howling-warpgale", description: "Overcast spell: \"Howling Warpgale\"" },
                { icon: "spell-howling-warpgale", description: "Cooldown: -30% to \"Howling Warpgale\"" }
            ] },
            { effects: [
                { icon: "spell-howling-warpgale", description: "Overcast spell: \"Howling Warpgale Upgraded\"" },
                { icon: "spell-howling-warpgale", description: "Cooldown: -50% to \"Howling Warpgale\"" },
                { icon: "spell-howling-warpgale", description: "Winds of Magic cost: -1 for \"Howling Warpgale\"" },
                { icon: "spell-howling-warpgale", description: "Winds of Magic cost: -2 for \"Howling Warpgale Upgraded\"" },
                { icon: "spell-howling-warpgale", description: "Miscast base chance: -15% for \"Howling Warpgale Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            cooldown: "30",
            cost: [9, 7],
            rarity: "common",
            attributes: {
                type: [
                    { text: "Hex (Area)" },
                    { text: "Only acts on targets when in area" }
                ],
                duration: "28 seconds",
                target: [
                    { text: "Ground, Enemy" },
                    { text: "Affects enemies in range" },
                    { text: "100m", uptick: "range" }
                ],
                cannotUseIf: "Climbing",
                targetIf: "Flying unit",
                miscastChance:  {"0": "50", "1": "35"},
                effects: [
                    { text: "Extended effect duration", uptick: "up-blue", color: "blue" },
                    { text: "Cannot move", uptick: "down-red", color: "red" }
                ]
            }
        }
    },
    {
        ref: "deathFrenzy",
        name: "Death Frenzy",
        description: "Gesticulating wildly, the caster gifts an allied unit with a rabid, frothing need to attack and consume the foe!",
        icon: "spell-death-frenzy",
        ranks: [
            { effects: [
                { icon: "spell-death-frenzy", description: "Spell: \"Death Frenzy\"" },
                { icon: "spell-death-frenzy", description: "Overcast spell: \"Death Frenzy Upgraded\"" },
                { icon: "spell-death-frenzy", description: "Cooldown: -30% to \"Death Frenzy\"" }
            ] },
            { effects: [
                { icon: "spell-death-frenzy", description: "Overcast spell: \"Death Frenzy Upgraded\"" },
                { icon: "spell-death-frenzy", description: "Cooldown: -50% to \"Death Frenzy\"" },
                { icon: "spell-death-frenzy", description: "Winds of Magic cost: -2 for \"Death Frenzy\"" },
                { icon: "spell-death-frenzy", description: "Winds of Magic cost: -3 for \"Death Frenzy Upgraded\"" },
                { icon: "spell-death-frenzy", description: "Miscast base chance: -15% for \"Death Frenzy Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            cooldown: "43",
            cost: [12, 9],
            rarity: "uncommon",
            attributes: {
                type: [
                    { text: "Augment" },
                    { text: "Instantly affects targets in area" }
                ],
                duration: "28 seconds",
                target: [
                    { text: "Self, Ground, Ally" },
                    { text: "Affects allies in range" },
                    { text: "200m", uptick: "range" }
                ],
                cannotUseIf: "Climbing",
                effectRange: "40m",
                miscastChance:  {"0": "50", "1": "35"},
                effects: [
                    { text: "Added effect area", uptick: "up-blue", color: "blue" },
                    { text: "+30%", icon: "icon-damage-base", postText: "Base Weapon Damage", color: "green" },
                    { text: "+24", icon: "melee-character", postText: "Melee Attack", color: "green" },
                    { postText: "Immune to Psychology", icon: "attribute-psychology", uptick: "up-green", color: "green" }
                ]
            }
        }
    },
    {
        ref: "scorch",
        name: "Scorch",
        description: "The sorcerer thrusts his paws into the ground summoning forth a great gout of green flame.",
        icon: "spell-scorch",
        ranks: [
            { effects: [
                { icon: "spell-scorch", description: "Spell: \"Scorch\"" },
                { icon: "spell-scorch", description: "Overcast spell: \"Scorch Upgraded\"" },
                { icon: "spell-scorch", description: "Cooldown: -30% to \"Scorch\"" }
            ] },
            { effects: [
                { icon: "spell-scorch", description: "Overcast spell: \"Scorch Upgraded\"" },
                { icon: "spell-scorch", description: "Cooldown -50% to \"Scorch\"" },
                { icon: "spell-scorch", description: "Winds of Magic cost: -2 for \"Scorch\"" },
                { icon: "spell-scorch", description: "Winds of Magic cost: -3 for \"Scorch Upgraded\"" },
                { icon: "spell-scorch", description: "Miscast base chance: -15% for \"Scorch Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            cooldown: "43",
            cost: [11, 8],
            rarity: "uncommon",
            attributes: {
                type: "Breath",
                duration: "12 seconds",
                target: [
                    { text: "Ground" },
                    { text: "450m", uptick: "range" }
                ],
                cannotUseIf: "Climbing",
                cannotTargetIf: "On a wall",
                effectRange: "40m",
                miscastChance:  {"0": "50", "1": "35"},
                effects: [
                    { text: "Extended cast range", uptick: "up-blue", color: "blue" },
                    { text: "Causes major magical & fire damage", uptick: "up-green", color: "green" },
                    { text: "Long, thin, expanding, tear-shaped attack", uptick: "up-green", color: "green" },
                    { text: "Strong vs. multiple units", uptick: "up-green", color: "green" },
                    { text: "Weak vs. a single combatant", uptick: "down-red", color: "red" },
                    { text: "Weak against armour", uptick: "down-red", color: "red" }
                ]
            }
        }
    },
    {
        ref: "cracksCall",
        name: "Cracks Call",
        description: "With the incantation invoked, the Skaven stamps his horrible, rattish foot, causing the very ground to split asunder.",
        icon: "spell-cracks-call",
        ranks: [
            { effects: [
                { icon: "spell-cracks-call", description: "Spell: \"Cracks Call\"" },
                { icon: "spell-cracks-call", description: "Overcast spell: \"Cracks Call Upgraded\"" },
                { icon: "spell-cracks-call", description: "Cooldown: -30% to \"Cracks Call\"" }
            ] },
            { effects: [
                { icon: "spell-cracks-call", description: "Overcast spell: \"Cracks Call Upgraded\"" },
                { icon: "spell-cracks-call", description: "Cooldown -50% to \"Cracks Call\"" },
                { icon: "spell-cracks-call", description: "Winds of Magic cost: -3 for \"Cracks Call\"" },
                { icon: "spell-cracks-call", description: "Winds of Magic cost: -4 for \"Cracks Call Upgraded\"" },
                { icon: "spell-cracks-call", description: "Miscast base chance: -15% for \"Cracks Call Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            cooldown: "52",
            cost: [20, 16],
            rarity: "rare",
            attributes: {
                type: "Wind",
                duration: "10 seconds",
                target: [
                    { text: "Ground" },
                    { text: "150m", uptick: "range" }
                ],
                cannotUseIf: "Climbing",
                cannotTargetIf: "Flying, On a wall",
                miscastChance:  {"0": "50", "1": "35"},
                effects: [
                    { text: "Increased damage", uptick: "up-blue", color: "blue" },
                    { text: "Causes major", icon: "icon-magic", postText: "magical damage", uptick: "up-green", color: "green" },
                    { text: "Medium, forward-moving area of effect", uptick: "up-green", color: "green" },
                    { text: "Strong vs. multiple units", uptick: "up-green", color: "green" },
                    { text: "Weak vs. a single combatant", uptick: "down-red", color: "red" }
                ]
            }
        }
    },
    {
        ref: "flensingRuin",
        name: "Flensing Ruin",
        description: "Green ribbons of Warp-Energy tear the flesh from the target's bones. It's very nasty to behold - as nasty as it sounds, in fact - but far nastier, of course, if you're the recipient...",
        icon: "spell-flensing-ruin",
        ranks: [
            { effects: [
                { icon: "spell-flensing-ruin", description: "Spell: \"Flensing Ruin\"" },
                { icon: "spell-flensing-ruin", description: "Overcast spell: \"Flensing Ruin Upgraded\"" },
                { icon: "spell-flensing-ruin", description: "Cooldown: -30% to \"Flensing Ruin\"" }
            ] },
            { effects: [
                { icon: "spell-flensing-ruin", description: "Overcast spell: \"Flensing Ruin Upgraded\"" },
                { icon: "spell-flensing-ruin", description: "Cooldown -50% to \"Flensing Ruin\"" },
                { icon: "spell-flensing-ruin", description: "Winds of Magic cost: -3 for \"Flensing Ruin\"" },
                { icon: "spell-flensing-ruin", description: "Winds of Magic cost: -4 for \"Flensing Ruin Upgraded\"" },
                { icon: "spell-flensing-ruin", description: "Miscast base chance: -15% for \"Flensing Ruin Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            cooldown: "52",
            cost: [22, 18],
            rarity: "uncommon",
            attributes: {
                type: [
                    { text: "Direct Damage (Area)" },
                    { text: "Only acts on targets when in area" }
                ],
                duration: "20 seconds",
                target: [
                    { text: "Ground, Enemy" },
                    { text: "Affects enemies in range" },
                    { text: "100m", uptick: "range" }
                ],
                effectRange: "30m",
                miscastChance:  {"0": "50", "1": "35"},
                effects: [
                    { text: "Extended effect duration", uptick: "up-blue", color: "blue" },
                    { text: "Causes damage to combatants", uptick: "up-green", color: "green" },
                    { text: "Strong vs. a single combatant", uptick: "up-green", color: "green" },
                    { text: "Chance opponent will resist damage", uptick: "down-red", color: "red" },
                    { text: "Weak vs. a single unit", uptick: "down-red", color: "red" },
                    { text: "-30", icon: "armor-character", postText: "Armour", color: "red" }
                ]
            }
        }
    },
    {
        ref: "theDreadedThirteenth",
        name: "The Dreaded Thirteenth",
        description: "A terrible bell chimes from afar. By its thirteenth toll, Skaven have been brought forth through a hole in reality.",
        icon: "spell-the-dreaded-thirteenth",
        ranks: [
            { effects: [
                { icon: "spell-the-dreaded-thirteenth", description: "Spell: \"The Dreaded Thirteenth\"" },
                { icon: "spell-the-dreaded-thirteenth", description: "Overcast spell: \"The Dreaded Thirteenth Upgraded\"" }
            ] },
            { effects: [
                { icon: "spell-the-dreaded-thirteenth", description: "Spell: \"The Dreaded Thirteenth\"" },
                { icon: "spell-the-dreaded-thirteenth", description: "Overcast spell: \"The Dreaded Thirteenth Upgraded\"" },
                { icon: "spell-the-dreaded-thirteenth", description: "Cooldown -50% to \"The Dreaded Thirteenth\"" },
                { icon: "spell-the-dreaded-thirteenth", description: "Cooldown -50% to \"The Dreaded Thirteenth Upgraded\"" },
                { icon: "spell-the-dreaded-thirteenth", description: "Winds of Magic cost: -3 for \"The Dreaded Thirteenth\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            cooldown: [52, 26],
            cost: [20, 17],
            rarity: "rare",
            attributes: {
                type: "Explosion",
                duration: "13 seconds",
                target: [
                    { text: "Ground" },
                    { text: "200m", uptick: "range" }
                ],
                cannotTargetIf: "Climbing or manning equipment or on a platform",
                effects: [
                    { text: "Summons a unit of Stormvermin (Sword & Shield)", uptick: "up-green", color: "green" },
                    { text: "Huge explosion area", uptick: "up-green", color: "green" },
                    { text: "Can disrupt unit formation", uptick: "up-green", color: "green" },
                    { text: "Strong vs. multiple units", uptick: "up-green", color: "green" },
                    { text: "Summoned units degrade over time", uptick: "down-red", color: "red" }
                ]
            }
        }
    },
    {
        ref: "packLeader",
        name: "Pack Leader",
        description: "To rise above the rank and file, to claw one's way above the mire and the filth, takes a certain, superior breed of Skaven.",
        icon: "battle-attack",
        ranks: [
            { effects: [
                { icon: "melee", description: "Melee attack: +4 for Clanrats units", ps: "Lord's army" },
            ] },
            { effects: [
                { icon: "morale", description: "Leadership: +3 for Clanrats units", ps: "Lord's army" },
                { icon: "melee", description: "Melee attack: +6 for Clanrats units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "morale", description: "Leadership: +6 for Clanrats units", ps: "Lord's army" },
                { icon: "melee", description: "Melee attack: +8 for Clanrats units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        ref: "infiltrator",
        name: "Infiltrator",
        description: "Having to hide, for an extended period, in a dark, dank recess, in order to entrap and kill your target encourages lateral thinking.",
        icon: "battle-ranged-damage",
        ranks: [
            { effects: [
                { icon: "reload-time", description: "Reload time reduction: +5% for Night Runners and Gutter Runners units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "movement", description: "Speed: +7% for Night Runners and Gutter Runners units", ps: "Lord's army" },
                { icon: "reload-time", description: "Reload time reduction: +7% for Night Runners and Gutter Runners units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "movement", description: "Speed: +10% for Night Runners and Gutter Runners units", ps: "Lord's army" },
                { icon: "reload-time", description: "Reload time reduction: +10% for Night Runners and Gutter Runners units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        ref: "blastmaster",
        name: "Blastmaster",
        description: "Knowing exactly where and when to strike is essential when fielding fiendish, potentially battle-winning plague-weapons.",
        icon: "battle-ammo",
        ranks: [
            { effects: [
                { icon: "ammo", description: "Ammunition: +8% for Skaven Weapon Team units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "ammo", description: "Ammunition: +12% for Skaven Weapon Team units", ps: "Lord's army" },
                { icon: "reload-time", description: "Reload time reduction: +7% for Skaven Weapon Team units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "ammo", description: "Ammunition: +20% for Skaven Weapon Team units", ps: "Lord's army" },
                { icon: "reload-time", description: "Reload time reduction: +10% for Skaven Weapon Team units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        ref: "respectedFeared",
        name: "Respected & Feared",
        description: "Is it better to be respected or feared? What sort of question is that... why, both of course!",
        icon: "battle-damage",
        ranks: [
            { effects: [
                { icon: "weapon-damage", description: "Weapon strength: +6% for Stormvermin, Death Runners, Plague Monks and Eshin Triads units", ps: "Lord's army" },
            ] },
            { effects: [
                { icon: "weapon-damage", description: "Weapon Strength: +9% for Stormvermin, Death Runners, Plague Monks and Eshin Triads units", ps: "Lord's army" },
                { icon: "melee", description: "Melee attack: +6 for Stormvermin, Death Runners, Plague Monks and Eshin Triads units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "weapon-damage", description: "Weapon Strength: +12% for Stormvermin, Death Runners, Plague Monks and Eshin Triads units", ps: "Lord's army" },
                { icon: "melee", description: "Melee attack: +8 for Stormvermin, Death Runners, Plague Monks and Eshin Triads units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        ref: "moulderKnowledge",
        name: "Moulder Knowledge",
        description: "This one has seen the hideous deformities created by Clan Moulder firsthand and now fancies himself a dab hand with a needle and thread...",
        icon: "battle-charge",
        ranks: [
            { effects: [
                { icon: "charge", description: "Charge bonus: +6 for Rat Ogres and Hellpit Abomination units", ps: "Lord's army" },
            ] },
            { effects: [
                { icon: "movement", description: "Speed: +7% for Rat Ogres and Hellpit Abomination units", ps: "Lord's army" },
                { icon: "charge", description: "Charge bonus: +9 for Rat Ogres and Hellpit Abomination units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "movement", description: "Speed: +10% for Rat Ogres and Hellpit Abomination units", ps: "Lord's army" },
                { icon: "charge", description: "Charge bonus: +12 for Rat Ogres and Hellpit Abomination units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        ref: "engineeringSkill",
        name: "Engineering Skill",
        description: "This one's intimate knowledge of the inner workings of Skaven machinery enables him to improve their efficiency on the battlefield.",
        icon: "battle-ranged-damage",
        ranks: [
            { effects: [
                { icon: "movement", description: "Speed: +3% for Warp-Grinders units", ps: "Lord's army" },
                { icon: "charge", description: "Charge bonus: +6% for Doomwheel and Doom-Flayers units", ps: "Lord's army" },
                { icon: "reload-time", description: "Reload time reduction: +5% for Doomwheels, Plagueclaw Catapult and Warp Lightning Cannon units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "movement", description: "Speed: +7% for Warp-Grinders units", ps: "Lord's army" },
                { icon: "armor", description: "Armour: +6 for Doomwheel, Doom-Flayers and Warp-Grinders units", ps: "Lord's army" },
                { icon: "charge", description: "Charge bonus: +9% for Doomwheel and Doom-Flayers units", ps: "Lord's army" },
                { icon: "ammo", description: "Ammunition: +12% for Doomwheels, Plagueclaw Catapult and Warp Lightning Cannon units", ps: "Lord's army" },
                { icon: "reload-time", description: "Reload time reduction: +7% for Doomwheels, Plagueclaw Catapult and Warp Lightning Cannon units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "movement", description: "Speed: +12% for Warp-Grinders units", ps: "Lord's army" },
                { icon: "armor", description: "Armour: +12 for Doomwheel, Doom-Flayers and Warp-Grinders units", ps: "Lord's army" },
                { icon: "charge", description: "Charge bonus: +12% for Doomwheel and Doom-Flayers units", ps: "Lord's army" },
                { icon: "ammo", description: "Ammunition: +20% for Doomwheels, Plagueclaw Catapult and Warp Lightning Cannon units", ps: "Lord's army" },
                { icon: "reload-time", description: "Reload time reduction: +10% for Doomwheels, Plagueclaw Catapult and Warp Lightning Cannon units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        ref: "whipSmart",
        name: "Whip-Smart",
        description: "The wise commander considers the lash a dear friend - so much more than a motivational tool to encourage correctness in spirit and behaviour.",
        icon: "battle-attack",
        ranks: [
            { effects: [
                { icon: "melee", description: "Melee attack: +5 for Skavenslaves, Clanrats and Stormvermin units", rank: 7, ps: "Lord's army" },
                { icon: "resistance-missile", description: "Missile resistance: 10% for Skavenslaves, Clanrats and Stormvermin units", rank: 7, ps: "Lord's army" },
                { icon: "morale", description: "Leadership: +5 for Skavenslaves, Clanrats and Stormvermin units", rank: 7, ps: "Lord's army" }
            ] }
        ]
    },
    {
        ref: "gutterWise",
        name: "Gutter-Wise",
        description: "Early years spent in the gutter both prepares the ambitious rat for power and schools him in the dirtier, more cut-throat ways of war.",
        icon: "battle-range",
        ranks: [
            { effects: [
                { icon: "accuracy", description: "Range: +15% for Gutter Runners and Night Runners units", rank: 7, ps: "Lord's army" },
                { icon: "morale", description: "Leadership: +5 for Gutter Runners and Night Runners units", rank: 7, ps: "Lord's army" },
                { icon: "movement", description: "Speed: +15% for Gutter Runners and Night Runners units", rank: 7, ps: "Lord's army" }
            ] }
        ]
    },
    {
        ref: "warpSmart",
        name: "Warp-Smart",
        description: "This one knows just what to say to 'encourage' the very best work from his underling Warp-smiths and technicians.",
        icon: "battle-ranged-damage",
        ranks: [
            { effects: [
                { icon: "bonus-vs-small", description: "Bonus vs. Infantry: +5 for Doomwheel, Doom-Flayers and Warp-Grinders units", rank: 7, ps: "Lord's army" },
                { icon: "ranged-damage", description: "Missile strength: +12% for Skaven Weapon Team, Doomwheel, Plagueclaw Catapult and Warp Lightning Cannon units", rank: 7, ps: "Lord's army" },
                { icon: "resistance-magic", description: "Magic resistance: 15% for Skaven Weapon Team, Doom-Flayer, Doomwheel, Plagueclaw Catapult and Warp Lightning Cannon units", rank: 7, ps: "Lord's army" },
                { icon: "morale", description: "Leadership: +5 for Skaven Weapon Team, Doom-Flayer, Doomwheel, Plagueclaw Catapult and Warp Lightning Cannon units", rank: 7, ps: "Lord's army" }
            ] }
        ]
    },
    {
        ref: "mutagenicElixirs",
        name: "Mutagenic Elixirs",
        description: "Potions infused with Warpstone tranmogrify the not-always-willing testbed subjects; those who survive the process emerge stronger and better in every way.",
        icon: "battle-ward-save",
        ranks: [
            { effects: [
                { icon: "resistance-physical", description: "Physical resistance: 15% for Rat Ogres, Hell Pit Abominations and Plague Monks units", rank: 7, ps: "Lord's army" },
                { icon: "armor", description: "Armour: +10 for Rat Ogres, Hell Pit Abominations and Plague Monks units", rank: 7, ps: "Lord's army" },
                { icon: "morale", description: "Leadership: +5 for Rat Ogres, Hell Pit Abominations and Plague Monks units", rank: 7, ps: "Lord's army" }
            ] }
        ]
    },
    {
        ref: "dictatorial",
        name: "Dictatorial",
        description: "Keeping on top of things with an iron fist prevents Skavendom from becoming too much of a degenerate mess.",
        icon: "campaign-untainted",
        ranks: [
            { effects: [{ icon: "religion", description: "Untainted: +1", ps: "when in own region" }] },
            { effects: [{ icon: "religion", description: "Untainted: +2", ps: "when in own region" }] },
            { effects: [{ icon: "religion", description: "Untainted: +3", ps: "when in own region" }] }
        ]
    },
    {
        ref: "corruptive",
        name: "Corruptive",
        description: "Naturally, rats get in everywhere - even the tiniest opening presents little obstacle - spreading their disease and corruption everywhere they can.",
        icon: "campaign-skaven-corruption",
        ranks: [
            { effects: [{ icon: "religion-skaven", description: "Skaven corruption: +1", ps: "when in enemy region" }] },
            { effects: [{ icon: "religion-skaven", description: "Skaven corruption: +2", ps: "when in enemy region" }] },
            { effects: [{ icon: "religion-skaven", description: "Skaven corruption: +3", ps: "when in enemy region" }] }
        ]
    },
    {
        ref: "mineAllMine",
        name: "Miiine All Miiine!",
        description: "When making corpses of your foes, leave nothing of value for their kin to recover.",
        icon: "campaign-military-spending",
        ranks: [
            { effects: [
                { icon: "item-ability", description: "Post battle chance of stealing a magic item: +5%" },
                { icon: "income", description: "Income from post-battle loot: +10%" }
            ] },
            { effects: [
                { icon: "item-ability", description: "Post battle chance of stealing a magic item: +10%" },
                { icon: "income", description: "Income from post-battle loot: +20%" }
            ] },
            { effects: [
                { icon: "item-ability", description: "Post battle chance of stealing a magic item: +15%" },
                { icon: "income", description: "Income from post-battle loot: +30%" }
            ] }
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
    }
]