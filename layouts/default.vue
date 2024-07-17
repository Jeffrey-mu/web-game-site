<template>
  <div class="absolute inset-0 -z-10 size-full h-fit items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] min-h-full">
    <Header />
    <div class="flex mt-[70px]">
      <SideBar />
      <div class="flex-1 ml-[200px]">
        <slot />
      </div>
    </div>
  </div>
</template>
