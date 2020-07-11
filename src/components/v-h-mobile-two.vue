<template>
    <div class="container">
        <h1>7 причин</h1>
        <ul>
            <li>Повышение продаж</li>
            <li>Отвязка от конкурентов</li>
            <li>Лояльность клиентов</li>
            <li>Формирование доверия<br>
                <span>клиентов посредством<br></span>
                <span>Push-уведомлений</span></li>
            <li>Целевая аудитория</li>
            <li>Маркетинговые акции</li>
            <li>Связка сайта компании с<br>
                <span>приложением</span></li>
        </ul>
        <div class="flex">
            <div class="flex__item">
                <img src="../assets/images/t1.png" alt="">
            </div>
            <div class="flex__item">
                <img src="../assets/images/t2.png" alt="">
            </div>
            <div class="flex__item">
                <img src="../assets/images/t3.png" alt="">
            </div>
            <div class="fixed">
                <img src="../assets/mobail/list.png" alt="" class="list">
            </div>
        </div>
        <div class="footer">
            <div class="digital">digital</div>
            <div class="number">02</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-h-mobile-two"
    }
</script>

<style scoped>
    .flex img.list {
        width: 52px;
        height: 52px;
    }
    .fixed{
        padding-right: 2%;
    }
    .list {
        position: fixed;

    }

    .footer {
        display: flex;
        justify-content: space-between;
        margin: 0 14%;
    }

    .number {
        font-size: 40px;
        color: black;
        font-family: 'Montserrat', sans-serif;
    }

    .digital {
        font-size: 9px;
        color: black;
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        margin-top: 5%;
    }

    .flex {
        display: flex;
        justify-content: center;
        margin: 0 14%;
    }

    .flex__item {
        flex: .5 .5 auto;
    }

    .flex img {
        width: 67px;
        height: 131px;
    }

    li span {
        margin-left: 5%;
    }

    li::before {
        content: "";
        background-color: #5A1212;
        width: .5rem;
        height: .5rem;
        display: inline-block;
        line-height: 2rem;
        text-align: center;
        margin-right: 0.5rem;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        vertical-align: middle;
    }

    li {
        font-size: 20px;
        color: #5a1212;
        font-family: 'Montserrat', sans-serif;
        font-weight: normal;
        text-align: left;
        list-style: none;
    }

    h1 {
        font-size: 30px;
        color: #5a1212;
        font-family: 'Montserrat', sans-serif;
    }

    /* =======================================min-width: 414px==================================*/
    @media (min-width: 415px) {
        .container {
            display: none;
        }
    }

    /* =======================================min-width: 414px==================================*/
    /* =======================================min-width: 360px==================================*/
    @media (max-width: 360px) {
        li {
            font-size: 17px;
            color: #5a1212;
            font-family: 'Montserrat', sans-serif;
            font-weight: normal;
            text-align: left;
            list-style: none;
        }
    }

    /* =======================================min-width: 360px==================================*/
    /* =======================================min-width: 320px==================================*/
    @media (max-width: 320px) {
        li {
            font-size: 15px;
            color: #5a1212;
            font-family: 'Montserrat', sans-serif;
            font-weight: normal;
            text-align: left;
            list-style: none;
        }
    }

    /* =======================================min-width: 320px==================================*/

</style>