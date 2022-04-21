<script>

</script>

<template>
  <header class=" font-['Poppins'] text-grayish-violet pb-10 flex items-center mx-auto w-3/4">
    <div class="container w-full inline-flex ">
      <div class=" pr-8">
        <img class="w-32 " src="../assets/images/logo.svg" alt="logo">
      </div>
      <div class=" flex w-full ">
        <nav class="w-full ">
          <RouterLink class="p-3 hover:text-very-dark-violet" to='/'>Features</RouterLink>
          <RouterLink class="p-3 hover:text-very-dark-violet" to= '/pricing' >Pricing</RouterLink>
          <RouterLink class="p-3 hover:text-very-dark-violet" to= '/resources' >Resources</RouterLink>

         <div class=" flex flex-row card w-1/2 float-right align-middle  justify-center items-center pb-10">
            <span class=" pr-5  ">Login</span>
            <button class="text-zinc-100 text-md px-6 py-3 bg-Cyan rounded-3xl">Sign Up</button>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>



