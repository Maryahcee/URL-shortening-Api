<script>
import VueClipboard from 'vue-clipboard2'
export default {
    data() {
        return {
            isActive: true,
            url: 'done'
        }
    },
    methods: {
        copy() {
              document.execCommand('copy');
        }
    } 

  }

</script>
<template>
    <!-- url results link -->
    <div v-for="link in $store.state.links" :key="link" 
            >
            <p>{{ $store.state.links.errors }}</p>
           <div class="flex  rounded-lg flex-row bg-zinc-200 mx-auto items-center align-middle  justify-center w-full">
                <div class="p-3 rounded-md grid grid-cols-3 gap-1 bg-white w-3/4 m-2">
                        <div class="">
                            <span  class= "p-3 flex justify-center text-very-dark-violet">{{ link.rawLink }}</span>
                        </div>
                        <div class="">
                            <span  class="p-3 flex text-center justify-center outline-none ">
                            {{ link.shortLink }} </span>
                        </div>
                        <div class="rounded-lg mx-3"> 
                            <button   class="text-zinc-200 rounded-lg float-right bg-Cyan w-24 font-['Poppins'] p-3 text-md"
                             :class="[isActive ? 'bg-Cyan' : 'bg-zinc-900']"
                              @click="[isActive = !isActive, copy]"
                              >
                              {{ isActive ? 'Copy' : 'Copied' }}</button>
                        </div>
                </div>
                
           </div>
    </div>
</template>



