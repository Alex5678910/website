<template>
    <div class="main-menu">
    <div class="main">
        <div class="title">Возможные функции</div>
        <div class="container">
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
            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="18.138" viewBox="0 0 2 18.138">
                <path id="Path_176" data-name="Path 176" d="M10127.748,4206.534v18.138" transform="translate(-10126.748 -4206.534)" fill="none" stroke="#707070" stroke-width="2" stroke-dasharray="3"/>
            </svg>
            <div class="block-two">
                <div class="block-my">
                    <div class="two">2</div>
                </div>
                <h3>Наполнение контентом</h3>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="18.138" viewBox="0 0 2 18.138">
                <path id="Path_176" data-name="Path 176" d="M10127.748,4206.534v18.138" transform="translate(-10126.748 -4206.534)" fill="none" stroke="#707070" stroke-width="2" stroke-dasharray="3"/>
            </svg>
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
            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="18.138" viewBox="0 0 2 18.138">
                <path id="Path_176" data-name="Path 176" d="M10127.748,4206.534v18.138" transform="translate(-10126.748 -4206.534)" fill="none" stroke="#707070" stroke-width="2" stroke-dasharray="3"/>
            </svg>
            <div class="block-two">
                <div class="block-my">
                    <div class="two">2</div>
                </div>
                <h3>Обработка данных</h3>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="18.138" viewBox="0 0 2 18.138">
                <path id="Path_176" data-name="Path 176" d="M10127.748,4206.534v18.138" transform="translate(-10126.748 -4206.534)" fill="none" stroke="#707070" stroke-width="2" stroke-dasharray="3"/>
            </svg>
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
            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="18.138" viewBox="0 0 2 18.138">
                <path id="Path_176" data-name="Path 176" d="M10127.748,4206.534v18.138" transform="translate(-10126.748 -4206.534)" fill="none" stroke="#707070" stroke-width="2" stroke-dasharray="3"/>
            </svg>
            <div class="block-two">
                <div class="block-my">
                    <div class="two">2</div>
                </div>
                <h3>Работы с информационными потоками</h3>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="2" height="18.138" viewBox="0 0 2 18.138">
                <path id="Path_176" data-name="Path 176" d="M10127.748,4206.534v18.138" transform="translate(-10126.748 -4206.534)" fill="none" stroke="#707070" stroke-width="2" stroke-dasharray="3"/>
            </svg>
            <div class="block-two">
                <div class="block-my">
                    <div class="two">3</div>
                </div>
                <h3>Аналитика</h3>
            </div>
        </div>
            <div class="images-r"><img src="../assets/images/bg-robot-three.png" alt=""></div>
        </div>
        <div class="block-three">
            <div class="img"><img src="../assets/images/big-robot.png" alt=""></div>
            <p>Современные боты выполняют множество задач, автоматически, без участия человека,<br>
                тем самым облегчая задачи и освобождая ваше время.</p>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "v-bots-three"
    }
</script>

