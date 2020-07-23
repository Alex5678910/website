<template>
    <div class="main">
        <div class="title">Возможные функции</div>

            <div class="container-one">

                <div class="block-one">

                    <div class="block">
                        <div class="one">1</div>
                    </div>

                    <h2>Работа над текстом</h2>

                </div>

                <div class="block-two">

                    <div class="block-my">

                        <div class="two">1</div>

                    </div>

                    <h3>Генерация хэштегов по ключевым словам</h3>

                </div>

                <div class="block-two">

                    <div class="block-my">

                        <div class="two">2</div>

                    </div>
                    <h3>Наполнение контентом</h3>
                </div>

                <div class="block-two">
                    <div class="block-my">
                        <div class="two">3</div>
                    </div>
                    <h3>Проверка орфографии</h3>
                </div>
                <div class="block-one">
                    <div class="block">
                        <div class="one">2</div>
                    </div>
                    <h2>Автоматизация процессов</h2>
                </div>
                <div class="block-two">
                    <div class="block-my">
                        <div class="two">1</div>
                    </div>
                    <h3>Сбор данных</h3>
                </div>

                <div class="block-two">
                    <div class="block-my">
                        <div class="two">2</div>
                    </div>
                    <h3>Обработка данных</h3>
                </div>

                <div class="block-two">
                    <div class="block-my">
                        <div class="two">3</div>
                    </div>
                    <h3>Статистика и прогнозы</h3>
                </div>
                <div class="block-one">
                    <div class="block">
                        <div class="one">3</div>
                    </div>
                    <h2>Обработка трафика</h2>
                </div>
                <div class="block-two">
                    <div class="block-my">
                        <div class="two">1</div>
                    </div>
                    <h3>Отслеживание входящих запросов</h3>
                </div>

                <div class="block-two">
                    <div class="block-my">
                        <div class="two">2</div>
                    </div>
                    <h3>Работы с информационными потоками</h3>
                </div>

                <div class="block-two">
                    <div class="block-my">
                        <div class="two">3</div>
                    </div>
                    <h3>Аналитика</h3>
                </div>
            </div>
        <div class="block-three">
           <img src="../assets/images/big-robot.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-bots-mobile-three"
    }
</script>

<style scoped>
    img {
        width: 266px;
    }

    p {
        color: white;
        font-size: 18px;
        font-family: 'Montserrat', sans-serif;
        font-weight: normal;
        text-align: right;
    }

    svg {
        margin-left: 15%;
    }

    .container-one {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-right: 0%;
        padding-left: 12%;
        padding-top: 5%;
    }

    h3 {
        color: #0d0e23;
        font-size: 11px;
        font-family: 'Montserrat', sans-serif;
        text-align: left;
        font-weight: normal;
        margin-left: 0;
        padding-left: 4%;
        white-space: nowrap;
    }

    .block-my {
        border: 2px solid black;
        width: 26px;
        height: 26px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .two {
        border-color: black;
        border-width: 1px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: radial-gradient(circle closest-corner at 70px 50px, #3C3771, #130C37);
        color: #FFAA00;
        font-size: 13px;
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
    }

    .block-two {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 10%;
        padding-top: 2%;
        padding-bottom: 1%;
    }

    .block-one {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .block {
        border: 2px solid black;
        width: 37px;
        height: 37px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .one {
        border-color: black;
        border-width: 1px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: radial-gradient(circle closest-corner at 70px 50px, #FFDD00, #FF7104);
        color: #5d00ff;
        font-size: 17px;
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
    }

    h2 {
        color: #0d0e23;
        font-family: 'Montserrat', sans-serif;
        font-size: 15px;
        text-align: center;
        padding-left: 6%;
        white-space: nowrap;
    }

    div.title {
        color: #0d0e23;
        font-family: 'Montserrat', sans-serif;
        font-size: 22px;
        text-align: center;
        margin: 0;
        padding-top: 21%;
        padding-bottom: 5%;
    }

    .main {
        background-image: url(../assets/images/bg-robot.png);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        height: 922px;
        max-width: 414px;
        display: flex;
        flex-direction: column;
    }

    /*============================================================768===================================*/
    @media (min-width: 415px) {
        .main {
            display: none;
        }
    }
    /* =======================================min-width: 320px==================================*/
    @media (max-width: 320px) {
        h3{
            color: #0d0e23;
            font-size: 11px;
            font-family: 'Montserrat', sans-serif;
            text-align: left;
            font-weight: normal;
            margin-left: 0;
            padding-left: 4%;
            white-space: break-spaces;
        }
        h2{
            color: #0d0e23;
            font-family: 'Montserrat', sans-serif;
            font-size: 13px;
            text-align: center;
            padding-left: 6%;
            white-space: nowrap;
        }
        .block-two{
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 10%;
            padding-top: 0;
            padding-bottom: 1%;
        }
    }
    /* =======================================min-width: 320px==================================*/

</style>
