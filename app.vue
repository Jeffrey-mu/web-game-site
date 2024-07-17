<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style>
/* 滚动条整体样式 */
::-webkit-scrollbar {
  width: 7px;
}

/* 滚动条轨道 */
::-webkit-scrollbar-track {
  background: #0C0D14; /* 轨道背景色 */
  border-radius: 10px; /* 圆角 */
}

/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  background: #999; /* 滑块颜色 */
  border-radius: 10px; /* 圆角 */
}

/* 滑块悬停状态 */
::-webkit-scrollbar-thumb:hover {
  background: #555; /* 悬停时滑块颜色 */
}
</style>
