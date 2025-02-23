<script setup>
import { computed, ref } from "vue";
import store from "../store";

const short = computed(() => store.state.links);

const copyShort = ref("Copy");
const onCopied = ref("bg-cyan-400");

const copyLink = (link) => {
  if (!link) {
    alert("No link to copy!");
    return;
  }

  copyShort.value = "Copied!";
  onCopied.value = "bg-red-400";

  setTimeout(() => {
    copyShort.value = "Copy";
    onCopied.value = "bg-cyan-400";
  }, 2500);

  navigator.clipboard.writeText(link);
};
</script>

<template>
  <!-- url results link -->
  <div
    v-for="(link, index) in short"
    :key="index"
    class="container max-w-full bg-zinc-200"
  >
    <p>{{ $store.state.links.errors }}</p>
    <div
      class="flex rounded-lg flex-row bg-zinc-200 mx-auto items-center align-middle justify-center md:w-11/12 w-full mb-3"
    >
      <div
        class="p-3 rounded-md grid grid-cols-3 gap-1 bg-white w-full ml-5 mr-5"
      >
        <div class="flex items-center rounded-md">
          <a
            type="text"
            class="p-3 rounded-lg flex justify-center items-center text-very-dark-violet overflow-hidden"
          >
            {{ link.rawLink }}
          </a>
        </div>
        <div class="flex items-center justify-center">
          <a
            target="blank"
            :href="link.shortLink"
            rel="noreferrer noopener"
            class="p-3 overflow-hidden flex text-center justify-center outline-none rounded-lg ml-5"
            >{{ link.shorterLink || "Generating..." }}</a
          >
        </div>
        <div class="rounded-lg mx-3 flex justify-end items-center">
          <button
            :class="[onCopied, copyShort]"
            @click="copyLink(link.shortLink)"
            class="text-zinc-200 rounded-lg float-right bg-Cyan w-28 font-['Poppins'] p-3 text-md"
          >
            {{ copyShort }}
          </button>
        </div>
      </div>
    </div>
  </div>
  <!--Mobile link Results-->
</template>



