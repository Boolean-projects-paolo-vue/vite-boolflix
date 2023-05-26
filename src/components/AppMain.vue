<script>
import AppCardMovie from './Main/AppCardMovie.vue';
import AppCardSeries from './Main/AppCardSeries.vue';
import { store }  from './../store';
export default {
  data() {
    return {
      store,
    }
  },
  components:
  {
    AppCardMovie,
    AppCardSeries,
  }
}
</script>

<template>
  <div class="container_card">
    <div class="title">
      <h1 class>Film popolari</h1>
    </div>

    
    <div class="card_movie">
      
      <AppCardMovie 
        v-for="card in store.ArrMovies"
        :key="card.id"
        :moviecard="card"
      />
    </div>

    <div class="title">
      <h1 class>Serie popolari</h1>
    </div>
    <div class="card_series">
      <AppCardSeries 
        v-for="cardseries in store.ArrSeries"
        :key="cardseries.id"
        :seriescard="cardseries"
      />
    </div>
   
  </div>
</template>

<style lang="scss">

  .title{
    max-width: 88%;
    margin: auto;
    margin-top: 4rem;
    color: white;
  }

  .card_movie{
    margin: auto;
    max-width: 95%;
    margin-bottom: 4rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .card_series{
    margin: auto;
    max-width: 95%;
    margin-bottom: 4rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

</style>
