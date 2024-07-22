<script setup lang="ts">
import gameChannelNavigationListCollection from "~/assets/gameChannelNavigationListCollection.json"
const route = useRoute()
function formatConversion(str: string): string {
  return str.toLowerCase().replace(' ', '-')
}
</script>
<template>
  <div class="w-[200px] overflow-auto bg-[#0C0D14] h-[calc(100vh-80px)] fixed top-[80px] left-0">
    <ul class="text-white text-sm flex flex-col gap-4">
      <li v-for="item in gameChannelNavigationListCollection" :key="item.label">
        <nuxt-link :to="formatConversion(item.label)" class="nav-link flex items-center px-4 gap-2 "
          :style="{ color: formatConversion(item.label) === route.path.slice(1) ? '#A48EFF' : '' }">
          <img :src="item.img" alt=""> <span class="" style="">{{ item.label }}</span>
        </nuxt-link>
      </li>
      <div class="pl-4 flex flex-col gap-2 pb-5">
        <li>
        <nuxt-link to="/AboutUs">About Us</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/PrivacyPolicy">Privacy Policy</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/TermsofUse">Terms of Use</nuxt-link>
      </li>
      <li>
        Copyright 2019 - 2024, jiafeng.online
      </li>
      </div>
    </ul>
  </div>
</template>
<style>
.nav-link {
  span {
    transition: all 0.3s;
  }

  &:hover {
    span {
      padding-left: 20px;
      transition: all 0.3s;
      color: #A48EFF;
    }
  }
}
</style>
