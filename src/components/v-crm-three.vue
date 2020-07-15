<template>
    <div class="container">
        <div class="sub-crm-wrapper">
            <div class="column"></div>
            <div class="text">
                <div>CRM-системма помогает уравлять продажами всех типов: от коротких заказов до длинных сделок</div>
            </div>
        </div>
        <div class="crm-wrapper">
            <div class="right-wrapper">
                <div class="top">
                    <ul>
                        <li class="item-1">Продажи</li>
                        <li class="item-2">Клиентская база</li>
                        <li class="item-3">Закупки</li>
                    </ul>
                </div>
            </div>
            <div class="left-wrapper">
                <div class="title">CRM для продаж</div>
                <div class="subtitle-block">
                    <div class="middle-block">
                        <div class="middle-item">
                            <div class="item">
                                <div class="item-circle-border">
                                    <div class="item-circle-dot"></div>
                                </div>
                                <div class="item-description">Хранит историю отношений между продавцом и покупателем</div>
                            </div>
                        </div>
                        <div class="middle-item">
                            <div class="item">
                                <div class="item-circle-border">
                                    <div class="item-circle-dot"></div>
                                </div>
                                <div class="item-description">На основании данных бренды оптимизируют работу сотрудников</div>
                            </div>
                        </div>
                        <div class="middle-item">
                            <div class="item">
                                <div class="item-circle-border">
                                    <div class="item-circle-dot"></div>
                                </div>
                                <div class="item-description">Внедряют новые маркетинговые инструменты</div>
                            </div>
                        </div>
                        <div class="middle-item">
                            <div class="item">
                                <div class="item-circle-border">
                                    <div class="item-circle-dot"></div>
                                </div>
                                <div class="item-description">Повышают уровень обслуживания и стимулируют рост прибыли</div>
                            </div>
                        </div>
                    </div>
                    <div class="left-block">
                        <div class="image-wrapper"></div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "v-crm-three"
    }
</script>

