<template>
    <div v-cloak id="calculator" v-if="skills.length > 0" :class="styleGuide" class="container-fluid calc-border calc unselectable" :style="getBackground(this.styleGuide)">
        <div class="header-padding">
            <div class="row navbar navbar-expand-lg navbar-light fixed-top top-bar" :style="getHeaderBackground(this.styleGuide, 'panel-tile')">
                <div class="left-nav action-items">
                    <a @click="$router.push('/' + race + legendary )" type="button" :style="getAsset(this.styleGuide, 'home')">Back</a>
                    <a @click="resetPoints()" type="button" style="marginLeft:20px;" :style="getAsset(this.styleGuide, 'reset')"></a>
                    <a @click="changeStyle()" type="button" style="marginLeft:20px;" :style="getAsset(this.styleGuide, 'icon-wh')"></a>
                </div>
                <div class="middle-nav lord-name" :style="getHeaderBackground(this.styleGuide, 'title-large')">
                    <p>{{getProperName()}}</p>
                </div>
                <div class="right-nav level" :style="getHeaderBackground(this.styleGuide, 'level-frame')">
                    <p>{{lordLevel}}</p>
                </div>
            </div>
        </div>
        <div v-for="(row, index) in rows" :key="index" class="row calc-row" id="calc">
            <CalcRow
                @skillClick="skillClick"
                @skillRightClick="skillRightClick"
                :row="row" 
                :color="index" 
                :rowState="calcState[index]"
                :calcState="calcState"
                :lordLevel="lordLevel" 
                :skills="skillAllocation(row)"
                :styleGuide="styleGuide" />
        </div>
        <div style="paddingBottom: 140px"></div>
    </div>
</template>

<script>
import CalcRow from '@/components/calculator/CalcRow.vue';
import ApiService from '@/services/apiService';
import LordKey from '@/services/lordKey';

