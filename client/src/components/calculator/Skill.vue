<template>
    <div @mouseover="showPopup()" @mousemove="mouseMove" @mouseleave="hidePopup()" class="skill-bg" >
        <div @click="onClick" @contextmenu.prevent="onRightClick" class="inline-block skill-name unselectable" :style="isSelected()">{{ block }}</div>
        <div class="inline-block skill-ranks">
            <div 
                v-for="(rank, index) in skill.ranks" 
                :key="index" 
                @mouseover="showRank(index + 1)" 
                @mouseleave="hideRank()" 
                class="rank-class" 
                :style="[rankHeight(skill.ranks.length), isSelected(index)]">
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
import Skill from '@/components/calculator/Skill.vue';
import Popup from '@/components/calculator/Popup.vue';

export default {
    name: 'CalcRow',
    components: {
        Skill,
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
        rankHeight(ranks) {
            let percentage = 100 / ranks;
            return {height: percentage + '%'};
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
        isSelected(index) {
            if (this.skillState[this.block].value === 0) {
                return '';
            } else {
                let buttonColor;
                if (this.color === 'row6') buttonColor = '#e13d39';
                else if (this.color === 'row9') buttonColor = '#3BC4D3';
                else buttonColor = '#f3ad2d';
                if (index && (index +1) > this.skillState[this.block].value) return '';
                return {backgroundColor: buttonColor};
            }
        },
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
.skill-name {
    height: 57px;
    width: 178px;
    vertical-align: top;
    cursor: context-menu;
    /* color: #EBE6CD; */
}
.skill-ranks {
    width: auto;
    /* height: 100%; */
    height: 57px;
    overflow: hidden;
}
.skill-ranks div {
    border-left: 1px solid grey;
    border-bottom: 1px solid grey;
}
.skill-ranks div:last-child {
    border-bottom: none;
}
.inline-block {
    display: inline-block;
}
.rank-class {
    display: block;
    /* height is set programatically through inline style */
    width: 19px;
}
.skill-bg {
    background-color: #a5a5a5;
    height: 57px;
    width: 100%;
}
</style>
