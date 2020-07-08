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
            <svg width="702.41" height="739.9" viewBox="0 0 702.41 739.9">
                <path id="Path_52" data-name="Path 52" class="cls-1" d="M621.788,1078V348.1H1314.2" transform="translate(-611.788 -338.1)"/>
            </svg>
        </div>
        <div class="circle-two">
            <svg width="708.676" height="538.9" viewBox="0 0 708.676 538.9">
                <path id="Path_53" data-name="Path 53" class="cls-2" d="M621.788,877V348.1h698.676" transform="translate(-611.788 -338.1)"/>
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

    .circle-two{
        position: absolute;
        top: 430px;
        right: 369px;
    }
    .cls-2 {
        fill: none;
        stroke: #00b5e3;
        stroke-linejoin: round;
        stroke-width: 20px;
        opacity: 0.25;
    }
    .circle{
        position: absolute;
        top: 274px;
        right: 464px;
    }

    .cls-1 {
        fill: none;
        stroke: #cd00e3;
        stroke-linejoin: round;
        stroke-width: 20px;
        opacity: 0.25;
    }
    h1{
        font-size: 450%;
        color: #ffbe6a;
        text-shadow:
                2px  2px 0 #000,
                -1px -1px 0 #000,
                1px -1px 0 #000,
                -1px  1px 0 #000,
                1px  1px 0 #000;
        font-family: Montserrat, sans-serif;
        font-weight: bold;
    }

    small{
        font-size: 170%;
        font-style: italic;
        font-family: Montserrat, sans-serif;
        color: black;
    }
    .main{
        height: 953px;
        background-color: #E1E1E1;
        display: flex;
        position: relative;
    }
    .web{
        position: absolute;
        top: 410px;
        left: 145px;
    }
    img:nth-child(1){
        height: 668px;
        width: 352px;
        position: absolute;
        top: 145px;
        right: 557px;
        z-index: 5;
    }
    img:nth-child(2){
        width: 466px;
        height: 826px;
        position: absolute;
        right: 305px;
        top: 65px;
        z-index: 10;
    }
    img:nth-child(3){
        height: 668px;
        width: 352px;
        position: absolute;
        top: 145px;
        right: 129px;
    }
    /*====================================================max-width: 1366px========================================*/
    @media (max-width: 1366px) {
        img[data-v-7a9835a2]:nth-child(1) {
            position: absolute;
            top: 145px;
            right: 357px;
            z-index: 5;
        }
        img[data-v-7a9835a2]:nth-child(2) {
            position: absolute;
            right: 105px;
            top: 91px;
            z-index: 10;
            width: 466px;
            height: 764px;
        }

        .web{
            top: 0;
            left: 12px;
        }
        small[data-v-7a9835a2] {
            font-size: 136%;
            font-style: italic;
            font-family: Montserrat, sans-serif;
            color: black;
        }

        h1{
            font-size: 350%;
            color: #ffbe6a;
            text-shadow:
                    2px  2px 0 #000,
                    -1px -1px 0 #000,
                    1px -1px 0 #000,
                    -1px  1px 0 #000,
                    1px  1px 0 #000;
            font-family: Montserrat, sans-serif;
            font-weight: bold;
        }
    }
    /*====================================================max-width: 1366px========================================*/
    /*====================================================max-width: 1024px========================================*/
    @media (max-width: 1366px) {
        .web{
            position: absolute;
            top: 0;
            left: 12px;
        }
        .web{
            top: -32px;
            left: 80px;
        }
        .main{
            margin-top: -15px;
        }
    }
    /*====================================================max-width: 1024px========================================*/
    /*====================================================max-width: 1024px========================================*/
    @media (max-width: 1366px) {
        .web{
            position: absolute;
            top: 0;
            left: 12px;
        }
        .web{
            top: -32px;
            left: 80px;
        }
        .main{
            margin-top: -15px;
        }
        img:nth-child(1){

            position: absolute;
            top: 145px;
            right: 357px;
            z-index: 5;
        }
        img:nth-child(2){

            position: absolute;
            right: 105px;
            top: 65px;
            z-index: 10;
        }
        img:nth-child(3){

            position: absolute;
            top: 145px;
            right: 29px;
        }
    }
    /*====================================================max-width: 1024px========================================*/
</style>
