<template>
    <div class="lord-selector col-12 col-md-5" :style="getAssets('plaque')">
        <ul v-if="selection">
            <li class="lord-header">
                <a @click="changeLords()" :style="getAssets(getBanner())" type="button" :disabled="!selection"></a>
            </li>
        </ul>
        <ul v-if="showLords">
            <li v-for="(lord, index) in lords" :key="index" >
                <a @click="selectLord(lord)" :style="getAssets('button-home')" type="button" class="lord-button" :disabled="!selection">
                    {{lord.name}}
                </a>
            </li>
        </ul>
        <ul v-else> 
            <li v-for="(lord, index) in legendaryLords" :key="index">
                <a @click="selectLord(lord)" :style="getAssets('button-ll')" type="button" class="lord-button" :disabled="!selection">
                    {{lord.name}}
                </a>
            </li>
        </ul>
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
            showLords: true,
            lords: [],
            legendaryLords: [],
            // TODO: move race lords and legendary to js file
            raceLords: {
                'Dark Elves': [
                    { name: 'Dreadlord (Sword & Shield)', type: 'dreadlord', subType: 'shield' }, 
                    { name: 'Dreadlord (Sword & Crossbow)', type: 'dreadlord', subType: 'crossbow' }, 
                    { name: 'High Beastmaster', type: 'beastmaster' }, 
                    { name: 'Supreme Sorceress (Beasts)', type: 'sorceress', subType: 'beasts' }, 
                    { name: 'Supreme Sorceress (Fire)', type: 'sorceress', subType: 'fire' }, 
                    { name: 'Supreme Sorceress (Shadow)', type: 'sorceress', subType: 'shadow' }, 
                    { name: 'Supreme Sorceress (Death)', type: 'sorceress', subType: 'death' }, 
                    { name: 'Supreme Sorceress (Darkness)', type: 'sorceress', subType: 'darkness' },
                    { name: 'Black Ark', type: 'blackark', subType: 'crossbow' }
                ],
                'High Elves': [
                    { name: 'Prince', type: 'prince' }, 
                    { name: 'Princess', type: 'princess' }
                ],
                'Lizardmen': [
                    { name: 'Saurus Old-Blood', type: 'saurus' }, 
                    { name: 'Slann Mage-Priest (Heavens)', type: 'slann', subType: 'heavens' },
                    { name: 'Slann Mage-Priest (High)', type: 'slann', subType: 'high' }, 
                    { name: 'Slann Mage-Priest (Light)', type: 'slann', subType: 'light' },
                    { name: 'Red Crested Skink Chief', type: 'skink' }
                ],
                'Skaven': [
                    { name: 'Warlord', type: 'warlord' }, 
                    { name: 'Grey Seer (Plague)', type: 'seer', subType: 'plague' },
                    { name: 'Grey Seer (Ruin)', type: 'seer', subType: 'ruin' },
                    { name: 'Warlock Master', type: 'warlock' }
                ],
                'Tomb Kings': [
                    { name: 'Tomb King', type: 'tomb' }
                ],
                'Vampire Coast': [
                    { name: 'Vampire Fleet Admiral (Pistol-Death)', type: 'pistol', subType: 'death' }, 
                    { name: 'Vampire Fleet Admiral (Pistol-Deep)', type: 'pistol', subType: 'deep' },
                    { name: 'Vampire Fleet Admiral (Pistol-Vampires)', type: 'pistol', subType: 'vampires' },
                    { name: 'Vampire Fleet Admiral (Polearm-Death)', type: 'polearm', subType: 'death' },
                    { name: 'Vampire Fleet Admiral (Polearm-Deep)', type: 'polearm', subType: 'deep' },
                    { name: 'Vampire Fleet Admiral (Polearm-Vampires)', type: 'polearm', subType: 'vampires' }
                ]
            },
            raceLegends: {
                'Dark Elves': [
                    { name: 'Malekith', type: 'malekith', subType: 'legendary' }, 
                    { name: 'Morathi', type: 'morathi', subType: 'legendary' }, 
                    { name: 'Hellebron', type: 'hellebron', subType: 'legendary' },
                    { name: 'Lokhir Fellheart', type: 'lokhir', subType: 'legendary' },
                    { name: 'Mallus Darkblade', type: 'mallus', subType: 'legendary' }
                ],
                'High Elves': [
                    { name: 'Tyrion', type: 'tyrion', subType: 'legendary' }, 
                    { name: 'Teclis', type: 'teclis', subType: 'legendary' },
                    { name: 'Alarielle the Radiant', type: 'alarielle', subType: 'legendary' },
                    { name: 'Alith Anar', type: 'alith', subType: 'legendary' }
                ],
                'Lizardmen': [
                    { name: 'Lord Mazdamundi', type: 'mazdamundi', subType: 'legendary' },
                    { name: 'Kroq-Gar', type: 'kroqgar', subType: 'legendary' },
                    { name: "Tehenhauin", type: 'tehenhauin', subType: 'legendary' },
                    { name: "Tiktaq'to", type: "tiktaqto", subType: 'legendary' }
                ],
                'Skaven': [
                    { name: 'Queek Headtaker', type: 'queek', subType: 'legendary' },
                    { name: 'Lord Skrolk', type: 'skrolk', subType: 'legendary' },
                    { name: 'Tretch Craventail', type: 'tretch', subType: 'legendary' },
                    { name: 'Ikit Claw', type: 'ikit', subType: 'legendary' }
                ],
                'Tomb Kings': [
                    { name: 'Settra the Imperishable', type: 'settra', subType: 'legendary' },
                    { name: 'Arkhan the Black', type: 'arkhan', subType: 'legendary' },
                    { name: 'High Queen Khalida', type: 'khalida', subType: 'legendary' },
                    { name: 'Grand Hierophant Khatep', type: 'khatep', subType: 'legendary' }
                ],
                'Vampire Coast': [
                    { name: 'Luthor Harkon', type: 'harkon', subType: 'legendary' },
                    { name: 'Count Noctilus', type: 'noctilus', subType: 'legendary' },
                    { name: 'Aranessa Saltspite', type: 'aranessa', subType: 'legendary' }, 
                    { name: 'Cylostra Direfin', type: 'cylostra', subType: 'legendary' }
                ]
            }
        }
    },
    methods: {
        setRace() {
            if (this.selection) {
                this.lords = this.raceLords[this.selection];
                this.legendaryLords = this.raceLegends[this.selection];
            }
        },
        selectLord(lord) {
            let race = this.selection.toLowerCase().split(' ').join('')
            // endpoint requires race and type with optional subtype
            if(!race || !lord) {
                this.$router.push('/');
            } else {
                this.$router.push("/calc/" + race + "/" + lord.type + "/" + ((lord.subType) ? lord.subType : ''));
            }            
        },
        getAssets(item) {
            item = require('@/assets/home/' + item + '.png');
            return { 'backgroundImage': 'url(' + item + ')' };
        },
        getBanner() {
            return this.showLords ? 'banner-lords' : 'banner-legendary'
        },
        changeLords() {
            this.showLords ? this.showLords = false : this.showLords = true;
        }
    },
    watch: {
        selection: function() {
            this.setRace();
        }
    },
    beforeUpdate() {
        this.setRace();
    }
};
</script>

<style>
.lord-selector {
    padding-top: 55px;
    background-position: center top 30px;
    background-repeat: no-repeat;
    height: 710px;
}
.lord-selector ul {
    list-style-type: none;
    padding-left: 0px;
    margin-bottom: 0px;
}
.lord-selector ul li {
    padding: 10px 0;
    width: 100%;
}
.lord-button {
    display: inline-block;
    background-position: center;
    background-repeat: no-repeat;
    min-width: 350px;
    height: 41px;
    padding-top: 6px;
}
.lord-header {
    padding: 0px;
    height: 68px;
}
.lord-header a {
    display: inline-block;
    background-position: center;
    background-repeat: no-repeat;
    min-width: 350px;
    height: 58px;
}
</style>