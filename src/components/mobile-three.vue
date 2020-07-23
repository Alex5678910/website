<template>
    <div class="containers">
        <div class="container">
            <div class="title">Создадим CRM систему<br>
                для оптимизации<br>
                вашего бизнеса</div>
            <h2>Следите за работой вашей организации<br>
                со своего устройства</h2>
            <img src="../assets/mobail/list.png" alt="" class="list" @click="openSlide">
        </div>
        <div class="text">
            <h3>Автоматизируйте свой рабочий процесс вместе с нами</h3><br>
        </div>
    </div>
</template>

<script>
    export default {
        name: "mobile-three",
        methods: {
            openSlide() {
                window.scrollTo(0, 3100)
            }
        }
    }
</script>

<style scoped>
    img {
        margin-left: 41%;
        position: fixed;
    }

    .text {
        max-width: 414px;
    }

    h3 {
        color: black;
        font-size: 10px;
        font-family: 'Montserrat', sans-serif;
        font-weight: normal;
        padding-top: 5%;
    }
    .logo span {
        color: #FFFFFF;
    }

    .container {
        max-width: 414px;
        height: 194px;
        background-image: url(../assets/mobail/mb2.png);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    div.title {
        text-align: right;
        font-size: 20px;
        color: #FFFFFF;
        font-family: 'Montserrat Alternates', sans-serif;
    }

    h2 {
        font-size: 10px;
        text-align: right;
        color: #FFFFFF;
        font-family: 'Montserrat Alternates', sans-serif;
        margin-left: 11%;
    }
    .list {
        position: fixed;
        top: 90%;
        right: 3%;
    }

    /* =======================================min-width: 414px==================================*/
    @media (min-width: 415px) {
        .containers {
            display: none;
        }
    }

    /* =======================================min-width: 414px==================================*/
</style>