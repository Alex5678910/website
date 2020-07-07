<template>
    <div class="container" v-show="showMain">
        <div class="logo">
            WebKiwi<br>
            <span>STUDIO</span>
        </div>
        <h1>-Услуги по digital разработке</h1>
    </div>
</template>

<script>
    export default {
        name: "mobile-one",
        props: {
            showMain: {
                default: true,
                type: Boolean
            }
        },
    }
</script>

<style scoped>
    .logo span{
      color: #FFFFFF;
        font-size: 20px;
        font-weight: normal;
    }
    .container {
        max-width: 414px;
        height: 194px;
        background-color: black;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .logo {
        font-size: 27px;
        font-family: Montserrat, sans-serif;
        color: #FFBE6A;
    }

    h1 {
        font-size: 14px;
        font-family: 'Montserrat Alternates', sans-serif;
        font-weight: bold;
        color: #E1E1E1;
    }
    /* =======================================min-width: 414px==================================*/
    @media (min-width: 415px) {
        .container{
            display: none;
        }
    }
    /* =======================================min-width: 414px==================================*/
</style>