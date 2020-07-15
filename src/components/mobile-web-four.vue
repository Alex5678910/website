<template>
    <div class="container">
        <h1>Этапы работ</h1>
        <div id="grid" class="grid">

            <div class="grid__item">
                <img class="images" src="../assets/images/ic1.png" alt="">
            </div> <!--img-->

            <div class="grid__item">
                <p>Постановка целей<br>
                    и задач сайта</p>
            </div> <!--text-->

            <div class="grid__item">
                <svg width="2" height="25.788" viewBox="0 0 2 25.788">
                    <path id="Path_164" data-name="Path 164" d="M2406,5349.851v25.788"
                          transform="translate(-2405 -5349.851)" fill="none" stroke="#616161" stroke-width="2"/>
                </svg>
            </div>

            <div class="grid__item">
                <img class="images" src="../assets/images/ic2.png" alt="">
            </div> <!--img-->

            <div class="grid__item">
                <p>Создание и проработка<br>
                    технического задания</p>
            </div> <!--text-->

            <div class="grid__item">
                <svg width="2" height="25.788" viewBox="0 0 2 25.788">
                    <path id="Path_164" data-name="Path 164" d="M2406,5349.851v25.788"
                          transform="translate(-2405 -5349.851)" fill="none" stroke="#616161" stroke-width="2"/>
                </svg>
            </div>

            <div class="grid__item">
                <img class="images" src="../assets/images/ic3.png" alt="">
            </div> <!--img-->

            <div class="grid__item">
                <p>Прототипирование</p>
            </div> <!--text-->

            <div class="grid__item">
                <svg width="2" height="25.788" viewBox="0 0 2 25.788">
                    <path id="Path_164" data-name="Path 164" d="M2406,5349.851v25.788"
                          transform="translate(-2405 -5349.851)" fill="none" stroke="#616161" stroke-width="2"/>
                </svg>
            </div>

            <div class="grid__item">
                <img class="images" src="../assets/images/ic4.png" alt="">
            </div> <!--img-->

            <div class="grid__item">
                <p>Создание макета<br>
                    дизайна сайта</p>
            </div> <!--text-->

            <div class="grid__item">
                <svg width="2" height="25.788" viewBox="0 0 2 25.788">
                    <path id="Path_164" data-name="Path 164" d="M2406,5349.851v25.788"
                          transform="translate(-2405 -5349.851)" fill="none" stroke="#616161" stroke-width="2"/>
                </svg>
            </div>

            <div class="grid__item">
                <img class="images" src="../assets/images/ic5.png" alt="">
            </div> <!--img-->

            <div class="grid__item">
                <p>Верстка</p>
            </div> <!--text-->

            <div class="grid__item">
                <svg width="2" height="25.788" viewBox="0 0 2 25.788">
                    <path id="Path_164" data-name="Path 164" d="M2406,5349.851v25.788"
                          transform="translate(-2405 -5349.851)" fill="none" stroke="#616161" stroke-width="2"/>
                </svg>
            </div>

            <div class="grid__item">
                <img class="images" src="../assets/images/ic6.png" alt="">
            </div> <!--img-->

            <div class="grid__item">
                <p>Программирование</p>
            </div> <!--text-->

            <div class="grid__item">
                <svg width="2" height="25.788" viewBox="0 0 2 25.788">
                    <path id="Path_164" data-name="Path 164" d="M2406,5349.851v25.788"
                          transform="translate(-2405 -5349.851)" fill="none" stroke="#616161" stroke-width="2"/>
                </svg>
            </div>

            <div class="grid__item">
                <img class="images" src="../assets/images/ic7.png" alt="">
            </div> <!--img-->

            <div class="grid__item">
                <p>Наполнение<br>
                    контентом</p>
            </div> <!--text-->

            <div class="grid__item">
                <svg width="2" height="25.788" viewBox="0 0 2 25.788">
                    <path id="Path_164" data-name="Path 164" d="M2406,5349.851v25.788"
                          transform="translate(-2405 -5349.851)" fill="none" stroke="#616161" stroke-width="2"/>
                </svg>
            </div>

            <div class="grid__item">
                <img class="images" src="../assets/images/ic8.png" alt="">
            </div> <!--img-->

            <div class="grid__item">
                <p>Тестирование</p>
            </div> <!--text-->

        </div>
    </div>
