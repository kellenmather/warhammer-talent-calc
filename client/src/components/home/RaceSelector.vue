<template>
    <div class="race-selector offset-race-selector unselectable col-12 col-lg-6" :style="getAssets('plaque-banner2')">
        <div class="offset-right">
            <ul>
                <li class="race-header">
                    <a @click="changeLords()" :style="getHeader()" type="button"></a>
                </li>
            </ul>
            <ul v-if="wh2">
                <li><a type="button" class="home-button" @click="selectRace('Dark Elves')" :style="getAssets('button-home', 'Dark Elves')">Dark Elves</a></li>
                <li><a type="button" class="home-button" @click="selectRace('High Elves')" :style="getAssets('button-home', 'High Elves')">High Elves</a></li>
                <li><a type="button" class="home-button" @click="selectRace('Lizardmen')" :style="getAssets('button-home', 'Lizardmen')">Lizardmen</a></li>
                <li><a type="button" class="home-button disabled-button" @click="selectRace('Skaven', 'disabled')" :style="getAssets('button-home', 'Skaven')">Skaven</a></li>
                <li><a type="button" class="home-button disabled-button" @click="selectRace('Tomb Kings', 'disabled')" :style="getAssets('button-home', 'Tomb Kings')">Tomb Kings</a></li>
                <li><a type="button" class="home-button disabled-button" @click="selectRace('Vampire Coast', 'disabled')" :style="getAssets('button-home', 'Vampire Coast')">Vampire Coast</a></li>
            </ul>
            <ul class="wh" v-else>
                <li><a type="button" class="home-button disabled-button" @click="selectRace('The Empire', 'disabled')" :style="getAssets('button-home', 'The Empire')">The Empire</a></li>
                <li><a type="button" class="home-button disabled-button" @click="selectRace('Dwarves', 'disabled')" :style="getAssets('button-home', 'Dwarves')">Dwarves</a></li>
                <li><a type="button" class="home-button disabled-button" @click="selectRace('Greenskins', 'disabled')" :style="getAssets('button-home', 'Greenskins')">Greenskins</a></li>
                <li><a type="button" class="home-button disabled-button" @click="selectRace('Vampire Counts', 'disabled')" :style="getAssets('button-home', 'Vampire Counts')">Vampire Counts</a></li>
                <li><a type="button" class="home-button disabled-button" @click="selectRace('Norsca', 'disabled')" :style="getAssets('button-home', 'Norsca')">Norsca</a></li>
                <li><a type="button" class="home-button disabled-button" @click="selectRace('Bretonnia', 'disabled')" :style="getAssets('button-home', 'Bretonnia')">Bretonnia</a></li>
                <li><a type="button" class="home-button disabled-button" @click="selectRace('Wood Elves', 'disabled')" :style="getAssets('button-home', 'Wood Elves')">Wood Elves</a></li>
                <li><a type="button" class="home-button disabled-button" @click="selectRace('Beastmen Warherds', 'disabled')" :style="getAssets('button-home', 'Beastmen Warherds')">Beastmen Warherds</a></li>
                <li><a type="button" class="home-button disabled-button" @click="selectRace('Chaos', 'disabled')" :style="getAssets('button-home', 'Chaos')">Chaos</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
import ApiService from '@/services/apiService';

export default {
    name: 'RaceSelector',
    data() {
        return {
            selection: 'Dark Elves',
            wh2: true
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
        },
        getHeader() {
            let type = this.wh2 ? 'wh' : 'wh2'
            let item, left, right;
            item = require('@/assets/home/' + type + '.png');
            right = require('@/assets/home/right-button.png');
            left = require('@/assets/home/left-button.png');

            return { 'backgroundImage': 'url(' + item + ')' };
        },
        changeLords() {
            this.wh2 ? this.wh2 = false : this.wh2 = true;
        }
    }
};
</script>

<style>
@media (min-width: 1046px) {
    .offset-right {
        position: absolute;
        right: calc(15% - 18px);
    }
    .race-selector.offset-race-selector {
        background-position: right 15% top 30px;
    }
}


.race-selector {
    background-position: center top 30px;
    background-repeat: no-repeat;
    height: 710px;
    margin-bottom: 30px;
}
.race-selector ul {
    list-style-type: none;
    padding-left: 0px;
    margin-bottom: 0px;
}
.race-selector ul:first-child {
    padding-top: 40px;
}
.disabled-button {
    filter: grayscale(100%);
    cursor: context-menu !important;
}
.race-selector ul li {
    padding: 13px 0 10px 0;
    width: 100%;
}
.race-selector ul.wh li {
    padding: 11px 0 10px 0;
    width: 100%;
}
.race-selector ul.wh li:first-child {
    padding: 13px 0 10px 0;
    width: 100%;
}
.race-header {
    padding-top: 0px !important;
    padding-bottom: 0px !important;
    height: 70px;
}
.race-header a {
    display: inline-block;
    background-position: top center;
    background-repeat: no-repeat;
    z-index: 1;
    width: 52px;
    height: 70px;
}
</style>
