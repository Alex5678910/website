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
            <a class="info" href="#">Подробнее</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-paris-two"
    }
</script>

<style scoped>
    .images {
        padding-top: 4%;
        padding-bottom: 6%;
    }

    .text {
        position: absolute;
        top: -9%;
        right: 10%;
    }

    h1 {
        color: aliceblue;
        font-weight: bold;
        font-family: 'Montserrat Alternates', sans-serif;
        padding-top: 43%;
        text-align: right;
        font-size: 378%;
    }

    .main {
        background-image: url(../assets/img/bg4.png);
        background-attachment: fixed;
        background-position: center;
        height: 63rem;
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

    a.info {
        color: aliceblue;
        font-size: 195%;
        text-align: right;
        padding-left: 81%;
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
        a.info {
            color: aliceblue;
            font-size: 195%;
            text-align: right;
            padding-left: 73%;
            font-family: 'Montserrat Alternates', sans-serif;
        }
        img{
            width: 40rem;
        }
        h1{
            color: aliceblue;
            font-weight: bold;
            font-family: 'Montserrat Alternates', sans-serif;
            padding-top: 37%;
            text-align: right;
            font-size: 273%;
        }
    }

    /*====================================================max-width: 1366========================================*/
    /*====================================================max-width: 1024========================================*/
    @media (max-width: 1024px) {
        img{
            display: none;
        }
        h1{
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
        .main{
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
        img{
            width: 47rem;
        }
        h1{
            color: aliceblue;
            font-weight: bold;
            font-family: 'Montserrat Alternates', sans-serif;
            padding-top: 37%;
            text-align: center;
            font-size: 346%;
        }
    }
    @media (max-width: 768px){
        h1 {
            color: aliceblue;
            font-weight: bold;
            font-family: 'Montserrat Alternates', sans-serif;
            padding-top: 44rem;
            padding-left: 5rem;
            text-align: center;
            font-size: 232%;
        }
    }

    /*====================================================max-width: 769px========================================*/
    @media (max-width: 414px) {

        .main{
            display: none;
        }
    }

</style>