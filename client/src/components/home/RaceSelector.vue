<template>
    <div class="race-selector unselectable col-12 col-md-5" :style="getAssets('plaque')">
        <ul>
            <li><a type="button" class="home-button" @click="selectRace('Dark Elves')" :style="getAssets('button-home', 'Dark Elves')">Dark Elves</a></li>
            <li><a type="button" class="home-button" @click="selectRace('High Elves')" :style="getAssets('button-home', 'High Elves')">High Elves</a></li>
            <li><a type="button" class="home-button" @click="selectRace('Lizardmen')" :style="getAssets('button-home', 'Lizardmen')">Lizardmen</a></li>
            <li><a type="button" class="home-button disabled-button" @click="selectRace('Skaven', 'disabled')" :style="getAssets('button-home', 'Skaven')">Skaven</a></li>
            <li><a type="button" class="home-button disabled-button" @click="selectRace('Tomb Kings', 'disabled')" :style="getAssets('button-home', 'Tomb Kings')">Tomb Kings</a></li>
            <li><a type="button" class="home-button disabled-button" @click="selectRace('Vampire Coast', 'disabled')" :style="getAssets('button-home', 'Vampire Coast')">Vampire Coast</a></li>
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
        selectRace(race, disabled) {
            if (disabled) return
            this.selection = race;
            this.$emit('raceSelected', race.toLowerCase().split(' ').join(''))
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
    margin-bottom: 30px;
}
.race-selector ul {
    list-style-type: none;
    padding-left: 0px;
    padding-top: 55px;
}
.disabled-button {
    filter: grayscale(100%);
    cursor: context-menu !important;
}
.race-selector ul li {
    padding: 13px 0 10px 0;
    width: 100%;
}
</style>
