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
        .get('https://api.themoviedb.org/3/search/movie?api_key=919b51ee159faf8d6a30b50361801a6d&query=all',)
          .then(response => (this.store.ArrMovies = response.data.results));
      },
    },
    created() {
      this.RequestMoviesfromApi();
    },
  };
</script>

<template>

  <body class="body">
    <Header>
      <AppHeader />
    </Header>

    <Main>
      <AppMain />
    </Main>
  </body>
  
</template>

<style lang="scss" scoped>

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
}
  .body{
    height: 100vh;
    background-color: aquamarine;
  }
</style>
