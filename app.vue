<template>
  <div>

    <Head>
      <title>Online Game</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description"
        content="Welcome to our online game platform, the ultimate destination for gamers of all ages. Dive into a world of thrilling adventures, strategic challenges, and endless entertainment. Play action-packed shooters, immersive RPGs, mind-bending puzzles, and classic arcade games. Compete with players globally, climb leaderboards, and earn rewards. Play instantly on any device. Join our vibrant gaming community now!">
      <meta name="keywords"
        content="online games, free online games, play online games, multiplayer games, action games, adventure games, RPG games, puzzle games, arcade games, strategy games, instant play games, browser games, no download games, gaming community, competitive gaming, game leaderboards, new online games, top online games, popular online games, online gaming platform">
      <link rel="icon" type="image/x-icon" href="favicon.svg" />
    </Head>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">

</script>
<style>
/* 滚动条整体样式 */
::-webkit-scrollbar {
  width: 7px;
}

/* 滚动条轨道 */
::-webkit-scrollbar-track {
  background: #0C0D14;
  /* 轨道背景色 */
  border-radius: 10px;
  /* 圆角 */
}

/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  background: #999;
  /* 滑块颜色 */
  border-radius: 10px;
  /* 圆角 */
}

/* 滑块悬停状态 */
::-webkit-scrollbar-thumb:hover {
  background: #555;
  /* 悬停时滑块颜色 */
}
</style>
