import { createStore } from 'vuex'
import Filter from "./filter"
const store = createStore({
  state(){
    return {
        필터들 : Filter,
        select : ""
    }
  },
    mutations: {
      choice(state,payload){
       if(payload == ""){
         state.select = ""
       } else {
         state.select = payload
       }
  }
 }
})

export default store