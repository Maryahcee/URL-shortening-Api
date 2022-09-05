<template>
  <!--footer container-->
  <footer
    class="
      bg-very-dark-blue
      text-white
      font-['Poppins']
      container
      hidden
      md:flex
      items-center
      justify-center
      pt-10
      max-w-full
    "
  >
    <div>
      <div class="card max-w-full flex flex-row">
        <!--footer logo-->
        <div class="card flex mx-auto w-full">
          <img
            class="bg-white w-15 h-10"
            src="../assets/images/logo.svg"
            alt=""
          />
        </div>
        <!--Features List-->
        <div class="flex flex-row mx-auto">
          <div class="card mt-0 m-10">
            <h1 class="pb-3 font-extrabold text-lg">Features</h1>
            <ul class="text-gray text-normal text-md">
              <li class="hover:text-Cyan">Link Shortening</li>
              <li class="hover:text-Cyan">Branded Links</li>
              <li class="hover:text-Cyan">Analytics</li>
            </ul>
          </div>
          <!--Resources List-->
          <div class="card mt-0 m-10">
            <h1 class="pb-3 font-extrabold text-lg">Resources</h1>
            <ul class="text-gray text-normal text-md">
              <li class="hover:text-Cyan">Blog</li>
              <li class="hover:text-Cyan">Developers</li>
              <li class="hover:text-Cyan">Support</li>
            </ul>
          </div>
          <!--Resources List-->
          <div class="card mt-0 m-10">
            <h1 class="pb-3 font-extrabold text-lg">Company</h1>
            <ul class="text-gray text-normal text-md">
              <li class="hover:text-Cyan">About</li>
              <li class="hover:text-Cyan">Our Team</li>
              <li class="hover:text-Cyan">Careers</li>
            </ul>
          </div>
          <!-- Interactive social Media icons-->
          <div class="card mt-0 m-10 flex flex-row">
            <div class="mx-auto">
              <div
                class="
                  flex flex-row
                  mx-auto
                  items-center
                  justify-center
                  align-middle
                  pl-5
                "
              >
                <img
                  class="hover:bg-Cyan pl-10"
                  src="../assets/images/icon-facebook.svg"
                  alt="Facebook"
                />
                <img
                  class="hover:bg-Cyan pl-5"
                  src="../assets/images/icon-twitter.svg"
                  alt="twitter"
                />
                <img
                  class="hover:bg-Cyan pl-5"
                  src="../assets/images/icon-pinterest.svg"
                  alt="pinterest"
                />
                <img
                  class="hover:bg-Cyan pl-5"
                  src="../assets/images/icon-instagram.svg"
                  alt="instagram"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ml-80">
        Challenge by
        <a
          class="text-cyan-300"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          >Frontend Mentor</a
        >. Coded by <a class="text-cyan-300" href="#"> Mary Njoroge</a>.
      </div>
    </div>
  </footer>
  <!--Mobile Footer-->
  <div class="bg-very-dark-blue text-white">
    <!--Mobile footer logo-->
    <div class="card flex justify-center mt-8 w-full">
      <h1 class="text-white font-extrabold text-4xl">Shortly</h1>
    </div>

    <!--Mobile Features List-->
    <div class="md:hidden flex flex-col justify-center items-center mx-auto">
      <div class="mt-10 m-5">
        <h1 class="pb-3 font-extrabold text-lg text-center">Features</h1>
        <ul
          class="
            text-gray text-normal text-md
            justify-center
            items-center
            flex flex-col
          "
        >
          <li class="hover:text-Cyan">Link Shortening</li>
          <li class="hover:text-Cyan">Branded Links</li>
          <li class="hover:text-Cyan">Analytics</li>
        </ul>
      </div>
      <!--Mobile Resources List-->
      <div class="mt-0 m-5">
        <h1 class="pb-3 font-extrabold text-lg text-center">Resources</h1>
        <ul
          class="
            text-gray text-normal text-md
            justify-center
            items-center
            flex flex-col
          "
        >
          <li class="hover:text-Cyan">Blog</li>
          <li class="hover:text-Cyan">Developers</li>
          <li class="hover:text-Cyan">Support</li>
        </ul>
      </div>
      <!--Mobile Resources List-->
      <div class="mt-0 m-5">
        <h1 class="pb-3 font-extrabold text-lg text-center">Company</h1>
        <ul
          class="
            text-gray text-normal text-md
            justify-center
            items-center
            flex flex-col
          "
        >
          <li class="hover:text-Cyan">About</li>
          <li class="hover:text-Cyan">Our Team</li>
          <li class="hover:text-Cyan">Careers</li>
        </ul>
      </div>
      <!--Mobile Interactive social Media icons-->
      <div class="flex flex-row mx-auto justify-center items-center mb-5">
        <img
          class="items-center"
          src="../assets/images/icon-facebook.svg"
          alt="Facebook"
        />
        <img
          class="pl-5"
          src="../assets/images/icon-twitter.svg"
          alt="twitter"
        />
        <img
          class="pl-5"
          src="../assets/images/icon-pinterest.svg"
          alt="pinterest"
        />
        <img
          class="pl-5"
          src="../assets/images/icon-instagram.svg"
          alt="instagram"
        />
      </div>
    </div>
  </div>
</template>

