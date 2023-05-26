<script>
import { store } from '../store';
export default {
  data() {
    return {
      store,
    }
  },
  methods: {
    emitMovie() {
      this.$emit('performSearch');
      },
  },
  component:{
    
  }
}
</script>

<template>
    <div class="header px-5">
      <div class="menu_left">
        <h1  class="p-1" style="color:red">BOOFLIX</h1>
        <div class="list_menu" style="color:white">
          <span>Home</span>
          <span>Serie TV</span>
          <span>Film</span>
          <span>Nuovi e popolari</span>
          <span>La mia lista</span>
          <span>Sfoglia per lingua</span>
        </div>
      </div>

      
      <div class="menu_right">
        <input 
        type="text" 
        placeholder="Cerca Film o Serie TV" 
        v-model="store.SearchBar" 
        @keyup.enter="emitMovie">


        
        <button @click="emitMovie" class="mx-0">
          search
        </button>

        <div style="color:red">
            <small v-show="store.inputError">scrivi qualcosa per la tua ricerca</small>
        </div>
      </div>
      
    </div>

</template>

<style lang="scss" scoped>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

 .header{
  height: 5rem;
  background-color: black;
  display: flex;
  justify-content: space-between;
 }

 .menu_left{
  display: flex;
  flex-direction: row;
  align-items: center;
 }
 .menu_right{
  display: flex;
  flex-direction: row;
  align-items: center;
 }

 span{
  padding: 0.5rem;
 }

</style>