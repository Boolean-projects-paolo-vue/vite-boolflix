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
    <AppCardMovie 
    v-for="card in store.ArrMovies"
    :key="card.id"
    :title="card.title"
    :moviecard="card"
    />
    <AppCardSeries 
    v-for="cardseries in store.ArrSeries"
    :key="cardseries.id"
    :seriescard="cardseries"
    />
  </div>
</template>

<style lang="scss">

</style>