<style scoped>
    .container {
        color: #fff;
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
        max-width: 1920px;
        }

    div.crm-wrapper {
        background-color: #000;
        display: flex;
        height: 852px;
        width: 100%;
        position: relative;
    }
    div.crm-wrapper .title {
        font-size: 45px;
        font-weight: 900;
        color: #fff;
        line-height: 55px;
        text-align: center;
        padding-top: 95px;
    }
    div.title {

    }
    div.subtitle-block {
        display: flex;
        flex-direction: row;
    }
    div.left-wrapper {
        width: 78%;
    }
    div.middle-item .item-description {
        font-size: 23px;
        line-height: 28px;
        text-align: end;
    }
    .subtitle-block div.middle-block {
        padding-top: 75px;
        width: 60%;
    }
    .subtitle-block div.left-block {
        width: 40%;
    }
    div.middle-item .item-circle-dot {
        border-radius: 50%;
        background-color: #fff;
        width: 33px;
        height: 33px;
        margin: 11px;
    }
    div.middle-item .item-circle-border {
        border: 2px solid #FFB800;
        border-radius: 50%;
        width: 56px;
        height: 56px;
        margin-left: 15px;
    }
    div.middle-item .item {
        display: flex;
        align-items: center;
        flex-direction: row-reverse;
    }
    div.middle-item {
        margin-bottom: 60px;
    }
    div.left-block .image-wrapper {
        width: auto;
        height: 542px;
        background: url(../assets/images/crm-04.png) no-repeat 50% 50%;
        background-size: contain;
        margin-right: 77px;
    }
    div.middle-item:first-of-type .item, div.middle-item:last-of-type .item {
        padding-right: 10px;
    }
    div.middle-item:nth-of-type(2) .item, div.middle-item:nth-of-type(3) .item {
        padding-right: 78px;
    }
    div.right-wrapper {
        width: 22%;
        height: 825px;
        position: relative;
        overflow-x: visible;
    }
    div.right-wrapper::before {
        position: absolute;
        content: '';
        background: url(../assets/images/crm-06.png) no-repeat 50% 50%;
        background-size: cover;
        width: 100%;
        height: 852px;
        left: 0;
    }
    div.right-wrapper ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    div.right-wrapper li {
        position: relative;
        color: #000;
        font-size: 23px;
        font-weight: 700;
        line-height: 28px;
        margin-bottom: 15px;
        text-align: end;
    }
    div.right-wrapper li.item-1{padding-right: 105px;}
    div.right-wrapper li.item-2{padding-right: 135px;}
    div.right-wrapper li.item-3{padding-right: 155px;}
    div.right-wrapper::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        background: url(../assets/images/crm-05.png) no-repeat 50% 50%;
        height: 635px;
        width: 562px;
    }
    div.right-wrapper .top {
        padding-top: 60px;
    }
    div.sub-crm-wrapper {
        position: relative;
    }
    .sub-crm-wrapper div.column {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: 0 auto;
        background-color: #FFB800;
        width: 254px;
        height: 211px;
        opacity: .3;
    }
    .sub-crm-wrapper div.text {
        position: relative;
        font-size: 30px;
        line-height: 37px;
        text-align: center;
        color: #000;
        padding: 50px 355px;
    }
    @media all and (max-width:1366px) {
        div.left-wrapper {width: 70%;}
        div.right-wrapper {width: 30%;}
        .sub-crm-wrapper div.text {padding: 50px 110px;}
        div.right-wrapper::before, div.right-wrapper, div.crm-wrapper {height: 768px;}
        div.right-wrapper::after {bottom: 35px;width: 500px;height: 575px;}
        div.title{padding-right: 0;font-size: 40px;}
        .sub-crm-wrapper div.text{font-size: 26px;padding: 50px 155px;}
        div.left-block .image-wrapper{margin-top: 25px;}
    }
    @media all and (max-width:1024px) {
        div.left-wrapper {width: 64%;}
        div.right-wrapper {width: 36%;}
        .sub-crm-wrapper div.text {padding: 50px 110px;}
        div.right-wrapper::before, div.right-wrapper, div.crm-wrapper {height: 768px;}
        div.right-wrapper::after {bottom: 35px;width: 445px;height: 500px;background-size: contain;}
        div.crm-wrapper .title{padding-right: 0;font-size: 35px;padding-top: 45px;}
        .subtitle-block div.middle-block{padding-top: 40px;}
        .sub-crm-wrapper div.text{font-size: 26px;padding: 50px 15px;}
        div.middle-item .item-description{font-size: 20px;}
        div.left-block .image-wrapper {margin-right: 50px;}
        div.crm-wrapper .anchor{left: 50px;}
    }
    @media all and (max-width:768px){
        div.right-wrapper{width: 40%;}
        div.left-wrapper{width: 60%;}
        div.right-wrapper::before, div.right-wrapper, div.crm-wrapper{height: 652px;}
        div.right-wrapper li {font-size: 20px;}
        div.crm-wrapper .title{font-size: 26px;}
        div.left-block .image-wrapper{margin-right: 30px;}
        .subtitle-block div.middle-block{padding-top: 30px;}
        div.middle-item .item-circle-dot{width: 20px;height: 20px;margin: 7px;}
        div.middle-item .item-circle-border{width: 43px;height: auto;}
        div.middle-item{margin-bottom: 40px;}
        div.middle-item .item-description{font-size: 15px;line-height: 22px;}
        div.left-block .image-wrapper{background-position-y: 37%;}
        div.right-wrapper::after {width: 400px;height: 500px;}
        .sub-crm-wrapper div.text{font-size: 20px;padding: 25px 5px;line-height: 28px;}
        .sub-crm-wrapper div.column{height: 140px;}
        div.crm-wrapper .anchor{left: 40px;}
        div.right-wrapper li.item-1{padding-right: 80px;}
        div.right-wrapper li.item-2{padding-right: 100px;}
        div.right-wrapper li.item-3{padding-right: 125px;}
    }
    /*============================================================414===================================*/
    @media (max-width: 414px) {
        .container {
            display: none;
        }
    }
    /*============================================================414===================================*/
</style>