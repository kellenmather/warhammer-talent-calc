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
                    :skills="skills"
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
    padding: 10px;
    border: 1px solid darkgray;
    height: 82px;
    margin: 0 10px;
}
.skill-button {
    height: 67px;
    width: 192px;
    margin-right: 20px;
    margin-left: 20px;
    line-height: 60px;
    position: relative;
    color: black;
}
.quest-button {
    width: 210px;
}
.grouping .skill-button {
    margin-right: 10px;
    margin-left: 10px;
}

</style>
