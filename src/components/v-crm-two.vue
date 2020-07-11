<template>
    <div class="container">
        <div class="white"></div>
        <div class="center-block"></div>
        <svg class="svg-six" width="100%" height="2" viewBox="0 0 1920 2">
            <path id="Path_116" data-name="Path 116" d="M7363,660.943H9283" transform="translate(-7363 -659.943)"
                  fill="none" stroke="#000" stroke-width="2"/>
        </svg>
        <svg class="svg-seven" width="2" height="831.705" viewBox="0 0 2 831.705">
            <path id="Path_150" data-name="Path 150" d="M8964.422,4155v831.7" transform="translate(-8963.422 -4155)" fill="none" stroke="#000" stroke-width="2"/>
        </svg>
        <div class="brown-one">

        </div>
        <div class="brown-two">

        </div>
        <h1>CRM для продаж</h1>
        <h2>CRM хранит историю отношений между продавцом и покупателем.<br>
            На основании данных бренды оптимизируют работу сотрудников,<br>
            внедряют новые маркетинговые инструменты,<br>
            повышают уровень обслуживания и стимулируют<br>
            рост прибыли.</h2>
        <div class="four">
            04
        </div>
        <div class="p">
        <p>Продажи</p>
        <p>Клиентская база</p>
        <p>Закупки</p>
        </div>
        <div class="sup">sup</div>
        <div class="support">support</div>
        <div class="webkiwi">webkiwi</div>
        <div class="optimization">optimization</div>
    </div>
</template>

<script>
    export default {
        name: "v-crm-two"
    }
</script>

<style scoped>
    .optimization{
        color: #5e5b5b;
        font-size: 17px;
        font-family: 'Montserrat', sans-serif;
        position: absolute;
        z-index: 35;
        top: 20%;
        left: 78%;
        font-weight: bold;
        transform: rotate(270deg);
    }
    .support{
        color: #5e5b5b;
        font-size: 17px;
        font-family: 'Montserrat', sans-serif;
        position: absolute;
        z-index: 25;
        top: 28%;
        left: 7%;
        font-weight: bold;
    }
    .webkiwi{
        color: #0c0c0c;
        font-size: 17px;
        font-family: 'Montserrat', sans-serif;
        position: absolute;
        z-index: 25;
        top: 90%;
        left: 8%;
        font-weight: bold;
    }
    .sup{
        color: #0c0c0c;
        font-size: 17px;
        font-family: 'Montserrat', sans-serif;
        position: absolute;
        z-index: 25;
        top: 8%;
        left: 8%;
        font-weight: bold;
    }
    .p{
        font-size: 26px;
        font-family: 'Montserrat', sans-serif;
        color: #FFD2D2;
        position: absolute;
        z-index: 20;
        top: 48%;
        right: 73%;
        text-align: right;
    }
    .four{
        font-size: 150px;
        font-family: 'Montserrat', sans-serif;
        color: #FFD2D2;
        position: absolute;
        z-index: 20;
        top: 18%;
        right: 75%;
        font-weight: bold;
    }
    h2{
        font-size: 25px;
        font-family: 'Montserrat', sans-serif;
        color: #FFD2D2;
        position: absolute;
        z-index: 10;
        top: 37%;
        right: 19%;
        text-align: right;
        font-weight: normal;
    }
    h1{
        font-size: 52px;
        font-family: 'Montserrat', sans-serif;
        color: #FFD2D2;
        position: absolute;
        z-index: 10;
        top: 27%;
        right: 19%;
    }
    .brown-two{
        background-color: #391414;
        position: absolute;
        z-index: 10;
        top: 19%;
        right: 9%;
        width: 3%;
        height: 63%;
    }
    .brown-one{
        background-color: #391414;
        position: absolute;
        z-index: 10;
        top: 19%;
        left: 11%;
        width: 16%;
        height: 63%;
    }
    .svg-seven{
        position: absolute;
        z-index: 10;
        top: 0;
        left: 82%;
    }
    .svg-six {
        position: absolute;
        z-index: 10;
        top: 30%;
        left: 0;
    }
    .center-block{
        position: absolute;
        width: 80%;
        height: 63%;
        background-color: #030303;
        top: 19%;
        left: 11%;
        opacity: .8;
    }
    .container {
        position: relative;
        max-width: 100%;
        background-image: url(../assets/images/bg-fone.png);
        background-size: cover;
        height: 52rem;
    }
    .white{
        background-color: white;
        width: 26rem;
        height: 52rem;
        opacity: 0.4;
    }
    /*============================================================414===================================*/
    @media (max-width: 414px) {
        .container {
            display: none;
        }
    }
    /*============================================================414===================================*/
</style>