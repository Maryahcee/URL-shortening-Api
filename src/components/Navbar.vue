<script>

</script>

<template>
  <header>
      <div class=" font-['Poppins'] weight-medium text-grayish-violet flex p-10">
        <div class="">
           <img class="" src="../assets/images/logo.svg" alt="logo">
        </div>
        <nav class="">
          <RouterLink class="p-3 hover:text-very-dark-violet" to='/'>Features</RouterLink>
          <RouterLink class="p-3 hover:text-very-dark-violet" to= '/pricing' >Pricing</RouterLink>
          <RouterLink class="p-3 hover:text-very-dark-violet" to= '/resources' >Resources</RouterLink>
        </nav>
        <div class="pl-60 flex flex-row items-center">
            <span class="pr-6">Login</span>
            <button class="text-zinc-100 text-md px-4 py-2 bg-cyan rounded-3xl">Sign Up</button>
          </div>
      </div>
  </header>
</template>



