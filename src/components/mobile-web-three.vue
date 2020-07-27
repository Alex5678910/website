<template>
    <div class="container">
        <div class="title">Почему это удобно?</div>
        <h2>Мы с вами придумываем удобный<br>
            интерфейс для клиентов и для вас.<br>
            Уникальный дизайн поможет задержать<br>
            посетителя на вашем сайте. А также<br>
            вашим клиентам будет удобнее выбрать<br>
            товар и сделать выбор. Забудьте о<br>
            переплатах. Крупные интернет-магазины<br>
            берут большие проценты за<br>
            сотрудничество. Чаще всего это не<br>
            оправданные траты-ваши товары могут<br>
            резко упасть в рейтинге из-за большой<br>
            конкуренции.  Появится возможность<br>
            привлечения новых партнеров как в своей<br>
            стране, так и за рубежом. И не забывайте<br>
            об обратной связи. Вы сможете<br>
            качественно улучшать свой бизнес. Ваши<br>
            клиенты также смогут порекомендовать<br>
            вас своим друзьям, родным и знакомым,<br>
            тем самым привлекая в ваш бизнес новых<br>
            клиентов.</h2>

        <img src="../assets/images/webp/comp-two.webp" alt="pic">

    </div>
</template>

<script>
    export default {
        name: "mobile-web-three"
    }
</script>

<style scoped>
    img{
        width: 257px;
    }

    .container {
        max-width: 414px;
        height: 648px;
        background-color: #FBEED3;
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

    div.title{
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

    /* =======================================max-width: 375==================================*/
    /* =======================================max-width: 360==================================*/
    @media (max-width: 360px) {
        div.title{
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
        }
    }

    /* =======================================max-width: 360==================================*/
    /* =======================================max-width: 320==================================*/
    @media (max-width: 320px) {

        div.title{
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
            font-size: 12px;
        }
        .container[data-v-01086838] {
            max-width: 320px;
            height: 568px;
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
    /* =======================================max-width: 320==================================*/
</style>
















