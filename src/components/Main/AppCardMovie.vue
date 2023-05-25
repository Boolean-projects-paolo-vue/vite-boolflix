<script>
import LangFlag from 'vue-lang-code-flags'
export default {
    components: {
        LangFlag,
    },
    props: {
        moviecard: Object,

    },
}
</script>

<template>
    
    <div class="" style="border: 1px solid black;">
        
        <img v-if="moviecard.poster_path" 
            :src="'https://image.tmdb.org/t/p/w342' + moviecard.poster_path"  
            :alt="moviecard.poster_path">
        <img v-else src="../../assets/img/fallback-image.png" alt="">
        <div>{{ moviecard.title }}</div>
        <div class="lang">
          <lang-flag :iso='moviecard.original_language' />
        </div>
        <div>{{ moviecard.original_title }}</div>
        
        <div>
            <font-awesome-icon v-for="star in Math.ceil((moviecard.vote_average) / 2)" :key="star" :icon="['fas', 'star']" />
            <template v-for="star in 5- Math.ceil((moviecard.vote_average) / 2)" >
                <font-awesome-icon v-if="Math.ceil((moviecard.vote_average) / 2) < 5" :key="star" :icon="['far', 'star']" />
            </template>
            
            <!-- {{ Math.ceil((moviecard.vote_average) / 2) }} -->
        </div>
        <div>
  </div>
       
    </div>

</template>

<style lang="scss" scoped>

     
</style>