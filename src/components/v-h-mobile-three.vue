<template>
    <div class="main">
        <div class="container">
            <div class="title">Этапы работ</div>
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

        <div class="studio">kiwi.studio</div>
        <img src="../assets/mobail/webp/ifon-six.webp" alt="pic" class="ifon">
        <div class="number">03</div>
        </div>
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
        align-self: center;
    }

    .studio {
        font-size: 9px;
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        color: #0e0d0d;
        align-self: self-start;
    }

    .ifon {
        width: 62%;
    }

    .cont-two {
        background-color: white;
        width: 100%;
        height: 6rem;
        display: flex;
        align-items: flex-end;
        justify-content: center;
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

    div.title {
        font-size: 20px;
        color: #FEBDF5;
        font-family: 'Montserrat', sans-serif;
        padding-top: 5%;
        margin: 40px 0;
    }

    .container {
        background: linear-gradient(200deg, #1B1932, #100D0D, #431C1C);
        max-width: 414px;
        height: 591px;
    }

    /* =======================================min-width: 414px==================================*/
    @media (min-width: 415px) {
        .main {
            display: none;
        }
    }

    /* =======================================min-width: 414px==================================*/
    /* =======================================min-width: 411==================================*/
    @media (max-width: 411px) {
        .ifon {
            width: 58%;
        }

        .studio {
            font-size: 9px;
            font-family: 'Montserrat', sans-serif;
            font-weight: bold;
        }

        .number {
            font-size: 40px;
            color: black;
            font-family: 'Montserrat', sans-serif;
            z-index: 10;
        }
    }

    /* =======================================min-width: 411==================================*/
    /* =======================================min-width: 375==================================*/
    @media (max-width: 375px) {
        .ifon {
            width: 58%;
        }

        .studio {
            font-size: 9px;
            font-family: 'Montserrat', sans-serif;
            font-weight: bold;
        }

        .number {
            font-size: 40px;
            color: black;
            font-family: 'Montserrat', sans-serif;
            z-index: 10;
        }
    }

    /* =======================================min-width: 375==================================*/
    /* =======================================min-width: 360==================================*/
    @media (max-width: 360px) {
        .ifon {
            width: 58%;
        }

        .studio {
            font-size: 9px;
            font-family: 'Montserrat', sans-serif;
            font-weight: bold;
        }

        .number {
            font-size: 40px;
            color: black;
            font-family: 'Montserrat', sans-serif;
            z-index: 10;
        }

        li {
            list-style: none;
            font-size: 17px;
            text-align: left;
            font-family: 'Montserrat', sans-serif;
            color: #FEBDF5;
            padding-top: 3%;
        }

        .container {
            background: linear-gradient(200deg, #1B1932, #100D0D, #431C1C);
            max-width: 414px;
            height: 558px;
        }
    }

    /* =======================================min-width: 360==================================*/
    /* =======================================min-width: 320==================================*/
    @media (max-width: 320px) {
        .ifon {
            width: 58%;
        }

        .studio {
            font-size: 9px;
            font-family: 'Montserrat', sans-serif;
            font-weight: bold;
        }

        .number {
            font-size: 40px;
            color: black;
            font-family: 'Montserrat', sans-serif;
            z-index: 10;
        }

        .container {
            background: linear-gradient(200deg, #1B1932, #100D0D, #431C1C);
            max-width: 414px;
            height: 449px;
        }
    }

    /* =======================================min-width: 320==================================*/

</style>