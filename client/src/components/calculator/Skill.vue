<template>
    <div @mouseover="showPopup()" @mousemove="mouseMove" @mouseleave="hidePopup()" :style="getBorder()" class="skill-button" >
        <div @click="onClick" @contextmenu.prevent="onRightClick" class="skill-icon inline-block unselectable" :style="getIcon(skill.icon)"></div>
        <div @click="onClick" @contextmenu.prevent="onRightClick" class="skill-name inline-block unselectable" :style="isObtained()"><span class="position-block"><p>{{ block }}</p></span></div>
        <div class="skill-ranks" :style="(skill.ranks.length === 1) ? 'marginTop:20px;' : (skill.ranks.length === 2) ? 'marginTop:10px;' : '' ">
            <div 
                v-for="(rank, index) in skill.ranks" 
                :key="index" 
                @mouseover="showRank(index + 1)" 
                @mouseleave="hideRank()" 
                class="skill-rank" 
                :style="[obtainedRank(skillState[block].value, index)]">
            </div>
        </div>
            <Popup 
                :info="skill" 
                :currentRank="skillState[block].value" 
                :ranks="skill.ranks.length" 
                :specificRank="specificRank"
                :disabled="disabled"
                :disabledReason="disabledReason"
                :top="top"
                :left="left"
                v-if="displayPopup && skill" />
    </div>
</template>

<script>
import Popup from '@/components/calculator/Popup.vue';

