import { reactive } from 'vue';

 export const store = reactive({
    ArrMovies: [],
    ArrSeries:[],
    ArrCastList:[],

    SearchBar:"",

    inputError: false,
});