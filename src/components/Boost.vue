<template>
  <div class="card max-w-full hidden md:grid">
    <div
      class="
        p-10
        max-w-full
        flex flex-col
        items-center
        justify-center
        bg-shorten-desktop bg-no-repeat bg-cover bg-dark-violet
        font-['Poppins']
      "
    >
      <h3 class="text-zinc-200 text-center text-4xl font-extrabold pb-5">
        Boost your links today
      </h3>
      <button
        class="
          bg-Cyan
          text-zinc-200 text-2xl
          font-semibold
          rounded-full
          py-3
          px-6
        "
      >
        Get Started
      </button>
    </div>
  </div>
  <!--Mobile Boost Section-->
  <div
    class="
      md:hidden
      flex flex-col
      bg-shorten-desktop bg-no-repeat bg-cover bg-dark-violet
      w-full
    "
  >
    <h3
      class="text-zinc-200 text-center text-4xl font-extrabold pb-5 mb-5 mt-8"
    >
      Boost your links today
    </h3>
    <div class="flex justify-center">
      <button
        class="
          bg-Cyan
          hover:bg-cyan-500
          text-zinc-200 text-2xl
          font-semibold
          rounded-full
          py-3
          px-6
          mb-8
        "
      >
        Get Started
      </button>
    </div>
  </div>
</template>


