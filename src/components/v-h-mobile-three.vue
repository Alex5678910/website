<template>
    <div class="main">
        <div class="container">
            <h1>Этапы работ</h1>
            <ul>
                <li>-Сбор требований к приложению</li>
                <li>-Предварительная оценка<br>
                    <span>стоимости разработки</span>
                </li>
                <li>-Проектирование прототипа</li>
                <li>-Составление технического<br>
                    <span>задания</span>
                </li>
                <li>-Разработка первого релиза<br>
                    <span>продукта</span>
                </li>
                <li>-Тестирование</li>
                <li>-Публикация</li>
                <li>-Техническая поддержка</li>
            </ul>
        </div>
        <div class="cont-two">

        </div>
        <img src="../assets/mobail/ifon-six.png" alt="" class="ifon">
        <div class="studio">kiwi.studio</div>
        <div class="number">03</div>
    </div>
</template>

<script>
    export default {
        name: "v-h-mobile-three"
    }
</script>

<style scoped>
    .number {
        font-size: 40px;
        color: black;
        font-family: 'Montserrat', sans-serif;
        position: absolute;
        left: 80%;
        top: 200%;
        z-index: 10;
    }
    .studio{
        font-size: 9px;
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        position: absolute;
        left: 12%;
        top: 179%;
        color: white;
    }
    .ifon{
        position: absolute;
        top: 167%;
        left: 0;
        width: 100%;
    }
    .cont-two{
        background-color: white;
        width: 100%;
        height: 6rem;
        position: relative;
    }
    li span {
        padding-left: 2%;
    }

    li {
        list-style: none;
        font-size: 20px;
        text-align: left;
        font-family: 'Montserrat', sans-serif;
        color: #FEBDF5;
        padding-top: 4%;
    }

    h1 {
        font-size: 20px;
        color: #FEBDF5;
        font-family: 'Montserrat', sans-serif;
        padding-top: 5%;
    }

    .container {
        background: linear-gradient(200deg, #1B1932, #100D0D, #431C1C);
        max-width: 414px;
        height: 591px;
    }

    /* =======================================min-width: 414px==================================*/
    @media (min-width: 415px) {
        .container {
            display: none;
        }
    }

    /* =======================================min-width: 414px==================================*/
    /* =======================================min-width: 411==================================*/
    @media (max-width: 411px) {
        .ifon{
            position: absolute;
            top: 149%;
            left: 0;
            width: 100%;
        }
        .studio {
            font-size: 9px;
            font-family: 'Montserrat', sans-serif;
            font-weight: bold;
            position: absolute;
            left: 12%;
            top: 160%;
            color: white;
        }
        .number {
            font-size: 40px;
            color: black;
            font-family: 'Montserrat', sans-serif;
            position: absolute;
            left: 80%;
            top: 179%;
            z-index: 10;
        }
    }
    /* =======================================min-width: 411==================================*/
    /* =======================================min-width: 375==================================*/
    @media (max-width: 375px) {
        .ifon{
            position: absolute;
            top: 188%;
            left: 0;
            width: 100%;
        }
        .studio {
            font-size: 9px;
            font-family: 'Montserrat', sans-serif;
            font-weight: bold;
            position: absolute;
            left: 12%;
            top: 199%;
            color: white;
        }
        .number {
            font-size: 40px;
            color: black;
            font-family: 'Montserrat', sans-serif;
            position: absolute;
            left: 80%;
            top: 220%;
            z-index: 10;
        }
    }
    /* =======================================min-width: 375==================================*/
    /* =======================================min-width: 360==================================*/
    @media (max-width: 360px) {
        .ifon{
            position: absolute;
            top: 188%;
            left: 0;
            width: 100%;
        }
        .studio {
            font-size: 9px;
            font-family: 'Montserrat', sans-serif;
            font-weight: bold;
            position: absolute;
            left: 12%;
            top: 199%;
            color: white;
        }
        .number {
            font-size: 40px;
            color: black;
            font-family: 'Montserrat', sans-serif;
            position: absolute;
            left: 80%;
            top: 220%;
            z-index: 10;
        }
        li{
            list-style: none;
            font-size: 17px;
            text-align: left;
            font-family: 'Montserrat', sans-serif;
            color: #FEBDF5;
            padding-top: 3%;
        }
        .container{
            background: linear-gradient(200deg, #1B1932, #100D0D, #431C1C);
            max-width: 414px;
            height: 558px;
        }
    }
    /* =======================================min-width: 360==================================*/
    /* =======================================min-width: 320==================================*/
    @media (max-width: 320px) {
        .ifon{
            position: absolute;
            top: 195%;
            left: 0;
            width: 100%;
        }
        .studio {
            font-size: 9px;
            font-family: 'Montserrat', sans-serif;
            font-weight: bold;
            position: absolute;
            left: 12%;
            top: 209%;
            color: white;
        }
        .number {
            font-size: 40px;
            color: black;
            font-family: 'Montserrat', sans-serif;
            position: absolute;
            left: 80%;
            top: 226%;
            z-index: 10;
        }
        .container{
            background: linear-gradient(200deg, #1B1932, #100D0D, #431C1C);
            max-width: 414px;
            height: 449px;
        }
    }
    /* =======================================min-width: 320==================================*/

</style>