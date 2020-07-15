<template>
    <div class="main">
        <div class="web">
            <h1>Web-разработка</h1>
            <small>Создание, разработка, продвижение....</small>
        </div>

        <div class="book">
            <img src="../assets/images/book1.png" alt="">
            <img src="../assets/images/book2.png" alt="">
            <img src="../assets/images/book3.png" alt="">
        </div>

        <div class="circle">
            <svg width="702.41" height="739.9" viewBox="0 0 702.41 739.9" class="svg-one">
                <path id="Path_52" data-name="Path 52" class="cls-1" d="M621.788,1078V348.1H1314.2"
                      transform="translate(-611.788 -338.1)"/>
            </svg>
        </div>

        <div class="circle-two">
            <svg width="708.676" height="538.9" viewBox="0 0 708.676 538.9" class="svg-two">
                <path id="Path_53" data-name="Path 53" class="cls-2" d="M621.788,877V348.1h698.676"
                      transform="translate(-611.788 -338.1)"/>
            </svg>
        </div>

    </div>
</template>

<script>
    export default {
        name: "v-one"
    }
</script>

<style scoped>

    .circle-two {
        position: absolute;
        top: 45.1%;
        right: 19.4%;
    }

    .cls-2 {
        fill: none;
        stroke: #00b5e3;
        stroke-linejoin: round;
        stroke-width: 3.2%;
        opacity: 0.25;
    }

    .circle {
        position: absolute;
        top: 28.8%;
        right: 24.344%;
    }

    .cls-1 {
        fill: none;
        stroke: #cd00e3;
        stroke-linejoin: round;
        stroke-width: 2.9%;
        opacity: 0.25;
    }

    h1 {
        font-size: 450%;
        color: #ffbe6a;
        text-shadow: 2px 2px 0 #000,
        -1px -1px 0 #000,
        1px -1px 0 #000,
        -1px 1px 0 #000,
        1px 1px 0 #000;
        font-family: Montserrat, sans-serif;
        font-weight: bold;
    }

    small {
        font-size: 170%;
        font-style: italic;
        font-family: Montserrat, sans-serif;
        color: black;
        margin-right: 17%;
    }

    .main {
        height: 953px;
        background-color: #E1E1E1;
        display: flex;
        position: relative;
    }

    .web {
        position: absolute;
        top: 31%;
        left: 7.5%;
    }

    img:nth-child(1) {
        height: 70%;
        width: 19%;
        position: absolute;
        top: 16%;
        right: 29%;
        z-index: 5;
    }

    img:nth-child(2) {
        width: 24%;
        height: 87%;
        position: absolute;
        right: 17%;
        top: 7%;
        z-index: 10;
    }

    img:nth-child(3) {
        height: 70%;
        width: 19%;
        position: absolute;
        top: 16%;
        right: 9%;
    }
/*============================================================1366===================================*/
    @media (max-width: 1366px) {
        svg.svg-one{
            height: 560px;
        }
        svg.svg-two{
            height: 409px;
        }
        h1 {
            font-size: 335%;
            color: #ffbe6a;
            text-shadow: 2px 2px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
            font-family: Montserrat, sans-serif;
            font-weight: bold;
        }

        small[data-v-7a9835a2] {
            font-size: 150%;
            font-style: italic;
            font-family: Montserrat, sans-serif;
            color: black;
            margin-right: 0;
        }

        .cls-1 {
            fill: none;
            stroke: #cd00e3;
            stroke-linejoin: round;
            opacity: 0.25;
        }

        .cls-2 {
            fill: none;
            stroke: #00b5e3;
            stroke-linejoin: round;
            /*stroke-width: 2%;*/
            opacity: 0.25;
        }
        .main {
            height: 675px;
            background-color: #E1E1E1;
            display: flex;
            position: relative;
        }
        .circle {
            position: absolute;
            top: 28.8%;
            right: 12.344%;
            z-index: 1;
        }
        .circle-two{
            position: absolute;
            top: 45.1%;
            right: 5.4%;
        }
        img:nth-child(1) {
            z-index: 10;
        }

        img:nth-child(2) {
            z-index: 15;
        }

        img:nth-child(3) {
         z-index: 10;
        }
    }
    /*============================================================1366===================================*/
    /*============================================================1024===================================*/
    @media (max-width: 1024px) {
        svg.svg-one{
            height: 560px;
        }
        svg.svg-two{
            height: 409px;
        }
        h1[data-v-7a9835a2] {
            font-size: 235%;
            color: #ffbe6a;
            text-shadow: 2px 2px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
            font-family: Montserrat, sans-serif;
            font-weight: bold;
        }

        small[data-v-7a9835a2][data-v-7a9835a2] {
            font-size: 108%;
            font-style: italic;
            font-family: Montserrat, sans-serif;
            color: black;
            margin-right: 0;
        }

        .cls-1 {
            fill: none;
            stroke: #cd00e3;
            stroke-linejoin: round;
            opacity: 0.25;
        }

        .cls-2 {
            fill: none;
            stroke: #00b5e3;
            stroke-linejoin: round;
            opacity: 0.25;
        }
        .main[data-v-7a9835a2] {
            height: 590px;
            background-color: #E1E1E1;
            display: flex;
            position: relative;
        }
        .circle[data-v-7a9835a2] {
            position: absolute;
            top: 28.8%;
            right: 4.7%;
            z-index: 1;
            width: 69%;
        }

        .circle-two[data-v-7a9835a2][data-v-7a9835a2] {
            position: absolute;
            top: 45.1%;
            right: 0.4%;
        }
        img[data-v-7a9835a2]:nth-child(1) {
            height: 46%;
            width: 19%;
            position: absolute;
            top: 16%;
            right: 29%;
            z-index: 5;
        }

        img[data-v-7a9835a2][data-v-7a9835a2]:nth-child(2) {
            width: 24%;
            height: 65%;
            position: absolute;
            right: 17%;
            top: 7%;
            z-index: 10;
        }

        img[data-v-7a9835a2]:nth-child(3) {
            height: 47%;
            width: 19%;
            position: absolute;
            top: 16%;
            right: 9%;
            z-index: 8;
        }
        svg.svg-two[data-v-7a9835a2] {
            height: 323px;
        }
        svg.svg-one[data-v-7a9835a2] {
            height: 430px;
        }
    }
    /*============================================================1024===================================*/
    /*============================================================768===================================*/
    @media (max-width: 768px) {
        .circle[data-v-7a9835a2][data-v-7a9835a2] {
            position: absolute;
            top: 33.8%;
            right: 32.7%;
            z-index: 1;
            width: 34%;
        }
        svg.svg-one[data-v-7a9835a2][data-v-7a9835a2][data-v-7a9835a2] {
            height: 384px;
            width: 400px;
        }
        svg.svg-two[data-v-7a9835a2][data-v-7a9835a2] {
            height: 267px;
            width: 400px;
        }
        .main[data-v-7a9835a2][data-v-7a9835a2] {
            height: 479px;
            background-color: #E1E1E1;
            display: flex;
            position: relative;
        }
        .web[data-v-7a9835a2] {
            position: absolute;
            top: 1%;
            left: 7.5%;
        }
        .circle-two[data-v-7a9835a2][data-v-7a9835a2][data-v-7a9835a2] {
            position: absolute;
            top: 45.1%;
            right: 8.4%;
        }
    }
    /*============================================================768===================================*/
    @media (max-width: 414px) {
        .main {
            display: none !important;
        }
    }

</style>
