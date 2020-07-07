<template>
    <div class="container">
        <v-h-one></v-h-one>
        <v-h-two></v-h-two>
        <v-h-three></v-h-three>
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

    export default {
        name: "v-mobile",
        components: {VFooterTwo, VFooterOne, VHThree, VHTwo, VHOne}
    }
</script>

<style scoped>

</style>