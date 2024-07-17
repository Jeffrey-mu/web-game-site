<script setup lang="ts">

const route = useRoute()
const paly = route.params.paly as string
</script>
<template>
  <div class="m-auto mt-3 w-1/2 h-[60vh]" style=" min-width: 922px; min-height: 532px;">
    <iframe :src="`https://www.crazygames.com/embed/${paly}`" style="width: 100%; height: 100%;" frameborder="0"
      allow="gamepad *;"></iframe>
  </div class="m-auto">
</template>
<style>
</style>
