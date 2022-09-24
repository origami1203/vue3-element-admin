<template>
  <aside class="sidebar-container flex-shrink-0 box-border h-full flex flex-col">
    <Logo v-if="showLogo" :collapse="collapse"/>
    <Menu :collapse="collapse"/>
  </aside>
</template>

<script setup lang="ts">
import Logo from "@/layout/components/Sidebar/Logo.vue";
import Menu from "@/layout/components/Sidebar/Menu.vue";
import useStore from "@/stores";
import {storeToRefs} from "pinia";

const {app} = useStore();
const {collapse, showLogo} = storeToRefs(app);
</script>

<style lang="less" scoped>
@import url('@/styles/variables.module.less');

.sidebar-container {
  background-color: @sideBarColor;
  // ease-in-out,与element-plus的菜单折叠动画horizontal-collapse-transition一致,防止动画不同,重影
  transition: .3s width ease-in-out;

  &.collapse {
    width: @collapseWidth;
  }

  &.not-collapse {
    width: @sideBarWidth;
  }
}
</style>
