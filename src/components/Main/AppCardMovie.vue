<script>
    export default {
        props: {
            moviecard: Object,

        }
    }
</script>

<template>
    <div class="" style="border: 1px solid black;">
        <div>{{ moviecard.title }}</div>
        <div>{{ moviecard.original_language }}</div>
        <div>{{ moviecard.original_title }}</div>
        <div>{{ moviecard.vote_average }}</div>
    </div>
    <div>
        
    </div>
</template>

<style lang="scss" scoped>

     
</style>