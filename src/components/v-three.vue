<template>
    <div class="main">
        <div class="left">
            <img src="../assets/images/webp/comp-two.webp" title="Удобность сайта" alt="Ноутбук с шаблоном сайта">
            <svg width="842.645" height="575" viewBox="0 0 842.645 575" class="one-svg">
                <path id="Path_58" data-name="Path 58" d="M3596.635,2041v565H2763.99"
                      transform="translate(-2763.99 -2041)" fill="none" stroke="#00b5e3" stroke-linejoin="round"
                      stroke-width="20" opacity="0.25"/>
            </svg>
            <svg width="756.364" height="439.503" viewBox="0 0 756.364 439.503" class="two-svg">
                <path id="Path_57" data-name="Path 57" d="M3510.355,2041v429.5H2763.991"
                      transform="translate(-2763.991 -2041)" fill="none" stroke="#cd00e3" stroke-linejoin="round"
                      stroke-width="20" opacity="0.25"/>
            </svg>
        </div>

        <div class="right">
            <h2>Почему это удобно?</h2>
            <p>Мы с вами придумываем удобный интерфейс<br>
                для клиентов и для вас. Уникальный дизайн<br>
                поможет задержать посетителя на вашем сайте.<br>
                А также вашим клиентам будет удобнее выбрать<br>
                товар и сделать выбор. Забудьте о переплатах.<br>
                Крупные интернет-магазины берут большие<br>
                проценты за сотрудничество. Чаще всего это не<br>
                оправданные траты-ваши товары могут резко<br>
                упасть в рейтинге из-за большой конкуренции.<br>
                Появится возможность привлечения новых<br>
                партнеров как в своей стране, так и за рубежом.<br>
                И не забывайте об обратной связи. Вы сможете<br>
                качественно улучшать свой бизнес. Ваши клиенты<br>
                также смогут порекомендовать вас своим друзьям,<br>
                родным и знакомым, тем самым привлекая в ваш<br>
                бизнес новых клиентов.</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-three"
    }
</script>

<style scoped>
    .two-svg {
        position: absolute;
        top: 0;
        right: 1146px;;
    }

    .one-svg {
        position: absolute;
        top: 0;
        right: 1058px;
    }

    img {
        position: absolute;
        top: 326px;
        left: 179px;
        z-index: 1;
    }

    p {
        color: black;
        font-family: 'Montserrat Alternates', sans-serif;
        font-size: 23px;
        font-weight: normal;
        text-align: left;
        position: absolute;
        top: 341px;
        right: 279px;
    }

    h1 {
        color: black;
        font-family: 'Montserrat Alternates', sans-serif;
        font-size: 376%;
        font-weight: bold;
        text-align: left;
        position: absolute;
        top: 20%;
        right: 13%;
    }
    h2 {
        color: black;
        font-family: 'Montserrat Alternates', sans-serif;
        font-size: 376%;
        font-weight: bold;
        text-align: left;
        position: absolute;
        top: 20%;
        right: 13%;
        margin: 40px 0;
    }

    .main {
        position: relative;
        height: 995px;
        background-color: #FBEED3;
    }
    /*====================================================max-width: 1366px========================================*/
    @media (max-width: 1366px) {
        h1{
            position: absolute;
            top: 10%;
            left: 59%;
            font-size: 222%;
            z-index: 12;
            white-space: nowrap;
        }
        h2{
            position: absolute;
            top: 10%;
            left: 59%;
            font-size: 222%;
            z-index: 12;
            white-space: nowrap;
        }

        img {
            top: 42%;
            left: 9%;
            width: 30%;
            z-index: 200;
        }
        p{
            font-size: 88%;
            position: absolute;
            top: 25%;
            left: 59%;
            width: 30%;
            text-align: left;
        }
        .main{
            position: relative;
            height: 668px;
            background-color: #FBEED3;
        }
        .two-svg {
            position: absolute;
            top: -6.2%;
            right: 56.4%;
            width: 45%;
        }
        .one-svg {
            position: absolute;
            top: -5.1%;
            right: 38.4%;
            width: 73%;
            height: 70%;
            z-index: 100;
        }
    }
    /*====================================================max-width: 1366px========================================*/
    /*====================================================max-width: 1024px========================================*/
    @media (max-width: 1024px) {
        h1[data-v-67da7827] {
            position: absolute;
            top: 10%;
            left: 54%;
            font-size: 222%;
            z-index: 12;
            white-space: nowrap;
        }
        h2[data-v-67da7827] {
            position: absolute;
            top: 10%;
            left: 54%;
            font-size: 222%;
            z-index: 12;
            white-space: nowrap;
        }

        img {
            top: 53%;
            left: 9%;
            width: 48%;
            z-index: 200;
        }
        p{
            font-size: 88%;
            position: absolute;
            top: 25%;
            left: 54%;
            width: 41%;
            text-align: left;
        }

        .main{
            position: relative;
            height: 668px;
            background-color: #FBEED3;
        }
        .two-svg[data-v-67da7827] {
            position: absolute;
            top: -12.9%;
            right: 58%;
            width: 45%;
        }
        .one-svg {
            position: absolute;
            top: -1.42%;
            right: 54.6%;
            width: 48%;
            height: 54%;
            z-index: 5;
        }
    }
    /*====================================================max-width: 1024========================================*/
    /*============================================================768===================================*/
    @media (max-width: 768px) {
        .one-svg{
            position: absolute;
            top: 1.7%;
            right: 52.8%;
            width: 61%;
            height: 54%;
            z-index: 5;
        }
        .main[data-v-67da7827] {
            position: relative;
            height: 530px;
            background-color: #FBEED3;
        }
        .two-svg[data-v-67da7827][data-v-67da7827] {
            position: absolute;
            top: -20.3%;
            right: 63%;
            width: 50%;
        }
        h1[data-v-67da7827][data-v-67da7827][data-v-67da7827] {
            position: absolute;
            top: 10%;
            left: 49%;
            font-size: 167%;
            z-index: 12;
            white-space: nowrap;
        }
        h2[data-v-67da7827][data-v-67da7827][data-v-67da7827] {
            position: absolute;
            top: 10%;
            left: 49%;
            font-size: 167%;
            z-index: 12;
            white-space: nowrap;
        }
        p{
            font-size: 79%;
            position: absolute;
            top: 23%;
            left: 49%;
            width: 51%;
            text-align: left;
        }
        img[data-v-67da7827] {
            top: 57%;
            left: 9%;
            width: 38%;
            z-index: 200;
        }
    }
    /*============================================================768===================================*/
    @media (max-width: 414px) {
        .main {
            display: none;
        }
    }

</style>