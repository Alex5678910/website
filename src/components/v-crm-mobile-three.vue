<template>
    <div class="container">
        <div class="title">Вашим планам суждено<br>
            сбыться</div>
        <div id="grid" class="grid">

            <div class="grid__item">
                <img src="../assets/images/iv1.png" alt="pic" class="icon">
            </div> <!--img-->

            <div class="grid__item">
                <p>Проекты и задачи</p>
            </div> <!--text-->

            <div class="grid__item">
                <svg xmlns="http://www.w3.org/2000/svg" width="2" height="24.079" viewBox="0 0 2 24.079">
                    <path id="Path_129" data-name="Path 129" d="M0,0H24.079" transform="translate(1) rotate(90)" fill="none" stroke="#707070" stroke-width="2" stroke-dasharray="4"/>
                </svg>
            </div>

            <div class="grid__item">
                <img src="../assets/images/iv2.png" alt="pic" class="icon">
            </div> <!--img-->

            <div class="grid__item">
                <p>Продажи</p>
            </div> <!--text-->

            <div class="grid__item">
                <svg xmlns="http://www.w3.org/2000/svg" width="2" height="24.079" viewBox="0 0 2 24.079">
                    <path id="Path_129" data-name="Path 129" d="M0,0H24.079" transform="translate(1) rotate(90)" fill="none" stroke="#707070" stroke-width="2" stroke-dasharray="4"/>
                </svg>
            </div>

            <div class="grid__item">
                <img src="../assets/images/iv3.png" alt="pic" class="icon">
            </div> <!--img-->

            <div class="grid__item">
                <p>Коммуникации</p>
            </div> <!--text-->

            <div class="grid__item">
                <svg xmlns="http://www.w3.org/2000/svg" width="2" height="24.079" viewBox="0 0 2 24.079">
                    <path id="Path_129" data-name="Path 129" d="M0,0H24.079" transform="translate(1) rotate(90)" fill="none" stroke="#707070" stroke-width="2" stroke-dasharray="4"/>
                </svg>
            </div>

            <div class="grid__item">
                <img src="../assets/images/iv4.png" alt="pic" class="icon">
            </div> <!--img-->

            <div class="grid__item">
                <p>Интеграции</p>
            </div> <!--text-->

        </div>
    </div>
</template>

<script>
    export default {
        name: "v-crm-mobile-three"
    }
</script>

<style scoped>
    p{
        color: #ABABAB;
        font-family: 'Montserrat', sans-serif;
        font-size: 20px;
    }
    div.title{
        color: #FFD2D2;
        font-family: 'Montserrat', sans-serif;
        font-size: 20px;
        padding-top: 15%;
        margin: 0;
    }
    .container{
        background-image: url(../assets/mobail/webp/crm-b.webp);
        max-width: 414px;
        height: 587px;
    }
    img.icon{
        width: 63px;
        height: 63px;
        background-color: #E9C7A0;
        border-radius: 50%;
    }
    .grid {
        margin-bottom: 2rem;
        margin-top: 2rem;
        display: grid;
        justify-content: center;
        grid-column-gap: 1%;
        grid-row-gap: 3%;
        align-items: center;
        grid-template-columns: 100px 200px;
        grid-template-rows: 60px 35px 60px 35px 60px 35px 60px;
        grid-template-areas: "a b"
                             "c cc"
                             "d e"
                             "f ff"
                             "g h"
                             "i ii"
                             "j k"
    }

    .grid__item:nth-child(1) {
        grid-area: a;
    }

    .grid__item:nth-child(2) {
        grid-area: b;
        text-align: left;
    }

    .grid__item:nth-child(3) {
        grid-area: c;
    }

    .grid__item:nth-child(4) {
        grid-area: d;
    }

    .grid__item:nth-child(5) {
        grid-area: e;
        text-align: left;
    }

    .grid__item:nth-child(6) {
        grid-area: f;
    }

    .grid__item:nth-child(7) {
        grid-area: g;
    }

    .grid__item:nth-child(8) {
        grid-area: h;
        text-align: left;
    }

    .grid__item:nth-child(9) {
        grid-area: i;
    }

    .grid__item:nth-child(10) {
        grid-area: j;
    }

    .grid__item:nth-child(11) {
        grid-area: k;
        text-align: left;
    }


    /*====================================================min-width: 415========================================*/
    @media (min-width: 415px) {
        .container{
            display: none;
        }
    }
    /*====================================================min-width: 415========================================*/
</style>


















