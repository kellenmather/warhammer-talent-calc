exports.skills = [
    {
        ref: "liberBubonicus",
        name: "Liber Bubonicus",
        description: "The vile cantrips written within the mouldering pages of the Liber Bubonicus are powerful indeed.",
        icon: "item-arcane",
        quest: true,
        ranks: [
            { effects: [
                { icon: "magic", description: "Winds of Magic power reserve: +10" },
                { icon: "spell-plague", description: "Winds of Magic cost: -2 for \"Plague\"" },
                { icon: "spell-plague", description: "Winds of Magic cost: -2 for \"Plague Upgraded\"" },
                { icon: "wizard", description: "Hero recruit rank: +4 for Plague Priests", ps: "all provinces" },
                { icon: "rite", description: "Rite cost: +25% for The Pestilent Scheme" },
                { icon: "religion-skaven", description: "Skaven corruption: +3", ps: "local province" },
                { icon: "ability-liber-bubonicus", description: "Ability: \"The Liber Bubonicus\"" }
            ] }
        ],
        spell: {
            description: "Item",
            rarity: "legendary",
            cooldown: "120",
            uses: 2,
            attributes: {
                type: "Direct Damage",
                duration: "15 seconds",
                target: [
                    { text: "Enemy" },
                    { text: "100m", uptick: "range" },
                ],
                effects: [
                    { text: "Causes damage to combatants", uptick: "up-green", color: "green" },
                    { text: "Strong vs. a single combatant", uptick: "up-green", color: "green" },
                    { text: "Chance opponent will resist damage", uptick: "down-red", color: "red" },
                    { text: "Weak vs. multiple combatatns", uptick: "down-red", color: "red" }
                ]
            }
        }
    },
    {
        ref: "luckySkullhelm",
        name: "Lucky Skullhelm",
        description: "This charmed helmet, fashioned from the skull of a slaughtered foe, protects Tretch from blows of all kinds, be they physical or magical.",
        icon: "item-enchanted",
        quest: true,
        ranks: [
            { effects: [
                { icon: "movement-character", description: "Speed: +10%" },
                { icon: "resistance-physical", description: "Physical resistance: 10%" },
                { icon: "ambush", description: "Ambush success chance: +15%", ps: "Lord's army" },
                { icon: "ability-armor", description: "Passive ability: \"Lucky Skullhelm\"" }
            ] }
        ],
        spell: {
            description: "Item",
            rarity: "legendary",
            attributes: {
                type: "Augment",
                duration: "Constant",
                target: "Self",
                activeIf: "Losing melee combat",
                effects: [
                    { text: "Lucky Skullhelm (17 seconds)", color: "green" },
                    { text: "+24%", postText: "Speed", icon: "movement-character", color: "green" },
                    { text: "+33%", postText: "Damage Resistance", icon: "resistance-ward-save", color: "green" }
                ]
            }
        }
    },
    {
        ref: "rodOfCorruption",
        name: "Rod of Corruption",
        description: "The flail of Skrolk is a rusted, pitted ball of miasma that spreads poxes as it is swung",
        icon: "item-weapon",
        quest: true,
        ranks: [
            { effects: [
                { icon: "melee-character", description: "Melee attack: +6" },
                { icon: "damage", description: "Weapon strength: +10%" },
                { icon: "spell-wither", description: "Winds of Magic cost: -2 for \"Wither\"" },
                { icon: "spell-wither", description: "Winds of Magic cost: -2 for \"Wither Upgraded\"" },
                { icon: "wizard", description: "Hero capacity: +1 for Plague Priests and Eshin Sorcerers" },
                { icon: "ability-rod-of-corruption", description: "Ability: \"Rod of Corruption\"" }
            ] }
        ],
        spell: {
            description: "Item",
            rarity: "legendary",
            cooldown: "120",
            uses: 3,
            attributes: {
                type: [
                    { text: "Direct Damage (Area)" },
                    { text: "Only acts on targets when in area" }
                ],
                duration: "11 seconds",
                target: [
                    { text: "Around self" },
                    { text: "Affects enemies in range" },
                ],
                effectRange: "30m",
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
        ref: "dwarfGouger",
        name: "Dwarf Gouger",
        description: "A weapon created to kill the Dwarf-things, it perfectly suits Queek's furious windmill style of attack.",
        icon: "item-weapon",
        quest: true,
        ranks: [
            { effects: [
                { icon: "bonus-vs-small-character", description: "Bonus vs. Infantry: +10" },
                { icon: "damage", description: "Weapon strength: +20% when fighting against Dwarfs" },
                { icon: "treasury", description: "Recruitment cost: -10%", ps: "Lord's army" },
                { icon: "ability-dwarf-gouger", description: "Ability: \"Dwarf Gouger\"" }
            ] }
        ],
        spell: {
            description: "Weapon",
            rarity: "legendary",
            cooldown: "120",
            attributes: {
                type: "Augment",
                duration: "36 seconds",
                target: "Self",
                effects: [
                    { text: "+50%", icon: "icon-armor-piercing", postText: "Armour-Piercing Weapon Damage", color: "green" },
                    { text: "+24", icon: "melee-character", postText: "Melee Attack", color: "green" }
                ]
            }
        }
    },
    {
        ref: "warpShardArmour",
        name: "Warp-Shard Armour",
        description: "The Warpstone-infused armour plates of Queek Headtaker are as spiteful as their owner.",
        icon: "item-armour",
        quest: true,
        ranks: [
            { effects: [
                { icon: "armor-character", description: "Armour: +10" },
                { icon: "defense-character", description: "Melee defense: +5" },
                { icon: "resistance-ward-save", description: "Ward save: 10%" },
                { icon: "religion-skaven", description: "Skaven corruption: +3", ps: "local province" },
                { icon: "ability-warp-shard-armour", description: "Passive ability: \"Warp-Shard Armour\"" }
            ] }
        ],
        spell: {
            description: "Item",
            rarity: "legendary",
            attributes: {
                type: [
                    { text: "Hex (Area)" },
                    { text: "Only acts on targets in area" }
                ],
                duration: "Constant",
                target: [
                    { text: "Around self" },
                    { text: "Affects enemies in range" }
                ],
                effectRange: "40m",
                effects: [
                    { text: "-23", icon: "armor-character", postText: "Armour", color: "red" },
                    { text: "-5", icon: "defense-character", postText: "Melee Defense", color: "red" }
                ]
            }
        }
    },
    {
        ref: "whirlOfWeepingBlades",
        name: "Whirl of Weeping Blades",
        description: "With a poisoned sword in both hands and his own tail, few warriors can survive long against the Deathmaster.",
        icon: "item-weapon",
        quest: true,
        ranks: [
            { effects: [
                { icon: "armor-piercing-character", description: "Armour-piercing weapon damage: +20" },
                { icon: "damage", description: "Weapon strength: +5%" },
                { icon: "morale", description: "Leadership: +10 for Gutter Runners, Night Runners, Death Runners and Eshin Triads units", rank: 7, ps: "Lord's army" },
                { icon: "ability-whirl-of-weeping-blades", description: "Ability: \"Whirl of Weeping Blades\"" }
            ] }
        ],
        spell: {
            description: "Weapon",
            rarity: "legendary",
            cooldown: "120",
            attributes: {
                type: "Vortex",
                duration: "5 seconds",
                target: "Self",
                cannotUseIf: "On a wall, Manning equipment, Climbing",
                effects: [
                    { text: "Causes moderate", icon: "icon-magic", postText: "magical damage", uptick: "up-green", color: "green" },
                    { text: "Huge, stationary area of effect", uptick: "up-green", color: "green" },
                    { text: "Can disrupt unit formation", uptick: "up-green", color: "green" },
                    { text: "Good against armour", uptick: "up-green", color: "green" },
                    { text: "Strong vs. multiple units", uptick: "up-green", color: "green" },
                    { text: "Cannot move", uptick: "down-red", color: "red" }
                ]
            }
        }
    },
    {
        ref: "theCloakOfShadows",
        name: "The Cloak of Shadows",
        description: "Woven from stolen human hair and spider silk, the cloak both coneals and silences the wearer, making Snikch near invisible in darkness.",
        icon: "item-armour",
        quest: true,
        ranks: [
            { effects: [
                { icon: "defense-character", description: "Melee defense: +10" },
                { icon: "agent", description: "Enemy Hero actions success chance: -10%" },
                { icon: "ambush", description: "Ambush success chance: +20%", ps: "Lord's army" },
                { icon: "ability-the-cloak-of-shadows", description: "Passive ability: \"The Cloak of Shadows\"" }
            ] }
        ],
        spell: {
            description: "Item",
            rarity: "legendary",
            attributes: {
                type: [
                    { text: "Hex (Area)" },
                    { text: "Only acts on targets in area" }
                ],
                duration: "Constant",
                target: [
                    { text: "Around self" },
                    { text: "Affects enemies in range" }
                ],
                effectRange: "40m",
                effects: [
                    { text: "-9", icon: "defense-character", postText: "Melee Defense", color: "red" },
                    { text: "-4", icon: "morale-character", postText: "Leadership", color: "red" }
                ]
            }
        }
    },
    {
        ref: "ironFrame",
        name: "Iron Frame",
        description: "A mighty metal frame encases the Warlock Engineer's body, giving him amazing strength, dexterity and resistance against both physical and magical harm.",
        icon: "item-armour",
        quest: true,
        ranks: [
            { effects: [
                { icon: "armor-character", description: "Armour: +10" },
                { icon: "resistance-magic", description: "Magic resistance: 5%" },
                { icon: "resistance-physical", description: "Physical resistance: 10%" },
                { icon: "damage", description: "Weapon strength: +10%" }
            ] }
        ]
    },
    {
        ref: "stormDaemon",
        name: "Storm Daemon",
        description: "A Warpstone-powered device, created by the Warlock Engineers, that crackles with barely-contained power.",
        icon: "item-weapon",
        quest: true,
        ranks: [
            { effects: [
                { icon: "public-order", description: "Public order: +2", ps: "all provinces" },
                { icon: "armor-piercing-character", description: "Armour-piercing weapon damage: +25" },
                { icon: "bonus-vs-large-character", description: "Bonus vs. Large: +10" },
                { icon: "ability-storm-daemon", description: "Ability: \"Storm Daemon\"" }
            ] }
        ],
        spell: {
            description: "Weapon",
            rarity: "legendary",
            cooldown: "120",
            uses: 2,
            attributes: {
                type: "Magic Missiles",
                target: [
                    { text: "Enemy" },
                    { text: "400m", uptick: "range" }
                ],
                projectileRange: "400m",
                effects: [
                    { text: "Causes major", icon: "icon-magic", postText: "magical damage", uptick: "up-green", color: "green" },
                    { text: "Good penetration", uptick: "up-green", color: "green" },
                    { text: "Good against armour", uptick: "up-green", color: "green" },
                    { text: "Effective at all ranges", uptick: "up-green", color: "green" }
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
        ref: "expertThief",
        name: "Expert Thief",
        description: "As it turns out, the more important the murder, the more likely they are to be carrying something worth 'appropriating'.",
        icon: "item-enchanted",
        ranks: [
            { effects: [
                { icon: "item-ability", description: "Post battle chance of stealing a magic item: +25%" }
            ] }
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
        ref: "fromTheShadows",
        name: "From the Shadows",
        description: "With almost un-Skaven-like focus, Snikch moves unseen through the battlefield until the moment of murderous truth.",
        icon: "ability-from-the-shadows",
        ranks: [ { 
            effects: [
                { icon: "income", description: "Income from raiding: +30%", ps: "Lord's army" },
                { icon: "charge", description: "Charge bonus: +10 for Stormvermin units", ps: "Lord's army" },
                { icon: "ability-from-the-shadows", description: "Ability: \"From the Shadows\"" }
            ] }
        ],
        spell: {
            description: "Character ability",
            rarity: "common",
            attributes: {
                type: [
                    { text: "Augment (Area)" },
                    { text: "Instantly affects targets in area" }
                ],
                duration: "30 seconds",
                target: [
                    { text: "Self, Ground, Ally" },
                    { text: "Affects allies in range" },
                    { text: "200m", uptick: "range" }
                ],
                effectRange: "40m",
                effects: [
                    { text: "Snipe", uptick: "up-green", color: "green" },
                    { postText: "Stalk", icon: "stalk", uptick: "up-green", color: "green" },
                    { postText: "Unspottable", icon: "unspottable", uptick: "up-green", color: "green" }
                ]
            }
        }
    },
    {
        ref: "warpstoneWeapon",
        name: "Warpstone Weapon",
        description: "If you've got the Warptokens and the contacts, you can get all mannor of fine, murderous armaments crafted to fit claw or tail perfectly.",
        icon: "character-damage",
        ranks: [
            { effects: [
                { icon: "armor-piercing-character", description: "Armour-piercing weapon damage: +12" },
                { icon: "magical-attacks", description: "Enbales magical attacks" }
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
        ref: "tretchsRaiders",
        name: "Tretch's Raiders",
        description: "A master of exploiting others' weaknesses, Tretch and his band are never where you expect them and always where they can do most damage.",
        icon: "ability-tretchs-raiders",
        ranks: [ { 
            effects: [
                { icon: "income", description: "Income from raiding: +30%", ps: "Lord's army" },
                { icon: "charge", description: "Charge bonus: +10 for Stormvermin units", ps: "Lord's army" },
                { icon: "ability-tretchs-raiders", description: "Passive ability: \"Tretch's Raiders\"" }
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
                targetIf: "Winning melee combat",
                effectRange: "40m",
                effects: [
                    { text: "+12%", postText: "Base Weapon Damage", icon: "icon-damage-base", color: "green" },
                    { text: "+9", postText: "Melee Attack", icon: "melee-character", color: "green" },
                    { text: "+12%", postText: "Armour-Piercing Weapon Damage", icon: "icon-armor-piercing", color: "green" }
                ]
            }
        }
    },
    {
        ref: "masterOfGuile",
        name: "Master of Guile",
        description: "Tretch's sneaky, ultra-duplicitous tactics are dirty, even by Skaven low standards!",
        icon: "character-subterranean",
        ranks: [
            { effects: [
                { icon: "subterranean", description: "Evasion chance when using the Underway: +10%" },
                { icon: "ambush", description: "Ambush success chance: +10%", ps: "Lord's army" },
                { icon: "ambush", description: "Ambush success chance: +10%", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "subterranean", description: "Evasion chance when using the Underway: +20%" },
                { icon: "ambush", description: "Ambush success chance: +20%", ps: "Lord's army" },
                { icon: "ambush", description: "Ambush success chance: +20%", ps: "Lord's army" }
            ] }
        ]
    },
    {
        ref: "vanished",
        name: "Vanished!",
        description: "\"I turned around and they'd run-scurried off! Covering that distance in no time at all? It can't be natural, yes-yes!\"",
        icon: "character-ward-save",
        ranks: [
            { effects: [
                { icon: "resistance-missile", description: "Missile resistance: +10% for Clanrats and Stormvermin units", ps: "Lord's army" },
                { icon: "campaign-movement", description: "Campaign movement range: +5%" },
                { icon: "movement", description: "Speed: +5% for Clanrats and Stormvermin units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "resistance-missile", description: "Missile resistance: +20% for Clanrats and Stormvermin units", ps: "Lord's army" },
                { icon: "campaign-movement", description: "Campaign movement range: +10%" },
                { icon: "movement", description: "Speed: +10% for Clanrats and Stormvermin units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        ref: "stayHere",
        name: "\"Stay Here, I'll Get Help!\"",
        description: "It's not running away. It's knowing when and where to be to secure the best advantage.",
        icon: "ability-stay-here",
        ranks: [
            { effects: [
                { icon: "ability-stay-here", description: "Cooldown: -33% to \"Stay Here, I'll Get Help!\"" },
                { icon: "ability-stay-here", description: "Ability number of uses: +2 for \"Stay Here, I'll Get Help!\"" },
            ] },
            { effects: [
                { icon: "ability-stay-here", description: "Cooldown: -50% to \"Stay Here, I'll Get Help!\"" },
                { icon: "ability-stay-here", description: "Ability number of uses: +3 for \"Stay Here, I'll Get Help!\"" },
            ] }
        ]
    },
    {
        ref: "comingBack",
        name: "Coming Back",
        description: "\"We'll be back. We're coming back in here.\"",
        icon: "regeneration",
        ranks: [
            { effects: [
                { icon: "replenishment", description: "Casualty replenishment rate: +10%", ps: "Lord's army" },
                { icon: "wound-time", description: "Wound recovery time: -1" },
                { icon: "regeneration", description: "Passive ability: \"Regeneration\"" },
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
                    { text: "Restores", postText: "4 Hit Points per second", icon: "hp", uptick: "up-green", color: "green" },
                    { text: "+25% Weakness to", postText: "Fire Damage", icon: "icon-fire", color: "red" }
                ]
            }
        }
    },
    {
        ref: "jumpScare",
        name: "Jump-Scare",
        description: "All races have moments of weakness - times when their back is turned and their friends are looking the wrong way.",
        icon: "character-ambush",
        ranks: [
            { effects: [
                { icon: "ambush", description: "Enemy units are afflicted with temporary defensive penalties at the beginning of ambush battles", ps: "Lord's army" },
                { icon: "ambush", description: "Ambush success chance: +10%", ps: "Lord's army" },
                { icon: "morale", description: "Ambush success chanceEnemy leadership: -5", ps: "local region" }
            ] }
        ]
    },
    {
        ref: "scurryFastQuick",
        name: "Scurry Fast-Quick",
        description: "Eshin Assassins are experts at exploiting the briefest vulnerabilities. Bursting out of the darkness to end lives with uncanny skill.",
        icon: "character-movement",
        ranks: [
            { effects: [
                { icon: "campaign-movement", description: "Campaign movement range: +5%" },
                { icon: "strider", description: "Attribute: Strider", ps: "Lord's army" }
            ] }
        ]
    },
    {
        ref: "concealHideThem",
        name: "Conceal-Hide Them",
        description: "\"You are already kill-dead, man-thing!\"",
        icon: "ability-concealment-bombs",
        ranks: [
            { effects: [
                { icon: "character-movement", description: "Speed: +10% for infantry units" },
                { icon: "character", description: "Attribute: \"Concealment Bombs\" for Night Runners and Gutter Runners units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        ref: "contractLoopholes",
        name: "Contract Loopholes",
        description: "Most of the other clans truggle to find the patience to deal with such things as 'paperwork' - another weakness that Clan Eshin ruthlessly exploits!",
        icon: "character-military-spending",
        ranks: [
            { effects: [
                { icon: "coin", description: "Upkeep: -25% for all units", ps: "Lord's army" },
                { icon: "agent", description: "Hero and Lord recruit rank: +3", ps: "all provinces" }
            ] }
        ]
    },
    {
        ref: "justDodgeIt",
        name: "Just Dodge It",
        description: "They cannot hit what isn't there.",
        icon: "just-dodge-it",
        ranks: [
            { effects: [
                { icon: "defense-character", description: "Melee defense: +5", ps: "Lord's army" },
                { icon: "resistance-physical", description: "Physical resistance: 15%" }
            ] }
        ]
    },
    {
        ref: "sabotageUnrest",
        name: "Sabotage & Unrest",
        description: "Time and time again, Snikch has proven that no wall, no castle and no hidden hole will save you from his Weeping Blades.",
        icon: "campaign-skaven-corruption",
        ranks: [
            { effects: [
                { icon: "siege", description: "Immediately causes siege attrition at a reduced rate when besieging enemy settlements" },
                { icon: "public-order", description: "Public order: -5", ps: "local enemy province" }
            ] }
        ]
    },
    {
        ref: "warptechAcademy",
        name: "Warptech Academy",
        description: "Treachery is always a risk; advancing others' careers can quickly become a fatal mistake. However, having accomplished students in your team can outweight the dangers.",
        icon: "warptech-academy",
        ranks: [
            { effects: [
                { icon: "loyalty", description: "Loyalty: +3 for Warlock Masters", ps: "factionwide" },
                { icon: "warlock", description: "Hero capactiy: +1 for Warlock Engineers" }
            ] }
        ]
    },
    {
        ref: "improvedWarpstoneDetector",
        name: "Improved Warpstone Detector",
        description: "This new and improved device upgrades Ikit's earlier invention for maximum efficiency.",
        icon: "improved-warpstone-detector",
        ranks: [
            { effects: [
                { icon: "ikits-workshop", description: "+50% chance to acquire Warp-fuel after battle" }
            ] }
        ]
    },
    {
        ref: "theVeryLatestThing",
        name: "The Very Latest Thing",
        description: "You can tweak and prime weapons to your heart's content, but there remains no substitute for a live ammunition test against an equally-muerderous foe!",
        icon: "character-range",
        ranks: [
            { effects: [
                { icon: "ammo-character", description: "\"Concentrated Flame\" ammunition (increased ranged and anti-large)" },
                { icon: "ranged-damage-character", description: "Missile strength: +12%" }
            ] }
        ]
    },
    {
        ref: "optimisedProduction",
        name: "Optimised Production",
        description: "Finding assembly lines inefficient and therefore unsatisfactory, Ikit organises his Skaven workforce to manufacture his designs faster and better than the competition.",
        icon: "character-experience",
        ranks: [
            { effects: [
                { icon: "treasury", description: "Recruitment duration: -1 for Doom-Flayers and Doomwheel units", ps: "Lord's army" },
                { icon: "experience", description: "Recruit rank: +2 for Doom-Flayers and Doomwheel units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        ref: "doomsdayScientist",
        name: "Doomsday Scientist",
        description: "When the end finally comes, this one will be there, cackling like the supremely mad scientist he is.",
        icon: "ability-brass-orb",
        ranks: [
            { effects: [{ icon: "character", description: "Upgrades ability: \"Brass Orb\"" }] }
        ],
        spell: {
            name: "Brass Orb Upgraded",
            description: "Character ability",
            cooldown: "90",
            uses: 3,
            rarity: "uncommon",
            attributes: {
                type: [
                    { text: "Vortex" },
                    { text: "Only acts on targets when in area" }
                ],
                duration: "13 seconds",
                target: [
                    { text: "Ground" },
                    { text: "Affects enemies in range" },
                    { text: "200m", uptick: "range" },
                ],
                effectRange: "12m",
                effects: [
                    { text: "Causes damage to combatants", uptick: "up-green", color: "green" },
                    { text: "Causes minor", postText: "magical damage", icon: "icon-magic", uptick: "up-green", color: "green" },
                    { text: "Huge, stationary area of effect", uptick: "up-green", color: "green" },
                    { text: "Can disrupt unit formation", uptick: "up-green", color: "green" },
                    { text: "Strong vs. multiple combatants", uptick: "up-green", color: "green" },
                    { text: "Strong vs. multiple units", uptick: "up-green", color: "green" },
                    { text: "Good against armour", uptick: "up-green", color: "green" },
                    { text: "Brass Orb (13 seconds)", color: "red" }
                ]
            }
        }
    },
    {
        ref: "loathsomeAppearance",
        name: "Loathsome Appearance",
        description: "The hideous countenance that this one presents is an affront to nature and a true sign of the Great Horned Rat's limitless power.",
        icon: "terror",
        ranks: [
            { effects: [{ icon: "attribute-terror", description: "Attribute: Causes Terror" }] }
        ]
    },
    {
        ref: "plaguelord",
        name: "Plaguelord",
        description: "Plants wither and die when this one passes by, so utterly disease-ridden is he.",
        icon: "plaguelord",
        ranks: [
            { effects: [
                { icon: "wizard", description: "Unlocks Hero recruitment: Plague Priest", ps: "all provinces" },
                { icon: "wizard", description: "Hero capacity: +1 for Plague Priests and Eshin Sorcerers" },
                { icon: "wizard", description: "Hero recruit rank: +1 for Plague Priests", ps: "factionwide" },
                { icon: "experience", description: "Recruit rank: +2 Plague Monks and Plague Claw Catapult units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "wizard", description: "Unlocks Hero recruitment: Plague Priest", ps: "all provinces" },
                { icon: "wizard", description: "Hero capacity: +2 for Plague Priests and Eshin Sorcerers" },
                { icon: "wizard", description: "Hero recruit rank: +3 for Plague Priests", ps: "factionwide" },
                { icon: "experience", description: "Recruit rank: +4 Plague Monks and Plague Claw Catapult units", ps: "Lord's army" },
                { icon: "coin", description: "Upkeep: -10% for Plague Monks and Plagueclaw Catapult units", ps: "all armies" }
            ] }
        ]
    },
    {
        ref: "heraldOfDecay",
        name: "Herald of Decay",
        description: "Stench upon pox upon malady; so foul is the Skrolk's putrefaction that only the most serious devotees can stand to be in his presence.",
        icon: "plaguelord",
        ranks: [ { 
            effects: [
                { icon: "public-order", description: "Public order: -5", ps: "local enemy province", color: "red" },
                { icon: "religion-skaven", description: "Skaven corruption: +5", ps: "local province" }
            ] }
        ]
    },
    {
        ref: "auraOfPestilence",
        name: "Aura of Pestilence",
        description: "All around are caught in a deadly miasma of cirulent disease that rips through their bodies with vile momentum.",
        icon: "ability-aura-of-pestilence",
        ranks: [
            { effects: [
                { icon: "ability-aura-of-pestilence", description: "Passive ability: \"Aura of Pestilence\"" }
            ] }
        ],
        spell: {
            description: "Character ability",
            rarity: "common",
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
                    { text: "-5", postText: "Melee Attack", icon: "melee-character", color: "red" }
                ]
            }
        }
    },
    {
        ref: "extremelyDistrustful",
        name: "Extremely Distrustful",
        description: "Being untrustworthy and treacherous tends to make one suspicious of others.",
        icon: "character-morale",
        ranks: [
            { effects: [
                { icon: "loyalty", description: "Loyalty: -1 for new recruits", ps: "factionwide", color: "red" },
                { icon: "agent", description: "Hero self-defense: +15% chance of wounding aggressors" },
                { icon: "morale", description: "Leadership: +8", ps: "Lord's army" }
            ] }
        ]
    },
    {
        ref: "rendSlaughter",
        name: "Rend & Slaughter",
        description: "\"Yes-yes, I will kill-kill all day and through the night until the next. They will all die and then the Council will see my worth, yes-yes!\".",
        icon: "ability-frenzy",
        ranks: [
            { effects: [
                { icon: "morale-character", description: "Leadership: +8" },
                { icon: "ability-frenzy", description: "Passive ability: \"Frenzy\"" }
            ] }
        ],
        spell: {
            description: "Unit ability",
            rarity: "uncommon",
            attributes: {
                type: "Augment",
                duration: "Constant",
                target: "Self",
                disabledIf: "Leadership is lower than 50%",
                effects: [
                    { text: "+8", postText: "Melee Attack", icon: "melee-character", color: "green" },
                    { text: "+8%", postText: "Charge Bonus", icon: "charge-character", color: "green" },
                    { text: "+15%", postText: "Base Weapon Damage", icon: "icon-damage-base", color: "green" },
                    { postText: "Immune to Psychology", icon: "attribute-psychology", uptick: "up-green", color: "green" }
                ]
            }
        }
    },
    {
        ref: "makeExamples",
        name: "Make Examples!",
        description: "Oft-times, in order to get your point across, it is necessary to violently kill associates as an example to the others, that they may learn.",
        icon: "fear",
        ranks: [
            { effects: [
                { icon: "loyalty", description: "Loyalty: +2 for Warlod recruits", ps: "factionwide" },
                { icon: "loyalty", description: "Loyalty: -2 for Grey Seer recruits", ps: "factionwide", color: "red" },
                { icon: "character", description: "Leadership aura size: +20%" },
                { icon: "morale-character", description: "Character's aura leadership effect: +5" },
                { icon: "attribute-fear", description: "Attribute: Causes Fear" }
            ] }
        ]
    },
    {
        ref: "lifeIsVeryCheap",
        name: "Life is Very Cheap",
        description: "When you're clearly the better than the rest, others are mere puppets to be toyed with along the way and then casually sacrificed.",
        icon: "life-is-cheap",
        ranks: [
            { effects: [
                { icon: "replenishment", description: "Casualty replenishment rate: +10%", ps: "Lord's army" },
                { icon: "armor", description: "Armour: +5 for Skavenslaves and Clanrats units", ps: "Lord's army" },
                { icon: "experience", description: "Recruit rank: +2 for Skavenslaves and Clanrats units", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "replenishment", description: "Casualty replenishment rate: +10%", ps: "Lord's army" },
                { icon: "coin", description: "Upkeep: -10% for Clanrats units", ps: "all armies" },
                { icon: "armor", description: "Armour: +10 for Skavenslaves and Clanrats units", ps: "Lord's army" },
                { icon: "experience", description: "Recruit rank: +4 for Skavenslaves and Clanrats units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        ref: "crimsonGuard",
        name: "Crimson Guard",
        description: "Only the strongest, fiercest, and most ruthless may become members of the most elite claw-unit of all.",
        icon: "crimson-guard",
        ranks: [
            { effects: [
                { icon: "experience", description: "Recruit rank: +2 for Stormvermin units", ps: "Lord's army" },
                { icon: "turns", description: "Recruitment duration: -1 turn for Stormvermin units (minimum 1)", ps: "local province" }
            ] },
            { effects: [
                { icon: "experience", description: "Recruit rank: +4 for Stormvermin units", ps: "Lord's army" },
                { icon: "turns", description: "Recruitment duration: -1 turn for Stormvermin units (minimum 1)", ps: "all provinces" }
            ] }
        ]
    },
    {
        ref: "violentRiseToPower",
        name: "Violent Rise to Power",
        description: "No act, no matter how despicable, is considered taboo when you're on the way to the very top.",
        icon: "violent-rise-to-power",
        ranks: [
            { effects: [
                { icon: "public-order", description: "Public order: +1", ps: "all provinces" },
                { icon: "agent", description: "Hero action success chance: +8%", ps: "local characters" },
                { icon: "agent", description: "Enemy Hero action success chance: -10%" },
                { icon: "ambush", description: "Ambush success chance: +15%", ps: "Lord's army" }
            ] },
            { effects: [
                { icon: "public-order", description: "Public order: +2", ps: "all provinces" },
                { icon: "agent", description: "Hero action success chance: +12%", ps: "local characters" },
                { icon: "agent", description: "Enemy Hero action success chance: -20%" },
                { icon: "ambush", description: "Ambush success chance: +25%", ps: "Lord's army" },
                { icon: "wound-time", description: "Wound recovery time: -1" }
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
        ref: "trophyHeads",
        name: "Trophy Heads",
        description: "Oft-times, killers retain the heads of their victims as prizes or reminders of dark deeds done.",
        icon: "ability-trophy-heads",
        ranks: [
            { effects: [{ icon: "ability-trophy-heads", description: "Ability: \"Trophy Heads\"" }] }
        ],
        spell: {
            description: "Lord ability",
            cooldown: "90",
            rarity: "uncommon",
            attributes: {
                type: "Hex",
                duration: "36 seconds",
                target: [
                    { text: "Enemy" },
                    { text: "150m", uptick: "range" },
                ],
                targetIf: "Unit is a Lord or Hero",
                effects: [
                    { text: "-24", postText: "Melee Attack", icon: "melee-character", color: "red" },
                    { text: "-40", postText: "Melee Defense", icon: "defense-character", color: "red" }
                ]
            }
        }
    },
    {
        ref: "deathmastersSigil",
        name: "Deathmaster's Sigil",
        description: "Snikch leaves his distinctive symbol traced in blood beside his victims, so others will know the Deathmaster is abroad, and live in mortal dread.",
        icon: "ability-deathmasters-sigil",
        ranks: [
            { effects: [{ icon: "ability-deathmasters-sigil", description: "Ability: \"Deathmaster's Sigil\"" }] }
        ],
        spell: {
            description: "Lord ability",
            cooldown: "90",
            rarity: "uncommon",
            attributes: {
                type: "Hex",
                duration: "7 seconds",
                target: [
                    { text: "Enemy" },
                    { text: "100m", uptick: "range" },
                ],
                targetIf: "Unit is a Lord or Hero",
                cannotTargetIf: "Flying, On a wall",
                effects: [
                    { text: "Can disrupt unit formation", uptick: "up-green", color: "green" },
                    { text: "Good against armour", uptick: "up-green", color: "green" },
                    { tex: "Cannot move", uptick: "down-red", color: "red" }
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
        ref: "powerArmour",
        name: "Power Armour",
        description: "This advanced armour is infused with purest Warp-energy, making it more powerful than other protective measures employed by the Skaven.",
        icon: "character-ward-save",
        ranks: [
            { effects: [{ icon: "resistance-physical", description: "Physical resistance: 10%" }] }
        ]
    },
    {
        ref: "retractableArmblade",
        name: "Retractable Armblade",
        description: "Shake his hand? You'd better count your limbs, my friend!",
        icon: "character-attack",
        ranks: [
            { effects: [
                { icon: "melee-character", description: "Melee attack: +8" },
                { icon: "damage", description: "Weapon strength: +10%" }
            ] }
        ]
    },
    {
        ref: "doubleInsulation",
        name: "Double Insulation",
        description: "Ikit is famed for his ability to mix magic with mechanical technology; this multi-layered Warp-infused armour affords far more protection than merely extra padding, therefore.",
        icon: "character-ward-save",
        ranks: [
            { effects: [
                { icon: "resistance-fire", description: "Fire resistance: 20%" },
                { icon: "resistance-magic", description: "Magic resistance: 20%" }
            ] }
        ]
    },
    {
        ref: "jetPack",
        name: "Jet Pack",
        description: "Enormous fun, and guaranteed to surprise the foe, but a proper nightmare when it cuts out mid-air!",
        icon: "character-charge",
        ranks: [
            { effects: [
                { icon: "movement-character", description: "Speed: +12%" },
                { icon: "charge-character", description: "Charge bonus: +12" }
            ] }
        ]
    },
    {
        ref: "biometricInterface",
        name: "Biometric Interface",
        description: "Ikit is alerted to potential health issues by his multifarious inventions, by which ailments can easily be cured, ensuring he is always in peak condition.",
        icon: "character-health",
        ranks: [
            { effects: [{ icon: "health-character", description: "Hit points: +8%" }] }
        ]
    },
    {
        ref: "adrenalineRush",
        name: "Adrenaline Rush",
        description: "\"Power surge now, exploding through, yes-yes-yes-YES!!!!!!\"",
        icon: "ability-adrenaline-rush",
        ranks: [
            { effects: [{ icon: "ability-adrenaline-rush", description: "Passive ability: \"Adrenaline Rush\"" }] }
        ],
        spell: {
            description: "Character ability",
            rarity: "common",
            attributes: {
                type: "Augment",
                duration: "15 seconds",
                target: "Self",
                activeIf: "Casting",
                effects: [
                    { text: "+50%", postText: "Armour-Piercing Weapon Damage", icon: "icon-armor-piercing", color: "green" },
                    { postText: "Unbreakable", icon: "unbreakable", uptick: "up-green", color: "green" }
                ]
            }
        }
    },
    {
        ref: "secondWindSerum",
        name: "Second-Wind Serum",
        description: "Be wary of one who can renergise himself in the middle of battle, lest the tide be turned!",
        icon: "ability-second-wind-serum",
        ranks: [
            { effects: [{ icon: "ability-second-wind-serum", description: "Passive ability: \"Second-Wind Serum\"" }] }
        ],
        spell: {
            description: "Character ability",
            cooldown: "60",
            rarity: "common",
            attributes: {
                type: "Augment",
                duration: "15 seconds",
                target: "Self",
                activeIf: "Casting",
                effects: [
                    { text: "Restores up to", postText: "720 Hit Points", icon: "hp", uptick: "up-green", color: "green" },
                    { text: "+12", postText: "Melee Defense", icon: "defense-character", color: "green" }
                ]
            }
        }
    },
    {
        ref: "opportunist",
        name: "Opportunist",
        description: "Alway on the lookout for an opening or advantage in battle - somewhere to put the knife in...",
        icon: "character-charge",
        ranks: [
            { effects: [{ icon: "charge-character", description: "Charge bonus: +7" }] },
            { effects: [{ icon: "charge-character", description: "Charge bonus: +15" }] }
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
        ref: "soothsaying",
        name: "Soothsaying",
        description: "Speaking words of power or faith can alter preceptions on the battlefield.",
        icon: "character",
        ranks: [
            { effects: [
                { icon: "character", description: "Leadership aura size: +20%" }
            ] },
            { effects: [
                { icon: "character", description: "Leadership aura size: +40%" }
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
        ref: "unlimitedPower",
        name: "Unlimited Power!",
        description: "Unlimited power corrupts the already-totally-corrupted utterly.",
        icon: "spell-unlimited-power",
        ranks: [
            { effects: [{ icon: "spell-unlimited-power", description: "Ability: \"Unlimited Power!\"" }] }
        ],
        spell: {
            description: "Character ability",
            rarity: "uncommon",
            cooldown: "90",
            attributes: {
                type: "Augment of the Winds",
                duration: "29 seconds",
                target: "Self",
                miscastChance:  {"0": "50"},
                effects: [
                    { text: "Greatly improved", icon: "magic-pool", postText: "power recharge rate", uptick: "up-green", color: "green" },
                    { text: "Great increase to", icon: "magic-replenish", postText: "power reserves", uptick: "up-green", color: "green" }
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
        ref: "pestilentBreath",
        name: "Pestilent Breath",
        description: "The Skaven utters a vile phrase and belches forth an impossibly foul cloud.",
        icon: "spell-pestilent-breath",
        ranks: [
            { effects: [
                { icon: "spell-pestilent-breath", description: "Overcast spell: \"Pestilent Breath Upgraded\"" },
                { icon: "spell-pestilent-breath", description: "Cooldown: -30% to \"Pestilent Breath\"" }
            ] },
            { effects: [
                { icon: "spell-pestilent-breath", description: "Overcast spell: \"Pestilent Breath Upgraded\"" },
                { icon: "spell-pestilent-breath", description: "Cooldown -50% to \"Pestilent Breath\"" },
                { icon: "spell-pestilent-breath", description: "Winds of Magic cost: -2 for \"Pestilent Breath\"" },
                { icon: "spell-pestilent-breath", description: "Winds of Magic cost: -2 for \"Pestilent Breath Upgraded\"" },
                { icon: "spell-pestilent-breath", description: "Miscast base chance: -15% for \"Pestilent Breath Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            cooldown: "32",
            cost: [11, 9],
            rarity: "common",
            attributes: {
                type: "Breath",
                duration: "8 seconds",
                target: [
                    { text: "Ground" },
                    { text: "100m", uptick: "range" }
                ],
                cannotUseIf: "Climbing",
                cannotTargetIf: "On a wall",
                miscastChance:  {"0": "50", "1": "35"},
                effects: [
                    { text: "Additional poison contact effect", uptick: "up-blue", color: "blue" },
                    { text: "Causes moderate magical", postText: "magical damage", icon: "icon-magic", uptick: "up-green", color: "green" },
                    { text: "Can disrupt unit formation", uptick: "up-green", color: "green" },
                    { text: "Expanding tear-shaped attack", uptick: "up-green", color: "green" },
                    { text: "Strong vs. multiple units", uptick: "up-green", color: "green" },
                    { text: "Weak against armour", uptick: "down-red", color: "red" }
                ],
                contact: [
                    { postText: "Poison! (10 seconds)", icon: "icon-poison", color: "red" },
                    { text: "-20%", postText: "Armour-Piercing Missile Damage", icon: "icon-armor-piercing-ranged", color: "red" },
                    { text: "-20%", postText: "Base Missile Damage", icon: "icon-ranged-damage-base", color: "red" },
                    { text: "-20%", postText: "Base Weapon Damage", icon: "icon-damage-base", color: "red" },
                    { text: "-24%", postText: "Speed", icon: "movement-character", color: "red" },
                    { text: "-20%", postText: "Armour-Piercing Weapon Damage", icon: "icon-armor-piercing", color: "red" }
                ]
            }
        }
    },
    {
        ref: "plagueRash",
        name: "Plague Rash",
        description: "Itchy, nasty buboes are spread as the spells of Plague are cast, infecting the enemy populace with sickness.",
        icon: "spell-plague-rash",
        ranks: [
            { effects: [{ icon: "spell-plague-rash", description: "Passive ability: \"Plague Rash\"" }] }
        ],
        spell: {
            description: "Lore attribute",
            rarity: "common",
            attributes: {
                type: "Augment",
                duration: "Constant",
                target: [
                    { text: "Around self" },
                    { text: "Affects enemies in range" }
                ],
                activeIf: "Casting",
                effectRange: "Map-wide",
                effects: [
                    { text: "Plague Rash (10 seconds)", color: "red" },
                    { text: "-12%", icon: "movement-character", postText: "Speed", color: "red" },
                    { text: "-5%", icon: "fatigue", postText: "Vigour", color: "red" }
                ]
            }
        }
    },
    {
        ref: "blessWithFilth",
        name: "Bless with Filth",
        description: "A foul mist wraps around the weapons of an allied pack, their blades dripping with noxious filth.",
        icon: "spell-bless-with-filth",
        ranks: [
            { effects: [
                { icon: "spell-bless-with-filth", description: "Overcast spell: \"Bless with Filth Upgraded\"" },
                { icon: "spell-bless-with-filth", description: "Cooldown: -30% to \"Bless with Filth\"" }
            ] },
            { effects: [
                { icon: "spell-bless-with-filth", description: "Overcast spell: \"Bless with Filth Upgraded\"" },
                { icon: "spell-bless-with-filth", description: "Cooldown -50% to \"Bless with Filth\"" },
                { icon: "spell-bless-with-filth", description: "Winds of Magic cost: -1 for \"Bless with Filth\"" },
                { icon: "spell-bless-with-filth", description: "Winds of Magic cost: -2 for \"Bless with Filth Upgraded\"" },
                { icon: "spell-bless-with-filth", description: "Miscast base chance: -15% for \"Bless with Filth Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            cooldown: "29",
            cost: [8, 6],
            rarity: "uncommon",
            attributes: {
                type: [
                    { text: "Augment (Area)" },
                    { text: "Instantly affects targets in area" }
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
                    { text: "Extended cast range", uptick: "up-blue", color: "blue" }
                ],
                imbued: [
                    { postText: "Poison! (10 seconds)", icon: "icon-poison", color: "red" },
                    { text: "-20%", postText: "Armour-Piercing Missile Damage", icon: "icon-armor-piercing-ranged", color: "red" },
                    { text: "-20%", postText: "Base Missile Damage", icon: "icon-ranged-damage-base", color: "red" },
                    { text: "-20%", postText: "Base Weapon Damage", icon: "icon-damage-base", color: "red" },
                    { text: "-24%", postText: "Speed", icon: "movement-character", color: "red" },
                    { text: "-20%", postText: "Armour-Piercing Weapon Damage", icon: "icon-armor-piercing", color: "red" }
                ]
            }
        }
    },
    {
        ref: "wither",
        name: "Wither",
        description: "Chanting passages from the Liber Bubonicus, the Wizard casts a hex of wasting and corrosion.",
        icon: "spell-wither",
        ranks: [
            { effects: [
                { icon: "spell-wither", description: "Spell: \"Wither\"" },
                { icon: "spell-wither", description: "Overcast spell: \"Wither Upgraded\"" },
                { icon: "spell-wither", description: "Cooldown: -30% to \"Wither\"" }
            ] },
            { effects: [
                { icon: "spell-wither", description: "Overcast spell: \"Wither Upgraded\"" },
                { icon: "spell-wither", description: "Cooldown -50% to \"Wither\"" },
                { icon: "spell-wither", description: "Winds of Magic cost: -2 for \"Wither\"" },
                { icon: "spell-wither", description: "Winds of Magic cost: -3 for \"Wither Upgraded\"" },
                { icon: "spell-wither", description: "Miscast base chance: -15% for \"Wither Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            cooldown: "37",
            cost: [16, 13],
            rarity: "uncommon",
            attributes: {
                type: [
                    { text: "Hex (Area)" },
                    { text: "Only acts on targets when in area" }
                ],
                duration: "12 seconds",
                target: [
                    { text: "Ground, Enemy" },
                    { text: "Affects enemies in range" },
                    { text: "200m", uptick: "range" }
                ],
                effectRange: "40m",
                miscastChance:  {"0": "50", "1": "35"},
                effects: [
                    { text: "Greater effect on", postText: "armour", icon: "armor-character", uptick: "up-blue", color: "blue" },
                    { text: "-60", postText: "armour", icon: "armor-character", color: "red" }
                ]
            }
        }
    },
    {
        ref: "vermintide",
        name: "Vermintide",
        description: "A terrible bell chimes from afar. By its thirteenth toll, Skaven have been brought forth through a hole in reality.",
        icon: "spell-vermintide",
        ranks: [
            { effects: [
                { icon: "spell-vermintide", description: "Spell: \"Vermintide\"" },
                { icon: "spell-vermintide", description: "Cooldown: -50% to: \"Vermintide\"" },
                { icon: "spell-vermintide", description: "Winds of Magic cost: -2 for \"Vermintide\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            cooldown: "20",
            cost: [4],
            uses: 5,
            rarity: "uncommon",
            attributes: {
                type: "Augment",
                target: [
                    { text: "Ground" },
                    { text: "60m", uptick: "range" }
                ],
                cannotTargetIf: "Climbing or manning equipment or on a platform",
                effects: [
                    { text: "Summons a unit of Clanrats", uptick: "up-green", color: "green" },
                    { text: "Good at defending spellcaster", uptick: "up-green", color: "green" },
                    { text: "Summoned units degrade over time", uptick: "down-red", color: "red" }
                ]
            }
        }
    },
    {
        ref: "pestilentBirth",
        name: "Pestilent Birth",
        description: "Like a pregnant boil bursting forth, the ground bursts open and pus-coated Plague Monks emerge to do battle at the verminous summoner's bidding.",
        icon: "spell-pestilent-birth",
        ranks: [
            { effects: [
                { icon: "spell-pestilent-birth", description: "Spell: \"Pestilent Birth\"" },
                { icon: "spell-pestilent-birth", description: "Cooldown: -50% to: \"Pestilent Birth\"" },
                { icon: "spell-pestilent-birth", description: "Winds of Magic cost: -3 for \"Pestilent Birth\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            cooldown: "24",
            cost: [9],
            uses: 2,
            rarity: "rare",
            attributes: {
                type: "Augment",
                target: [
                    { text: "Ground" },
                    { text: "60m", uptick: "range" }
                ],
                cannotTargetIf: "Climbing or manning equipment or on a platform",
                effects: [
                    { text: "Summons a unit of Plague Monks", uptick: "up-green", color: "green" },
                    { text: "Good at flanking enemies", uptick: "up-green", color: "green" },
                    { text: "Summoned units degrade over time", uptick: "down-red", color: "red" }
                ]
            }
        }
    },
    {
        ref: "plague",
        name: "Plague",
        description: "The caster unleashes a vile disease  that scours the battlefield in search of victims to infect and instantly petrify.",
        icon: "spell-plague",
        ranks: [
            { effects: [
                { icon: "spell-plague", description: "Spell: \"Plague\"" },
                { icon: "spell-plague", description: "Overcast spell: \"Plague Upgraded\"" },
                { icon: "spell-plague", description: "Cooldown: -30% to \"Plague\"" }
            ] },
            { effects: [
                { icon: "spell-plague", description: "Overcast spell: \"Plague Upgraded\"" },
                { icon: "spell-plague", description: "Cooldown -50% to \"Plague\"" },
                { icon: "spell-plague", description: "Winds of Magic cost: -3 for \"Plague\"" },
                { icon: "spell-plague", description: "Winds of Magic cost: -4 for \"Plague Upgraded\"" },
                { icon: "spell-plague", description: "Miscast base chance: -15% for \"Plague Upgraded\"" }
            ] }
        ],
        spell: {
            description: "Spell",
            cooldown: "50",
            cost: [16, 12],
            rarity: "rare",
            attributes: {
                type: "Vortex",
                duration: "20 seconds",
                target: [
                    { text: "Ground" },
                    { text: "150m", uptick: "range" }
                ],
                miscastChance:  {"0": "50", "1": "35"},
                effects: [
                    { text: "Increased", postText: "armour-piercing damage", icon: "icon-armor-piercing", uptick: "up-blue", color: "blue" },
                    { text: "Causes major", postText: "magical damage", icon: "icon-magic", uptick: "up-green", color: "green" }
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
            uses: 2,
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
        description: "This one fights with a fervour to be both admired and despised",
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
    // throt unclean additions

    // throt unclean additions

    // throt unclean additions

    // throt unclean additions

    // throt unclean additions

    // throt unclean additions

    // throt unclean additions

    // throt unclean additions

    // throt unclean additions

    // throt unclean additions

    // throt unclean additions

    // throt unclean additions

    // throt unclean additions

    // throt unclean additions

    // throt unclean additions

    // throt unclean additions

    // throt unclean additions

    // throt unclean additions
    {
        ref: "creatureKiller",
        name: "Creature-Killer",
        description: "Throt's modified things-catcher makes him an expert throttler, but allows him to excel at throttling things much larger than man-sized!",
        icon: "item-weapon",
        quest: true,
        ranks: [
            { effects: [
                { icon: "armor-piercing-character", description: "Armour-piercing weapon damage: +10" },
                { icon: "bonus-vs-large-character", description: "Bonus vs. Large: +12" },
                { icon: "defense-character", description: "Melee defense: +5" },
                { icon: "ability-creature-killer", description: "Ability: \"Creature-Killer\"" }
            ] }
        ],
        spell: {
            description: "Weapon",
            rarity: "legendary",
            cooldown: "120",
            attributes: {
                type: [
                    { text: "Augment (Area)" },
                    { text: "Instantly affects targets in area" }
                ],
                duration: "38 seconds",
                target: [
                    { text: "Self" },
                    { text: "Affects allies in range" },
                ],
                effectRange: "40m",
                effects: [
                    { text: "+16", icon: "icon-bonus-vs-large", postText: "Bonus vs. Large", color: "green" },
                    { postText: "Immune to Psychology", icon: "attribute-psychology", uptick: "up-green", color: "green" }
                ]
            }
        }
    },
    {
        ref: "whipOfDomination",
        name: "Whip of Domination",
        description: "Even the hunchbacked and mutated things of Hell Pit's warrens can be frenzied forward by the stinging pain of Throt's scathing minotaur-hide whip.",
        icon: "item-weapon",
        quest: true,
        ranks: [
            { effects: [
                { icon: "campaign-movement", description: "Campaign movement range: +5%", ps: "own army" },
                { icon: "melee-character", description: "Melee attack: +10" },
                { icon: "morale", description: "Leadership: +10 for Wolf Rats, Rat Ogres, Mutant Rat Ogre, Brood Horror and Hell Pit Abomination units", ps: "Lord's army" },
                { icon: "charge", description: "Charge bonus: +15 for Skavenslaves units", ps: "Lord's army" }
            ] }
        ]
    },
    {
        ref: "broodHorror",
        name: "Brood Horror",
        description: "For the gaudier Warlord, Clan Moulder offers their most bloated Pox Rats as mounts to flail, crush, and savage a way through the enemy's ranks.",
        icon: "brood-horror",
        ranks: [
            { effects: [{ icon: "mount", description: "Mount: Brood Horror" }] }
        ]
    },
    {
        ref: "remouldered",
        name: "Remouldered",
        description: "Masterful field surgery techniques and hastily administered steroid shots keep wounded monsters alive and keen to maximise the slaughtering.",
        icon: "ability-remouldered",
        ranks: [
            { effects: [
                { icon: "health-character", description: "Hit points: +10%" },
                { icon: "ability-remouldered", description: "Ability: \"Remouldered\"" }
            ] }
        ],
        spell: {
            description: "Lord ability",
            cooldown: "120",
            uses: 2,
            rarity: "rare",
            attributes: {
                type: "Augment",
                duration: "24 seconds",
                target: [
                    { text: "Self, Ally" },
                    { text: "100m", uptick: "range" }
                ],
                targetIf: "Unit is Clan Moulder Monster",
                effects: [
                    { text: "Restores up to", icon: "hp", postText: "1152 Hit Points", color: "green", uptick: "up-green" },
                    { text: "+8", icon: "morale-character", postText: "Leadership", color: "green" },
                    { text: "+24", icon: "melee-character", postText: "Melee Attack", color: "green" }
                ]
            }
        }
    },
    {
        ref: "monsterThrottler",
        name: "Monster Throttler",
        description: "As Moulder's most frightening battlefield presence, Throt primes his combat capabilities to bring down the toughest monsters of war himself.",
        icon: "character-bonus-vs-infantry",
        ranks: [
            { effects: [
                { icon: "growth-juice", description: "Growth Juice gained from recycled units: +10%", ps: "factionwide" },
                { icon: "armor-piercing", description: "Armour-piercing weapon damage: +50" },
                { icon: "bonus-vs-large-character", description: "Bonus vs. Large: +10" }
            ] }
        ]
    },
    {
        ref: "specimenCollectorThrot",
        name: "Specimen Collector",
        description: "\"Take-hoard ALL body part-bits, yes-yes! No organ goes to waste!\"",
        icon: "character-replenishment",
        ranks: [
            { effects: [
                { icon: "growth-juice", description: "Growth Juice gained from recycled units: +10%", ps: "factionwide" },
                { icon: "replenishment", description: "Casualty replenishment rate: +10%" },
                { icon: "income", description: "Income from post-battle loot: +10%" }
            ] }
        ]
    },
    {
        ref: "raveningHunger",
        name: "Ravening Hunger",
        description: "\"Take-hoard ALL body part-bits, yes-yes! No organ goes to waste!\"",
        icon: "character-morale",
        ranks: [
            { effects: [
                { icon: "morale-character", description: "Leadership: +5" },
                { icon: "attribute-fatigue-immune", description: "Attribute: Perfect Vigour" }
            ] }
        ]
    },
    {
        ref: "masterOfTheMutated",
        name: "Master of the Mutated",
        description: "Clan Moulder command the hardiest monsters in all Skavendom, but the fear of a violent throttling makes Throt's critters that little bit tougher!",
        icon: "character-army",
        ranks: [
            { effects: [
                { icon: "resistance-missile", description: "Missile resistance: 10% for Wolf Rats, Rat Ogres, Mutant Rat Ogre, Brood Horror and Hell Pit Abomination units", ps: "factionwide" },
                { icon: "weapon-damage", description: "Weapon strength: +12% for Wolf Rats, Rat Ogres, Mutant Rat Ogre, Brood Horror and Hell Pit Abomination units" },
                { icon: "defense", description: "Melee defense: +8 for Wolf Rats, Rat Ogres, Mutant Rat Ogre, Brood Horror and Hell Pit Abomination units" }
            ] }
        ]
    },
    {
        ref: "theUncleanOne",
        name: "The Unclean One",
        description: "The Warpstone shard embedded in Throt's left eye socket feeds its baleful influence directly into his brain, giving him added strength.",
        icon: "character-health",
        ranks: [
            { effects: [
                { icon: "health-character", description: "Hit points: +5%" },
                { icon: "resistance-ward-save", description: "Ward save: 10%" },
                { icon: "ability-beast-pack", description: "Cooldown: -50% to \"Beast Pack\"" },
                { icon: "ability-beast-pack", description: "Ability number of uses: +1 for \"Beast Pack\"" }
            ] }
        ]
    }
]