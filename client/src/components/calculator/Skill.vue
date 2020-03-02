<template>
    <div @mouseover="showPopup()" @mousemove="mouseMove" @mouseleave="hidePopup()" class="test-bg" >
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
        <Popup :info="skill" :currentRank="currentRank" :ranks="skill.ranks.length" :specificRank="specificRank" v-if="displayPopup && skill" />
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
        color: String
    },
    data() {
        return {
            displayPopup: false,
            specificRank: 0,
            currentRank: 0,
            disabled: false
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
            // TODO: popup should move to follow mouse
            // console.log(event.clientX, event.clientY);
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
            if (this.disabled) return;
            let max = this.skill.ranks.length;
            if (this.currentRank !== max) this.currentRank++;            
        },
        onRightClick() {
            if (this.disabled) return;
            if (this.currentRank > 0) this.currentRank--;            
        },
        isSelected(index) {
            if (this.currentRank === 0) {
                return '';
            } else {
                let buttonColor;
                if (this.color === 'row6') buttonColor = '#e13d39';
                else if (this.color === 'row9') buttonColor = '#3BC4D3';
                else buttonColor = '#f3ad2d';
                if (index && (index +1) > this.currentRank) return '';
                return {backgroundColor: buttonColor};
            }
        }
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
.test-bg {
    background-color: #a5a5a5;
}
</style>
