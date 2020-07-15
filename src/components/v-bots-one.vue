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
                <h2>Компании могут отвечать на вопросы клиентов<br>
                    независимо от времени суток, а это повышает качество<br>
                    обслуживания и влияет на успешность бизнеса</h2>
            </div>
        </div>
        <p>WebKiwi<br>
            digital studio</p>
    </div>
</template>

<script>
    export default {
        name: "v-bots-one",
    }
</script>

<style scoped>

    .padding {
        padding-top: 2%;
    }

    p {
        color: #0d0e23;
        font-family: 'Montserrat', sans-serif;
        font-size: 20px;
        text-align: right;
        font-weight: bold;
        padding-right: 10%;
        padding-top: 10%;
    }

    .main {
        padding-right: 16%;
        padding-top: 10%;
    }

    h1 {
        color: #0d0e23;
        font-family: 'Montserrat', sans-serif;
        font-size: 35px;
        text-align: right;
        margin: 0;
    }

    h2 {
        color: #0d0e23;
        font-family: 'Montserrat', sans-serif;
        font-size: 20px;
        text-align: right;
        font-style: italic;
        font-weight: normal;
    }

    .container {
        width: 99.1vw;
        background-image: url(../assets/images/bg-bots.png);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        height: 110vh;
    }

    /*============================================================768===================================*/
    @media (max-width: 414px) {
        .container {
            display: none;
        }
    }

    /*============================================================1366===================================*/
    @media (max-width: 1366px) {
        .container {
            width: 100vw;
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            height: 98vh;
            max-width: 1366px;
        }
        h1 {
            color: #0d0e23;
            font-family: 'Montserrat', sans-serif;
            font-size: 30px;
            text-align: right;
            margin: 0;
        }
        h2 {
            color: #0d0e23;
            font-family: 'Montserrat', sans-serif;
            font-size: 17px;
            text-align: right;
            font-style: italic;
            font-weight: normal;
        }
        p {
            color: #0d0e23;
            font-family: 'Montserrat', sans-serif;
            font-size: 16px;
            text-align: right;
            font-weight: bold;
            padding-right: 16%;
            padding-top: 9%;
        }
    }

    /*============================================================1366===================================*/
    /*============================================================1024===================================*/
    @media (max-width: 1024px) {
        .container {
            width: 100vw;
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            height: 49vh;
            max-width: 1366px;
        }
    }

    /*============================================================1024===================================*/
    /*============================================================768===================================*/
    @media (max-width: 768px) {
        h1 {
            color: #0d0e23;
            font-family: 'Montserrat', sans-serif;
            font-size: 23px;
            text-align: right;
            margin: 0;
        }
        h2[data-v-89a77fa8] {
            color: #0d0e23;
            font-family: 'Montserrat', sans-serif;
            font-size: 11px;
            text-align: right;
            font-style: italic;
            font-weight: normal;
        }
    }

    /*============================================================768===================================*/
</style>