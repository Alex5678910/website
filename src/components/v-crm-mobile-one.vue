<template>
    <div class="container">
        <div class="main">
            <h1>Digital development</h1>
            <h2>Разработка CRM-систем<br>
                для вашего бизнеса</h2>
        </div>
        <div class="main-two">
            <div class="main-three">
            <p class="crm">CRM для оптимизации склада</p>
            <p class="crm-two">CRM система для автоматизации бизнеса.<br>
                позволяет управлять продажами и<br>
                закупками, контролировать взаиморасчеты,<br>
                вести складской учет, а также печатать все<br>
                необходимые для ведения бизнеса<br>
                документы.</p>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-crm-mobile-one"
    }
</script>

<style scoped>
    .main-three{
        background-color: rgba(10, 10, 10, 0.7);
    }
    .crm-two{
        font-size: 15px;
        text-align: left;
        font-family: 'Montserrat', sans-serif;
        color: #E1E1E1;
        font-weight: normal;
        margin: 0 0 0 11%;
        padding-bottom: 6%;
    }
    .crm{
        font-size: 20px;
        text-align: left;
        font-family: 'Montserrat', sans-serif;
        color: #E1E1E1;
        font-weight: bold;
        margin: 0 0 0 11%;
        padding-top: 10%;
        padding-bottom: 5%;
    }
    .main-two {
        background-image: url(../assets/mobail/bg-crm-header.png);
        background-repeat: no-repeat;
        background-size: cover;
        height: 293px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    h1 {
        font-size: 20px;
        text-align: left;
        font-family: 'Montserrat', sans-serif;
        color: #E1E1E1;
        font-weight: bold;
        padding-top: 6%;
        margin: 0 18%;
    }

    h2 {
        font-size: 20px;
        text-align: left;
        font-family: 'Montserrat', sans-serif;
        color: #E1E1E1;
        font-weight: normal;
        padding-top: 6%;
        margin: 0 18%;
        padding-bottom: 6%;
    }

    .main {
        background-color: #040510;
    }

    .container {
        max-width: 414px;
    }
    /* =======================================min-width: 414px==================================*/
    @media (min-width: 415px) {
        .container{
            display: none;
        }
    }
    /* =======================================min-width: 414px==================================*/
</style>