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
            state.links = [...state.links, ...payload];

        },
        addError(state, payload) {
            state.error = payload;
        },
        setActive(state, payload) {
            state.isActive = payload;
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
                console.time("API Request");

                 let response = await axios.post(serviceUrl, {url: ourLink});
                 
                 console.timeEnd("API Request");

             if (response.data && response.data.result_url) {
                let storeData = [
                    {
                        rawLink:ourLink,
                        shortLink:response.data.result_url
                   }
             }
            ];
             commit('setUrls', storeData)
             commit("setActive", true)
         } else {
            throw new Error("Invalid API Response"); 
         }
          catch(error){
             console.error("Error shortening URL:", error);
             commit('setError', "Failed to shorten URL")
             commit("setActive", false)
         }},
         setError({commit}, errorMessage) {
            commit('addError', errorMessage)
          }
    },
})



//export store
export default store