<template>
    <div class="main">
        <div class="text">
            <h1>Разработаем<br>
                мобильное приложение</h1>
            <hr>
            <h2>Дайте вашим клиентам возможность<br>
                пользоваться вашими услугами прямо с<br>
                мобильного телефона</h2>
        </div>
        <router-link tag="a" :to="'/mobile'" @click="openUp()"><a class="info">Подробнее</a></router-link>
        <div class="images">
            <img src="../assets/img/m3.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-paris-three",
        methods:{
            openUp(){
                window.scrollTo(0, 0)
            }
        }
    }
</script>

<style scoped>
    a.info {
        color: aliceblue;
        font-size: 183%;
        font-family: 'Montserrat Alternates', sans-serif;
        position: absolute;
        left: 8.5%;
        top: 70%;
        text-decoration: underline;
    }

    .images {
        position: absolute;
        right: 0;
        transform: scale(.8);
    }

    .main {
        background-image: url(../assets/img/bg6.png);
        background-attachment: fixed;
        background-position: center;
        height: 955px;
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
        font-size: 152%;
    }

    h1 {
        color: aliceblue;
        font-weight: bold;
        font-family: 'Montserrat Alternates', sans-serif;
        padding-top: 29%;
        text-align: left;
        padding-left: 10rem;
        font-size: 349%;
    }

    hr {
        width: 65%;
        margin-left: 18%;
        border-color: #454649;
        margin-top: 5%;
    }
    /*====================================================max-width: 1366========================================*/
    @media (max-width: 1366px) {
        .text{
            position: absolute;
            top: -7%;
            left: 2%;
        }
        hr{
            width: 65%;
            margin-left: 23%;
            border-color: #454649;
            margin-top: 5%;
        }

        img {
            width: 40rem;
            margin-top: 0;
            margin-left: 0;
        }

        h1{
            color: aliceblue;
            font-weight: bold;
            font-family: 'Montserrat Alternates', sans-serif;
            font-size: 255%;
            z-index: 100;
            text-align: left;

        }

        a.info {
            color: aliceblue;
            font-size: 161%;
            font-family: 'Montserrat Alternates', sans-serif;
            position: absolute;
            left: 13.7%;
            top: 60%;
            text-decoration: underline;
        }

        h2{
            color: #f0f8ff;
            font-weight: normal;
            font-family: 'Montserrat Alternates', sans-serif;
            padding-top: 3%;
            text-align: left;
            padding-left: 23%;
            font-size: 152%;
        }
        .main {
            height: 768px;
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
            padding-right: 26%;
            font-size: 225%;
            font-family: 'Montserrat Alternates', sans-serif;
        }
        h1{
            color: aliceblue;
            font-weight: bold;
            font-family: 'Montserrat Alternates', sans-serif;
            padding-top: 9%;
            font-size: 319%;
            z-index: 100;
            padding-left: 26%;
        }
    }
    /*====================================================max-width: 414========================================*/
    @media (max-width: 414px) {
        .main {
            display: none;
        }
    }
    /*====================================================max-width: 414========================================*/
</style>