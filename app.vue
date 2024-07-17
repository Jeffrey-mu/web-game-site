<template>
  <div>

    <Head>
      <title>Online Game</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Experience the thrill of Drift Zero, the best free online drifting game. Play now and master your drifting skills. No download required!">
      <meta name="keywords" content="online game, Drift Zero, free online games, drifting game, play online, no download">
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
