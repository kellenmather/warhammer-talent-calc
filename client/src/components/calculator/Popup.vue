<template>
    <div class="popup-container unselectable" :style="getPosition()">
        <div v-if="info.quest" class="title">
            <span class="icon"><a class="rarity-icon" :style="getIcon('spellStyles', 'legendary')"></a></span>
            <div class="spell-name inline-block" :style="getGradient('rarity', 'legendary')">
                <p v-if="quest > 1" class="title legend-item">Quest for: {{info.name}} (Unique)</p>
                <p v-else class="title legend-item">{{info.name}} (Unique)</p>
            </div>
        </div>
        <div v-else class="title">
            {{info.name}}
        </div>
        <div v-if="specificRank > 0" class="title">
            Level {{specificRank}}            
        </div>
        <div class="description inline">
            {{info.description}}
        </div>
        <div v-if="disabled" class="disabled">
            {{disabledReason}}
        </div>
        <div class="stats">
            <div v-for="(effect, index) in info.ranks[displayLevel()].effects" :key="index">
                <span><a :style="getBackground(effect.icon)" class="small-icon" ></a></span>
                <span class="effect inline-block" :style="{ color: effect.color}" >{{effect.description}}
                    <span v-if="effect.rank">
                         (<a :style="getBackground('experience-7')" class="tiny-icon"></a>Rank 7 and above)
                    </span>
                    <span style="display: block" v-if="effect.ps">
                        <span v-if="effect.ps==='Lord\'s army'">
                        (<a v-if="effect.ps==='Lord\'s army'" :style="getBackground('icon-army')" class="tiny-icon"></a>
                        {{effect.ps}})
                        </span>
                        <span v-else :style="{ color: effect.color}">
                            ({{effect.ps}})
                        </span>
                    </span>
                </span>
            </div>
        </div>
        <div v-if="hasNext() && !specificRank" class="title" style="paddingTop: 10px;">
            Next Level
        </div>
        <div v-if="hasNext() && !specificRank" class="stats">
            <div v-for="(effect, idx) in info.ranks[displayNextLevel()].effects" :key="idx">
                <span><a :style="getBackground(effect.icon)" class="small-icon" ></a></span>
                <span class="effect inline-block" >{{effect.description}}
                    <span v-if="effect.rank">
                         (<a :style="getBackground('experience-7')" class="tiny-icon"></a>Rank 7 and above)
                    </span>
                    <span style="display: block" v-if="effect.ps">
                        <span v-if="effect.ps==='Lord\'s army'">
                        (<a v-if="effect.ps==='Lord\'s army'" :style="getBackground('icon-army')" class="tiny-icon"></a>
                        {{effect.ps}})
                        </span>
                        <span v-else :style="{ color: effect.color}">
                            ({{effect.ps}})
                        </span>
                    </span>
                </span>
            </div>
        </div>
        <Spell
            v-if="info.spell"
            :currentRank="currentRank"
            :specificRank="specificRank"
            :spell="info.spell"
            :name="info.name"
        />
    </div>
</template>

<script>
import Spell from '@/components/calculator/Spell.vue';
import Gradients from '@/services/gradients'

export default {
    name: 'Popup',
    components: {
        Spell
    },
    props: {
        info: Object,
        currentRank: Number, // current rank obtained 0-3
        ranks: Number, // total amount of ranks in skill 1-3
        specificRank: Number, // specific rank being hovered 0-ranks
        disabled: Boolean,
        disabledReason: String,
        quest: Number,
        top: Number,
        left: Number,
        bottom: Number
    },
    methods: {
        displayLevel() {
            // prioritize level over rank when level value is greater than 0
            if (this.currentRank === -1) return 0
            return (this.specificRank > 0 ) ? this.specificRank -1 : (this.currentRank === 0) ? this.currentRank : this.currentRank -1;
        },
        displayNextLevel() {
            return this.currentRank;
        },
        hasNext() {
            if (this.currentRank > 0 && this.currentRank < this.ranks) return true
        },
        getBackground(icon) {
            try {            
                icon = require('@/assets/smallIcons/' + icon + '.png')              
                return { 'backgroundImage': 'url(' + icon + ')' };
            } catch {
                icon = require('@/assets/largeIcons/' + icon + '.png')              
                return [{ 'backgroundImage': 'url(' + icon + ')', 'backgroundSize': '36px auto', 'height': '28px' }];
            }
        },
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
        getPosition() {
            if (this.bottom > 0) {
                return { bottom: this.bottom + 'px', left: this.left + 'px'}
            } else {
                return { top: this.top + 'px', left: this.left + 'px'}
            }
        }
    }
};
</script>

<style>
.popup-container {
    position: absolute;
    padding: 5px;
    width: 600px;
    z-index: 1;
    background-color: black;
    border: 2px solid black;
    border-radius: 2px;
    opacity: .85;
    color: white;
    word-wrap: normal;
    line-height:normal;
    font-size: 1em;

}
.title {
    position: relative;
    color: #EBE6CD;
    font-weight: bold;
    height: 30px;
}
.description {
    color: #EBE6CD;
    font-style: italic;
    word-wrap: break-word;
    text-align: left;
    white-space: initial;
    padding: 0 5px 10px 5px;
}
.stats {
    color: #49FA51;
    padding-top: 7px;
    text-align: left;
}
.stats div{
    margin: 0;
    white-space: initial;
}
.disabled {
    color: red;
    font-style: italic;
    padding-top: 5px;
    font-weight: bold;
}
.small-icon {
    background-repeat: no-repeat;
    background-position: center;
    display: inline-block;
    width: 24px;
    height: 24px;
    padding-right: 34px;
}
.tiny-icon {
    background-repeat: no-repeat;
    background-position: top 2px center;
    display: inline-block;
    width: 18px;
    height: 18px;
    padding-right: 18px;
}
.effect {
    max-width: 540px;
    padding-bottom: 10px;
    vertical-align: middle;
}
.legend-item {
    vertical-align: middle;
    margin-bottom: 4px;
}
</style>
