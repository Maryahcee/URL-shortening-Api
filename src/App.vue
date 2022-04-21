<script>
/* Import Components */
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import Resources from './views/Resources.vue'
import Form from './components/Form.vue'
import Main from './components/Main.vue'
import ShowCase from './components/ShowCase.vue'
import Boost from './components/Boost.vue'
import Footer from './components/Footer.vue'
import LinkResults from './components/LinkResults.vue'

export default {
  name: 'App',
  components: {
    RouterLink,
    Navbar,
    Resources,
    Form,
    Main,
    ShowCase,
    Boost,
    Footer,
    LinkResults
},
 
}

</script>

<template>
  <div class="container flex flex-col max-w-full pt-10">
    <Navbar />
    <Main />
    <Form  />
    <LinkResults />
    <ShowCase />
    <Boost class=" max-w-full" />
    <Footer/>
    <RouterView />
  </div>
</template>