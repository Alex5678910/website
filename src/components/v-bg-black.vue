<template>
    <div class="bg">
        <h1>Индивидуальный подход<br>
            к каждому заказчику.</h1>
    </div>
</template>

<script>
    export default {
        name: "v-bg-black"
    }
</script>

<style scoped>
    .bg {
        background-image: url(../assets/img/bg3.png);
        background-attachment: fixed;
        background-position: center;
        height: 50rem;
        background-repeat: no-repeat;
        background-size: cover;
    }

    h1 {
        color: aliceblue;
        vertical-align: middle;
        font-family: 'Montserrat',sans-serif;
        font-size: 404%;
        font-weight: normal;
        padding-top: 20%;
        margin-top: 0;
        text-shadow:
                2px  2px 0 #000,
                -1px -1px 0 #000,
                1px -1px 0 #000,
                -1px  1px 0 #000,
                1px  1px 0 #000;

    }
    /*====================================================max-width: 1025px========================================*/

    @media (max-width: 1025px) {
        .bg {
            height: 40rem;
        }

        h1 {
            font-size: 316%;
            font-weight: normal;
            padding-top: 17%;
        }
    }

    /*====================================================max-width: 1025px========================================*/
    /*====================================================max-width: 1025px========================================*/

    @media (max-width: 1025px) {
        .bg {
            height: 30rem;
        }

        h1 {
            color: aliceblue;
            font-family: 'Montserrat',sans-serif;
            font-size: 316%;
            font-weight: normal;
            padding-top: 17%;
        }
    }

    /*====================================================max-width: 1025px========================================*/
    @media (max-width: 414px) {
        .bg{
            display: none;
        }
    }
</style>