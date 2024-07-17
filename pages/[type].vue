<script setup lang="ts">
import gameList from "~/assets/gameList.json"

const route = useRoute()
const type = route.params.type as string
const randerGameList = groupGamesByType(gameList)[type]
const video = ref("")
</script>
<template>
  <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 p-6">
    <li class="bg-gray-800 rounded-lg game-card cursor-pointer relative overflow-hidden" v-for="item in randerGameList"
      :key="item.gameThumbImage" @mousemove="video = item.video" @mouseleave="video = ''">
      <nuxt-link :to="'/play-' + item.gameThumbTitleContainer.toLowerCase().replace(/ /g, '-').replace(':', '')"
        class="flex items-center p-1 gap-1 flex-col">
        <video class="rounded-lg" width="100%" autoplay="true" loop="true" muted="true" v-if="video === item.video">
          <source :src="video" type="video/mp4">
          </source>
        </video>
        <img class="rounded-lg h-full" :src="item.gameThumbImage" alt="">
        <span class="text-white line-clamp-1 text-sm absolute bottom-2 left-2 w-full">{{ item.gameThumbTitleContainer
          }}</span>
      </nuxt-link>
    </li>
  </ul>
</template>
<style>
.game-card {

  span,
  video {
    display: none;
  }

  &:hover {

    span,
    video {
      display: block;
    }

    img {
      display: none;
    }
  }
}
</style>
