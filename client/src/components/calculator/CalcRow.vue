<template>
    <div v-if="row">
        <div v-for="(blocks, index) in row.content" :key="index" class="inline">
            <div :class="(blocks.blockContent.length > 1) ? 'grouping' : null">
                <Skill 
                    v-for="(block, idx) in blocks.blockContent" 
                    :key="idx" :color="color" 
                    @skillClick="skillClick"
                    @skillRightClick="skillRightClick"
                    :skill="skills[block]" 
                    :block="block" 
                    :skillState="rowState"
                    :lordLevel="lordLevel"
                    class="inline skill-button"/>
            </div>
        </div>
    </div>
</template>

<script>
import Skill from '@/components/calculator/Skill.vue';

export default {
    name: 'CalcRow',
    components: {
        Skill
    },
    props: {
        row: Object,
        skills: Object,
        color: String,
        rowState: Object,
        lordLevel: Number
    },
    data() {
        return {
            displayTooltip: '' // remove later
        }
    },
    methods: {
        skillClick(name) {
            this.$emit('skillClick', name, this.row.row)
        },
        skillRightClick(name) {
            this.$emit('skillRightClick', name, this.row.row)
        }
    }
};
</script>

<style>
.grouping {
    padding: 10px;
    border: 1px solid darkgray;
    margin-right: 30px;
    height: 82px;
}
.skill-button {
    height: 60px;
    width: 200px;
    border: 1px solid grey;
    margin-right: 30px;
    line-height: 60px;
    position: relative;
    color: black;
}
.grouping .skill-button:last-child {
    margin-right: 0px;
}
</style>
