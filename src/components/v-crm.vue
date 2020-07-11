<template>
    <div class="container">
        <mobile-header></mobile-header>
        <v-crm-one></v-crm-one>
        <v-crm-two></v-crm-two>
        <v-crm-mobile-one></v-crm-mobile-one>
        <v-crm-mobile-two></v-crm-mobile-two>
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

    export default {
        name: "v-crm",
        components: {VCrmMobileTwo, VCrmMobileOne, MobileHeader, VFooterTwo, VFooterOne, VCrmTwo, VCrmOne},
    }
</script>

<style scoped>

</style>