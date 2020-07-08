<template>
    <div class="footer">
        <div class="img">
            <img src="../assets/img/phone.png" alt="">
            <img src="../assets/img/mail.png" alt="">
        </div>
        <div class="contact">
            <a href="tel: 7(927)-770-77-75">7(927)-770-77-75</a>
            <a href="#">webkiwi.org@gmail.com</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-footer-two"
    }
</script>

<style scoped>
    .contact {
        padding-top: 2rem;
        text-align: left;
    }

    a:nth-child(2) {
        padding-top: 2rem;
    }

    img:nth-child(2) {
        padding-top: 1rem;
    }

    .img {
        padding: 1rem;
        display: flex;
        flex-direction: column;
        margin-top: 2rem;
    }

    .footer {
        color: black;
        background-color: white;
        display: flex;
        align-items: center;
        padding-left: 15%;
    }

    a {
        font-size: 20px;
        font-family: 'Montserrat', sans-serif;
        text-decoration: none;
        display: flex;
        color: black;
    }

    /*====================================================max-width: 1366========================================*/
    @media (max-width: 1366px) {

    }
    /*====================================================max-width: 1366========================================*/
    /*====================================================max-width: 1024========================================*/
    @media (max-width: 1024px) {
        .footer {
            height: 3rem;
        }
    }
    /*====================================================max-width: 1024========================================*/
    /*====================================================max-width: 768========================================*/
    @media (max-width: 768px) {

    }
    /*====================================================max-width: 768========================================*/
    /*====================================================max-width: 414========================================*/
    @media (max-width: 414px) {
        .footer {
            color: black;
            background-color: white;
            display: flex;
            align-items: center;
            padding-left: 0;
        }
        a{
            font-size: 17px;
        }
    }
    /*====================================================max-width: 414========================================*/
    /*====================================================max-width: 360========================================*/
    @media (max-width: 360px) {
        .footer {
            color: black;
            background-color: white;
            display: flex;
            align-items: center;
            padding-left: 0;
        }
        a{
            font-size: 13px;
        }
    }
    /*====================================================max-width: 360========================================*/

</style>