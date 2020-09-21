<template>
    <div @mouseover="showPopup()" @mousemove="mouseMove" @mouseleave="hidePopup()" class="skill-button unselectable" >
        <div :style="getBorder(skill.quest)" class="skill-border"></div>
        <div @click="onClick" @contextmenu.prevent="onRightClick" class="skill-icon inline-block" :style="getIcon(skill.icon)"></div>
        <div @click="onClick" @contextmenu.prevent="onRightClick" class="skill-name inline-block" :style="isObtained()">
            <span class="position-block">
                <p>{{ skill.name }}</p>
            </span>
        </div>
        <div v-if="!skill.quest && !skillState[block].quest" class="skill-ranks" :style="(skill.ranks.length === 1) ? 'marginTop:23px;' : (skill.ranks.length === 2) ? 'marginTop:15px;' : 'marginTop:7px' ">
            <div 
                v-for="(rank, index) in skill.ranks" 
                :key="index" 
                @mouseover="showRank(index + 1)" 
                @mouseleave="hideRank()" 
                class="skill-rank" 
                :style="[obtainedRank(skillState[block].value, index)]">
            </div>
        </div>
        <div style="position:absolute;">
            <Popup 
                :info="skill" 
                :currentRank="skillState[block].value" 
                :ranks="skill.ranks.length" 
                :specificRank="specificRank"
                :disabled="disabled"
                :disabledReason="disabledReason"
                :quest="skillState[block].quest"
                :top="top"
                :bottom="bottom"
                :left="left"
                v-if="displayPopup && skill" />
        </div>
    </div>
</template>

<script>
import Popup from '@/components/calculator/Popup.vue';
import Gradients from '@/services/gradients';

export default {
    name: 'CalcRow',
    components: {
        Popup
    },
    props: {
        skill: Object,
        // whole skills object being passed because of properName vs referenceName change address better solution later
        skills: Object,
        block: String,
        color: String,
        skillState: Object,
        lordLevel: Number,
        styleGuide: String
    },
    data() {
        return {
            displayPopup: false,
            specificRank: 0,
            disabled: false,
            rcDisabled: false,
            disabledReason: '',
            top: 56,
            bottom: 0,
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

            let horizontalScroll = document.querySelector("#html").scrollLeft;
            let verticalScroll = document.querySelector("#html").scrollTop;
            let obj = this.$el;

            this.left = (event.x - obj.offsetLeft + horizontalScroll + 20);
            this.top = (event.y - obj.offsetTop + verticalScroll - 45 );

            let mouseX = event.pageX, 
                mouseY = event.pageY;
            // the last row anchors from the bottom and displays up
            if (this.color === 'row9') {
                this.bottom = ( obj.offsetTop - event.y - verticalScroll + 100);
            }
            // this row has some very high popups so offset that by lowering the popup top value
            if (this.color === 'row6') {
                this.top = (event.y - obj.offsetTop + verticalScroll - 180 );
                if (this.skill.ranks.length > 2 && this.skill.ranks[1].effects.length > 4 ) this.top -= 180;
            }
            // deal with insanely long spell popups
            if (this.color === 'row3') this.top -= 90;
            // if the width of the popup would extend off the window with display to the left of cursor
            if (this.window.width < (mouseX - horizontalScroll) + 640) {
                this.left = (event.x - obj.offsetLeft + horizontalScroll - 620);
            }
        },
        showRank: function(rank) {
            this.specificRank = rank;
        },
        hideRank: function() {
            this.specificRank = 0;
        },
        onClick() {
            if (!this.disabled && this.skillState[this.block].value !== this.skill.ranks.length && this.skillState[this.block].value >= 0 ) {
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
                if (this.color === 'row6') buttonColor = Gradients.buttons.red;
                else if (this.color === 'row9') buttonColor = Gradients.buttons.blue;
                else buttonColor = Gradients.buttons.yellow;
                return {'backgroundImage': "linear-gradient(" + buttonColor + ")"};
            }
        },
        obtainedRank(rank, index) {
            let talentSkill;
            // if rank === index +1 return lit version else not
            if (rank > index) {
                let skillColor = (this.color === 'row6') ? 'red' : (this.color === 'row9') ? 'blue' : 'yellow';
                try {                
                    talentSkill = require('@/assets/' + this.styleGuide + '/skill-rank-' + skillColor + '.png');
                    return { 'content': 'url(' + talentSkill + ')' };
                } catch {
                    return ''
                }
            } else {
                try {                
                    talentSkill = require('@/assets/' + this.styleGuide + '/skill-rank.png');
                    return { 'content': 'url(' + talentSkill + ')' };
                } catch {
                    return ''
                }
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

            // 2: Lord level is less than the required level or quest level
            if (levelRestriction && this.lordLevel < levelRestriction - 1 ) {
                this.disabled = true;
                this.disabledReason = 'Lord level required: ' + levelRestriction;
                return;
            } else if (skillData.quest && this.lordLevel < skillData.quest ) {
                this.disabled = true;
                this.disabledReason = 'This quest will automatically begin at rank ' + skillData.quest + '.';
            }

            // 3: Skills that are choose only 1 of 2 or more
            if (chooseOneRestriction && chooseOneRestriction.length > 0) {
                // check skillState for the value of the restricted skills

                for (let i = 0; i < chooseOneRestriction.length; i++) {                    
                    if (this.skillState[chooseOneRestriction[i]].value > 0) {
                        // if any of the skills have a value greater than 0 this skill shall be disabled
                        this.disabled = true;
                        this.disabledReason = 'Locked by skill: ' + this.skills[chooseOneRestriction[i]].name;
                        return;
                    }
                }
            }

            // 4: Skill has a prerequisite of another skill
            if (this.skillState[skillRestriction] && this.skillState[skillRestriction].value === 0 ) {
                this.disabled = true;

                this.disabledReason = "Available after unlocking: " + this.skills[skillRestriction].name;
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
        getBorder(quest) {
            let border, type
            (quest) ? type = "/quest-frame.png" : type = "/skill-frame.png"
            try {
                border = require('@/assets/' + this.styleGuide + type);
                return { 'backgroundImage': 'url(' + border + ')' };
            } catch {
                return ''
            }
        },
        getIcon(icon) {
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
.skill-border {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 210px;
    height: 67px;
}
.skill-icon {
    width: 72px;
    height: 72px;
    margin-top: -5px;
    position: absolute;
    left: 23px;
}
.skill-ranks {
    position: absolute;
    height: 60px;
    top: 2px;
    left: 196px;
}
.skill-rank {
    display: block;
    width: 16px;
    max-height: 16px;
}
.skill-name {
    margin-top: 11px;
    margin-left: 68px;
    padding-left: 30px;
    height: 43px;
    width: 136px;
    cursor: context-menu;
    font-size: .8em;
    background-image: linear-gradient(#878787, #808080, #808080, #7C7C7C, #878787, #929292, #B1B1B1);
    background-color: #808080;
    color: #ECE9CB;
    /* color: #EBE6CD; */
}
.position-block {
    display:table;
    position: absolute;
    word-wrap: normal;
    line-height:normal;
    width: 100px;
    height: 43px;
    left: 100px;
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
