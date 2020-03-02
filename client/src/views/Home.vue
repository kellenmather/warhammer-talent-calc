<template>
    <section>
        <Header :selection="selection"/>
        <div class='container-fluid'>
            <div class="row justify-content-center">
                <RaceSelector @raceSelected="selectedRace" :selection="selection"/>
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
            console.log('Home setting race to: ', race);
            this.selection = race;
        }
    }
};
</script>

<style>
img {
    width: 20%;
    height: auto;
}
.parent {
    display: block;
}

</style>
