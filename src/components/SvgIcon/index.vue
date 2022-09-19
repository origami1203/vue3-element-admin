<template>
  <el-icon :color="color" :size="size">
    <component :is="iconName"></component>
  </el-icon>
</template>

<script setup lang="ts">
import {ElIcon} from "element-plus";

defineProps({
  iconName: {
    type: String,
    required: true
  },
  color: {},
  size: {}
})
</script>

<style scoped>
</style>
