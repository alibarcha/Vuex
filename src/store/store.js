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
          ],
        //   string data
          productOne:'product list One',
          productTwo:'product list Two',

          lName:'ali',
          fName:'barcha',

          
    },
    getters:{
      // functions inside getters
        // using arroy,fat function
      saleProducts:(state)=>{
        var saleProducts=state.products.map((products)=>{
          return {
            name:"**"+products.name+"**",
            price:products.price/2
          }
        });
        return saleProducts
      },

          // use narmal function
      // saleProducts:function(state){
      //   var saleProducts=state.products.map(function(products){
      //     return {
      //       name:'*'+products.name+"*",
      //       price:products.price/2
      //     }
      //   });
      //   return saleProducts

      // }
     
    },

    mutations:{
     
      reducePrice:(state,payload)=>{
          
          state.products.forEach(product=>{
              product.price -=payload;
            })
        
      }
    },

    actions:{
      reducePrice:(context,payload)=>{
        setTimeout(() => {
          context.commit('reducePrice',payload)
        }, 3000);
      }
    }

  })
 
 

 
   

