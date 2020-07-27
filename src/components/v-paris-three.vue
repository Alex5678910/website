<template>
    <div class="main">
        <div class="text">
            <div class="title">Разработаем<br>
                мобильное приложение</div>
            <hr>
            <h2>Дайте вашим клиентам возможность<br>
                пользоваться вашими услугами прямо с<br>
                мобильного телефона</h2>
        </div>
        <router-link tag="a" :to="'/mobile'"><a class="info" @click="openUp()">Подробнее</a></router-link>
        <div class="images">
            <img src="../assets/img/webp/m3.webp" alt="pic">
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
        -webkit-transform: scale(.8);
        -ms-transform: scale(.8);
        transform: scale(.8);
    }

    .main {
        background-image: url(../assets/img/webp/bg6.webp);
        background-attachment: fixed;
        background-position: center;
        height: 955px;
        display: -webkit-box;
        display: -ms-flexbox;
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

    div.title {
        color: aliceblue;
        font-weight: bold;
        font-family: 'Montserrat Alternates', sans-serif;
        padding-top: 29%;
        text-align: left;
        padding-left: 10rem;
        font-size: 349%;
        margin: 40px 0;
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

        div.title{
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
            left: 14.7%;
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

        div.title{
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
        h2{
            color: #f0f8ff;
            font-weight: normal;
            font-family: 'Montserrat Alternates', sans-serif;
            padding-top: 3%;
            text-align: left;
            padding-left: 18%;
            font-size: 152%;
        }
        hr{
            width: 65%;
            margin-left: 18%;
            border-color: #454649;
            margin-top: 5%;
        }
        a.info{
            color: aliceblue;
            font-size: 161%;
            font-family: 'Montserrat Alternates', sans-serif;
            position: absolute;
            left: 17.7%;
            top: 82%;
            text-decoration: underline;
        }
        .main{
            height: 558px;
        }
    }

    /*====================================================max-width: 1024========================================*/
    /*====================================================max-width: 768========================================*/
    @media (max-width: 768px) {
        a.info {
            color: aliceblue;
            font-size: 139%;
            font-family: 'Montserrat Alternates', sans-serif;
            position: absolute;
            top: 67%;
            left: 13%;
        }
        div.title{
            color: aliceblue;
            font-weight: bold;
            font-family: 'Montserrat Alternates', sans-serif;
            padding-top: 9%;
            font-size: 188%;
            z-index: 100;
            margin-left: -76px;
        }
        h2{
            color: #f0f8ff;
            font-weight: normal;
            font-family: 'Montserrat Alternates', sans-serif;
            padding-top: 3%;
            text-align: left;
            padding-left: 18%;
            font-size: 92%;
        }
        .text{
            position: absolute;
            top: 6%;
            left: 2%;
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