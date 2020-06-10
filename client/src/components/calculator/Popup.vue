<template>
    <div class="popup-container unselectable" :style="{ top: top + 'px', left: left + 'px'}">
        <div class="title">
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
            <p v-for="(effect, index) in info.ranks[displayLevel()].effects" :key="index">
                <span :style="getIcon(effect.icon)" class="small-icon"></span>{{effect.description}}
            </p>
        </div>
        <div v-if="hasNext()" class="title">
            Next Level
        </div>
        <div v-if="hasNext()" class="stats">
            <p v-for="(effect, idx) in info.ranks[displayNextLevel()].effects" :key="idx">
                <span :style="getIcon(effect.icon)" class="small-icon"></span>{{effect.description}}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Popup',
    props: {
        info: Object,
        currentRank: Number, // current rank obtained 0-3
        ranks: Number, // total amount of ranks in skill 1-3
        specificRank: Number, // specific rank being hovered 0-ranks
        disabled: Boolean,
        disabledReason: String,
        top: Number,
        left: Number
    },
    methods: {
        displayLevel() {
            // prioritize level over rank when level value is greater than 0
            return (this.specificRank > 0 ) ? this.specificRank -1 : (this.currentRank === 0) ? this.currentRank : this.currentRank -1
        },
        displayNextLevel() {
            return this.currentRank
        },
        hasNext() {
            if (this.currentRank > 0 && this.currentRank < this.ranks) return true
        },
        getIcon(icon) {
            let myIcon;
            try {                
                myIcon = require('@/assets/smallIcons/' + icon + '.png')              
                return { 'backgroundImage': 'url(' + myIcon + ')' };
            } catch {
                return ''
            }
        }
    }
};
</script>

<style>
.popup-container {
    position: absolute;
    padding: 5px;
    max-width: 600px;
    min-width: 500px;
    z-index: 1;
    background-color: black;
    border: 2px solid black;
    border-radius: 2px;
    opacity: .80;
    color: white;
    word-wrap: normal;
    line-height:normal;
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
}
.stats {
    color: #49FA51;
    padding-top: 7px;
    text-align: left;
}
.stats p{
    margin: 0;
    padding-bottom: 5px;
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
    display: inline-block;
    width: 14px;
    height: 14px;
    padding-right: 18px;
}
</style>
