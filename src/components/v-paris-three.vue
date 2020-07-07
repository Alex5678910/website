<template>
    <div class="main">
        <div class="text">
            <h1>Разработаем<br>
                мобильное приложение</h1>
            <hr>
            <h2>Дайте вашим клиентам возможность<br>
                пользоваться вашими услугами прямо с<br>
                мобильного телефона</h2>
            <a class="info" href="#">Подробнее</a>
        </div>
        <div class="images">
            <img src="../assets/img/m3.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-paris-three"
    }
</script>

<style scoped>
    a.info {
        color: aliceblue;
        padding-right: 43%;
        font-size: 225%;
        font-family: 'Montserrat Alternates', sans-serif;
    }

    .images {
        position: absolute;
        right: 0;
    }

    .main {
        background-image: url(../assets/img/bg6.png);
        background-attachment: fixed;
        background-position: center;
        height: 63rem;
        display: flex;
        background-size: cover;
        background-repeat: no-repeat;
        position: relative;
    }

    h2 {
        color: aliceblue;
        font-weight: normal;
        font-family: 'Montserrat Alternates', sans-serif;
        padding-top: 3%;
        text-align: left;
        padding-left: 18%;
        font-size: 225%;
    }

    h1 {
        color: aliceblue;
        font-weight: bold;
        font-family: 'Montserrat Alternates', sans-serif;
        padding-top: 28%;
        text-align: left;
        padding-left: 11.5rem;
        font-size: 400%;
    }

    hr {
        width: 65%;
        margin-left: 18%;
        border-color: #454649;
        margin-top: 5%;
    }
    /*====================================================max-width: 1366========================================*/
    @media (max-width: 1366px) {
        hr{
            width: 65%;
            margin-left: 23%;
            border-color: #454649;
            margin-top: 5%;
        }

        img {
            width: 40rem;
            margin-top: 30%;
            margin-left: 0%;
        }

        h1{
            color: aliceblue;
            font-weight: bold;
            font-family: 'Montserrat Alternates', sans-serif;
            padding-top: 47%;
            font-size: 255%;
            z-index: 100;
            text-align: left;
            margin-left: -3%;
        }
        a.info {
            color: aliceblue;
            padding-right: 41%;
            font-size: 225%;
            font-family: 'Montserrat Alternates', sans-serif;
        }
        h2{
            color: aliceblue;
            font-weight: normal;
            font-family: 'Montserrat Alternates', sans-serif;
            padding-top: 3%;
            text-align: left;
            padding-left: 23%;
            font-size: 157%;
        }
        a.info{
            color: aliceblue;
            padding-right: 30%;
            font-size: 183%;
            font-family: 'Montserrat Alternates', sans-serif;
        }
    }

    /*====================================================max-width: 1366========================================*/
    /*====================================================max-width: 1024========================================*/
    @media (max-width: 1024px) {
        img {
          display: none;
        }

        h1{
            color: aliceblue;
            font-weight: bold;
            font-family: 'Montserrat Alternates', sans-serif;
            padding-top: 9%;
            font-size: 346%;
            z-index: 100;
            text-align: left;
        }
        a.info {
            color: aliceblue;
            padding-right: 41%;
            font-size: 225%;
            font-family: 'Montserrat Alternates', sans-serif;
        }
    }

    /*====================================================max-width: 1024========================================*/
    /*====================================================max-width: 768========================================*/
    @media (max-width: 768px) {
        a.info {
            color: aliceblue;
            padding-right: 36%;
            font-size: 225%;
            font-family: 'Montserrat Alternates', sans-serif;
        }
    }
    /*====================================================max-width: 768========================================*/
    @media (max-width: 414px) {
        .main {
            display: none;
        }
    }
</style>