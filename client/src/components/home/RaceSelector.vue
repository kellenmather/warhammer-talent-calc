<template>
    <div class="race-selector col-12 col-md-5" :style="getAssets('plaque')">
        <ul>
            <li><a type="button" class="race-button" v-on:click="selectRace('Dark Elves')" :style="getAssets('button-home', 'Dark Elves')">Dark Elves</a></li>
            <li><a type="button" class="race-button" v-on:click="selectRace('High Elves')" :style="getAssets('button-home', 'High Elves')">High Elves</a></li>
            <li><a type="button" class="race-button" v-on:click="selectRace('Lizardmen')" :style="getAssets('button-home', 'Lizardmen')">Lizardmen</a></li>
            <li><a type="button" class="race-button" v-on:click="selectRace('Skaven')" :style="getAssets('button-home', 'Skaven')">Skaven</a></li>
            <li><a type="button" class="race-button" v-on:click="selectRace('Tomb Kings')" :style="getAssets('button-home', 'Tomb Kings')">Tomb Kings</a></li>
            <li><a type="button" class="race-button" v-on:click="selectRace('Vampire Coast')" :style="getAssets('button-home', 'Vampire Coast')">Vampire Coast</a></li>
        </ul>
    </div>
</template>

<script>
import ApiService from '@/services/apiService';

export default {
    name: 'RaceSelector',
    data() {
        return {
            selection: null
        }
    },
    methods: {
        selectRace(race) {
            this.selection = race;
            this.$emit('raceSelected', race)
        },
        getAssets(item, race) {
            if (race === this.selection) item = item + '-selected';
            let img = require('@/assets/home/' + item + '.png');
            img = { 'backgroundImage': 'url(' + img + ')' };
            return img;
        }
    }
};
</script>

<style>
.race-selector {
    background-position: center top 30px;
    background-repeat: no-repeat;
    height: 710px;
}
.race-selector ul {
    list-style-type: none;
    padding-left: 0px;
    padding-top: 55px;
}
.race-selector ul li {
    padding: 10px 0;
    width: 100%;
}
.race-button {
    display: inline-block;
    background-position: center;
    background-repeat: no-repeat;
    width: 350px;
    height: 42px;
    padding-top: 10px;
}
</style>
