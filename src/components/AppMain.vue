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

    <div class="card_movie">
      <AppCardMovie 
        v-for="card in store.ArrMovies"
        :key="card.id"
        :moviecard="card"
      />
    </div>
    <div class="card_movie series">
      <AppCardSeries 
        v-for="cardseries in store.ArrSeries"
        :key="cardseries.id"
        :seriescard="cardseries"
      />
    </div>
   
  </div>
</template>

<style lang="scss">
  .card_movie{
    margin: auto;
    max-width: 85%;
    border: 1px solid black;
    display: flex;
    flex-wrap: wrap;
  }

</style>
