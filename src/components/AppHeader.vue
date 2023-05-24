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
    <div class="header">
      <h1 style="color:red">BOOFLIX</h1>
      <input type="text" placeholder="Cerca Film o Serie TV" v-model="store.SearchBar" @keyup.enter="emitMovie">
      <button @click="emitMovie">
        search
      </button>
      
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
 }

</style>