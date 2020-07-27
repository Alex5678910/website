<template>
    <div class="containers">
        <div class="container">
            <div class="title">Создадим сайт<br>
                для вашей компании</div>
            <h2>Наша продуманная работа поможет<br>
                представить вам свой контент в самом<br>
                выгодном свете</h2>
        </div>
        <div class="text">
            <h3>Индивидуальный подход к каждому заказчику</h3>
        </div>
    </div>
</template>

<script>
    export default {
        name: "mobile-two"
    }
</script>

<style scoped>
    .text {
        max-width: 414px;
    }

    h3 {
        color: black;
        font-size: 13px;
        font-family: 'Montserrat', sans-serif;
        font-weight: normal;
        padding: 0 26px;
    }

    .logo span {
        color: #FFFFFF;
    }

    .container {
        max-width: 414px;
        height: 194px;
        background-image: url(../assets/mobail/webp/mb1.webp);
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    }
    
    @media screen and (-webkit-min-device-pixel-ratio:0) {
        .container {
            background-image: url(../assets/mobail/mb1.png);
        }
    }

    div.title {
        text-align: left;
        font-size: 20px;
        color: #FFFFFF;
        font-family: 'Montserrat Alternates', sans-serif;
        font-weight: 700;
    }

    h2 {
        font-size: 10px;
        text-align: left;
        color: #FFFFFF;
        font-family: 'Montserrat Alternates', sans-serif;
    }
    /* =======================================min-width: 414px==================================*/
    @media (min-width: 415px) {
        .containers{
            display: none;
        }
    }
    /* =======================================min-width: 414px==================================*/

</style>