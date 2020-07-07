<template>
    <div class="containers">
        <div class="container">
            <h1>Создадим сайт<br>
                для вашей компании</h1>
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
        background-image: url(../assets/mobail/mb1.png);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }


    h1 {
        text-align: left;
        font-size: 20px;
        color: #FFFFFF;
        font-family: 'Montserrat Alternates', sans-serif;
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