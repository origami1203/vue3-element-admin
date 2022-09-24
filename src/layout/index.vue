<template>
  <section class="layout-container flex flex-auto h-screen box-border min-w-0">
    <!--侧边栏-->
    <SideBar :class="collapse? 'collapse':'not-collapse'"/>

    <section class="main-container flex-col flex flex-auto box-border min-w-0" :class="collapse? 'collapse':'not-collapse'">

      <!--header-->
      <header class="header-container flex flex-shrink-0 shadow-md">
        <Header/>
      </header>

      <main class="block flex-auto overflow-auto">
        <!--内容主体-->
        <ContentBody/>
      </main>

    </section>
  </section>

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
</style>
