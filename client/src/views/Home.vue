<template>
    <section>
        <Header :selection="selection"/>
        <div v-cloak class='container-fluid home unselectable' :style="getAssets()">
            <div class="row justify-content-center">
                <RaceSelector 
                    @raceSelected="selectedRace"
                    :race="race"/>
                <LordSelector 
                    :selection="selection"
                    :legendary="legendary"/>
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
    props: ['race', 'legendary'],
    data() {
        return {
            selection: 'darkelves'
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
    },
    watch: {
        legend: function() {
            console.log('watched');
            this.$forceUpdate();
        }
    },
    created() {
        if (this.race) {
            this.selection = this.race;
        }
        if (this.legendary === 'legendary') {
            console.log('legend detected')
            this.legend = true;
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
a {
    color: inherit;
    text-decoration: none;
}
a:hover {
    color: inherit;
    text-decoration: none;
}
[v-cloak] {
    display: none;
}

</style>
