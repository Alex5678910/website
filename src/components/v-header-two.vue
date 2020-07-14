<template>
    <div class="container">
        <div class="header">
            <h1 class="animate__animated animate__bounceInUp"><span class="text animate__animated animate__headShake">WebKiwi</span><br>
                STUDIO
            </h1>
            <h2 class="animate__animated animate__bounceInUp">-Услуги по digital разработке</h2>
        </div>
        <div class="romb-3">
            <img src="../assets/img/romb1.png" alt="">
            <img src="../assets/img/romb2.png" alt="">
            <img src="../assets/img/romb3.png" alt="">
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
        perspective: 1px;
        transform-style: preserve-3d;
    }
    .romb-3 img{
        width: 17%;
        height: auto;
        margin-top: -7%;
        margin-left: 4%;
    }

    h2{
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
        background-image: url(../assets/img/bg1.png);
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        box-shadow: -1px 14px 9px -8px #3f2adf;
        height: 100vh;
        background-size: cover;
        box-sizing: border-box;
    }

    h1 {
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
        h1 {
            font-family: Montserrat, sans-serif;
            font-size: 436%;
            font-weight: 400;
            color: aliceblue;
            padding-top: 9%;
            text-align: -webkit-left;
            padding-left: 9%;
            margin-top: 0;
        }
        h2 {
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
            background-image: url(../assets/img/bg1.png);
            background-attachment: fixed;
            background-position: center;
            background-repeat: no-repeat;
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

        h1{
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
</style>