<template>
    <div class="col-12 col-md-4">
        <p>{{ grammerEditor(this.selection) }} Lords:</p>
        <div class="btn-group-vertical">
            <button v-for="lord in lords" type="button" class="btn btn-info">
               {{lord}}
            </button>
        </div>
        <p class="mt-3">{{ grammerEditor(this.selection) }} Legendary Lords:</p>
        <div class="btn-group-vertical">
            <button v-for="lord in legendaryLords" type="button" class="btn btn-info">
               {{lord}}
            </button>
        </div>
    </div>
</template>

<script>
import ApiService from '@/services/apiService';

export default {
    name: 'LordSelector',
    props: {
        selection: String,
    },
    data () {
        return {
            lords: ['Choose a race...'],
            legendaryLords: ['choose a race...'],
            raceLords: {
                'Dark Elves': ['Dreadlord (Sword & Shield)', 'Dreadlord (Sword & Crossbow)', 'High Beastmaster', 'Supreme Sorceress (Beasts)', 'Supreme Sorceress (Fire)', 'Supreme Sorceress (Shadow)' ,'Supreme Sorceress (Death)', 'Supreme Sorceress (Darkness)'],
                'High Elves': ['Prince', 'Princess'],
                'Lizardmen': ['Saurus Old-Blood', 'Slann Mage-Priest (Heavens)', 'Slann Mage-Priest (High)', 'Slann Mage-Priest (Light)', 'Red Crested Skink Chief'],
                'Skaven': ['Warlord', 'Grey Seer (Plague)', 'Grey Seer (Ruin)', 'Warlock Master'],
                'Tomb Kings': ['Tomb King'],
                'Vampire Coast': ['Vampire Fleet Admiral (Pistol-Death)', 'Vampire Fleet Admiral (Pistol-Deep)', 'Vampire Fleet Admiral (Pistol-Vampires)', 'Vampire Fleet Admiral (Polearm-Death)', 'Vampire Fleet Admiral (Polearm-Deep)', 'Vampire Fleet Admiral (Polearm-Vampires)']

            },
            raceLegends: {
                'Dark Elves': ['Malekith', 'Morathi', 'Hellebron', 'Lokhir Fellheart', 'Mallus Darkblade'],
                'High Elves': ['Tyrion', 'Teclis', 'Alarielle the Radiant', 'Alith Anar'],
                'Lizardmen': ['Lord Mazdamundi', 'Kroq-Gar', 'Tehenhauin', "Tiktaq'to"],
                'Skaven': ['Queek Headtaker', 'Lord Skrolk', 'Tretch Craventail', 'Ikit Claw'],
                'Tomb Kings': ['Settra the Imperishable', 'Arkhan the Black', 'High Queen Khalida', 'Grand Hierophant Khatep'],
                'Vampire Coast': ['Luthor Harkon', 'Count Noctilus', 'Aranessa Saltspite', 'Cylostra Direfin']
            }
        }
    },
    methods: {
        setRace() {
            if (!this.selection) {
                this.lords = ['...'];
                this.legendaryLords = ['...'];
            }
            this.lords = this.raceLords[this.selection];
            this.legendaryLords = this.raceLegends[this.selection];
        },
        selectLord(lord) {
            ApiService.get("talent/get")
                .then(({data}) => {
                console.log('here is data!', data)
                })
        },
        grammerEditor(race) {
            // if faction name is plural make it singular
            if (!race) return;
            let raceArr = race.split('');
            if (raceArr[raceArr.length-1] === 's') {
                raceArr.pop();
                // deal with elves irregular plural form
                if (raceArr[raceArr.length-1] === 'e' && raceArr[raceArr.length-2] === 'v') {
                    raceArr.splice(-2, 2);
                    raceArr.push('f');
                }
                raceArr = raceArr.join('');
                return raceArr
            } else {
                return race
            }
        }
    },
    beforeUpdate() {
        this.setRace();
    }
};
</script>
