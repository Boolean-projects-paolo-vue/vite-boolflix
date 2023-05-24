<script>
    export default {
        props: {
            seriescard: Object,

        }
    }
</script>

<template>
    <div class="card" style="border: 1px solid red;">
        <div>{{ seriescard.name }}</div>
        <div>{{ seriescard.original_language }}</div>
        <div>{{ seriescard.original_name }}</div>
        <div>{{ seriescard.vote_average }}</div>
    </div>
    <div>
        
    </div>
</template>

<style lang="scss" scoped>
        
</style>