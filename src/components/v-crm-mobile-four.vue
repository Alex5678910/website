<template>
    <div class="container">
        <div class="main-two">
            <div class="main-three">
                <p class="crm">CRM для продаж</p>
                <p class="crm-two">CRM хранит историю отношений между<br>
                    продавцом и покупателем. На основании<br>
                    данных бренды оптимизируют работу<br>
                    сотрудников, внедряют новые<br>
                    маркетинговые инструменты, повышают<br>
                    уровень обслуживания и стимулируют<br>
                    рост прибыли.</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-crm-mobile-four"
    }
</script>

<style scoped>
    .main-three{
        background-color: rgba(10, 10, 10, 0.7);
    }
    .crm-two{
        font-size: 15px;
        text-align: left;
        font-family: 'Montserrat', sans-serif;
        color: #E1E1E1;
        font-weight: normal;
        margin: 0 0 0 11%;
        padding-bottom: 6%;
    }
    .crm{
        font-size: 20px;
        text-align: left;
        font-family: 'Montserrat', sans-serif;
        color: #E1E1E1;
        font-weight: bold;
        margin: 0 0 0 11%;
        padding-top: 10%;
        padding-bottom: 5%;
    }
    .main-two {
        background-image: url(../assets/mobail/bg-crm-header.png);
        background-repeat: no-repeat;
        background-size: cover;
        height: 293px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    div.title {
        font-size: 20px;
        text-align: left;
        font-family: 'Montserrat', sans-serif;
        color: #E1E1E1;
        font-weight: bold;
        padding-top: 6%;
        margin: 0 18%;
    }

    h2 {
        font-size: 20px;
        text-align: left;
        font-family: 'Montserrat', sans-serif;
        color: #E1E1E1;
        font-weight: normal;
        padding-top: 6%;
        margin: 0 18%;
        padding-bottom: 6%;
    }

    .container {
        max-width: 414px;
    }
    /* =======================================min-width: 414px==================================*/
    @media (min-width: 415px) {
        .container{
            display: none;
        }
    }
    /* =======================================min-width: 414px==================================*/
    /* =======================================max-width: 320px==================================*/
    @media (max-width: 320px) {

        div.title {
            font-size: 15px;
            text-align: left;
            font-family: 'Montserrat', sans-serif;
            color: #E1E1E1;
            font-weight: bold;
            padding-top: 6%;
            margin: 0 18%;
        }

        h2 {
            font-size: 15px;
            text-align: left;
            font-family: 'Montserrat', sans-serif;
            color: #E1E1E1;
            font-weight: normal;
            padding-top: 6%;
            margin: 0 18%;
            padding-bottom: 6%;
        }
        .crm-two {
            font-size: 12px;
            text-align: left;
            font-family: 'Montserrat', sans-serif;
            color: #E1E1E1;
            font-weight: normal;
            margin: 0 0 0 11%;
            padding-bottom: 6%;
        }
    }
    /* =======================================max-width: 320px==================================*/
</style>

