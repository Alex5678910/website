<template>
    <div class="container">
        <div class="one">
            <h1>Разработка<br>
                <span>ботов</span></h1>
            <h2>Боты позволяют предприниммателю<br>
                постоянно взаимодействовать<br>
                с клиентами, а также привлекать<br>
                новых клиентов, и дают<br>
                конкурентоное преимущество.</h2>
        </div>
        <div class="two">
            <h3>Обеспечивают сервисное<br>
                обслуживание 24/7</h3>
            <h4>Компании могут отвечать на вопросы клиентов<br>
                независимо от времени суток, а это повышает качество<br>
                обслуживания и влияет на успешность бизнеса.</h4>
            <img src="../assets/mobail/face-one.png" alt="" class="img-img-one">
            <img src="../assets/mobail/face-two.png" alt="" class="img-img-two">
            <img src="../assets/mobail/face-three.png" alt="" class="img-img-three">
            <img src="../assets/mobail/orang-one.png" alt="" class="orang-one">
            <img src="../assets/mobail/orang-two.png" alt="" class="orang-two">
            <img src="../assets/mobail/orang-three.png" alt="" class="orang-three">
        </div>
        <p class="p-one">Эффективная<br>
            комуникация<br>
            с клиентами</p>
        <p class="p-two">Экономность</p>
        <p class="p-three">Легкость<br>
            в эксплуатации</p>
    </div>
</template>

<script>
    export default {
        name: "v-bots-one"
    }
</script>

<style scoped>
    p.p-one{
        top: 95%;
        left: 43.5%;
        position: absolute;
        margin: 0;
        z-index: 15;
    }
    p.p-three{
        top: 95%;
        left: 78%;
        position: absolute;
        margin: 0;
        z-index: 15;
    }
    p.p-two{
        top: 95%;
        left: 61.5%;
        position: absolute;
        margin: 0;
        z-index: 15;
    }

    p{
        font-family: 'Montserrat', sans-serif;
        font-size: 25px;
        color: white;
    }
    .orang-one {
        top: -21%;
        left: 60%;
        position: absolute;
        z-index: 5;
        background-color: #46403A;
        padding: 2% 1% 9.5% 1%;
    }

    .orang-three {
        top: -21%;
        left: 43%;
        position: absolute;
        z-index: 5;
        background-color: #1C1C1C;
        padding: 3% 1% 10.5%;
    }

    .orang-two {
        top: -21%;
        left: 78%;
        position: absolute;
        z-index: 5;
        background-color: #5E5B55;
        padding: 3% 1% 9.5% 1%;
    }

    .img-img-three {
        top: -21%;
        left: 13%;
        position: absolute;
        z-index: 5;
    }

    .img-img-one {
        top: 37%;
        left: 59%;
        position: absolute;
        z-index: 5;
    }

    .img-img-two {
        top: 28%;
        left: 65%;
        z-index: 2;
        position: absolute;
    }

    h4 {
        font-family: 'Montserrat', sans-serif;
        font-size: 20px;
        color: white;
        font-weight: normal;
        text-align: left;
        position: absolute;
        top: 56%;
        left: 17%;
    }

    h3 {
        font-family: 'Montserrat', sans-serif;
        font-size: 40px;
        color: #FFD500;
        text-align: left;
        margin-top: 0;
        position: absolute;
        top: 47%;
        left: 17%;
    }

    h1 span {
        color: white;
    }

    h1 {
        font-family: 'Montserrat', sans-serif;
        font-size: 80px;
        color: #FFD500;
        text-align: left;
        margin-top: 0;
    }

    h2 {
        font-family: 'Montserrat', sans-serif;
        font-size: 35px;
        color: white;
        font-weight: normal;
        text-align: left;
    }

    .one {
        background-image: url(../assets/mobail/ofice.png);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        height: 43rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .two {
        background-image: linear-gradient(#15202E, #111123);
        height: 926px;
        position: relative;
    }
</style>