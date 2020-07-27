<template>
    <div class="main">
        <div class="images">
            <img src="../assets/img/webp/m2.webp" alt="pic">
        </div>
        <div class="text">
            <div class="title">Создадим CRM систему для<br>
                оптимизации вашего<br>
                бизнеса</div>
            <hr>
            <h2>Следите за работой вашей организации<br>
                со своего устройства</h2>
        </div>
        <router-link :to="'/crm'" tag="a"><a class="link" @click="openUp">Подробнее</a></router-link>
    </div>
</template>

<script>
    export default {
        name: "v-paris-two",
        methods:{
            openUp(){
                window.scrollTo(0, 0)
            }
        }
    }
</script>

<style scoped>

    .images {
        padding-top: 0;
        padding-bottom: 0;
        position: absolute;
        -webkit-transform: scale(.7);
        -ms-transform: scale(.7);
        transform: scale(.7);
        left: -4%;
        top: 9%;
    }

    .text {
        position: absolute;
        top: 11%;
        right: 16%;
    }

    div.title {
        color: aliceblue;
        font-weight: bold;
        font-family: 'Montserrat Alternates', sans-serif;
        text-align: right;
        font-size: 312%;
        margin: 40px 0;
    }

    .main {
        background-image: url(../assets/img/webp/bg4.webp);
        background-attachment: fixed;
        background-position: center;
        height: 915px;
        display: -webkit-box;
        display: -ms-flexbox;
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

    a.link{
        color: aliceblue;
        font-size: 164%;
        text-align: right;
        font-family: 'Montserrat Alternates', sans-serif;
        position: absolute;
        top: 55%;
        right: 16%;
        text-decoration: underline;
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
        a.link{
            color: aliceblue;
            font-size: 164%;
            text-align: right;
            font-family: 'Montserrat Alternates', sans-serif;
            position: absolute;
            top: 59%;
            right: 5%;
            text-decoration: underline;
        }

        img {
            width: 40rem;
        }

        div.title {
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
            -webkit-transform: scale(.9);
            -ms-transform: scale(.9);
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

        div.title {
            color: aliceblue;
            font-weight: bold;
            font-family: 'Montserrat Alternates', sans-serif;
            padding-top: 52%;
            text-align: right;
            font-size: 286%;
        }

        .text {
            position: absolute;
            top: -50%;
            right: 10%;
        }

        .main{
            background-attachment: fixed;
            background-position: center;
            height: 39rem;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            background-size: cover;
            background-repeat: no-repeat;
            position: relative;
        }
        a.link{
            color: aliceblue;
            font-size: 164%;
            text-align: right;
            font-family: 'Montserrat Alternates', sans-serif;
            position: absolute;
            top: 77%;
            right: 10%;
            text-decoration: underline;
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
            height: 35rem;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            background-size: cover;
            background-repeat: no-repeat;
            position: relative;
        }
        div.title {
            color: aliceblue;
            font-weight: bold;
            font-family: 'Montserrat Alternates', sans-serif;
            padding-top: 60%;
            font-size: 255%;
            text-align: right;
        }
        a.link{
            color: aliceblue;
            font-size: 164%;
            text-align: right;
            font-family: 'Montserrat Alternates', sans-serif;
            position: absolute;
            top: 76%;
            right: 10%;
            text-decoration: underline;
        }
        .text {
            position: absolute;
            top: -64%;
            right: 10%;
        }
    }
    /*====================================================max-width: 769px========================================*/
    @media (max-width: 414px) {

        .main {
            display: none;
        }
    }

</style>