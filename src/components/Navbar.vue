<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleNav: function () {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<template>
  <header
    class="
      hidden
      font-['Poppins']
      text-grayish-violet
      pb-10
      md:flex
      items-center
      mx-auto
      w-11/12
    "
  >
    <div class="container w-full inline-flex ml-5">
      <div class="pr-8 hidden md:grid">
        <img class="w-32" src="../assets/images/logo.svg" alt="logo" />
      </div>
      <div class="flex w-full">
        <nav class="w-full text-lg">
          <RouterLink class="p-3 hover:text-very-dark-violet" to="/"
            >Features</RouterLink
          >
          <RouterLink class="p-3 hover:text-very-dark-violet" to="/pricing"
            >Pricing</RouterLink
          >
          <RouterLink class="p-3 hover:text-very-dark-violet" to="/resources"
            >Resources</RouterLink
          >

          <div
            class="
              flex flex-row
              card
              w-1/2
              float-right
              align-middle
              justify-end
              items-center
              pb-10
            "
          >
            <span class="pr-5">Login</span>
            <button class="text-zinc-100 text-md px-6 py-2 bg-Cyan rounded-3xl">
              Sign Up
            </button>
          </div>
        </nav>
      </div>
    </div>
  </header>
  <!--Mobile Version NavBar-->
  <div @click="toggleNav" class="md:hidden -mt-5 max-w-full">
    <div class="flex justify-center items-center w-full pl-2">
      <div class="flex justify-start w-full">
        <img class="w-36" src="../assets/images/logo.svg" alt="" />
      </div>
      <div class="flex flex-row justify-end items-center mr-5">
        <button
          type="button"
          class="
            text-gray-800
            hover:text-gray-400
            focus:outline-none focus:text-gray-400
            flex
            justify-end
          "
          aria-label="toggle menu"
        >
          <svg viewBox="0 0 24 24" class="w-8 h-8 fill-current">
            <path
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            ></path>
          </svg>
        </button>
        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <div class="relative mb-2 flex">
          <ul
            :class="showMenu ? 'flex' : 'hidden'"
            class="
              flex-col
              space-y-2
              flex
              absolute
              top-5
              right-1
              bg-dark-violet
              w-96
              items-center
              rounded-lg
              text-white text-lg
              p-5
            "
          >
            <li class="text-gray-100 hover:text-indigo-400">Features</li>
            <li class="text-gray-100 hover:text-indigo-400">Pricing</li>
            <li class="text-gray-100 hover:text-indigo-400">Resources</li>
            <hr class="divide-slate-700 w-11/12" />
            <p class="text-xl font-bold hover:text-indigo-400">Login</p>
            <button
              class="
                bg-Cyan
                rounded-lg
                p-2
                w-3/4
                text-xl
                font-bold
                hover:bg-cyan-300
              "
            >
              Sign Up
            </button>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>



