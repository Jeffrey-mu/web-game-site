<script setup lang="ts">
import gameChannelNavigationListCollection from "~/assets/gameChannelNavigationListCollection.json"
const route = useRoute()
function formatConversion(str: string): string {
  return str.toLowerCase().replace(' ', '-')
}
</script>
<template>

  <header class='flex bg-slate-900 text-white font-sans min-h-[70px] tracking-wide z-50 fixed top-0 left-0 right-0'>
    <div class='flex flex-wrap items-center justify-between px-10 py-3 gap-4 w-full'>
      <nuxt-link to="/" class="font-bold text-2xl flex gap-2 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#b9fb01" d="M2 4.233L4.213 2L8 5.827l.013-.007l2.207 2.233v.014L8.013 10.3L8 10.293L4.213 14.12L2 11.887L5.793 8.06zm20 7.88L19.787 9.88L16 13.707l-.013-.007l-2.207 2.233v.014l2.207 2.233l.013-.007L19.787 22L22 19.767l-3.793-3.827zm-8 7.654L11.8 22L8 18.173L4.213 22L2 19.767l3.793-3.827l-.013-.007L8 13.7l.007.007l.013-.007l2.207 2.233v.007zM19.553 2l2.214 2.233L17.98 8.06l.007.007l-2.214 2.233l-.006-.007l-.014.007l-2.206-2.233l.006-.007L9.76 4.233L11.967 2l3.793 3.827L19.547 2z"/></svg>  Online Game
      </nuxt-link>


      <div id="collapseMenu"
        class='max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
        <button id="toggleClose" class='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 fill-black" viewBox="0 0 320.591 320.591">
            <path
              d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
              data-original="#000000"></path>
            <path
              d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
              data-original="#000000"></path>
          </svg>
        </button>

        <ul
          class='lg:flex lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
          <li class='mb-6 hidden max-lg:block'>
            <a href="javascript:void(0)"><img src="https://readymadeui.online/readymadeui.svg" alt="logo" class='w-36' />
            </a>
          </li>
          <li v-for="item in gameChannelNavigationListCollection.slice(0, 6)" :key="item.label">
            <nuxt-link :to="formatConversion(item.label)" class="flex items-center p-4 gap-2 text-white hover:text-blue-600 text-[15px] font-bold"
              :style="{ color: formatConversion(item.label) === route.path.slice(1) ? '#A48EFF' : '' }">
              <img :src="item.img" alt=""> <span class="text-sm" style="">{{ item.label }}</span>
            </nuxt-link>
          </li>
        </ul>
      </div>

      <nuxt-link to="/like" class='flex items-center space-x-8 max-lg:ml-auto'>
        <span class="relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="20px"
            class="cursor-pointer fill-[#fff] hover:fill-[#007bff] inline" viewBox="0 0 64 64">
            <path
              d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
              data-original="#000000" />
          </svg>
          <span class="absolute left-auto -ml-1 top-0 rounded-full bg-black px-1 py-0 text-xs text-white">0</span>
        </span>


        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="20px"
          class="cursor-pointer fill-[#fff] hover:fill-[#007bff]">
          <path
            d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
          </path>
        </svg>

        <button id="toggleOpen" class='lg:hidden'>
          <svg class="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
      </nuxt-link to="/like">
    </div>
  </header>
</template>
