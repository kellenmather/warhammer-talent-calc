<template>
    <article class="col">
        <div class="jumbotron header fader" :style="getImage()">
            <img class="unselectable logo logo-size-control" alt="Warhammer II logo" src="@/assets/home/wh-tc-logo.png">
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
            let img = require('@/assets/home/default.png');
            img = { 'backgroundImage': 'url(' + img + ')' };
            return img;
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media (max-width: 991px) {
    .logo-size-control {
        max-width: 400px;
    }
}

.jumbotron {
    background-color: #262626;
    height: 305px;
    margin-bottom: 0px;
}
article.col {
    padding: 0px;
}
.header {
    background-repeat: no-repeat;
    background-position: 20% 62%;
    border-radius: 0px;
    padding: 2rem 1rem;
}
.logo {
    width: 460px;
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
