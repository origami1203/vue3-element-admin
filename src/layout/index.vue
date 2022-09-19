<template>
  <div class="layout-container flex h-screen w-full">
    <!--侧边栏-->
    <SideBar class="sidebar-container h-full flex flex-col" :class="collapse? 'collapse':'not-collapse'"/>

    <div class="main-container w-full" :class="collapse? 'collapse':'not-collapse'">

      <!--header-->
      <div class="header-container flex shadow-md">
        <Header/>
      </div>

      <!--内容主体-->
      <ContentBody/>

    </div>
  </div>
</template>

<script lang="ts" setup>
import Header from "@/layout/components/Header/index.vue";
import SideBar from "@/layout/components/Sidebar/index.vue";
import ContentBody from "@/layout/components/ContentBody/index.vue";

import useStore from "@/stores";
import {storeToRefs} from "pinia";

const {app} = useStore();
const {collapse} = storeToRefs(app);

</script>

<style lang="less" scoped>
@import url('@/styles/variables.module.less');

.layout-container {
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

  .main-container {
    height: 100%;

    .header-container {
      //height: @headerHeight;
    }
  }
}
</style>
