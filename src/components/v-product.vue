<template>
    <div class="product">
        <v-one></v-one>
        <v-two></v-two>
        <v-three></v-three>
        <v-small-square></v-small-square>
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

    export default {
        name: "v-product",
        components: {VFour, VSmallSquare, VThree, VTwo, VFooterTwo, VFooterOne, VOne},
    }
</script>

<style scoped>

</style>