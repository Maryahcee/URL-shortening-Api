<script setup>
import { computed, ref } from "vue";
import store from "../store";

const short = computed(() => {
  return store.state.links;
});

const props = defineProps({
  shorterLink: {
    type: String,
    isActive: true,
  },
});

const copyShort = ref("Copy");
const onCopied = ref("[bg-cyan-400]");

const copyLink = async () => {
  copyShort.value = "Copied!";
  onCopied.value = "bg-red-400";

  await setTimeout(() => {
    copyShort.value = "Copy";
    onCopied.value = "bg-cyan-400";
  }, 2500);

  navigator.clipboard.writeText(props.shorterLink);
  console.log(props.shorterLink);
};
</script>
<template>
  <!-- url results link -->
  <div
    v-for="link in $store.state.links"
    :key="link"
    class="container max-w-full bg-zinc-200"
  >
    <p>{{ $store.state.links.errors }}</p>
    <div
      class="
        flex
        rounded-lg
        flex-row
        bg-zinc-200
        mx-auto
        items-center
        align-middle
        justify-center
        md:w-11/12
        w-full
        mb-3
      "
    >
      <div
        class="p-3 rounded-md grid grid-cols-3 gap-1 bg-white w-full ml-5 mr-5"
      >
        <div class="flex items-center rounded-md">
          <a
            type="text"
            class="
              p-3
              rounded-lg
              flex
              justify-center
              items-center
              text-very-dark-violet
              overflow-hidden
            "
          >
            {{ link.rawLink }}
          </a>
        </div>
        <div class="flex items-center justify-center">
          <a
            target="blank"
            :href="(shorterLink = link.shortLink)"
            rel="noreferrer noopener"
            class="
              p-3
              overflow-hidden
              flex
              text-center
              justify-center
              outline-none
              rounded-lg
              ml-5
            "
            >{{ shorterLink }}</a
          >
        </div>
        <div class="rounded-lg mx-3 flex justify-end items-center">
          <button
            :class="[onCopied, copyShort]"
            @click="copyLink"
            class="
              text-zinc-200
              rounded-lg
              float-right
              bg-Cyan
              w-28
              font-['Poppins']
              p-3
              text-md
            "
          >
            {{ copyShort }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>



