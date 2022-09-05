<script>
export default {};
</script>

<template>
  <!--Section One-->
  <div class="container mx-auto w-11/12 hidden md:flex overflow-hidden">
    <div class="flex flex-row">
      <div class="font-['Poppins'] w-full">
        <h1
          class="pb-2 font-black leading-normal text-6xl text-very-dark-violet"
        >
          More than just <br />
          shorter links
        </h1>
        <p class="pb-8 text-lg text-grayish-violet">
          Build your brand's recognition and get detailed <br />
          insights on how your links are performing.
        </p>
        <button
          class="bg-Cyan px-6 py-4 rounded-full text-white text-xl font-bold"
        >
          <span class="p-4"> Get Started</span>
        </button>
      </div>
      <!--Illustration-Woman-Working-->
      <div class="container flex mx-auto align-middle items-center justify-end">
        <div class="pb-20 scale-100 max-w-full">
          <img
            class="ml-20"
            src="../assets/images/illustration-working.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
  <!--Mobile Version Main body-->
  <div class="max-w-full flex flex-col md:hidden">
    <div class="flex md:hidden items-center justify-center w-full">
      <img
        class="ml-40 w-11/12"
        src="../assets/images/illustration-working.svg"
        alt=""
      />
    </div>
    <div class="font-['Poppins'] w-full mt-5">
      <h1
        class="
          pb-2
          text-4xl text-very-dark-violet
          flex
          justify-center
          font-extrabold
        "
      >
        More than just <br />
        shorter links
      </h1>
      <p class="text-lg text-grayish-violet text-center m-5">
        Build your brand's recognition and get detailed <br />
        insights on how your links are performing.
      </p>
      <div class="flex justify-center items-center">
        <button
          class="
            bg-Cyan
            hover:bg-cyan-500
            px-6
            rounded-full
            text-white text-xl
            font-bold
            flex
            justify-center
            items-center
          "
        >
          <span class="p-4"> Get Started</span>
        </button>
      </div>
    </div>
  </div>
</template>