<template>
    <article class="col">
        <div class="jumbotron header fader" style="backgroundRepeat: no-repeat;" :style="[getImage(), getPosition()]">
            <img class="unselectable logo-size-control" alt="Warhammer II logo" src="@/assets/whlogo.png">
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
            let img;
            // not MVP functionality
            // switch(this.selection) {
            switch('default') {
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
            img = require('@/assets/' + img + '.png');
            img = { 'backgroundImage': 'url(' + img + ')' };
            return img;
        },
        getPosition() {
            let pos;
            // not MVP functionality
            // switch(this.selection) {
            switch('default') {
                case 'High Elves':
                    pos = { 'backgroundPosition': '70% 11%', 'background-size': '110%' };
                    break;
                case 'Dark Elves':
                    pos = { 'backgroundPosition': '100% 0', 'background-size': '110%' };
                    break;
                case 'Lizardmen':
                    pos = { 'backgroundPosition': '0 47%', 'background-size': '110%' };
                    break;
                case 'Tomb Kings':
                    pos = { 'backgroundPosition': '0 16%', 'background-size': '100%' };
                    break;
                case 'Vampire Coast':
                    pos = { 'backgroundPosition': '0 30%', 'background-size': '100%' };
                    break;
                default:
                    pos = { 'backgroundPosition': '20% 62%' };
            }
            return pos;
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jumbotron {
    background-color: #262626;
    min-height: 289.1px;
}
article.col {
    padding: 0px;
}
.header {
    border-radius: 0px;
    padding: 2rem 1rem;
}
.logo-size-control {
    max-width: 400px;
    min-width: 250px;
}
.fader img {
    -webkit-animation: fadein 2; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 2; /* Firefox < 16 */
    -ms-animation: fadein 2s; /* Internet Explorer */
    -o-animation: fadein 2s; /* Opera < 12.1 */
    animation: fadein 2s; 
}

@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Internet Explorer */
@-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
</style>
