<template>
    <div class="container">
        <div class="title">Почему стоит выбирать
            именно нас</div>
        <img src="../assets/mobail/x1.png" alt="pic">
        <p>Мы анализируем рынок. Проводим
            Аналитику исследование конкурентов и
            контрагентов. Разбираемся в отрасли.</p>
        <img src="../assets/mobail/x2.png" alt="pic">
        <p>Мы нацеленны на долгосрочные отношения
            с заказчиком. Исходя из этого делаем
            сотрудничество с нами
            наиболее комфортным.</p>
        <img src="../assets/mobail/x3.png" alt="pic">
        <p>Консультируем и помогаем разобраться
            в digital.</p>
        <img src="../assets/mobail/x4.png" alt="pic">
        <p>Не бросаем клиента после завершения
            проекта. занимаемся дальнейшей
            поддержкой и продвижением.</p>
        <img src="../assets/mobail/x5.png" alt="pic">
        <p>Мы найдем пользу и сделаем проект
            выгодным для вас.</p>
        <img src="../assets/mobail/x6.png" alt="pic">
        <p>Мы следим за последними требованиями
            и трендами отрасли. Применяем
            новые технологии, делаем проекты
            привлекающими внимание, продающими,
            с качественным контентом.</p>
        <img src="../assets/mobail/x7.png" alt="pic">
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

    div.title {
        color: #E1E1E1;
        font-family: 'Montserrat Alternates', sans-serif;
        font-size: 20px;
        padding: 4% 3%;
        font-weight: 700;
    }

    .container {
        max-width: 414px;
        background-color: black;
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
        background-image: url(../assets/mobail/webp/mbg.webp);
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