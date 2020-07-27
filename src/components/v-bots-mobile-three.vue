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
           <img src="../assets/images/big-robot.png" alt="pic">
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
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: start;
        -ms-flex-align: start;
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
        white-space: nowrap;
    }

    .block-my {
        border: 2px solid black;
        width: 26px;
        height: 26px;
        border-radius: 50%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    }

    .two {
        border-color: black;
        border-width: 1px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        background: -o-radial-gradient(70px 50px, circle closest-corner, #3C3771, #130C37);
        background: radial-gradient(circle closest-corner at 70px 50px, #3C3771, #130C37);
        color: #FFAA00;
        font-size: 13px;
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
    }

    .block-two {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        margin-left: 10%;
        padding-top: 2%;
        padding-bottom: 1%;
    }

    .block-one {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    }

    .block {
        border: 2px solid black;
        width: 37px;
        height: 37px;
        border-radius: 50%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    }

    .one {
        border-color: black;
        border-width: 1px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        background: -o-radial-gradient(70px 50px, circle closest-corner, #FFDD00, #FF7104);
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
        font-weight: 700;
    }

    .main {
        background-image: url(../assets/images/webp/bg-robot.webp);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        height: 922px;
        max-width: 414px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
    }
    @media screen and (-webkit-min-device-pixel-ratio:0) {
        .main {
            background-image: url(../assets/images/bg-robot.png);
        }
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
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            margin-left: 10%;
            padding-top: 0;
            padding-bottom: 1%;
        }
    }
    /* =======================================min-width: 320px==================================*/

</style>
