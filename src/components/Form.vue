

<script>
export default {
  methods: {
    showLinks(url) {
      if (url === undefined) {
        this.$store.dispatch("setError", "Empty error");
      } else if (
        !url.match(
          /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
        )
      ) {
        this.$store.dispatch("setError", "Invalid url");
      } else {
        ///
        this.$store.dispatch("setError", "");
        this.$store.dispatch("getUrls", url);
      }
    },
  },
};
</script>

<template>
  <!-- url link -->
  <div class="container bg-zinc-200 max-w-full font-['Poppins']">
    <div class="container mx-auto w-11/12">
      <div
        class="
          transform
          -translate-y-14
          w-full
          bg-cover bg-no-repeat bg-shorten-desktop bg-very-dark-violet
          p-8
          rounded-lg
        "
      >
        <form
          @submit.prevent="showLinks(url)"
          class="flex w-full align-middle justify-center flex-row"
        >
          <input
            class="bg-white w-10/12 rounded-lg pl-5"
            placeholder="Shorten a link here... "
            type="url"
            v-model="url"
          />

          <div class="pl-5">
            <button
              @click="[(isActive = !isActive)]"
              class="
                w-32
                text-zinc-200
                hover:text-zinc-300
                text-md
                bg-Cyan
                rounded-md
                p-3
                hover:bg-cyan-500
              "
              :class="[isActive ? 'bg-Cyan' : 'bg-cyan-300']"
              type="submit"
            >
              {{ isActive ? "Shorten it" : "Shorten  it " }}
            </button>
          </div>
        </form>
        <!-- url link error message -->
        <div>
          <h1 class="text-red-500 ml-14 italic">
            {{ $store.state.error }}
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>