<template>
    <div class="container">
        <h1>Web-разработка</h1>
        <p>Создание, разработка, продвижение....</p>
    </div>
</template>

<script>
    export default {
        name: "mobile-web-one"
    }
</script>

<style scoped>
    h1{
        color: #ff9000;
        font-size: 25px;
        font-family: 'Montserrat', sans-serif;
        margin: 0;
        align-self: baseline;
        padding-left: 13%;
    }

    p{
        color: #ff9000;
        font-size: 15px;
        font-family: 'Montserrat', sans-serif;
        margin: 0;
    }

    .container {
        background-image: url(../assets/mobail/web-bg-one.png);
        max-width: 414px;
        height: 193px;
        margin-top: -5%;
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    /* =======================================min-width: 414px==================================*/
    @media (min-width: 415px) {
        .container {
            display: none;
        }
    }

    /* =======================================min-width: 414px==================================*/
    /* =======================================min-width: 375px==================================*/
    @media (max-width: 375px) {
        .container {
            max-width: 375px;
            height: 190px;
            margin-top: -5%;
            background-repeat: no-repeat;
        }
    }

    /* =======================================min-width: 375px==================================*/
    /* =======================================min-width: 360==================================*/
    @media (max-width: 360px) {
        .container {
            max-width: 360px;
            height: 170px;
            margin-top: -5%;
            background-repeat: no-repeat;
        }
    }
    /* =======================================min-width: 360==================================*/
    /* =======================================min-width: 320==================================*/
    @media (max-width: 320px) {
        .container {
            max-width: 320px;
            height: 170px;
            margin-top: -5%;
            background-size: contain;
            background-repeat: no-repeat;
            margin-bottom: -3%;
        }
    }
    /* =======================================min-width: 320==================================*/
</style>