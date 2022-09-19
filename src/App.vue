<template>
  <ElConfigProvider :locale="locale">
    <router-view/>
  </ElConfigProvider>
</template>

<script setup lang="ts">
import {ElConfigProvider} from "element-plus";
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

const locale = zhCn

</script>
