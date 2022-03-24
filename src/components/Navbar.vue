<script>

</script>

<template>
  <header>
      <div class=" max-w-full ml-20 font-['Poppins'] weight-medium text-grayish-violet flex  pb-5">
        <div class=" pr-8">
           <img class="w-32 " src="../assets/images/logo.svg" alt="logo">
        </div>
       <div class="w-full flex ">
          <nav class=" w-full ">
          <RouterLink class="p-3 hover:text-very-dark-violet" to='/'>Features</RouterLink>
          <RouterLink class="p-3 hover:text-very-dark-violet" to= '/pricing' >Pricing</RouterLink>
          <RouterLink class="p-3 hover:text-very-dark-violet" to= '/resources' >Resources</RouterLink>

            <div class=" float-right">
            <span class=" pr-10">Login</span>
            <button class="text-zinc-100 text-md px-6 py-3 bg-cyan rounded-3xl">Sign Up</button>
       </div>
        </nav>
       </div>
      </div>
  </header>
</template>



