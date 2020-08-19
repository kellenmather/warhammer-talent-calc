<template>
    <section>
        <Header :selection="selection"/>
        <div class='container-fluid home' :style="getAssets()">
            <div class="row justify-content-center">
                <RaceSelector @raceSelected="selectedRace"/>
                <LordSelector :selection="selection"/>
            </div>
        </div>
        <Footer />
    </section>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/home/Header.vue';
import Footer from '@/components/home/Footer.vue';
import RaceSelector from '@/components/home/RaceSelector.vue';
import LordSelector from '@/components/home/LordSelector.vue';

export default {
    name: 'home',
    components: {
        Header,
        RaceSelector,
        LordSelector,
        Footer
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
    color: #EBE6CD;
    padding-top: 5px;
    background-repeat: repeat-x;
    min-height: calc(100vh - 375px)
}
.home-button {
    display: inline-block;
    background-position: center;
    background-repeat: no-repeat;
    min-width: 350px;
    height: 41px;
    padding-top: 6px;
}

</style>
