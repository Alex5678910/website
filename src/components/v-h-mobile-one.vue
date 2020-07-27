<template>
    <div class="container">
        <div class="main">
            <h1>Разработка<br>
                мобильных приложений</h1>
            <div class="svg">
            <svg width="151.309" height="2" viewBox="0 0 151.309 2">
                <g id="Line_2" data-name="Line 2" transform="translate(0 1)">
                    <path id="Path_61" data-name="Path 61" d="M5202,894.549h151.309" transform="translate(-5202 -894.549)" fill="none" stroke="#707070" stroke-width="2"/>
                    <path id="Path_60" data-name="Path 60" d="M5202,894.549h106.725" transform="translate(-5202 -894.549)" fill="none" stroke="#5e2424" stroke-width="2"/>
                </g>
            </svg>
            </div>
            <h2>Мобильное приложение способно
                увеличить продажи компании, потому
                как служит средством привлечения
                и удержания клиентов.</h2>
            <div class="logo">
                WebKiwi<br>
                <span>studio</span>
                <div class="number">
                    01
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-h-mobile-one"
    }
</script>

<style scoped>
    .number{
        font-weight: normal;
        font-size: 40px;
        font-family: 'Montserrat', sans-serif;
        color: white;
        position: absolute;
        top: 82%;
        right: 6%;
    }
    .logo{
        font-size: 9px;
        font-family: 'Montserrat', sans-serif;
        color: white;
        text-align: left;
        font-weight: bold;
    }
    .logo span{
        font-weight: normal;
    }
    h1{
        font-size: 25px;
        font-family: 'Montserrat', sans-serif;
        color: white;
        text-align: left;
        margin: 40px 0;
    }
    h2{
        font-size: 82%;
        font-family: 'Montserrat', sans-serif;
        color: white;
        font-weight: normal;
        text-align: left;
    }
    .main{
        -ms-flex-pack: distribute;
        justify-content: space-around;
        -webkit-box-align: start;
        -ms-flex-align: start;
        align-items: flex-start;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        margin-left: 10%;
        position: relative;
        padding-top: 5%;
    }
    .container {
        max-width: 414px;
        background-image: url(../assets/mobail/webp/bg-mob-001.webp);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        height: 277px;
    }
    @media screen and (-webkit-min-device-pixel-ratio:0) {
        .container {
            background-image: url(../assets/mobail/bg-mob-001.png);
        }
    }
    /* =======================================min-width: 414px==================================*/
    @media (min-width: 415px) {
        .container {
            display: none;
        }
    }
    /* =======================================min-width: 414px==================================*/
    /* =======================================min-width: 320px==================================*/
    @media (max-width: 320px) {
        h1{
            font-size: 113%;
            font-family: 'Montserrat', sans-serif;
            color: white;
            text-align: left;
        }
    }
    /* =======================================min-width: 320px==================================*/
</style>