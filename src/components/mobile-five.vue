<template>
    <div class="container">
        <h1>Почему стоит выбирать
            именно нас</h1>
        <img src="../assets/mobail/x1.png" alt="">
        <p>Мы анализируем рынок. Проводим
            Аналитику исследование конкурентов и
            контрагентов. Разбираемся в отрасли.</p>
        <img src="../assets/mobail/x2.png" alt="">
        <p>Мы нацеленны на долгосрочные отношения
            с заказчиком. Исходя из этого делаем
            сотрудничество с нами
            наиболее комфортным.</p>
        <img src="../assets/mobail/x3.png" alt="">
        <p>Консультируем и помогаем разобраться
            в digital.</p>
        <img src="../assets/mobail/x4.png" alt="">
        <p>Не бросаем клиента после завершения
            проекта. занимаемся дальнейшей
            поддержкой и продвижением.</p>
        <img src="../assets/mobail/x5.png" alt="">
        <p>Мы найдем пользу и сделаем проект
            выгодным для вас.</p>
        <img src="../assets/mobail/x6.png" alt="">
        <p>Мы следим за последними требованиями
            и трендами отрасли. Применяем
            новые технологии, делаем проекты
            привлекающими внимание, продающими,
            с качественным контентом.</p>
        <img src="../assets/mobail/x7.png" alt="">
        <p>Ваш проект будет работать и
            и будет актуальным.</p>
    </div>
</template>

<script>
    export default {
        name: "mobile-five"
    }
</script>

<style scoped>
    img {
        padding: 2%
    }

    h1 {
        color: #E1E1E1;
        font-family: 'Montserrat Alternates', sans-serif;
        font-size: 20px;
        padding: 4% 3%;
    }

    .container {
        max-width: 414px;
        background-color: black;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-image: url(../assets/mobail/mbg.png);
        background-position: center;
    }

    p {
        color: #E1E1E1;
        font-family: 'Montserrat Alternates', sans-serif;
        padding: 2%;
        font-size: 15px;
        margin-bottom: 2%;
    }

    /* =======================================min-width: 414px==================================*/
    @media (min-width: 415px) {
        .container{
            display: none;
        }
    }
    /* =======================================min-width: 414px==================================*/
</style>