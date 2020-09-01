<template>
<article>
    <div class="footer unselectable" :style="getAssets()">
        <div class="footer-content">
            <div v-if="message && message.icon" class="footer-img">
                <a :style="getIcon(this.message.icon)" class="footer-icon footer-left"></a>
            </div>
            <div class="footer-text">
                <span v-if="message">
                    {{this.message.msg}}
                </span>
            </div>
            <div v-if="message && message.icon2" class="footer-img">
                <a :style="getIcon(this.message.icon2)" class="footer-icon footer-right"></a>
            </div>  
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
            if (this.message) {
                let img = require('@/assets/home/bottom-divide.png');
                let img2 = require('@/assets/home/footer.png');
                img = { 'backgroundImage': 'url(' + img + '), url(' + img2 + ')' };
                return img;
            }
        },
        getMessage() {
            ApiService.get("message/getMessages")
                .then(({data}) => {
                    this.message = data[0];
                })
                .catch(() => {
                    this.message = { icon: "public-order-negative", icon2: "public-order-negative", msg: "Server is temporarily down" }
                })
        },
        getIcon(icon) {
            try {            
                icon = require('@/assets/smallIcons/' + icon + '.png')              
                return { 'content': 'url(' + icon + ')' };
            } catch {
                icon = require('@/assets/largeIcons/' + icon + '.png')              
                return [{ 'content': 'url(' + icon + ')', 'backgroundSize': '36px auto', 'height': '28px' }];
            }
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
    color: #EBE6CD;
    background-repeat: repeat-x;
    border: 0;
    background-color: #262626;
    background-position: top, left top 5px;
    width: 100%;
}
.footer-content {
    height: 70px;
    border: 0px;
}
.footer-text {
    display: inline-block;
    height: 70px;
    max-width: 80%;
    vertical-align: top;
}
.footer-text span {
    height: 70px;
    display: table-cell; 
    vertical-align: middle; 
    text-align: center; 
}
.footer-img {
    display: inline-block;
    height: 70px;
    width: 50px;
}

.card-footer span {
    display: inline-block;
}
.footer-icon {
    min-width: 44px;
    width: 44px;
    height: 24px;
    padding: 0 10px;
    vertical-align: center;
    position: relative;
    top: 24px;
}

</style>
