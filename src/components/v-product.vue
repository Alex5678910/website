<template>
    <div class="product">
        <mobile-header></mobile-header>
        <mobile-web-one></mobile-web-one>
        <mobile-web-two></mobile-web-two>
        <mobile-web-three></mobile-web-three>
        <v-one></v-one>
        <v-two></v-two>
        <v-three></v-three>
        <v-small-square></v-small-square>
        <mobile-web-four></mobile-web-four>
        <v-four></v-four>
        <v-footer-one></v-footer-one>
        <v-footer-two></v-footer-two>
    </div>
</template>

<script>
    import VOne from "./v-one";
    import VFooterOne from "./v-footer-one";
    import VFooterTwo from "./v-footer-two";
    import VTwo from "./v-two";
    import VThree from "./v-three";
    import VSmallSquare from "./v-small-square";
    import VFour from "./v-four";
    import MobileHeader from "./mobile-header";
    import MobileWebOne from "./mobile-web-one";
    import MobileWebTwo from "./mobile-web-two";
    import MobileWebThree from "./mobile-web-three";
    import MobileWebFour from "./mobile-web-four";

    export default {
        name: "v-product",
        components: {
            MobileWebFour,
            MobileWebThree,
            MobileWebTwo,
            MobileWebOne, MobileHeader, VFour, VSmallSquare, VThree, VTwo, VFooterTwo, VFooterOne, VOne
        },
        metaInfo: {
            title: 'компонент product',
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