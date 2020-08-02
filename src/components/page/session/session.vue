<template>
    <div class="vuePage">
       
    </div>
</template>

<script>
    export default {
        data () {
           return {
           }
        },
        created () {
        },
        computed: {
           //computedFn () {
           //    return xxx
           //}
        },
        mounted () {
            console.log(this.$store.state.menu.menuData,'sada');
            
        },
        methods: {
        },
        components: {
        },
        props: {
            paramName: {
               type: Object
            }
        }
    }
</script>

<style>
</style>