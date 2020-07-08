<template>
    <div class="main">
        <div class="square-small">

            <div class="square">
                <h1>Услуги</h1>
            </div>

            <div class="sq">
                <img src="../assets/images/i1.png">
                <h2>Lending Page</h2>
                <p>С учетом поведенческих факторов<br>
                    разработаем<br>
                    рекламно-презентационную<br>
                    страницупобуждающую<br>
                    пользователя к совершению<br>
                    целевого действия-заказ, звонок,<br>
                    заявка.</p>
            </div>

        </div>
        <div class="square-small">

            <div class="sq">
                <img src="../assets/images/i2.png">
                <h2>Сайт-визитка</h2>
                <p>Создадим простой стильный и<br>
                    лаконичный сайт для<br>
                    адекватной презентации вашей<br>
                    компании и ее возможностей<br>
                    в web-пространстве.</p>
            </div>

            <div class="sq qs">
                <img src="../assets/images/i3.png">
                <h2>Корпоративный сайт</h2>
                <p>Разрабатываем презентационный<br>
                    сайт компании, представив ваши<br>
                    преимущества, услуги и продукты<br>
                    в понятном, структурированном<br>
                    и визуально привлекательном<br>
                    виде.</p>
            </div>

        </div>
        <div class="square-small">

            <div class="sq qs">
                <img src="../assets/images/i4.png">
                <h2>Сайт-каталог</h2>
                <p>Воплотим весь ваш товарный<br>
                    каталог в формат<br>
                    структурированного и<br>
                    единообразно заполненного<br>
                    сайта с широкими возможностями<br>
                    поиска и фильтрации.</p>
            </div>

            <div class="sq">
                <img src="../assets/images/i5.png">
                <h2>Интернет магазин</h2>
                <p>Создадим интернет-магазин<br>
                    учитывающий особенности ваших<br>
                    товаров и полностью готовый к<br>
                    SEO-продвижению, рекламным<br>
                    компаниям и онлайн продажам.</p>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "v-small-square"
    }
</script>

<style scoped>
    .sq.qs{
        background-color: #f9e0cb !important;
    }
    .main {
        margin-top: 122px;
        margin-bottom: 102px;
    }

    h2 {
        font-family: 'Montserrat Alternates', sans-serif;
        font-size: 31px;
        font-weight: 700;
        color: #545454;
        margin-bottom: 2rem;
    }

    .square-small {
        display: flex;
        justify-content: center;
    }

    .sq img {
        width: 124px;
        height: 124px;
        margin-top: 3rem;
        margin-bottom: 2rem;
    }

    p {
        font-family: 'Montserrat', sans-serif;
        font-weight: normal;
        text-align: left;
        font-size: 27px;
    }

    h1 {
        padding: 45% 0;
        font-family: 'Montserrat Alternates', sans-serif;
        font-size: 47px;
        font-weight: 700;
        color: #545454;

    }

    .square {
        width: 610px;
        height: 610px;
        background-color: #f9e0cb;
        margin: 0 5px 10px 5px;
    }

    .sq {
        width: 610px;
        height: 610px;
        background-color: #E1E1E1;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 5px 10px 5px;
    }
    /*====================================================max-width: 1366========================================*/
    @media (max-width: 1366px) {
        .square {
            width: 400px;
            height: 400px;
            background-color: #f9e0cb;
            margin: 0 5px 10px 5px;
        }
        h1 {
            padding: 36% 0;
            font-family: 'Montserrat Alternates', sans-serif;
            font-size: 37px;
            font-weight: 700;
            color: #545454;
        }
        .sq {
            width: 400px;
            height: 400px;
            background-color: #E1E1E1;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0 5px 10px 5px;
        }
        p{
            font-family: 'Montserrat', sans-serif;
            font-weight: normal;
            text-align: left;
            font-size: 14px;
        }
        h2{
            font-family: 'Montserrat Alternates', sans-serif;
            font-size: 22px;
            font-weight: 700;
            color: #545454;
            margin-bottom: 0rem;
        }
        .sq img{
            width: 108px;
            height: 93px;
            margin-top: 3rem;
            margin-bottom: 1rem;
        }
    }
    /*====================================================max-width: 768========================================*/
    /*====================================================max-width: 768========================================*/
    @media (max-width: 768px) {
        p{
            font-size: 1rem;
            font-family: 'Montserrat', sans-serif;
            font-weight: normal;
        }
        .main[data-v-7954d1aa] {
            margin-top: 7px;
            margin-bottom: 7px;
        }
    }
    /*====================================================max-width: 768========================================*/
</style>