export default {
    name: 'CalcRow',
    components: {
        Popup
    },
    props: {
        skill: Object,
        block: String,
        color: String,
        skillState: Object,
        lordLevel: Number
    },
    data() {
        return {
            displayPopup: false,
            specificRank: 0,
            disabled: false,
            rcDisabled: false,
            disabledReason: '',
            top: 56,
            left: 30,
            window: {
                width: 0,
                height: 0
            }
        }
    },
    methods: {
        showPopup: function() {
            this.$el.addEventListener('mousemove', this.mouseMove, false);
            this.displayPopup = true;
        },
        hidePopup: function() {
            this.$el.removeEventListener('mousemove', this.mouseMove);
            this.displayPopup = false;
        },
        mouseMove(event) {

            let obj = this
            let mouseX, 
                mouseY, 
                elementX = 0, 
                elementY = 0

            // if (!event) {event = window.event}
            if (event.pageX || event.pageY) {
                mouseX = event.pageX;
                mouseY = event.pageY;
            }
            if (obj.$el.offsetParent) {
                do {
                    elementX += obj.$el.offsetLeft;
                    elementY += obj.$el.offsetTop;
                } while (obj = obj.offsetParent);
            }

            // check to see if popup would extend off page and set left accordingly
            // TODO: gradually change how far left it goes based on calculated values
            if (this.window.width < mouseX + 620) {
                this.left = (mouseX - elementX - 620);
            } else {
                this.left = (mouseX - elementX + 20);
            }
            // TODO: add check so popup doesn't extend off bottom of screen
            this.top = (mouseY - elementY + 20);
        },
        showRank: function(rank) {
            this.specificRank = rank;
        },
        hideRank: function() {
            this.specificRank = 0;
        },
        onClick() {
            if (!this.disabled && this.skillState[this.block].value !== this.skill.ranks.length) {
                this.$emit('skillClick', this.block);
            };
        },
        onRightClick() {
            if (!this.rcDisabled && this.skillState[this.block].value > 0) {
                this.$emit('skillRightClick', this.block);
            }
        },
        isObtained(index) {
            if (this.skillState[this.block].value === 0) {
                return '';
            } else {
                let buttonColor;
                if (this.color === 'row6') buttonColor = '#e13d39';
                else if (this.color === 'row9') buttonColor = '#3BC4D3';
                else buttonColor = '#f3ad2d';
                return {backgroundColor: buttonColor};
            }
        },
        obtainedRank(rank, index) {
            console.log('hit');
            let talentSkill;
            // if rank === index +1 return lit version else not
            if (rank > index) {
                let skillColor = (this.color === 'row6') ? 'red' : (this.color === 'row9') ? 'blue' : 'yellow';
                try {                
                    talentSkill = require('@/assets/skillStyles/skill-rank-' + skillColor + '.png');
                    return { 'content': 'url(' + talentSkill + ')' };
                } catch {
                    return ''
                }
            } else {
                try {                
                    talentSkill = require('@/assets/skillStyles/skill-rank.png');
                    return { 'content': 'url(' + talentSkill + ')' };
                } catch {
                    return ''
                }
            }
        },
        // getSkillRank() {
        //     let talentSkill;
        //     try {                
        //         talentSkill = require('@/assets/skillStyles/skill-rank.png');
        //         return { 'content': 'url(' + talentSkill + ')' };
        //     } catch {
        //         return ''
        //     }
        // },
        isDisabled() {
            let skillData = this.skillState[this.block];
            let levelRestriction = skillData.restrictionLevel;
            let skillRestriction = skillData.restrictionChoice;
            let pointRestriction = skillData.restrictionCount;
            let chooseOneRestriction = skillData.restrictionLimited;
            
            this.disabled = false;
            this.disabledReason = '';

            // We have 5 distinct states that can disable a button from being clicked:
            // 1: Lord hits max level
            if (this.lordLevel === 40) {
                this.disabled = true;
                this.disalbedReason = 'Max Level Reached';
                return;
            }

            // 2: Lord level
            if (this.lordLevel < levelRestriction - 1 ) {
                this.disabled = true;
                this.disabledReason = 'Lord level required: ' + levelRestriction;
                return;
            }

            // 3: Skills that lock other skills
            if (chooseOneRestriction && chooseOneRestriction.length > 0) {
                // check skillState for the value of the restricted skills

                for (let i = 0; i < chooseOneRestriction.length; i++) {                    
                    if (this.skillState[chooseOneRestriction[i]].value > 0) {
                        // if any of the skills have a value greater than 0 this skill shall be disabled
                        this.disabled = true;
                        this.disabledReason = 'Locked by skill: ' + chooseOneRestriction[i];
                        return;
                    }
                }
            }

            // 4: Skill has a prerequisite of another skill
            if (skillRestriction) {
                if (this.skillState[skillRestriction].value === 0) {
                    this.disabled = true;
                    this.disabledReason = "Available after unlocking: " + skillRestriction;
                }
            }

            // 5: Skill has multiple prerequisites of the previous block
            if (pointRestriction) {
                
                // blockLeader value tells us this skill has an associated block of skills
                if (skillData.blockLeader) {

                    let pointCount = 0
                    for(let item in this.skillState) {

                        if (this.skillState[item].blockMember === skillData.blockLeader) {
                            pointCount += this.skillState[item].value;
                        }
                    }
                    if (pointCount < pointRestriction) {
                        this.disabled = true;
                        this.disabledReason = "Available after spending " + pointRestriction + " skill points in the previous group.";
                    }
                }
            }
        },
        isRightClickDisabled() {
            // this needs total rework
            let skillData = this.skillState[this.block];
            let levelRestriction = skillData.restrictionLevel;
            this.rcDisabled = false;

            if ((this.lordLevel - 1) === levelRestriction) {
                this.rcDisabled = true;
            }
        },
        handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
        },
        handleScroll() {
            console.log('width here:');
        },
        getBorder() {
            let border;
            try {                
                border = require('@/assets/skillStyles/skill-frame.png');
                return { 'backgroundImage': 'url(' + border + ')' };
            } catch {
                return ''
            }
        },
        getIcon(icon) {
            console.log(icon)
            let asset;
            try {                
                asset = require('@/assets/largeIcons/' + icon + '.png');
                return { 'content': 'url(' + asset + ')' };
            } catch {
                return ''
            }
        }
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        window.addEventListener('scroll', this.handleScroll);
        this.handleResize();
        this.handleScroll();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
        window.removeEventListener('scroll', this.handleScroll);
    },
    beforeUpdate() {
        this.isDisabled();
        this.isRightClickDisabled();
    }
};
</script>

<style>

.skill-icon {
    width: 72px;
    height: 72px;
    margin-top: -5px;
    position: absolute;
    left: 30px;
}
.skill-ranks {
    position: absolute;
    height: 60px;
    top: 2px;
    left: 203px;
}
.skill-rank {
    display: block;
    width: 16px;
    max-height: 20px;
}
.skill-name {
    margin-top: 11px;
    margin-left: 65px;
    padding-left: 30px;
    height: 43px;
    width: 136px;
    cursor: context-menu;
    font-size: .8em;
    /* color: #EBE6CD; */
}
.position-block {
    display:table;
    position: absolute;
    word-wrap: normal;
    line-height:normal;
    width: 100px;
    height: 43px;
    left: 102px;
}
.position-block p {
    display: table-cell;
    vertical-align: middle;
    position: relative;
    font-style: italic;
    word-wrap: break-word;
    text-align: left;
    white-space: initial;
    font-weight: bold;
    height: 43px;
    vertical-align: middle;
}
.inline-block {
    display: inline-block;
}
.rank-class {
    display: absolute;
    /* height is set programatically through inline style */
    width: 10px;
}

</style>
