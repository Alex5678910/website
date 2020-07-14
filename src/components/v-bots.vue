<template>
    <div class="container">
        <mobile-header></mobile-header>
        <v-bots-one></v-bots-one>
        <v-bots-two></v-bots-two>
        <v-bots-mobile></v-bots-mobile>
        <v-bots-mobile-two></v-bots-mobile-two>
        <v-bots-mobile-three></v-bots-mobile-three>
        <v-bots-three></v-bots-three>
        <v-footer-one></v-footer-one>
        <v-footer-two></v-footer-two>
    </div>
</template>

<script>
    import VBotsOne from "./v-bots-one";
    import VFooterOne from "./v-footer-one";
    import VFooterTwo from "./v-footer-two";
    import VBotsTwo from "./v-bots-two";
    import VBotsThree from "./v-bots-three";
    import MobileHeader from "./mobile-header";
    import VBotsMobile from "./v-bots-mobile";
    import VBotsMobileTwo from "./v-bots-mobile-two";
    import VBotsMobileThree from "./v-bots-mobile-three";

    export default {
        name: "v-bots",
        components: {
            VBotsMobileThree,
            VBotsMobileTwo, VBotsMobile, MobileHeader, VBotsThree, VBotsTwo, VFooterTwo, VFooterOne, VBotsOne}
    }
</script>

<style scoped>

</style>