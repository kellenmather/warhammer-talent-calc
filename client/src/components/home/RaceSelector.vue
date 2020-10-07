<template>
    <div class="race-selector offset-race-selector unselectable col-12 col-lg-6" :style="getAssets('plaque-banner2')">
        <div class="offset-right">
            <ul>
                <li class="race-header">
                    <a @click="changeLords()" :style="getHeader()" type="button"></a>
                </li>
            </ul>
            <ul v-if="wh2">
                <li><a type="button" class="home-button" @click="selectRace('darkelves')" :style="getAssets('button-home', 'darkelves')">Dark Elves</a></li>
                <li><a type="button" class="home-button" @click="selectRace('highelves')" :style="getAssets('button-home', 'highelves')">High Elves</a></li>
                <li><a type="button" class="home-button" @click="selectRace('lizardmen')" :style="getAssets('button-home', 'lizardmen')">Lizardmen</a></li>
                <li><a type="button" class="home-button" @click="selectRace('skaven')" :style="getAssets('button-home', 'skaven')">Skaven</a></li>
                <li><a type="button" class="home-button disabled-button" @click="selectRace('tombkings', 'disabled')" :style="getAssets('button-home', 'tombkings')">Tomb Kings</a></li>
                <li><a type="button" class="home-button disabled-button" @click="selectRace('vampirecoast', 'disabled')" :style="getAssets('button-home', 'vampirecoast')">Vampire Coast</a></li>
            </ul>
            <ul v-else class="wh">
                <li><a type="button" class="home-button disabled-button" @click="selectRace('theempire', 'disabled')" :style="getAssets('button-home', 'theempire')">The Empire</a></li>
                <li><a type="button" class="home-button disabled-button" @click="selectRace('dwarves', 'disabled')" :style="getAssets('button-home', 'dwarves')">Dwarves</a></li>
                <li><a type="button" class="home-button disabled-button" @click="selectRace('greenskins', 'disabled')" :style="getAssets('button-home', 'greenskins')">Greenskins</a></li>
                <li><a type="button" class="home-button disabled-button" @click="selectRace('vampirecounts', 'disabled')" :style="getAssets('button-home', 'vampirecounts')">Vampire Counts</a></li>
                <li><a type="button" class="home-button disabled-button" @click="selectRace('norsca', 'disabled')" :style="getAssets('button-home', 'norsca')">Norsca</a></li>
                <li><a type="button" class="home-button disabled-button" @click="selectRace('bretonnia', 'disabled')" :style="getAssets('button-home', 'bretonnia')">Bretonnia</a></li>
                <li><a type="button" class="home-button" @click="selectRace('woodelves')" :style="getAssets('button-home', 'woodelves')">Wood Elves</a></li>
                <li><a type="button" class="home-button disabled-button" @click="selectRace('beastmenwarherds', 'disabled')" :style="getAssets('button-home', 'beastmenwarherds')">Beastmen Warherds</a></li>
                <li><a type="button" class="home-button disabled-button" @click="selectRace('chaos', 'disabled')" :style="getAssets('button-home', 'chaos')">Chaos</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
import ApiService from '@/services/apiService';

export default {
    name: 'RaceSelector',
    props: ['race'],
    data() {
        return {
            selection: 'darkelves',
            wh2: true
        }
    },
    methods: {
        selectRace(race, disabled) {
            if (disabled) return
            this.selection = race;
            this.$emit('raceSelected', race)
        },
        getAssets(item, race) {
            if (race === this.selection) item = item + '-selected';
            let img = require('@/assets/home/' + item + '.png');
            img = { 'backgroundImage': 'url(' + img + ')' };
            return img;
        },
        getHeader() {
            let type = this.wh2 ? 'wh2' : 'wh'
            let item, left, right;
            item = require('@/assets/home/' + type + '.png');
            right = require('@/assets/home/right-button.png');
            left = require('@/assets/home/left-button.png');

            return { 'backgroundImage': 'url(' + item + ')' };
        },
        changeLords() {
            this.wh2 ? this.wh2 = false : this.wh2 = true;
        }
    },
    created() {
        if (this.race) {
            this.selection = this.race;
            
            let wh2Races = ['darkelves', 'highelves', 'lizardmen', 'skaven', 'tombkings', 'vampirecoast']
            wh2Races.includes(this.race) ? this.wh2 = true : this.wh2 = false;
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
    background-position-y: 6px;
    background-position: center;
    background-repeat: no-repeat;
    width: 52px;
    height: 70px;
}
</style>
