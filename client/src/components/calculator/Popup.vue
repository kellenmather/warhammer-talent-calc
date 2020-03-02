<template>
    <div class="popup-container">
        <div class="title">
            {{info.name}}
        </div>
        <div v-if="specificRank > 0" class="title">
            Level {{specificRank}}            
        </div>
        <div class="description inline">
            {{info.description}}
        </div>
        <div class="stats">
            <p v-for="(effect, index) in info.ranks[displayLevel()].effects" :key="index">
                {{effect.description}}
            </p>
        </div>
        <div v-if="hasNext()" class="title">
            Next Level
        </div>
        <div v-if="hasNext()" class="stats">
            <p v-for="(effect, idx) in info.ranks[displayNextLevel()].effects" :key="idx">
                {{effect.description}}
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
        specificRank: Number // specific rank being hovered 0-ranks
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
    top: 56px;
    left: 20px;
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
</style>
