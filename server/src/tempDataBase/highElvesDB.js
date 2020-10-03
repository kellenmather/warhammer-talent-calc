exports.skills = [
    {
        name: "Heart of Avelorn",
        description: "Though seemingly fragile, this well-worn heirloom has seen a thousand battles and will see many more",
        icon: "item-enchanted",
        quest: true,
        ranks: [
            { effects: [
                { icon: "character", description: "Leadership aura size: +25%" },
                { icon: "morale-character", description: "Character's aura leadership effect: +5" },
                { icon: "defense-character", description: "Melee defense: +5" },
                { icon: "resistance-magic", description: "Magic resistance: +18%" },
                { icon: "ability-heart-of-avelorn", description: "Passive ability: \"Heart of Avelorn\"" }
            ] }
        ],
        spell: {
            description: "Item",
            rarity: "legendary",
            uses: 1,
            attributes: {
                type: "Regeneration",
                duration: "Constant",
                target: "Self",
                disabledIf: [{ icon: "health-character", postText: "Hit Points greater than 20%" }],
                effects: [
                    { text: "Burst of life-saving", icon: "hp", postText: "hit points", uptick: "up-green", color: "green" },
                    { text: "Restores up to", icon: "hp", postText: "1872 hit points", uptick: "up-green", color: "green" },
                    { text: "Heart of Avelorn (1 seconds)" }
                ]
            }
        }
    },
    {
        name: "Dragon Armour of Aenarion",
        description: "Forged in Vaul's Anvil, worn by Aenarion until his death, and only a few of Ulthuan's gloried heroes since.",
        icon: "item-armour",
        quest: true,
        ranks: [
            { effects: [
                { icon: "armor-character", description: "Armor: +15" },
                { icon: "resistance-fire", description: "Fire resistance: 25%" },
                { icon: "resistance-physical", description: "Physical resistance: 10%" },
                { icon: "resistance-ward-save", description: "Ward save: 10%" },
                { icon: "agent", description: "Enemy Hero action success chance: -10%" },
                { icon: "wound-time", description: "Wound recovery time: -1" } 
            ] }
        ]
    },
    {
        name: "Sunfang",
        description: "This ancient sword, forged to slay Daemons in the ealriest days of Aenarion's rule, burns with the captured fire of the sun.",
        icon: "item-weapon",
        quest: true,
        ranks: [
            { effects: [
                { icon: "public-order", description: "Public order: +3", ps: "all provinces" },
                { icon: "armor-piercing-character", description: "Armour-piercing weapon damage: +30" },
                { icon: "damage", description: "Weapon strength: +10%" },
                { icon: "magical-attacks", description: "Enables magical attacks" },
                { icon: "flaming-attacks", description: "Enables flaming attacks" },
                { icon: "ability-sunfang", description: "Ability: \"Sunfang\"" }
            ] }
        ],
        spell: {
            description: "Weapon",
            rarity: "legendary",
            cooldown: "120",
            attributes: {
                type: "Breath",
                duration: "17 seconds",
                target: [
                    { text: "Ground" },
                    { text: "100m", uptick: "range" }
                ],
                cannotUseIf: "Climbing",
                cannotTargetIf: "On a wall",
                rechargeIf: "Engaged in melee",
                effects: [
                    { text: "Causes major magical & fire damage", uptick: "up-green", color: "green" },
                    { text: "Expanding tear-shaped attack", uptick: "up-green", color: "green" },
                    { text: "Can disrupt unit formation", uptick: "up-green", color: "green" },
                    { text: "Strong vs. multiple units", uptick: "up-green", color: "green" },
                    { text: "Weak vs. a single combatant", uptick: "down-red", color: "red" },
                    { text: "Weak against armour", uptick: "down-red", color: "red" }
                ]
            }
        }
    },
    {
        name: "Star Lance",
        description: "Legend has it that the Star Lance strikes with the wrath of a Star Dragon, and cannot be unmade while the Drakes still live upon Ulthuan.",
        icon: "item-weapon",
        quest: true,
        ranks: [
            { effects: [
                { icon: "movement-character", description: "Speed: +15%" },
                { icon: "bonus-vs-large-character", description: "Bonus vs. Large: +10" },
                { icon: "charge", description: "Charge bonus: +5%", ps: "Lord's army" },
                { icon: "ability-star-lance", description: "Ability: \"Star Lance\"" }
            ] }
        ],
        spell: {
            description: "Weapon",
            rarity: "legendary",
            cooldown: "120",
            attributes: {
                type: "Augment",
                duration: "29 seconds",
                target: "Self",
                imbues: [{icon: "icon-fire", postText: "Fire Damage"}],
                effects: [
                    { text: "+25%", icon: "icon-armor-piercing", postText: "Armour-Piercing Weapon Damage", color: "green" },
                    { text: "+20%", icon: "movement-character", postText: "Charge Speed", color: "green" },
                    { text: "+50%", icon: "charge-character", postText: "Charge Bonus", color: "green" }
                ],
                imbued: [
                    { icon: "icon-flammable", postText: "Flammable! (20 seconds)", color: "red" },
                    { text: "+22% Weakness to", icon: "icon-fire", postText: "Fire Damage", color: "red" }
                ]
            }
        }
    },
    {
        name: "Armour of Caledor",
        description: "Donned by the masters of the House of Caledor, this ensorcelled armour has endured over four thousand years of battles.",
        icon: "item-armour",
        quest: true,
        ranks: [
            { effects: [
                { icon: "morale-character", description: "Character's aura leadership effect: +10" },
                { icon: "resistance-ward-save", description: "Ward save: 10%" },
                { icon: "armor-character", description: "Armour: +20" },
                { icon: "vigour", description: "Vigour loss reduction: -33%" },
                { icon: "ability-armour-of-caledor", description: "Ability: \"Armour of Caledor\"" }
            ] }
        ],
        spell: {
            description: "Item",
            rarity: "legendary",
            uses: 3,
            cooldown: "180",
            attributes: {
                type: "Augment",
                duration: "20 seconds",
                target: "Self",
                effects: [
                    { text: "Restores up to", icon: "hp", postText: "1000 Hit Points", uptick: "up-green", color: "green" },
                    { text: "+100%", icon: "fatigue", postText: "Vigour", color: "green" },
                    { text: "-120", icon: "icon-cooldown-2", postText: "Ability Recharge (seconds)", color: "green" },
                    { text: "Cannot move", uptick: "down-red" }
                ]
            }
        }
    },
    {
        name: "Stone of Midnight",
        description: "This jewel was originally gifted to Morathi by Aenarion, before it was stolen by Anar; it cloaks the wearer in shadow.",
        icon: "item-talisman",
        quest: true,
        ranks: [
            { effects: [
                { icon: "resistance-ward-save", description: "Ward save: +17%" },
                { icon: "ability-talisman", description: "Passive ability: \"Stone of Midnight\"" }
            ] }
        ],
        spell: {
            description: "Item",
            rarity: "legendary",
            attributes: {
                type: [
                    { text: "Ward Save (Area)" },
                    { text: "Only acts on targets when in area" }
                ],
                duration: "Constant",
                target: [
                    { text: "Self" },
                    { text: "Affects allies in range" }
                ],
                effectRange: "55m",
                effects: [
                    { text: "+22%", icon: "resistance-missile", postText: "Missile Resistance", color: "green" }
                ]
            }
        }
    },
    {
        name: "The Shadow Crown",
        description: "Symbol of the true ruler of Nagarythe, the Shadow Crown is a simple silver circlet set with a single diamond.",
        icon: "item-enchanted",
        quest: true,
        ranks: [
            { effects: [
                { icon: "public-order", description: "Public order: +5", ps: "local province" },
                { icon: "ambush", description: "Ambush success chance: +10%", ps: "Lord's army" },
                { icon: "ability-enchanted", description: "Passive ability: \"The Shadow Crown\"" }
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
                effectRange: "55m",
                effects: [
                    { text: "Ability range 70m", uptick: "up-green", color: "green" },
                    { text: "+5", icon: "defense-character", postText: "Melee Defense", color: "green" },
                    { text: "+18%", icon: "movement-character", postText: "Speed", color: "green" }
                ]
            }
        }
    },
    {
        name: "The Moonbow",
        description: "The deadly Moonbow was handed to Alith Anar by the goddess Lileath herself.",
        icon: "item-weapon",
        quest: true,
        ranks: [
            { effects: [
                { icon: "accuracy-character", description: "Range: +15" },
                { icon: "ammo-character", description: "Ammunition: +15%" },
                { icon: "ranged-damage-character", description: "Missile strength: +10%" },
                { icon: "magical-attacks", description: "Enables magical attacks" },
                { icon: "ability-moonbow", description: "Ability: \"The Moonbow\"" }
            ] }
        ],
        spell: {
            description: "Weapon",
            rarity: "legendary",
            cooldown: "120",
            uses: 2,
            attributes: {
                type: "Magic Missile",
                target: [
                    { text: "Enemy" },
                    { text: "300m", uptick: 'range' }
                ],
                effectRange: "300m",
                effects: [
                    { text: "Causes", icon: "icon-armor-piercing", postText: "armour-piercing damage", uptick: "up-green", color: "green" },
                    { text: "Powerful Explosion", uptick: "up-green", color: "green" },
                    { text: "Strong vs. a single unit", uptick: "up-green",color: "green" },
                    { text: "Effective at long range", uptick: "up-green",color: "green" }
                ]
            }
        }
    },
    {
        name: "Talisman of Hoeth",
        description: "This finely wrought medallion allows its earer a measure of the original Warden's magical knowledge to aid in the guardianship of Yvresse.",
        icon: "item-talisman",
        quest: true,
        ranks: [
            { effects: [
                { icon: "magic-character", description: "Enables advanced High Magic" },
                { icon: "magic-character", description: "Miscast base chance: -20%" },
                { icon: "magic", description: "Winds of Magic power reserve: +20" },
                { icon: "spell-hand-of-glory", description: "Winds of Magic cost: -2 for \"Hand of Glory\"" },
                { icon: "spell-hand-of-glory", description: "Winds of Magic cost: -2 for \"Hand of Glory Upgraded\"" },
            ] }
        ]
    },
    {
        name: "Helm of Yvresse",
        description: "The ceremonial crown of he who protects Yvresse's ancient metropolis is an inspirational symbol of dogged determination.",
        icon: "item-armour",
        quest: true,
        ranks: [
            { effects: [
                { icon: "public-order", description: "Public order: +5", ps: "local province" },
                { icon: "armor-character", description: "Armour: +25" },
                { icon: "morale", description: "Leadership: +5%", ps: "Lord's army" },
                { icon: "ability-armour-of-caledor", description: "Ability: \"Helm of Yvresse\"" }
            ] }
        ],
        spell: {
            description: "Item",
            rarity: "legendary",
            cooldown: "120",
            attributes: {
                type: "Augment",
                duration: "17 seconds",
                target: [
                    { text: "Self, Ally" },
                    { text: "50m", uptick: "range" },
                ],
                effects: [
                    { text: "Entities cannot die while ability is active", uptick: "up-green", color: "green" },
                    { text: "Unbreakable", uptick: "up-green", color: "green" }
                ]
            }
        }
    },
    {
        name: "Fangsword of Eltharion",
        description: "This rune-encrusted longsword has been passed down through Eltharion's family for generations, bestowing unto him the zeal of his forefathers.",
        icon: "item-weapon",
        quest: true,
        ranks: [
            { effects: [
                { icon: "movement-character", description: "Speed: +15%" },
                { icon: "bonus-vs-small-character", description: "Bonus vs. Infantry: +10" },
                { icon: "siege", description: "Enemy siege holdout time: -4 (minimum 1 turn)" },
                { icon: "ability-fangsword-of-eltharion", description: "Ability: \"Fangsword of Eltharion\"" }
            ] }
        ],
        spell: {
            description: "Weapon",
            rarity: "legendary",
            cooldown: "120",
            attributes: {
                type: "Augment",
                duration: "31 seconds",
                target: "Self",
                imbues: [{icon: "icon-magic", postText: "Magical Damage"}],
                effects: [
                    { text: "+25%", icon: "icon-armor-piercing", postText: "Armour-Piercing Weapon Damage", color: "green" },
                    { text: "+44%", icon: "resistance-physical", postText: "Physical Resistance", color: "green" }
                ]
            }
        }
    },
    {
        name: "Scroll of Hoeth",
        description: "Though seemingly fragile, this well-worn heirloom has seen a thousand battles and will see many more.",
        icon: "item-enchanted",
        quest: true,
        ranks: [
            { effects: [
                { icon: "resistance-magic", description: "Magic resistance: 15%" },
                { icon: "magic-cooldown", description: "Cooldown: -20% to all spells" },
                { icon: "ability-scroll-of-hoeth", description: "Ability: \"Scroll of Hoeth\"" }
            ] }
        ],
        spell: {
            description: "Item",
            rarity: "legendary",
            cooldown: "120",
            attributes: {
                type: "Hex of the Winds",
                duration: "32 seconds",
                target: [
                    { text: "Enemy" },
                    { text: "100m", uptick: "range" }
                ],
                effects: [
                    { text: "Greatly reduced", icon: "magic-replenish", postText: "power recharge rate", uptick: "down-red", color: "red" },
                    { text: "+30", icon: "icon-cooldown-2", postText: "Ability Recharge (seconds)", color: "red" }
                ]
            }
        }
    },
    {
        name: "Moon Staff of Lileath",
        description: "The Moon Staff is imbued with the immortal power of the Goddess Lileath, eternally youthful daughter of Isha.",
        icon: "item-arcane",
        quest: true,
        ranks: [
            { effects: [
                { icon: "magic-character", description: "Miscast base chance: -20%" },
                { icon: "magic", description: "Winds of Magic power reserve: +18" },
                { icon: "spell-regrowth", description: "Winds of Magic power cost: -3 for \"Regrowth\"" },
                { icon: "spell-regrowth", description: "Winds of Magic power cost: -3 for \"Regrowth Upgraded\"" }
            ] }
        ]
    },
    {
        name: "War Crown of Saphery",
        description: "Seldom seen outside the walls of the White Tower, the War Crown was given to Teclis by the former High Loremaster and holds great power.",
        icon: "item-armour",
        quest: true,
        ranks: [
            { effects: [
                { icon: "magic", description: "Winds of Magic power reserve: +18" },
                { icon: "resistance-ward-save", description: "Ward save: 10%" },
                { icon: "magic-cooldown", description: "Cooldown: -30% to all spells" },
                { icon: "wizard", description: "Unlocks Hero recruitment: Mage", ps: "all provinces" },
                { icon: "wizard", description: "Hero capacity: +1 for Mages" },
                { icon: "wizard", description: "Hero recruit rank: +2 for Mages", ps: "all provinces" }
            ] }
        ]
    },
    {
        name: "Sword of Teclis",
        description: "This sword, created by Teclis, is charged with crackling energy that rends apart those struck by its shining blade.",
        icon: "item-weapon",
        quest: true,
        ranks: [
            { effects: [
                { icon: "armor-piercing-character", description: "Armour-piercing weapon damage: +40" },
                { icon: "defense-character", description: "Melee defense: +10" },
                { icon: "resistance-missile", description: "Missile resistance: 20%" },
                { icon: "spell-chain-lightning", description: "Winds of Magic power cost: -3 for \"Chain Lightning\"" },
                { icon: "ability-fangsword-of-eltharion", description: "Ability: \"Sword of Teclis\"" }
            ] }
        ],
        spell: {
            description: "Weapon",
            rarity: "legendary",
            cooldown: "120",
            attributes: {
                type: "Augment",
                duration: "30 seconds",
                target: "Self",
                effects: [
                    { text: "Great increase to", icon: "magic-pool", postText: "power reserves", uptick: "up-green", color: "green" },
                    { text: "Greatly impoved", icon: "magic-replenish", postText: "power recharge rate", uptick: "up-green", color: "green" }
                ]
            }
        }
    },
    {
        name: "Stave of Avelorn",
        description: "The symbol of Alarielle's rule of Averlorn is an ancient heirloom passed from one Everqueen to the next.",
        icon: "item-arcane",
        quest: true,
        ranks: [
            { effects: [
                { icon: "magic", description: "Winds of Magic power reserve: +8" },
                { icon: "magic", description: "Winds of Magic starting amount: +10" },
                { icon: "ability-stave-of-avelorn", description: "Ability: \"Stave of Avelorn\"" }
            ] }
        ],
        spell: {
            description: "Item",
            rarity: "legendary",
            cooldown: "60",
            uses: 1,
            attributes: {
                type: "Augment",
                duration: "40 seconds",
                target: "Self",
                effects: [
                    { text: "Greatly impoved", icon: "magic-replenish", postText: "power recharge rate", uptick: "up-green", color: "green" },
                    { text: "-100% Miscast Chance", color: "green" }
                ]
            }
        }
    },
    {
        name: "Shieldstone of Isha",
        description: "As old as Ulthuan itself, the Shieldstone pulses with warding and protective energies.",
        icon: "item-talisman",
        quest: true,
        ranks: [
            { effects: [
                { icon: "defense-character", description: "Melee defense: +10" },
                { icon: "resistance-ward-save", description: "Ward save: 5%" },
                { icon: "ability-talisman", description: "Passive ability: \"Shieldstone of Isha\"" }
            ] }
        ],
        spell: {
            description: "Item",
            rarity: "legendary",
            attributes: {
                type: [
                    { text: "Ward Save (Area)" },
                    { text: "Only acts on targets when in area" }
                ],
                duration: "Constant",
                target: [
                    { text: "Self" },
                    { text: "Affects allies in range" }
                ],
                effectRange: "40m",
                effects: [
                    { text: "+12%", icon: "resistance-physical", postText: "Physical Resistance", color: "green" }
                ]
            }
        }
    },
    {
        name: "Star of Avelorn",
        description: "A diadem of ithilmar with a radiant gem set within it, said to be a star plucked from the heavens.",
        icon: "item-talisman",
        quest: true,
        ranks: [
            { effects: [
                { icon: "character", description: "Leadership aura size: +35%" },
                { icon: "morale-character", description: "Character's aura leadership effect: +10" },
                { icon: "replenishment", description: "Casualty replenishment rate: +5%", ps: "Lord's army" },
                { icon: "ability-star-of-avelorn", description: "Ability: \"Star of Avelorn\"" }
            ] }
        ],
        spell: {
            description: "Item",
            rarity: "legendary",
            cooldown: "120",
            uses: 2,
            attributes: {
                type: [
                    { text: "Regeneration (Area)" },
                    { text: "Only acts on targets when in area" }
                ],
                duration: "27 seconds",
                target: [
                    { text: "Self, Ground, Ally" },
                    { text: "Affects allies in range (max: 3)" },
                    { text: "200m", uptick: "range" }
                ],
                cannotUseIf: "Manning equipment, Climbing",
                cannotTargetIf: "On a wall",
                effectRange: "15m",
                effects: [
                    { text: "Restores up to", icon: "hp", postText: "1080 Hit Points", uptick: "up-green", color: "green" }
                ]
            }
        }
    },
    {
        name: "Lion's Pelt",
        description: "Apelt of pure white fur blessed by the Everqueen and harvested by the great Elven hero, Alastar the Hunter.",
        icon: "item-armour",
        quest: true,
        ranks: [
            { effects: [
                { icon: "armor-character", description: "Armour: +10" },
                { icon: "resistance-ward-save", description: "Ward save: 15%" }
            ] }
        ]
    },
    {
        name: "Elven Steed",
        description: "The best of all horse breeds found anywehre in the wrold, Elven steeds are noble, intelligent, graceful, and swift.",
        icon: "elven-steed",
        ranks: [
            { effects: [{ icon: "mount", description: "Mount: Elven Steed" }] }
        ]
    },
    {
        name: "Ithilmar Chariot",
        description: "Excellent Elven chariots, barded with priceless Ithilmar for extra protection on the battlefield but at no cost in speed or agility.",
        icon: "ithilmar-chariot",
        ranks: [
            { effects: [{ icon: "mount", description: "Mount: Ithilmar Chariot" }] }
        ]
    },
    {
        name: "White Lion Chariot",
        description: "Those who employ War Lion Chariots benefit considerably from the ferocity of the huge, snarling cats, keeping foes exposed to their cleaving weaponry.",
        icon: "white-lion-chariot",
        ranks: [
            { effects: [{ icon: "mount", description: "Mount: White Lion Chariot" }] }
        ]
    },
    {
        name: "Barded Ithilmar Steed",
        description: "An extremely light yet resilient material, Ithilmar gives the same protection as heavy steel, but without slowing down its wearer.",
        icon: "barded-ithilmar-steed",
        ranks: [
            { effects: [{ icon: "mount", description: "Mount: Barbed Ithilmar Steed" }] }
        ]
    },
    {
        name: "Malhandir",
        description: "The finest Ellyrion steed, atop which Tyrion has single-handedly put verminous hordes to flight.",
        icon: "barded-ithilmar-steed",
        ranks: [
            { effects: [{ icon: "mount", description: "Mount: Malhandir" }] }
        ]
    },
    {
        name: "Mautererius",
        description: "The Dragon Prince's unwavering steed is bedecked in plates and scales of 'sky-silver' that mimics the appearance of a mighty Drake.",
        icon: "elven-steed",
        ranks: [
            { effects: [{ icon: "mount", description: "Mount: Mautererius" }] }
        ]
    },
    {
        name: "Great Eagle",
        description: "Ulthuan's Great Eagles are the firm allies of the Elves, fighting their causes since the coming of Chaos.",
        icon: "great-eagle",
        ranks: [
            { effects: [{ icon: "mount", description: "Mount: Great Eagle" }] }
        ]
    },
    {
        name: "Griffon",
        description: "The wild Griffons of Ulthuan are creatures of noble bearing and keen intelligence, with whom Elves form bonds that only death can shatter.",
        icon: "griffon",
        ranks: [
            { effects: [{ icon: "mount", description: "Mount: Griffon" }] }
        ]
    },
    {
        name: "Stormwing",
        description: "Together with Stormwing, Eltharion cuts through Ulthuan's foes like a wind of blades as the mighty Griffon rakes and claws with savagery.",
        icon: "griffon",
        ranks: [
            { effects: [{ icon: "mount", description: "Mount: Stormwing" }] }
        ]
    },
    {
        name: "Arcane Phoenix",
        description: "Fighting upon an Arcane Phoenix, Teclis rides the magical tempests, harnessing the power of the howling Widns sweeping through the world of mortals.",
        icon: "arcane-phoenix",
        ranks: [
            { effects: [{ icon: "mount", description: "Mount: Arcane Phoenix" }] }
        ]
    },
    {
        name: "Sun Dragon",
        description: "The youngest Dragons have a warm hue to their scales and a fiery temper, with scorching breath to match.",
        icon: "sun-dragon",
        ranks: [
            { effects: [{ icon: "mount", description: "Mount: Sun Dragon" }] }
        ]
    },
    {
        name: "Star Dragon",
        description: "The eldest, most powerful Dragons can destroy entire units with a molten blast of their white-hot breath.",
        icon: "star-dragon",
        ranks: [
            { effects: [{ icon: "mount", description: "Mount: Star Dragon" }] }
        ]
    },
    {
        name: "Moon Dragon",
        description: "Those atop the mighty Moon Drakes are steeled in the knowledge of their mount's enlightened strength that has seen them face down Daemons.",
        icon: "moon-dragon",
        ranks: [
            { effects: [{ icon: "mount", description: "Mount: Moon Dragon" }] }
        ]
    },
    {
        name: "Minaithnir",
        description: "Imrik's fanatically loyal Drake is a symbol of the Elf Lord's irrefutable eminence as the last true Dragon Prince.",
        icon: "star-dragon",
        ranks: [
            { effects: [{ icon: "mount", description: "Mount: Minaithnir" }] }
        ]
    },
    {
        name: "Speed of Asuryan",
        description: "The High Elves possess a natural skill that far outstrips the prowess of ordinary mortals.",
        icon: "character-speed",
        ranks: [
            { effects: [
                { icon: "movement-character", description: "Speed: +5%" },
                { icon: "defense-character", description: "Melee defense: +3" }
            ] }
        ]
    },
    {
        name: "Ward of Loec",
        description: "The Trickster God knows all manner of ploys and ruses that can be used to counter missile attacks.",
        icon: "character-ward-save",
        ranks: [
            { effects: [{ icon: "resistance-missile", description: "Missile resistance: 10%" }] }
        ]
    },
    {
        name: "Ward of Hoeth",
        description: "Knowledge can be used as a shield against magical attack.",
        icon: "character-ward-save",
        ranks: [
            { effects: [{ icon: "resistance-magic", description: "Magic resistance: 10%" }] }
        ]
    },
    {
        name: "Ward of Isha",
        description: "Isha's protection can protect the faithful asur through the darkest of days.",
        icon: "character-ward-save",
        ranks: [
            { effects: [{ icon: "resistance-ward-save", description: "Ward save: 10%" }] }
        ]
    },
    {
        name: "Isha's Blessing",
        description: "Isha's blessing is only granted to the worthy - those who seek to protect life rather than take it.",
        icon: "ishas-blessing",
        ranks: [
            { effects: [
                { icon: "magic-character", description: "Miscast base chance: -15%" },
                { icon: "magic", description: "Winds of Magic power reserve: +15" }
            ] }
        ]
    },
    {
        name: "Royal Guard",
        description: "Like many other White Lions, this warrior was honoured to serve as the personal bodyguard of the Phoenix King.",
        icon: "character-ward-save",
        ranks: [
            { effects: [
                { icon: "character", description: "Leadership aura size: +30%" },
                { icon: "resistance-missile", description: "Missile resistance: 12%" },
                { icon: "agent", description: "Enemy Hero action success chance: -5%", ps: "enemy characters in region" }
            ] }
        ]
    },
    {
        name: "Touch of the Everqueen",
        description: "Those of a fell heart will be destroyed if they receive the Everqueen's touch.",
        icon: "character-damage",
        ranks: [
            { effects: [
                { icon: "damage", description: "Weapon strength: +12%" },
                { icon: "melee", description: "Melee attack: +4 when fighting against Vampire Counts, Vampire Coast and Tomb Kings", ps: "Lord's army" }
            ] }
        ]
    },
    {
        name: "Chaos Bane",
        description: "The Everqueen can banish the taint of Chaos with a single touch.",
        icon: "character-attack",
        ranks: [
            { effects: [
                { icon: "bonus-vs-large-character", description: "Bonus vs. Large: +15" },
                { icon: "melee", description: "Melee attack: +4 when fighting against Warriors of Chaos, Norsca and Beastmen", ps: "Lord's army" }
            ] }
        ]
    },
    {
        name: "Greater Ward",
        description: "With percise applications of unmaking, any threat may be rendered null and void in turn.",
        icon: "character-ward-save",
        ranks: [
            { effects: [{ icon: "resistance-ward-save", description: "Ward save: 10%" }] }
        ]
    },
    {
        name: "Potion of Charoi",
        description: "Like Teclis before them, the deepest blue of night imbues the drinker with the stamina and strength they need to face down the foe.",
        icon: "ability-potion-of-charoi",
        ranks: [
            { effects: [
                { icon: "ability-potion-of-charoi", description: "Ability: \"Potion of Charoi\"" }
            ] }
        ],
        spell: {
            description: "Lord ability",
            rarity: "common",
            cooldown: "60",
            uses: 4,
            attributes: {
                type: "Regeneration",
                duration: "9 seconds",
                target: "Self",
                effects: [
                    { text: "Restores up to", icon: "hp", postText: "432 Hit Points", uptick: "up-green", color: "green" },
                    { text: "+44%", icon: "resistance-ward-save", postText: "Damage Resistance", color: "green" },
                    { text: "+30", icon: "icon-cooldown-2", postText: "Ability Recharge (seconds)", color: "red" }
                ]
            }
         }
    },
    {
        name: "Crackling Potency",
        description: "Lightning arcs across the battlefield, leaping from foe-to-foe with crackling fury until there are none left within the storm.",
        icon: "spell-urannons-thunderbolt",
        ranks: [
            { effects: [
                { icon: "spell-chain-lightning", description: "Bound Spell: \"Chain Lightning\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "rare",
            cooldown: "50",
            uses: 2,
            attributes: {
                type: "Vortex",
                duration: "21 seconds",
                target: [
                    { text: "Ground" },
                    { text: "150m", uptick: "range" }
                ],
                cannotUseIf: "Climbing",
                cannotTargetIf: "On a wall",
                effects: [
                    { text: "Causes major", icon: "icon-magic", postText: "magical damage", uptick: "up-green", color: "green" },
                    { text: "Large, randomly-moving area of effect", uptick: "up-green", color: "green" },
                    { text: "Strong vs. multiple units", uptick: "up-green", color: "green" },
                    { text: "Good against armour", uptick: "up-green", color: "green" },
                    { text: "Weak vs. a single combatant", uptick: "down-red", color: "red" }
                ]
            }
         }
    },
    {
        name: "Glamour of Hoeth",
        description: "Those who do not wish to disappoint such a wise patron hold fast in the face of danger, lest his enlightened understanding be denied them.",
        icon: "ability-glamour-of-hoeth",
        ranks: [
            { effects: [
                { icon: "defense-character", description: "Ability: \"Arcane Conduit\"" },
                { icon: "resistance-physical", description: "Ability: \"Arcane Conduit\"" },
                { icon: "ability-glamour-of-hoeth", description: "Passive ability: \"Glamour of Hoeth\"" }
            ] }
        ],
        spell: {
            description: "Lord ability",
            rarity: "rare",
            attributes: {
                type: [
                    { text: "Augment" },
                    { text: "Only acts on targets when in area" },
                ],
                duration: "Constant",
                target: [
                    { text: "Self" },
                    { text: "Affects allies in range" },
                ],
                effectRange: "55m",
                effects: [
                    { text: "+200% Charge Resistance", color: "green" },
                    { text: "+4", icon: "morale-character", postText: "Leadership", color: "green" }
                ]
            }
        }
    },
    {
        name: "Flames of the Phoenix",
        description: "The caster utters words of power and a phoenix of pure fire manifests to swoop upon the enemy, bathing them in cleansing flame.",
        icon: "spell-fiery-convocation",
        ranks: [
            { effects: [
                { icon: "ability-glamour-of-hoeth", description: "Bound spell: \"Bound Fiery Convocation\"" },
                { icon: "spell-fireball", description: "Ability number of uses: +2 for bound spell \"Fireball\"" }
            ] }
        ],
        spell: {
            description: "Bound spell",
            rarity: "rare",
            cooldown: "120",
            uses: 2,
            attributes: {
                type: "Wind",
                duration: "10 secondsnstant",
                target: [
                    { text: "Ground" },
                    { text: "150m", uptick: "range" },
                ],
                cannotTargetIf: "On a wall, Climbing",
                effects: [
                    { text: "Causes major magical & fire damage", uptick: "up-green", color: "green" },
                    { text: "Medium, forward-moving area of effect", uptick: "up-green", color: "green" },
                    { text: "Good against armour", uptick: "up-green", color: "green" },
                    { text: "Strong vs. multiple units", uptick: "up-green", color: "green" },
                    { text: "Weak vs. a single combatant", uptick: "down-red", color: "red" }
                ]
            }
        }
    },
    {
        name: "Absolute Control",
        description: "Mere talent alone is not enough, one must be truly gifted to be chosen to study at the Tower of Hoeth.",
        icon: "character-cooldown",
        ranks: [
            { effects: [
                { icon: "magic-cooldown", description: "Cooldown: -10% to all spells" },
                { icon: "magic-character", description: "Winds of Magic cost: -25% for all spells" }
            ] }
        ]
    },
    {
        name: "Manifold Sorcery",
        description: "The Realms of Man must not fall. Our fate is intertwined with theirs, and if they fall, so too do we. For this reason, I taught their first masters of magic, and for this reason, we must notabandon Men, despite their barbarous ways.",
        icon: "character-magic",
        ranks: [
            { effects: [
                { icon: "magic-character", description: "Winds of Magic cost: -2 for all spells" }
            ] }
        ]
    },
    {
        name: "Potential Energy",
        description: "The Archmage crackles and flows with energies that would unmake any mortal practitioner.",
        icon: "character-magic",
        ranks: [
            { effects: [
                { icon: "magic", description: "Winds of Magic power reserve: +15" },
                { icon: "movement-character", description: "Speed: +10%" }
            ] }
        ]
    },
    {
        name: "Sublime Focus",
        description: "The utmost concentration, the greatest attention to detail, are required if the world is to be saved from the destructive madness of the Ruinous Ones.",
        icon: "character-magic",
        ranks: [
            { effects: [
                { icon: "magic-character", description: "Miscast base chance: -30%" },
                { icon: "magic", description: "Winds of Magic power reserve: +5" }
            ] }
        ]
    },
    {
        name: "Master of the Order",
        description: "As master of the foremost Asur mages, this Elf has studied in their secret libraries longer than most men live.",
        icon: "character-magic",
        ranks: [
            { effects: [
                { icon: "wizard", description: "Hero action success chance: +5% for Mages and Loremasters of Hoeth", ps: "all characters" },
                { icon: "treasury", description: "Hero action cost: -15% for Mages and Loremasters of Hoeth", ps: "all characters" },
                { icon: "resistance-ward-save", description: "Ward save: 10% for Loremasters of Hoeth", ps: "all characters" },
                { icon: "resistance-ward-save", description: "Ward save: 10% for Mages", ps: "all characters" }
            ] }
        ]
    },
    {
        name: "Infiltration",
        description: "Using the tricks of Loec, the Shadow King excels at remaining unseen, allowing him to go almost anywhere.",
        icon: "character-agent",
        ranks: [
            { effects: [
                { icon: "agent", description: "Enemy Hero action success chance: -10%" },
                { icon: "stalk", description: "Attribute: Stalk" }
            ] }
        ]
    },
    {
        name: "No Rest for the Wicked",
        description: "While there are traitors and minions of Malekith abroad, the Shadow King cannot - must not - rest.",
        icon: "character-movement",
        ranks: [
            { effects: [
                { icon: "campaign-movement", description: "Enemy Hero action success chance: -10%" },
                { icon: "attribute-fatigue-immune", description: "Attribute: Perfect Vigour" }
            ] }
        ]
    },
    {
        name: "Majesty of Ulthuan",
        description: "Those in command of the ranks will issue their orders with a ferocious bark, expecting instant obeisance.",
        icon: "ability-hold-the-line",
        ranks: [
            { effects: [
                { icon: "character", description: "Leadership aura size: +100%" },
                { icon: "morale-character", description: "Characte's Aura leadership effect: +5" },
                { icon: "ability-hold-the-line", description: "Passive ability: \"Hold the Line!\"" }
            ] }
        ],
        spell: {
            description: "Lord ability",
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
                    { text: "+4", icon: "morale-character", postText: "Leadership", color: "green" },
                    { text: "+5", icon: "defense-character", postText: "Melee Defense", color: "green" }
                ]
            }
         }
    },
    {
        name: "Revenant",
        description: "An unseen force, returned to take vengeance on those who have wronged the loyal folk of Nagarythe.",
        icon: "fear",
        ranks: [
            { effects: [
                { icon: "morale", description: "Enemy leadership: -4", ps: "local region" },
                { icon: "attribute-fear", description: "Attribute: Causes Fear" }
            ] }
        ]
    },
    {
        name: "Ruthless",
        description: "Led by their king, the deadly Shadow WArriors are the most ruthless of all Ulthuan's warlike children.",
        icon: "character-ammo",
        ranks: [
            { effects: [
                { icon: "melee", description: "Melee attack: +5 for Shadow Warriors and Shadow-walkers units", ps: "Lord's army" },
                { icon: "movement", description: "Speed: +6% for Shadow Warriors and Shadow-walkers units", ps: "Lord's army" },
                { icon: "ammo", description: "Ammunition: +10% for Shadow Warriors and Shadow-walkers units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        name: "Sworn to Vengeance",
        description: "He will look for you, he will find you, and he will kill you.",
        icon: "melee-vs-dark-elves",
        ranks: [
            { effects: [
                { icon: "income", description: "Income from sacking and looting settlements: +30%" },
                { icon: "income", description: "Income from post-battle loot: +15%" },
                { icon: "weapon-damage", description: "Weapon Strength: 10% when fighting against Dark Elves", ps: "Lord's army" },
                { icon: "ranged-damage", description: "Missile strength: +10% when fighting against Dark Elves", ps: "Lord's army" }
            ] }
        ]
    },
    {
        name: "Spectre",
        description: "As he is a master of ambushes and surviving certain death, the prospect of facing Alith Anar is always a deadly one.",
        icon: "character-ambush",
        ranks: [
            { effects: [
                { icon: "defense-character", description: "Melee defense: +10" },
                { icon: "ambush", description: "Ambush success chance: +15%" }
            ] }
        ]
    },
    {
        name: "Renegade",
        description: "Alith Anar is willing to use any means to destroy his enemies; his vengeance has no limits.",
        icon: "character-ranged-damage",
        ranks: [
            { effects: [
                { icon: "diplomacy", description: "Diplomatic relations: -8 with High Elves", color: "red" },
                { icon: "ranged-damage", description: "Missile strength: +12%", ps: "all armies factionwide" }
            ] }
        ]
    },
    {
        name: "Shadow King",
        description: "He may lurk in the Shadows, but Alith Anar is as much royalty as any of Ulthuan's princes.",
        icon: "ability-shadow-king",
        ranks: [
            { effects: [
                { icon: "public-order", description: "Public order: +4", ps: "all provinces" },
                { icon: "ability-shadow-king", description: "Replaces: \"Mislead\"" },
                { icon: "ability-shadow-king", description: "Ability: \"Shadow King\"" }
            ] }
        ],
        spell: {
            description: "Lord ability",
            rarity: "uncommon",
            attributes: {
                type: "Hiding",
                duration: "47 seconds",
                target: [
                    { text: "Ground" },
                    { text: "60m", uptick: "range" }
                ],
                cannotUseIf: "On a wall, Manning equipment, Engaged in melee, Climbing",
                cannotTargetIf: "On a wall",
                miscastChance: "100",
                effects: [
                    { text: "Alith Anar receives Stalk, Snipe, Unspottable", uptick: "up-green", color: "green" },
                    { text: "Creates an image of Alith Anar", uptick: "up-green", color: "green" },
                    { text: "Image causes 50% damage", uptick: "up-green", color: "green" }
                ]
            }
         }
    },
    {
        name: "Tradition Dictates",
        description: "While Alarielle herself is seen as a radical force, she is bound to certain ceremonial duties, which is reassuring for many Asur.",
        icon: "character-public-order",
        ranks: [
            { effects: [
                { icon: "public-order", description: "Public order: +2", ps: "all provinces" },
                { icon: "income", description: "Tax rate: +5%", ps: "factionwide" }
            ] }
        ]
    },
    {
        name: "Leader of the Court",
        description: "Elves are political creatures, but the Everqueen exists above such debased notions; when she speaks all listen and put aside petty machinations.",
        icon: "character-diplomacy",
        ranks: [
            { effects: [
                { icon: "diplomacy", description: "Diplomatic relations: +15 with High Elves" },
                { icon: "treasury", description: "Construction cost: -10% for all buildings", ps: "local province" }
            ] }
        ]
    },
    {
        name: "Servant of Isha",
        description: "As a paragon of the Earth Mother and queen of Avelorn, growth and fortitude for the land itself is promoted.",
        icon: "character-experience",
        ranks: [
            { effects: [
                { icon: "handmaiden", description: "Hero capacity: +1 for Handmaidens" },
                { icon: "handmaiden", description: "Unlocks Hero recruitment: Handmaidens", ps: "all provinces" },
                { icon: "experience", description: "Hero recruit rank: +1 for Handmaidens", ps: "all provinces" }
            ] },
            { effects: [
                { icon: "handmaiden", description: "Hero capacity: +2 for Handmaidens" },
                { icon: "handmaiden", description: "Unlocks Hero recruitment: Handmaidens", ps: "all provinces" },
                { icon: "experience", description: "Hero recruit rank: +2 for Handmaidens", ps: "all provinces" }
            ] }
        ]
    },
    {
        name: "Spiritual Defender",
        description: "The spiritual defense and well-being of the Elves is the traditional duty of the Everqueen.",
        icon: "character-defense",
        ranks: [
            { effects: [
                { icon: "religion", description: "Untainted: +6", ps: "local province" },
                { icon: "defense", description: "Melee defense: +10 for Sisters of Avelorn units", ps: "local armies" },
                { icon: "turns", description: "Recruitment duration: -1 turn for Sisters of Avelorn units (minimum 1)", ps: "all provinces" }
            ] }
        ]
    },
    {
        name: "Blood & Fire",
        description: "The Everqueen does not traditionally go to war, but Alarielle is different - she will punish the invaders of Avelorn!",
        icon: "character-military-spending",
        ranks: [
            { effects: [
                { icon: "coin", description: "Upkeep: -10% for all units", ps: "Lord's army" },
                { icon: "campaign-movement", description: "Campaign movement range: +5%" }
            ] }
        ]
    },
    {
        name: "Beacon of Hope",
        description: "Representing the Isha and all the Gods of the Cadai, the Everqueen is a beacon of hope in these turbulent times.",
        icon: "character-morale",
        ranks: [
            { effects: [
                { icon: "defense-character", description: "Melee defense: +6", ps: "local armies" },
                { icon: "morale-character", description: "Leadership: +6", ps: "local armies" }
            ] }
        ]
    },
    {
        name: "Gifts of Isha",
        description: "A gift from Isha; no wounds are beyond Alarielle's skills and her wards of protection know no equal.",
        icon: "character-replenishment",
        ranks: [
            { effects: [
                { icon: "resistance-ward-save", description: "Ward save: 6%" },
                { icon: "replenishment", description: "Casualty replenishment rate: +8%", ps: "Lord's army" },
                { icon: "armor", description: "Armour: +10 for Forest Spirit units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "resistance-ward-save", description: "Ward save: 12%" },
                { icon: "replenishment", description: "Casualty replenishment rate: +15%", ps: "Lord's army" },
                { icon: "armor", description: "Armour: +20 for Forest Spirit units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        name: "Guardian of the Land",
        description: "As guardian of the lands, the Everqueen can manipulate the Lores of Life and Light with unrivalled skill.",
        icon: "character-magic",
        ranks: [
            { effects: [
                { icon: "magic", description: "Winds of Magic power reserve: +15" },
                { icon: "magic-cooldown", description: "Cooldown: -15% to all spells" },
                { icon: "melee", description: "Melee attack: +9 for Forest Spirit units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        name: "Storm of Blades",
        description: "Steel that bites deeper than the flesh.",
        icon: "character-damage",
        ranks: [
            { effects: [
                { icon: "armor-piercing-character", description: "Armour-piercing weapon damage: +55" },
                { icon: "campaign-movement", description: "Speed: +15%" }
            ] }
        ]
    },
    {
        name: "Break Upon the Walls",
        description: "When no fixture presents itself, one must simply make their own.",
        icon: "break-upon-the-walls",
        ranks: [
            { effects: [
                { icon: "armor", description: "Armour: +10 for shielded units", ps: "Lord's army" },
                { icon: "character", description: "Ability: \"Unending Volley\" for missile units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        name: "Wallwarden",
        description: "These walls have stood since ages past, and they will not fall until this world crumbles into nothing!",
        icon: "break-upon-the-walls",
        ranks: [
            { effects: [
                { icon: "armor", description: "Armour: +15 for all units when defending", ps: "Lord's army" },
                { icon: "treasury", description: "Construction cost -25% for Wall and Garrison buildings", ps: "all provinces" },
                { icon: "construction", description: "Construction time -2 for Wall and Garrison buildings", ps: "all provinces" }
            ] }
        ]
    },
    {
        name: "A World Asunder",
        description: "No being is above suspicion, no motive shall remain hidden. No peace without war.",
        icon: "character-morale",
        ranks: [
            { effects: [
                { icon: "public-order", description: "Public order: -1", ps: "local province", color: "red" },
                { icon: "ability-mistwalker-barrage", description: "Cooldown: -50% to \"Mistwalker Barrage\"" },
                { icon: "morale", description: "Enemy leadership: -8", ps: "local region" }
            ] }
        ]
    },
    {
        name: "Unyielding March",
        description: "No dark corner of the world will serve to hide you from the Mistwalkers.",
        icon: "character-movement",
        ranks: [
            { effects: [
                { icon: "campaign-movement", description: "Campaign movement range: +10%", ps: "Lord's army" },
                { icon: "treasury", description: "Recruitment cost: -25%", ps: "Lord's army" },
                { icon: "army", description: "Global recruitment capactiy: +2" }
            ] }
        ]
    },
    {
        name: "Grim Discipline",
        description: "The Elves of Tor Yvresse contain a deep hatred, war has scarred their h earts and steeled their souls. Tor Yvresse will not fall again.",
        icon: "grim-discipline",
        ranks: [
            { effects: [
                { icon: "character", description: "Passive Ability: \"Grim Discipline\"", ps: "Lord's army" },
                { icon: "character", description: "Replaces: \"Martial Mastery and Martial Prowess\"", ps: "Lord's army" },
                { icon: "charge-reflector", description: "Attribute: Expert Charge Defense", ps: "Lord's army" }
            ] }
        ]
    },
    {
        name: "Dedicated to Ladrielle",
        description: "The Lady of Mists is a patron of the hidden and the lost. Her presence is felt most strongly within the mistss of Yvresse, where she is said to guide wanderers to safety.",
        icon: "dedicated-to-ladrielle",
        ranks: [
            { effects: [
                { icon: "vigour", description: "Vigour loss reduction: -20% for Mistwalkers units", ps: "Lord's army" },
                { icon: "weapon-damage", description: "Weapon strength: +10% for Mistwalkers units", ps: "Lord's army" },
                { icon: "ranged-damage", description: "Missile strength: +10% for Mistwalkers units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        name: "Unifier",
        description: "Ulthuan can and will be whole again; believe and it shall be true.",
        icon: "character-diplomacy",
        ranks: [
            { effects: [
                { icon: "diplomacy", description: "Diplomatic relations: +20 with High Elves" },
                { icon: "public-order", description: "Public order: +1", ps: "all provinces" },
                { icon: "income", description: "Income from all buildings: +13%", ps: "local provinces" }
            ] }
        ]
    },
    {
        name: "Sense of Urgency",
        description: "In those rare, fleeting times of peace, you must prepare for war.",
        icon: "character-military-spending",
        ranks: [
            { effects: [
                { icon: "treasury", description: "Recruitment cost: -10%", ps: "all armies" },
                { icon: "turns", description: "Global recruitment duration: -1 turn for all units" },
                { icon: "army", description: "Global recruitment capacity: +2" }
            ] }
        ]
    },
    {
        name: "Righteous Cause",
        description: "When your goals are worthy, decent, and entirely free of self-interest, those of a similar nature flock to your banner.",
        icon: "character-military-spending",
        ranks: [
            { effects: [
                { icon: "coin", description: "Upkeep: -10% for all units", ps: "all armies" },
                { icon: "religion", description: "Untainted: +10", ps: "local province" }
            ] }
        ]
    },
    {
        name: "Bloodline of Aenarion",
        description: "Eventually, the curse of Aenarion will reveal itself in those of his line; it is inevitable - it is in their very blood.",
        icon: "bloodline-of-aenarion",
        ranks: [
            { effects: [
                { icon: "public-order", description: "Public order: -1", ps: "all provinces", color: "red" },
                { icon: "melee-character", description: "Melee attack: +12" },
                { icon: "damage", description: "Weapon strength: +20%" }
            ] }
        ]
    },
    {
        name: "Wrath of Khaine",
        description: "Eventually, the curse of Aenarion will reveal itself in those of his line; it is inevitable - it is in their very blood.",
        icon: "wrath-of-khaine",
        ranks: [
            { effects: [
                { icon: "public-order", description: "Public order: -1", ps: "all provinces", color: "red" },
                { icon: "bonus-vs-large-character", description: "Bonus vs. Large: +10" },
                { icon: "morale-character", description: "Leadership: +20" },
                { icon: "damage", description: "Weapon strength: +10%" }
            ] }
        ]
    },
    {
        name: "Aspect of the Banshee",
        description: "As the curse emerges, facets of the Bloody-handed God reveal themselves.",
        icon: "aspect-of-the-banshee",
        ranks: [
            { effects: [
                { icon: "public-order", description: "Public order: -1", ps: "all provinces", color: "red" },
                { icon: "charge-character", description: "Charge bonus: +15" },
                { icon: "attribute-fear", description: "Attribute: Causes Fear" }
            ] }
        ]
    },
    {
        name: "Godly Perseverance",
        description: "We, the Asure - the sons of Aenarion and Ulthuan - shall never fall.",
        icon: "godly-perseverance",
        ranks: [
            { effects: [
                { icon: "public-order", description: "Public order: -1", ps: "all provinces", color: "red" },
                { icon: "health-character", description: "Hit points: +25%" },
                { icon: "resistance-physical", description: "Physical resistance: +10%" }
            ] }
        ]
    },
    {
        name: "Caledor Incumbent",
        description: "Imrik is prince of the silent realm of Caledor. Despite the decline of the Dragons, Imrik does not waver in his duty.",
        icon: "character-agent",
        ranks: [
            { effects: [
                { icon: "influence", description: "Influence: +2 per turn" },
                { icon: "noble", description: "Unlocks Hero recruitment: Noble", ps: "all provinces" },
                { icon: "noble", description: "Hero capacity: +3 for Nobles" }
            ] }
        ]
    },
    {
        name: "Vaul's Armaments",
        description: "Caledor is home to Vaul's Anvil, the site of a great temple to the God of Smiths. The work of the priests of Vaul binds the Winds into steel, and forges peerless magical arms and armour.",
        icon: "character-armor",
        ranks: [
            { effects: [
                { icon: "resistance-magic", description: "Magic resistance: +15%", ps: "Lord's army" },
                { icon: "technology", description: "Research rate: +10%" },
                { icon: "armor", description: "Armour: +15", ps: "Lord's army" }
            ] }
        ]
    },
    {
        name: "Dragonheart",
        description: "The age of Dragons is long past, but the pride of Caledorians doth never wane. The fires that once raged upon the peaks now rages within every Caledorian Elf.",
        icon: "dragonheart",
        ranks: [
            { effects: [
                { icon: "melee-character", description: "Melee attack: +7%" },
                { icon: "resistance-fire", description: "Fire resistance: +35% for all units", ps: "Lord's army" },
                { icon: "morale", description: "Leadership: +5", ps: "Lord's army" }
            ] }
        ]
    },
    {
        name: "Astride the Battlefield",
        description: "Caledorians are renowned for their arrogance. It is however hard to argue their proficiency as elite cavalry.",
        icon: "character-charge",
        ranks: [
            { effects: [
                { icon: "movement", description: "Speed: +15% for cavalry units", ps: "Lord's army" },
                { icon: "charge", description: "Charge bonus: +15 for cavalry units", ps: "Lord's army" },
                { icon: "experience", description: "Recruit rank: +2 for cavalry units" }
            ] }
        ]
    },
    {
        name: "Ancient Pride",
        description: "Dragon Princes are the only Elves who would never dip their banners for the Phoenix King, holding to an honour said to have been granted by Caledor himself!",
        icon: "character-experience",
        ranks: [
            { effects: [
                { icon: "vigour", description: "Vigour loss reduction: -50% for Dragon Prince and Dragon units", ps: "Lord's army" },
                { icon: "resistance-physical", description: "Physical resistance: 10% for Dragon Prince and Dragon units", ps: "Lord's army" },
                { icon: "defense", description: "Melee defense: +6 for Dragon Prince and Dragon units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        name: "Ashen Fields",
        description: "When it is done there shall remain but mounds of ash as far as the eye can see.",
        icon: "ashen-fields",
        ranks: [
            { effects: [
                { icon: "resistance-fire", description: "Weakness to Fire Damage: -20% for all units", ps: "local enemy armies" },
                { icon: "damage", description: "Weapon strength: +10%" }
            ] }
        ]
    },
    {
        name: "Blazing Lance",
        description: "It is not the Dragon you should fear...",
        icon: "character-charge",
        ranks: [
            { effects: [
                { icon: "charge-character", description: "Charge bonus: +20" },
                { icon: "technology", description: "Attacks cause \"Flammable\" effect, reducing fire resistance" }
            ] }
        ]
    },
    {
        name: "Dragonpact",
        description: "Focusing all his mystical might, the Pyromancer strikes the foe with a flurry of incandescent missiles.",
        icon: "spell-piercing-bolts-of-burning",
        ranks: [
            { effects: [
                { icon: "spell-piercing-bolts-of-burning", description: "Bound spell: \"Piercing Bolts of Burning\"" }
            ] }
        ],
        spell: {
            description: "Bound Spell",
            rarity: "rare",
            uses: 4,
            cooldown: "47",
            attributes: {
                type: "Bombardment",
                duration: "9 seconds",
                target: [
                    { text: "Ground" },
                    { text: "200m", uptick: "range" }
                ],
                cannotUseIf: "Climbing",
                effects: [
                    { text: "Causes major magical & fire damage", uptick: "up-green", color: "green" },
                    { text: "Medium strike area", uptick: "up-green", color: "green" },
                    { text: "Good against armour", uptick: "up-green", color: "green" },
                    { text: "Strong vs. a single unit", uptick: "up-green", color: "green" }                ]
            }
        }
    },
    {
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
        name: "Dedicated to Asuryan",
        description: "Asuryan's adherents believe they are part of the Creater's plan and will never be abandoned.",
        icon: "dedicated-to-asuryan",
        ranks: [
            { effects: [
                { icon: "public-order", description: "Public order: +2", ps: "local provinces" },
                { icon: "movement-character", description: "Speed: +5%" },
                { icon: "morale", description: "Leadership: +5 for Phoenix Guard units", ps: "Lord's army" },
                { icon: "coin", description: "Upkeep: -5% for Phoenix Guard units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        name: "Dedicated to Hoeth",
        description: "The supporters of Hoeth bask in their patron's generosity, for it was he who gifted the Elves with much of their revered knowledge.",
        icon: "dedicated-to-hoeth",
        ranks: [
            { effects: [
                { icon: "magic", description: "Winds of Magic power reserve: +5" },
                { icon: "morale", description: "Leadership: +5 for Swordmasters of Hoeth units", ps: "Lord's army" },
                { icon: "coin", description: "Upkeep: -5% for Swordmasters of Hoeth units", ps: "Lord's army" },
                { icon: "religion", description: "Untainted: +2", ps: "local province" },
            ] }
        ]
    },
    {
        name: "Dedicated to Vaul",
        description: "The God of Smiths knows the Elves will need fire and fury to survive; his blessings steel them for the darker days ahead.",
        icon: "dedicated-to-vaul",
        ranks: [
            { effects: [
                { icon: "armor-character", description: "Armour: +5" },
                { icon: "morale", description: "Leadership: +5 for Dragon Princes units", ps: "Lord's army" },
                { icon: "coin", description: "Upkeep: -5% for Dragon Princes units", ps: "Lord's army" },
                { icon: "income", description: "Income from Industry buildings: +1%", ps: "all regions" }
            ] }
        ]
    },
    {
        name: "Dedicated to Kurnous",
        description: "Isha's husband is the father of all Elves; his blessings are given to those who hunt for food, but woe betide those who kill for sport.",
        icon: "dedicated-to-kurnous",
        ranks: [
            { effects: [
                { icon: "morale", description: "Leadership: +5 for White Lions of Chrace, War Lions and Lion Chariot units", ps: "Lord's army" },
                { icon: "coin", description: "Upkeep: -5% for White Lions of Chrace, War Lions and Lion Chariot units", ps: "Lord's army" },
                { icon: "income", description: "Income from post-battle loot: +10%" },
                { icon: "vanguard", description: "Attribute: Vanguard Deployment" }
            ] }
        ]
    },
    {
        name: "Dedicated to Isha",
        description: "The Goddess of Fertility blesses farmers and mothers, but also those votaries who are caught abroad in dangerous lands.",
        icon: "dedicated-to-isha",
        ranks: [
            { effects: [
                { icon: "resistance-physical", description: "Physical resistance: 3%" },
                { icon: "morale", description: "Leadership: +5 for Spearmen, Rangers and Archers units", ps: "Lord's army" },
                { icon: "coin", description: "Upkeep: -5% for Spearmen, Rangers and Archers units", ps: "Lord's army" },
                { icon: "replenishment", description: "Casualty replenishment rate: +5%", ps: "Lord's army" }
            ] }
        ]
    },
    {
        name: "Dedicated to Addaioth",
        description: "Those who follow the Bringer of Wrath and Fire are blessed with direct and forceful solutions to the obstacles in their way.",
        icon: "dedicated-to-addaioth",
        ranks: [
            { effects: [
                { icon: "morale-character", description: "Leadership: +10" },
                { icon: "morale", description: "Leadership: +5 for Dragon units", ps: "Lord's army" },
                { icon: "coin", description: "Upkeep: -5% for Dragon units", ps: "Lord's army" },
                { icon: "income", description: "Income from sacking settlements: +15%" }
            ] }
        ]
    },
    {
        name: "Dedicated to Mathlann",
        description: "As the Lord of the Sea, Mathlann is patron to sailors and explorers; he is prayed to by Elves about to embark on a voyage or seeking new lands.",
        icon: "dedicated-to-mathlann",
        ranks: [
            { effects: [
                { icon: "defense-character", description: "Melee defense: +3" },
                { icon: "morale", description: "Leadership: +5 for Lothern Sea Guard units", ps: "Lord's army" },
                { icon: "coin", description: "Upkeep: -5% for Lothern Sea Guard units", ps: "Lord's army" },
                { icon: "income", description: "Income from Ports: +1%", ps: "all regions" }
            ] }
        ]
    },
    {
        name: "Dedicated to Hukon",
        description: "If you can hold your ground when all around are falling into the cracks, then that's the patronage of Hukon, God of Earthquakes.",
        icon: "dedicated-to-hukon",
        ranks: [
            { effects: [
                { icon: "charge-character", description: "Charge bonus: +5" },
                { icon: "morale", description: "Leadership: +5 for Chariot units", ps: "Lord's army" },
                { icon: "coin", description: "Upkeep: -5% for Chariot units", ps: "Lord's army" },
                { icon: "campaign-movement", description: "Campaign movement range: +5%" }
            ] }
        ]
    },
    {
        name: "Swordplayer",
        description: "The sword is the axis of the world and its power is absolute.",
        icon: "character-attack",
        ranks: [
            { effects: [
                { icon: "armor-piercing-character", description: "Armour-piercing weapon damage: +12" },
                { icon: "charge-character", description: "Charge bonus: +5" },
                { icon: "melee-character", description: "Melee attack: +3" }
            ] }
        ]
    },
    {
        name: "Clearcutting Manoeuvres",
        description: "No hill, tree or valley is an impediment to these seasoned veterans of the forest.",
        icon: "clearcutting-manoeuvres",
        ranks: [
            { effects: [
                { icon: "movement", description: "Speed: +15% for White Lions of Chrace units", ps: "Lord's army" },
                { icon: "melee", description: "Melee attack: +8 for White Lions of Chrace units", ps: "Lord's army" },
                { icon: "strider", description: "Attribute: Strider", ps: "Lord's army" }
            ] }
        ]
    },
    {
        name: "Ancestral Axes",
        description: "Each axe bears the scars of generations of use; each strike fells with the strength of all those who struck before.",
        icon: "character-bonus-vs-infantry",
        ranks: [
            { effects: [
                { icon: "bonus-vs-large", description: "Bonus vs. Large: +8 ofr White Lions of Chrace units", ps: "Lord's army" },
                { icon: "defense", description: "Melee defense: +4 for White Lions of Chrace units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        name: "Lion's Pride",
        description: "War lions which have remained in service for long enough develop a true bond with their handlers.",
        icon: "character-charge",
        ranks: [
            { effects: [
                { icon: "charge", description: "Charge bonus: +20% for War Lions and Lion Chariots units", ps: "Lord's army" },
                { icon: "bonus-vs-small", description: "Bonus vs. Infantry: +8 for War Lions and Lion Chariots units", ps: "Lord's army" },
                { icon: "experience", description: "Recruit rank: +2 for War Lions and Lion Chartiots units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        name: "Seeking Arrows",
        description: "These enchanted arrows have been carefully crafted from the pale-wooded trees that grow near the Grove of Avelorn.",
        icon: "character-range",
        ranks: [
            { effects: [
                { icon: "accuracy-character", description: "Range: +3%" },
                { icon: "armor-piercing-character", description: "Armour-piercing missile damage: +20%" }
            ] }
        ]
    },
    {
        name: "Axe Lord",
        description: "Strike true, strike hard.",
        icon: "character-attack",
        ranks: [
            { effects: [
                { icon: "defense-character", description: "Melee defense: +3" },
                { icon: "melee-character", description: "Melee attack: +3" },
                { icon: "damage", description: "Weapon strength: +3%" }
            ] }
        ]
    },
    {
        name: "Lion Guardian",
        description: "An expert hunter and a veteran White Lion of Chrace; his rite of passage was to hunt and slay Chrace's fiercest creatures.",
        icon: "character",
        ranks: [
            { effects: [
                { icon: "bonus-vs-large-character", description: "Bonus vs. Large: +12" },
                { icon: "morale-character", description: "Leadership: +10" },
                { icon: "strider", description: "Attribute: Strider" }
            ] }
        ]
    },
    {
        name: "Valour of Ages",
        description: "Panic and fear are things that happen to others.",
        icon: "character-damage",
        ranks: [
            { effects: [
                { icon: "damage", description: "Weapon strength: +3%" },
                { icon: "damage", description: "Weapon strength: +10% when fighting against Dark Elves" }
            ] },
            { effects: [
                { icon: "damage", description: "Weapon strength: +8%" },
                { icon: "damage", description: "Weapon strength: +15% when fighting against Greenskins, Skaven, Dark Elves, Warriors of Chaos, Norsca and Beastmen" }
            ] }
        ]
    },
    {
        name: "Lord of Dragons",
        description: "Imrik's affinity with Dragons gifts him their sharpness; with his concentration heightened, even the most skilful foes struggle to land blows.",
        icon: "ability-lord-of-dragons",
        ranks: [
            { effects: [{ icon: "ability-lord-of-dragons", description: "Passive ability: \"Lord of Dragons\"" }] }
        ],
        spell: {
            description: "Lord ability",
            cooldown: "90",
            rarity: "uncommon",
            attributes: {
                type: "Hex",
                duration: "22 seconds",
                target: [
                    { text: "Enemy"},
                    { text: "75m", uptick: 'range' }
                
                ],
                effects: [
                    { text: "-24", icon: "defense-character", postText: "Melee Defense", color: "red" },
                    { text: "-40", icon: "melee-character", postText: "Melee Attack", color: "red" }
                ]
            }
        }
    },
    {
        name: "Feint & Riposte",
        description: "Quite literally the cut-and-thrust of the Elven way of battle; every stroke is percisely made and finds its mark perfectly.",
        icon: "ability-feint-riposte",
        ranks: [
            { effects: [{ icon: "ability-feint-riposte", description: "Ability: \"Feint & Riposte\"" }] }
        ],
        spell: {
            description: "Lord ability",
            cooldown: "90",
            rarity: "uncommon",
            attributes: {
                type: "Augment",
                duration: "28 seconds",
                target: "Self",
                effects: [
                    { text: "+24", icon: "melee-character", postText: "Melee Attack", color: "green" },
                    { text: "+24", icon: "defense-character", postText: "Melee Defense", color: "green" },
                    { text: "+22%", icon: "reistance-physical", postText: "Physical Resistance", color: "green" }
                ]
            }
        }
    },
    {
        name: "Volley of High Arrows",
        description: "By which an unexpected shower of pointy death rains down upon the unfortunate targets. Ouch!",
        icon: "volley-of-arrows",
        ranks: [
            { effects: [{ icon: "volley-of-arrows", description: "Ability: \"Volley of High Arrows\"" }] }
        ],
        spell: {
            description: "Character ability",
            cooldown: "90",
            rarity: "uncommon",
            uses: "3",
            attributes: {
                type: "Magic Missiles",
                target: [
                    { text: "Enemy" },
                    { text: "200m", uptick: "range" }
                ],
                projectileRange: "200m",
                effects: [
                    { text: "Causes", icon: "icon-armor-piercing", postText: "armour-piercing damage", color: "green", uptick: "up-green" },
                    { text: "Good penetration", color: "green", uptick: "up-green" },
                    { text: "Effective at long range", color: "green", uptick: "up-green" }
                ]
            }
        }
    },
    {
        name: "Dragonhorn",
        description: "A single blast on the 'Dragonhorn', forged in the fire of Draugnir's flaming breath, causes the foe to shrink in terror, for they know what surely follows...",
        icon: "ability-dragonhorn",
        ranks: [
            { effects: [{ icon: "ability-dragonhorn", description: "Ability: \"Dragonhorn\"" }] }
        ],
        spell: {
            description: "Lord ability",
            cooldown: "120",
            rarity: "rare",
            attributes: {
                type: "Augment (Area)",
                duration: "16 seconds",
                target: [
                    { text: "Self"},
                    { text: "Affects allies in range" }
                ],
                effectRange: "Map-wide",
                effects: [
                    { text: "+24", icon: "melee-character", postText: "Melee Attack", color: "green" },
                    { icon: "attribute-fear", postText: "Causes Fear", uptick: "up-green", color: "red" }
                ]
            }
        }
    },
    {
        name: "Combined Elites",
        description: "Personal glory and regimental achievement must be set aside in times of great peril.",
        icon: "battle-defense",
        ranks: [
            { effects: [
                { icon: "defense", description: "Melee defense: +4 for Spearmen, Silverin Guard, Rangers, Archers and Lothern Sea Guard units", ps: "Lord's army" },
                { icon: "movement", description: "Speed: +5% for Ellyrian Reavers and Silver Helms units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "melee", description: "Melee attack: +6 for Spearmen, Silverin Guard, Rangers, Archers and Lothern Sea Guard units", ps: "Lord's army" },
                { icon: "ranged-damage", description: "Missile strength: +9% for Ellyrian Reavers and Silver Helms units", ps: "Lord's army" },
                { icon: "defense", description: "Melee defense: +6 for Spearmen, Silverin Guard, Rangers, Archers and Lothern Sea Guard units", ps: "Lord's army" },
                { icon: "movement", description: "Speed: +7% for Ellyrian Reavers and Silver Helms units", ps: "Lord's army" },
                { icon: "charge", description: "Speed: +9 for Ellyrian Reavers and Silver Helms units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "melee", description: "Melee attack: +8 for Spearmen, Silverin Guard, Rangers, Archers and Lothern Sea Guard units", ps: "Lord's army" },
                { icon: "ranged-damage", description: "Missile strength: +12% for Ellyrian Reavers and Silver Helms units", ps: "Lord's army" },
                { icon: "defense", description: "Melee defense: +8 for Spearmen, Silverin Guard, Rangers, Archers and Lothern Sea Guard units", ps: "Lord's army" },
                { icon: "movement", description: "Speed: +10% for Ellyrian Reavers and Silver Helms units", ps: "Lord's army" },
                { icon: "charge", description: "Speed: +12 for Ellyrian Reavers and Silver Helms units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        name: "Militia Master",
        description: "Turning an untrained bunch of regular citizens into effective fighting units requires a special kind of talent, and oodles of patience.",
        icon: "battle-attack",
        ranks: [
            { effects: [
                { icon: "defense", description: "Melee defense: +4 for Spearmen, Silverin Guard, Rangers, Archers and Lothern Sea Guard units", ps: "Lord's army" },
            ] },
            { effects: [
                { icon: "melee", description: "Melee attack: +6 for Spearmen, Silverin Guard, Rangers, Archers and Lothern Sea Guard units", ps: "Lord's army" },
                { icon: "defense", description: "Melee defense: +6 for Spearmen, Silverin Guard, Rangers, Archers and Lothern Sea Guard units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "melee", description: "Melee attack: +8 for Spearmen, Silverin Guard, Rangers, Archers and Lothern Sea Guard units", ps: "Lord's army" },
                { icon: "defense", description: "Melee defense: +8 for Spearmen, Silverin Guard, Rangers, Archers and Lothern Sea Guard units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        name: "Cavalry Master",
        description: "Years of experience in mounted combat has started to pay off; this one is always in command of both their force and its steeds.",
        icon: "battle-speed",
        ranks: [
            { effects: [
                { icon: "movement", description: "Speed: +5% for Ellyrian Reavers and Silver Helms units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "ranged-damage", description: "Missile strength: +9% for Ellyrian Reavers and Silver Helms units", ps: "Lord's army" },
                { icon: "movement", description: "Speed: +7% for Ellyrian Reavers and Silver Helms units", ps: "Lord's army" },
                { icon: "charge", description: "Speed: +9 for Ellyrian Reavers and Silver Helms units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "ranged-damage", description: "Missile strength: +12% for Ellyrian Reavers and Silver Helms units", ps: "Lord's army" },
                { icon: "movement", description: "Speed: +10% for Ellyrian Reavers and Silver Helms units", ps: "Lord's army" },
                { icon: "charge", description: "Speed: +12 for Ellyrian Reavers and Silver Helms units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        name: "Bow Master",
        description: "Missile combat isn't always about attacking; knowing how to defend also pay dividens.",
        icon: "battle-ammo",
        ranks: [
            { effects: [
                { icon: "ammo", description: "Ammunition: +8% for Archers, Lothern Sea Guard, Shadow WArriors, Shadow-walkers, Sisters of Avelorn and Bolt Thrower units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "ammo", description: "Ammunition: +12% for Archers, Lothern Sea Guard, Shadow WArriors, Shadow-walkers, Sisters of Avelorn and Bolt Thrower units", ps: "Lord's army" },
                { icon: "reload-time", description: "Reload time reduction: +7% for Archers, Lothern Sea Guard, Shadow WArriors, Shadow-walkers, Sisters of Avelorn and Bolt Thrower units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "ammo", description: "Ammunition: +20% for Archers, Lothern Sea Guard, Shadow WArriors, Shadow-walkers, Sisters of Avelorn and Bolt Thrower units", ps: "Lord's army" },
                { icon: "reload-time", description: "Reload time reduction: +10% for Archers, Lothern Sea Guard, Shadow WArriors, Shadow-walkers, Sisters of Avelorn and Bolt Thrower units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        name: "Sky Master",
        description: "The firmament holds no fear for this one, such is their command of the many airborne beasts of battle.",
        icon: "battle-damage",
        ranks: [
            { effects: [
                { icon: "weapon-damage", description: "Weapon strength: +6% for Great Eagle, Phoenix and Dragon units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "weapon-damage", description: "Weapon strength: +9% for Great Eagle, Phoenix and Dragon units", ps: "Lord's army" },
                { icon: "charge", description: "Charge bonus: +9 for Shades, Dark Riders, Doomfire Warlocks and Scourgerunner Chariot units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "weapon-damage", description: "Weapon strength: +12% for Great Eagle, Phoenix and Dragon units", ps: "Lord's army" },
                { icon: "charge", description: "Charge bonus: +12 for Shades, Dark Riders, Doomfire Warlocks and Scourgerunner Chariot units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        name: "Master Strategist",
        description: "Knowing that it is the rare plan that survives contact with the enemy, yet being prepared for all eventualities, raises this one above mere planners",
        icon: "battle-attack",
        ranks: [
            { effects: [
                { icon: "melee", description: "Melee attack: +4 for Swordmasters of Hoeth, White Lions of Chrace and Phoenix Guard units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "melee", description: "Melee attack: +6 for Swordmasters of Hoeth, White Lions of Chrace and Phoenix Guard units", ps: "Lord's army" },
                { icon: "defense", description: "Melee defense: +6 for Swordmasters of Hoeth, White Lions of Chrace and Phoenix Guard units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "melee", description: "Melee attack: +8 for Swordmasters of Hoeth, White Lions of Chrace and Phoenix Guard units", ps: "Lord's army" },
                { icon: "defense", description: "Melee defense: +8 for Swordmasters of Hoeth, White Lions of Chrace and Phoenix Guard units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        name: "Vanguard Master",
        description: "Being present at the very forefront of the assault, on many occasions, prepares one for future engagements of a similar nature.",
        icon: "battle-charge",
        ranks: [
            { effects: [
                { icon: "charge", description: "Charge bonus: +6 for Chariot, War Lion and Dragon Princes units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "melee", description: "Melee attack: +6 for Chariot, War Lion and Dragon Princes units", ps: "Lord's army" },
                { icon: "ranged-damage", description: "Melee defense: +9% for Chariot, War Lion and Dragon Princes units", ps: "Lord's army" },
                { icon: "charge", description: "Charge bonus: +9 for Chariot, War Lion and Dragon Princes units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "melee", description: "Melee attack: +8 for Chariot, War Lion and Dragon Princes units", ps: "Lord's army" },
                { icon: "ranged-damage", description: "Melee defense: +12% for Chariot, War Lion and Dragon Princes units", ps: "Lord's army" },
                { icon: "charge", description: "Charge bonus: +12 for Chariot, War Lion and Dragon Princes units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        name: "Immovable Force",
        description: "Like a wall of the hardest stone imaginable - such is their ability to withstand attack.",
        icon: "battle-damage",
        ranks: [
            { effects: [
                { icon: "weapon-damage", description: "Weapon strength: +10% for Spearmen, Silverin Guard, Silver Helms, Swordmasters of Hoeth and White Lions of Chrace units", rank: 7, ps: "Lord's army" },
                { icon: "defense", description: "Melee defense: +5 for Spearmen, Silverin Guard, Silver Helms, Swordmasters of Hoeth and White Lions of Chrace units", rank: 7, ps: "Lord's army" },
                { icon: "resistance-physical", description: "Physical resistance: 15% for Spearmen, Silverin Guard, Silver Helms, Swordmasters of Hoeth and White Lions of Chrace units", psIcon: "goldChevron", rank: 7, ps: "Lord's army" }
            ] }
        ]
    },
    {
        name: "Favourable Winds",
        description: "When the gale always blows in the direction of your choosing, failure becomes a rare event indeed.",
        icon: "battle-ranged-damage",
        ranks: [
            { effects: [
                { icon: "ranged-damage", description: "Missile strength: +12 for Archers and Lothern Sea Guard, Shadow Warriors, Shadow-walkers, Sisters of Avelorn and Bolt Thrower units", rank: 7, ps: "Lord's army" },
                { icon: "armor", description: "Armour: +10% for Archers and Lothern Sea Guard, Shadow Warriors, Shadow-walkers, Sisters of Avelorn and Bolt Thrower units", rank: 7, ps: "Lord's army" },
                { icon: "resistance-missile", description: "Missile resistance: +10% for Archers and Lothern Sea Guard, Shadow Warriors, Shadow-walkers, Sisters of Avelorn and Bolt Thrower units", rank: 7, ps: "Lord's army" }
            ] }
        ]
    },
    {
        name: "Silver Torrent",
        description: "Speed, agility and control - all must be mastered if your crushing tide is to break perfectly upon enemy shores.",
        icon: "battle-speed",
        ranks: [
            { effects: [
                { icon: "movement", description: "Speed: +10% for Rangers, Great Eagle, War Lion, Chariot and Ellyrian Reavers units", rank: 7, ps: "Lord's army" },
                { icon: "weapon-damage", description: "Weapon strength: +12% for Rangers, Great Eagle, War Lion, Chariot and Ellyrian Reavers units", rank: 7, ps: "Lord's army" },
                { icon: "resistance-missile", description: "Missile resistance: +15% for Rangers, Great Eagle, War Lion, Chariot and Ellyrian Reavers units", rank: 7, ps: "Lord's army" }
            ] }
        ]
    },
    {
        name: "Heart of the Flame",
        description: "The very centre of the fire always burns the hottest.",
        icon: "battle-defense",
        ranks: [
            { effects: [
                { icon: "armor", description: "Armour: +10 for Dragon, Phoenixes, Dragon Princes and Phoenix Guard units", rank: 7, ps: "Lord's army" },
                { icon: "defense", description: "Melee defense: +5 for Dragon, Phoenixes, Dragon Princes and Phoenix Guard units", rank: 7, ps: "Lord's army" },
                { icon: "resistance-physical", description: "Physical resistance: 5% for Dragon, Phoenixes, Dragon Princes and Phoenix Guard units", rank: 7, ps: "Lord's army" }
            ] }
        ]
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
        name: "Merchant Lord",
        description: "Underlying most arguments against the free market is a lack of belief in freedom itself.",
        icon: "campaign-trade",
        ranks: [
            { effects: [{ icon: "trade", description: "Additional tradable resources produced: +3%", ps: "factionwide" }] },
            { effects: [{ icon: "trade", description: "Additional tradable resources produced: +5%", ps: "factionwide" }] },
            { effects: [{ icon: "trade", description: "Additional tradable resources produced: +9%", ps: "factionwide" }] }            
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
        name: "Elven Scholar",
        description: "Far removed from the petty squabbles of other races, many High Elves are able to devote themselves to learning, magic and the arts.",
        icon: "campaign-technology",
        ranks: [
            { effects: [
                { icon: "item-ability", description: "Magic item drop chance: +8%" },
                { icon: "technology", description: "Research rate: +5%", ps: "factionwide" },
            ] },
            { effects: [
                { icon: "item-ability", description: "Magic item drop chance: +16%" },
                { icon: "technology", description: "Research rate: +10%", ps: "factionwide" },
            ] },
            { effects: [
                { icon: "item-ability", description: "Magic item drop chance: +24%" },
                { icon: "technology", description: "Research rate: +15%", ps: "factionwide" },
            ] }
        ]
    },
    {
        name: "Radiant",
        description: "She is the Radiant - Isha's chosen - her beauty radiating not merely from without but from within.",
        icon: "campaign-public-order",
        ranks: [
            { effects: [
                { icon: "public-order", description: "Public order: +2" },
            ] },
            { effects: [
                { icon: "public-order", description: "Public order: +4" },
            ] },
            { effects: [
                { icon: "public-order", description: "Public order: +6" },
            ] }
        ]
    },
    {
        name: "Renowned & Loved",
        description: "All Asur adore the Everqueen, but Alarielle is especially beloved for her willingness to join warriors in battle.",
        icon: "campaign-agent",
        ranks: [
            { effects: [
                { icon: "coin", description: "Upkeep: -8% for all units", ps: "Lord's army" },
                { icon: "campaign-movement", description: "Campaign movement range: +5%" },
                { icon: "experience", description: "Recruit rank: +1 for all units" },
                { icon: "income", description: "Income from all buildings: 15%", ps: "local province" }
            ] }     
        ]
    },
    {
        name: "Searing Doom",
        description: "A spray of sizzling silver slivers rain from the sky to impale the caster's enemy.",
        icon: "spell-searing-doom",
        ranks: [
            { effects: [
                { icon: "spell-searing-doom", description: "Overcast spell: \"Searing Doom\"" },
                { icon: "spell-searing-doom", description: "Cooldown: -30% to \"Searing Doom\"" }
            ] },
            { effects: [
                { icon: "spell-searing-doom", description: "Overcast spell: \"Searing Doom Upgraded\"" },
                { icon: "spell-searing-doom", description: "Cooldown: -50% to \"Searing Doom\"" },
                { icon: "spell-searing-doom", description: "Winds of Magic cost: -1 for \"Searing Doom\"" },
                { icon: "spell-searing-doom", description: "Winds of Magic cost: -2 for \"Searing Doom Upgraded\"" },
                { icon: "spell-searing-doom", description: "Miscast base chance: -15% for \"Searing Doom Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "common",
            cost: [10, 8],
            cooldown: "30",
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
                    { text: "Increased number of missiles", uptick: "up-blue", color: "blue" },
                    { text: "Wider strike area", uptick: "up-blue", color: "blue" },
                    { text: "Causes moderate", icon: "icon-magic", postText: "magical damage", uptick: "up-green", color: "green" },
                    { text: "Large strike area", uptick: "up-green", color: "green" },
                    { text: "Strong vs. a single unit", uptick: "up-green", color: "green" },
                    { text: "Weak vs. a single combatant", uptick: "down-red", color: "red" }
                ]
            }
        }
    },
    {
        name: "Plague of Rust",
        description: "The enemy target's armour begins to rust, disappearing in clouds of tiny flakes and weakening his defensive abilities.",
        icon: "spell-plague-of-rust",
        ranks: [
            { effects: [
                { icon: "spell-plague-of-rust", description: "Overcast spell: \"Plague of Rust\"" },
                { icon: "spell-plague-of-rust", description: "Cooldown: -30% to \"Plague of Rust\"" }
            ] },
            { effects: [
                { icon: "spell-plague-of-rust", description: "Overcast spell: \"Plague of Rust Upgraded\"" },
                { icon: "spell-plague-of-rust", description: "Cooldown: -50% to \"Plague of Rust\"" },
                { icon: "spell-plague-of-rust", description: "Winds of Magic cost: -1 for \"Plague of Rust\"" },
                { icon: "spell-plague-of-rust", description: "Winds of Magic cost: -1 for \"Plague of Rust Upgraded\"" },
                { icon: "spell-plague-of-rust", description: "Miscast base chance: -15% for \"Plague of Rust Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "common",
            cost: [6, 5],
            cooldown: "28",
            attributes: {
                type: "Hex",
                duration: "44 seconds",
                target: [
                    { text: "Enemy" },
                    { text: "200m", uptick: "range" }
                ],
                miscastChance:  {"0": "50", "1": "35"},
                effects: [
                    { text: "Greater effect on", icon: "armor-character", postText: "armour", uptick: "up-blue", color: "blue" },
                    { text: "-60", icon: "armor-character", postText: "Armour", color: "red" }
                ]
            }
        }
    },
    {
        name: "Metalshifting",
        description: "Armour is little defense against a skilled alchemist, under his command metal turns into an arcane lightning rod, attracting hostile magic.",
        icon: "spell-metalshifting",
        ranks: [
            { effects: [
                { icon: "spell-metalshifting", description: "Passive ability: \"Metalshifting\"" }
            ] }
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
                actriveIf: "Casting",
                effectRange: "Map-wide",
                effects: [
                    { text: "Metalshifting (13 seconds)", color: "green" },
                    { text: "+12%", icon: "icon-armor-piercing", postText: "Armour-Piercing Weapon Damage", color: "green" },
                    { text: "+12%", icon: "icon-damage-base", postText: "Base Weapon Damage", color: "green" }
                ]
            }
        }
    },
    {
        name: "Glittering Robe",
        description: "The Alchemist conjures a gaudy cloak of shimmering scale to improve his allies; defensive stance.",
        icon: "spell-glittering-robe",
        ranks: [
            { effects: [
                { icon: "spell-glittering-robe", description: "Overcast spell: \"Glittering Robe\"" },
                { icon: "spell-glittering-robe", description: "Overcast spell: \"Glittering Robe Upgraded\"" },
                { icon: "spell-glittering-robe", description: "Cooldown: -30% to \"Glittering Robe\"" }
            ] },
            { effects: [
                { icon: "spell-glittering-robe", description: "Overcast spell: \"Glittering Robe Upgraded\"" },
                { icon: "spell-glittering-robe", description: "Cooldown: -50% to \"Glittering Robe\"" },
                { icon: "spell-glittering-robe", description: "Winds of Magic cost: -1 for \"Glittering Robe\"" },
                { icon: "spell-glittering-robe", description: "Winds of Magic cost: -2 for \"Glittering Robe Upgraded\"" },
                { icon: "spell-glittering-robe", description: "Miscast base chance: -15% for \"Glittering Robe Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "uncommon",
            cost: [12, 10],
            cooldown: "42",
            attributes: {
                type: [
                    { text: "Augment (Area)" },
                    { text: "Instantly affect targets in area" }
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
                    { text: "Added effect area", uptick: "up-blue", color: "blue" },
                    { text: "+60", icon: "armor-character", postText: "Armour", color: "green" }
                ]
            }
        }
    },
    {
        name: "Gehenna's Golden Hounds",
        description: "Blowing on a glimmering golden whistle, the Wizard summons the spirit of Gehenna's metal hounds to hunt down his prey.",
        icon: "spell-gehennas-golden-hounds",
        ranks: [
            { effects: [
                { icon: "spell-gehennas-golden-hounds", description: "Overcast spell: \"Gehenna's Golden Hounds\"" },
                { icon: "spell-gehennas-golden-hounds", description: "Overcast spell: \"Gehenna's Golden Hounds Upgraded\"" },
                { icon: "spell-gehennas-golden-hounds", description: "Cooldown: -30% to \"Gehenna's Golden Hounds\"" }
            ] },
            { effects: [
                { icon: "spell-gehennas-golden-hounds", description: "Overcast spell: \"Gehenna's Golden Hounds Upgraded\"" },
                { icon: "spell-gehennas-golden-hounds", description: "Cooldown: -50% to \"Gehenna's Golden Hounds\"" },
                { icon: "spell-gehennas-golden-hounds", description: "Winds of Magic cost: -2 for \"Gehenna's Golden Hounds\"" },
                { icon: "spell-gehennas-golden-hounds", description: "Winds of Magic cost: -3 for \"Gehenna's Golden Hounds Upgraded\"" },
                { icon: "spell-gehennas-golden-hounds", description: "Miscast base chance: -15% for \"Gehenna's Golden Hounds Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "uncommon",
            cost: [12, 9],
            cooldown: "45",
            attributes: {
                type: "Vortex",
                duration: "26 seconds",
                target: [
                    { text: "Ground" },
                    { text: "150m", uptick: "range" }
                ],
                cannotUseIf: "Climbing",
                cannotTargetIf: "Flying, On a wall",
                miscastChance:  {"0": "50", "1": "35"},
                effects: [
                    { text: "Extended effect duration", uptick: "up-blue", color: "blue" },
                    { text: "Causes major", icon: "icon-magic", postText: "magical damage", uptick: "up-green", color: "green" },
                    { text: "Large, randomly-moving area of effect", uptick: "up-green", color: "green" },
                    { text: "Strong vs. multiple units", uptick: "up-green", color: "green" },
                    { text: "Weak vs. a single combatant", uptick: "down-red", color: "red" }
                ]
            }
        }
    },
    {
        name: "Transmutation of Lead",
        description: "Blowing on a glimmering golden whistle, the Wizard summons the spirit of Gehenna's metal hounds to hunt down his prey.",
        icon: "spell-transmutation-of-lead",
        ranks: [
            { effects: [
                { icon: "spell-transmutation-of-lead", description: "Overcast spell: \"Transmutation of Lead\"" },
                { icon: "spell-transmutation-of-lead", description: "Overcast spell: \"Transmutation of Lead Upgraded\"" },
                { icon: "spell-transmutation-of-lead", description: "Cooldown: -30% to \"Transmutation of Lead\"" }
            ] },
            { effects: [
                { icon: "spell-transmutation-of-lead", description: "Overcast spell: \"Transmutation of Lead Upgraded\"" },
                { icon: "spell-transmutation-of-lead", description: "Cooldown: -50% to \"Transmutation of Lead\"" },
                { icon: "spell-transmutation-of-lead", description: "Winds of Magic cost: -2 for \"Transmutation of Lead\"" },
                { icon: "spell-transmutation-of-lead", description: "Winds of Magic cost: -3 for \"Transmutation of Lead Upgraded\"" },
                { icon: "spell-transmutation-of-lead", description: "Miscast base chance: -15% for \"Transmutation of Lead Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "rare",
            cost: [16, 13],
            cooldown: "47",
            attributes: {
                type: [
                    { text: "Hex (Area)" },
                    { text: "Only acts on targets when in area" },
                ],
                duration: "38 seconds",
                target: [
                    { text: "Ground, Enemy" },
                    { text: "Affects enemies in range" },
                    { text: "200m", uptick: "range" }
                ],
                effectRange: "40m",
                miscastChance:  {"0": "50", "1": "35"},
                effects: [
                    { text: "Greater effect on", icon: "damage", postText: "melee damage", uptick: "up-blue", color: "blue" },
                    { text: "-60%", icon: "icon-damage-base", postText: "Base Weapon Damage", color: "red" },
                    { text: "-24", icon: "melee-character", postText: "Melee Attack", color: "red" }
                ]
            }
        }
    },
    {
        name: "Final Transmutation",
        description: "Blowing on a glimmering golden whistle, the Wizard summons the spirit of Gehenna's metal hounds to hunt down his prey.",
        icon: "spell-final-transmutation",
        ranks: [
            { effects: [
                { icon: "spell-final-transmutation", description: "Spell: \"Final Transmutation\"" },
                { icon: "spell-final-transmutation", description: "Overcast spell: \"Final Transmutation Upgraded\"" },
                { icon: "spell-final-transmutation", description: "Cooldown: -30% to \"Final Transmutation\"" }
            ] },
            { effects: [
                { icon: "spell-final-transmutation", description: "Overcast spell: \"Final Transmutation Upgraded\"" },
                { icon: "spell-final-transmutation", description: "Cooldown: -50% to \"Final Transmutation\"" },
                { icon: "spell-final-transmutation", description: "Winds of Magic cost: -2 for \"Final Transmutation\"" },
                { icon: "spell-final-transmutation", description: "Winds of Magic cost: -4 for \"Final Transmutation Upgraded\"" },
                { icon: "spell-final-transmutation", description: "Miscast base chance: -15% for \"Final Transmutation Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "rare",
            cost: [28, 24],
            cooldown: "54",
            attributes: {
                type: [
                    { text: "Direct Damage (Area)" },
                    { text: "Only acts on targets when in area" },
                ],
                duration: "16 seconds",
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
                    { text: "-Chance opponent will resist damage", uptick: "down-red", color: "red" },
                    { text: "Weav vs. a single unit", uptick: "down-red", color: "red" }
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
        name: "Awakening of the Wood",
        description: "Trees live for thousands of years and have very long memories. When called to fight, cenuries of pent-up wrath are unleashed.",
        icon: "spell-awakening-of-the-wood",
        ranks: [
            { effects: [
                { icon: "spell-awakening-of-the-wood", description: "Spell: \"Awakening of the Wood\"" },
                { icon: "spell-awakening-of-the-wood", description: "Cooldown: -30% to \"Awakening of the Wood\"" }
            ] },
            { effects: [
                { icon: "spell-awakening-of-the-wood", description: "Spell: \"Awakening of the Wood\"" },
                { icon: "spell-awakening-of-the-wood", description: "Cooldown: -50% to \"Awakening of the Wood\"" },
                { icon: "spell-awakening-of-the-wood", description: "Winds of Magic cost: -1 for \"Awakening of the Wood\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "common",
            cost: [6, 5],
            cooldown: [21, 15],
            attributes: {
                type: "Explosion",
                duration: "12 seconds",
                target: [
                    { text: "Ground" },
                    { text: "200m", uptick: "range" }
                ],
                cannotUseIf: "Climbing",
                cannotTargetIf: "Flying",
                effects: [
                    { text: "Causes minor", icon: "icon-magic", postText: "magical damage", uptick: "up-green", color: "green" },
                    { text: "Large explosion area", uptick: "up-green", color: "green" },
                    { text: "Weak against armour", uptick: "down-red", color: "red" },
                    { text: "-48%", icon: "movement-character", postText: "Speed", color: "red" }
                ]
            }
        }
    },
    {
        name: "Life Bloom",
        description: "Even the simplest of spells can bring forth the full bloom of renewal, reinvigorating and healing the broken and bleeding.",
        icon: "spell-life-bloom",
        ranks: [
            { effects: [
                { icon: "spell-life-bloom", description: "Passive ability: \"Life Bloom\"" }
            ] }
        ],
        spell: {
            description: "Lore attribute",
            rarity: "common",
            attributes: {
                type: "Regeneration (Area)",
                duration: "Constant",
                target: [
                    { text: "Self" },
                    { text: "Affects allies in range" }
                ],
                activeIf: "Casting",
                effectRange: "Map-wide",
                effects: [
                    { text: "Triggers when casting spell", uptick: "up-green", color: "green" },
                    { text: "Restores up to", icon: "hp", postText: "40 Hit Points", uptick: "up-green", color: "green" }
                ]
            }
        }
    },
    {
        name: "Earth Blood",
        description: "Waves of pure High Magic infuse the target, radiating within the body, returning vigour and life.",
        icon: "spell-earth-blood",
        ranks: [
            { effects: [
                { icon: "spell-earth-blood", description: "Spell: \"Earth Blood\"" },
                { icon: "spell-earth-blood", description: "Overcast spell: \"Earth Blood Upgraded\"" },
                { icon: "spell-earth-blood", description: "Cooldown: -30% to \"Earth Blood\"" }
            ] },
            { effects: [
                { icon: "spell-earth-blood", description: "Overcast spell: \"Earth Blood Upgraded\"" },
                { icon: "spell-earth-blood", description: "Cooldown: -50% to \"Earth Blood\"" },
                { icon: "spell-earth-blood", description: "Winds of Magic cost: -2 for \"Earth Blood\"" },
                { icon: "spell-earth-blood", description: "Winds of Magic cost: -3 for \"Earth Blood Upgraded\"" },
                { icon: "spell-earth-blood", description: "Miscast base chance: -15% for \"Earth Blood Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "common",
            cost: [11, 8],
            cooldown: "30",
            attributes: {
                type: [
                    { text: "Regeneration (Area)" },
                    { text: "Instantly affects targets in area" },
                ],
                target: [
                    { text: "Self, Ground, Ally" },
                    { text: "Affects allies in range (max: 4)" },
                    { text: "200m", uptick: "range" }
                ],
                cannotUseIf: "Hit point replenishment cap reached",
                effectRange: "30m",
                miscastChance:  {"0": "50", "1": "35"},
                effects: [
                    { text: "Extended effect duration", uptick: "up-blue", color: "blue" },
                    { text: "Restores up to", icon: "hp", postText: "672 Hit Points", uptick: "up-green", color: "green" }
                ]
            }
        }
    },
    {
        name: "Flesh to Stone",
        description: "This spell temporarily transforms allies' mortal flesh into unbreakable rock, increasing tenfold their resistance to attack.",
        icon: "spell-flesh-to-stone",
        ranks: [
            { effects: [
                { icon: "spell-flesh-to-stone", description: "Spell: \"Flesh to Stone\"" },
                { icon: "spell-flesh-to-stone", description: "Overcast spell: \"Flesh to Stone Upgraded\"" },
                { icon: "spell-flesh-to-stone", description: "Cooldown: -30% to \"Flesh to Stone\"" }
            ] },
            { effects: [
                { icon: "spell-flesh-to-stone", description: "Overcast spell: \"Flesh to Stone Upgraded\"" },
                { icon: "spell-flesh-to-stone", description: "Cooldown: -50% to \"Flesh to Stone\"" },
                { icon: "spell-flesh-to-stone", description: "Winds of Magic cost: -1 for \"Flesh to Stone\"" },
                { icon: "spell-flesh-to-stone", description: "Winds of Magic cost: -1 for \"Flesh to Stone Upgraded\"" },
                { icon: "spell-flesh-to-stone", description: "Miscast base chance: -15% for \"Flesh to Stone Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "uncommon",
            cost: [10, 9],
            cooldown: "43",
            attributes: {
                type: "Augment",
                duration: "88 seconds",
                target: [
                    { text: "Self, Ally" },
                    { text: "200m", uptick: "range" }
                ],
                miscastChance:  {"0": "50", "1": "35"},
                effects: [
                    { text: "Extended effect duration", uptick: "up-blue", color: "blue" },
                    { text: "+60", icon: "armor-character", postText: "Armour", color: "green" }
                ]
            }
        }
    },
    {
        name: "Shield of Thorns",
        description: "Prickly gorse bursts from the ground around the caster's allies, protecting them from attack like a spiky, living shield.",
        icon: "spell-shield-of-thorns",
        ranks: [
            { effects: [
                { icon: "spell-shield-of-thorns", description: "Spell: \"Shield of Thorns\"" },
                { icon: "spell-shield-of-thorns", description: "Overcast spell: \"Shield of Thorns Upgraded\"" },
                { icon: "spell-shield-of-thorns", description: "Cooldown: -30% to \"Shield of Thorns\"" }
            ] },
            { effects: [
                { icon: "spell-shield-of-thorns", description: "Overcast spell: \"Shield of Thorns Upgraded\"" },
                { icon: "spell-shield-of-thorns", description: "Cooldown: -50% to \"Shield of Thorns\"" },
                { icon: "spell-shield-of-thorns", description: "Winds of Magic cost: -2 for \"Shield of Thorns\"" },
                { icon: "spell-shield-of-thorns", description: "Winds of Magic cost: -3 for \"Shield of Thorns Upgraded\"" },
                { icon: "spell-shield-of-thorns", description: "Miscast base chance: -15% for \"Shield of Thorns Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "uncommon",
            cost: [12, 10],
            cooldown: "44",
            attributes: {
                type: [
                    { text: "Augment (Area)" },
                    { text: "Instantly affects targets in area" },
                ],
                duration: "22 seconds",
                target: [
                    { text: "Self, Ground, Ally" },
                    { text: "200m", uptick: "range" }
                ],
                effectRange: "40m",
                miscastChance:  {"0": "50", "1": "35"},
                effects: [
                    { text: "Good against AP damage", uptick: "up-green", color: "green" },
                    { text: "Greater effect on", icon: "damage", postText: "melee damage", uptick: "up-blue", color: "blue" },
                    { text: "+60%", icon: "icon-damage-base", postText: "Hit Points", color: "green" },
                    { text: "+22%", icon: "resistance-physical", postText: "Physical Resistance", color: "green" }
                ]
            }
        }
    },
    {
        name: "Regrowth",
        description: "By speaking Druthandor's name the Wizard is able to heal allies' injuries much faster than by natural means.",
        icon: "spell-regrowth",
        ranks: [
            { effects: [
                { icon: "spell-regrowth", description: "Spell: \"Regrowth\"" },
                { icon: "spell-regrowth", description: "Overcast spell: \"Regrowth Upgraded\"" },
                { icon: "spell-regrowth", description: "Cooldown: -30% to \"Regrowth\"" }
            ] },
            { effects: [
                { icon: "spell-regrowth", description: "Overcast spell: \"Regrowth Upgraded\"" },
                { icon: "spell-regrowth", description: "Cooldown: -50% to \"Regrowth\"" },
                { icon: "spell-regrowth", description: "Winds of Magic cost: -2 for \"Regrowth\"" },
                { icon: "spell-regrowth", description: "Winds of Magic cost: -3 for \"Regrowth Upgraded\"" },
                { icon: "spell-regrowth", description: "Miscast base chance: -15% for \"Regrowth Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "rare",
            cost: [17, 14],
            cooldown: "48",
            attributes: {
                type: "Regeneration",
                duration: "29 seconds",
                target: [
                    { text: "Self, Ally" },
                    { text: "200m", uptick: "range" }
                ],
                cannotTargetIf: "Hit point replenishment cap reached",
                miscastChance:  {"0": "50", "1": "35"},
                effects: [
                    { text: "Greater effect on", icon: "hp", postText: "replenishment", uptick: "up-blue", color: "blue" },
                    { text: "Restores up to", icon: "hp", postText: "2088 Hit Points", uptick: "up-green", color: "green" },
                    { text: "+100%", icon: "fatigue", postText: "Vigour", uptick: "up-green", color: "green" }
                ]
            }
        }
    },
    {
        name: "The Dwellers Below",
        description: "This spell causes gnarled, fibrous hands to emerge from beneath the ground, dragging the foe to a claustrophobic, suffocating end.",
        icon: "spell-the-dwellers-below",
        ranks: [
            { effects: [
                { icon: "spell-the-dwellers-below", description: "Spell: \"The Dwellers Below\"" },
                { icon: "spell-the-dwellers-below", description: "Overcast spell: \"The Dwellers Below Upgraded\"" },
                { icon: "spell-the-dwellers-below", description: "Cooldown: -30% to \"The Dwellers Below\"" }
            ] },
            { effects: [
                { icon: "spell-the-dwellers-below", description: "Overcast spell: \"The Dwellers Below Upgraded\"" },
                { icon: "spell-the-dwellers-below", description: "Cooldown: -50% to \"The Dwellers Below\"" },
                { icon: "spell-the-dwellers-below", description: "Winds of Magic cost: -3 for \"The Dwellers Below\"" },
                { icon: "spell-the-dwellers-below", description: "Winds of Magic cost: -3 for \"The Dwellers Below Upgraded\"" },
                { icon: "spell-the-dwellers-below", description: "Miscast base chance: -15% for \"The Dwellers Below Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "rare",
            cost: [21, 18],
            cooldown: "45",
            attributes: {
                type: "Direct Damage",
                duration: "15 seconds",
                target: [
                    { text: "Ground" },
                    { text: "200m", uptick: "range" }
                ],
                cannotTargetIf: "Flying, On a wall",
                miscastChance:  {"0": "50", "1": "35"},
                effects: [
                    { text: "Greater effect on", icon: "character-movement", postText: "speed", uptick: "up-blue", color: "blue" },
                    { text: "Causes severe damage to combatants", uptick: "up-green", color: "green" },
                    { text: "Huge explosion area", uptick: "up-green", color: "green" },
                    { text: "Strong vs. multiple combatants", uptick: "up-green", color: "green" },
                    { text: "Dwellers Below (2 seconds)", uptick: "down-red", color: "red" },
                    { text: "-48%", icon: "character-movement", postText: "Speed", color: "red" }
                ]
            }
        }
    },
    {
        name: "Harmonic Convergence",
        description: "Divining auspicious signs, the caster guides the minds of targets, augmenting them with the foresight needed for victory.",
        icon: "spell-harmonic-convergence",
        ranks: [
            { effects: [
                { icon: "spell-harmonic-convergence", description: "Overcast spell: \"Harmonic Convergence Upgraded\"" },
                { icon: "spell-harmonic-convergence", description: "Cooldown: -30% to \"Harmonic Convergence\"" }
            ] },
            { effects: [
                { icon: "spell-harmonic-convergence", description: "Overcast spell: \"Harmonic Convergence Upgraded\"" },
                { icon: "spell-harmonic-convergence", description: "Cooldown: -50% to \"Harmonic Convergence\"" },
                { icon: "spell-harmonic-convergence", description: "Winds of Magic cost: -1 for \"Harmonic Convergence\"" },
                { icon: "spell-harmonic-convergence", description: "Winds of Magic cost: -2 for \"Harmonic Convergence Upgraded\"" },
                { icon: "spell-harmonic-convergence", description: "Miscast base chance: -15% for \"Harmonic Convergence Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "common",
            cost: [10, 8],
            cooldown: "30",
            attributes: {
                type: "Regeneration",
                duration: "22 seconds",
                target: [
                    { text: "Self, Ally" },
                    { text: "200m", uptick: "range" }
                ],
                miscastChance:  {"0": "50", "1": "35"},
                effects: [
                    { text: "Additional effect on", icon: "armor-character", postText: "armour", uptick: "up-blue", color: "blue" },
                    { text: "+24", icon: "melee-character", postText: "Melee Attack", color: "green" },
                    { text: "+24", icon: "defense-character", postText: "Melee Defense", color: "green" },
                    { text: "+30", icon: "armor-character", postText: "Armour", color: "green" }
                ]
            }
        }
    },
    {
        name: "Roiling Skies",
        description: "Spells from the Lore of Heavens manipulate the ethers of the skies, buffeting and pummelling winged creatures.",
        icon: "spell-roiling-skies",
        ranks: [
            { effects: [
                { icon: "spell-roiling-skies", description: "Passive ability: \"Roiling Skies\"" }
            ] }
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
                    { text: "Roiling Skies (25 seconds)", color: "red" },
                    { text: "-24%", icon: "movement-character", postText: "Speed", color: "red" },
                    { text: "-20", icon: "defense-character", postText: "Melee Defense", color: "red" }
                ]
            }
        }
    },
    {
        name: "Wind Blast",
        description: "The Astromancer seizes the winds of the battlefield, directing them against the foe to batter the targets with unhallowed gales.",
        icon: "spell-wind-blast",
        ranks: [
            { effects: [
                { icon: "spell-wind-blast", description: "Overcast spell: \"Wind Blast Upgraded\"" },
                { icon: "spell-wind-blast", description: "Cooldown: -30% to \"Wind Blast\"" }
            ] },
            { effects: [
                { icon: "spell-wind-blast", description: "Overcast spell: \"Wind Blast Upgraded\"" },
                { icon: "spell-wind-blast", description: "Cooldown: -50% to \"Wind Blast\"" },
                { icon: "spell-wind-blast", description: "Winds of Magic cost: -1 for \"Wind Blast\"" },
                { icon: "spell-wind-blast", description: "Winds of Magic cost: -2 for \"Wind Blast Upgraded\"" },
                { icon: "spell-wind-blast", description: "Miscast base chance: -15% for \"Wind Blast Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "common",
            cost: [11, 9],
            cooldown: "32",
            attributes: {
                type: "Breath",
                duration: "6 seconds",
                target: [
                    { text: "Ground" },
                    { text: "100m", uptick: "range" }
                ],
                cannotUseIf: "Climbing",
                cannotTargetIf: "Flying, On a wall",
                miscastChance:  {"0": "50", "1": "35"},
                effects: [
                    { text: "Increased", icon: "icon-armor-piercing-ranged", postText: "armour-piercing damage", uptick: "up-blue", color: "blue" },
                    { text: "Causes moderate", icon: "icon-magic", postText: "magical damage", uptick: "up-green", color: "green" },
                    { text: "Expanding tear-shaped attack", uptick: "up-green", color: "green" },
                    { text: "Can disrupt unit formation", uptick: "up-green", color: "green" },
                    { text: "Strong vs. multiple units", uptick: "up-green", color: "green" },
                    { text: "Weak vs. a single combatant", uptick: "down-red", color: "red" }
                ]
            }
        }
    },
    {
        name: "Curse of the Midnight Wind",
        description: "The Wizard issues a three word curse, hexing the target unit and blighting their ability to attack and defend.",
        icon: "spell-curse-of-the-midnight-wind",
        ranks: [
            { effects: [
                { icon: "spell-curse-of-the-midnight-wind", description: "Spell: \"Curse of the Midnight Wind Upgraded\"" },
                { icon: "spell-curse-of-the-midnight-wind", description: "Overcast spell: \"Curse of the Midnight Wind Upgraded\"" },
                { icon: "spell-curse-of-the-midnight-wind", description: "Cooldown: -30% to \"Curse of the Midnight Wind\"" }
            ] },
            { effects: [
                { icon: "spell-curse-of-the-midnight-wind", description: "Overcast spell: \"Curse of the Midnight Wind Upgraded\"" },
                { icon: "spell-curse-of-the-midnight-wind", description: "Cooldown: -50% to \"Curse of the Midnight Wind\"" },
                { icon: "spell-curse-of-the-midnight-wind", description: "Winds of Magic cost: -2 for \"Curse of the Midnight Wind\"" },
                { icon: "spell-curse-of-the-midnight-wind", description: "Winds of Magic cost: -3 for \"Curse of the Midnight Wind Upgraded\"" },
                { icon: "spell-curse-of-the-midnight-wind", description: "Miscast base chance: -15% for \"Curse of the Midnight Wind Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "uncommon",
            cost: [17, 14],
            cooldown: "38",
            attributes: {
                type: [
                    { text: "Hex (Area)" },
                    { text: "Only acts on targets when in area" },
                ],
                duration: "50 seconds",
                target: [
                    { text: "Ground, Enemy" },
                    { text: "Affects enemies in range" },
                    { text: "200m", uptick: "range" }
                ],
                effectRange: "40m",
                miscastChance:  {"0": "50", "1": "35"},
                effects: [
                    { text: "Extended effect duration", uptick: "up-blue", color: "blue" },
                    { text: "-24", icon: "melee-character", postText: "Melee Attack", color: "red" },
                    { text: "-30", icon: "armor-character", postText: "Armour", color: "red" }
                ]
            }
        }
    },
    {
        name: "Urannon's Thunderbolt",
        description: "Waves of pure High Magic infuse the target, radiating within the body, returning vigour and life.",
        icon: "spell-urannons-thunderbolt",
        ranks: [
            { effects: [
                { icon: "spell-urannons-thunderbolt", description: "Spell: \"Urannon's Thunderbolt\"" },
                { icon: "spell-urannons-thunderbolt", description: "Overcast spell: \"Urannon's Thunderbolt Upgraded\"" },
                { icon: "spell-urannons-thunderbolt", description: "Cooldown: -30% to \"Urannon's Thunderbolt\"" }
            ] },
            { effects: [
                { icon: "spell-urannons-thunderbolt", description: "Overcast spell: \"Urannon's Thunderbolt Upgraded\"" },
                { icon: "spell-urannons-thunderbolt", description: "Cooldown: -50% to \"Urannon's Thunderbolt\"" },
                { icon: "spell-urannons-thunderbolt", description: "Winds of Magic cost: -2 for \"Urannon's Thunderbolt\"" },
                { icon: "spell-urannons-thunderbolt", description: "Winds of Magic cost: -3 for \"Urannon's Thunderbolt Upgraded\"" },
                { icon: "spell-urannons-thunderbolt", description: "Miscast base chance: -15% for \"Urannon's Thunderbolt Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "uncommon",
            cost: [10, 8],
            cooldown: "42",
            attributes: {
                type: "Bombardment",
                duration: "4 seconds",
                target: [
                    { text: "Ground" },
                    { text: "300m", uptick: "range" }
                ],
                cannotUseIf: "Climbing",
                miscastChance:  {"0": "50", "1": "35"},
                effects: [
                    { text: "Increased", icon: "icon-armor-piercing-ranged", postText: "armour-piercing damage", uptick: "up-blue", color: "blue" },
                    { text: "Greater", icon: "icon-armor-piercing-ranged", postText: "armour-piercing damage", uptick: "up-blue", color: "blue" },
                    { text: "Causes major", icon: "icon-magic", postText: "magical damage", uptick: "up-green", color: "green" },
                    { text: "Small strike area", uptick: "up-green", color: "green" },
                    { text: "Good against artillery pieces", uptick: "up-green", color: "green" },
                    { text: "Strong vs. multiple combatants", uptick: "up-green", color: "green" },
                    { text: "Good against armour", uptick: "up-green", color: "green" }
                ]
            }
        }
    },
    {
        name: "Comet of Casandora",
        description: "Waves of pure High Magic infuse the target, radiating within the body, returning vigour and life.",
        icon: "spell-comet-of-casandora",
        ranks: [
            { effects: [
                { icon: "spell-comet-of-casandora", description: "Spell: \"Comet of Casandora\"" },
                { icon: "spell-comet-of-casandora", description: "Overcast spell: \"Comet of Casandora Upgraded\"" },
                { icon: "spell-comet-of-casandora", description: "Cooldown: -30% to \"Comet of Casandora\"" }
            ] },
            { effects: [
                { icon: "spell-comet-of-casandora", description: "Overcast spell: \"Comet of Casandora Upgraded\"" },
                { icon: "spell-comet-of-casandora", description: "Cooldown: -50% to \"Comet of Casandora\"" },
                { icon: "spell-comet-of-casandora", description: "Winds of Magic cost: -2 for \"Comet of Casandora\"" },
                { icon: "spell-comet-of-casandora", description: "Winds of Magic cost: -4 for \"Comet of Casandora Upgraded\"" },
                { icon: "spell-comet-of-casandora", description: "Miscast base chance: -15% for \"Comet of Casandora Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "rare",
            cost: [20, 16],
            cooldown: "49",
            attributes: {
                type: "Bombardment",
                duration: "7 seconds",
                target: [
                    { text: "Ground" },
                    { text: "200m", uptick: "range" }
                ],
                cannotUseIf: "Climbing",
                miscastChance:  {"0": "50", "1": "35"},
                effects: [
                    { text: "Greater", icon: "icon-armor-piercing-ranged", postText: "armour-piercing damage", uptick: "up-blue", color: "blue" },
                    { text: "Causes massive", icon: "icon-magic", postText: "magical damage", uptick: "up-green", color: "green" },
                    { text: "Large strike area", uptick: "up-green", color: "green" },
                    { text: "Huge explosion area", uptick: "up-green", color: "green" },
                    { text: "Good against armour", uptick: "up-green", color: "green" },
                    { text: "Strong vs. multiple units", uptick: "up-green", color: "green" }
                ]
            }
        }
    },
    {
        name: "Chain Lightning",
        description: "Lightning arcs across the battlefield, leaping from foe-to-foe with crackling fury until there are none left within the storm.",
        icon: "spell-chain-lightning",
        ranks: [
            { effects: [
                { icon: "spell-chain-lightning", description: "Spell: \"Chain Lightning\"" },
                { icon: "spell-chain-lightning", description: "Cooldown: -50% to \"Chain Lightning\"" },
                { icon: "spell-chain-lightning", description: "Winds of Magic cost: -3 for \"Chain Lightning\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "rare",
            cost: [11],
            cooldown: "25",
            attributes: {
                type: "Vortex",
                duration: "21 seconds",
                target: [
                    { text: "Ground" },
                    { text: "150m", uptick: "range" }
                ],
                cannotUseIf: "Climbing",
                cannotTargetIf: "On a wall",
                effects: [
                    { text: "Causes major", icon: "icon-magic", postText: "magical damage", uptick: "up-green", color: "green" },
                    { text: "Large, randomly-moving area of effect", uptick: "up-green", color: "green" },
                    { text: "Strong vs. multiple units", uptick: "up-green", color: "green" },
                    { text: "Good against armour", uptick: "up-green", color: "green" },
                    { text: "Weak vs. a single combatant", uptick: "down-red", color: "red" }
                ]
            }
        }
    },
    {
        name: "Shem's Burning Gaze",
        description: "Bolts of cleansing energy fly from the Wizard's hands, searing evil wherever they strike.",
        icon: "spell-shems-burning-gaze",
        ranks: [
            { effects: [
                { icon: "spell-shems-burning-gaze", description: "Overcast spell: \"Shem's Burning Gaze Upgraded\"" },
                { icon: "spell-shems-burning-gaze", description: "Cooldown: -30% to \"Shem's Burning Gaze\"" }
            ] },
            { effects: [
                { icon: "spell-shems-burning-gaze", description: "Overcast spell: \"Shem's Burning Gaze Upgraded\"" },
                { icon: "spell-shems-burning-gaze", description: "Cooldown: -50% to \"Shem's Burning Gaze\"" },
                { icon: "spell-shems-burning-gaze", description: "Winds of Magic cost: -1 for \"Shem's Burning Gaze\"" },
                { icon: "spell-shems-burning-gaze", description: "Winds of Magic cost: -2 for \"Shem's Burning Gaze\"" },
                { icon: "spell-shems-burning-gaze", description: "Miscast base chance: -15% for \"Shem's Burning Gaze\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "common",
            cost: [9, 7],
            cooldown: "30",
            attributes: {
                type: "Magic Missiles",
                target: [
                    { text: "Enemy" },
                    { text: "250m", uptick: "range" }
                ],
                cannotUseIf: "Manning equipment, Climbing",
                projectileRange: "250m",
                miscastChance:  {"0": "50", "1": "35"},
                effects: [
                    { text: "Increased", icon: "icon-armor-piercing-ranged", postText: "armour-piercing damage", uptick: "up-blue", color: "blue" },
                    { text: "Causes minor magical & fire damage", uptick: "up-green", color: "green" },
                    { text: "Good from a high angle", uptick: "up-green", color: "green" },
                    { text: "Good against large combatants", uptick: "up-green", color: "green" },
                    { text: "Good against armour", uptick: "up-green", color: "green" },
                    { text: "Strong vs. a single combatant", uptick: "up-green", color: "green" }
                ]
            }
        }
    },
    {
        name: "Exorcism",
        description: "Light Magic excels at the scourging of the supernatural, be they Daemons and creatures of Chaos, or the unquiet dead.",
        icon: "spell-exorcism",
        ranks: [
            { effects: [
                { icon: "spell-exorcism", description: "Passive ability: \"Shield of Saphery\"" }
            ] }
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
                    { text: "Exorcism (11 seconds)", color: "green" },
                    { text: "+4", icon: "resistance-physical", postText: "Leadership", color: "green" },
                    { icon: "attribute-psychology", postText: "Immune to Psychology", uptick: "up-green", color: "green" }
                ]
            }
        }
    },
    {
        name: "Pha's Protection",
        description: "Divining auspicious signs, the caster guides the minds of targets, augmenting them with the foresight needed for victory.",
        icon: "spell-phas-protection",
        ranks: [
            { effects: [
                { icon: "spell-phas-protection", description: "Spell: \"Pha's Protection\"" },
                { icon: "spell-phas-protection", description: "Overcast spell: \"Pha's Protection Upgraded\"" },
                { icon: "spell-phas-protection", description: "Cooldown: -30% to \"Pha's Protection\"" }
            ] },
            { effects: [
                { icon: "spell-phas-protection", description: "Overcast spell: \"Pha's Protection Upgraded\"" },
                { icon: "spell-phas-protection", description: "Cooldown: -50% to \"Pha's Protection\"" },
                { icon: "spell-phas-protection", description: "Winds of Magic cost: -1 for \"Pha's Protection\"" },
                { icon: "spell-phas-protection", description: "Winds of Magic cost: -2 for \"Pha's Protection Upgraded\"" },
                { icon: "spell-phas-protection", description: "Miscast base chance: -15% for \"Pha's Protection Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "common",
            cost: [10, 8],
            cooldown: "29",
            attributes: {
                type: [
                    { text: "Augment" },
                    { text: "Instantly affects targets in area" },
                ],
                duration: "22 seconds",
                target: [
                    { text: "Self, Ground, Ally" },
                    { text: "Affects allies in range" },
                    { text: "200m", uptick: "range" }
                ],
                effectRange: "40m",
                miscastChance:  {"0": "50", "1": "35"},
                effects: [
                    { text: "Added effect area", uptick: "up-blue", color: "blue" },
                    { text: "+30", icon: "armor-character", postText: "Armour", color: "green" },
                    { text: "+24", icon: "defense-character", postText: "Melee Defense", color: "green" }
                ]
            }
        }
    },
    {
        name: "Light of Battle",
        description: "Reaching into the Wind of Hysh, the Wizard draws forth ennobling energies to steady faint hearts - augmenting allies with courage.",
        icon: "spell-light-of-battle",
        ranks: [
            { effects: [
                { icon: "spell-light-of-battle", description: "Spell: \"Light of Battle\"" },
                { icon: "spell-light-of-battle", description: "Overcast spell: \"Light of Battle Upgraded\"" },
                { icon: "spell-light-of-battle", description: "Cooldown: -30% to \"Light of Battle\"" }
            ] },
            { effects: [
                { icon: "spell-light-of-battle", description: "Overcast spell: \"Light of Battle Upgraded\"" },
                { icon: "spell-light-of-battle", description: "Cooldown: -50% to \"Light of Battle\"" },
                { icon: "spell-light-of-battle", description: "Winds of Magic cost: -1 for \"Light of Battle\"" },
                { icon: "spell-light-of-battle", description: "Winds of Magic cost: -2 for \"Light of Battle Upgraded\"" },
                { icon: "spell-light-of-battle", description: "Miscast base chance: -15% for \"Light of Battle Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "common",
            cost: [11, 9],
            cooldown: "43",
            attributes: {
                type: [
                    { text: "Augment" },
                    { text: "Instantly affects targets in area" },
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
                    { text: "Extended effect duration", uptick: "up-blue", color: "blue" },
                    { icon: "unbreakable", postText: "Unbreakable", uptick: "up-green", color: "green" }
                ]
            }
        }
    },
    {
        name: "Net of Amyntok",
        description: "The Wizard casts an arcane net, created to hold the Great Deceiver himself. Any caught in its strands will struggle to act.",
        icon: "spell-net-of-amyntok",
        ranks: [
            { effects: [
                { icon: "spell-net-of-amyntok", description: "Spell: \"Net of Amyntok\"" },
                { icon: "spell-net-of-amyntok", description: "Overcast spell: \"Net of Amyntok Upgraded\"" },
                { icon: "spell-net-of-amyntok", description: "Cooldown: -30% to \"Net of Amyntok\"" }
            ] },
            { effects: [
                { icon: "spell-net-of-amyntok", description: "Overcast spell: \"Net of Amyntok Upgraded\"" },
                { icon: "spell-net-of-amyntok", description: "Cooldown: -50% to \"Net of Amyntok\"" },
                { icon: "spell-net-of-amyntok", description: "Winds of Magic cost: -2 for \"Net of Amyntok\"" },
                { icon: "spell-net-of-amyntok", description: "Winds of Magic cost: -3 for \"Net of Amyntok Upgraded\"" },
                { icon: "spell-net-of-amyntok", description: "Miscast base chance: -15% for \"Net of Amyntok Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "uncommon",
            cost: [18, 15],
            cooldown: "38",
            attributes: {
                type: [
                    { text: "Hex (Area)" },
                    { text: "Only acts on targets when in area" },
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
                    { text: "Added effect area", uptick: "up-blue", color: "blue" },
                    { text: "Cannot move", uptick: "down-red", color: "red" }
                ]
            }
        }
    },
    {
        name: "Banishment",
        description: "The spirits of ancient warriors are summoned and lend their might to allies in the present.",
        icon: "spell-banishment",
        ranks: [
            { effects: [
                { icon: "spell-banishment", description: "Spell: \"Banishment\"" },
                { icon: "spell-banishment", description: "Overcast spell: \"Banishment Upgraded\"" },
                { icon: "spell-banishment", description: "Cooldown: -30% to \"Banishment\"" }
            ] },
            { effects: [
                { icon: "spell-banishment", description: "Overcast spell: \"Banishment Upgraded\"" },
                { icon: "spell-banishment", description: "Cooldown: -50% to \"Banishment\"" },
                { icon: "spell-banishment", description: "Winds of Magic cost: -2 for \"Banishment\"" },
                { icon: "spell-banishment", description: "Winds of Magic cost: -3 for \"Banishment Upgraded\"" },
                { icon: "spell-banishment", description: "Miscast base chance: -15% for \"Banishment Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "rare",
            cost: [24, 21],
            cooldown: "54",
            attributes: {
                type: "Vortex",
                duration: "18 seconds",
                target: [
                    { text: "Ground" },
                    { text: "150m", uptick: "range" }
                ],
                cannotUseIf: "Climbing",
                cannotTargetIf: "On a wall",
                miscastChance:  {"0": "50", "1": "35"},
                effects: [
                    { text: "Increased damage", uptick: "up-blue", color: "blue" },
                    { text: "Causes moderate", icon: "icon-magic", postText: "magical damage", uptick: "up-green", color: "green" },
                    { text: "Huge, randomly-moving area of effect", uptick: "up-green", color: "green" },
                    { text: "Can disrupt unit formation", uptick: "up-green", color: "green" },
                    { text: "Strong vs. multiple units", uptick: "up-green", color: "green" },
                    { text: "Good against armour", uptick: "up-green", color: "green" }
                ]
            }
        }
    },
    {
        name: "Birona's Timewarp",
        description: "The Wizard casts an arcane net, created to hold the Great Deceiver himself. Any caught in its strands will struggle to act.",
        icon: "spell-bironas-timewarp",
        ranks: [
            { effects: [
                { icon: "spell-bironas-timewarp", description: "Spell: \"Birona's Timewarp\"" },
                { icon: "spell-bironas-timewarp", description: "Overcast spell: \"Birona's Timewarp Upgraded\"" },
                { icon: "spell-bironas-timewarp", description: "Cooldown: -30% to \"Birona's Timewarp\"" }
            ] },
            { effects: [
                { icon: "spell-bironas-timewarp", description: "Overcast spell: \"Birona's Timewarp Upgraded\"" },
                { icon: "spell-bironas-timewarp", description: "Cooldown: -50% to \"Birona's Timewarp\"" },
                { icon: "spell-bironas-timewarp", description: "Winds of Magic cost: -2 for \"Birona's Timewarp\"" },
                { icon: "spell-bironas-timewarp", description: "Winds of Magic cost: -3 for \"Birona's Timewarp Upgraded\"" },
                { icon: "spell-bironas-timewarp", description: "Miscast base chance: -15% for \"Birona's Timewarp Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "rare",
            cost: [14, 11],
            cooldown: "47",
            attributes: {
                type: [
                    { text: "Augment (Area)" },
                    { text: "Only acts on targets when in area" },
                ],
                duration: "50 seconds",
                target: [
                    { text: "Self, Ground, Ally" },
                    { text: "Affects allies in range" },
                    { text: "200m", uptick: "range" }
                ],
                effectRange: "55m",
                miscastChance:  {"0": "50", "1": "35"},
                effects: [
                    { text: "Increased effect area", uptick: "up-blue", color: "blue" },
                    { text: "+24", icon: "melee-character", postText: "Melee Attack", color: "green" },
                    { text: "+24%", icon: "movement-character", postText: "Speed", color: "green" }
                ]
            }
        }
    },
    {
        name: "Apotheosis",
        description: "Waves of pure High Magic infuse the target, radiating within the body, returning vigour and life.",
        icon: "spell-apotheosis",
        ranks: [
            { effects: [
                { icon: "spell-apotheosis", description: "Overcast spell: \"Apotheosis Upgraded\"" },
                { icon: "spell-apotheosis", description: "Cooldown: -30% to \"Apotheosis\"" }
            ] },
            { effects: [
                { icon: "spell-apotheosis", description: "Overcast spell: \"Apotheosis Upgraded\"" },
                { icon: "spell-apotheosis", description: "Cooldown: -50% to \"Apotheosis\"" },
                { icon: "spell-apotheosis", description: "Winds of Magic cost: -2 for \"Apotheosis\"" },
                { icon: "spell-apotheosis", description: "Winds of Magic cost: -3 for \"Apotheosis Upgraded\"" },
                { icon: "spell-apotheosis", description: "Miscast base chance: -15% for \"Apotheosis Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "common",
            cost: [7, 4],
            cooldown: "29",
            attributes: {
                type: "Regeneration",
                duration: "22 seconds",
                target: [
                    { text: "Self, Ally" },
                    { text: "600m", uptick: "range" }
                ],
                cannotUseIf: "Climbing",
                miscastChance:  {"0": "50", "1": "35"},
                effects: [
                    { text: "Extended cast range", uptick: "up-blue", color: "blue" },
                    { text: "Restores up to", icon: "hp", postText: "Hit Points", uptick: "up-green", color: "green" },
                    { text: "Can", icon: "attribute-fear", postText: "Cause Fear", uptick: "up-green", color: "green" }
                ]
            }
        }
    },
    {
        name: "Shield of Saphery",
        description: "As the High Magic is channelled into the caster, its preserving energies form a dome of protection around them.",
        icon: "spell-shield-of-saphery",
        ranks: [
            { effects: [
                { icon: "spell-shield-of-saphery", description: "Passive ability: \"Shield of Saphery\"" }
            ] }
        ],
        spell: {
            description: "Lore attribute",
            rarity: "common",
            attributes: {
                type: "Ward Save (Area)",
                duration: "Constant",
                target: [
                    { text: "Self" },
                    { text: "Affects allies in range" }
                ],
                activeIf: "Casting",
                effectRange: "Map-wide",
                effects: [
                    { text: "Shield of Saphery (9 seconds)", color: "green" },
                    { text: "+11%", icon: "resistance-physical", postText: "Damage Resistance", color: "green" }
                ]
            }
        }
    },
    {
        name: "Hand of Glory",
        description: "The spirits of ancient warriors are summoned and lend their might to allies in the present.",
        icon: "spell-hand-of-glory",
        ranks: [
            { effects: [
                { icon: "spell-hand-of-glory", description: "Spell: \"Hand of Glory\"" },
                { icon: "spell-hand-of-glory", description: "Overcast spell: \"Hand of Glory\"" },
                { icon: "spell-hand-of-glory", description: "Cooldown: -30% to \"Hand of Glory\"" }
            ] },
            { effects: [
                { icon: "spell-hand-of-glory", description: "Overcast spell: \"Hand of Glory Upgraded\"" },
                { icon: "spell-hand-of-glory", description: "Cooldown: -50% to \"Hand of Glory\"" },
                { icon: "spell-hand-of-glory", description: "Winds of Magic cost: -1 for \"Hand of Glory\"" },
                { icon: "spell-hand-of-glory", description: "Winds of Magic cost: -2 for \"Hand of Glory Upgraded\"" },
                { icon: "spell-hand-of-glory", description: "Miscast base chance: -15% for \"Hand of Glory Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "common",
            cost: [6, 4],
            cooldown: "28",
            attributes: {
                type: "Augment",
                target: [
                    { text: "Self, Ally" },
                    { text: "200m", uptick: "range" }
                ],
                cannotUseIf: "Climbing",
                miscastChance:  {"0": "50", "1": "35"},
                effects: [
                    { text: "Additional effect on reloading", uptick: "up-blue", color: "blue" },
                    { text: "+60", icon: "reload-time-stat", postText: "Reload Skill", color: "green" },
                    { text: "+24", icon: "melee-character", postText: "Melee Attack", color: "green" }
                ]
            }
        }
    },
    {
        name: "Soul Quench",
        description: "The spirits of ancient warriors are summoned and lend their might to allies in the present.",
        icon: "spell-soul-quench",
        ranks: [
            { effects: [
                { icon: "spell-soul-quench", description: "Spell: \"Soul Quench\"" },
                { icon: "spell-soul-quench", description: "Overcast spell: \"Soul Quench Upgraded\"" },
                { icon: "spell-soul-quench", description: "Cooldown: -30% to \"Soul Quench\"" }
            ] },
            { effects: [
                { icon: "spell-soul-quench", description: "Overcast spell: \"Soul Quench Upgraded\"" },
                { icon: "spell-soul-quench", description: "Cooldown: -50% to \"Soul Quench\"" },
                { icon: "spell-soul-quench", description: "Winds of Magic cost: -1 for \"Soul Quench\"" },
                { icon: "spell-soul-quench", description: "Winds of Magic cost: -2 for \"Soul Quench Upgraded\"" },
                { icon: "spell-soul-quench", description: "Miscast base chance: -15% for \"Soul Quench Upgraded\"" }
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
                    { text: "250m", uptick: "range" }
                ],
                cannotUseIf: "Manning equipment, Climbing",
                projectileRange: "300m",
                miscastChance:  {"0": "50", "1": "35"},
                effects: [
                    { text: "Increased damage", uptick: "up-blue", color: "blue" },
                    { text: "Causes moderate", icon: "icon-magic", postText: "magical damage", uptick: "up-green", color: "green" },
                    { text: "Causes damage to combatants", uptick: "up-green", color: "green" },
                    { text: "Powerful explosion", uptick: "up-green", color: "green" },
                    { text: "Effective at long range", uptick: "up-green", color: "green" },
                    { text: "Strong vs. multiple combatants", uptick: "up-green", color: "green" }
                ]
            }
        }
    },
    {
        name: "Tempest",
        description: "Without warning, a conflagration of the eight arcane Winds forms on the foe, creating a devastating tempest.",
        icon: "spell-tempest",
        ranks: [
            { effects: [
                { icon: "spell-tempest", description: "Overcast spell: \"Tempest Upgraded\"" },
                { icon: "spell-tempest", description: "Cooldown: -30% to \"Tempest\"" }
            ] },
            { effects: [
                { icon: "spell-tempest", description: "Overcast spell: \"Tempest Upgraded\"" },
                { icon: "spell-tempest", description: "Cooldown: -50% to \"Tempest\"" },
                { icon: "spell-tempest", description: "Winds of Magic cost: -2 for \"Tempest\"" },
                { icon: "spell-tempest", description: "Winds of Magic cost: -2 for \"Tempest Upgraded\"" },
                { icon: "spell-tempest", description: "Miscast base chance: -15% for \"Tempest Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "uncommon",
            cost: [12, 10],
            cooldown: "44",
            attributes: {
                type: "Vortex",
                duration: "22 seconds",
                target: [
                    { text: "Enemy" },
                    { text: "Affects enemies in range" },
                    { text: "150m", uptick: "range" }
                ],
                cannotUseIf: "Climbing",
                targetIf: "Flying",
                effectRange: "20m",
                miscastChance:  {"0": "50", "1": "35"},
                effects: [
                    { text: "Extended effect duration", uptick: "up-blue", color: "blue" },
                    { text: "Causes major", icon: "icon-magic", postText: "magical damage", uptick: "up-green", color: "green" },
                    { text: "Huge, randomly-moving area of effect", uptick: "up-green", color: "green" },
                    { text: "Strong vs. a single combatant", uptick: "up-green", color: "green" },
                    { text: "Good against flying", uptick: "up-green", color: "green" },
                    { text: "Caught in the Tempest (22 seconds)", color: "red" },
                    { text: "-72%", icon: "movement-character", postText: "Speed", color: "red" }
                ]
            }
        }
    },
    {
        name: "Arcane Unforging",
        description: "Without warning, a conflagration of the eight arcane Winds forms on the foe, creating a devastating tempest.",
        icon: "spell-arcane-unforging",
        ranks: [
            { effects: [
                { icon: "spell-arcane-unforging", description: "Spell: \"Arcane Unforging\"" },
                { icon: "spell-arcane-unforging", description: "Overcast spell: \"Arcane Unforging Upgraded\"" },
                { icon: "spell-arcane-unforging", description: "Cooldown: -30% to \"Arcane Unforging\"" }
            ] },
            { effects: [
                { icon: "spell-arcane-unforging", description: "Overcast spell: \"Arcane Unforging Upgraded\"" },
                { icon: "spell-arcane-unforging", description: "Cooldown: -50% to \"Arcane Unforging\"" },
                { icon: "spell-arcane-unforging", description: "Winds of Magic cost: -2 for \"Arcane Unforging\"" },
                { icon: "spell-arcane-unforging", description: "Winds of Magic cost: -3 for \"Arcane Unforging Upgraded\"" },
                { icon: "spell-arcane-unforging", description: "Miscast base chance: -15% for \"Arcane Unforging Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "rare",
            cost: [20, 17],
            cooldown: "52",
            attributes: {
                type: "Direct Damage",
                duration: "22 seconds",
                target: [
                    { text: "Enemy" },
                    { text: "100m", uptick: "range" }
                ],
                cannotUseIf: "Climbing",
                miscastChance:  {"0": "50", "1": "35"},
                effects: [
                    { text: "Greater effect on ability cooldown", uptick: "up-blue", color: "blue" },
                    { text: "Strong vs. a signle combatant", uptick: "up-green", color: "green" },
                    { text: "Chance opponent will resist damage", uptick: "down-red", color: "red" },
                    { text: "Weak vs. multiple combatants", uptick: "down-red", color: "red" },
                    { text: "+45%", icon: "icon-cooldown-2", postText: "Ability Recharge (seconds)", color: "red" }
                ]
            }
        }
    },
    {
        name: "Fiery Convocation",
        description: "Without warning, a conflagration of the eight arcane Winds forms on the foe, creating a devastating tempest.",
        icon: "spell-fiery-convocation",
        ranks: [
            { effects: [
                { icon: "spell-fiery-convocation", description: "Spell: \"Fiery Convocation\"" },
                { icon: "spell-fiery-convocation", description: "Overcast spell: \"Fiery Convocation Upgraded\"" },
                { icon: "spell-fiery-convocation", description: "Cooldown: -30% to \"Fiery Convocation\"" }
            ] },
            { effects: [
                { icon: "spell-fiery-convocation", description: "Overcast spell: \"Fiery Convocation Upgraded\"" },
                { icon: "spell-fiery-convocation", description: "Cooldown: -50% to \"Fiery Convocation\"" },
                { icon: "spell-fiery-convocation", description: "Winds of Magic cost: -2 for \"Fiery Convocation\"" },
                { icon: "spell-fiery-convocation", description: "Winds of Magic cost: -2 for \"Fiery Convocation Upgraded\"" },
                { icon: "spell-fiery-convocation", description: "Miscast base chance: -15% for \"Fiery Convocation Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "rare",
            cost: [22, 18],
            cooldown: "52",
            attributes: {
                type: "Wind",
                duration: "10 seconds",
                target: [
                    { text: "Ground" },
                    { text: "150m", uptick: "range" }
                ],
                cannotUseIf: "Climbing",
                cannotTargetIf: "On a wall, Climbing",
                miscastChance:  {"0": "50", "1": "35"},
                effects: [
                    { text: "Increased", icon: "icon-armor-piercing", postText: "armour-piercing damage", uptick: "up-blue", color: "blue" },
                    { text: "Causes major magical & fire damage", uptick: "up-green", color: "green" },
                    { text: "Medium, randomly-moving area of effect", uptick: "up-green", color: "green" },
                    { text: "Good against armour", uptick: "up-green", color: "green" },
                    { text: "Strong vs. multiple units", uptick: "up-green", color: "green" },
                    { text: "Weak vs. a single combatant", uptick: "down-red", color: "red" }
                ]
            }
        }
    },
    {
        name: "Warden's Stand",
        description: "The Warden faces down his foes with grim resolve, his esteemed presence and indomitable spirit heartening to all those who fight alongside him.",
        icon: "ability-wardens-stand",
        ranks: [
            { effects: [
                { icon: "ability-wardens-stand", description: "Ability: \"Warden's Stand\"" }
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
                    { text: "+4", icon: "morale-character", color: "green" },
                    { text: "+10", icon: "defense-character", postText: "Melee Defense", color: "green" }
                ]
            }
        }
    }
]