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
        if(store.SearchBar == ''){
          this.store.inputError = true;
        }else{
          this.store.inputError = false;
          axios
        .get('https://api.themoviedb.org/3/search/movie',{
          params:{
            api_key: '919b51ee159faf8d6a30b50361801a6d',
            query: this.store.SearchBar,
          }
        })
          .then(response => (this.store.ArrMovies = response.data.results));
          axios
          .get('https://api.themoviedb.org/3/search/tv',{
            params:{
              api_key: '919b51ee159faf8d6a30b50361801a6d',
              query: this.store.SearchBar,
            }
          })
          .then(response => (this.store.ArrSeries = response.data.results
          ));
        }
        
      },
    },
    created() {
      axios
        .get('https://api.themoviedb.org/3/movie/popular',{
          params:{
            api_key: '919b51ee159faf8d6a30b50361801a6d',
            query: this.store.SearchBar,
          }
        })
        .then(response => (this.store.ArrMovies = response.data.results
      ));

      axios
        .get('https://api.themoviedb.org/3/tv/popular',{
          params:{
            api_key: '919b51ee159faf8d6a30b50361801a6d',
            query: this.store.SearchBar,
          }
        })
        .then(response => (this.store.ArrSeries = response.data.results
      ));
    },
  };
</script>

<template>
   <div>
    <AppHeader @performSearch="RequestMoviesfromApi" />
  </div>
 <AppMain />

</template>

<style lang="scss">

@import "../node_modules/bootstrap/scss/bootstrap";

body{
  background-color: rgb(38, 37, 37);
}

</style>
