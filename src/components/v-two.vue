<template>
    <div class="main">
        <div class="left">
            <h1>Зачем вашему<br>
                бизнесу нужен сайт?</h1>
            <p>С развитием технологий весь поток<br>
                потенциальных клиентов перешел<br>
                в интернет. Можно предлагать свои<br>
                услуги клиентам через посредников или<br>
                в социальных сетях. Но это влечет за<br>
                собой дополнительные траты. К тому<br>
                же имея опыт в бизнесе намного легче и<br>
                удобнее продвигать свою организацию<br>
                при помощи сайта. Мы предлагаем помощь<br>
                в создании современного, красивого и<br>
                удобного сайта. А так же в дальнейшем<br>
                его продвижении и обслуживании.</p>
        </div>
        <div class="right">
            <img src="../assets/images/computer.png" alt="">
            <svg width="566" height="364" viewBox="0 0 566 364" class="cls-one">
                <g id="Rectangle_34" data-name="Rectangle 34" fill="none" stroke="#e0f" stroke-width="2" opacity="0.45">
                    <rect width="566" height="364" rx="15" stroke="none"/>
                    <rect x="1" y="1" width="564" height="362" rx="14" fill="none"/>
                </g>
            </svg>
            <svg width="20" height="995" viewBox="0 0 20 995" class="cls-two">
                <path id="Path_56" data-name="Path 56" d="M3595.639,1046v995" transform="translate(-3585.639 -1046)" fill="none" stroke="#cd00e3" stroke-linejoin="round" stroke-width="20" opacity="0.25"/>
            </svg>
            <svg width="20" height="995" viewBox="0 0 20 995" class="cls-three">
                <path id="Path_55" data-name="Path 55" d="M3595.639,1046v995" transform="translate(-3585.639 -1046)" fill="none" stroke="#00b5e3" stroke-linejoin="round" stroke-width="20" opacity="0.25"/>
            </svg>
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-two"
    }
</script>

<style scoped>

    .cls-two{
        position: absolute;
        top: 61px;
        right: 1146px;
    }
    .cls-three{
        position: absolute;
        top: 16px;
        right: 1058px;
    }

    img{
        position: absolute;
        top: 301px;
        right: 211px;
        z-index: 1;
    }
    .cls-one{
        position: absolute;
        top: 407px;
        right: 339px;
    }
    p{
        color: black;
        font-family: 'Montserrat Alternates', sans-serif;
        font-size: 23px;
        font-weight: normal;
        text-align: left;
        position: absolute;
        top: 429px;
        left: 215px;
    }
    h1{
        color: black;
        font-family: 'Montserrat Alternates', sans-serif;
        font-size: 60px;
        font-weight: bold;
        text-align: left;
        position: absolute;
        top: 188px;
        left: 215px;
    }
    .main{
        position: relative;
        height: 995px;
        color: #E1E1E1;
    }
    /*====================================================max-width: 1366px========================================*/
    @media (max-width: 1366px) {
        h1 {
            position: absolute;
            top: 20px;
            left: 197px;
        }
        p {
            font-size: 23px;
            position: absolute;
            top: 329px;
            left: 108px;
        }
        img{
            position: absolute;
            top: 255px;
            right: 137px;
            z-index: 1;
        }
        .cls-one {
            position: absolute;
            top: 345px;
            right: 684px;
        }
    }
    /*====================================================max-width: 1366px========================================*/
    /*====================================================max-width: 1024px========================================*/
    @media (max-width: 1024px) {
        h1 {
            position: absolute;
            top: -38px;
            left: 142px;
        }
        p {
            font-size: 23px;
            position: absolute;
            top: 602px;
            left: 119px;
        }
        img{
            position: absolute;
            top: 211px;
            right: 91px;
            z-index: 1;
        }
        .cls-one {
            position: absolute;
            top: 603px;
            right: 79px;
        }
    }
    /*====================================================max-width: 1024========================================*/
    /*====================================================max-width: 768========================================*/
    @media (max-width: 768px) {
        h1 {
            position: absolute;
            top: -38px;
            left: 142px;
        }
        p {
            font-size: 23px;
            position: absolute;
            top: 602px;
            left: 119px;
        }
        img{
            position: absolute;
            top: 211px;
            right: 91px;
            z-index: 1;
        }
        .cls-one {
            position: absolute;
            top: 603px;
            right: 79px;
        }
    }
    /*====================================================max-width: 768========================================*/

</style>