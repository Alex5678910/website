<template>
    <div class="main">
        <div class="container">
            <router-link :to="'/'" tag="a">
                <div class="header-one">
                    <img src="../assets/img/logo2.png" alt=""
                         class="animate__animated animate__bounce animate__repeat-3">
                    <div class="logo animate__animated animate__bounce">
                        WebKiwi<br>
                        STUDIO
                    </div>
                </div>
            </router-link>
            <div class="right">
                <div>
                    <a href="tel: 7(927)-770-77-75">7(927)-770-77-75</a>
                </div>
                <div class="burger" @click="burger">
                    <svg id="Component_54_2" data-name="Component 54 – 2" width="28" height="15" viewBox="0 0 28 15">
                        <rect id="Rectangle_64" data-name="Rectangle 64" width="28" height="3"/>
                        <rect id="Rectangle_65" data-name="Rectangle 65" width="28" height="3"
                              transform="translate(0 6)"/>
                        <rect id="Rectangle_66" data-name="Rectangle 66" width="28" height="3"
                              transform="translate(0 12)"/>
                    </svg>
                </div>
            </div>
        </div>
        <div class="mobile animate__animated animate__bounceInLeft animate__fast" v-show="this.bur">
            <ul class="mobile-ul">
                <router-link :to="'/'" tag="li" v-for="item in items" :key="item.it">
                    <a @click="openSlide">{{item.it}}</a></router-link>
            </ul>
            <p class="p animate__animated animate__pulse" @click="openSlide">Нужна консультация?</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "mobile-header",
        methods: {
            burger(){
                this.$emit('changeMain')
                this.bur = !this.bur
            },
            openSlide() {
                window.scrollTo(0, 3100)
            }
        },
        data() {
            return {
                bur: false,
                items: [
                    {it: 'web-разработка'},
                    {it: 'Разработка мобильных приложений'},
                    {it: 'Разработка CRM-системы'},
                    {it: 'Продвижение чат-ботов'},
                ]
            }
        }
    }
</script>

<style scoped>
    .mobile {
        z-index: 100;
        max-width: 414px;
        background-color: black;
    }

    ul.mobile-ul li {
        list-style: none;
        text-align: right;
        padding-top: 10%;
        padding-right: 10%;
    }

    ul.mobile-ul li a {
        text-decoration: none;
        color: #E1E1E1;
        font-family: Montserrat, sans-serif;
        font-size: 17px;
    }

    .mobile-ul {
        color: #E1E1E1;
        background-color: black;
        margin-top: 0;
    }

    p.p {
        color: black;
        background-color: #ffffff;
        font-family: Montserrat, sans-serif;
        padding-top: 5%;
        padding-right: 5%;
        margin: 0;
        padding-bottom: 5%;
    }

    .main {
        max-width: 414px;
        background-color: #FFFAE2
    }

    .burger {
        margin-left: 22%;
        /*transition: all .7ms;*/
    }

    a {
        text-decoration: none;
        color: black;
        display: contents;
        white-space: nowrap;
        font-family: Montserrat, sans-serif;
        font-size: 10px;
    }

    .right {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .header-one {
        display: flex;
        align-items: center;
        font-family: Montserrat, sans-serif;
        color: #030303;
    }

    .container {
        display: flex;
        justify-content: space-around;
        min-height: 50px;
    }

    img {
        width: 33px;
        height: 33px;
    }

    .logo {
        font-size: 10px;
        font-family: Montserrat, sans-serif;
        font-weight: normal;
        margin-left: 22%;
    }

    /* =======================================min-width: 414px==================================*/
    @media (min-width: 415px) {
        .main {
            display: none;
        }
    }

    /* =======================================min-width: 414px==================================*/
    @media (max-width: 414px) {
        ul.mobile-ul li {
            list-style: none;
            padding-top: 3%;
            text-align: right;
            padding-right: 3%;
            padding-left: 0;
        }
    }

    /* =======================================max-width: 360==================================*/
    @media (max-width: 360px) {
        a {
            text-decoration: none;
            color: black;
            display: contents;
            white-space: nowrap;
            font-family: Montserrat, sans-serif;
            font-size: 8px;
        }

        ul.mobile-ul li {
            list-style: none;
            padding-top: 3%;
            text-align: right;
            padding-right: 3%;
            padding-left: 0;
        }

        ul.mobile-ul {
            padding-right: 0;
            padding-left: 0;
        }
    }

    /* =======================================max-width: 360==================================*/
    /* =======================================max-width: 320==================================*/
    @media (max-width: 320px) {
        a {
            text-decoration: none;
            color: black;
            display: contents;
            white-space: nowrap;
            font-family: Montserrat, sans-serif;
            font-size: 8px;
        }

        ul.mobile-ul li {
            list-style: none;
            padding-top: 3%;
            text-align: right;
            padding-right: 3%;
            padding-left: 0;
        }

        ul.mobile-ul {
            padding-right: 0;
            padding-left: 0;
        }

        ul.mobile-ul li a {
            text-decoration: none;
            color: #E1E1E1;
            font-family: Montserrat, sans-serif;
            font-size: 13px;
        }
    }

    /* =======================================max-width: 320==================================*/
    /* =======================================max-width: 320==================================*/
    @media (max-width: 375px) {
        .mobile-ul {
            color: #E1E1E1;
            background-color: black;
            margin-top: 0;
            padding-left: 0;
        }
    }

    /* =======================================max-width: 320==================================*/
</style>