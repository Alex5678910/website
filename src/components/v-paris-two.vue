<template>
    <div class="main">
        <div class="images">
            <img src="../assets/img/m2.png" alt="">
        </div>
        <div class="text">
            <h1>Создадим CRM систему для<br>
                оптимизации вашего<br>
                бизнеса</h1>
            <hr>
            <h2>Следите за работой вашей организации<br>
                со своего устройства</h2>
            <router-link :to="{name: 'crm'}">Подробнее</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-paris-two",
        methods:{
            // openUp(){
            //     window.scrollTo(0, 0)
            // }
        }
    }
</script>

<style scoped>

    .images {
        padding-top: 0;
        padding-bottom: 0;
        position: absolute;
        transform: scale(.7);
        left: -4%;
        top: 9%;
    }

    .text {
        position: absolute;
        top: 11%;
        right: 16%;
    }

    h1 {
        color: aliceblue;
        font-weight: bold;
        font-family: 'Montserrat Alternates', sans-serif;
        text-align: right;
        font-size: 312%;
    }

    .main {
        background-image: url(../assets/img/bg4.png);
        background-attachment: fixed;
        background-position: center;
        height: 915px;
        display: flex;
        background-size: cover;
        background-repeat: no-repeat;
        position: relative;
    }

    hr {
        width: 63%;
        margin-left: 37%;
        border-color: #454649;
        margin-top: 4%;
    }

    a{
        color: aliceblue;
        font-size: 195%;
        text-align: right;
        padding-left: 76%;
        font-family: 'Montserrat Alternates', sans-serif;
    }

    h2 {
        color: aliceblue;
        font-weight: normal;
        font-family: 'Montserrat Alternates', sans-serif;
        padding-top: 3%;
        text-align: right;
        font-size: 162%;
    }

    /*====================================================max-width: 1366========================================*/
    @media (max-width: 1366px) {
        .main {
            height: 768px;
        }
        a{
            color: aliceblue;
            font-size: 162%;
            text-align: right;
            padding-left: 78%;
            font-family: 'Montserrat Alternates', sans-serif;
        }

        img {
            width: 40rem;
        }

        h1 {
            color: aliceblue;
            font-weight: bold;
            font-family: 'Montserrat Alternates', sans-serif;
            padding-top: 37%;
            text-align: right;
            font-size: 273%;
        }
        .text{
            position: absolute;
            top: -21%;
            right: 5%;
        }
        .images{
            padding-top: 0;
            padding-bottom: 0;
            position: absolute;
            transform: scale(.9);
            left: -4%;
            top: 9%;
        }
    }

    /*====================================================max-width: 1366========================================*/
    /*====================================================max-width: 1024========================================*/
    @media (max-width: 1024px) {
        img {
            display: none;
        }

        h1 {
            color: aliceblue;
            font-weight: bold;
            font-family: 'Montserrat Alternates', sans-serif;
            padding-top: 75%;
            text-align: right;
            font-size: 346%;
        }

        .text {
            position: absolute;
            top: -50%;
            right: 10%;
        }

        .main {
            background-attachment: fixed;
            background-position: center;
            height: 55rem;
            display: flex;
            background-size: cover;
            background-repeat: no-repeat;
            position: relative;
        }

    }

    /*====================================================max-width: 1024========================================*/
    /*====================================================max-width: 769px========================================*/
    @media (max-width: 768px) {

        .images {
            padding-top: 0;
            padding-bottom: 0;
        }

        img {
            width: 47rem;
        }

        .main {
            background-attachment: fixed;
            background-position: center;
            height: 45rem;
            display: flex;
            background-size: cover;
            background-repeat: no-repeat;
            position: relative;
        }
        h1{
            color: aliceblue;
            font-weight: bold;
            font-family: 'Montserrat Alternates', sans-serif;
            padding-top: 60%;
            font-size: 346%;
            text-align: right;
        }
    }


    /*====================================================max-width: 769px========================================*/
    @media (max-width: 414px) {

        .main {
            display: none;
        }
    }

</style>