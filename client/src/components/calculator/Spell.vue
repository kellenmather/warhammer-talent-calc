<template>
    <div class="spell">
        <div class="segment">
            <span class="icon"><a class="rarity-icon" :style="getIcon('spellStyles', spell.rarity)"></a></span>
            <div class="spell-name inline-block" :style="getBackground('rarity', spell.rarity)">
                <p class="inline-block title">{{name}}</p>
                <div class="mana-cost inline-block">
                    <span v-if="spell.cost || spell.uses">
                        <span class="icon"><a class="icon-small" :style="getIcon('spellStyles', spell.cost ? 'mana' : 'uses')"></a></span>
                        <p style="paddingLeft:28px;">{{spell.cost || spell.uses}}</p>
                    </span>
                </div>
                <div class="cooldown inline-block">
                    <span v-if="spell.cooldown">
                        <span class="icon"><a class="icon-small" :style="getIcon('spellStyles', 'icon-cooldown-2')"></a></span>
                        <p style="paddingLeft:28px;">{{spell.cooldown}}</p>
                    </span>
                </div>
            </div>
        </div>
        <div class="segment">
            <div class="spell-description inline-block" :style="getBackground('description', spell.rarity)">
                {{spell.description}}
            </div>
        </div>
        <div class="segment">
            <table>
                <tr v-for="(attribute, index) in spell.attributes" :key="index">
                    <!-- split on camal case and first letter to uppcase -->
                    <td>{{index.charAt(0).toUpperCase() + index.slice(1).split(/(?=[A-Z])/).join(' ')}}:</td>
                    <td v-if="typeof(attribute) === 'object'">
                        <span :style="fontColor(effect.color)" class="effects" v-for="(effect, j) in attribute" :key="j">
                            <a v-if="effect.uptick" :style="getIcon('spellStyles', effect.uptick)"></a>
                            {{effect.text}}
                            <a v-if="effect.icon" class="effect-icon" :style="getIcon('smallIcons', effect.icon)"></a>
                            {{effect.postText}}
                        </span>
                    </td>
                    <td v-else>{{attribute}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Spell',
    props: {
        name: String,
        spell: Object,
        currentRank: Number,
        specificRank: Number
    },
    data () {
        return {
            gradients: {
                rarity: {
                    common: '#505663, #4F5560, #4E535E, #46515A, #46515A, #333739, #2C2D2D',
                    uncommon: '#306E3A, #306338, #306238, #2A652E, #276127, #275126, #283425',
                    rare: '#3E52A1, #384EA1, #3A4E99, #324D9A, #2A539C, #264373, #222A38',
                    legendary: '#693E82, #613C79, #5F3E74, #5E3D76, #4D316F, #3C2D4D, #242933'
                },
                description: {
                    common: '#393C41, #3A3D42, #373A3E, #323639, #282B2C',
                    uncommon: '#2C482F, #2B432E, #2A442D, #274226, #282C25',
                    rare: '#333D5F, #303A5C, #313B5C, #293957, #272623',
                    legendary: '#473352, #44324D, #42324B, #362B42, #2C282C'
                }
            },
            colors: {
                green: '#49FA51',
                red: 'red',
                blue: '#70FFFF'
            }
        }
    },
    methods: {
        getIcon(folder, icon) {
            try {                
                icon = require('@/assets/' + folder + '/' + icon + '.png')              
                return { 'content': 'url(' + icon + ')' };
            } catch {
                return '';
            }
        },
        getBackground(type, rarity) {
            return {'backgroundImage': "linear-gradient(90deg," + this.gradients[type][rarity] + ")"};
        },
        fontColor(item) {
            return {'color': this.colors[item]}
        }
    }
};
</script>

<style>
.segment {
    display: block;
    width: 100%;
    margin-top: 3px;
}
.spell {
    width: 100%;
    min-height: 100px;
    color: #ECE9CB;
    font-size:.85em;
}
.icon {
    position: absolute;
}
.icon a {
    position: relative;
    width: 25px;
    height: 24px;
    top: -2px;
}
.spell-name {
    line-height:normal;
    height: 20px;
    text-align: left;
    padding-left: 15px;
    width: calc(100% - 12px);
    background-color: black;
    margin-left: 12px;
}
.spell-name p {
    margin-top: 3px;
    width: 80%;
}
.mana-cost {
    min-width: 10%;
}
.cooldown {
    width: 10%;
}
.rarity-icon {
    width: 25px;
    height: 24px;
}
.icon-small {
    width: 22px;
    height: 22px;
}
.spell-description {
    width: 100%;
    text-align: left;
    font-style: italic;
    padding: 3px 0px 3px 25px;
}
.segment table {
    width: 100%;
}
.segment table tr td {
    padding: 4px 5px;
    text-align: left;
    vertical-align: top;
    width: 25%;
}
.segment table tr td:last-child {
    width: 75%
}
.effects {
    display: block;
}
.effect-icon {
    height: auto;
    width: 16px !important;
}
.title {
    font-weight: bold;
}
</style>
