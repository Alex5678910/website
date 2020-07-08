<template>
    <div class="main">
        <div class="left">
            <img src="../assets/images/comp-two.png" alt="">
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
            <h1>Почему это удобно?</h1>
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
        font-size: 60px;
        font-weight: bold;
        text-align: left;
        position: absolute;
        top: 162px;
        right: 246px;
    }

    .main {
        position: relative;
        height: 995px;
        background-color: #FBEED3;
    }
    /*====================================================max-width: 1366px========================================*/
    @media (max-width: 1366px) {
        h1{
            top: 33px;
            right: 246px;
            color: black;
            font-family: 'Montserrat Alternates', sans-serif;
            font-size: 46px;
            font-weight: bold;
            text-align: left;
            position: absolute;
        }
        img{
            top: 168px;
            left: 98px;
            width: 26%;

        }
        p{
            top: 147px;
            right: 262px;
            color: black;
            font-family: 'Montserrat Alternates', sans-serif;
            font-size: 18px;
            font-weight: normal;
            text-align: left;
            position: absolute;
        }
        .main{
            position: relative;
            height: 668px;
            background-color: #FBEED3;
        }
    }
    /*====================================================max-width: 1366px========================================*/
    /*====================================================max-width: 1024========================================*/
    @media (max-width: 1024px) {
        h1{
            top: 54px;
            right: 151px;
            font-size: 40px;
        }
        img{
            top: 175px;
            left: 97px;
        }
        p[data-v-67da7827] {
            top: 181px;
            right: 90px;
        }
        .main[data-v-7954d1aa] {
            margin-top: 82px;
            margin-bottom: 60px;
        }
    }
    /*====================================================max-width: 1024========================================*/
    /*====================================================max-width: 768========================================*/
    @media (max-width: 768px) {
        h1[data-v-67da7827] {
            top: 7px;
            right: 202px;
            font-size: 30px;
        }
        img{
          display: none;
        }
        p[data-v-67da7827][data-v-67da7827] {
            top: 75px;
            right: 85px;
        }
        .main[data-v-67da7827] {
            position: relative;
            height: 471px;
            background-color: #FBEED3;
        }
        .main[data-v-7954d1aa] {
            margin-top: 7px;
            margin-bottom: 7px;
        }
    }
    /*====================================================max-width: 768========================================*/

</style>