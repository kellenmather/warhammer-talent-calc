<template>
    <div class="lord-selector col-12 col-md-5" :style="getAssets('plaque')">
        <ul v-if="selection">
            <li class="lord-header">
                <a @click="changeLords()" :style="getAssets(getBanner())" type="button" :disabled="!selection"></a>
            </li>
        </ul>
        <ul v-if="showLords">
            <li v-for="(lord, index) in lords" :key="index" >
                <a @click="selectLord(lord)" :style="getAssets('button-home')" type="button" class="home-button" :disabled="!selection">
                    {{lord.name}}
                </a>
            </li>
        </ul>
        <ul v-else> 
            <li v-for="(lord, index) in legendaryLords" :key="index">
                <a @click="selectLord(lord)" :style="getAssets('button-ll')" type="button" class="home-button" :disabled="!selection">
                    {{lord.name}}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import ApiService from '@/services/apiService';
import LordKey from '@/services/lordKey'

export default {
    name: 'LordSelector',
    props: {
        selection: String,
    },
    data () {
        return {
            showLords: true,
            lords: [],
            legendaryLords: []
        }
    },
    methods: {
        setRace() {
            if (this.selection) {
                this.lords = LordKey.lords[this.selection];
                this.legendaryLords = LordKey.legendary[this.selection];
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