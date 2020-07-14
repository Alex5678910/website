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
                <h1>Обеспечивают сервисное<br>
                    обслуживание 24/7</h1>
                <h2>Компании могут отвечать на вопросы<br>
                    клиентов независимо от времени суток,<br>
                    а это повышает качество обслуживания и<br>
                    влияет на успешность бизнеса</h2>
            </div>
        </div>
        <p>WebKiwi<br>
            digital studio</p>
        <img src="../assets/mobail/list.png" alt="" class="list" @click="openSlide">
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
    .list{
        position: fixed;
        top: 30%;
        right: 5%;
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
        background-image: url(../assets/images/mobile-robot-one.png);
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
</style>