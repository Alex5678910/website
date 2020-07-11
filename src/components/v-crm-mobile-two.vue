<template>
    <div class="container">
        <div class="fixed">
            <img src="../assets/mobail/list.png" alt="" class="list">
        </div>
        <div class="main">
            <p>development</p>
        </div>
        <div class="text">
            CRM-система нужна для выстраивания<br>
            грамотного диалога с клиентом:<br>
            она позволяет не допускать ошибок и,<br>
            как следствие, клиент может заказать<br>
            больше продуктов.<br>
        </div>
        <svg width="201.262" height="19.953" viewBox="0 0 201.262 19.953">
            <g id="Component_64_2" data-name="Component 64 – 2" transform="translate(0 0.237)">
                <path id="Path_122" data-name="Path 122" d="M7948.356,1962.527h88.631"
                      transform="translate(-7835.726 -1952.471)" fill="none" stroke="#707070" stroke-width="1"/>
                <path id="Path_171" data-name="Path 171" d="M7948.356,1962.527h88.631"
                      transform="translate(-7948.356 -1952.471)" fill="none" stroke="#707070" stroke-width="1"/>
                <path id="Path_120" data-name="Path 120" d="M8251.137,1950.246l-10.49,19.479"
                      transform="translate(-8148.647 -1950.246)" fill="none" stroke="#707070" stroke-width="1"/>
                <path id="Path_172" data-name="Path 172" d="M8251.137,1950.246l-10.49,19.479"
                      transform="translate(-8140.137 -1950.246)" fill="none" stroke="#707070" stroke-width="1"/>
            </g>
        </svg>
    </div>
</template>

<script>
    export default {
        name: "v-crm-mobile-two"
    }
</script>

<style scoped>
    .fixed{
        display: flex;
        justify-content: flex-end;
        margin-right: 2%;
    }
    .list {
        position: fixed !important;
    }

    .text {
        color: #616161;
        font-size: 15px;
        font-family: 'Montserrat', sans-serif;
        text-align: center;
        margin-bottom: 3%;
        margin-top: 7%;
    }

    p {
        text-align: right;
        color: #616161;
        font-size: 9px;
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        margin-right: 5%;
        margin-top: 4%;
        margin-bottom: 3%;
    }

    .container {
        height: 315px;
        background-color: white;
        max-width: 414px;
    }

    /* =======================================min-width: 414px==================================*/
    @media (min-width: 415px) {
        .container {
            display: none;
        }
    }

    /* =======================================min-width: 414px==================================*/
</style>