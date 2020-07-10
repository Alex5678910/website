<template>
    <div class="container">
        <v-bots-one></v-bots-one>
        <v-footer-one></v-footer-one>
        <v-footer-two></v-footer-two>
    </div>
</template>

<script>
    import VBotsOne from "./v-bots-one";
    import VFooterOne from "./v-footer-one";
    import VFooterTwo from "./v-footer-two";

    export default {
        name: "v-bots",
        components: {VFooterTwo, VFooterOne, VBotsOne}
    }
</script>

<style scoped>

</style>