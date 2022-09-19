<template>
  <section class="main-content">
    <router-view/>
  </section>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
@import url('@/styles/variables.module.less');

.main-content {
  width: 100%;
  height: calc(100% - @headerHeight);
  background-color: #f0f2f5;
}
</style>
