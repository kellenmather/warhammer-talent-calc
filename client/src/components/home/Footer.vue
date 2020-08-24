<template>
<article>
    <div class="footer" :style="getAssets()">
        <div class="footer-content">
            <span>
                {{this.message}}
            </span>
        </div>
    </div>
</article>
</template>

<script>
import ApiService from '@/services/apiService';

export default {
    name: 'WarhammerCalculator',
    data() {
        return {
            message: null
        }
    },
    methods: {
        getAssets() {
            let img = require('@/assets/home/bottom-divide.png');
            let img2 = require('@/assets/home/footer.png');
            img = { 'backgroundImage': 'url(' + img + '), url(' + img2 + ')' };
            return img;
        },
        getMessage() {
            ApiService.get("message/getMessages")
                .then(({data}) => {
                    console.log(data)
                    this.message = data[0].msg;
                })
        }
    },
    created() {
        this.getMessage();
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
    display: table;
    color: #EBE6CD;
    background-repeat: repeat-x;
    border: 0;
    background-color: #262626;
    background-position: top, left top 5px;
    width: 100%;
}
.footer-content {
    display: table-cell;
    vertical-align: middle;
    height: 70px;
    border: 0px;

};
.card-footer span {
    height: 100%;
}

</style>
