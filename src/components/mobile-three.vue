<template>
    <div class="containers">
        <div class="container">
            <div class="title">Создадим CRM систему<br>
                для оптимизации<br>
                вашего бизнеса</div>
            <h2>Следите за работой вашей организации<br>
                со своего устройства</h2>
            <img src="../assets/mobail/list.png" alt="pic" class="list" @click="openSlide">
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
        background-image: url(../assets/mobail/webp/mb2.webp);
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    }

    div.title {
        text-align: right;
        font-size: 20px;
        color: #FFFFFF;
        font-family: 'Montserrat Alternates', sans-serif;
        font-weight: 700;
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