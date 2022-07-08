<template>
  <div id="app">

      <!-- <product-list-one v-bind:products="products"></product-list-one>
      <product-list-two v-bind:products="products"></product-list-two> -->

        <product-list-one ></product-list-one>
        <product-list-two ></product-list-two>

  </div>
</template>

<script>

import ProductListOne from './components/ProductListOne.vue'
import ProductListTwo from './components/ProductListTwo.vue'
export default {
  name: 'App',
  components: {
     'product-list-one':ProductListOne,
     'product-list-two':ProductListTwo
  },

  // data(){
  //   return {
  //     products:[
  //       {name:'Banana',price:20},
  //       {name:'Apple',price:40},
  //       {name:'Orange',price:60},
  //       {name:'Mango',price:80},
  //     ]
  //   }
  // }
  
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;

}
</style>
