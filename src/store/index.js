import { createStore } from 'vuex'
import axios from 'axios'
import serviceUrl from '../service/index'

const store = createStore({
    state: {
        
        links:[
            
        ],
        error: "",
            
        btnResults: [
            {
            change:"Copied"
        }
    ]
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
                    let response = await axios.get(serviceUrl, {
                             params:
                            {
                                 url:ourLink
                             }
            
                            }
                            
             )
             let storeData = [
                 {
                     rawLink:response.data.result.original_link,
                     shortLink:response.data.result.short_link
                }
            ]
             commit('setUrls', storeData)
         } catch(error){
             commit('setUrls', [

           ])
         }},
         setError({commit}, errorMessage) {
            commit('addError', errorMessage)
          }
         
    },


})



//export store
export default store