<style scoped>
    .main-menu{
        background-image: url(../assets/images/bg-robot.png);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        height: 1862px;
        width: 100%;
    }
    .block-three{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        -ms-flex-pack: distribute;
        justify-content: space-around;
    }
    p{
        color: white;
        font-size: 18px;
        font-family: 'Montserrat', sans-serif;
        font-weight: normal;
        text-align: right;
    }
    svg{
        margin-left: 15%;
    }
    .container-one{
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
        padding-right: 17%;
    }

    .container{
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -ms-flex-direction: row;
        flex-direction: row;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        height: 1233px;
        width: 100%;
    }
    .img{
        width: -webkit-fit-content;
        width: -moz-fit-content;
        width: fit-content;
    }
    h3 {
        color: #0d0e23;
        font-size: 18px;
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        padding-left: 2rem;
    }

    .block-my {
        border: 2px solid black;
        width: 60px;
        height: 60px;
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
        width: 46px;
        height: 46px;
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
        font-size: 35px;
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
        margin-top: 2%;
        margin-bottom: 2%;
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
        width: 103px;
        height: 103px;
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
        width: 85px;
        height: 85px;
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
        font-size: 53px;
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
    }

    h2 {
        color: #0d0e23;
        font-family: 'Montserrat', sans-serif;
        font-size: 34px;
        text-align: center;
        padding-left: 2rem;
    }

    div.title {
        color: #0d0e23;
        font-family: 'Montserrat', sans-serif;
        font-size: 40px;
        text-align: center;
        margin: 0;
        padding-top: 5%;
        padding-bottom: 5%;
    }

    .main {
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        height: 1862px;
        width: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
    }
    /*============================================================768===================================*/
    @media (max-width: 414px) {
        .main-menu {
            display: none;
        }
    }
    /*============================================================1366===================================*/
    @media (max-width: 1366px) {
        .container{
            position: relative;
        }
        .images-r{
            position: absolute;
            right: -12%;

        }
        .main {
            max-width: 1366px;
        }
        .main{
            -webkit-transform: scale(.8);
            -ms-transform: scale(.8);
            transform: scale(.8);
        }
        .main-menu{
            height: 1512px;
            width: 100%;
        }
        div.title{
            color: #0d0e23;
            font-family: 'Montserrat', sans-serif;
            font-size: 40px;
            text-align: center;
            padding-top: 0;
            padding-bottom: 5%;
            margin-top: -9%;
        }
        .block-three{
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row;
            -ms-flex-pack: distribute;
            justify-content: space-around;
            padding-top: 0%;
            margin-bottom: 7%;
        }
        h2{
            color: #0d0e23;
            font-family: 'Montserrat', sans-serif;
            font-size: 34px;
            text-align: center;
            padding-left: 1rem;
            white-space: nowrap;
        }
        .container-one{
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
            padding-right: 33%;
        }
    }
    /*============================================================1366===================================*/
    /*============================================================1024===================================*/
    @media (max-width: 1024px) {
        .container{
            position: relative;
        }
        .images-r{
            position: absolute;
            right: -22%;

        }
        .main{
            -webkit-transform: scale(.7);
            -ms-transform: scale(.7);
            transform: scale(.7);
            max-width: 1024px;
        }
        .main-menu{
            height: 1261px;
            width: 100%;
        }
        div.title{
            color: #0d0e23;
            font-family: 'Montserrat', sans-serif;
            font-size: 40px;
            text-align: center;
            padding-top: 0;
            padding-bottom: 5%;
            margin-top: -31%;
        }
        .block-three{
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row;
            -ms-flex-pack: distribute;
            justify-content: space-around;
            padding-top: 0%;
            margin-bottom: 34%;
        }
        h2{
            color: #0d0e23;
            font-family: 'Montserrat', sans-serif;
            font-size: 34px;
            text-align: center;
            padding-left: 1rem;
            white-space: nowrap;
        }
        .container-one{
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
            padding-right: 33%;
        }
        p{
            color: white;
            font-size: 18px;
            font-family: 'Montserrat', sans-serif;
            font-weight: normal;
            text-align: left;
        }
    }
    /*============================================================1024===================================*/
    /*============================================================768===================================*/
    @media (max-width: 768px) {
        .images-r {
            position: absolute;
            right: -30%;
            -webkit-transform: scale(.7);
            -ms-transform: scale(.7);
            transform: scale(.7);
        }
        .block-three{
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row;
            -ms-flex-pack: distribute;
            justify-content: space-around;
            padding-top: 0%;
            -webkit-transform: scale(1);
            -ms-transform: scale(1);
            transform: scale(1);
        }
        p{
            color: white;
            font-size: 18px;
            font-family: 'Montserrat', sans-serif;
            font-weight: normal;
            text-align: left;
            display: none;
        }
    }
    /*============================================================768===================================*/
</style>