<template>
    <div class="main">
        <h1>Возможные функции</h1>
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
            <div class="img"><img src="../assets/images/bg-robot-three.png" alt=""></div>
        </div>
        <div class="block-three">
            <div class="img"><img src="../assets/images/big-robot.png" alt=""></div>
            <p>Современные боты выполняют множество задач, автоматически, без участия человека,<br>
                тем самым облегчая задачи и освобождая ваше время.</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-bots-three"
    }
</script>

<style scoped>
    .block-three{
        display: flex;
        flex-direction: row;
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
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-right: 20%;
    }

    .container{
        display: flex;
        justify-content: flex-end;
        flex-direction: row;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        height: 1862px;
        width: 100%;
    }
    .img{
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
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .two {
        border-color: black;
        border-width: 1px;
        width: 46px;
        height: 46px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: radial-gradient(circle closest-corner at 70px 50px, #3C3771, #130C37);
        color: #FFAA00;
        font-size: 35px;
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
    }

    .block-two {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 10%;
        margin-top: 2%;
        margin-bottom: 2%;
    }

    .block-one {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .block {
        border: 2px solid black;
        width: 103px;
        height: 103px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .one {
        border-color: black;
        border-width: 1px;
        width: 85px;
        height: 85px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
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

    h1 {
        color: #0d0e23;
        font-family: 'Montserrat', sans-serif;
        font-size: 40px;
        text-align: center;
        margin: 0;
        padding-top: 5%;
        padding-bottom: 5%;
    }

    .main {
        background-image: url(../assets/images/bg-robot.png);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        height: 1862px;
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    /*============================================================768===================================*/
    @media (max-width: 414px) {
        .main {
            display: none;
        }
    }
</style>