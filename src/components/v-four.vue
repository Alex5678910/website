<template>
    <div class="container">
        <h3>Этапы работ</h3>
        <div class="main">
            <div id="grid" class="grid">

                <div class="grid__item">
                    <svg width="114.492" height="101.602" viewBox="0 0 114.492 101.602" class="svg">
                        <path id="Path_42" data-name="Path 42" d="M3130.891,5467.77s0,107.248,112.893,99.722"
                              transform="translate(-3129.391 -5467.769)" fill="none" stroke="#707070" stroke-width="3"/>
                    </svg>
                </div>

                <div class="grid__item">
                    <div><img class="fl" src="../assets/images/ic1.png" alt="pic"></div>
                    <div><p>Постановка целей<br>
                        и задач сайта</p></div>
                </div>

                <div class="grid__item">
                    <svg width="172.233" height="3" viewBox="0 0 172.233 3" class="svg">
                        <path id="Path_43" data-name="Path 43" d="M3409.926,5567.87h172.233"
                              transform="translate(-3409.926 -5566.37)" fill="none" stroke="#707070" stroke-width="3"/>
                    </svg>
                </div>

                <div class="grid__item">
                    <div><img class="fl" src="../assets/images/ic2.png" alt="pic"></div>
                    <div><p>Создание и проработка<br>
                        технического задания</p></div>
                </div>

                <div class="grid__item">
                    <svg width="172.233" height="3" viewBox="0 0 172.233 3" class="svd">
                        <path id="Path_43" data-name="Path 43" d="M3409.926,5567.87h172.233"
                              transform="translate(-3409.926 -5566.37)" fill="none" stroke="#707070" stroke-width="3"/>
                    </svg>
                </div>

                <div class="grid__item">
                    <div><img class="fl" src="../assets/images/ic3.png" alt="pic"></div>
                    <div><p>Прототипирование</p></div>
                </div>

                <div class="grid__item">
                    <svg width="172.233" height="3" viewBox="0 0 172.233 3" class="svv">
                        <path id="Path_43" data-name="Path 43" d="M3409.926,5567.87h172.233"
                              transform="translate(-3409.926 -5566.37)" fill="none" stroke="#707070" stroke-width="3"/>
                    </svg>
                </div>

                <div class="grid__item">
                    <div><img class="fl" src="../assets/images/ic4.png" alt="pic"></div>
                    <div><p>Создание макета<br>
                        дизайна сайта</p></div>
                </div>

                <div class="grid__item">
                    <svg width="120.028" height="301.685" viewBox="0 0 120.028 301.685">
                        <path id="Path_49" data-name="Path 49"
                              d="M4402.8,5567.869h97.832l20.7,21.577v257.77l-20.7,19.338H4402.8"
                              transform="translate(-4402.798 -5566.369)" fill="none" stroke="#707070" stroke-width="3"/>
                    </svg>
                </div>

                <div class="grid__item">
                    <svg width="52.701" height="3" viewBox="0 0 52.701 3" class="svg snt">
                        <path id="Path_50" data-name="Path 50" d="M3243.783,5947h-52.7"
                              transform="translate(-3191.082 -5945.5)"
                              fill="none" stroke="#707070" stroke-width="3"/>
                    </svg>
                </div>

                <div class="grid__item">
                    <img class="ft" src="../assets/images/ic1.png" alt="pic">
                    <p>Тестирование</p>
                </div>

                <div class="grid__item">
                    <svg width="172.233" height="3" viewBox="0 0 172.233 3" class="svg">
                        <path id="Path_43" data-name="Path 43" d="M3409.926,5567.87h172.233"
                              transform="translate(-3409.926 -5566.37)" fill="none" stroke="#707070" stroke-width="3"/>
                    </svg>
                </div>

                <div class="grid__item">
                    <img class="ft" src="../assets/images/ic2.png" alt="pic">
                    <p>Наполнение<br>
                        контентом</p>
                </div>

                <div class="grid__item">
                    <svg width="172.233" height="3" viewBox="0 0 172.233 3" class="svg">
                        <path id="Path_43" data-name="Path 43" d="M3409.926,5567.87h172.233"
                              transform="translate(-3409.926 -5566.37)" fill="none" stroke="#707070" stroke-width="3"/>
                    </svg>
                </div>

                <div class="grid__item">
                    <img class="ft" src="../assets/images/ic3.png" alt="pic">
                    <p>Программирование</p>
                </div>

                <div class="grid__item">
                    <svg width="172.233" height="3" viewBox="0 0 172.233 3" class="svg">
                        <path id="Path_43" data-name="Path 43" d="M3409.926,5567.87h172.233"
                              transform="translate(-3409.926 -5566.37)" fill="none" stroke="#707070" stroke-width="3"/>
                    </svg>
                </div>

                <div class="grid__item">
                    <div>
                        <img class="ft" src="../assets/images/ic4.png" alt="pic">
                        <p>Верстка</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-four"
    }
