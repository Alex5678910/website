<template>
    <div class="container">
        <h1>Зачем вашему<br>
            бизнесу нужен сайт?</h1>
        <h2>С развитием технологий весь поток<br>
            потенциальных клиентов перешел<br>
            в интернет. Можно предлагать свои<br>
            услуги клиентам через посредников или<br>
            в социальных сетях. Но это влечет за<br>
            собой дополнительные траты. К тому<br>
            же имея опыт в бизнесе намного легче и<br>
            удобнее продвигать свою организацию<br>
            при помощи сайта. Мы предлагаем<br>
            помощь в создании современного,<br>
            красивого и удобного сайта.<br>
            А так же в дальнейшем его продвижении<br>
            и обслуживании.</h2>
        <div class="icon">
            <img src="../assets/mobail/mobile-monitor-one.png" alt="pic" class="monitor">
            <img src="../assets/mobail/list.png" alt="" class="list" @click="openSlide">
        </div>
    </div>
</template>

<script>
    export default {
        name: "mobile-web-two",
        methods: {
            openSlide() {
                window.scrollTo(0, 3100)
            }
        }
    }
</script>

<style scoped>
    .list{
        position: fixed;
    }
    .container {
        max-width: 414px;
        height: 637px;
        background-size: cover;
        background-color: white;
        background-repeat: no-repeat;
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
        -ms-flex-pack: distribute;
        justify-content: space-around;
    }

    h1{
        color: #000000;
        font-size: 23px;
        font-family: 'Montserrat', sans-serif;
        margin: 0;
        -ms-flex-item-align: baseline;
        align-self: baseline;
        padding-left: 18%;
        font-weight: 700;
    }

    h2{
        color: #000000;
        font-size: 15px;
        font-family: 'Montserrat', sans-serif;
        margin: 0;
        font-weight: normal;
        text-align: left;
    }
    .list {
        position: fixed;
        top: 90%;
        right: 3%;
    }
    /* =======================================min-width: 414px==================================*/
    @media (min-width: 415px) {
        .container {
            display: none;
        }
    }

    /* =======================================min-width: 414px==================================*/
    /* =======================================min-width: 375==================================*/
    @media (max-width: 375px) {

    }

    /* =======================================min-width: 375==================================*/
    /* =======================================min-width: 360==================================*/
    @media (max-width: 360px) {

        h1{
            color: #000000;
            font-size: 23px;
            font-family: 'Montserrat', sans-serif;
            margin: 0;
            -ms-flex-item-align: baseline;
            align-self: baseline;
            padding-left: 10%;
            font-weight: 700;
        }
        h2{
            font-size: 14px;
        }
    }
    /* =======================================min-width: 360==================================*/
    /* =======================================min-width: 320==================================*/
    @media (max-width: 320px) {

        h1{
            color: #000000;
            font-size: 23px;
            font-family: 'Montserrat', sans-serif;
            margin: 0;
            -ms-flex-item-align: baseline;
            align-self: baseline;
            padding-left: 10%;
            font-weight: 700;
        }
        h2{
            font-size: 13px;
        }
        .container{
            height: 535px;
            background-size: cover;
            background-color: white;
            background-repeat: no-repeat;
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
            -ms-flex-pack: distribute;
            justify-content: space-around;
        }
    }
    /* =======================================min-width: 320==================================*/
</style>