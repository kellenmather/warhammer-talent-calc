<template>
    <div v-if="skills.length > 0" class="container-fluid calc-border calc">
        <div class="top-bar"></div>
        <div v-for="(row, index) in rows" :key="index" class="row calc-row">
            <CalcRow :row="row" :color="index" :skills="skillAllocation(row)" />
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
            skillPointAllocation: {}
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
            console.log('this is what im playing with: ', data);
            let calcState = {};
            for (let i = 0; i < data.length; i++) {
                let rowName = 'row'+ data[i].row
                calcState[rowName] = {};
                console.log(data[i]);
                let content = data[i].content
                for (let j = 0; j < content.length; j++) {
                    // here we have restricitons
                    // console.log(...calcState[rowName]);
                    let skill = content[j].blockContent
                    for (let k = 0; k < skill.length; k++) {
                        // here we have skill names
                        console.log('skill: ', skill[k]);
                        let skillName = skill[k]
                        // calcState[rowName] = { [skillName]: {} }
                        calcState[rowName][skillName] = { name: skillName, value: 0, restrictionLevel: content[j].restrictionLevel || null, restrictionLimited: content[j].restrictionLimited || null, restrictionChoice: content[j].restrictionChoice || null, restrictionCriteria: content[j].restrictionCriteria || null }
                    }
                    // let skill = content[j]
                    // calcState[rowName] = { content[j]: 'test' }
                    // content[j]
                    // we also have blockContent array of strings which are skill names

                }
            }
            console.log(calcState);
            // this is calcState!
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
}
.calc-row {
    height: 80px;
    margin: 20px;
}
.calc-border {
    padding: 120px 40px 80px 40px;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
}
</style>