</template>

<script>
    export default {
        name: "mobile-web-four"
    }
</script>

<style scoped>
    h1{
        font-family: 'Montserrat', sans-serif;
    }
    .images{
        width: 60px;
        height: 60px;
        background-color: #E9C7A0;
        border-radius: 50%;
    }
    .grid {
        font-family: 'Montserrat', sans-serif;
        margin-bottom: 2rem;
        margin-top: 2rem;
        display: grid;
        justify-content: center;
        grid-column-gap: 5%;
        grid-row-gap: 0;
        align-items: center;
        grid-template-columns: 100px 200px;
        grid-template-rows: 60px 35px 60px 35px 60px 35px 60px 35px 60px 35px 60px 35px 60px 35px 60px;
        grid-template-areas: "a b"
                             "c cc"
                             "d e"
                             "f ff"
                             "g h"
                             "i ii"
                             "j k"
                             "l ll"
                             "m o"
                             "p pp"
                             "q r"
                             "t tt"
                             "u v"
                             "w ww"
                             "z aa"
    }

    .grid__item:nth-child(1) {
        grid-area: a;
    }

    .grid__item:nth-child(2) {
        grid-area: b;
        text-align: left;
    }

    .grid__item:nth-child(3) {
        grid-area: c;
    }

    .grid__item:nth-child(4) {
        grid-area: d;
    }

    .grid__item:nth-child(5) {
        grid-area: e;
        text-align: left;
    }

    .grid__item:nth-child(6) {
        grid-area: f;
    }

    .grid__item:nth-child(7) {
        grid-area: g;
    }

    .grid__item:nth-child(8) {
        grid-area: h;
        text-align: left;
    }

    .grid__item:nth-child(9) {
        grid-area: i;
    }

    .grid__item:nth-child(10) {
        grid-area: j;
    }

    .grid__item:nth-child(11) {
        grid-area: k;
        text-align: left;
    }

    .grid__item:nth-child(12) {
        grid-area: l;
    }

    .grid__item:nth-child(13) {
        grid-area: m;
    }

    .grid__item:nth-child(14) {
        grid-area: o;
        text-align: left;
    }

    .grid__item:nth-child(15) {
        grid-area: p;
    }

    .grid__item:nth-child(16) {
        grid-area: q;
    }

    .grid__item:nth-child(17) {
        grid-area: r;
        text-align: left;
    }

    .grid__item:nth-child(18) {
        grid-area: t;
    }

    .grid__item:nth-child(19) {
        grid-area: u;
    }

    .grid__item:nth-child(20) {
        grid-area: v;
        text-align: left;
    }

    .grid__item:nth-child(21) {
        grid-area: w;
    }

    .grid__item:nth-child(22) {
        grid-area: z;
    }

    .grid__item:nth-child(23) {
        grid-area: aa;
        text-align: left;
    }

    .container {
    max-width: 414px;

    }
    /*====================================================min-width: 415========================================*/
    @media (min-width: 415px) {
        .container{
            display: none;
        }
    }
    /*====================================================min-width: 415========================================*/
    /*====================================================min-width: 415========================================*/
    @media (max-width: 320px) {
        .grid {
            font-family: 'Montserrat', sans-serif;
            margin-bottom: 2rem;
            margin-top: 2rem;
            display: grid;
            justify-content: center;
            grid-column-gap: 0;
            grid-row-gap: 0;
            align-items: center;
            grid-template-columns: 100px 200px;
            grid-template-rows: 60px 35px 60px 35px 60px 35px 60px 35px 60px 35px 60px 35px 60px 35px 60px;
            grid-template-areas: "a b"
                             "c cc"
                             "d e"
                             "f ff"
                             "g h"
                             "i ii"
                             "j k"
                             "l ll"
                             "m o"
                             "p pp"
                             "q r"
                             "t tt"
                             "u v"
                             "w ww"
                             "z aa"
        }
    }
    /*====================================================min-width: 415========================================*/
</style>