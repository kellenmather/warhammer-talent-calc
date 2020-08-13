<template>
    <section>
        <Header :selection="selection"/>
        <div class='container-fluid home' :style="getAssets()">
            <div class="row justify-content-center">
                <RaceSelector @raceSelected="selectedRace"/>
                <LordSelector :selection="selection"/>
            </div>
        </div>
    </section>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/home/Header.vue';
import RaceSelector from '@/components/home/RaceSelector.vue';
import LordSelector from '@/components/home/LordSelector.vue';

export default {
    name: 'home',
    components: {
        Header,
        RaceSelector,
        LordSelector
    },
    data() {
        return {
            selection: null
        };
    },
    methods: {
        selectedRace(race) {
            this.selection = race;
        },
        getAssets() {
            let img = require('@/assets/home/bottom-divide.png');
            img = { 'backgroundImage': 'url(' + img + ')' };
            return img;
        }
    }
};
</script>

<style>
.parent {
    display: block;
}
.home {
    padding-top: 5px;
    background-repeat: repeat-x;
}

</style>
