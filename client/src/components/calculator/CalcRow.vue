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
                    :styleGuide="styleGuide"
                    class="inline"/>
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
        lordLevel: Number,
        styleGuide: String
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
    padding: 10px 10px 10px 0;
    border: 1px solid darkgray;
    margin-right: 30px;
    height: 82px;
}
.skill-button {
    height: 67px;
    width: 222px;
    margin-right: 25px;
    line-height: 60px;
    position: relative;
    color: black;
}
.grouping .skill-button:last-child {
    margin-right: 0px;
}
</style>
