<script setup lang="ts">
import gameChannelNavigationListCollection from "~/assets/gameChannelNavigationListCollection.json"
</script>
<template>
  <div class="w-[200px] overflow-auto bg-[#0C0D14] h-[calc(100vh-70px)] fixed top-[70px] left-0">
    <ul>
      <li v-for="item in gameChannelNavigationListCollection" :key="item.label">
        <nuxt-link :to="item.label.toLowerCase().replace(' ', '-')" class="nav-link flex items-center p-4 gap-2">
          <img :src="item.img" alt=""> <span class="text-white text-sm">{{ item.label }}</span>
        </nuxt-link>
      </li>
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
      color: #999;
    }
  }
}
</style>
