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
                { icon: "spell-power-of-darkness", description: "Winds of Magic cost -2 for 'Power of Darkenss'" },
                { icon: "spell-power-of-darkness", description: "Spell number of uses: +2 for 'Power of Darkenss'" },
                { icon: "ability-circlet-of-iron", description: "Passive ability: 'Circlet of Iron'" } 
            ] }
        ],
        spell: {
            description: 'Item',
            rarity: 'legendary',
            attributes: {
                type: 'Hex (Area)',
                target: [
                    { text: 'Around self' },
                    { text: 'Affects enemies in range' }
                ],
                targetIf: 'Unit is a Lord or Hero',
                effectRange: 'Map-wide',
                effects: [
                    { text: '+50% Miscast Chance', color: 'red' }
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
                { icon: "weapon-damage-character", description: "Weapon strength: +12%" },
                { icon: "leadership-malus", description: "Attacks cause 'discouraged' effect, reducing leadership" },
                { icon: "ability-destroyer", description: "Passive ability: 'Destroyer'" }
            ] }
        ],
        spell: {
            description: 'Weapon',
            rarity: 'legendary',
            attributes: {
                type: [
                    { text: 'Hex (Area)' },
                    { text: 'Only acts on targets when in area' }
                ],
                duration: 'Constant',
                target: [
                    { text: 'Around self' },
                    { text: 'Affects enemies in range' }
                ],
                effectRange: '40m',
                effects: [
                    { text: 'Destroyer (15 seconds)', color: 'red' },
                    { text: '+15 Ability Recharge (seconds)', color: 'red' }
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
                { icon: "spell-doombolt", description: "Winds of Magic coast: -2 for 'Doombolt'" },
                { icon: "spell-doombolt", description: "Winds of Magic coast: -2 for 'Doombolt Upgraded'" },
                { icon: "ability-supreme-spellshield", description: "Passive ability: 'Supreme Spellshield'" }
            ] }
        ],
        spell: {
            description: 'Item',
            rarity: 'legendary',
            attributes: {
                type: [
                    { text: 'Hex of the Winds' },
                    { text: 'Only acts on targets when in area' }
                ],
                duration: 'Constant',
                target: [
                    { text: 'Around self' },
                    { text: 'Affects enemies in range' }
                ],
                effectRange: '40m',
                effects: [
                    { text: 'Effect increases proportional to the number of enemy units in range', uptick: 'down-red', color: 'red' },
                    { text: 'Decrease to power reserves', uptick: 'down-red', color: 'red' }
                ]
            }
        }
    },
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
        name: 'Cold One Chariot',
        description: "Magnificent chariots, gifted to those who have impressed with their devotion, bravery and prowess in battle.",
        icon: "cold-one-chariot",
        ranks: [
            { effects: [{ icon: 'mount', description: "Mount: Cold One Chariot" }] }
        ]
    },
    {
        name: 'Scourgerunner Chariot',
        description: "Dark Elf Beastmasters roam the wilds atop their dreaded chariots, armed with barbed nets and harpoons to slay the foe and ensnare their prey.",
        icon: "scourgerunner-chariot",
        ranks: [
            { effects: [{ icon: 'mount', description: "Mount: Scourgerunner Chariot" }] }
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
        name: 'Manticore',
        description: "The roar of a Manticore is guaranteed to send mortals fleeing, for they know a creature of terror is abroad.",
        icon: "manticore",
        ranks: [
            { effects: [{ icon: 'mount', description: "Mount: Manticore" }] }
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
        name: 'Seraphon',
        description: "This terrifying Black Dragon is the Witch King's favoured mount upon which to ride into battle.",
        icon: "black-dragon",
        ranks: [
            { effects: [
                { icon: 'mount', description: "Mount: Seraphon" }
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
        name: 'Absolute Power',
        description: "Those in command of the ranks will issue their orders with a ferocious bark, expecting instant obeisance.",
        icon: "ability-hold-the-line",
        ranks: [
            { effects: [
                { icon: 'character', description: "Leadership aura size: +100%" },
                { icon: 'morale-character', description: "Character's Aura leadership effect: +5" },
                { icon: 'ability-hold-the-line', description: "Passive ability: 'Hold the Line!'" }
            ] }
        ],
        spell: {
            description: 'Lord ability',
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
                    { text: '+4', icon: 'morale-character', postText: 'Leadership', color: 'green' },
                    { text: '+5', icon: 'defense-character', postText: 'Melee Defense', color: 'green' }
                ]
            }
         }
    },
    {
        name: 'Beast Tamer',
        description: "The honing of a Druchii's affinity with animals assures that the bestial ranks heed his imperious command with obedience.",
        icon: "beast-tamer",
        ranks: [
            { effects: [
                { icon: 'charge', description: "Charge bonus: +10 for Harpies, War Hydra, Kharibdyss, Black Dragon, Feral Manticore and Bloodwrack Medusae units" },
                { icon: 'charge', description: "Charge Bonus: +20 for Cold One Knights, Cold One Dread Knights and Cold One Chariot units" }
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
        name: 'Unassailable',
        description: "Each Black Ark is a fortress-city without peer. Throwing aoneself unto its Black-Stone defenses is folly without equal.",
        icon: "battle-defense",
        ranks: [
            { effects: [
                { icon: "armor-piercing", description: "Armor-piercing weapon damage: +5 for all units when defending", ps: "lords army" },
                { icon: "defense", description: "Armor: +15 for all units when defending", ps: "lords army" }
            ] }
        ]
    },
    {
        name: 'Unstoppable',
        description: "The Black Ark Provides near-limitless access to pristine arms and armor, each raiding party clad in the finest forgework.",
        icon: "battle-damage",
        ranks: [
            { effects: [
                { icon: "weapon-damage", description: "Weapon strength: +10%", ps: "lords army" },
                { icon: "melee", description: "Melee attack: +5 for all units", ps: "lords army" }
            ] }
        ]
    },
    {
        name: 'Unknowable',
        description: "The presence of a powerful Sorceress upon the Black Ark provides opportunities to weave the darkest magecraft.",
        icon: "character-magic",
        ranks: [
            { effects: [
                { icon: "resistance-magic", description: "Magic resistance: +15% for all units", ps: "lords army" },
                { icon: "magical-attacks", description: "Enables magical attacks", ps: "lords army" },
                { icon: "technology", description: "Research rate: +10%", ps: "lords army" }
            ] }
        ]
    },
    {
        name: 'Tyrant',
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
        name: 'Motivation Through Fear',
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
        name: 'Seditious or Sanguine',
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
        name: 'Efforts Redoubled',
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
        name: 'Warleader',
        description: "The war is endless, it will never cease. Stay ready.",
        icon: "warleader",
        ranks: [
            { effects: [
                { icon: "coin", description: "Upkeep: -10% for all units", ps: "all armies"},
                { icon: "morale", description: "Leadership: +5", ps: "lords army"},
                { icon: "income", description: "Income from post-battle loot: +5%", ps: "all characters" }
            ] }
        ]
    },
    {
        name: 'Scoured & Stripped',
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
        name: 'Triumph of Evil',
        description: "They say for evil to triumph, all that's required is that the good do nothing... or, preferably, are stone dead from the outset.",
        icon: "triumph-of-evil",
        ranks: [
            { effects: [
                { icon: "army", description: "Lord recruit rank: +2", ps: "factionwide"},
                { icon: "disaster", description: "Attrition: -50% casualties suffered from all attrition", ps: "lords army"},
                { icon: "replenishment", description: "Casualty replenishment rate: +15%", ps: "lords army" }
            ] }
        ]
    },
    {
        name: 'Reach Equal Grasp',
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
        name: 'Rapacious Predators',
        description: "The strength and willpower required to break in the extremely stubborn Cold One reptiles as war steeds is innately abundant in most High Beastmasters.",
        icon: "rapacious-predators",
        ranks: [
            { effects: [
                { icon: 'melee', description: "Melee attack: +8 for Cold One Knights, Cold One Dread Knights and Cold One Chariot units", ps: "lords army"},
                { icon: 'turns', description: "Recruitment duration: -1 turn for Cold One Knights, Cold One Dread Knights and Cold One Chariot units", ps: "lords army" }
            ] }
        ]
    },
    {
        name: 'Sorceresses of Ghrond',
        description: "The wrangling of the wrathful Bloodwrack Medusae directly from their squalid subterranean lairs is not a job for the faint-hearted.",
        icon: "sorceresses-of-ghrond",
        ranks: [
            { effects: [
                { icon: 'turns', description: "Recruitment duration: -1 turn for Bloodwrack Medusae units" },
                { icon: 'reload-time', description: "Reload time reduction: +12% for Bloodwrack Medusae units" }
            ] }
        ]
    },
    {
        name: 'Titanic Beasts',
        description: "The most colossal monsters of land and sea are prizes beyond treasures to the Beastmaster, requiring colossal empathy to control.",
        icon: "titanic-beasts",
        ranks: [
            { effects: [
                { icon: 'melee', description: "Melee attack: +8 for War Hydra and Kharibdyss units" },
                { icon: 'turns', description: "Recruitment duration: -1 turn for for War Hydra and Kharibdyss units" }
            ] }
        ]
    },
    {
        name: 'Children of Sulekh',
        description: "Since Sulekh's death, her children continue to fight in the Beastmasters' ranks in the name of vengeance for their fallen ancestor.",
        icon: "children-of-sulekh",
        ranks: [
            { effects: [
                { icon: 'melee', description: "Melee attack: +8 for Black Dragon units" },
                { icon: 'turns', description: "Recruitment duration: -1 turn for Black Dragon units" }
            ] }
        ]
    },
    {
        name: 'Master Tormentor',
        description: "It matters not the nature of the beast; eventually, all submit to the Beastmaster's will or perish under his lash.",
        icon: "campaign-experience",
        ranks: [
            { effects: [
                { icon: 'defense', description: "Melee defense: +8 for Monster units" },
                { icon: 'experience', description: "Recruit Rank: +2 for Monster units" }
            ] }
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
        icon: "ability-foe-seeker",
        ranks: [
            { effects: [{ icon: 'ability-foe-seeker', description: "Ability: 'Foe-Seeker'" }] }
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
                    { text: '+24%', icon: 'movement-character', postText: 'Speed', color: 'green' },
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
        description: "Full-Plate armour protects the wearer from head-to-foot. Many shuch suits are blessed or imbued with arcane ability.",
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
            { effects: [{ icon: 'movement-character', description: "Speed: +7%" }] },
            { effects: [{ icon: 'movement-character', description: "Speed: +15%" }] }
        ]
    },
    {
        name: 'Deadly Onslaught',
        description: "The war is endless. The cycle of charging, clashing, and bloody hand-to-hand fighting is without end. It will never stop.",
        icon: "ability-deadly-onslaught",
        ranks: [
            { effects: [{ icon: 'ability-deadly-onslaught', description: "Ability: 'Deadly Onslaught'" }] }
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
        name: 'Beastslaver',
        description: "Beastmasters share their minions' belligerence, cutting down foemen with lash, spear, and harpoon before claiming their twitching bodies as fodder.",
        icon: "beastslaver",
        ranks: [
            { effects: [{ icon: 'deadly-onslaught', description: "Ability: 'Beastslaver'" }] }
        ],
        spell: {
            description: 'Lord ability',
            cooldown: '60',
            rarity: 'common',
            attributes: {
                type: 'Augment',
                duration: "17 seconds",
                target: "Self",
                effects: [
                    { text: '+25%', icon: 'icon-damage-base', postText: 'Base Weapon Damage', color: 'green' },
                    { text: '+16', icon: 'icon-bonus-vs-large', postText: 'Bonus vs. Large', color: 'green' },
                    { text: '+25%', icon: 'icon-armor-piercing', postText: 'Armor-Piercing Weapon Damage', color: 'green' }
                ]
            }
        }
    },
    {
        name: 'Gaze of Malice',
        description: "If looks could kill... Oh wait, it turns out that they can...",
        icon: "ability-gaze-of-malice",
        ranks: [
            { effects: [{ icon: 'ability-gaze-of-malice', description: "Ability: 'Gaze of Malice'" }] }
        ],
        spell: {
            description: 'Character ability',
            cooldown: '90',
            uses: '3',
            rarity: 'uncommon',
            attributes: {
                type: 'Breath',
                duration: "8 seconds",
                target: [
                    { text: 'Ground' },
                    { text: '100m', uptick: 'range' }
                ],
                cannotUseIf: 'Climbing',
                cannotTargetIf: 'On a wall',
                effects: [
                    { text: 'Causes moderate magical damage', uptick: 'up-green', color: 'green' },
                    { text: 'Short, wide, expanding, tear-shaped attack', uptick: 'up-green', color: 'green' },
                    { text: 'Can disrupt unit formation', uptick: 'up-green', color: 'green' },
                    { text: 'Strong vs. multiple units', uptick: 'up-green', color: 'green' },
                    { text: 'Weak against armor', uptick: 'down-red', color: 'red' }
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
                { icon: 'spell-chillwind', description: "Overcast spell: 'Chillwind Upgraded'" },
                { icon: 'spell-chillwind', description: "Cooldown: -30% to 'Chillwind'" }
            ] },
            { effects: [
                { icon: 'spell-chillwind', description: "Overcast spell: 'Chillwind Upgraded'" },
                { icon: 'spell-chillwind', description: "Cooldown: -50% to 'Chillwind'" },
                { icon: 'spell-chillwind', description: "Winds of Magic cost: -1 for 'Chillwind'" },
                { icon: 'spell-chillwind', description: "Winds of Magic cost: -2 for 'Chillwind Upgraded'" },
                { icon: 'spell-chillwind', description: "Miscast base chance: -15% for 'Chillwind Upgraded'" }
            ] }
        ],
        spell: {
            description: 'Spell',
            rarity: 'common',
            cost: [8, 6],
            cooldown: '29',
            attributes: {
                type: 'Wind',
                duration: '3 seconds',
                target: [
                    { text: 'Ground' },
                    { text: '150m', uptick: 'range' }
                ],
                cannotUseIf: 'Climbing',
                cannotTargetIf: 'On a wall, Climbing',
                miscastChance:  {0: '50', 1: '35'},
                effects: [
                    { text: 'Additional effect of Frostbite', uptick: 'up-blue', color: 'blue' },
                    { text: 'Causes minor', icon: 'icon-magic', postText: 'magical damage', uptick: 'up-green', color: 'green' },
                    { text: 'Small, forward-moving area of effect', uptick: 'up-green', color: 'green' },
                    { text: 'Strong vs. multiple units', uptick: 'up-green', color: 'green' },
                    { text: 'Good against armor', uptick: 'up-green', color: 'green' }
                ],
                contact: [
                    { text: 'Frostbite (20 seconds)', color: 'red' },
                    { text: '-20', icon: 'reload-time-stat', postText: 'Reload Skill', color: 'red' },
                    { text: '-48%', icon: 'movement-character', postText: 'Speed', color: 'red' }
                ]
            }
        }
    },
    {
        name: "Spiteful Conjuration",
        description: "As the spellcaster summons Dark Magic, black darts of malice will flit through the air to pierce the victims of the Dark Elf's spite.",
        icon: "spell-spiteful-conjuration",
        ranks: [
            { effects: [{ icon: 'spell-spiteful-conjuration', description: "Passive ability: 'Spiteful Conjuration'" }] }
        ],
        spell: {
            description: 'Lore attribute',
            rarity: 'common',
            attributes: {
                type: 'Hex (Area)',
                duration: 'Constant',
                target: [
                    { text: 'Around self' },
                    { text: 'Affects enemies in range' }
                ],
                activeIf: 'Casting',
                effectRange: 'Map-wide',
                effects: [
                    { text: 'Spiteful Conjuration (18 seconds)', color: 'red' },
                    { text: '-15', icon: 'armor-character', postText: 'Armor', color: 'red' }
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
                { icon: 'spell-power-of-darkness', description: "Cooldown: -50% to 'Power of Darkness'" },
                { icon: 'spell-power-of-darkness', description: "Winds of Magic cost: -1 for 'Power of Darkness'" }
            ] }
        ]
    },
    {
        name: "Word of Pain",
        description: "As the caster utters a forbidden name, their enemies are wracked with waves of agnoy.",
        icon: "spell-word-of-pain",
        ranks: [
            { effects: [
                { icon: 'spell-word-of-pain', description: "Spell: 'Word of Pain'" },
                { icon: 'spell-word-of-pain', description: "Overcast spell: 'Word of Pain''" },
                { icon: 'spell-word-of-pain', description: "Cooldown: -30% to 'Word of Pain''" }
            ] },
            { effects: [
                { icon: 'spell-word-of-pain', description: "Overcast spell: 'Word of Pain Upgraded'" },
                { icon: 'spell-word-of-pain', description: "Cooldown: -30% to 'Word of Pain'" },
                { icon: 'spell-word-of-pain', description: "Winds of Magic cost: -2 for 'Word of Pain'" },
                { icon: 'spell-word-of-pain', description: "Winds of Magic cost: -3 for 'Word of Pain Upgraded'" },
                { icon: 'spell-word-of-pain', description: "Miscast base chance: -15% for 'Word of Pain Upgraded'" }
            ] }
        ],
        spell: {
            description: 'Spell',
            rarity: 'uncommon',
            cost: [12, 9],
            cooldown: '44',
            attributes: {
                type: 'Hex',
                duration: '40 seconds',
                target: [
                    { text: 'Enemy' },
                    { text: '200m', uptick: 'range' }
                ],
                cannotUseIf: 'Climbing',
                miscastChance:  {0: '50', 1: '35'},
                effects: [
                    { text: 'Additional effect on', icon: 'defense-character', postText: 'melee defense', uptick: 'up-blue', color: 'blue' },
                    { text: '-24', icon: 'defense-character', postText: 'Melee Defense', color: 'red' },
                    { text: '-40', icon: 'melee-character', postText: 'Melee Attack', color: 'red' },
                    { text: '-30', icon: 'accuracy-character', postText: 'Accuracy', color: 'red' }
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
                { icon: 'spell-bladewind', description: "Spell: 'Bladewind'" },
                { icon: 'spell-bladewind', description: "Overcast spell: 'Bladewind''" },
                { icon: 'spell-bladewind', description: "Cooldown: -30% to 'Bladewind''" }
            ] },
            { effects: [
                { icon: 'spell-bladewind', description: "Overcast spell: 'Bladewind Upgraded'" },
                { icon: 'spell-bladewind', description: "Cooldown: -50% to 'Bladewind'" },
                { icon: 'spell-bladewind', description: "Winds of Magic cost: -2 for 'Bladewind'" },
                { icon: 'spell-bladewind', description: "Winds of Magic cost: -2 for 'Bladewind Upgraded'" },
                { icon: 'spell-bladewind', description: "Miscast base chance: -15% for 'Bladewind Upgraded'" }
            ] }
        ],
        spell: {
            description: 'Spell',
            rarity: 'uncommon',
            cost: [15, 13],
            cooldown: '38',
            attributes: {
                type: 'Vortex',
                duration: '14 seconds',
                target: [
                    { text: 'Ground' },
                    { text: '150m', uptick: 'range' }
                ],
                cannotUseIf: 'Climbing',
                cannotTargetIf: 'On a wall, Climbing',
                miscastChance:  {0: '50', 1: '35'},
                effects: [
                    { text: 'Extended effect duration', uptick: 'up-blue', color: 'blue' },
                    { text: 'Causes major', icon: 'icon-magic', postText: 'magical damage', uptick: 'up-green', color: 'green' },
                    { text: 'Large, randomly-moving area of effect', uptick: 'up-green', color: 'green' },
                    { text: 'Strong vs. multiple units', uptick: 'up-green', color: 'green' },
                    { text: 'Weak against armor', uptick: 'down-red', color: 'red' }
                ]
            }
        }
    },
    {
        name: "Evasion",
        description: "Those with such skills can evade enemy attacks with ease and break from combat, should they feel that it is tactically important to do so.",
        icon: "spell-evasion",
        ranks: [
            { effects: [{ icon: 'spell-evasion', description: "Passive ability: 'Evasion'" }] }
        ],
        spell: {
            description: 'Character ability',
            rarity: 'common',
            attributes: {
                type: 'Augment',
                duration: 'Constant',
                target: 'Self',
                effects: [
                    { text: '+5', icon: 'defense-character', postText: 'Melee Defense', color: 'green' },
                    { text: '+6%', icon: 'movement-character', postText: 'Speed', color: 'green' }
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
                { icon: 'spell-doombolt', description: "Spell: 'Doombolt'" },
                { icon: 'spell-doombolt', description: "Overcast spell: 'Doombolt''" },
                { icon: 'spell-doombolt', description: "Cooldown: -30% to 'Doombolt''" }
            ] },
            { effects: [
                { icon: 'spell-doombolt', description: "Overcast spell: 'Doombolt Upgraded'" },
                { icon: 'spell-doombolt', description: "Cooldown: -50% to 'Doombolt'" },
                { icon: 'spell-doombolt', description: "Winds of Magic cost: -2 for 'Doombolt'" },
                { icon: 'spell-doombolt', description: "Winds of Magic cost: -3 for 'Doombolt Upgraded'" },
                { icon: 'spell-doombolt', description: "Miscast base chance: -15% for 'Doombolt Upgraded'" }
            ] }
        ],
        spell: {
            description: 'Spell',
            rarity: 'rare',
            cost: [16, 13],
            cooldown: '38',
            attributes: {
                type: 'Vortex',
                duration: '14 seconds',
                target: [
                    { text: 'Ground' },
                    { text: '150m', uptick: 'range' }
                ],
                cannotUseIf: 'Climbing',
                cannotTargetIf: 'On a wall, Climbing',
                miscastChance:  {0: '50', 1: '35'},
                effects: [
                    { text: 'Increased', icon: 'icon-armor-piercing-ranged', postText: 'armor-piercing damage', uptick: 'up-blue', color: 'blue' },
                    { text: 'Causes major', icon: 'icon-magic', postText: 'magical damage', uptick: 'up-green', color: 'green' },
                    { text: 'Medium strike area', uptick: 'up-green', color: 'green' },
                    { text: 'Strong vs. a single combatant', uptick: 'up-green', color: 'green' },
                    { text: 'Good against armor', uptick: 'up-green', color: 'green' },
                    { text: 'Strong vs. a single unit', uptick: 'up-green', color: 'green' }
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
                { icon: 'spell-soul-stealer', description: "Spell: 'Soul Stealer'" },
                { icon: 'spell-soul-stealer', description: "Cooldown: -50% to 'Soul Stealer'" },
                { icon: 'spell-soul-stealer', description: "Winds of Magic cost: -4 for 'Soul Stealer'" }
            ] }
        ],
        spell: {
            description: 'Spell',
            rarity: 'rare',
            cost: ['14'],
            cooldown: '27',
            attributes: {
                type: [
                    { text: 'Direct Damage (Area)'},
                    { text: 'Instantly affects targets in area'}
                ],
                duration: '12 seconds',
                target: [
                    { text: 'Ground, Enemy' },
                    { text: 'Affects enemies in range' },
                    { text: '100m', uptick: 'range' }
                ],
                cannotUseIf: 'Climbing',
                effectRange: '30m',
                miscastChance: [{text: '100%', color: 'blue'}],
                effects: [
                    { text: 'Causes damage to combatants', uptick: 'up-green', color: 'green' },
                    { text: 'Absorbs hitpoints from enemies', uptick: 'up-green', color: 'green' },
                    { text: 'Strong vs. a single combatant', uptick: 'up-green', color: 'green' },
                    { text: 'Weak vs. multiple combatants', uptick: 'down-red', color: 'red' }
                ]
            }
        }
    },
    {
        name: 'Earthing',
        description: "By stabbing a staff or some arcane conduit into the ground, an accomplished magic-user can earth or tether the Winds and hopefully reduce a chance of miscasting.",
        icon: "character-magic",
        ranks: [
            { effects: [
                { icon: 'magic-character', description: "Miscast base chance: -15%" }
            ] }
        ]
    },
    {
        name: 'Magical Reserves',
        description: "A few magic-users have the ability to store the Winds of Magic for later use, increasing their spellcasting power when it really counts.",
        icon: "character-magic",
        ranks: [
            { effects: [
                { icon: 'magic', description: "Winds of Magic power reserve: +15" }
            ] }
        ]
    },
    {
        name: "Arcane Conduit",
        description: "A strong mind is needed to channel the Winds of Magic. Those that have such a gift become arcane conduits - funnelling the magical tempest to their cause.",
        icon: "spell-arcane-conduit",
        ranks: [
            { effects: [{ icon: 'spell-arcane-conduit', description: "Ability: 'Arcane Conduit'" }] }
        ],
        spell: {
            description: 'Character ability',
            rarity: 'uncommon',
            cooldown: '90',
            attributes: {
                type: 'Augment of the Winds',
                duration: '40 seconds',
                target: 'Self',
                effects: [
                    { text: 'Improved', icon: 'magic-pool', postText: 'power recharge rate', uptick: 'up-green', color: 'green' },
                    { text: 'Increase to', icon: 'magic-replenish', postText: 'power reserves', uptick: 'up-green', color: 'green' }
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
                { icon: 'defense', description: "Melee defense: +4 for Dreadspears, Bleakswords and Black Ark Corsairs units", ps: "lords army" }
            ] },
            { effects: [
                { icon: 'melee', description: "Melee attack: +6 for Dreadspears, Bleakswords and Black Ark Corsairs units", ps: "lords army" },
                { icon: 'defense', description: "Melee defense: +6 for Dreadspears, Bleakswords and Black Ark Corsairs units", ps: "lords army" }
            ] },
            { effects: [
                { icon: 'melee', description: "Melee attack: +8 for Dreadspears, Bleakswords and Black Ark Corsairs units", ps: "lords army" },
                { icon: 'defense', description: "Melee defense: +8 for Dreadspears, Bleakswords and Black Ark Corsairs units", ps: "lords army" }
            ] }
        ]
    },
    {
        name: 'Sheafmaster',
        description: "Marshalling missile troops effectively - even elites - is all about timing.",
        icon: "battle-ammo",
        ranks: [
            { effects: [
                { icon: 'ammo', description: "Ammunition: +8% for Darkshards, Black Ark Corsairs and Reaper Bolt Thrower units", ps: "lords army" }
            ] },
            { effects: [
                { icon: 'ammo', description: "Ammunition: +12% for Darkshards, Black Ark Corsairs and Reaper Bolt Thrower units", ps: "lords army" },
                { icon: 'reload-time', description: "Reload time reduction: +7% for Darkshards, Black Ark Corsairs and Reaper Bolt Thrower units", ps: "lords army" }
            ] },
            { effects: [
                { icon: 'ammo', description: "Ammunition: +20% for Darkshards, Black Ark Corsairs and Reaper Bolt Thrower units", ps: "lords army" },
                { icon: 'reload-time', description: "Reload time reduction: +10% for Darkshards, Black Ark Corsairs and Reaper Bolt Thrower units", ps: "lords army" }
            ] }
        ]
    },
    {
        name: 'Raid Leader',
        description: "The most effective raiders have a plan that is certain to succeed and stick to it; this one ensures that they do.",
        icon: "battle-charge",
        ranks: [
            { effects: [
                { icon: 'charge', description: "Charge bonus: +6 for Shades, Dark Riders, Doomfire Warlocks and Scourgerunner Chariot units", ps: "lords army" }
            ] },
            { effects: [
                { icon: 'ranged-damage', description: "Missile damage: +9% for Shades, Dark Riders, Doomfire Warlocks and Scourgerunner Chariot units", ps: "lords army" },
                { icon: 'defense', description: "Melee defense: +6 for Shades, Dark Riders, Doomfire Warlocks and Scourgerunner Chariot units", ps: "lords army" },
                { icon: 'charge', description: "Charge bonus: +9 for Shades, Dark Riders, Doomfire Warlocks and Scourgerunner Chariot units", ps: "lords army" }
            ] },
            { effects: [
                { icon: 'ranged-damage', description: "Missile damage: +12% for Shades, Dark Riders, Doomfire Warlocks and Scourgerunner Chariot units", ps: "lords army" },
                { icon: 'defense', description: "Melee defense: +8 for Shades, Dark Riders, Doomfire Warlocks and Scourgerunner Chariot units", ps: "lords army" },
                { icon: 'charge', description: "Charge bonus: +12 for Shades, Dark Riders, Doomfire Warlocks and Scourgerunner Chariot units", ps: "lords army" }
            ] }
        ]
    },
    {
        name: 'Lash Master',
        description: "Judicious, or even not-so-judicious, use of the lash tends to get the desired results, so why hold back?",
        icon: "battle-damage",
        ranks: [
            { effects: [
                { icon: 'weapon-damage', description: "Weapon strength: +6% for Harpies, War Hydra, Kharibdyss, Black Dragon, Feral Manticore and Bloodwrack Madusae units", ps: "lords army" }
            ] },
            { effects: [
                { icon: 'weapon-damage', description: "Weapon strength: +9% for Harpies, War Hydra, Kharibdyss, Black Dragon, Feral Manticore and Bloodwrack Madusae units", ps: "lords army" },
                { icon: 'charge', description: "Charge bonus: +9 for Harpies, War Hydra, Kharibdyss, Black Dragon, Feral Manticore and Bloodwrack Madusae units", ps: "lords army" },
                { icon: 'reload-time', description: "Reload time reduction: +9% for Harpies, War Hydra, Kharibdyss, Black Dragon, Feral Manticore and Bloodwrack Madusae units", ps: "lords army" }
            ] },
            { effects: [
                { icon: 'weapon-damage', description: "Weapon strength: +12% for Harpies, War Hydra, Kharibdyss, Black Dragon, Feral Manticore and Bloodwrack Madusae units", ps: "lords army" },
                { icon: 'charge', description: "Charge bonus: +12 for Harpies, War Hydra, Kharibdyss, Black Dragon, Feral Manticore and Bloodwrack Madusae units", ps: "lords army" },
                { icon: 'reload-time', description: "Reload time reduction: +12% for Harpies, War Hydra, Kharibdyss, Black Dragon, Feral Manticore and Bloodwrack Madusae units", ps: "lords army" }
            ] }
        ]
    },
    {
        name: 'Knight Lord',
        description: "The ability to command the savage, untamed Cold Ones should not be underestimated - not everyone has the knack!",
        icon: "battle-attack",
        ranks: [
            { effects: [
                { icon: 'melee', description: "Melee attack: +4 for Cold One Knights, Cold One Dread Knights and Cold One Chariot units", ps: "lords army" }
            ] },
            { effects: [
                { icon: 'melee', description: "Melee attack: +6 for Cold One Knights, Cold One Dread Knights and Cold One Chariot units", ps: "lords army" },
                { icon: 'defense', description: "Melee defense: +6 for Cold One Knights, Cold One Dread Knights and Cold One Chariot units", ps: "lords army" }
            ] },
            { effects: [
                { icon: 'melee', description: "Melee attack: +8 for Cold One Knights, Cold One Dread Knights and Cold One Chariot units", ps: "lords army" },
                { icon: 'defense', description: "Melee defense: +8 for Cold One Knights, Cold One Dread Knights and Cold One Chariot units", ps: "lords army" }
            ] }
        ]
    },
    {
        name: 'Slaughterlord',
        description: "An elite even amongst elites, this accomplished warrior directs the cut-and-thrust of melee - a choreographer of death, you might say.",
        icon: "battle-attack",
        ranks: [
            { effects: [{ icon: 'melee', description: "Melee attack: +4 for Witch Elves, Har Ganeth Executioners, Black Guard of Naggarond and Sisters of Slaughter units", ps: "lords army" }] },
            { effects: [
                { icon: 'melee', description: "Melee attack: +6 for Witch Elves, Har Ganeth Executioners, Black Guard of Naggarond and Sisters of Slaughter units", ps: "lords army" },
                { icon: 'defense', description: "Melee defense: +6 for Witch Elves, Har Ganeth Executioners, Black Guard of Naggarond and Sisters of Slaughter units", ps: "lords army" }
            ] },
            { effects: [
                { icon: 'melee', description: "Melee attack: +8 for Witch Elves, Har Ganeth Executioners, Black Guard of Naggarond and Sisters of Slaughter units", ps: "lords army" },
                { icon: 'defense', description: "Melee defense: +8 for Witch Elves, Har Ganeth Executioners, Black Guard of Naggarond and Sisters of Slaughter units", ps: "lords army" }
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
        name: 'Rally!',
        description: "To rally the troops and bring them back to the fore takes strong leadership skills and an iron will.",
        icon: 'ability-rally',
        ranks: [
            { effects: [
                { icon: 'ability-rally', description: "Passive ability: 'Rally!'" }
            ] }
        ],
        spell: {
            description: 'Character ability',
            rarity: 'common',
            cooldown: '60',
            attributes: {
                type: [
                    { text: 'Augment (Area)' },
                    { text: 'Only acts on targets when in area' }
                ],
                duration: '14 seconds',
                target: [
                    { text: 'Self' },
                    { text: 'Affects allies in range' }
                ],
                effectRange: '40m',
                effects: [
                    { text: '+16', icon: 'morale-character', postText: 'Leadership', color: 'green' }
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
                { icon: 'weapon-damage', description: "Weapon strength: +12% for Bleakswords, Dreadspears, Darkshards and Reaper Bolt Thrower units", psIcon: 'goldChevron', postScript: "Rank 7 and above", ppostPostScript: "Lord's army" },
                { icon: 'ranged-damage', description: "Missile damage: +12% for Bleakswords, Dreadspears, Darkshards and Reaper Bolt Thrower units", psIcon: 'goldChevron', postScript: "Rank 7 and above", ppostPostScript: "Lord's army" },
                { icon: 'armor', description: "Armour: +10 for Bleakswords, Dreadspears, Darkshards and Reaper Bolt Thrower units", psIcon: 'goldChevron', postScript: "Rank 7 and above", ppostPostScript: "Lord's army" },
                { icon: 'resistance-missile', description: "Missile resistance: 15% for Bleakswords, Dreadspears, Darkshards and Reaper Bolt Thrower units", psIcon: 'goldChevron', postScript: "Rank 7 and above", ppostPostScript: "Lord's army" }
            ] }
        ]
    },
    {
        name: 'Ravager Rewards',
        description: "You'd think that pillaging the land would bring payment enough. You'd be wrong.",
        icon: "battle-speed",
        ranks: [
            { effects: [
                { icon: 'movement', description: "Speed: +10% for Black Ark Corsairs, Shades, Dark Riders, Doomfire Warlocks and Scourgerunner Chariot units", psIcon: 'goldChevron', postScript: "Rank 7 and above", ppostPostScript: "Lord's army" },
                { icon: 'accuracy', description: "Range: +15% for Black Ark Corsairs, Shades, Dark Riders, Doomfire Warlocks and Scourgerunner Chariot units", psIcon: 'goldChevron', postScript: "Rank 7 and above", ppostPostScript: "Lord's army" },
                { icon: 'armor', description: "Armour: +10  for Black Ark Corsairs, Shades, Dark Riders, Doomfire Warlocks and Scourgerunner Chariot units", psIcon: 'goldChevron', postScript: "Rank 7 and above", ppostPostScript: "Lord's army" }
            ] }
        ]
    },
    {
        name: 'Favour the Fortunate',
        description: "The gods help those who help themselves - raising them above the rank and file to elite status.",
        icon: "battle-attack",
        ranks: [
            { effects: [
                { icon: 'charge', description: "Charge bonus: +12 for Black Guard of Naggarond, Har Ganeth Executioners, Cold One Knights, Cold One Dread Knights and Cold One Chariot units", psIcon: 'goldChevron', postScript: "Rank 7 and above", ppostPostScript: "Lord's army" },
                { icon: 'weapon-damage', description: "Weapon strength: +12% for Black Guard of Naggarond, Har Ganeth Executioners, Cold One Knights, Cold One Dread Knights and Cold One Chariot units", psIcon: 'goldChevron', postScript: "Rank 7 and above", ppostPostScript: "Lord's army" },
                { icon: 'armor', description: "Armour: +5 for Black Guard of Naggarond, Har Ganeth Executioners, Cold One Knights, Cold One Dread Knights and Cold One Chariot units", psIcon: 'goldChevron', postScript: "Rank 7 and above", ppostPostScript: "Lord's army" }
            ] }
        ]
    },
    {
        name: 'Confer Bloodlust',
        description: "The murderous, unforgiving rage of Khaine can be transferred from a Lord to his legions.",
        icon: "battle-damage",
        ranks: [
            { effects: [
                { icon: 'weapon-damage', description: "Weapon strength: +12% for Witch Elves, Harpies, War Hydra, Kharibdyss, Black Dragon, Feral Manticore, Sisters of Slaughter and bloodwrack Medusae units", psIcon: 'goldChevron', postScript: "Rank 7 and above", ppostPostScript: "Lord's army" },
                { icon: 'movement', description: "Speed +10% for Witch Elves, Harpies, War Hydra, Kharibdyss, Black Dragon, Feral Manticore, Sisters of Slaughter and bloodwrack Medusae units", psIcon: 'goldChevron', postScript: "Rank 7 and above", ppostPostScript: "Lord's army" },
                { icon: 'resistance-physical', description: "Physical resistance: +10% for Witch Elves, Harpies, War Hydra, Kharibdyss, Black Dragon, Feral Manticore, Sisters of Slaughter and bloodwrack Medusae units", psIcon: 'goldChevron', postScript: "Rank 7 and above", ppostPostScript: "Lord's army" }
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
        name: 'Whiplash!',
        description: "The startling crack of the Beastmaster's hefty and ever-so-slightly serrated whip of Dragon-sinew suitably infuriates the beasts for battle.",
        icon: 'whiplash',
        ranks: [
            { effects: [
                { icon: 'whiplash', description: "Passive ability: 'Whiplash'" }
            ] }
        ],
        spell: {
            description: 'Lord ability',
            rarity: 'uncommon',
            attributes: {
                type: 'Augment',
                duration: '21 seconds',
                target: [
                    { text: 'Ally' },
                    { text: '100m', uptick: 'range' }
                ],
                cannotTargetIf: 'Unit is Lord or Hero',
                effects: [
                    { text: '+24%', icon: 'movement-character', postText: 'Charge Speed', color: 'green' },
                    { text: '+50%', icon: 'icon-damage-base', postText: 'Base Weapon Damage', color: 'green' },
                    { text: '+50%', icon: 'icon-armor-piercing', postText: 'Armor-Piercing Weapon Damage', color: 'green' },
                    { text: '+18%', icon: 'charge-character', postText: 'Charge Bonus', color: 'green' }
                ]
            }
        }
    },
    {
        name: 'Stand or Die!',
        description: "Hatred is an energy source just like any other, to be harnessed and directed at will.",
        icon: 'ability-stand-or-die',
        ranks: [
            { effects: [
                { icon: 'ability-rally', description: "Replaces: 'Rally!'" },
                { icon: 'ability-stand-or-die', description: "Ability: 'Stand or Die!'" }
            ] }
        ],
        spell: {
            description: 'Character ability',
            rarity: 'uncommon',
            attributes: {
                type: [
                    { text: 'Augment (Area)' },
                    { text: 'Instantly affects targets in area' }
                ],
                duration: '18 seconds',
                target: [
                    { text: 'Self' },
                    { text: 'Affects allies in range' }
                ],
                effectRange: '40m',
                effects: [
                    { text: '+24', icon: 'defense-character', postText: 'Melee Defense', color: 'green' },
                    { text: '+16', icon: 'morale-character', postText: 'Leadership', color: 'green' }
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
            { effects: [{ icon: "treasury", description: "Recruitment cost: -3%", ps: "lords army" }] },
            { effects: [{ icon: "treasury", description: "Recruitment cost: -8%", ps: "lords army" }] },
            { effects: [{ icon: "treasury", description: "Recruitment cost: -15%", ps: "lords army" }] }            
        ]
    },
    {
        name: 'Infamous Raider',
        description: "If there were annals detailing the dastardly deeds of the sackers and looters of the world, this inveterate brigand would feature heavily.",
        icon: "campaign-military-spending",
        ranks: [
            { effects: [
                { icon: "coin-plus", description: "Income from raiding: +5%", ps: "lords army" },
                { icon: "coin-plus", description: "Income from looting settlements: +4%" },
                { icon: "coin-plus", description: "Income from sacking settlements: +4%" }
            ] },
            { effects: [
                { icon: "coin-plus", description: "Income from raiding: +12%", ps: "lords army" },
                { icon: "coin-plus", description: "Income from looting settlements: +9%" },
                { icon: "coin-plus", description: "Income from sacking settlements: +9%" }
            ] },
            { effects: [
                { icon: "coin-plus", description: "Income from raiding: +20%", ps: "lords army" },
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
            { effects: [{ icon: "coin", description: "Upkeep: -3% for all units", ps: "lords army" }] },
            { effects: [{ icon: "coin", description: "Upkeep: -8% for all units", ps: "lords army" }] },
            { effects: [{ icon: "coin", description: "Upkeep: -15% for all units", ps: "lords army" }] }
        ]
    },
    {
        name: 'Fleeting Shadow',
        description: "Knowing precisely where and when to launch an ambush, and against who, takes an unusual level of guile.",
        icon: 'campaign-ambush',
        ranks: [
            { effects: [
                { icon: 'ambush', description: "Ambush success chance: +6%", ps: "lords army" },
                { icon: 'ambush', description: "Ambush defense chance: +5%" }
            ] },
            { effects: [
                { icon: 'ambush', description: "Ambush success chance: +16%", ps: "lords army" },
                { icon: 'ambush', description: "Ambush defense chance: +10%" }
            ] },
            { effects: [
                { icon: 'ambush', description: "Ambush success chance: +30%", ps: "lords army" },
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
                { icon: 'disaster', description: "Attrition: -3% casualties suffered from all attrition", ps: "lords army" },
                { icon: 'replenishment', description: "Casualty replenishment rate: +3%", ps: "lords army" }
            ] },
            { effects: [
                { icon: 'disaster', description: "Attrition: -8% casualties suffered from all attrition", ps: "lords army" },
                { icon: 'replenishment', description: "Casualty replenishment rate: +8%", ps: "lords army" }
            ] },
            { effects: [
                { icon: 'disaster', description: "Attrition: -15% casualties suffered from all attrition", ps: "lords army" },
                { icon: 'replenishment', description: "Casualty replenishment rate: +15%", ps: "lords army" }
            ] }
        ]
    },
    {
        name: 'Renowned & Feared',
        description: "This Lord's many deeds - both on and off the battlefield - have brought them renown among their allies and made them feared by their enemies.",
        icon: 'campaign-agent',
        ranks: [
            { effects: [
                { icon: "coin", description: "Upkeep: -8% for all units", ps: "lords army" },
                { icon: 'campaign-movement', description: "Campaign movement range: +5%" },
                { icon: 'agent', description: "Enemy Hero action success chance: -10%" },
                { icon: 'agent', description: "Hero self-defense: +25% chance of wounding aggressors" },
                { icon: 'experience', description: "Recruit rank: +1 for all units" }
            ] }     
        ]
    }
];
