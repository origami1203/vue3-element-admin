<template>
  <div class="system-dept-container">
    <el-card shadow="hover">
      <div class="system-dept-wrapper flex justify-between">
        <div class="system-dept-search">
          <el-input placeholder="请输入部门名称" clearable class="w-56"/>
          <el-button type="primary" class="ml-3" :icon="Search">查询</el-button>
        </div>
        <div class="system-dept-add">
          <el-button type="success" :icon="DocumentAdd">添加部门</el-button>
        </div>

      </div>
    </el-card>

  </div>
</template>

<script setup lang="ts">
import {Search, DocumentAdd} from "@element-plus/icons-vue";
</script>

<style scoped>

</style>
