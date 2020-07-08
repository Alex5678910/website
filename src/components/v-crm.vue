<template>
    <div class="container">
       <v-crm-one></v-crm-one>
        <v-crm-two></v-crm-two>
        <v-footer-one></v-footer-one>
        <v-footer-two></v-footer-two>
    </div>
</template>

<script>
    import VCrmOne from "./v-crm-one";
    import VCrmTwo from "./v-crm-two";
    import VFooterOne from "./v-footer-one";
    import VFooterTwo from "./v-footer-two";

    export default {
        name: "v-crm",
        components: {VFooterTwo, VFooterOne, VCrmTwo, VCrmOne},
    }
</script>

<style scoped>

</style>