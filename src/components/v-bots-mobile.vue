<template>
    <div class="container">
        <div class="main">
            <div class="block-one">
                <h1>Разрабатываем умных ботов<br>
                    Которые облегчат вам жизнь</h1>
                <h2>Боты позволяют предпринимателю<br>
                    постоянно взаимодействовать<br>
                    с клиентами, а также привлекать<br>
                    новых клиентов, и дают<br>
                    конкурентное преимущество.</h2>
            </div>
            <div class="block-two padding">
                <div class="title">Обеспечивают сервисное<br>
                    обслуживание 24/7</div>
                <h2>Компании могут отвечать на вопросы<br>
                    клиентов независимо от времени суток,<br>
                    а это повышает качество обслуживания и<br>
                    влияет на успешность бизнеса</h2>
            </div>
        </div>
        <p>WebKiwi<br>
            digital studio</p>
        <img src="../assets/mobail/list.png" alt="pic" class="list" @click="openSlide">
    </div>
</template>

<script>
    export default {
        name: "v-bots-mobile",
        methods: {
            openSlide() {
                window.scrollTo(0, 3100)
            }
        }
    }
</script>

<style scoped>
    .list {
        position: fixed;
        top: 90%;
        right: 3%;
    }
    .padding{
        padding-top: 2%;
    }
    p{
        color: #0d0e23;
        font-family: 'Montserrat', sans-serif;
        font-size: 10px;
        text-align: left;
        font-weight: bold;
        padding-left: 10%;
        padding-top: 48%;

    }
    .main{
        padding-left: 9%;
        padding-top: 11%;
    }
    div.title{
        color: #0d0e23;
        font-family: 'Montserrat', sans-serif;
        font-size: 22px;
        text-align: left;
        margin: 0;
        font-weight: 700;
    }
    h1{
        color: #0d0e23;
        font-family: 'Montserrat', sans-serif;
        font-size: 22px;
        text-align: left;
        margin: 0;
    }

    h2{
        color: #0d0e23;
        font-family: 'Montserrat', sans-serif;
        font-size: 15px;
        text-align: left;
        font-style: italic;
        font-weight: normal;
    }
    .container{
        max-width: 414px;
        background-image: url(../assets/images/webp/mobile-robot-one.webp);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        height: 692px;
    }
    /* =======================================min-width: 414px==================================*/
    @media (min-width: 415px) {
        .container {
            display: none;
        }
    }
    /* =======================================min-width: 414px==================================*/
    /* =======================================min-width: 360px==================================*/
    @media (max-width: 360px) {
        div.title {
            color: #0d0e23;
            font-family: 'Montserrat', sans-serif;
            font-size: 17px;
            text-align: left;
            margin: 0;
            padding-top: 6%;
        }
        h1 {
            color: #0d0e23;
            font-family: 'Montserrat', sans-serif;
            font-size: 17px;
            text-align: left;
            margin: 0;
            padding-top: 6%;
        }
        h2 {
            color: #0d0e23;
            font-family: 'Montserrat', sans-serif;
            font-size: 13px;
            text-align: left;
            font-style: italic;
            font-weight: normal;
            padding-top: 7%;
        }
    }
    /* =======================================min-width: 360px==================================*/
</style>