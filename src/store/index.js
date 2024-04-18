import { createStore } from 'vuex'
import axios from 'axios'
import serviceUrl from '../service/index'

const store = createStore({
    state: {
        
        links:[],
        error: "",
        btnResults: [
            {
            change:"Copied"
        }],
        isActive: true,
    },
    mutations: {  
        setUrls(state, payload) { 
            let newlinks = state.links
            state.links =  newlinks.concat(payload)

        },
        addError(state, payload) {
            state.error = payload
        }

    },
    getters: {
        links: state => {
            return state.links;
        },
        error: state => {
            return state.error;
        }

    },
    actions: {
        
        async getUrls({ commit }, ourLink)
         { 
             try{
                 let response = await axios.post(serviceUrl, {
                             
                            
                     url: ourLink
                             
                 }
                            
             )
             let storeData = [
                 {
                     rawLink:ourLink,
                     shortLink:response.data.result_url
                }
            ]
             commit('setUrls', storeData)
         } catch(error){
             commit('setUrls', [])
         }},
         setError({commit}, errorMessage) {
            commit('addError', errorMessage)
          }
    },


})



//export store
export default store