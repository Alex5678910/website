<template>
    <div class="header">
        <div>
            <router-link :to="'/'" tag="a">
                <div class="header-one">
                    <img src="../assets/img/logo2.png" title="WebKiwi Studio" alt="Иконка WebKiwi" class="animate__animated animate__bounce animate__repeat-3">
                    <div class="animate__animated animate__bounce animate__repeat-3">
                        WebKiwi<br>
                        STUDIO
                    </div>
                </div>
            </router-link>
        </div>

        <div>
            <div class="flex-two">
                <div>
                    <a href="tel: 7(927)-770-77-75" class="a animate__animated animate__pulse">т. +7(927)-770-77-75</a>
                </div>

                <div>
                    <button @click="openSlide">Нужна консультация?</button>
                </div>
            </div>

            <div class="flex-three">

                <router-link tag="a" :to="'/razrabotka-sajtov'">
                    <a>web-разработка</a>
                </router-link>

                <router-link tag="a" :to="'/mobile'"><a>разработка мобильных приложений</a></router-link>
                <router-link tag="a" :to="'/crm'"><a>разработка CRM-системы</a></router-link>
                <router-link tag="a" :to="'/bots'"><a>разработка ботов</a></router-link>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-header",
        methods:{
            openSlide(){
                window.scrollTo(0, 111000)
            }
        }
    }
</script>

<style scoped>

    .flex-three a {
        margin-left: 2rem;
    }

    .flex-three {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end;
        margin-top: 1rem;
        margin-right: 2rem;
        margin-bottom: 1rem;
    }

    .flex-two {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end;
        margin-right: 3rem;
        margin-top: 2rem;
    }

    .header {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        background-color: #000000;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -webkit-box-align: end;
        -ms-flex-align: end;
        align-items: flex-end;
        font-family: 'Montserrat', sans-serif;
        border-bottom: 1px solid #847f7f;
    }

    .header-one {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin-left: 6rem;
        margin-bottom: 2rem;
        font-family: 'Montserrat', sans-serif;
        color: aliceblue;
    }

    a {
        color: white;
        text-decoration: none;
        font-family: 'Montserrat', sans-serif;
        font-size: 1.4rem;
        font-weight: normal;
    }

    a.header-one {
        text-decoration: none;
    }

    a.a {
        color: aliceblue;
        font-size: 2rem;
        font-family: 'Montserrat', sans-serif;
        margin-right: 6rem;
    }

    a:hover{
        color: chocolate;
        -webkit-transition: all .5s;
        -o-transition: all .5s;
        transition: all .5s;
    }


    img {
        width: 5rem;
        height: 5rem;
    }

    p {
        color: aliceblue;
        font-size: 1.5rem;
        font-family: 'Montserrat', sans-serif;
        margin: 0;
    }

    button {
        font-size: 1.5rem;
        border-radius: .5rem;
        min-width: 23rem;
        height: 3rem;
        background: -webkit-gradient(linear, left bottom, left top, from(#FFAA00), to(#F2D72B));
        background: -o-linear-gradient(bottom, #FFAA00, #F2D72B);
        background: linear-gradient(to top, #FFAA00, #F2D72B);
        font-family: 'Montserrat', sans-serif;
        cursor: pointer;
        -webkit-transition: all .5s;
        -o-transition: all .5s;
        transition: all .5s;
    }
    button:hover {
        background: -webkit-gradient(linear, left bottom, left top, from(#ffdd00), to(#fcdc15));
        background: -o-linear-gradient(bottom, #ffdd00, #fcdc15);
        background: linear-gradient(to top, #ffdd00, #fcdc15);
        -webkit-transition: all .5s;
        -o-transition: all .5s;
        transition: all .5s;
    }
    button:focus {
        outline: none;
    }

    /*==============================================================media=============================*/
    /*====================================================max-width: 1366px========================================*/

    @media (max-width: 1366px) {
        a.a{
            color: aliceblue;
            font-size: 1.3rem;
            font-family: 'Montserrat', sans-serif;
            margin-right: 6rem;
        }
        a {
            color: white;
            text-decoration: none;
            font-family: 'Montserrat', sans-serif;
            font-size: 1.1rem;
            font-weight: normal;
            margin-bottom: 1rem;
        }
        .flex-three {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: end;
            -ms-flex-pack: end;
            justify-content: flex-end;
            margin-top: 1rem;
            margin-right: 2rem;
            margin-bottom: 1rem;
        }
        .flex-three a{
            margin-left: 1rem;
        }
        h1{
            font-family: Montserrat, sans-serif;
            font-size: 540%;
            font-weight: 400;
            color: aliceblue;
            padding-top: 4%;
            text-align: -webkit-left;
            padding-left: 9%;
            margin-top: 0;
        }
        h2{
            font-size: 265%;
            text-align: right;
            color: aliceblue;
            font-weight: bold;
            font-family: 'Montserrat Alternates', sans-serif;
            padding-bottom: 15%;
            padding-top: 7%;
            padding-right: 8%;
        }
        button {
            font-size: 1rem;
            border-radius: .5rem;
            min-width: 16rem;
            height: 2.4rem;
            background: -webkit-gradient(linear, left bottom, left top, from(#FFAA00), to(#F2D72B));
            background: -o-linear-gradient(bottom, #FFAA00, #F2D72B);
            background: linear-gradient(to top, #FFAA00, #F2D72B);
            font-family: 'Montserrat', sans-serif;
            cursor: pointer;
        }
        .flex-two{
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: end;
            -ms-flex-pack: end;
            justify-content: flex-end;
            margin-right: 1rem;
            margin-top: 1rem;
        }
        .header-one{
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            margin-left: 3rem;
            margin-bottom: 1rem;
            font-family: 'Montserrat', sans-serif;
            color: aliceblue;
        }
    }

    /*====================================================max-width: 1366px========================================*/
    /*====================================================max-width: 1025px========================================*/

    @media (max-width: 1024px) {
        button {
            font-size: 1rem;
            border-radius: .5rem;
            min-width: 14rem;
            height: 2rem;
            background: -webkit-gradient(linear, left bottom, left top, from(#FFAA00), to(#F2D72B));
            background: -o-linear-gradient(bottom, #FFAA00, #F2D72B);
            background: linear-gradient(to top, #FFAA00, #F2D72B);
            font-family: 'Montserrat', sans-serif;
            cursor: pointer;
        }
        a {
            color: white;
            font-family: 'Montserrat', sans-serif;
            font-size: 0.6rem;
        }
    }

    /*====================================================max-width: 1025px========================================*/
    /*====================================================max-width: 768px========================================*/
    @media (max-width: 768px) {
        .header {
            background-color: #000000;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
        }

        .header-one{
            font-family: Montserrat, sans-serif;
            color: aliceblue;
            margin-left: 12%;
            padding-top: 1rem;
        }

        a.a {
            color: aliceblue;
            font-size: 1.3rem;
            font-family: Montserrat, sans-serif;
            margin-left: 0;
        }
    }

    /*====================================================max-width: 769px========================================*/
    /*====================================================max-width: 414px========================================*/
    @media (max-width: 414px) {
        .header {
            display: none;
        }
    }
</style>