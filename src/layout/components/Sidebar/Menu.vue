<template>
  <el-scrollbar class="flex-grow">
    <el-menu
        :background-color="sideBarColor"
        text-color="#fff"
        :collapse="collapse"
        class="border-r-0 el-menu-vertical-demo"
        router
    >
      <MenuItem :menuList="menuList"/>
    </el-menu>
  </el-scrollbar>
</template>

<script setup lang="ts">
import MenuItem from "@/layout/components/Sidebar/MenuItem.vue";
import useStore from "@/stores";
import {sideBarColor} from "@/styles/variables.module.less";

defineProps({
  collapse: {
    required: true,
    type: Boolean
  }
})
const {permission} = useStore();
const menuList = permission.routes
</script>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
