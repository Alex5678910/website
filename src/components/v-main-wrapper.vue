<template>
    <div>
        <mobile-header @changeMain="changeMainOne"></mobile-header>
        <mobile-one :showMain="showMain"></mobile-one>
        <mobile-two></mobile-two>
        <mobile-three></mobile-three>
        <mobile-four></mobile-four>
        <mobile-five></mobile-five>

        <v-header-two></v-header-two>
        <v-paris></v-paris>
        <v-bg-black></v-bg-black>
        <v-paris-two></v-paris-two>
        <v-bg-black-two></v-bg-black-two>
        <v-paris-three></v-paris-three>
        <v-long-menu></v-long-menu>
        <v-footer-one></v-footer-one>
        <v-footer-two></v-footer-two>
    </div>
</template>

<script>

    import MobileHeader from "./mobile-header";
    import MobileOne from "./mobile-one";
    import MobileTwo from "./mobile-two";
    import MobileThree from "./mobile-three";
    import MobileFour from "./mobile-four";
    import MobileFive from "./mobile-five";
    import VFooterOne from "./v-footer-one";
    import VFooterTwo from "./v-footer-two";
    import VHeaderTwo from "./v-header-two";
    import VParis from "./v-paris";
    import VBgBlack from "./v-bg-black";
    import VParisTwo from "./v-paris-two";
    import VBgBlackTwo from "./v-bg-black-two";
    import VParisThree from "./v-paris-three";
    import VLongMenu from "./v-long-menu";

    export default {
        name: "v-main-wrapper",
        props: {
            showMain: {
                default: true,
                type: Boolean
            },
        },
        methods: {
            changeMainOne(){
                this.showMain = !this.showMain
            }
        },
        components: {
            VFooterTwo,
            VFooterOne,
            MobileFive,
            MobileFour,
            MobileThree,
            MobileTwo,
            MobileOne,
            MobileHeader,
            VLongMenu,
            VParisThree,
            VBgBlackTwo,
            VParisTwo,
            VBgBlack,
            VParis,
            VHeaderTwo
        },
        metaInfo: {
            title: 'Разработка профессиональных сайтов и приложений в Тольятти',
            titleTemplate: '%s',
            htmlAttrs: {
            reptilian: 'gator'
            },
            headAttrs: {
            nest: 'eggs'
            },
            meta: [
            { charset: 'utf-8' },
            { name: 'description', content: 'Разрабатываем сайты лендинги, адаптивные, копроративные для вашего бизнеса Тольятти. Разработка приложений на android и ios. Делаем CRM системы. SEO и SMM продвижение' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ]
        },
    }
</script>

<style scoped>

</style>

<!--
<v-header-two></v-header-two>
<v-paris></v-paris>
<v-bg-black></v-bg-black>
<v-paris-two></v-paris-two>
<v-bg-black-two></v-bg-black-two>
<v-paris-three></v-paris-three>
<v-long-menu></v-long-menu>

components: {
VLongMenu, VParisThree, VBgBlackTwo, VParisTwo, VBgBlack, VParis, VHeaderTwo}

    import VHeaderTwo from "./v-header-two";
    import VParis from "./v-paris";
    import VBgBlack from "./v-bg-black";
    import VParisTwo from "./v-paris-two";
    import VBgBlackTwo from "./v-bg-black-two";
    import VParisThree from "./v-paris-three";
    import VLongMenu from "./v-long-menu";

}-->
