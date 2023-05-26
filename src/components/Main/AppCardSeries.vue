<script>
    import LangFlag from 'vue-lang-code-flags'
    export default {

        components: {
        LangFlag,
        },
        props: {
            seriescard: Object,

        }
    }
</script>

<template>

    <div class="card rounded-4" style="border: 1px solid black;">
        <div class="part front rounded-4">
            <img v-if="seriescard.poster_path" 
            :src="'https://image.tmdb.org/t/p/w342' + seriescard.poster_path"  
            :alt="seriescard.poster_path"
            class="rounded-4"
            style="width: 100%; height: 500px;"
            >
            <img v-else src="../../assets/img/fallback-image.png" alt=""
            style="width: 100%;"
            >
        </div>

        <div class="part back rounded-4" >
            <div><span>Titolo: </span>{{ seriescard.name }}</div>
            <div class="lang">
                <span>Lingua: </span><lang-flag :iso='seriescard.original_language' />
            </div>
            <div><span>Titolo: </span>{{ seriescard.original_name }}</div>
    
            <div>
                <span>Voto: </span> 
                <font-awesome-icon v-for="star in Math.ceil((seriescard.vote_average) / 2)" :key="star" :icon="['fas', 'star']" />
                <template v-for="star in 5- Math.ceil((seriescard.vote_average) / 2)" >
                    <font-awesome-icon v-if="Math.ceil((seriescard.vote_average) / 2) < 5" :key="star" :icon="['far', 'star']" />
                </template>
                
                <!-- {{ Math.ceil((moviecard.vote_average) / 2) }} -->
            </div>

            <div class="overview">
                <span>overview: </span> 
                <div>{{ seriescard.overview }}</div>
            </div>
        </div>

    </div>
    <div>
        
    </div>
</template>

<style lang="scss" scoped>
    .card{
        max-width: 18%;
        margin: auto;
        position: relative;
        margin: 0.5rem
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
        width: 100%;
        height: 100%;
        color: white;
        position: absolute;
        opacity: 0;
        max-width: 100%; 
        background-color: black; 
        display: flex;
        padding-inline: 3.5rem;
        justify-content: center;
        flex-direction: column;
        font-size: 14px;
        text-align: justify;
    }

    span{
        font-weight: 700;
        font-size: 18px;
        color: red;
    }
    
    .card:hover .back {
        transition-duration: 0.8s;
        opacity: 1;
        
    }

    .card:hover .front {
        transform:rotateY(180deg);
        transition: 0.5s;
        opacity: 0;
    };
</style>