<script>
  import AppHeader from './components/AppHeader.vue';
  import AppMain from './components/AppMain.vue';
  import axios from 'axios';
  import { store }  from './store';

  export default {
    data() {
      return {
        store,
      }
    },
    components:{
      AppHeader,
      AppMain,
    },
    methods: {
      RequestMoviesfromApi(){
        axios
        .get('https://api.themoviedb.org/3/search/movie',{
          params:{
            api_key: '919b51ee159faf8d6a30b50361801a6d',
            query: this.store.SearchBar,
          }
        }
        
        )
          .then(response => (this.store.ArrMovies = response.data.results));
          axios
        .get('https://api.themoviedb.org/3/search/tv',{
          params:{
            api_key: '919b51ee159faf8d6a30b50361801a6d',
            query: this.store.SearchBar,
          }
        }
        
        )
          .then(response => (this.store.ArrSeries = response.data.results));
      },
    },
  };
</script>

<template>

  
  <Header>
    <AppHeader @performSearch="RequestMoviesfromApi" />
  </Header>

  <Main>
    <AppMain />
  </Main>

</template>

<style lang="scss">

@import "../node_modules/bootstrap/scss/bootstrap";



</style>
