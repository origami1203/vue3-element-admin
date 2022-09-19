<template>
  <template v-for="menu in menuList">

    <template v-if="menu.meta && !menu.meta.hidden">
      <el-sub-menu :index="resolvePath(menu.path)" v-if="menu.children && menu.children.length > 0">
        <template #title>
          <SvgIcon :icon-name="menu.meta.icon"/>
          <span>{{ menu.meta.title }}</span>
        </template>
        <MenuItem :menuList="menu.children" :parent-path="resolvePath(menu.path)"/>
      </el-sub-menu>

      <el-menu-item v-else :index="resolvePath(menu.path)">
        <template #title>
          <SvgIcon :icon-name="menu.meta.icon"/>
          <span>{{ menu.meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
  </template>
</template>

<script setup lang="ts">
import SvgIcon from "@/components/SvgIcon/index.vue";
import path from "path-browserify";

const props = defineProps({
  menuList: {
    type: Array,
    required: true,
    default: () => []
  },
  parentPath: {
    type: String,
    default: () => '/'
  }
})

function resolvePath(childPath: string): string {
  return path.resolve(props.parentPath, childPath)
}
</script>

<style scoped>
</style>
