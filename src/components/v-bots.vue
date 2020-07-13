<template>
    <div class="container">
        <v-bots-one></v-bots-one>
        <v-bots-two></v-bots-two>
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

    export default {
        name: "v-bots",
        components: {VBotsThree, VBotsTwo, VFooterTwo, VFooterOne, VBotsOne}
    }
</script>

<style scoped>

</style>