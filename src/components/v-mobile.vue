<template>
    <div class="container">
        <v-h-one></v-h-one>
        <v-h-two></v-h-two>
        <v-h-three></v-h-three>
        <mobile-header></mobile-header>
        <v-h-mobile-one></v-h-mobile-one>
        <v-h-mobile-two></v-h-mobile-two>
        <v-h-mobile-three></v-h-mobile-three>
        <v-footer-one></v-footer-one>
        <v-footer-two></v-footer-two>
    </div>
</template>

<script>
    import VHOne from "./v-h-one";
    import VHTwo from "./v-h-two";
    import VHThree from "./v-h-three";
    import VFooterOne from "./v-footer-one";
    import VFooterTwo from "./v-footer-two";
    import VHMobileOne from "./v-h-mobile-one";
    import MobileHeader from "./mobile-header";
    import VHMobileTwo from "./v-h-mobile-two";
    import VHMobileThree from "./v-h-mobile-three";

    export default {
        name: "v-mobile",
        components: {
            VHMobileThree,
            VHMobileTwo, MobileHeader, VHMobileOne, VFooterTwo, VFooterOne, VHThree, VHTwo, VHOne
        },
        metaInfo: {
            title: 'компонент Мобильные приложения',
            titleTemplate: '%s | vue-meta Example App',
            htmlAttrs: {
            reptilian: 'gator'
            },
            headAttrs: {
            nest: 'eggs'
            },
            meta: [
            { charset: 'utf-8' },
            { name: 'description', content: 'gator' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ]
        },
    }
</script>

<style scoped>

</style>