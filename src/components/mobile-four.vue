<template>
        <div class="container">
            <div class="title">Разработаем<br>
                мобильное приложение</div>
            <h2>Следите за работой вашей организации<br>
                со своего устройства</h2>
        </div>
</template>

<script>
    export default {
        name: "mobile-four"
    }
</script>

<style scoped>

    .logo span {
        color: #FFFFFF;
    }

    .container {
        max-width: 414px;
        height: 194px;
        background-image: url(../assets/mobail/mb3.png);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    div.title {
        text-align: left;
        font-size: 20px;
        color: #FFFFFF;
        font-family: 'Montserrat Alternates', sans-serif;
    }

    h2 {
        font-size: 10px;
        text-align: left;
        color: #FFFFFF;
        font-family: 'Montserrat Alternates', sans-serif;
        margin-right: 7%;
    }
    /* =======================================min-width: 414px==================================*/
    @media (min-width: 415px) {
        .container{
            display: none;
        }
    }
    /* =======================================min-width: 414px==================================*/
</style>