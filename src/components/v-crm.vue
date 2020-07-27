<template>
    <div class="container">
        <mobile-header></mobile-header>
        <v-crm-one></v-crm-one>
        <v-crm-two></v-crm-two>
        <v-crm-three></v-crm-three>
        <v-crm-mobile-one></v-crm-mobile-one>
        <v-crm-mobile-two></v-crm-mobile-two>
        <v-crm-mobile-three></v-crm-mobile-three>
        <v-crm-mobile-four></v-crm-mobile-four>
        <v-footer-one></v-footer-one>
        <v-footer-two></v-footer-two>
    </div>
</template>

<script>
    import VCrmOne from "./v-crm-one";
    import VCrmTwo from "./v-crm-two";
    import VFooterOne from "./v-footer-one";
    import VFooterTwo from "./v-footer-two";
    import MobileHeader from "./mobile-header";
    import VCrmMobileOne from "./v-crm-mobile-one";
    import VCrmMobileTwo from "./v-crm-mobile-two";
    import VCrmMobileThree from "./v-crm-mobile-three";
    import VCrmMobileFour from "./v-crm-mobile-four";
    import VCrmThree from "./v-crm-three";

    export default {
        name: "v-crm",
        components: {
            VCrmThree,
            VCrmMobileFour,
            VCrmMobileThree,
            VCrmMobileTwo, VCrmMobileOne, MobileHeader, VFooterTwo, VFooterOne, VCrmTwo, VCrmOne
        },
        metaInfo: {
            title: 'компонент CRM',
            titleTemplate: '%s | vue-meta Example App',
            htmlAttrs: {
            reptilian: 'gator'
            },
            headAttrs: {
            nest: 'eggs'
            },
            meta: [
            { charset: 'utf-8' },
            { name: 'description', content: 'компонент CRM' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ]
        },

    }
</script>

<style scoped>

</style>