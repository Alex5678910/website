<template>
    <div class="container">
        <div class="container-one">
            <h5>digital development</h5>
            <h1>Разработка<br>
                мобильных приложений</h1>
            <p>Мобильное приложение способно увеличить<br>
                продажи компании, потому как служит средством<br>
                привлечения и удержания клиентов.</p>
            <div class="one">01</div>
            <div class="svg">
                <svg width="358.618" height="6" viewBox="0 0 358.618 6">
                    <g id="Line_2" data-name="Line 2" transform="translate(0 3)">
                        <path id="Path_61" data-name="Path 61" d="M5202,894.549h358.618"
                              transform="translate(-5202 -894.549)" fill="none" stroke="#707070" stroke-width="6"/>
                        <path id="Path_60" data-name="Path 60" d="M5202,894.549h254.927"
                              transform="translate(-5202 -894.549)" fill="none" stroke="#5e2424" stroke-width="6"/>
                    </g>
                </svg>
            </div>
            <div class="logo">
                <span>WebKiwi</span><br>
                studio
            </div>
        </div>
        <div class="container-two">
            <img src="../assets/images/iPhone-XS.png" alt="">
            <div class="rectangle">
                <div class="text">Привлекательный<br>
                    &nbsp;<span>внешний вид</span>
                </div>
                <div class="text">Удобство при<br>
                    <span>использовании</span>
                </div>
                <div class="text">Воплощение ваших<br>
                    <span>идей</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "v-h-one"
    }
</script>

<style scoped>
    .rectangle .text span:nth-child(1) {
        margin-left: 24%;
    }

    .rectangle .text span:nth-child(2) {
        margin-left: 24%;
    }

    .rectangle .text span:nth-child(3) {
        margin-left: 24%;
    }

    .rectangle .text {
        margin-left: 0;
        text-align: left;
    }

    .rectangle .text::before {
        content: "";
        border: 2px solid #c3bcbc;
        border-radius: 50%;
        padding: 0 12px;
        background-color: #151313;
        margin-right: 3rem;
        margin-left: -.8rem;
    }

    .rectangle {
        height: 102.3%;
        background-color: #030303;
        width: 25rem;
        position: absolute;
        right: 8px;
        top: 139px;
        font-size: 20px;
        color: white;
        font-family: 'Montserrat Alternates', sans-serif;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
        opacity: .8;
    }

    .one {
        color: white;
        font-size: 40px;
        font-weight: normal;
        text-align: left;
        font-family: 'Montserrat', sans-serif;
        margin-top: 15%;
    }

    .container-one {
        margin-left: 3%;
    }

    p {
        color: white;
        font-family: 'Montserrat', sans-serif;
        font-size: 25px;
        text-align: left;
        padding-bottom: 10%;
        padding-top: 3%;
    }

    h1 {
        color: white;
        font-family: 'Montserrat', sans-serif;
        font-size: 55px;
        text-align: left;
    }

    .logo {
        color: white;
        font-size: 30px;
        text-align: left;
        font-family: 'Montserrat', sans-serif;
        padding-bottom: 4%;
    }

    .container {
        background-image: url(../assets/images/bg31.png);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
    }

    h5 {
        margin-top: 0;
        font-family: 'Montserrat', sans-serif;
        font-weight: lighter;
        font-size: 20px;
        color: #8F3B3B;
        text-align: left;
        padding-top: 12%;
        padding-bottom: 16%;
    }

    .logo span {
        color: white;
        font-size: 30px;
        text-align: left;
        font-weight: bold;
    }

    .svg {
        text-align: left;
    }

    /* ================================================max-width: 1366==================================================*/
    @media (max-width: 1366px) {
        img{
            width: 100%;
        }
        .rectangle .text::before {
            content: "";
            border: 2px solid #c3bcbc;
            border-radius: 50%;
            padding: 0 10px;
            background-color: #151313;
            margin-right: 2rem;
            margin-left: -.8rem;
        }
        .rectangle {
            height: 102.3%;
            background-color: #030303;
            width: 19rem;
            position: absolute;
            right: 0px;
            top: 125px;
            font-size: 14px;
            color: white;
            font-family: 'Montserrat Alternates', sans-serif;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-around;
            opacity: .8;
        }
        .container {
            max-width: 1366px;
            max-height: 768px;
        }

        h5 {
            margin-top: 0;
            font-family: 'Montserrat', sans-serif;
            font-weight: lighter;
            font-size: 15px;
            color: #8F3B3B;
            text-align: left;
            padding-top: 9%;
            padding-bottom: 5%;
        }

        h1 {
            color: white;
            font-family: 'Montserrat', sans-serif;
            font-size: 45px;
            text-align: left;
        }

        p {
            color: white;
            font-family: 'Montserrat', sans-serif;
            font-size: 19px;
            text-align: left;
            padding-bottom: 0%;
            padding-top: 9%;
        }

        .one {
            color: white;
            font-size: 30px;
            font-weight: normal;
            text-align: left;
            font-family: 'Montserrat', sans-serif;
            margin-top: 15%;
        }

        .logo {
            color: white;
            font-size: 20px;
            text-align: left;
            font-family: 'Montserrat', sans-serif;
            padding-bottom: 4%;
        }

        .logo span {
            color: white;
            font-size: 24px;
            text-align: left;
            font-weight: bold;
        }

        svg {
            width: 296px;
            height: 6px;
        }
    }

    /* ================================================max-width: 1366==================================================*/
    /* ================================================max-width: 414px==================================================*/
    @media (max-width: 414px) {
        .container {
            display: none;
        }
    }

    /* ================================================max-width: 414px==================================================*/
    /* ================================================max-width: 1024==================================================*/
    @media (max-width: 1024px) {
        .rectangle {
            height: 46.3%;
            background-color: #030303;
            width: 19rem;
            position: absolute;
            right: 0px;
            top: 112px;
            font-size: 14px;
            color: white;
            font-family: 'Montserrat Alternates', sans-serif;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-around;
            opacity: .8;
        }
    }
    /* ================================================max-width: 1024==================================================*/
</style>