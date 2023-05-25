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
    
    <div class="card" style="border: 1px solid black;">
        
        <div class="part front">
            <img v-if="moviecard.poster_path" 
            :src="'https://image.tmdb.org/t/p/w342' + moviecard.poster_path"  
            :alt="moviecard.poster_path"
            style="width: 100%;"
            >
            <img v-else src="../../assets/img/fallback-image.png" alt=""
            style="width: 100%;"
            >
        </div>

        <div class="part back" >
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
        </div>

    </div>

</template>

<style lang="scss" scoped>
    .card{
        max-width: 20%;
        margin: auto;
    }

    .part{
        max-width: 100%;
        top: 0;
        left: 0;  
    }

    .front{
        max-width: 100%;
    }

    .back{
        display: none;
        max-width: 100%;  
    }
    
    
    .card:hover .back {
        transform:rotateY(180deg);
    }

    .card:hover .front {
        transform:rotateY(180deg);
        transition: 0.5s;
        opacity: 0;
    };
</style>