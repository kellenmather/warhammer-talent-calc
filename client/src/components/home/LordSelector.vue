<template>
    <div class="lord-selector offset-lord-selector unselectable col-12 col-lg-6" :style="getAssets('plaque-banner')">
        <div class="offset-left">
            <ul v-if="selection">
                <li class="lord-header">
                    <a @click="changeLords()" :style="getHeader()" type="button" :disabled="!selection"></a>
                </li>
            </ul>
            <ul v-if="showLords">
                <li v-for="(lord, index) in lords" :key="index" >
                    <div v-if="lord.school" class="banner" :style="getAssets('banner')">
                        <a :style="getAssets('button-home')" class="home-button" :disabled="!selection" style="display:block">
                            {{lord.name}}
                        </a>
                        <div class="spell-schools">
                            <a v-for="(magic, index) in lord.school" :key="index" @click="selectLord(lord, magic)" type="button" :style="getImages('spellSchools/' + magic)" />
                        </div>
                    </div>
                    <div v-else>
                        <a @click="selectLord(lord)" :style="getAssets('button-home')" type="button" class="home-button" :disabled="!selection">
                            {{lord.name}}
                        </a>
                    </div>
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
    </div>
</template>

<script>
import ApiService from '@/services/apiService';
import LordKey from '@/services/lordKey'

export default {
    name: 'LordSelector',
    props: {
        selection: String,
        legendary: String
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
        selectLord(lord, magic) {
            let race = this.selection.toLowerCase().split(' ').join('')
            // endpoint requires race and type with optional subtype
            if(!race || !lord) {
                this.$router.push('/');
            } else {
                this.$router.push("/calc/" + race + "/" + lord.type + "/" + ((lord.subType) ? lord.subType : magic ? magic : ''));
            }            
        },
        getAssets(item) {
            item = require('@/assets/home/' + item + '.png');
            return { 'backgroundImage': 'url(' + item + ')' };
        },
        getImages(item) {
            item = require('@/assets/home/' + item + '.png');
            return { 'content': 'url(' + item + ')' };
        },
        getHeader() {
            let type = this.showLords ? 'lord' : 'legendary'
            let item, left, right;
            item = require('@/assets/home/' + type + '.png');
            right = require('@/assets/home/right-button.png');
            left = require('@/assets/home/left-button.png');

            return { 'backgroundImage': 'url(' + left + '), url(' + item + '), url(' + right + ')' };
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
    created() {
        if (this.legendary === 'legend') this.showLords = false;
        this.setRace();
    }
};
</script>

<style>
@media (min-width: 1046px) {
    .offset-left {
        position: absolute;
        left: calc(15% - 18px);
    }
    .lord-selector.offset-lord-selector {
        background-position: left 15% top 30px;
    }
}

.lord-selector {
    background-position: center top 30px;
    background-repeat: no-repeat;
    height: 710px;
    margin-bottom: 30px;
}
.lord-selector ul {
    list-style-type: none;
    padding-left: 0px;
    margin-bottom: 0px;
}
.lord-selector ul:first-child {
    padding-top: 40px;
}
.lord-selector ul li {
    padding: 13px 0 10px 0;
    width: 100%;
}
.lord-header {
    padding-top: 0px !important;
    padding-bottom: 0px !important;
    height: 70px;
}
.lord-header a {
    display: inline-block;
    background-position: left center, top center, right center;
    background-repeat: no-repeat;
    z-index: 1;
    width: 200px;
    height: 70px;
}
.spell-schools {
    margin: 10px auto 0 auto;
    max-width: 300px;
    padding-bottom: 30px;

}
.spell-schools a {
    margin: 5px 15px;
    height: 56px;
    width: 56px;
    display: inline-block;
}
.banner {
    background-repeat: no-repeat;
    background-position: bottom center;
    background-clip: padding-box;
}

</style>