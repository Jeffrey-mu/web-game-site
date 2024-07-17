<script setup lang="ts">
import gameChannelNavigationListCollection from "~/assets/gameChannelNavigationListCollection.json"
const route = useRoute()
function formatConversion(str: string): string {
  return str.toLowerCase().replace(' ', '-')
}
</script>
<template>
  <div class="w-[200px] overflow-auto bg-[#0C0D14] h-[calc(100vh-70px)] fixed top-[70px] left-0">
    <ul>
      <li v-for="item in gameChannelNavigationListCollection" :key="item.label">
        <nuxt-link :to="formatConversion(item.label)" class="nav-link flex items-center p-4 gap-2 text-white" 
        :style="{color: formatConversion(item.label) === route.path.slice(1) ? '#A48EFF' : ''}">
          <img :src="item.img" alt=""> <span class="text-sm" style="">{{ item.label }}</span>
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
      color: #A48EFF;
    }
  }
}
</style>
