<template>
  <div class="logo-box text-center">
    <transition name="fade">
      <router-link to="/" v-if="collapse" class="logo-link" key="collapse">
        <img v-if="collapse" :src="imgUrl" class="logo-img ml-4" alt="logo">
        <h1 v-else class="title mr-4 text-amber-50"></h1>
      </router-link>
      <router-link to="/" v-else class="logo-link" key="expand">
        <img :src="imgUrl" class="logo-img ml-4" alt="logo">
        <h1 class="title mr-4 text-amber-50">{{ title }}</h1>
      </router-link>
    </transition>
  </div>
</template>

<script setup lang="ts">
import setting from "@/setting";

defineProps({
  collapse: {
    type: Boolean,
    required: true
  }
})

const imgUrl = new URL('/src/assets/logo.png', import.meta.url).href
const title = setting.title

</script>

<style lang="less" scoped>
@import url('@/styles/variables.module.less');

.logo-box {
  height: @headerHeight;
  overflow: hidden;
  background-color: #1e272c;

  .logo-link {
    display: inline-block;
    height: 100%;
    width: 100%;
    line-height: 50px;

    .logo-img {
      display: inline-block;
      height: 30px;
      width: 28px;
      margin-right: 12px;
    }

    .title {
      line-height: @headerHeight;
      display: inline-block;
      font-size: 20px;
    }
  }

}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>