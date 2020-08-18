<template>
    <div class="spell">
        <div class="segment">
            <span class="icon"><a class="rarity-icon" :style="getIcon('spellStyles', spell.rarity)"></a></span>
            <div class="spell-name inline-block" :style="getGradient('rarity', spell.rarity)">
                <p class="inline-block title">{{getName(name)}}</p>
                <div class="spell-cost inline-block">
                    <span v-if="spell.cooldown">
                        <span class="icon"><a class="icon-small" :style="getIcon('spellStyles', 'icon-cooldown-2')"></a></span>
                        <p style="paddingLeft:28px;">{{spell.cooldown}}</p>
                    </span>
                </div>
                <div class="spell-cost inline-block">
                    <span v-if="spell.cost">
                        <span class="icon"><a class="icon-small" :style="getIcon('spellStyles', 'mana')"></a></span>
                        <p style="paddingLeft:28px;">{{spell.cost[displayLevel()]}}</p>
                    </span>
                </div>
                <div class="spell-cost inline-block">
                    <span v-if="spell.uses">
                        <span class="icon"><a class="icon-small" :style="getIcon('spellStyles', 'uses')"></a></span>
                        <p style="paddingLeft:28px;">{{spell.uses}}</p>
                    </span>
                </div>
            </div>
        </div>
        <div class="segment">
            <div class="spell-description inline-block" :style="getGradient('description', spell.rarity)">
                {{spell.description}}
            </div>
        </div>
        <div class="segment">
            <table>
                <tr v-for="(attribute, index) in spell.attributes" :key="index">
                    <!-- split on camal case and first letter to uppcase -->
                    <td>{{index.charAt(0).toUpperCase() + index.slice(1).split(/(?=[A-Z])/).join(' ')}}:</td>
                    <td v-if="Array.isArray(attribute)">
                        <span :style="fontColor(effect.color)" class="effects" v-for="(effect, j) in attribute" :key="j">
                            <a v-if="effect.uptick" :style="getIcon('spellStyles', effect.uptick)"></a>
                            {{effect.text}}
                            <a v-if="effect.icon" class="effect-icon" :style="getIcon('smallIcons', effect.icon)"></a>
                            {{effect.postText}}
                        </span>                    </td>
                    <td v-else-if="typeof(attribute) === 'object'">
                        <!-- how do i deal with mistcast -->
                        {{attribute[displayLevel()]}}
                    </td>
                    <td v-else>{{attribute}}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
import Gradients from '@/services/gradients'

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
        getGradient(type, rarity) {
            return {'backgroundImage': "linear-gradient(90deg," + Gradients[type][rarity] + ")"};
        },
        fontColor(item) {
            return {'color': this.colors[item]}
        },
        displayLevel() {
            // prioritize level over rank when level value is greater than 0
            if (this.currentRank === -1) return 0
            return (this.specificRank > 0 ) ? this.specificRank -1 : (this.specificRank > 0 ) ? this.specificRank -1 : (this.currentRank === 2) ? this.currentRank -1 : this.currentRank;
        },
        getName(name) {
            return (!this.spell.attributes.miscastChance) ? name : name + ' Upgraded'
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
    font-size:.95em;
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
    width: 70%;
}
.spell-cost {
    float: right;
    width: 8%;
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
