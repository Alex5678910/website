<template>
    <div class="container">
        <div class="header">
            <h2 class="animate__animated animate__bounceInUp"><span class="text animate__animated animate__headShake">WebKiwi</span><br>
                STUDIO
            </h2>
            <div class="title animate__animated animate__bounceInUp">-Услуги по digital разработке</div>
        </div>
        <div class="romb-3">
            <img src="../assets/img/webp/romb1.webp" alt="pic">
            <img src="../assets/img/webp/romb2.webp" alt="pic">
            <img src="../assets/img/webp/romb3.webp" alt="pic">
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-header-two"
    }
</script>

<style scoped>
    .container{
        -webkit-perspective: 1px;
        perspective: 1px;
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
    }
    .romb-3 img{
        width: 17%;
        height: auto;
        margin-top: -7%;
        margin-left: 4%;
    }

    h1{
        font-size: 375%;
        text-align: right;
        color: aliceblue;
        font-weight: bold;
        font-family: 'Montserrat Alternates', sans-serif;
        padding-bottom: 21%;
        padding-top: 2%;
        padding-right: 8%;

    }
    div.title{
        font-size: 375%;
        text-align: right;
        color: aliceblue;
        font-weight: bold;
        font-family: 'Montserrat Alternates', sans-serif;
        padding-bottom: 21%;
        padding-top: 2%;
        padding-right: 8%;

    }
    .header {
        background-image: url(../assets/img/webp/bg1.webp);
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        -webkit-box-shadow: -1px 14px 9px -8px #3f2adf;
        box-shadow: -1px 14px 9px -8px #3f2adf;
        height: 100vh;
        background-size: cover;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    h2 {
        font-family: Montserrat, sans-serif;
        font-size: 740%;
        font-weight: 400;
        color: aliceblue;
        padding-top: 10%;
        text-align: -webkit-left;
        padding-left: 9%;
        margin-top: 0;
    }

    .text {
        font-weight: 700;
        color: #ffbe6a;
    }
    /*==============================================================media=============================*/
    /*====================================================max-width: 1366px========================================*/

    @media (max-width: 1366px) {
        .romb-3 img{
            margin-top: -7%;
        }
        h2 {
            font-family: Montserrat, sans-serif;
            font-size: 436%;
            font-weight: 400;
            color: aliceblue;
            padding-top: 9%;
            text-align: -webkit-left;
            padding-left: 9%;
            margin-top: 0;
        }
        h1 {
            font-size: 253%;
            text-align: right;
            color: aliceblue;
            font-weight: bold;
            font-family: 'Montserrat Alternates', sans-serif;
            padding-bottom: 17%;
            padding-top: 8%;
            padding-right: 8%;
        }
        div.title {
            font-size: 253%;
            text-align: right;
            color: aliceblue;
            font-weight: bold;
            font-family: 'Montserrat Alternates', sans-serif;
            padding-bottom: 17%;
            padding-top: 8%;
            padding-right: 8%;
        }
        .header {
            background-image: url(../assets/img/webp/bg1.webp);
            background-attachment: fixed;
            background-position: center;
            background-repeat: no-repeat;
            -webkit-box-shadow: -1px 14px 9px -8px #3f2adf;
            box-shadow: -1px 14px 9px -8px #3f2adf;
            background-size: cover;
            max-width: 1366px;
        }

    }

    /*====================================================max-width: 1366px========================================*/
    /*====================================================max-width: 1025px========================================*/

    @media (max-width: 1024px) {
        .romb-3 img{
            margin-top: -7%;
        }

        h2{
            font-family: Montserrat, sans-serif;
            font-size: 540%;
            font-weight: 400;
            color: aliceblue;
            padding-top: 10%;
            text-align: left;
            padding-left: 9%;
            margin-top: -16px;
        }
        .header {
            -webkit-box-shadow: -1px 14px 9px -8px #3f2adf;
            box-shadow: -1px 14px 9px -8px #3f2adf;
            max-width: 1366px;
            height: 47vh;
        }
    }

    /*====================================================max-width: 1025px========================================*/
    /*====================================================max-width: 414========================================*/
    @media (max-width: 414px) {
        .container{
            display: none;
        }
    }
    /*====================================================max-width: 414========================================*/
    /*====================================================max-width: 1025px========================================*/

    @media (max-width: 1024px) {
        h1{
            font-size: 186%;
            text-align: right;
            color: aliceblue;
            font-weight: bold;
            font-family: 'Montserrat Alternates', sans-serif;
            padding-bottom: 17%;
            padding-top: 0%;
            padding-right: 8%;
        }
        div.title{
            font-size: 186%;
            text-align: right;
            color: aliceblue;
            font-weight: bold;
            font-family: 'Montserrat Alternates', sans-serif;
            padding-bottom: 17%;
            padding-top: 0%;
            padding-right: 8%;
        }
    }

    /*====================================================max-width: 1025px========================================*/
</style>

