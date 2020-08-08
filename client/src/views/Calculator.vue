<template>
    <div v-if="skills.length > 0" class="container-fluid calc-border calc" :style="getBackground()">
        <div class="header-padding">
            <div class="row navbar navbar-expand-lg navbar-light fixed-top top-bar">
                <div class="col left-nav">
                    <button @click="resetPoints()" type="button" class="btn btn-info">Reset</button>
                    <button @click="$router.push('/')" type="button" style="marginLeft:20px;" class="btn btn-info">Back</button>
                </div>
                <div class="col lord-name">
                    {{lord.charAt(0).toUpperCase() + lord.slice(1)}}
                </div>
                <div class="col right-nav">
                    <p>Current Level: {{lordLevel}}</p>
                </div>
            </div>
        </div>
        <div v-for="(row, index) in rows" :key="index" class="row calc-row">
            <CalcRow
                @skillClick="skillClick"
                @skillRightClick="skillRightClick"
                :row="row" 
                :color="index" 
                :rowState="calcState[index]"
                :lordLevel="lordLevel" 
                :skills="skillAllocation(row)" />
        </div>
        <div class="bottom-bar"></div>
    </div>
</template>

<script>
import CalcRow from '@/components/calculator/CalcRow.vue';
import ApiService from '@/services/apiService';

export default {
    name: 'Calculator',
    components: {
        CalcRow
    },
    props: ['race', 'lord'],
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
            lordLevel: 1
        }
    },
    methods: {
        skillAllocation(row) {
            // grab all skill names from each row
            let skillNames = [];
            let skillsObject = {};
            if (row) {
                // push each skill name to skillList array per row
                let blockContent
                for (let i = 0; i < row.content.length; i++) {
                    blockContent = row.content[i].blockContent;
                    for (let j = 0; j < blockContent.length; j++) {
                        skillNames.push(blockContent[j])
                    }
                }
                // poplate list of needed skills per row
                for (let i = 0; i < skillNames.length; i++) {
                    let skill = this.skills.find((skill) => skill.name === skillNames[i]);
                    skillsObject[skillNames[i]] = skill
                }
            }
            
            // create object with skills to pass to row

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
                    // skill is an array of a blocks skills
                    let skill = content[j].blockContent;
                    // block containts restrictions and all skills pertaining to those restrictions
                    let block = content[j];
                    for (let k = 0; k < skill.length; k++) {
                        let skillName = skill[k];
                        calcState[rowName][skillName] = { 
                            name: skillName, 
                            value: 0, 
                            blockMember: (skill.length > 1) ? j : null,
                            // If NOT on the first iteration find out if skill is the blockLeader
                            blockLeader: (j === 0) ? null : (content[j - 1].blockContent.length > 1) ? j - 1 : null,
                            restrictionLevel: block.restrictionLevel || null, 
                            restrictionLimited: block.restrictionLimited || null, 
                            restrictionChoice: block.restrictionChoice || null, 
                            restrictionCount: block.restrictionCount || null 
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
        getBackground() {
            let background, top, bottom;
            try {
                background = require('@/assets/parchment-wh2.png');
                top = require('@/assets/parchment-top-stain-wh2.png');
                bottom = require('@/assets/parchment-bottom-stain-wh2.png');
                return { 'backgroundImage': 'url(' + background + '), url(' + top + '), url(' + bottom + ')' }
            } catch {
                return ''
            }
        }
    },
    created() {
        ApiService.get("talent/getRows") // TODO: change to get by props race and lord current response is static
            .then(({data}) => {
                let row = data.response;
                let rowName;
                for (let i = 0; i < row.length; i++) {
                    rowName = 'row' +  row[i].row
                    this.rows[rowName] = row[i];
                }
                this.setCalcState(data.response);
            })
        ApiService.get("/talent/getSkills")
            .then(({data}) => {
                this.skills = data.response;
            })
    }
}

</script>

<style>
.inline {
    display: inline-block;
}
.calc {
    background-color: #c9c5bc;
    min-height: 100vh;
    background-repeat: no-repeat;
    background-position: center, left top 90px, right bottom;
}
.calc-row {
    height: 80px;
    margin: 20px;
    padding: 0 40px;
}
.calc-border {
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
}
.top-bar {
    padding: 30px 75px;
    background-color: darkgrey;
    color: black;
    font-weight: 800;
}
.left-nav {
    text-align: left;
}
.lord-name {
    font-weight: 600;
    font-size: 1.4em;
}
.right-nav {
    text-align: right;
}
.right-nav p {
    margin-bottom: 0px;
}
.header-padding {
    padding-bottom: 160px;
}

</style>