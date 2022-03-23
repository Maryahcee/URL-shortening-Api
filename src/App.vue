<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import Resources from './views/Resources.vue'
import Form from './components/Form.vue'
import Main from './components/Main.vue'

export default {
  name: 'App',
  components: {
    RouterLink,
    Navbar,
    Resources,
    Form,
    Main
}
}

</script>

<template>
  <Navbar />
  <Main />
  <Form />
  <RouterView />
</template>


