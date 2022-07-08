import Vue from "vue";
import Vuex from 'vuex'
Vue.use(Vuex)



export const store = new Vuex.Store({
    state:{
       
        // data such as string,number,boolean,array,object etc
        products:[
            {name:'Banana',price:20},
            {name:'Apple',price:40},
            {name:'Orange',price:60},
            {name:'Mango',price:80},
          ]
        
    },
    mutations:{
        // functions inside mutation

    }
})
