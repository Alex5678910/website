<template>
    <div class="container">
        <div class="crm-wrapper">
            <div class="anchor">digital.studio</div>
            <div class="left-wrapper">
                <div class="title">CRM для оптимизации склада</div>
                <div class="subtitle-block">
                    <div class="left-block">
                        <div class="image-wrapper"></div>
                    </div>
                    <div class="middle-block">
                        <div class="middle-item">
                            <div class="item">
                                <div class="item-circle-border">
                                    <div class="item-circle-dot"></div>
                                </div>
                                <div class="item-description">Позволяет управлять продажами и закупками</div>
                            </div>
                        </div>
                        <div class="middle-item">
                            <div class="item">
                                <div class="item-circle-border">
                                    <div class="item-circle-dot"></div>
                                </div>
                                <div class="item-description">Позволяет контролировать взаиморасчеты</div>
                            </div>
                        </div>
                        <div class="middle-item">
                            <div class="item">
                                <div class="item-circle-border">
                                    <div class="item-circle-dot"></div>
                                </div>
                                <div class="item-description">Позволяет вести складской учет</div>
                            </div>
                        </div>
                        <div class="middle-item">
                            <div class="item">
                                <div class="item-circle-border">
                                    <div class="item-circle-dot"></div>
                                </div>
                                <div class="item-description">Позволяет печатать все необходимые для ведения бизнеса документы</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right-wrapper">
                <div class="top">
                    <ul>
                        <li class="item-1">Складской учет</li>
                        <li class="item-2">Закупки</li>
                        <li class="item-3">Расчеты</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="sub-crm-wrapper">
            <div class="column"></div>
            <div class="text">
                <div>CRM-система нужна для выстраивания грамотного диалога с клиентом.</div>
                <div>Она позволяет не допускать ошибок и, как следствие, клиент может заказать больше продуктов</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-crm-one"
    }
</script>

<style scoped>
    .container {
        color: #fff;
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
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
        text-align: end;
    }
    div.title {
        padding-top: 50px;
        padding-right: 127px;
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
        text-align: initial;
    }
    .subtitle-block div.middle-block {
        padding-top: 95px;
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
        margin-right: 15px;
    }
    div.middle-item .item {
        display: flex;
        align-items: center;
    }
    div.middle-item {
        margin-bottom: 60px;
    }
    div.left-block .image-wrapper {
        width: auto;
        height: 542px;
        background: url(../assets/images/crm-01.png) no-repeat 50% 50%;
        background-size: contain;
        margin-left: 77px;
        margin-top: 33px;
    }
    div.middle-item:first-of-type .item, div.middle-item:last-of-type .item {
        padding-left: 10px;
    }
    div.middle-item:nth-of-type(2) .item, div.middle-item:nth-of-type(3) .item {
        padding-left: 78px;
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
        background: url(../assets/images/crm-02.png) no-repeat 50% 50%;
        width: 128%;
        height: 44vh;
        right: 3rem;

        top: 26rem;
        z-index: 22;
    }
    div.right-wrapper ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    div.right-wrapper li {
        position: relative;
        color: #000;
        font-size: 30px;
        font-weight: 700;
        line-height: 37px;
        margin-bottom: 15px;
    }
    div.right-wrapper li.item-1{padding-left: 105px;}
    div.right-wrapper li.item-2{padding-left: 135px;}
    div.right-wrapper li.item-3{padding-left: 155px;}
    div.right-wrapper::after {
        background: url(../assets/images/crm-03.png) no-repeat 50% 50%;
        content: '';
        position: absolute;
        right: 0px;
        top: -44px;
        height: 49vw;
        width: 404px;
    }
    div.right-wrapper .top {
        padding-top: 60px;
    }
    div.crm-wrapper .anchor {
        position: absolute;
        left: 77px;
        bottom: 43px;
        font-size: 15px;
        font-weight: 700;
        line-height: 19px;
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
    /*    @media all and (max-width:1366px) {
            div.left-wrapper {width: 70%;}
            div.right-wrapper {width: 30%;}
            .sub-crm-wrapper div.text {padding: 50px 110px;}
            div.right-wrapper::before, div.right-wrapper, div.crm-wrapper {height: 768px;}
            div.right-wrapper::after {bottom: 35px;width: 600px;height: 420px;}
            div.title{padding-right: 0;font-size: 40px;}
            .sub-crm-wrapper div.text{font-size: 26px;padding: 50px 155px;}
        }
        @media all and (max-width:1024px) {
            div.left-wrapper {width: 60%;}
            div.right-wrapper {width: 40%;}
            .sub-crm-wrapper div.text {padding: 50px 110px;}
            div.right-wrapper::before, div.right-wrapper, div.crm-wrapper {height: 768px;}
            div.right-wrapper::after {bottom: 35px;width: 555px;height: 355px;background-size: contain;}
            div.crm-wrapper .title{padding-right: 0;font-size: 35px;}
            .sub-crm-wrapper div.text{font-size: 26px;padding: 50px 15px;}
            div.middle-item .item-description{font-size: 20px;}
            div.left-block .image-wrapper {margin-left: 50px;}
            div.crm-wrapper .anchor{left: 50px;}
        }
        @media all and (max-width:768px){
            div.right-wrapper::before, div.right-wrapper, div.crm-wrapper{height: 652px;}
            div.right-wrapper li {font-size: 20px;}
            div.crm-wrapper .title{font-size: 26px;}
            div.left-block .image-wrapper{margin-left: 30px;}
            .subtitle-block div.middle-block{padding-top: 30px;}
            div.middle-item .item-circle-dot{width: 20px;height: 20px;margin: 7px;}
            div.middle-item .item-circle-border{width: 43px;height: auto;}
            div.middle-item{margin-bottom: 40px;}
            div.middle-item .item-description{font-size: 15px;}
            div.left-block .image-wrapper{background-position-y: 28%;}
            div.right-wrapper::after {width: 400px;height: 257px;}
            .sub-crm-wrapper div.text{font-size: 20px;padding: 25px 5px;line-height: 28px;}
            .sub-crm-wrapper div.column{height: 140px;}
            div.crm-wrapper .anchor{left: 40px;}
        }*/
    /*============================================================414===================================*/
    @media (max-width: 414px) {
        .container {
            display: none;
        }
    }
    /*============================================================414===================================*/
</style>

