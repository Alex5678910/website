<template>
    <div class="bg">
        <div class="title">Автоматизируйте свой<br>
            рабочий процесс<br>
            вместе с нами</div>
    </div>
</template>

<script>
    export default {
        name: "v-bg-black-two"
    }
</script>

<style scoped>
    .bg {
        background-image: url(../assets/img/bg5.png);
        background-attachment: fixed;
        height: auto;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        display: flex;
        justify-content: center;
        align-items: center;

    }

    div.title {
        color: aliceblue;
        vertical-align: middle;
        font-family: 'Montserrat', sans-serif;
        font-size: 404%;
        font-weight: normal;
        padding-top: 15%;
        padding-bottom: 15%;
        text-shadow:
                2px  2px 0 #000,
                -1px -1px 0 #000,
                1px -1px 0 #000,
                -1px  1px 0 #000,
                1px  1px 0 #000;
    }
    @media (max-width: 1024px) {
        div.title {
            color: aliceblue;
            font-family: 'Montserrat', sans-serif;
            font-size: 50px;
            font-weight: normal;
            display: flex;
            justify-content: center;
        }
    }

    @media (max-width: 768px) {

        div.title {
            color: aliceblue;
            font-family: 'Montserrat', sans-serif;
            font-size: 50px;
            font-weight: normal;
            display: flex;
            justify-content: center;
        }
    }

    @media (max-width: 414px) {
        .bg {
            display: none;
        }
    }


</style>