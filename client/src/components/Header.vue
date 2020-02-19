<template>
    <article class="col">
        <div class="jumbotron header" style="backgroundRepeat: no-repeat;" :style="[getImage(), getPosition()]">
            <img alt="Warhammer II logo" src="../assets/whlogo.png">
        </div>
    </article>
</template>

<script>
export default {
    name: 'WarhammerCalculator',
    props: {
        selection: String
    },
    data() {
        return {
            position: { 'backgroundPosition': '70% 4%' }
        }
    },
    methods: {
        getImage() {
            console.log('hit', this.selection)
            let img;
            switch(this.selection) {
                case 'High Elves':
                    img = 'highelves'
                    break;
                case 'Dark Elves':
                    img = 'darkelves';
                    break;
                case 'Lizardmen':
                    img = 'lizardmen';
                    break;
                case 'Tomb Kings':
                    img = 'tombkings';
                    break;
                case 'Vampire Coast':
                    img = 'vampirecoast';
                    break;
                default:
                    img = 'default'
            }
            img = require('../assets/' + img + '.png')
            img = { 'backgroundImage': 'url(' + img + ')' }
            return img
        },
        getPosition() {
            let pos;
            switch(this.selection) {
                case 'High Elves':
                    pos = { 'backgroundPosition': '70% 11%', 'background-size': '110%' }
                    break;
                case 'Dark Elves':
                    pos = { 'backgroundPosition': '100% 0', 'background-size': '110%' }
                    break;
                case 'Lizardmen':
                    pos = { 'backgroundPosition': '0 47%', 'background-size': '110%' }
                    break;
                case 'Tomb Kings':
                    pos = { 'backgroundPosition': '0 16%', 'background-size': '100%' }
                    break;
                case 'Vampire Coast':
                    pos = { 'backgroundPosition': '0 30%', 'background-size': '100%' }
                    break;
                default:
                    pos = { 'backgroundPosition': '20% 62%' }
            }
            return pos
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jumbotron {

}
article.col {
    padding: 0px;
}
.header {
    border-radius: 0px;
    padding: 2rem 1rem;
}
</style>
