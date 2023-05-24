<script>
    export default {
        props: {
            title: String,
            original_language: String,
            original_title: String,
            vote_averange: Number,

        }
    }
</script>

<template>
    <div>
        <div>
            {{ title }}
            
        </div>
        <div>
            {{ original_language }}
        </div>
        <div>
            {{ original_title }}
        </div>
        <div>
            {{ vote_averange }}
        </div>
       
    </div>
</template>

<style lang="scss" scoped>

     
</style>