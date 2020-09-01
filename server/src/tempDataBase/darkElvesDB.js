exports.skills = [
    {
        name: "Armor of Midnight",
        description: "Malekith's rune-armor is forged from the hardest meteoric iron and protects against any mortal weapon.",
        icon: "item-armour",
        quest: true,
        ranks: [
            { effects: [
                { icon: "armor-character", description: "Armor: +12" },
                { icon: "defense-character", description: "Melee defense: +6" },
                { icon: "resistance-physical", description: "Physical resistance: 20%" },
                { icon: "wound-time", description: "Wound recovery time: -2" }
            ] }
        ]
    },
    {
        name: "Circlet of Iron",
        description: "The Circlet of Iron, said to be older than the Elven race, is a potent source of arcane power.",
        icon: "item-arcane",
        quest: true,
        ranks: [
            { effects: [
                { icon: "item-ability", description: "Magic item drop chance: +5%" },
                { icon: "magic", description: "Winds of Magic power reserve: +10" },
                { icon: "armor-character", description: "Armor: +5" },
                { icon: "religion", description: "Untainted: +5", ps: "local province" },
                { icon: "spell-power-of-darkness", description: "Winds of Magic cost -2 for \"Power of Darkenss\"" },
                { icon: "spell-power-of-darkness", description: "Spell number of uses: +2 for \"Power of Darkenss\"" },
                { icon: "ability-circlet-of-iron", description: "Passive ability: \"Circlet of Iron\"" } 
            ] }
        ],
        spell: {
            description: "Item",
            rarity: "legendary",
            attributes: {
                type: "Hex (Area)",
                target: [
                    { text: "Around self" },
                    { text: "Affects enemies in range" }
                ],
                targetIf: "Unit is a Lord or Hero",
                effectRange: "Map-wide",
                effects: [
                    { text: "+50% Miscast Chance", color: "red" }
                ]
            }
        }
    },
    {
        name: "Destroyer",
        description: "Forged by the Witch King, the blade's merest touch can unmake enchantments and wither minds.",
        icon: "item-weapon",
        quest: true,
        ranks: [
            { effects: [
                { icon: "item-ability", description: "Post battle chance of stealing a magic item: +50%" },
                { icon: "melee-character", description: "Melee attack: +12" },
                { icon: "damage", description: "Weapon strength: +12%" },
                { icon: "leadership-malus", description: "Attacks cause \"discouraged\" effect, reducing leadership" },
                { icon: "ability-destroyer", description: "Passive ability: \"Destroyer\"" }
            ] }
        ],
        spell: {
            description: "Weapon",
            rarity: "legendary",
            attributes: {
                type: [
                    { text: "Hex (Area)" },
                    { text: "Only acts on targets when in area" }
                ],
                duration: "Constant",
                target: [
                    { text: "Around self" },
                    { text: "Affects enemies in range" }
                ],
                effectRange: "40m",
                effects: [
                    { text: "Destroyer (15 seconds)", color: "red" },
                    { text: "+15 Ability Recharge (seconds)", color: "red" }
                ]
            }
        }
    },
    {
        name: "Supreme Spellshield",
        description: "This shield has a reflection so dark that it absorbs hostile magic and reflects it back at the foe.",
        icon: "item-enchanted",
        quest: true,
        ranks: [
            { effects: [
                { icon: "defense-character", description: "Melee defense: +8" },
                { icon: "resistance-magic", description: "Magic resistance: 20%" },
                { icon: "spell-doombolt", description: "Winds of Magic coast: -2 for \"Doombolt\"" },
                { icon: "spell-doombolt", description: "Winds of Magic coast: -2 for \"Doombolt Upgraded\"" },
                { icon: "ability-supreme-spellshield", description: "Passive ability: \"Supreme Spellshield\"" }
            ] }
        ],
        spell: {
            description: "Item",
            rarity: "legendary",
            attributes: {
                type: [
                    { text: "Hex of the Winds" },
                    { text: "Only acts on targets when in area" }
                ],
                duration: "Constant",
                target: [
                    { text: "Around self" },
                    { text: "Affects enemies in range" }
                ],
                effectRange: "40m",
                effects: [
                    { text: "Effect increases proportional to the number of enemy units in range", uptick: "down-red", color: "red" },
                    { text: "Decrease to power reserves", uptick: "down-red", color: "red" }
                ]
            }
        }
    },
    {
        name: "The Warpsword of Khaine",
        description: "The Time of Blood is at hand!",
        icon: "item-weapon",
        quest: true,
        ranks: [
            { effects: [
                { icon: "melee-character", description: "Melee attack: +10" },
                { icon: "damage", description: "Weapon strength: +15%" },
                { icon: "ambush", description: "Ambush defence chance: +40%", ps: "Lord's army" },
                { icon: "ability-sword", description: "Passive ability: \"The Warpsword of Khaine\"" }
            ] }
        ],
        spell: {
            description: "Weapon",
            rarity: "legendary",
            attributes: {
                type: "Augment",
                duration: "Constant",
                target: "Self",
                activeIf: "In melee",
                disabledIf: "Leadership is broken",
                effects: [
                    { text: "Restores", icon: "hp", postText: "8 Hit Points per second", uptick: "up-green", color: "green" },
                    { text: "+5%", icon: "resistance-ward-save", postText: "Damage Resistance", color: "green" }
                ]
            }
        }
    },
    {
        name: "Red Blades",
        description: "These blades gain their red hue from both the Indan Bloodsteel from wich they are forged and the viscera which so often covers them.",
        icon: "item-weapon",
        quest: true,
        ranks: [
            { effects: [
                { icon: "melee-character", description: "Melee attack: +10" },
                { icon: "damage", description: "Weapon strength: +15%" },
                { icon: "sunder", description: "Enables sundering attacks" },
                { icon: "income", description: "Income from sacking settlements: +20%" }
            ] }
        ]
    },
    {
        name: "Helm of the Kraken",
        description: "Bow down before the true Lord of the Sea.",
        icon: "item-armour",
        quest: true,
        ranks: [
            { effects: [
                { icon: "ability-armor", description: "Passive ability: \"Helm of the Kraken\"" },
                { icon: "armor-character", description: "Armor: +15" },
                { icon: "terror", description: "Attribute: Causes Terror" }
            ] }
        ],
        spell: {
            description: "Item",
            rarity: "legendary",
            attributes: {
                type: "Regeneration",
                duration: "Constant",
                target: "Self",
                activeIf: "In melee",
                effects: [
                    { text: "Restores", icon: "hp", postText: "4 Hit Points per second", uptick: "up-green", color: "green" },
                    { text: "+9", icon: "defense-character", postText: "Melee Defense", color: "green" }
                ]
            }
        }
    },
    {
        name: "Amber Amulet",
        description: "There are being and creatures that can mend bone and knit flesh at an incredible rate. A mighty boon, but one stunted by fire.",
        icon: "item-talisman",
        quest: true,
        ranks: [
            { effects: [
                { icon: "magic", description: "Winds of Magic power reserve: +5" },
                { icon: "resistance-ward-save", description: "Ward save: 20%" },
                { icon: "agent", description: "Enemy Hero action success chance: -10%" },
                { icon: "replenishment", description: "Casualty replenishment rate: +5%", ps: "Lord's army" },
                { icon: "wound-time", description: "Wound recovery time: -3" },
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
                    { text: "+25% Weakness to", icon: "icon-fire", postText: "Fire Damage", color: "red" }
                ]
            }
        }
    },
    {
        name: "Wand of the Kharaidon",
        description: "The sky opens and a bolt of burning, pure Chaos black lightning hurtles towards the foe.",
        icon: "item-arcane",
        quest: true,
        ranks: [
            { effects: [
                { icon: "item-ability", description: "Magic item drop chance: +5%" },
                { icon: "magic", description: "Winds of Magic power reserve: +10" },
                { icon: "magic-cooldown", description: "Cooldown: -15% to all spells" },
                { icon: "spell-soul-stealer", description: "Winds of Magic cost: -2 for \"Soulstealer\"" },
                { icon: "spell-doombolt", description: "Bound spell: \"Wand of the Kharaidon\"" }
            ] }
        ],
        spell: {
            description: "Bound spell",
            rarity: "legendary",
            uses: 2,
            cooldown: "120",
            attributes: {
                type: "Bombardment",
                duration: "7 seconds",
                target: [ 
                    { text: "Enemy" },
                    { text: "200m", uptick: "range" }
                ],
                cannotUseIf: "climbing",
                effects: [
                    { text: "Causes major", icon: "icon-magic", postText: "magical damage", uptick: "up-green", color: "green" },
                    { text: "Medium strike area", uptick: "up-green", color: "green" },
                    { text: "Strong vs. a single combatant", uptick: "up-green", color: "green" },
                    { text: "Strong vs. a single unit", uptick: "up-green", color: "green" }
                ]
            }
        }
    },
    {
        name: "Heartrender & the Darksword",
        description: "The paired weapons of Morathi make the Hag Sorceress extremely deadly in combat.",
        icon: "item-weapon",
        quest: true,
        ranks: [
            { effects: [
                { icon: "public-order", description: "Public order: +5", ps: "local province" },
                { icon: "charge-character", description: "Charge bonus: +30" },
                { icon: "defense-character", description: "Melee defense: +5" },
                { icon: "melee-character", description: "Melee attack: +10" },
                { icon: "damage", description: "Weapon strength: +15%" },
                { icon: "magical-attacks", description: "Enables magical attacks" },
                { icon: "religion-chaos", description: "Chaos corruption: +5", ps: "local province" },
                { icon: "ability-heartrender", description: "Passive ability: \"Heartrender & the Darksword\"" }
            ] }
        ],
        spell: {
            description: "Weapon",
            rarity: "legendary",
            attributes: {
                type: [ 
                    { text: "Hex (Area)"},
                    { text: "Only acts on target when in area" }
                ],
                duration: "Constant",
                target: [ 
                    { text: "Around self" },
                    { text: "Affects enemies in range" }
                ],
                activeIf: "In melee",
                effectRange: "40m",
                effects: [
                    { text: "-9", icon: "defense-character", postText: "Melee Defense", color: "red" },
                    { text: "-9", icon: "melee-character", postText: "Melee Attack", color: "red" }
                ]
            }
        }
    },
    {
        name: "Amulet of Dark Fire",
        description: "This amulet wreathes its wearer in a mystical flame that burns magic instead of flesh.",
        icon: "item-talisman",
        quest: true,
        ranks: [
            { effects: [
                { icon: "resistance-ward-save", description: "Ward save: 15%" },
                { icon: "agent", description: "Enemy Hero action success chance: -10%" },
                { icon: "ability-talisman", description: "Passive ability: \"Amulet of Dark Fire\"" }
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
                    { text: "+22%", icon: "resistance-magic", postText: "Magic Resistance", color: "green" }
                ]
            }
        }
    },
    {
        name: "Deathsword and the Cursed Blade",
        description: "The Deathsword glistens with murder and the Cursed Blade moves with a life of its own.",
        icon: "item-weapon",
        quest: true,
        ranks: [
            { effects: [
                { icon: "defense-character", description: "Melee defense: +5" },
                { icon: "melee-character", description: "Melee attack: +3" },
                { icon: "damage", description: "Weapon strength: +10%" },
                { icon: "magical-attacks", description: "Enables magical attacks" },
                { icon: "ability-sword", description: "Passive ability: \"The Cursed Blade\"" }
            ] }
        ],
        spell: {
            description: "Weapon",
            rarity: "legendary",
            cooldown: "1",
            attributes: {
                type: [ 
                    { text: "Direct Damage (Area)"},
                    { text: "Only acts on targets when in area" }
                ],
                duration: "10 seconds",
                target: [ 
                    { text: "Around self" },
                    { text: "Affects enemies in range" }
                ],
                activeIf: "Losing melee combat",
                effectRange: "30m",
                effects: [
                    { text: "Causes damage to combatants", uptick: "up-green", color: "green" },
                    { text: "Strong vs. a single combatant", uptick: "up-green", color: "green" },
                    { text: "Chance opponent will resist damage", uptick: "down-red", color: "red" }
                ]
            }
        }
    },
    {
        name: "Dark Steed",
        description: "True horses no longer, Dark Magic corrupts the finest Elven steeds and turns them into black-flanked killers.",
        icon: "dark-steed",
        ranks: [
            { effects: [{ icon: "mount", description: "Mount: Dark Steed" }] }
        ]
    },
    {
        name: "Cold One",
        description: "Dark, feral beasts indigenous to Naggaroth, tempted from their damp, warm caves to bear the Druchii to battle.",
        icon: "cold-one",
        ranks: [
            { effects: [{ icon: "mount", description: "Mount: Cold One" }] }
        ]
    },
    {
        name: "Cauldron of Blood",
        description: "A gift from Khaine, containing the secret of eternal youth and beauty. His brides may bathe in it to renew their vitality.",
        icon: "cauldron-of-blood",
        ranks: [
            { effects: [{ icon: "mount", description: "Mount: Cauldron of Blood" }] }
        ]
    },
    {
        name: "Sulephet",
        description: "The only Dark Pegasus to bear a name is Morathi's personal mount, who carries the Hag Sorceress into the fray.",
        icon: "dark-steed",
        ranks: [
            { effects: [{ icon: "mount", description: "Mount: Sulephet" }] }
        ] 
    },
    {
        name: "Spite",
        description: "Larger than most others of its kind, the ferocious Cold One named \"Spite\" is truly a creature fit for a heartless murderer like Malus Darkblade.",
        icon: "cold-one",
        ranks: [
            { effects: [{ icon: "mount", description: "Mount: Spite" }] }
        ] 
    },
    {
        name: "Cold One Chariot",
        description: "Magnificent chariots, gifted to those who have impressed with their devotion, bravery and prowess in battle.",
        icon: "cold-one-chariot",
        ranks: [
            { effects: [{ icon: "mount", description: "Mount: Cold One Chariot" }] }
        ]
    },
    {
        name: "Scourgerunner Chariot",
        description: "Dark Elf Beastmasters roam the wilds atop their dreaded chariots, armed with barbed nets and harpoons to slay the foe and ensnare their prey.",
        icon: "scourgerunner-chariot",
        ranks: [
            { effects: [{ icon: "mount", description: "Mount: Scourgerunner Chariot" }] }
        ]
    },
    {
        name: "Dark Pegasus",
        description: "The corrupted Dark Pegasi fly south from the Chaos Wastes to Naggaroth's Iron Mountains to make their nests.",
        icon: "dark-pegasus",
        ranks: [
            { effects: [{ icon: "mount", description: "Mount: Dark Pegasus" }] }
        ]
    },
    {
        name: "Manticore",
        description: "The roar of a Manticore is guaranteed to send mortals fleeing, for they know a creature of terror is abroad.",
        icon: "manticore",
        ranks: [
            { effects: [{ icon: "mount", description: "Mount: Manticore" }] }
        ]
    },
    {
        name: "Black Dragon",
        description: "Secretly nurtured by Malekith, Black Dragons are enchanted with Dark Magic that corrupts and enhances.",
        icon: "black-dragon",
        ranks: [
            { effects: [
                { icon: "mount", description: "Mount: Black Dragon" }
            ] }
        ]
    },
    {
        name: "Seraphon",
        description: "This terrifying Black Dragon is the Witch King's favoured mount upon which to ride into battle.",
        icon: "black-dragon",
        ranks: [
            { effects: [
                { icon: "mount", description: "Mount: Seraphon" }
            ] }
        ]
    },
    {
        name: "Maelstrom",
        description: "This terrifying Black Dragon, Fellheart's favourite mount, belches noxious fumes in place of fire as it carries the Krakenlord to battle.",
        icon: "black-dragon",
        ranks: [
            { effects: [
                { icon: "mount", description: "Mount: Maelstrom" }
            ] }
        ]
    },
    {
        name: "Sadistic",
        description: "There is great pleasure to be derived from the humiliation and suffering of others; this one has felt and revelled in it.",
        icon: "character-attack",
        ranks: [
            { effects: [
                { icon: "armor-piercing-character", description: "Armour-piercing damage: +12" },
                { icon: "charge-character", description: "Charge bonus: +5" },
                { icon: "melee-character", description: "Melee attack: +3" }
            ] }
        ]
    },
    {
        name: "Eternal Hatred",
        description: "The strength of this warrior's attack never wavers for an instance, such is the opprobrium felt for their hated High Elf cousins.",
        icon: "character-damage",
        ranks: [
            { effects: [
                { icon: "damage", description: "Weapon strength: +10% when fighting against High Elves" },
                { icon: "damage", description: "Weapon strength: +6%" }
            ] }
        ]
    },
    {
        name: "Absolute Power",
        description: "Those in command of the ranks will issue their orders with a ferocious bark, expecting instant obeisance.",
        icon: "ability-hold-the-line",
        ranks: [
            { effects: [
                { icon: "character", description: "Leadership aura size: +100%" },
                { icon: "morale-character", description: "Character's Aura leadership effect: +5" },
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
        name: "Beast Tamer",
        description: "The honing of a Druchi's affinity with animals assures that the bestial ranks heed his imperious command with obedience.",
        icon: "beast-tamer",
        ranks: [
            { effects: [
                { icon: "charge", description: "Charge bonus: +10 for Harpies, War Hydra, Kharibdyss, Black Dragon, Feral Manticore and Bloodwrack Medusae units" },
                { icon: "charge", description: "Charge Bonus: +20 for Cold One Knights, Cold One Dread Knights and Cold One Chariot units" }
            ] }
        ]
    },
    {
        name: "Hekarti's Blessing",
        description: "It is easy to favor Hekarti - who pays close attention to Elven desires - over Atharti, but only the foolish allow that to happen.",
        icon: "character-magic",
        ranks: [{ effects: [{ icon: "magic", description: "Winds of Magic power reserve: +8" }] }]
    },
    {
        name: "Ward of Khaine",
        description: "The Bloody-handed God watches over his disciples.",
        icon: "character-ward-save",
        ranks: [{ effects: [{ icon: "resistance-missile", description: "Missile resistance: 10%" }] }]
    },
    {
        name: "Greater Ward of Khaine",
        description: "The Bloody-handed God watches over his disciples.",
        icon: "character-ward-save",
        ranks: [{ effects: [{ icon: "resistance-missile", description: "Missile resistance: 15%" }] }]
    },
    {
        name: "Ward of Hekarti",
        description: "Magic's dark mistress has a care for her dutiful acolytes.",
        icon: "character-ward-save",
        ranks: [{ effects: [{ icon: "resistance-magic", description: "Magic resistance: 10%" }] }]
    },
    {
        name: "Immortality",
        description: "Who wants to live forever? As it turns out, most beings wouldn't say no...",
        icon: "character-wound-time",
        ranks: [{ effects: [{ icon: "wound-time", description: "When normally killed in battle, this Lord will be wounded instead" }] }]
    },
    {
        name: "Witchbrew",
        description: "Distilled from the blood of Hag Queens, this evil brew dives imbibers into an ecstasy of destruction.",
        icon: "ability-witchbrew",
        ranks: [
            { effects: [{ icon: "ability-witchbrew", description: "Ability: \"Witchbrew\"" }] }
        ],
        spell: {
            description: "Character ability",
            cooldown: "90",
            uses: 3,
            rarity: "uncommon",
            attributes: {
                type: "Augment",
                duration: "47 seconds",
                target: "Self",
                effects: [
                    { text: "+60%", icon: "icon-damage-base", postText: "Base Weapon Damage", color: "green" },
                    { text: "+24", icon: "melee-character", postText: "Melee Attack", color: "green" },
                    { text: "Rampage!", uptick: "down-red", color: "red" }
                ]
            }
        }
    },
    {
        name: "The Second Cauldron",
        description: "Why stop at one, when you can have two?",
        icon: "character-cooldown",
        ranks: [{ effects: [
                { icon: "ability-witchbrew", description: "Cooldown: -33% to \"Witchbrew\"" },
                { icon: "ability-witchbrew", description: "Ability number of uses: +2 for \"Witchbrew\"" }
            ]
        }]
    },
    {
        name: "Secrets of the Cauldron",
        description: "With enough sacrifices, the deepest secrets of the Cauldron of Blood will be yours.",
        icon: "character-health",
        ranks: [{ effects: [
                { icon: "health-character", description: "Hit points: +12%" }
            ]
        }]
    },
    {
        name: "Martial Name of Power",
        description: "This one has adopted a warrior name to strike fear into enemy hearts, a moniker backed up by their deeds in battle.",
        icon: "martial-name-of-power",
        ranks: [
            { effects: [{ icon: "trait-dark-elves", description: "Choose a Name of Power that improves the Character's own combat skills" }] }
        ]
    },
    {
        name: "Revered Name of Power",
        description: "This one's chosen name is muttered in hushed tones, reflecting as it does their vile proclivities.",
        icon: "revered-name-of-power",
        ranks: [
            { effects: [{ icon: "trait-dark-elves", description: "Choose a Name of Power that improves the Lord's army" }] }
        ]
    },
    {
        name: "Aristocratic Name of Power",
        description: "Some family names are best forgotten; others are worthy of resurrection, as they engender fear and respect among the masses.",
        icon: "aristocratic-name-of-power",
        ranks: [
            { effects: [{ icon: "trait-dark-elves", description: "Choose a Name of Power that influences the province in which Lord is standing or the faction as a whole" }] }
        ]
    },
    {
        name: "Unassailable",
        description: "Each Black Ark is a fortress-city without peer. Throwing aoneself unto its Black-Stone defenses is folly without equal.",
        icon: "battle-defense",
        ranks: [
            { effects: [
                { icon: "armor-piercing", description: "Armor-piercing weapon damage: +5 for all units when defending", ps: "Lord's army" },
                { icon: "defense", description: "Armor: +15 for all units when defending", ps: "Lord's army" }
            ] }
        ]
    },
    {
        name: "Unstoppable",
        description: "The Black Ark Provides near-limitless access to pristine arms and armor, each raiding party clad in the finest forgework.",
        icon: "battle-damage",
        ranks: [
            { effects: [
                { icon: "weapon-damage", description: "Weapon strength: +10%", ps: "Lord's army" },
                { icon: "melee", description: "Melee attack: +5 for all units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        name: "Unknowable",
        description: "The presence of a powerful Sorceress upon the Black Ark provides opportunities to weave the darkest magecraft.",
        icon: "character-magic",
        ranks: [
            { effects: [
                { icon: "resistance-magic", description: "Magic resistance: +15% for all units", ps: "Lord's army" },
                { icon: "magical-attacks", description: "Enables magical attacks", ps: "Lord's army" },
                { icon: "technology", description: "Research rate: +10%", ps: "Lord's army" }
            ] }
        ]
    },
    {
        name: "Champion of Khaine",
        description: "As Khaine's chosen bride, she is his champion and envoy, and no harm will come to her.",
        icon: "character-ward-save",
        ranks: [{ effects: [{ icon: "resistance-physical", description: "Physical resistance: 10%" }] }]
    },
    {
        name: "Favour of Khaine",
        description: "Khaine's favour is bestowed on those that seek to bring murder into the world.",
        icon: "character-cooldown",
        ranks: [
            { effects: [
                { icon: "ability-gaze-of-khaine", description: "Cooldown: -33% to \"Gaze of Khaine\"" },
                { icon: "ability-gaze-of-khaine", description: "Ability number of uses: +2 for \"Gaze of Khaine\"" }
            ] }
        ]
    },
    {
        name: "Rapturous Murder",
        description: "Give in to the Blood Queen's affection - her love is so intense as to kill.",
        icon: "rituals-of-blood",
        ranks: [
            { effects: [
                { icon: "bonus-vs-small-character", description: "Bonus vs. Infantry: +12" },
                { icon: "charge-character", description: "Charge bonus: +20" }
            ] }
        ]
    },
    {
        name: "Playthings of the Queen",
        description: "Whether Elf, Dwarf, or man, Their souls now serve the pleasure of the Blood Queen.",
        icon: "character-slaves",
        ranks: [
            { effects: [
                { icon: "army", description: "Casualties captured post-battle: +35%" },
                { icon: "loyalty", description: "Loyalty: +2 for new recruits", ps: "factionwide" },
                { icon: "slaves", description: "Slave decline rate: -20%", ps: "local province" }
            ] }
        ]
    },
    {
        name: "Blood Queen",
        description: "The need for blood - to bathe in its viscous goodness - will always drive the Crone of Har Ganeth onward.",
        icon: "regeneration",
        ranks: [
            { effects: [
                { icon: "experience", description: "Unit Rank: +3 for Death Night army" },
                { icon: "health-character", description: "Hit points: +12%" },
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
                    { text: "+25% Weakness to", icon: "icon-fire", postText: "Fire Damage", color: "red" }
                ]
            }
        }
    },
    {
        name: "Daughters of Despair",
        description: "Witch Elves are drawn to their monarch, for no other commands Khaine's word like she.",
        icon: "character-bonus-vs-infantry",
        ranks: [
            { effects: [
                { icon: "bonus-vs-small", description: "Bonus vs. Infantry: +8 for Witch Elves, Sisters of Slaughter and Har Ganeth Executioners units", ps: "Lord's army" },
                { icon: "defense", description: "Melee defense: +6 for Witch Elves, Sisters of Slaughter and Har Ganeth Executioners units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        name: "Insidious",
        description: "Slowly, gradually, subtly harming all those that block her path.",
        icon: "insidious",
        ranks: [
            { effects: [
                { icon: "agent", description: "Hero action success chance: +5%", ps: "all characters" },
                { icon: "khainite-assassin", description: "Hero recruit rank: +2 for Khainite Assassins", ps: "factionwide" }
            ] }
        ]
    },
    {
        name: "Endless Scheming",
        description: "A plan so complex, so labyrinthine, can change even as it comes to furition.",
        icon: "endless-scheming",
        ranks: [
            { effects: [
                { icon: "subterfuge", description: "Assassinate action: Additional 5% success chance", ps: "all characters" },
                { icon: "campaign-movement", description: "Campaign movement range: +5%", ps: "all characters factionwide" }
            ] }
        ]
    },
    {
        name: "Favourite Assets",
        description: "The most skilled amongst her possessions are held aloft, that they may burn all the more brightly.",
        icon: "favourite-assets",
        ranks: [
            { effects: [
                { icon: "melee", description: "Melee attack: +10 for Shades and Dark Riders units", ps: "local armies" },
                { icon: "melee", description: "Melee attack: +5 for Lords and embedded Heroes", ps: "local armies" },
                { icon: "defense", description: "Melee defense: +5 for Lords and embedded Heroes", ps: "local armies" },
                { icon: "defense", description: "Melee defense: +10 for Shades, Dark Riders, Doomfire Warlock and Scourgerunner Chariot units", ps: "local armies" }
            ] }
        ]
    },
    {
        name: "Shroud of Despair",
        description: "Light is driven from the battlefield; numbing darkness rushes to fill the void.",
        icon: "shroud-of-despair",
        ranks: [
            { effects: [
                { icon: "public-order", description: "Public order: +5", ps: "local province" },
                { icon: "religion", description: "Owning faction's favoured corruption: +5", ps: "when in own region" },
                { icon: "morale", description: "Enemy leadership: -10", ps: "local region" }
            ] }
        ]
    },
    {
        name: "Tenacious",
        description: "More than determined, she ensures her nefarious goal is always kept firmly in sight.",
        icon: "character-slaves",
        ranks: [
            { effects: [
                { icon: "military", description: "Casualties captured post-battle: +15%", ps: "all armies" },
                { icon: "income", description: "Income from post-battle loot: +10%", ps: "all characters" }
            ] }
        ]
    },
    {
        name: "Rituals of Blood",
        description: "Blood, preferably from a still-living \"donor\", can enhance and intensify the effects of ceremonial magic.",
        icon: "rituals-of-blood",
        ranks: [
            { effects: [
                { icon: "experience", description: "Unit experience gain per turn: +25", ps: "Lord's army" },
                { icon: "resistance-ward-save", description: "Ward save: 5% for all units", ps: "Lord's army" },
                { icon: "replenishment", description: "Casualty replenishment rate: +10%", ps: "Lord's army" }
            ] }
        ]
    },
    {
        name: "Grotesque Sacrifices",
        description: "The grimmer the offereing, the more likely it is to attract exactly the right kind of attention.",
        icon: "character-chaos-corruption",
        ranks: [
            { effects: [
                { icon: "diplomacy", description: "Diplomatic relations: +10 with Beastmen Warherds" },
                { icon: "diplomacy", description: "Diplomatic relations: +30 with Norsca" },
                { icon: "item-ability", description: "Magic item drop chance: +10%", ps: "all characters" },
                { icon: "religion", description: "Owning faction's favoured corruption: +1", ps: "all regions" }
            ] }
        ]
    },
    {
        name: "Absolute Devotion",
        description: "Always ready to fan the flames of hatred in the Witch King's heart; when he has been betrayed, none have fought so hard to restore his rule.",
        icon: "absolute-devotion",
        ranks: [
            { effects: [
                { icon: "coin", description: "Upkeep: -30% for all units", ps: "Lord's army" },
                { icon: "disaster", description: "Attrition: -50% casualties suffered from all attrition", ps: "Lord's army" }
            ] }
        ]
    },
    {
        name: "Bonded by Blood",
        description: "Murder in the frontline, bang your head against the deck. The metal takes its price...",
        icon: "character-army",
        ranks: [
            { effects: [
                { icon: "army", description: "Lord recruit rank: +1", ps: "factionwide" },
                { icon: "loyalty", description: "Loyalty: +1 for new recruits", ps: "factionwide" }
            ] }
        ]
    },
    {
        name: "Corsair Noble",
        description: "The Krakenlord comes from a very long line of raiders, admirals and map-makers; a chip off the old block, you might say!",
        icon: "character-morale",
        ranks: [
            { effects: [
                { icon: "morale", description: "Leadership: +8 for Black Ark Corsairs units", ps: "Lord's army" },
                { icon: "melee", description: "Melee attack: +8 for Black Ark Corsairs units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        name: "Ahead of the Tide",
        description: "The best sailors know their charts back to front and are always leagues ahead of the tide.",
        icon: "character-charge",
        ranks: [
            { effects: [
                { icon: "charge-character", description: "Charge bonus: +15" },
                { icon: "damage", description: "Weapon strength: +10%" }
            ] }
        ]
    },
    {
        name: "Master of the Blessed Dread",
        description: "Showing his hand from the off, that there might be no confusion amongst his crews, Felheart had his father's officers sacrificed to Mathlann.",
        icon: "character-military-spending",
        ranks: [
            { effects: [
                { icon: "growth", description: "Black Ark growth: +5 (cumulative)", ps: "all armies factionwide" },
                { icon: "income", description: "Income from Ports: +5%", ps: "all regions" }
            ] }
        ]
    },
    {
        name: "Slaver",
        description: "Those unfortunates captured during a scrap will serve the Dreadfleet one way or another.",
        icon: "character-slaves",
        ranks: [
            { effects: [
                { icon: "army", description: "Casualties captured post-battle: +12%" },
                { icon: "coin", description: "Upkeep: -5% for all units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        name: "Patriarch of the Fellhearts",
        description: "Never was a name so perfectly descriptive, and this one is their leader!",
        icon: "character-public-order",
        ranks: [
            { effects: [
                { icon: "public-order", description: "Public order: +4", ps: "local province" },
                { icon: "army", description: "Lord recruit rank: +3", ps: "factionwide" }
            ] }
        ]
    },
    {
        name: "The Waking",
        description: "Each sip of the elixir is a harsh reminder of what he has become.",
        icon: "the-waking",
        ranks: [
            { effects: [
                { icon: "the-blood-price", description: "Cooldown: -20% to \"The Blood Price\"" },
                { icon: "the-daemons-curse", description: "Cooldown: -20% to \"The Daemons Curse\"" }
            ] }
        ]
    },
    {
        name: "Pain Tolerance",
        description: "Malus does not bleed, nor feel pain. Such expressions of the flesh have long since fallen away.",
        icon: "character-defense",
        ranks: [
            { effects: [
                { icon: "resistance-missile", description: "Missile resistance: 10%", ps: "Until transformed into Tz'arkan", color: "#F429FF" },
                { icon: "defense-character", description: "Melee defense: +10", ps: "Until transformed into Tz'arkan", color: "#F429FF" }
            ] }
        ]
    },
    {
        name: "Lying in Wait",
        description: "Every moment of silence is but a slaughter yet begun.",
        icon: "lying-in-wait",
        ranks: [
            { effects: [
                { icon: "ambush", description: "Ambush success chance: +15%", ps: "Lord's army" },
                { icon: "underway", description: "Chance of intercepting an army using the Underway, beast-paths or Worldroots: +20%" },
                { icon: "stalk", description: "Attribute: Stalk", ps: "Until transformed into Tz'arkan", color: "#F429FF" }
            ] }
        ]
    },
    {
        name: "The Slumber",
        description: "If nothing else, Malus Darkblade, you can be counted on to react to adversity with as much violence as is physically possible.",
        icon: "the-slumber",
        ranks: [
            { effects: [
                { icon: "bloodstorm", description: "Cooldown: -20% to \"Bloodstorm\"" },
                { icon: "reaper-of-souls", description: "Cooldown: -20% to \"Reaper of Souls\"" }
            ] }
        ]
    },
    {
        name: "Avatar of Terror",
        description: "He is unnatural; an aberrant of the darkest kind. To lay eyes upon him in battle stirs a primal fear in the hearts of men and Elves alike.",
        icon: "terror",
        ranks: [
            { effects: [
                { icon: "morale", description: "Enemy leadership: -7" },
                { icon: "attribute-terror", description: "Attribute: Causes Terror", ps: "While transformed into Tz'arkan", color: "#F429FF" }
            ] }
        ]
    },
    {
        name: "Supernatural Tissue",
        description: "Wounds of the body can be unmade, for they are immaterial and insignificant.",
        icon: "character-ward-save",
        ranks: [
            { effects: [
                { icon: "replenishment", description: "Casualty replenishment rate: +30% for Lords", ps: "Lord's army" },
                { icon: "resistance-ward-save", description: "Ward save: 10%", ps: "While transformed into Tz'arkan", color: "#F429FF" }
            ] }
        ]
    },
    {
        name: "Cold Heart",
        description: "The Lord of Ruin is coming for you. Onwards, beasts of the deep earth!",
        icon: "character-movement",
        ranks: [
            { effects: [
                { icon: "campaign-movement", description: "Campaign movement range: +5%" },
                { icon: "disaster", description: "Chance of intercepting an army using the Underway, beast-paths or Worldroots: +20%", ps: "Lord's army" },
                { icon: "vigour", description: "Vigour loss reduction: -50% for Cold One Knights, Cold One Dread Knights and Cold One Chariot units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        name: "Drachau Tyrant",
        description: "Sleepless nights afford the Lord of Hag Graef time to viciously and efficiently tackle tedious matters. Like taxes, always taxes...",
        icon: "character-movement",
        ranks: [
            { effects: [
                { icon: "loyalty", description: "On turn start, Lords in this character's region have a chance to gain 1 loyalty", ps: "local region" },
                { icon: "public-order", description: "Public order: +3", ps: "local province" },
                { icon: "coin", description: "Upkeep: -10% for all units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        name: "Contempt & Hatred",
        description: "With hate, all things are possible.",
        icon: "contempt-hatred",
        ranks: [
            { effects: [{ icon: "damage", description: "Weapon strength: +20% when fighting against anything and everything" }] }
        ]
    },
    {
        name: "Tyrant",
        description: "Oppression. Cruelty. Incontrovertible power.",
        icon: "character-public-order",
        ranks: [
            { effects: [
                { icon: "public-order", description: "Public order: +1", ps: "all provinces"},
                { icon: "income", description: "Tax rate: +5%", ps: "factionwide" }
            ] }
        ]
    },
    {
        name: "Motivation Through Fear",
        description: "Unsurprisingly, dread, either of the lash or summary execution, is something of an incentive for many.",
        icon: "character-slaves",
        ranks: [
            { effects: [
                { icon: "income", description: "Income from slaves: +20%", ps: "all provinces" },
                { icon: "slaves", description: "Slave decline rate: -10%", ps: "all provinces" },
                { icon: "public-order", description: "Slave public order penalty: -15%", ps: "all provinces"}
            ] }
        ]
    },
    {
        name: "Seditious or Sanguine",
        description: "In society, one must learn to conform... or suffer the direst of consequences.",
        icon: "seditious-or-sanguine",
        ranks: [
            { effects: [
                { icon: "diplomacy", description: "Income from slaves: +20%" },
                { icon: "public-order", description: "Public order: +10", ps: "local province" },
                { icon: "religion", description: "Slave public order penalty: -15%", ps: "when in own region"}
            ] }
        ]
    },
    {
        name: "Efforts Redoubled",
        description: "By carrot or stick, those whose lot it is to serve can always be made to work harder; usually by stick...",
        icon: "efforts-redoubled",
        ranks: [
            { effects: [
                { icon: "growth", description: "Growth: +25", ps: "local province" },
                { icon: "income", description: "Tax rate: +30%", ps: "local province" },
                { icon: "treasury", description: "Construction cost: -20% for all buildings", ps: "local province"},
                { icon: "construction", description: "Construction time: -50% for all buildings", ps: "local province" }
            ] }
        ]
    },
    {
        name: "Warleader",
        description: "The war is endless, it will never cease. Stay ready.",
        icon: "warleader",
        ranks: [
            { effects: [
                { icon: "coin", description: "Upkeep: -10% for all units", ps: "all armies"},
                { icon: "morale", description: "Leadership: +5", ps: "Lord's army"},
                { icon: "income", description: "Income from post-battle loot: +5%", ps: "all characters" }
            ] }
        ]
    },
    {
        name: "Scoured & Stripped",
        description: "Every last ounce of wealth is there for the taking, should you know where to look. In that regard, this one knows exactly what he is doing.",
        icon: "scoured-stripped",
        ranks: [
            { effects: [
                { icon: "military", description: "Casualties captured post-battle: +50%" },
                { icon: "income", description: "Income from looting settlements: +100%" },
                { icon: "income", description: "Income from sacking settlements: +100%" }
            ] }
        ]
    },
    {
        name: "Triumph of Evil",
        description: "They say for evil to triumph, all that's required is that the good do nothing... or, preferably, are stone dead from the outset.",
        icon: "triumph-of-evil",
        ranks: [
            { effects: [
                { icon: "army", description: "Lord recruit rank: +2", ps: "factionwide"},
                { icon: "disaster", description: "Attrition: -50% casualties suffered from all attrition", ps: "Lord's army"},
                { icon: "replenishment", description: "Casualty replenishment rate: +15%", ps: "Lord's army" }
            ] }
        ]
    },
    {
        name: "Reach Equal Grasp",
        description: "When literally nothing is beyond your reach, there can be no sanctuary and no escape.",
        icon: "reach-equal-grasp",
        ranks: [
            { effects: [
                { icon: "item-ability", description: "Magic item drop chance: +25%" },
                { icon: "income", description: "Income from poast-battle loot: +50%" }
            ] }
        ]
    },
    {
        name: "Rapacious Predators",
        description: "The strength and willpower required to break in the extremely stubborn Cold One reptiles as war steeds is innately abundant in most High Beastmasters.",
        icon: "rapacious-predators",
        ranks: [
            { effects: [
                { icon: "melee", description: "Melee attack: +8 for Cold One Knights, Cold One Dread Knights and Cold One Chariot units", ps: "Lord's army"},
                { icon: "turns", description: "Recruitment duration: -1 turn for Cold One Knights, Cold One Dread Knights and Cold One Chariot units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        name: "Sorceresses of Ghrond",
        description: "The wrangling of the wrathful Bloodwrack Medusae directly from their squalid subterranean lairs is not a job for the faint-hearted.",
        icon: "sorceresses-of-ghrond",
        ranks: [
            { effects: [
                { icon: "turns", description: "Recruitment duration: -1 turn for Bloodwrack Medusae units" },
                { icon: "reload-time", description: "Reload time reduction: +12% for Bloodwrack Medusae units" }
            ] }
        ]
    },
    {
        name: "Titanic Beasts",
        description: "The most colossal monsters of land and sea are prizes beyond treasures to the Beastmaster, requiring colossal empathy to control.",
        icon: "titanic-beasts",
        ranks: [
            { effects: [
                { icon: "melee", description: "Melee attack: +8 for War Hydra and Kharibdyss units" },
                { icon: "turns", description: "Recruitment duration: -1 turn for for War Hydra and Kharibdyss units" }
            ] }
        ]
    },
    {
        name: "Children of Sulekh",
        description: "Since Sulekh's death, her children continue to fight in the Beastmasters' ranks in the name of vengeance for their fallen ancestor.",
        icon: "children-of-sulekh",
        ranks: [
            { effects: [
                { icon: "melee", description: "Melee attack: +8 for Black Dragon units" },
                { icon: "turns", description: "Recruitment duration: -1 turn for Black Dragon units" }
            ] }
        ]
    },
    {
        name: "Master Tormentor",
        description: "It matters not the nature of the beast; eventually, all submit to the Beastmaster's will or perish under his lash.",
        icon: "campaign-experience",
        ranks: [
            { effects: [
                { icon: "defense", description: "Melee defense: +8 for Monster units" },
                { icon: "experience", description: "Recruit Rank: +2 for Monster units" }
            ] }
        ]
    },
    {
        name: "Sea Dragon Cloak",
        description: "The tough, scaly hide of the sea dragon provides excellent protection against all manner of blows.",
        icon: "character-armor",
        ranks: [
            { effects: [{ icon: "armor-character", description: "Armour: +5" }] }
        ]
    },
    {
        name: "Dance of Death",
        description: "So much of war is an art. Over time and with much practice, combat moves can resemble a series of perfectly-rehearsed dance moves.",
        icon: "character-attack",
        ranks: [
            { effects: [
                { icon: "defense-character", description: "Melee defense: +4" },
                { icon: "melee-character", description: "Melee attack: +4" }
            ] }
        ]
    },
    {
        name: "Conviction",
        description: "Such is this one's conviction that others have no choice but to believe.",
        icon: "character-morale",
        ranks: [
            { effects: [{ icon: "charge-character", description: "Leadership: +4" }] },
            { effects: [{ icon: "charge-character", description: "Leadership: +9" }] }
        ]
    },
    {
        name: "Wild-Eyed",
        description: "Don't look into their eyes, there is only death there!",
        icon: "character-attack",
        ranks: [
            { effects: [{ icon: "melee-character", description: "Melee attack: +4" }] },
            { effects: [{ icon: "melee-character", description: "Melee attack: +9" }] }
        ]
    },
    {
        name: "Impassioned",
        description: "There is nothing but utter belief. There is no reasoning with this one.",
        icon: "character-defense",
        ranks: [
            { effects: [{ icon: "defense-character", description: "Melee attack: +4" }] },
            { effects: [{ icon: "defense-character", description: "Melee attack: +9" }] }
        ]
    },
    {
        name: "Impaling Attack",
        description: "Every fibre of their being is charged and ready for action - wherever, whenever.",
        icon: "character-charge",
        ranks: [
            { effects: [
                { icon: "morale-character", description: "Speed: +10%" },
                { icon: "morale-character", description: "Charge bonus: +15" }
            ]
        }]
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
        name: "Hard to Hit",
        description: "Hand-to-hand combat is a lethal match of cut and thrust. However, it's not all about offensive strikes; parries and other defensive moves can also win the day.",
        icon: "character-defense",
        ranks: [
            { effects: [{ icon: "defense-character", description: "Melee defense: +6"}] },
            { effects: [{ icon: "defense-character", description: "Melee defense: +12"}] }
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
        name: "Blood Frenzy",
        description: "Where the Blood Queen treads, murder follows in her wake.",
        icon: "blood-frenzy",
        ranks: [
            { effects: [{ icon: "blood-frenzy", description: "Passive ability: \"Blood Frenzy\"" }] }
        ],
        spell: {
            description: "Lord ability",
            cooldown: "45",
            rarity: "uncommon",
            attributes: {
                type: "Augment",
                duration: "90 seconds",
                target: "Self",
                rechargeIf: "Engaged in melee",
                effects: [
                    { icon: "stage-1", postText: "Stage One (30 seconds)", color: "green" },
                    { text: "+6%", icon: "icon-armor-piercing", postText: "Armour-Piercing Weapon Damage", color: "green" },
                    { icon: "stage-2", postText: "Stage Two (30 seconds)", color: "green" },
                    { text: "+12%", icon: "icon-armor-piercing", postText: "Armour-Piercing Weapon Damage", color: "green" },
                    { text: "+9%", icon: "fatigue", postText: "Vigour", color: "green" },
                    { icon: "stage-3", postText: "Stage Three (30 seconds)", color: "green" },
                    { text: "+18%", icon: "icon-armor-piercing", postText: "Armour-Piercing Weapon Damage", color: "green" },
                    { text: "+18%", icon: "fatigue", postText: "Vigour", color: "green" }
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
        name: "Fervour",
        description: "This one fights with a fervour to be both admired and despised",
        icon: "character-damage",
        ranks: [
            { effects: [{ icon: "damage", description: "Weapon strength: +10%" }] },
            { effects: [{ icon: "damage", description: "Weapon strength: +20%" }] }
        ]
    },
    {
        name: "Survivalist",
        description: "The enemy's fear; their blood spilt in the mud - these are the things that sustain me.",
        icon: "character-health",
        ranks: [
            { effects: [{ icon: "health-character", description: "Hit points: +7%" }] },
            { effects: [{ icon: "health-character", description: "Hit points: +15%" }] }
        ]
    },
    {
        name: "Tenacity",
        description: "This one will not go down easily - it will be necessary to break both the will and the body first.",
        icon: "character-health",
        ranks: [
            { effects: [{ icon: "health-character", description: "Hit points: +7%" }] },
            { effects: [{ icon: "health-character", description: "Hit points: +15%" }] }
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
        name: "Piercing Shots",
        description: "The forest teaches a warrior not only when to fire but where, which makes a bigger difference.",
        icon: "character-ranged-damage",
        ranks: [
            { effects: [{ icon: "ranged-damage-character", description: "Missile damage: +7%" }] },
            { effects: [{ icon: "ranged-damage-character", description: "Missile damage: +15%" }] }
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
        name: "Fleet-Footed",
        description: "Those who are fleet of foot can reach the enemy faster.",
        icon: "character-speed",
        ranks: [
            { effects: [{ icon: "movement-character", description: "Speed: +7%" }] },
            { effects: [{ icon: "movement-character", description: "Speed: +15%" }] }
        ]
    },
    {
        name: "A Thousand & One Dark Blessings",
        description: "The Hag Sorceress' allegiance to the Ruinous influence of the Chaos Gods grants her a degree of protection against magical attack.",
        icon: "character-ward-save",
        ranks: [
            { effects: [{ icon: "resistance-magic", description: "Magic resistance: 10%" }] },
            { effects: [{ icon: "resistance-physical", description: "Physical resistance: 15%" }] }
        ]
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
        name: "Enchanting Beauty",
        description: "Morathi's strange, magical allure enchants opponents, making them question their loyalties and allegiances.",
        icon: "enchanting-beauty",
        ranks: [
            { effects: [{ icon: "enchanting-beauty", description: "Passive ability: \"Enchanting Beauty\"" }] }
        ],
        spell: {
            description: "Lord ability",
            rarity: "rare",
            attributes: {
                type: [ 
                    { text: "Hex (Area)" },
                    { text: "Only acts on targets when in area" }
                ],
                duration: "Constant",
                target: [
                    { text: "Around self" },
                    { text: "Affects enemies in range" },
                ],
                effectRange: "40m",
                effects: [
                    { text: "-9", icon: "melee-character", postText: "Melee Attack", color: "red" },
                    { text: "-8%", icon: "charge-character", postText: "Charge Bonus", color: "red" }
                ]
            }
        }
    },
    {
        name: "Volley of Dark Arrows",
        description: "By which an unexpected shower of pointy death rains down upon the unfortunate targets. Ouch!",
        icon: "volley-of-dark-arrows",
        ranks: [
            { effects: [{ icon: "volley-of-dark-arrows", description: "Ability: \"Volley of Dark Arrows\"" }] }
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
                effects: [
                    { text: "Causes", icon: "icon-armor-piercing", postText: "Armor-piercing damage", color: "green", uptick: "up-green" },
                    { text: "Good penetration", color: "green", uptick: "up-green" },
                    { text: "Effective at long range", color: "green", uptick: "up-green" }
                ]
            }
        }
    },
    {
        name: "Beastslaver",
        description: "Beastmasters share their minions' belligerence, cutting down foemen with lash, spear, and harpoon before claiming their twitching bodies as fodder.",
        icon: "beastslaver",
        ranks: [
            { effects: [{ icon: "beastslaver", description: "Ability: \"Beastslaver\"" }] }
        ],
        spell: {
            description: "Lord ability",
            cooldown: "60",
            rarity: "common",
            attributes: {
                type: "Augment",
                duration: "17 seconds",
                target: "Self",
                effects: [
                    { text: "+25%", icon: "icon-damage-base", postText: "Base Weapon Damage", color: "green" },
                    { text: "+16", icon: "icon-bonus-vs-large", postText: "Bonus vs. Large", color: "green" },
                    { text: "+25%", icon: "icon-armor-piercing", postText: "Armor-Piercing Weapon Damage", color: "green" }
                ]
            }
        }
    },
    {
        name: "Gaze of Malice",
        description: "If looks could kill... Oh wait, it turns out that they can...",
        icon: "ability-gaze-of-malice",
        ranks: [
            { effects: [{ icon: "ability-gaze-of-malice", description: "Ability: \"Gaze of Malice\"" }] }
        ],
        spell: {
            description: "Character ability",
            cooldown: "90",
            uses: "3",
            rarity: "uncommon",
            attributes: {
                type: "Breath",
                duration: "8 seconds",
                target: [
                    { text: "Ground" },
                    { text: "100m", uptick: "range" }
                ],
                cannotUseIf: "Climbing",
                cannotTargetIf: "On a wall",
                effects: [
                    { text: "Causes moderate magical damage", uptick: "up-green", color: "green" },
                    { text: "Short, wide, expanding, tear-shaped attack", uptick: "up-green", color: "green" },
                    { text: "Can disrupt unit formation", uptick: "up-green", color: "green" },
                    { text: "Strong vs. multiple units", uptick: "up-green", color: "green" },
                    { text: "Weak against armor", uptick: "down-red", color: "red" }
                ]
            }
        }
    },
    {
        name: "Chillwind",
        description: "A freezing gale is conjured and sent to assail the target with ice and hail.",
        icon: "spell-chillwind",
        ranks: [
            { effects: [
                { icon: "spell-chillwind", description: "Overcast spell: \"Chillwind Upgraded\"" },
                { icon: "spell-chillwind", description: "Cooldown: -30% to \"Chillwind\"" }
            ] },
            { effects: [
                { icon: "spell-chillwind", description: "Overcast spell: \"Chillwind Upgraded\"" },
                { icon: "spell-chillwind", description: "Cooldown: -50% to \"Chillwind\"" },
                { icon: "spell-chillwind", description: "Winds of Magic cost: -1 for \"Chillwind\"" },
                { icon: "spell-chillwind", description: "Winds of Magic cost: -2 for \"Chillwind Upgraded\"" },
                { icon: "spell-chillwind", description: "Miscast base chance: -15% for \"Chillwind Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "common",
            cost: [8, 6],
            cooldown: "29",
            attributes: {
                type: "Wind",
                duration: "3 seconds",
                target: [
                    { text: "Ground" },
                    { text: "150m", uptick: "range" }
                ],
                cannotUseIf: "Climbing",
                cannotTargetIf: "On a wall, Climbing",
                miscastChance:  {"0": "50", "1": "35"},
                effects: [
                    { text: "Additional effect of Frostbite", uptick: "up-blue", color: "blue" },
                    { text: "Causes minor", icon: "icon-magic", postText: "magical damage", uptick: "up-green", color: "green" },
                    { text: "Small, forward-moving area of effect", uptick: "up-green", color: "green" },
                    { text: "Strong vs. multiple units", uptick: "up-green", color: "green" },
                    { text: "Good against armor", uptick: "up-green", color: "green" }
                ],
                contact: [
                    { text: "Frostbite (20 seconds)", color: "red" },
                    { text: "-20", icon: "reload-time-stat", postText: "Reload Skill", color: "red" },
                    { text: "-48%", icon: "movement-character", postText: "Speed", color: "red" }
                ]
            }
        }
    },
    {
        name: "Spiteful Conjuration",
        description: "As the spellcaster summons Dark Magic, black darts of malice will flit through the air to pierce the victims of the Dark Elf's spite.",
        icon: "spell-spiteful-conjuration",
        ranks: [
            { effects: [{ icon: "spell-spiteful-conjuration", description: "Passive ability: \"Spiteful Conjuration\"" }] }
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
                    { text: "Spiteful Conjuration (18 seconds)", color: "red" },
                    { text: "-15", icon: "armor-character", postText: "Armor", color: "red" }
                ]
            }
        }
    },
    {
        name: "Power of Darkness",
        description: "The caster draws on unstable power from the Realm of Chaos to charge their spells.",
        icon: "spell-power-of-darkness",
        ranks: [
            { effects: [
                { icon: "spell-power-of-darkness", description: "Cooldown: -50% to \"Power of Darkness\"" },
                { icon: "spell-power-of-darkness", description: "Winds of Magic cost: -1 for \"Power of Darkness\"" }
            ] }
        ]
    },
    {
        name: "Word of Pain",
        description: "As the caster utters a forbidden name, their enemies are wracked with waves of agnoy.",
        icon: "spell-word-of-pain",
        ranks: [
            { effects: [
                { icon: "spell-word-of-pain", description: "Spell: \"Word of Pain\"" },
                { icon: "spell-word-of-pain", description: "Overcast spell: \"Word of Pain\"" },
                { icon: "spell-word-of-pain", description: "Cooldown: -30% to \"Word of Pain\"" }
            ] },
            { effects: [
                { icon: "spell-word-of-pain", description: "Overcast spell: \"Word of Pain Upgraded\"" },
                { icon: "spell-word-of-pain", description: "Cooldown: -30% to \"Word of Pain\"" },
                { icon: "spell-word-of-pain", description: "Winds of Magic cost: -2 for \"Word of Pain\"" },
                { icon: "spell-word-of-pain", description: "Winds of Magic cost: -3 for \"Word of Pain Upgraded\"" },
                { icon: "spell-word-of-pain", description: "Miscast base chance: -15% for \"Word of Pain Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "uncommon",
            cost: [12, 9],
            cooldown: "44",
            attributes: {
                type: "Hex",
                duration: "40 seconds",
                target: [
                    { text: "Enemy" },
                    { text: "200m", uptick: "range" }
                ],
                cannotUseIf: "Climbing",
                miscastChance:  {"0": "50", "1": "35"},
                effects: [
                    { text: "Additional effect on", icon: "defense-character", postText: "melee defense", uptick: "up-blue", color: "blue" },
                    { text: "-24", icon: "defense-character", postText: "Melee Defense", color: "red" },
                    { text: "-40", icon: "melee-character", postText: "Melee Attack", color: "red" },
                    { text: "-30", icon: "accuracy-character", postText: "Accuracy", color: "red" }
                ]
            }
        }
    },
    {
        name: "Bladewind",
        description: "A swirling maelstrom of swords spin and slach their way across the battlefield in search of blood.",
        icon: "spell-bladewind",
        ranks: [
            { effects: [
                { icon: "spell-bladewind", description: "Spell: \"Bladewind\"" },
                { icon: "spell-bladewind", description: "Overcast spell: \"Bladewind\"" },
                { icon: "spell-bladewind", description: "Cooldown: -30% to \"Bladewind\"" }
            ] },
            { effects: [
                { icon: "spell-bladewind", description: "Overcast spell: \"Bladewind Upgraded\"" },
                { icon: "spell-bladewind", description: "Cooldown: -50% to \"Bladewind\"" },
                { icon: "spell-bladewind", description: "Winds of Magic cost: -2 for \"Bladewind\"" },
                { icon: "spell-bladewind", description: "Winds of Magic cost: -2 for \"Bladewind Upgraded\"" },
                { icon: "spell-bladewind", description: "Miscast base chance: -15% for \"Bladewind Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "uncommon",
            cost: [15, 13],
            cooldown: "38",
            attributes: {
                type: "Vortex",
                duration: "14 seconds",
                target: [
                    { text: "Ground" },
                    { text: "150m", uptick: "range" }
                ],
                cannotUseIf: "Climbing",
                cannotTargetIf: "On a wall, Climbing",
                miscastChance:  {"0": "50", "1": "35"},
                effects: [
                    { text: "Extended effect duration", uptick: "up-blue", color: "blue" },
                    { text: "Causes major", icon: "icon-magic", postText: "magical damage", uptick: "up-green", color: "green" },
                    { text: "Large, randomly-moving area of effect", uptick: "up-green", color: "green" },
                    { text: "Strong vs. multiple units", uptick: "up-green", color: "green" },
                    { text: "Weak against armor", uptick: "down-red", color: "red" }
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
        name: "Doombolt",
        description: "The sky opens and a bolt of burning, pure Chaos black lightning hurtles towards the foe.",
        icon: "spell-doombolt",
        ranks: [
            { effects: [
                { icon: "spell-doombolt", description: "Spell: \"Doombolt\"" },
                { icon: "spell-doombolt", description: "Overcast spell: \"Doombolt\"" },
                { icon: "spell-doombolt", description: "Cooldown: -30% to \"Doombolt\"" }
            ] },
            { effects: [
                { icon: "spell-doombolt", description: "Overcast spell: \"Doombolt Upgraded\"" },
                { icon: "spell-doombolt", description: "Cooldown: -50% to \"Doombolt\"" },
                { icon: "spell-doombolt", description: "Winds of Magic cost: -2 for \"Doombolt\"" },
                { icon: "spell-doombolt", description: "Winds of Magic cost: -3 for \"Doombolt Upgraded\"" },
                { icon: "spell-doombolt", description: "Miscast base chance: -15% for \"Doombolt Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "rare",
            cost: [16, 13],
            cooldown: "38",
            attributes: {
                type: "Vortex",
                duration: "14 seconds",
                target: [
                    { text: "Ground" },
                    { text: "150m", uptick: "range" }
                ],
                cannotUseIf: "Climbing",
                cannotTargetIf: "On a wall, Climbing",
                miscastChance:  {"0": "50", "1": "35"},
                effects: [
                    { text: "Increased", icon: "icon-armor-piercing-ranged", postText: "armor-piercing damage", uptick: "up-blue", color: "blue" },
                    { text: "Causes major", icon: "icon-magic", postText: "magical damage", uptick: "up-green", color: "green" },
                    { text: "Medium strike area", uptick: "up-green", color: "green" },
                    { text: "Strong vs. a single combatant", uptick: "up-green", color: "green" },
                    { text: "Good against armor", uptick: "up-green", color: "green" },
                    { text: "Strong vs. a single unit", uptick: "up-green", color: "green" }
                ]
            }
        }
    },
    {
        name: "Soul Stealer",
        description: "Tendrils of solidified darkness writhe outwards, draining the lifeforce from foes and renewing the caster's own vigour.",
        icon: "spell-soul-stealer",
        ranks: [
            { effects: [
                { icon: "spell-soul-stealer", description: "Spell: \"Soul Stealer\"" },
                { icon: "spell-soul-stealer", description: "Cooldown: -50% to \"Soul Stealer\"" },
                { icon: "spell-soul-stealer", description: "Winds of Magic cost: -4 for \"Soul Stealer\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "rare",
            cost: ["14"],
            cooldown: "27",
            attributes: {
                type: [
                    { text: "Direct Damage (Area)"},
                    { text: "Instantly affects targets in area"}
                ],
                duration: "12 seconds",
                target: [
                    { text: "Ground, Enemy" },
                    { text: "Affects enemies in range" },
                    { text: "100m", uptick: "range" }
                ],
                cannotUseIf: "Climbing",
                effectRange: "30m",
                miscastChance: [{text: "100%", color: "blue"}],
                effects: [
                    { text: "Causes damage to combatants", uptick: "up-green", color: "green" },
                    { text: "Absorbs hitpoints from enemies", uptick: "up-green", color: "green" },
                    { text: "Strong vs. a single combatant", uptick: "up-green", color: "green" },
                    { text: "Weak vs. multiple combatants", uptick: "down-red", color: "red" }
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
        name: "The First Sorceress",
        description: "All the hate, envy, and malice uttered in prayer each day, returned a thousand-fold.",
        icon: "character-magic",
        ranks: [
            { effects: [
                { icon: "wizard", description: "Unlocks Hero recruitment: Sorceress", ps: "all provinces" },
                { icon: "wizard", description: "Hero capacity: +1 for Sorceresses" },
                { icon: "wizard", description: "Hero recruit rank:+2 for Sorceresses", ps: "factionwide" }
            ] }
        ]
    },
    {
        name: "Blessed by Evil",
        description: "Evil takes flight; blotting out the moon on blackened wings, calling us to the dance...",
        icon: "blood-lust",
        ranks: [
            { effects: [
                { icon: "magic-character", description: "Miscast base chance: -15%" },
                { icon: "magic-cooldown", description: "Cooldown: -20% to all spells" },
                { icon: "spell-power-of-darkness", description: "Winds of Magic cost: -2 for \"Power of Darkness\"" },
                { icon: "spell-soul-stealer", description: "Winds of Magic cost: -3 for \"Soulstealer\"" },
                { icon: "spell-melkoths-mystifying-miasma", description: "Winds of Magic cost: -1 for \"Melkoth\"s Mystifying Miasma Upgraded\"" },
                { icon: "spell-pit-of-shades", description: "Winds of Magic cost: -2 for \"Pit of Shades Upgraded\"" },
                { icon: "spell-doom-darkness", description: "Winds of Magic cost: -2 for \"Doom & Darkness Upgraded\"" },
                { icon: "spell-soulblight", description: "Winds of Magic cost: -2 for \"Soulblight Upgraded\"" }
            ] }
        ]
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
        name: "Spirit Leech",
        description: "The Wizard extends an ebon hand towards the chosen foe, leeching its spirit through tainted sorcery.",
        icon: "spell-spirit-leech",
        ranks: [
            { effects: [
                { icon: "spell-spirit-leech", description: "Overcast spell: \"Spirit Leech Upgraded\"" },
                { icon: "spell-spirit-leech", description: "Cooldown: -30% to \"Spirit Leech\"" }
            ] },
            { effects: [
                { icon: "spell-spirit-leech", description: "Overcast spell: \"Spirit Leech Upgraded\"" },
                { icon: "spell-spirit-leech", description: "Cooldown: -50% to \"Spirit Leech\"" },
                { icon: "spell-spirit-leech", description: "Winds of Magic cost: -2 for \"Spirit Leech\"" },
                { icon: "spell-spirit-leech", description: "Winds of Magic cost: -2 for \"Spirit Leech Upgraded\"" },
                { icon: "spell-spirit-leech", description: "Miscast base chance: -15% for \"Spirit Leech Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "common",
            cost: [11, 9],
            cooldown: "32",
            attributes: {
                type: "Direct Damage",
                duration: "13 seconds",
                target: [
                    { text: "Enemy" },
                    { text: "300m", uptick: "range" }
                ],
                miscastChance:  {"0": "50", "1": "35"},
                effects: [
                    { text: "Extended cast range", uptick: "up-blue", color: "blue" },
                    { text: "Causes damage to combatants", uptick: "up-green", color: "green" },
                    { text: "Strong vs. a single combatant", uptick: "up-green", color: "green" },
                    { text: "Chance opponent will resist damage", uptick: "down-red", color: "red" },
                    { text: "Weak vs. multiple combatants", uptick: "down-red", color: "red" }
                ]
            }
        }
    },
    {
        name: "Doom & Darkness",
        description: "Spirits of the departed assail the Wizard's foes, sapping their resolve and causing dread among their numbers.",
        icon: "spell-doom-darkness",
        ranks: [
            { effects: [
                { icon: "spell-doom-darkness", description: "Overcast spell: \"Doom & Darkness Upgraded\"" },
                { icon: "spell-doom-darkness", description: "Cooldown: -30% to \"Doom & Darkness\"" }
            ] },
            { effects: [
                { icon: "spell-doom-darkness", description: "Overcast spell: \"Doom & Darkness Upgraded\"" },
                { icon: "spell-doom-darkness", description: "Cooldown: -50% to \"Doom & Darkness\"" },
                { icon: "spell-doom-darkness", description: "Winds of Magic cost: -1 for \"Doom & Darkness\"" },
                { icon: "spell-doom-darkness", description: "Winds of Magic cost: -2 for \"Doom & Darkness Upgraded\"" },
                { icon: "spell-doom-darkness", description: "Miscast base chance: -15% for \"Doom & Darkness Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "uncommon",
            cost: [14, 12],
            cooldown: "43",
            attributes: {
                type: "Hex",
                target: [
                    { text: "Ground, Enemy" },
                    { text: "Affects enemies in range" },
                    { text: "200m", uptick: "range" }
                ],
                effectRange: "40m",
                miscastChance:  {"0": "50", "1": "35"},
                effects: [
                    { text: "Added effect area", uptick: "up-blue", color: "blue" },
                    { text: "-16", icon: "morale-mallus", postText: "Leadership", color: "red" }
                ]
            }
        }
    },
    {
        name: "Life-Leeching",
        description: "Spellcasters who practice Death Magic can channel the life force of foes into their spells.",
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
        name: "Aspect of the Dread Knight",
        description: "An invisible aura of horror surrounds the Wizard's allies. Only the bravest foes now stand before them.",
        icon: "spell-aspect-of-the-dread-knight",
        ranks: [
            { effects: [
                { icon: "spell-aspect-of-the-dread-knight", description: "Overcast spell: \"Aspect of the Dread Knight Upgraded\"" },
                { icon: "spell-aspect-of-the-dread-knight", description: "Cooldown: -30% to \"Aspect of the Dread Knight\"" }
            ] },
            { effects: [
                { icon: "spell-aspect-of-the-dread-knight", description: "Overcast spell: \"Aspect of the Dread Knight Upgraded\"" },
                { icon: "spell-aspect-of-the-dread-knight", description: "Cooldown: -50% to \"Aspect of the Dread Knight\"" },
                { icon: "spell-aspect-of-the-dread-knight", description: "Winds of Magic cost: -1 for \"Aspect of the Dread Knight\"" },
                { icon: "spell-aspect-of-the-dread-knight", description: "Winds of Magic cost: -2 for \"Aspect of the Dread Knight Upgraded\"" },
                { icon: "spell-aspect-of-the-dread-knight", description: "Miscast base chance: -15% for \"Aspect of the Dread Knight Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "common",
            cost: [9, 7],
            cooldown: "28",
            attributes: {
                type: [
                    { text: "Augment"},
                    { text: "Instantly affects targets in area"}
                ],
                target: [
                    { text: "Self, Ground, Ally" },
                    { text: "Affects allies in range" },
                    { text: "200m", uptick: "range" }
                ],
                effectRange: "40m",
                miscastChance:  {"0": "50", "1": "35"},
                effects: [
                    { text: "Extended effect duration", uptick: "up-blue", color: "blue" },
                    { text: "Added effect area", uptick: "up-blue", color: "blue" },
                    { text: "+8", icon: "morale-character", color: "green" },
                    { text: "Can", icon: "attribute-terror", postText: "Cause Terror", uptick: "up-green", color: "green" }
                ]
            }
        }
    },
    {
        name: "Soulblight",
        description: "Harnessing the sickly power of Shyish, the Wizard weakens the foe's will to survive the battle.",
        icon: "spell-soulblight",
        ranks: [
            { effects: [
                { icon: "spell-soulblight", description: "Spell: \"Soulblight\"" },
                { icon: "spell-soulblight", description: "Overcast spell: \"Soulblight\"" },
                { icon: "spell-soulblight", description: "Cooldown: -30% to \"Soulblight\"" }
            ] },
            { effects: [
                { icon: "spell-soulblight", description: "Overcast spell: \"Soulblight Upgraded\"" },
                { icon: "spell-soulblight", description: "Cooldown: -50% to \"Soulblight\"" },
                { icon: "spell-soulblight", description: "Winds of Magic cost: -2 for \"Soulblight\"" },
                { icon: "spell-soulblight", description: "Winds of Magic cost: -3 for \"Soulblight Upgraded\"" },
                { icon: "spell-soulblight", description: "Miscast base chance: -15% for \"Soulblight Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "uncommon",
            cost: [14, 11],
            cooldown: "45",
            attributes: {
                type: [
                    { text: "Hex (Area)"},
                    { text: "Only acts on targets when in area"}
                ],
                duration: "50 seconds",
                target: [
                    { text: "Around self" },
                    { text: "Affects enemies in range" }
                ],
                effectRange: "40m",
                miscastChance:  {"0": "50", "1": "35"},
                effects: [
                    { text: "Extended effect duration", uptick: "up-blue", color: "blue" },
                    { text: "-30", icon: "armor-character", postText: "Armor", color: "red" },
                    { text: "-30%", icon: "icon-damage-base", postText: "Base Weapon Damage", color: "red" }
                ]
            }
        }
    },
    {
        name: "The Fate of Bjuna",
        description: "Following the fate of the unsmiling warrior, Bjuna, the targets of the caster's ire will laugh themselves to death.",
        icon: "spell-the-fate-of-bjuna",
        ranks: [
            { effects: [
                { icon: "spell-the-fate-of-bjuna", description: "Spell: \"The Fate of Bjuna\"" },
                { icon: "spell-the-fate-of-bjuna", description: "Cooldown: -150% to \"The Fate of Bjuna\"" },
                { icon: "spell-the-fate-of-bjuna", description: "Winds of Magic cost: -3 for \"The Fate of Bjuna\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "rare",
            attributes: {
                type: "Direct Damage",
                duration: "20 seconds",
                target: [
                    { text: "Enemy" },
                    { text: "100m", uptick: "range" }
                ],
                effects: [
                    { text: "Causes damage to combatants", uptick: "up-green", color: "green" },
                    { text: "Strong vs. multiple combatants", uptick: "up-green", color: "green" },
                    { text: "Chance opponent will resist damage", uptick: "down-red", color: "red" },
                    { text: "Weak vs. a single combatant", uptick: "down-red", color: "red" }
                ]
            }
        }
    },
    {
        name: "The Purple Sun of Xereus",
        description: "A colossal orb of purple-edged darkness materialises - those who do not escape its crystalline touch are doomed for eternity!",
        icon: "spell-the-purple-sun-of-xereus",
        ranks: [
            { effects: [
                { icon: "spell-the-purple-sun-of-xereus", description: "Overcast spell: \"The Purple Sun of Xereus Upgraded\"" },
                { icon: "spell-the-purple-sun-of-xereus", description: "Cooldown: -30% to \"The Purple Sun of Xereus\"" }
            ] },
            { effects: [
                { icon: "spell-the-purple-sun-of-xereus", description: "Overcast spell: \"The Purple Sun of Xereus Upgraded\"" },
                { icon: "spell-the-purple-sun-of-xereus", description: "Cooldown: -50% to \"The Purple Sun of Xereus\"" },
                { icon: "spell-the-purple-sun-of-xereus", description: "Winds of Magic cost: -2 for \"The Purple Sun of Xereus\"" },
                { icon: "spell-the-purple-sun-of-xereus", description: "Winds of Magic cost: -3 for \"The Purple Sun of Xereus Upgraded\"" },
                { icon: "spell-the-purple-sun-of-xereus", description: "Miscast base chance: -15% for \"The Purple Sun of Xereus Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "rare",
            cost: [24, 7],
            cooldown: "54",
            attributes: {
                type: "Vortex",
                duration: "22 seconds",
                target: [
                    { text: "Ground" },
                    { text: "150m", uptick: "range" }
                ],
                cannotUseIf: "Climbing",
                cannotTargetIf: "On a wall",
                miscastChance:  {"0": "50", "1": "35"},
                effects: [
                    { text: "Increased effect duration", uptick: "up-blue", color: "blue" },
                    { text: "Causes major", icon: "icon-magic", postText: "magical damage", uptick: "up-green", color: "green" },
                    { text: "Huge, randomly-moving area of effect", uptick: "up-green", color: "green" },
                    { text: "Can disrupt unit formation", uptick: "up-green", color: "green" },
                    { text: "Strong vs. multiple units", uptick: "up-green", color: "green" },
                    { text: "Good against armor", uptick: "up-green", color: "green" }
                ]
            }
        }
    },
    {
        name: "Melkoth's Mystifying Miasma",
        description: "The caster weaves a confounding fog that numbs and deludes enemies, causing them to stumble and stagger.",
        icon: "spell-melkoths-mystifying-miasma",
        ranks: [
            { effects: [
                { icon: "spell-melkoths-mystifying-miasma", description: "Overcast spell: \"Melkoth's Mystifying Miasma Upgraded\"" },
                { icon: "spell-melkoths-mystifying-miasma", description: "Cooldown: -30% to \"Melkoth's Mystifying Miasma\"" }
            ] },
            { effects: [
                { icon: "spell-melkoths-mystifying-miasma", description: "Overcast spell: \"Melkoth's Mystifying Miasma Upgraded\"" },
                { icon: "spell-melkoths-mystifying-miasma", description: "Cooldown: -50% to \"Melkoth's Mystifying Miasma\"" },
                { icon: "spell-melkoths-mystifying-miasma", description: "Winds of Magic cost: -1 for \"Melkoth's Mystifying Miasma\"" },
                { icon: "spell-melkoths-mystifying-miasma", description: "Winds of Magic cost: -2 for \"Melkoth's Mystifying Miasma Upgraded\"" },
                { icon: "spell-melkoths-mystifying-miasma", description: "Miscast base chance: -15% for \"Melkoth's Mystifying Miasma Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "common",
            cost: [8, 6],
            cooldown: "29",
            attributes: {
                type: "Direct Damage",
                duration: "14 seconds",
                target: [
                    { text: "Enemy" },
                    { text: "300m", uptick: "range" }
                ],
                miscastChance:  {"0": "50", "1": "35"},
                effects: [
                    { text: "Extended cast range", uptick: "up-blue", color: "blue" },
                    { text: "Causes damage to combatants", uptick: "up-green", color: "green" },
                    { text: "Strong vs. multiple combatants", uptick: "up-green", color: "green" },
                    { text: "Weak vs. a single comatant", uptick: "down-red", color: "red" },
                    { text: "-24%", icon: "movement-character", postText: "Speed", color: "red" }
                ]
            }
        }
    },
    {
        name: "The Penumbral Pendulum",
        description: "A spectral pendulum is summoned by the Wizard. On command, it swings, razor sharp and with lethal speed, through the foe",
        icon: "spell-the-penumbral-pendulum",
        ranks: [
            { effects: [
                { icon: "spell-the-penumbral-pendulum", description: "Spell: \"The Penumbral Pendulum Upgraded\"" },
                { icon: "spell-the-penumbral-pendulum", description: "Overcast spell: \"The Penumbral Pendulum Upgraded\"" },
                { icon: "spell-the-penumbral-pendulum", description: "Cooldown: -30% to \"The Penumbral Pendulum\"" }
            ] },
            { effects: [
                { icon: "spell-the-penumbral-pendulum", description: "Overcast spell: \"The Penumbral Pendulum Upgraded\"" },
                { icon: "spell-the-penumbral-pendulum", description: "Cooldown: -50% to \"The Penumbral Pendulum\"" },
                { icon: "spell-the-penumbral-pendulum", description: "Winds of Magic cost: -2 for \"The Penumbral Pendulum\"" },
                { icon: "spell-the-penumbral-pendulum", description: "Winds of Magic cost: -3 for \"The Penumbral Pendulum Upgraded\"" },
                { icon: "spell-the-penumbral-pendulum", description: "Miscast base chance: -15% for \"The Penumbral Pendulum Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "common",
            cost: [18, 15],
            cooldown: "40",
            attributes: {
                type: "Wind",
                duration: "3 seconds",
                target: [
                    { text: "Ground" },
                    { text: "200m", uptick: "range" }
                ],
                cannotTargetIf: "Flying, On a wall",
                miscastChance:  {"0": "50", "1": "35"},
                effects: [
                    { text: "Increased", icon: "icon-armor-piercing", postText: "armor-piercing damage", uptick: "up-blue", color: "blue" },
                    { text: "Causes massive", icon: "icon-magic", postText: "magical damage", uptick: "up-green", color: "green" },
                    { text: "Small, forward-moving area of effect", uptick: "up-green", color: "green" },
                    { text: "Strong vs. multiple units", uptick: "up-green", color: "green" },
                    { text: "Weak vs. a single combatant", uptick: "down-red", color: "red" }
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
        name: "The Withering",
        description: "The Wizard destroys their enemies form within, corroding foes' minds with doubt and crisis.",
        icon: "spell-the-withering",
        ranks: [
            { effects: [
                { icon: "spell-the-withering", description: "Spell: \"The Withering Upgraded\"" },
                { icon: "spell-the-withering", description: "Overcast spell: \"The Withering Upgraded\"" },
                { icon: "spell-the-withering", description: "Cooldown: -30% to \"The Withering\"" }
            ] },
            { effects: [
                { icon: "spell-the-withering", description: "Overcast spell: \"The Withering Upgraded\"" },
                { icon: "spell-the-withering", description: "Cooldown: -50% to \"The Withering\"" },
                { icon: "spell-the-withering", description: "Winds of Magic cost: -1 for \"The Withering\"" },
                { icon: "spell-the-withering", description: "Winds of Magic cost: -2 for \"The Withering Upgraded\"" },
                { icon: "spell-the-withering", description: "Miscast base chance: -15% for \"The Withering Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "uncommon",
            cost: [14, 12],
            cooldown: "43",
            attributes: {
                type: [
                    { text: "Hex (Area)"},
                    { text: "Only acts on target when in area"}
                ],
                target: [
                    { text: "Ground, Enemy" },
                    { text: "Affects enemies in range" },
                    { text: "200m", uptick: "range" }
                ],
                effectRange: "40m",
                miscastChance:  {"0": "50", "1": "35"},
                effects: [
                    { text: "Added effect area", uptick: "up-blue", color: "blue" },
                    { text: "-30", icon: "armor-character", postText: "Armor", color: "red" },
                    { text: "-8", icon: "morale-mallus", postText: "Leadership", color: "red" }
                ]
            }
        }
    },
    {
        name: "Pit of Shades",
        description: "The spellcaster opens a vortex leading into the Pit. Anything caught within it will be lost forever.",
        icon: "spell-pit-of-shades",
        ranks: [
            { effects: [
                { icon: "spell-pit-of-shades", description: "Spell: \"Pit of Shades Upgraded\"" },
                { icon: "spell-pit-of-shades", description: "Overcast spell: \"Pit of Shades Upgraded\"" },
                { icon: "spell-pit-of-shades", description: "Cooldown: -30% to \"Pit of Shades\"" }
            ] },
            { effects: [
                { icon: "spell-pit-of-shades", description: "Overcast spell: \"Pit of Shades Upgraded\"" },
                { icon: "spell-pit-of-shades", description: "Cooldown: -50% to \"Pit of Shades\"" },
                { icon: "spell-pit-of-shades", description: "Winds of Magic cost: -3 for \"Pit of Shades\"" },
                { icon: "spell-pit-of-shades", description: "Winds of Magic cost: -3 for \"Pit of Shades Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "common",
            cost: [20, 17],
            cooldown: "49",
            attributes: {
                type: "Vortex",
                duration: "13 seconds",
                target: [
                    { text: "Ground" },
                    { text: "200m", uptick: "range" }
                ],
                miscastChance: "50%",
                effects: [
                    { text: "Increased", icon: "icon-armor-piercing", postText: "armor-piercing damage", uptick: "up-blue", color: "blue" },
                    { text: "Causes moderate", icon: "icon-magic", postText: "magical damage", uptick: "up-green", color: "green" },
                    { text: "Can disrupt unit formation", uptick: "up-green", color: "green" },
                    { text: "Huge, stationary area of effect", uptick: "up-green", color: "green" },
                    { text: "Strong vs. multiple units", uptick: "up-green", color: "green" },
                    { text: "Good against armor", uptick: "up-green", color: "green" }                ]
            }
        }
    },
    {
        name: "Okkam's Mindrazor",
        description: "The supernatural solution is often the best; weapons materialise before the caster's allies, allowing them to slice through flesh, soul, and consciousness.",
        icon: "spell-okkams-mindrazor",
        ranks: [
            { effects: [
                { icon: "spell-okkams-mindrazor", description: "Spell: \"Okkam's Mindrazor Upgraded\"" },
                { icon: "spell-okkams-mindrazor", description: "Overcast spell: \"Okkam's Mindrazor Upgraded\"" },
                { icon: "spell-okkams-mindrazor", description: "Cooldown: -30% to \"Okkam's Mindrazor\"" }
            ] },
            { effects: [
                { icon: "spell-okkams-mindrazor", description: "Overcast spell: \"Okkam's Mindrazor Upgraded\"" },
                { icon: "spell-okkams-mindrazor", description: "Cooldown: -50% to \"Okkam's Mindrazor\"" },
                { icon: "spell-okkams-mindrazor", description: "Winds of Magic cost: -2 for \"Okkam's Mindrazor\"" },
                { icon: "spell-okkams-mindrazor", description: "Winds of Magic cost: -3 for \"Okkam's Mindrazor Upgraded\"" },
                { icon: "spell-okkams-mindrazor", description: "Miscast base chance: -15% for \"Okkam's Mindrazor Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            rarity: "common",
            cost: [16, 13],
            cooldown: "46",
            attributes: {
                type: [
                    { text: "Augment (Area)"},
                    { text: "Only acts on target when in area"}
                ],
                target: [
                    { text: "Self, Ground, Ally" },
                    { text: "Affects allies in range" },
                    { text: "200m", uptick: "range" }
                ],
                effectRange: "40m",
                miscastChance:  {"0": "50", "1": "35"},
                imbues: [{ postText: "Magical Damage", icon: "icon-magic" }],
                effects: [
                    { text: "Added effect area", uptick: "up-blue", color: "blue" },
                    { text: "+50%", icon: "icon-damage-base", postText: "Base Damage", color: "green" },
                    { text: "+50%", icon: "icon-armor-piercing", postText: "Armor-Piercing Weapon Damage", color: "green" }
                ]
            }
        }
    },
    {
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
        name: "Inspiring Presence",
        description: "There are Lords that radiate power, confidence and fear, inspiring their followers to great or terrible acts.",
        icon: "battle-morale",
        ranks: [
            { effects: [{ icon: "morale", description: "Character's aura leadership effect: +5" }] }
        ]
    },
    {
        name: "Line Breaker",
        description: "Magic is a most useful tool on the field of battle, but generally secondary in the face of good, old-fashioned brute force.",
        icon: "battle-defense",
        ranks: [
            { effects: [
                { icon: "defense", description: "Melee defense: +4 for Dreadspears, Bleakswords and Black Ark Corsairs units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "melee", description: "Melee attack: +6 for Dreadspears, Bleakswords and Black Ark Corsairs units", ps: "Lord's army" },
                { icon: "defense", description: "Melee defense: +6 for Dreadspears, Bleakswords and Black Ark Corsairs units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "melee", description: "Melee attack: +8 for Dreadspears, Bleakswords and Black Ark Corsairs units", ps: "Lord's army" },
                { icon: "defense", description: "Melee defense: +8 for Dreadspears, Bleakswords and Black Ark Corsairs units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        name: "Sheafmaster",
        description: "Marshalling missile troops effectively - even elites - is all about timing.",
        icon: "battle-ammo",
        ranks: [
            { effects: [
                { icon: "ammo", description: "Ammunition: +8% for Darkshards, Black Ark Corsairs and Reaper Bolt Thrower units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "ammo", description: "Ammunition: +12% for Darkshards, Black Ark Corsairs and Reaper Bolt Thrower units", ps: "Lord's army" },
                { icon: "reload-time", description: "Reload time reduction: +7% for Darkshards, Black Ark Corsairs and Reaper Bolt Thrower units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "ammo", description: "Ammunition: +20% for Darkshards, Black Ark Corsairs and Reaper Bolt Thrower units", ps: "Lord's army" },
                { icon: "reload-time", description: "Reload time reduction: +10% for Darkshards, Black Ark Corsairs and Reaper Bolt Thrower units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        name: "Raid Leader",
        description: "The most effective raiders have a plan that is certain to succeed and stick to it; this one ensures that they do.",
        icon: "battle-charge",
        ranks: [
            { effects: [
                { icon: "charge", description: "Charge bonus: +6 for Shades, Dark Riders, Doomfire Warlocks and Scourgerunner Chariot units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "ranged-damage", description: "Missile damage: +9% for Shades, Dark Riders, Doomfire Warlocks and Scourgerunner Chariot units", ps: "Lord's army" },
                { icon: "defense", description: "Melee defense: +6 for Shades, Dark Riders, Doomfire Warlocks and Scourgerunner Chariot units", ps: "Lord's army" },
                { icon: "charge", description: "Charge bonus: +9 for Shades, Dark Riders, Doomfire Warlocks and Scourgerunner Chariot units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "ranged-damage", description: "Missile damage: +12% for Shades, Dark Riders, Doomfire Warlocks and Scourgerunner Chariot units", ps: "Lord's army" },
                { icon: "defense", description: "Melee defense: +8 for Shades, Dark Riders, Doomfire Warlocks and Scourgerunner Chariot units", ps: "Lord's army" },
                { icon: "charge", description: "Charge bonus: +12 for Shades, Dark Riders, Doomfire Warlocks and Scourgerunner Chariot units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        name: "Lash Master",
        description: "Judicious, or even not-so-judicious, use of the lash tends to get the desired results, so why hold back?",
        icon: "battle-damage",
        ranks: [
            { effects: [
                { icon: "weapon-damage", description: "Weapon strength: +6% for Harpies, War Hydra, Kharibdyss, Black Dragon, Feral Manticore and Bloodwrack Madusae units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "weapon-damage", description: "Weapon strength: +9% for Harpies, War Hydra, Kharibdyss, Black Dragon, Feral Manticore and Bloodwrack Madusae units", ps: "Lord's army" },
                { icon: "charge", description: "Charge bonus: +9 for Harpies, War Hydra, Kharibdyss, Black Dragon, Feral Manticore and Bloodwrack Madusae units", ps: "Lord's army" },
                { icon: "reload-time", description: "Reload time reduction: +9% for Harpies, War Hydra, Kharibdyss, Black Dragon, Feral Manticore and Bloodwrack Madusae units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "weapon-damage", description: "Weapon strength: +12% for Harpies, War Hydra, Kharibdyss, Black Dragon, Feral Manticore and Bloodwrack Madusae units", ps: "Lord's army" },
                { icon: "charge", description: "Charge bonus: +12 for Harpies, War Hydra, Kharibdyss, Black Dragon, Feral Manticore and Bloodwrack Madusae units", ps: "Lord's army" },
                { icon: "reload-time", description: "Reload time reduction: +12% for Harpies, War Hydra, Kharibdyss, Black Dragon, Feral Manticore and Bloodwrack Madusae units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        name: "Knight Lord",
        description: "The ability to command the savage, untamed Cold Ones should not be underestimated - not everyone has the knack!",
        icon: "battle-attack",
        ranks: [
            { effects: [
                { icon: "melee", description: "Melee attack: +4 for Cold One Knights, Cold One Dread Knights and Cold One Chariot units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "melee", description: "Melee attack: +6 for Cold One Knights, Cold One Dread Knights and Cold One Chariot units", ps: "Lord's army" },
                { icon: "defense", description: "Melee defense: +6 for Cold One Knights, Cold One Dread Knights and Cold One Chariot units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "melee", description: "Melee attack: +8 for Cold One Knights, Cold One Dread Knights and Cold One Chariot units", ps: "Lord's army" },
                { icon: "defense", description: "Melee defense: +8 for Cold One Knights, Cold One Dread Knights and Cold One Chariot units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        name: "Slaughterlord",
        description: "An elite even amongst elites, this accomplished warrior directs the cut-and-thrust of melee - a choreographer of death, you might say.",
        icon: "battle-attack",
        ranks: [
            { effects: [{ icon: "melee", description: "Melee attack: +4 for Witch Elves, Har Ganeth Executioners, Black Guard of Naggarond and Sisters of Slaughter units", ps: "Lord's army" }] },
            { effects: [
                { icon: "melee", description: "Melee attack: +6 for Witch Elves, Har Ganeth Executioners, Black Guard of Naggarond and Sisters of Slaughter units", ps: "Lord's army" },
                { icon: "defense", description: "Melee defense: +6 for Witch Elves, Har Ganeth Executioners, Black Guard of Naggarond and Sisters of Slaughter units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "melee", description: "Melee attack: +8 for Witch Elves, Har Ganeth Executioners, Black Guard of Naggarond and Sisters of Slaughter units", ps: "Lord's army" },
                { icon: "defense", description: "Melee defense: +8 for Witch Elves, Har Ganeth Executioners, Black Guard of Naggarond and Sisters of Slaughter units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        name: "Strength Through Spite",
        description: "Hatred is an energy source just like any other, to be harnessed and directed at will.",
        icon: "strength-through-spite",
        ranks: [
            { effects: [
                { icon: "strength-through-spite", description: "Passive ability: \"Strength Through Spite\"" }
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
                effectRange: "30m",
                effects: [
                    { text: "+5", icon: "melee-character", postText: "Melee Attack", color: "green" }
                ]
            }
        }
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
        name: "Cull the Unworthy",
        description: "Those who fail to make the grade don't just die, they're tortured and used for target practice!",
        icon: "battle-armor",
        ranks: [
            { effects: [
                { icon: "weapon-damage", description: "Weapon strength: +12% for Bleakswords, Dreadspears, Darkshards and Reaper Bolt Thrower units", rank: 7, ps: "Lord's army" },
                { icon: "ranged-damage", description: "Missile damage: +12% for Bleakswords, Dreadspears, Darkshards and Reaper Bolt Thrower units", rank: 7, ps: "Lord's army" },
                { icon: "armor", description: "Armour: +10 for Bleakswords, Dreadspears, Darkshards and Reaper Bolt Thrower units", rank: 7, ps: "Lord's army" },
                { icon: "resistance-missile", description: "Missile resistance: 15% for Bleakswords, Dreadspears, Darkshards and Reaper Bolt Thrower units", psIcon: "goldChevron", rank: 7, ps: "Lord's army" }
            ] }
        ]
    },
    {
        name: "Ravager Rewards",
        description: "You'd think that pillaging the land would bring payment enough. You'd be wrong.",
        icon: "battle-speed",
        ranks: [
            { effects: [
                { icon: "movement", description: "Speed: +10% for Black Ark Corsairs, Shades, Dark Riders, Doomfire Warlocks and Scourgerunner Chariot units", rank: 7, ps: "Lord's army" },
                { icon: "accuracy", description: "Range: +15% for Black Ark Corsairs, Shades, Dark Riders, Doomfire Warlocks and Scourgerunner Chariot units", rank: 7, ps: "Lord's army" },
                { icon: "armor", description: "Armour: +10 for Black Ark Corsairs, Shades, Dark Riders, Doomfire Warlocks and Scourgerunner Chariot units", rank: 7, ps: "Lord's army" }
            ] }
        ]
    },
    {
        name: "Favour the Fortunate",
        description: "The gods help those who help themselves - raising them above the rank and file to elite status.",
        icon: "battle-attack",
        ranks: [
            { effects: [
                { icon: "charge", description: "Charge bonus: +12 for Black Guard of Naggarond, Har Ganeth Executioners, Cold One Knights, Cold One Dread Knights and Cold One Chariot units", rank: 7, ps: "Lord's army" },
                { icon: "weapon-damage", description: "Weapon strength: +12% for Black Guard of Naggarond, Har Ganeth Executioners, Cold One Knights, Cold One Dread Knights and Cold One Chariot units", rank: 7, ps: "Lord's army" },
                { icon: "armor", description: "Armour: +5 for Black Guard of Naggarond, Har Ganeth Executioners, Cold One Knights, Cold One Dread Knights and Cold One Chariot units", rank: 7, ps: "Lord's army" }
            ] }
        ]
    },
    {
        name: "Confer Bloodlust",
        description: "The murderous, unforgiving rage of Khaine can be transferred from a Lord to his legions.",
        icon: "battle-damage",
        ranks: [
            { effects: [
                { icon: "weapon-damage", description: "Weapon strength: +12% for Witch Elves, Harpies, War Hydra, Kharibdyss, Black Dragon, Feral Manticore, Sisters of Slaughter and bloodwrack Medusae units", rank: 7, ps: "Lord's army" },
                { icon: "movement", description: "Speed +10% for Witch Elves, Harpies, War Hydra, Kharibdyss, Black Dragon, Feral Manticore, Sisters of Slaughter and bloodwrack Medusae units", rank: 7, ps: "Lord's army" },
                { icon: "resistance-physical", description: "Physical resistance: +10% for Witch Elves, Harpies, War Hydra, Kharibdyss, Black Dragon, Feral Manticore, Sisters of Slaughter and bloodwrack Medusae units", rank: 7, ps: "Lord's army" }
            ] }
        ]
    },
    {
        name: "Kindle the Fury",
        description: "Hatred is an energy source just like any other, to be harnessed and directed at will.",
        icon: "kindle-the-fury",
        ranks: [
            { effects: [
                { icon: "strength-through-spite", description: "Replaces: \"Strength Through Spite\"" },
                { icon: "kindle-the-fury", description: "Passive ability: \"Kindle the Fury\"" }
            ] }
        ],
        spell: {
            description: "Lord ability",
            rarity: "rare",
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
                    { text: "+9", icon: "melee-character", postText: "Melee Attack", color: "green" },
                    { text: "+8%", icon: "icon-melee-base", postText: "Base Weapon Damage", color: "green" }
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
        name: "Whiplash!",
        description: "The startling crack of the Beastmaster's hefty and ever-so-slightly serrated whip of Dragon-sinew suitably infuriates the beasts for battle.",
        icon: "whiplash",
        ranks: [
            { effects: [
                { icon: "whiplash", description: "Passive ability: \"Whiplash\"" }
            ] }
        ],
        spell: {
            description: "Lord ability",
            rarity: "uncommon",
            cooldown: "90",
            attributes: {
                type: "Augment",
                duration: "21 seconds",
                target: [
                    { text: "Ally" },
                    { text: "100m", uptick: "range" }
                ],
                cannotTargetIf: "Unit is Lord or Hero",
                effects: [
                    { text: "+24%", icon: "movement-character", postText: "Charge Speed", color: "green" },
                    { text: "+50%", icon: "icon-damage-base", postText: "Base Weapon Damage", color: "green" },
                    { text: "+50%", icon: "icon-armor-piercing", postText: "Armor-Piercing Weapon Damage", color: "green" },
                    { text: "+18%", icon: "charge-character", postText: "Charge Bonus", color: "green" }
                ]
            }
        }
    },
    {
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
        name: "Dreaded Slaver",
        description: "This one ensures that those captured in battle wished they'd died on the field, so great is the cruelty that awaits them.",
        icon: "campaign-slaves",
        ranks: [
            { effects: [{ icon: "slaves", description: "Casualties captured post-battle: +5%" }] },
            { effects: [{ icon: "slaves", description: "Casualties captured post-battle: +12%" }] },
            { effects: [{ icon: "slaves", description: "Casualties captured post-battle: +25%" }] }            
        ]
    },
    {
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
        name: "Infamous Raider",
        description: "If there were annals detailing the dastardly deeds of the sackers and looters of the world, this inveterate brigand would feature heavily.",
        icon: "campaign-military-spending",
        ranks: [
            { effects: [
                { icon: "coin-plus", description: "Income from raiding: +5%", ps: "Lord's army" },
                { icon: "coin-plus", description: "Income from looting settlements: +4%" },
                { icon: "coin-plus", description: "Income from sacking settlements: +4%" }
            ] },
            { effects: [
                { icon: "coin-plus", description: "Income from raiding: +12%", ps: "Lord's army" },
                { icon: "coin-plus", description: "Income from looting settlements: +9%" },
                { icon: "coin-plus", description: "Income from sacking settlements: +9%" }
            ] },
            { effects: [
                { icon: "coin-plus", description: "Income from raiding: +20%", ps: "Lord's army" },
                { icon: "coin-plus", description: "Income from looting settlements: +15%" },
                { icon: "coin-plus", description: "Income from sacking settlements: +15%" }
            ] }            
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
        name: "Fleeting Shadow",
        description: "Knowing precisely where and when to launch an ambush, and against who, takes an unusual level of guile.",
        icon: "campaign-ambush",
        ranks: [
            { effects: [
                { icon: "ambush", description: "Ambush success chance: +6%", ps: "Lord's army" },
                { icon: "ambush", description: "Ambush defense chance: +5%", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "ambush", description: "Ambush success chance: +16%", ps: "Lord's army" },
                { icon: "ambush", description: "Ambush defense chance: +10%", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "ambush", description: "Ambush success chance: +30%", ps: "Lord's army" },
                { icon: "ambush", description: "Ambush defense chance: +20%", ps: "Lord's army" },
                { icon: "vanguard", description: "Attribute: Vanguard Deployment" }
            ] }            
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