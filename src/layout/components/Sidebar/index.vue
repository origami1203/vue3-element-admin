<template>
  <div>
    <Logo v-if="showLogo" :collapse="collapse"/>
    <Menu :collapse="collapse"/>
  </div>
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
</style>