export default {
    name: 'Calculator',
    components: {
        CalcRow
    },
    props: ['race', 'lord', 'type'],
    data: function () {
        return {
            rows: {
                row1: undefined,
                row2: undefined,
                row3: undefined,
                row4: undefined,
                row5: undefined,
                row6: undefined,
                row7: undefined,
                row8: undefined,
                row9: undefined
            },
            skills: [],
            calcState: {},
            saveState: {},
            skillPointAllocation: {},
            lordLevel: 1,
            legedary: '/',
            styleGuide: 'wh2',
            secret: false
        }
    },
    methods: {
        skillAllocation(row) {
            // grab all skill references from each row
            let skillRefs = [];
            let skillsObject = {};
            if (row) {
                // push each skill reference to skillList array per row
                let blockContent
                for (let i = 0; i < row.content.length; i++) {
                    blockContent = row.content[i].blockContent;
                    for (let j = 0; j < blockContent.length; j++) {
                        // if else check due to skaven having a restrictionLimited pair inside a block -_-
                        if (typeof(blockContent[j]) == 'object') continue;
                        else skillRefs.push(blockContent[j])
                    }
                }
                // populate list of needed skills per row
                for (let i = 0; i < skillRefs.length; i++) {
                    let skill = this.skills.find((skill) => skill.ref === skillRefs[i]);
                    skillsObject[skillRefs[i]] = skill
                }
            }
            // return object
            return skillsObject
        },
        setCalcState(data) {
            // temp value to build out calc state
            let calcState = {};
            // triple for loop undesirable but will stay until VueX is implemented
            for (let i = 0; i < data.length; i++) {
                let rowName = 'row'+ data[i].row;
                calcState[rowName] = {};
                let content = data[i].content;
                for (let j = 0; j < content.length; j++) {
                    // if quest value will be set to -1
                    let quest = content[j].quest;
                    // skill is an array of a blocks skills
                    let skill = content[j].blockContent;
                    // block containts restrictions and all skills pertaining to those restrictions
                    let block = content[j];
                    for (let k = 0; k < skill.length; k++) {
                        // restrictionLimited pair inside a block -_-
                        let skillName = (typeof(skill[k]) == 'object') ? skill[k].name : skill[k];
                        calcState[rowName][skillName] = { 
                            name: skillName, 
                            value: quest ? -1 : 0, 
                            blockMember: (skill.length > 1) ? j : null,
                            // If NOT on the first iteration find out if skill is the blockLeader
                            blockLeader: (j === 0) ? null : (content[j - 1].blockContent.length > 1) ? j - 1 : null,
                            restrictionLevel: block.restrictionLevel || null, 
                            restrictionLimited: (typeof(skill[k]) == 'object') ? skill[k].restrictionLimited || null : block.restrictionLimited || null, 
                            restrictionChoice: block.restrictionChoice || null, 
                            restrictionCount: block.restrictionCount || null,
                            quest: block.quest || null
                        }
                    }
                }
            }
            // Make a copy of calcState to revert to upon reset
            this.saveState = JSON.parse(JSON.stringify(calcState));
            this.calcState = calcState;
        },
        skillClick(name, row) {
            this.lordLevel++;
            let rowName = 'row' + row;
            this.calcState[rowName][name].value++;
        },
        skillRightClick(name, row) {
            this.lordLevel--;
            let rowName = 'row' + row;
            this.calcState[rowName][name].value--;
        },
        resetPoints() {
            this.lordLevel = 1;
            this.calcState = JSON.parse(JSON.stringify(this.saveState));
        },
        changeStyle() {
            this.styleGuide = (this.styleGuide === 'wh2') ? 'wh1' : 'wh2';
        },
        getBackground(style) {
            let background, top, bottom, save;
            if (this.secret) style = 'whS'
            try {
                background = require('@/assets/' + style + '/parchment.png');
                top = require('@/assets/' + style + '/parchment-top-stain.png');
                bottom = require('@/assets/' + style + '/parchment-bottom-stain.png');
                return { 'backgroundImage': 'url(' + background + '), url(' + top + '), url(' + bottom + ')' }
            } catch {
                return ''
            }
        },
        getHeaderBackground(location, item) {
            try {
                item = require('@/assets/' + location + '/' + item + '.png');
                return { 'backgroundImage': 'url(' + item + ')' };
            } catch {
                return '';
            }
        },
        getAsset(location, item) {
            try {
                item = require('@/assets/'+ location +'/' + item + '.png');
                return { 'content': 'url(' + item + ')' };
            } catch {
                return '';
            } 
        },
        getProperName() {
            // let classification = this.type === 'legendary' ? 'legendary' : 'lords';
            // combine legendary and lord array into one
            let races = LordKey.legendary[this.race].concat(LordKey.lords[this.race]);
            for (let i = 0; i < races.length; i++) {
                if (this.lord === races[i].type && this.type === races[i].subType) {
                    (races[i].legendary) ? this.legendary = '/legend' : this.legendary = '/';
                    return races[i].name
                } else if (this.lord === races[i].type && races[i].school && races[i].school.includes(this.type)) {
                    (races[i].legendary) ? this.legendary = '/legend' : this.legendary = '/';
                    let magicType = this.type
                    magicType = magicType.charAt(0).toUpperCase() + magicType.slice(1).split(/(?=[A-Z])/).join(' ');
                    return races[i].name + ' (' + magicType + ')'
                }
            }
        },
        secretMethod() {
            this.secret = false
            if (this.lord === 'alarielle' || this.lord === 'princess') {
                if (Math.floor(Math.random()*10) === 1) this.secret = true 
            }
        }
    },
    created() {
        this.secretMethod();
        let query = this.race + '/' + this.lord
        if (this.type && this.type !== 'legendary') query = query + '/' + this.type
        ApiService.get("talent/getRows", query)
            .then(({data}) => {
                this.setCalcState(data.rows);
                this.skills = data.skills
                let row = data.rows;
                let rowName;
                for (let i = 0; i < row.length; i++) {
                    rowName = 'row' +  row[i].row
                    this.rows[rowName] = row[i];
                }
            })

        // set wh asset style based on race
        let wh2Races = ['darkelves', 'highelves', 'lizardmen', 'skaven', 'tombkings', 'vampirecoast']
        wh2Races.includes(this.race) ? this.styleGuide = 'wh2' : this.styleGuide = 'wh1';
    }
}

</script>

<style>
.inline {
    display: inline-block;
}
.calc {
    background-color: #c9c5bc;
    /* horizontal scroll messes with the height so we negate the height from the vh */
    min-height: calc(100vh - 17px);
    background-repeat: no-repeat;
    background-position: center, left top 90px, right bottom;
    background-attachment: fixed;
    font-size: .95em;
    display: table;
    /* overflow: inherit; */
}
.calc-row {
    height: 80px;
    margin: 20px;
    padding: 0 40px;
}
.calc-border {
    white-space: nowrap;
}
.top-bar {
    padding: 10px 75px;
    height: 94px;
    background-color: darkgrey;
    color: black;
    font-weight: 800;
}
.left-nav {
    text-align: left;
    display: inline-block;
    width: 20%;
}
.lord-name {
    background-position: center;
    background-repeat: no-repeat;
    height: 68px;
    width: 60%;
    font-weight: 600;
    font-size: 1.2em;
    color: #EBE6CD;
}
.lord-name p {
    padding-top: 20px;
}
.right-nav {
    width: 20%;
    text-align: right;
}
.right-nav p {
    margin-bottom: 0px;
    padding-right: 12px;
}
.header-padding {
    padding-bottom: 160px;
}
.navbar {
    background-position: bottom;
}
.action-items {
    height: 56px;
}
.level {
    background-repeat: no-repeat;
    background-position: right;
    height: 65px;
    margin-bottom: 1px;
}
.level p {
    display: inline-block;
    color: #EBE6CD;
    padding-top: 20px;
    padding-right: 15px;
    width: 60px;
    text-align: center;
}
.level span {
    color: #EBE6CD;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    width: 45px;
}
</style>