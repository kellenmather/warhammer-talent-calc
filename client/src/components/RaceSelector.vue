<template>
    <div class="col-12 col-md-4">
        <p>Races:</p>
        <div class="btn-group-vertical">
            <button type="button" class="btn btn-secondary px-4" v-on:click="selectRace('Dark Elves')">Dark Elves</button>
            <button type="button" class="btn btn-secondary" v-on:click="selectRace('High Elves')">High Elves</button>
            <button type="button" class="btn btn-secondary" v-on:click="selectRace('Lizardmen')">Lizardmen</button>
            <button type="button" class="btn btn-secondary" v-on:click="selectRace('Skaven')">Skaven</button>
            <button type="button" class="btn btn-secondary" v-on:click="selectRace('Tomb Kings')">Tomb Kings</button>
            <button type="button" class="btn btn-secondary" v-on:click="selectRace('Vampire Coast')">Vampire Coast</button>
        </div>
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
            console.log('RaceSelector: ', race);
            this.selection = race;
            this.$emit('raceSelected', race)
            ApiService.get("talent/get")
                .then(({data}) => {
                console.log('here is data!', data)
            })
        }
    }
};
</script>

<style>
</style>
