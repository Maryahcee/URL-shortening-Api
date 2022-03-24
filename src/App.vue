<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import Resources from './views/Resources.vue'
import Form from './components/Form.vue'
import Main from './components/Main.vue'
import ShowCase from './components/ShowCase.vue'
import Boost from './components/Boost.vue'
import Footer from './components/Footer.vue'

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
    Footer
}
}

</script>

<template>
 <div class="container flex flex-col max-w-full  pt-10">
    <Navbar />
    <Main />
    <div class=" ml-20 ">
      <Form />
    </div>
    <div class=" max-w-full">
      <ShowCase />
    </div>
    <Boost class=" max-w-full" />
    <Footer/>
    <RouterView />
 </div>
</template>


