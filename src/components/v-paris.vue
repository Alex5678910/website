<template>
    <div class="main">
        <div class="text">
            <div class="title">Создадим сайт<br>
                для вашей компании.</div>
            <hr>
            <h2>Наша продуманная работа <br>
                поможет представить вам свой контент<br>
                в самом выгодном свете</h2>
            <router-link tag="a" :to="'/good'"><a class="info" @click="openUp()">Подробнее</a></router-link>
        </div>
        <div class="images">
            <img src="../assets/img/m1.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-paris",
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
        padding-right: 41%;
        font-size: 193%;
        font-family: 'Montserrat Alternates', sans-serif;
    }

    .images {
        position: absolute;
        right: 0;
        transform: scale(.8);
    }

    .main {
        background-image: url(../assets/img/bg2.png);
        background-attachment: fixed;
        height: 980px;
        display: flex;
        background-size: cover;
        background-repeat: no-repeat;
        position: relative;
    }

    h2 {
        color: aliceblue;
        font-weight: bold;
        font-family: 'Montserrat Alternates', sans-serif;
        padding-top: 3%;
        text-align: left;
        padding-left: 12rem;
        font-size: 193%;
        z-index: 115;
    }

    div.title {
        color: aliceblue;
        font-weight: bold;
        font-family: 'Montserrat Alternates', sans-serif;
        padding-top: 32%;
        text-align: left;
        padding-left: 20%;
        font-size: 380%;
        z-index: 115;
        margin: 40px 0;
    }

    hr {
        width: 66%;
        margin-left: 20%;
        border-color: #454649;
    }

    /*==============================================================media=============================*/
    /*====================================================max-width: 1366px========================================*/

    @media (max-width: 1366px) {

        a.info {
            color: aliceblue;
            margin-left: -20%;
            font-size: 193%;
            font-family: 'Montserrat Alternates', sans-serif;
        }

        img {
            width: 40rem;
            margin-top: 7%;
        }

        div.title {
            color: aliceblue;
            font-weight: bold;
            font-family: 'Montserrat Alternates', sans-serif;
            padding-top: 21%;
            padding-left: 8%;
            font-size: 265%;
            z-index: 115;
        }

        h2 {
            color: aliceblue;
            font-weight: normal;
            font-family: 'Montserrat Alternates', sans-serif;
            padding-top: 3%;
            padding-left: 4rem;
            font-size: 177%;
            z-index: 115;
        }

        hr {
            width: 66%;
            margin-left: 8%;
            border-color: #454649;
        }
        a.info {
            color: aliceblue;
            margin-left: -20%;
            font-size: 177%;
            font-family: 'Montserrat Alternates', sans-serif;
        }
        .main {
            height: 768px;
        }
    }

    /*====================================================max-width: 1366px========================================*/
    /*====================================================max-width: 1025px========================================*/

    @media (max-width: 1025px) {
        .main {
            height: 40rem;
        }

        .images {
            display: none;
        }

        div.title {
            position: relative;
            color: aliceblue;
            font-weight: bold;
            font-family: 'Montserrat Alternates', sans-serif;
            padding-top: 3%;
            text-align: left;
            padding-left: 8%;
            font-size: 380%;
            z-index: 115;
        }

        h2 {
            color: aliceblue;
            font-weight: bold;
            font-family: 'Montserrat Alternates', sans-serif;
            font-size: 193%;
            z-index: 115;
        }

        hr {
            width: 66%;
            margin-left: 8%;
            border-color: #454649;
        }
    }

    /*====================================================max-width: 1025px========================================*/
    /*====================================================max-width: 768px========================================*/
    @media (max-width: 768px) {

    }

    /*====================================================max-width: 769px========================================*/
    /*====================================================max-width: 414px========================================*/
    @media (max-width: 414px) {
        .main{
            display: none;
        }
    }

    /*====================================================max-width: 414px========================================*/
    /*====================================================max-width: 376px========================================*/
    @media (max-width: 376px) {

    }

    /*====================================================max-width: 376px========================================*/
    /*====================================================max-width: 320px========================================*/
    @media (max-width: 320px) {

    }

    /*====================================================max-width: 320px========================================*/
</style>