</script>

<style scoped>
    .grid {
        display: -ms-grid;
        display: grid;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        grid-column-gap: 0;
        grid-row-gap: 0;
        grid-template-areas: "a b c d e f g h i"
                             "j k l m z o p q i";
        padding-top: 7rem;
    }

    .grid__item:nth-child(1) {
        -ms-grid-row: 1;
        -ms-grid-column: 1;
        grid-area: a;
        margin-top: -2.5rem;
    }

    .grid__item:nth-child(2) {
        -ms-grid-row: 1;
        -ms-grid-column: 3;
        grid-area: b;
    }

    .grid__item:nth-child(3) {
        -ms-grid-row: 1;
        -ms-grid-column: 5;
        grid-area: c;
        margin-top: 2.5rem;
        margin-left: 5%;
    }

    .grid__item:nth-child(4) {
        -ms-grid-row: 1;
        -ms-grid-column: 7;
        grid-area: d;
    }

    .grid__item:nth-child(5) {
        -ms-grid-row: 1;
        -ms-grid-column: 9;
        grid-area: e;
        margin-top: 2.5rem;
        margin-left: -7%;
    }

    .grid__item:nth-child(6) {
        -ms-grid-row: 1;
        -ms-grid-column: 11;
        grid-area: f;
    }

    .grid__item:nth-child(7) {
        -ms-grid-row: 1;
        -ms-grid-column: 13;
        grid-area: g;
        margin-top: 2.5rem;
        margin-left: -2%;
    }

    .grid__item:nth-child(8) {
        -ms-grid-row: 1;
        -ms-grid-column: 15;
        grid-area: h;
    }

    .grid__item:nth-child(9) {
        -ms-grid-row: 1;
        -ms-grid-row-span: 3;
        -ms-grid-column: 17;
        grid-area: i;
        margin-top: 3.4rem;
    }

    .grid__item:nth-child(10) {
        -ms-grid-row: 3;
        -ms-grid-column: 1;
        grid-area: j;
        margin-top: 2.4rem;
        padding-top: 8rem;
        margin-right: -3rem;
    }

    .grid__item:nth-child(11) {
        -ms-grid-row: 3;
        -ms-grid-column: 3;
        grid-area: k;
        padding-top: 8rem;
    }

    .grid__item:nth-child(12) {
        -ms-grid-row: 3;
        -ms-grid-column: 5;
        grid-area: l;
        padding-top: 10.5rem;
    }

    .grid__item:nth-child(13) {
        -ms-grid-row: 3;
        -ms-grid-column: 7;
        grid-area: m;
        padding-top: 8rem;
    }

    .grid__item:nth-child(14) {
        -ms-grid-row: 3;
        -ms-grid-column: 9;
        grid-area: z;
        padding-top: 10.5rem;
    }

    .grid__item:nth-child(15) {
        -ms-grid-row: 3;
        -ms-grid-column: 11;
        grid-area: o;
        padding-top: 8rem;
    }

    .grid__item:nth-child(16) {
        -ms-grid-row: 3;
        -ms-grid-column: 13;
        grid-area: p;
        padding-top: 10.5rem;
    }

    .grid__item:nth-child(17) {
        -ms-grid-row: 3;
        -ms-grid-column: 15;
        grid-area: q;
        padding-top: 8rem;
    }

    .container {
        background-color: #E1E1E1;
        height: 995px;
    }

    .main {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    }

    img {
        background-color: #E9C7A0;
        border-radius: 50%;

    }

    h3 {
        color: black;
        font-weight: bold;
        font-family: 'Montserrat Alternates', sans-serif;
        text-align: center;
        font-size: 60px;
        padding-top: 10rem;
        margin: 40px 0;
    }

    p {
        font-size: 14px;
        font-family: 'Montserrat Alternates', sans-serif;
    }

    /*====================================================max-width: 1366========================================*/
    @media (max-width: 1366px) {
        .main {
            -webkit-transform: scale(.9);
            -ms-transform: scale(.9);
            transform: scale(.9);
        }

        h3 {
            color: black;
            font-weight: bold;
            font-family: 'Montserrat Alternates', sans-serif;
            text-align: center;
            font-size: 46px;
            padding-top: 3rem;
            margin: 40px 0;
        }

        .grid__item:nth-child(17) {
            -ms-grid-row: 3;
            -ms-grid-column: 15;
            grid-area: q;
            padding-top: 6rem;
        }

        .grid__item:nth-child(15) {
            -ms-grid-row: 3;
            -ms-grid-column: 11;
            grid-area: o;
            padding-top: 6rem;
        }

        .grid__item:nth-child(13) {
            -ms-grid-row: 3;
            -ms-grid-column: 7;
            grid-area: m;
            padding-top: 6rem;
        }

        .grid__item:nth-child(11) {
            -ms-grid-row: 3;
            -ms-grid-column: 3;
            grid-area: k;
            padding-top: 6rem;
        }

        .grid__item:nth-child(16) {
            -ms-grid-row: 3;
            -ms-grid-column: 13;
            grid-area: p;
            padding-top: 8.5rem;
        }

        .grid__item:nth-child(14) {
            -ms-grid-row: 3;
            -ms-grid-column: 9;
            grid-area: z;
            padding-top: 8.5rem;
        }

        .grid__item:nth-child(12) {
            -ms-grid-row: 3;
            -ms-grid-column: 5;
            grid-area: l;
            padding-top: 8.5rem;
        }

        .grid__item:nth-child(10){
            -ms-grid-row: 3;
            -ms-grid-column: 1;
            grid-area: j;
            padding-top: 6.5rem;
        }

        @media (max-width: 1366px) {

            .grid__item:nth-child(17) {
                -ms-grid-row: 3;
                -ms-grid-column: 15;
            }

            .grid__item:nth-child(15) {
                -ms-grid-row: 3;
                -ms-grid-column: 11;
            }

            .grid__item:nth-child(13) {
                -ms-grid-row: 3;
                -ms-grid-column: 7;
            }

            .grid__item:nth-child(11) {
                -ms-grid-row: 3;
                -ms-grid-column: 3;
            }

            .grid__item:nth-child(16) {
                -ms-grid-row: 3;
                -ms-grid-column: 13;
            }

            .grid__item:nth-child(14) {
                -ms-grid-row: 3;
                -ms-grid-column: 9;
            }

            .grid__item:nth-child(12) {
                -ms-grid-row: 3;
                -ms-grid-column: 5;
            }

            .grid__item:nth-child(10) {
                -ms-grid-row: 3;
                -ms-grid-column: 1;
            }
        }

        .grid {
            display: -ms-grid;
            display: grid;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
            grid-column-gap: 0;
            grid-row-gap: 0;
            padding-top: 0;
            grid-template-areas:
        "a b c d e f g h i"
        "j k l m z o p q i";
        }

        .container[data-v-40af7bad] {
            background-color: #E1E1E1;
            height: 668px;
        }

        .grid__item:nth-child(1) {
            -ms-grid-row: 1;
            -ms-grid-column: 1;
        }

        .grid__item:nth-child(2) {
            -ms-grid-row: 1;
            -ms-grid-column: 3;
        }

        .grid__item:nth-child(3) {
            -ms-grid-row: 1;
            -ms-grid-column: 5;
        }

        .grid__item:nth-child(4) {
            -ms-grid-row: 1;
            -ms-grid-column: 7;
        }

        .grid__item:nth-child(5) {
            -ms-grid-row: 1;
            -ms-grid-column: 9;
        }

        .grid__item:nth-child(6) {
            -ms-grid-row: 1;
            -ms-grid-column: 11;
        }

        .grid__item:nth-child(7) {
            -ms-grid-row: 1;
            -ms-grid-column: 13;
        }

        .grid__item:nth-child(8) {
            -ms-grid-row: 1;
            -ms-grid-column: 15;
        }

        .grid__item:nth-child(9) {
            -ms-grid-row: 1;
            -ms-grid-row-span: 3;
            -ms-grid-column: 17;
        }

        .grid__item:nth-child(10) {
            -ms-grid-row: 3;
            -ms-grid-column: 1;
        }

        .grid__item:nth-child(11) {
            -ms-grid-row: 3;
            -ms-grid-column: 3;
        }

        .grid__item:nth-child(12) {
            -ms-grid-row: 3;
            -ms-grid-column: 5;
        }

        .grid__item:nth-child(13) {
            -ms-grid-row: 3;
            -ms-grid-column: 7;
        }

        .grid__item:nth-child(14) {
            -ms-grid-row: 3;
            -ms-grid-column: 9;
        }

        .grid__item:nth-child(15) {
            -ms-grid-row: 3;
            -ms-grid-column: 11;
        }

        .grid__item:nth-child(16) {
            -ms-grid-row: 3;
            -ms-grid-column: 13;
        }

        .grid__item:nth-child(17) {
            -ms-grid-row: 3;
            -ms-grid-column: 15;
        }
    }

    /*====================================================max-width: 1366========================================*/
    /*====================================================max-width: 1024========================================*/
    @media (max-width: 1024px) {
        .main {
            -webkit-transform: scale(.7);
            -ms-transform: scale(.7);
            transform: scale(.7);
        }

        .container {
            background-color: #E1E1E1;
            height: 591px;
        }

        h3 {
            color: black;
            font-weight: bold;
            font-family: 'Montserrat Alternates', sans-serif;
            text-align: center;
            font-size: 33px;
            padding-top: 2rem;
        }

        .grid {
            display: -ms-grid;
            display: grid;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
            grid-column-gap: 0;
            grid-row-gap: 0;
            padding-top: 0;
            grid-template-areas:
        "a b c d e f g h i"
        "j k l m z o p q i";
        }

        .grid__item:nth-child(1) {
            -ms-grid-row: 1;
            -ms-grid-column: 1;
        }

        .grid__item:nth-child(2) {
            -ms-grid-row: 1;
            -ms-grid-column: 3;
        }

        .grid__item:nth-child(3) {
            -ms-grid-row: 1;
            -ms-grid-column: 5;
        }

        .grid__item:nth-child(4) {
            -ms-grid-row: 1;
            -ms-grid-column: 7;
        }

        .grid__item:nth-child(5) {
            -ms-grid-row: 1;
            -ms-grid-column: 9;
        }

        .grid__item:nth-child(6) {
            -ms-grid-row: 1;
            -ms-grid-column: 11;
        }

        .grid__item:nth-child(7) {
            -ms-grid-row: 1;
            -ms-grid-column: 13;
        }

        .grid__item:nth-child(8) {
            -ms-grid-row: 1;
            -ms-grid-column: 15;
        }

        .grid__item:nth-child(9) {
            -ms-grid-row: 1;
            -ms-grid-row-span: 3;
            -ms-grid-column: 17;
        }

        .grid__item:nth-child(10) {
            -ms-grid-row: 3;
            -ms-grid-column: 1;
        }

        .grid__item:nth-child(11) {
            -ms-grid-row: 3;
            -ms-grid-column: 3;
        }

        .grid__item:nth-child(12) {
            -ms-grid-row: 3;
            -ms-grid-column: 5;
        }

        .grid__item:nth-child(13) {
            -ms-grid-row: 3;
            -ms-grid-column: 7;
        }

        .grid__item:nth-child(14) {
            -ms-grid-row: 3;
            -ms-grid-column: 9;
        }

        .grid__item:nth-child(15) {
            -ms-grid-row: 3;
            -ms-grid-column: 11;
        }

        .grid__item:nth-child(16) {
            -ms-grid-row: 3;
            -ms-grid-column: 13;
        }

        .grid__item:nth-child(17) {
            -ms-grid-row: 3;
            -ms-grid-column: 15;
        }

        .grid__item:nth-child(17) {
            -ms-grid-row: 3;
            -ms-grid-column: 15;
        }

        .grid__item:nth-child(15) {
            -ms-grid-row: 3;
            -ms-grid-column: 11;
        }

        .grid__item:nth-child(13) {
            -ms-grid-row: 3;
            -ms-grid-column: 7;
        }

        .grid__item:nth-child(11) {
            -ms-grid-row: 3;
            -ms-grid-column: 3;
        }

        .grid__item:nth-child(16) {
            -ms-grid-row: 3;
            -ms-grid-column: 13;
        }

        .grid__item:nth-child(14) {
            -ms-grid-row: 3;
            -ms-grid-column: 9;
        }

        .grid__item:nth-child(12) {
            -ms-grid-row: 3;
            -ms-grid-column: 5;
        }

        .grid__item:nth-child(10) {
            -ms-grid-row: 3;
            -ms-grid-column: 1;
        }
    }

    /*====================================================max-width: 768========================================*/
    @media (max-width: 768px) {
        .main {
            -webkit-transform: scale(.5);
            -ms-transform: scale(.5);
            transform: scale(.5);
        }

        .container {
            background-color: #E1E1E1;
            height: 493px;
        }

        h3 {
            color: black;
            font-weight: bold;
            font-family: 'Montserrat Alternates', sans-serif;
            text-align: center;
            font-size: 30px;
            padding-top: 1rem;
        }

        .grid{
            display: -ms-grid;
            display: grid;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
            grid-column-gap: 0;
            grid-row-gap: 0;
            padding-top: 0;
            grid-template-areas:
        "a b c d e f g h i"
        "j k l m z o p q i";
        }

        .grid__item:nth-child(1){
            -ms-grid-row: 1;
            -ms-grid-column: 1;
        }

        .grid__item:nth-child(2){
            -ms-grid-row: 1;
            -ms-grid-column: 3;
        }

        .grid__item:nth-child(3){
            -ms-grid-row: 1;
            -ms-grid-column: 5;
        }

        .grid__item:nth-child(4){
            -ms-grid-row: 1;
            -ms-grid-column: 7;
        }

        .grid__item:nth-child(5){
            -ms-grid-row: 1;
            -ms-grid-column: 9;
        }

        .grid__item:nth-child(6){
            -ms-grid-row: 1;
            -ms-grid-column: 11;
        }

        .grid__item:nth-child(7){
            -ms-grid-row: 1;
            -ms-grid-column: 13;
        }

        .grid__item:nth-child(8){
            -ms-grid-row: 1;
            -ms-grid-column: 15;
        }

        .grid__item:nth-child(9){
            -ms-grid-row: 1;
            -ms-grid-row-span: 3;
            -ms-grid-column: 17;
        }

        .grid__item:nth-child(10){
            -ms-grid-row: 3;
            -ms-grid-column: 1;
        }

        .grid__item:nth-child(11){
            -ms-grid-row: 3;
            -ms-grid-column: 3;
        }

        .grid__item:nth-child(12){
            -ms-grid-row: 3;
            -ms-grid-column: 5;
        }

        .grid__item:nth-child(13){
            -ms-grid-row: 3;
            -ms-grid-column: 7;
        }

        .grid__item:nth-child(14){
            -ms-grid-row: 3;
            -ms-grid-column: 9;
        }

        .grid__item:nth-child(15){
            -ms-grid-row: 3;
            -ms-grid-column: 11;
        }

        .grid__item:nth-child(16){
            -ms-grid-row: 3;
            -ms-grid-column: 13;
        }

        .grid__item:nth-child(17){
            -ms-grid-row: 3;
            -ms-grid-column: 15;
        }

        .grid__item:nth-child(17){
            -ms-grid-row: 3;
            -ms-grid-column: 15;
        }

        .grid__item:nth-child(15){
            -ms-grid-row: 3;
            -ms-grid-column: 11;
        }

        .grid__item:nth-child(13){
            -ms-grid-row: 3;
            -ms-grid-column: 7;
        }

        .grid__item:nth-child(11){
            -ms-grid-row: 3;
            -ms-grid-column: 3;
        }

        .grid__item:nth-child(16){
            -ms-grid-row: 3;
            -ms-grid-column: 13;
        }

        .grid__item:nth-child(14){
            -ms-grid-row: 3;
            -ms-grid-column: 9;
        }

        .grid__item:nth-child(12){
            -ms-grid-row: 3;
            -ms-grid-column: 5;
        }

        .grid__item:nth-child(10){
            -ms-grid-row: 3;
            -ms-grid-column: 1;
        }
    }
    /*===================================================================================================================*/
    @media (max-width: 414px) {
        .container {
            display: none;
        }
    }
</style>