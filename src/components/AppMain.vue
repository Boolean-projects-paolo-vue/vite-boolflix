<script>
import AppCardMovie from './Main/AppCardMovie.vue';
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
  }
}
</script>

<template>
  <div class="container_card">
    <AppCardMovie 
    v-for="card in store.ArrMovies"
    :key="card.id"
    :title="card.title"
    :original_language="card.original_language"
    :original_title="card.original_title"
    :vote_averange="card.vote_averange"
    />
  </div>
</template>

<style lang="scss">

</style>