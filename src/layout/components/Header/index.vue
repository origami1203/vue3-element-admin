<template>
  <div class="header-wrapper flex w-full items-center justify-between">

    <div class="header-left h-full flex">
      <!--菜单折叠图标-->
      <SvgIcon :icon-name="iconName" size="20px" class="hamburger" @click="toggleClick"/>

      <!--面包屑-->
      <el-breadcrumb class="header-breadcrumb" separator-icon="ArrowRight">
        <el-breadcrumb-item v-for="item in matched">{{ item.meta.title }}</el-breadcrumb-item>
        <!--<el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>-->
        <!--<el-breadcrumb-item>promotion management</el-breadcrumb-item>-->
        <!--<el-breadcrumb-item>promotion list</el-breadcrumb-item>-->
        <!--<el-breadcrumb-item>promotion detail</el-breadcrumb-item>-->
      </el-breadcrumb>
    </div>

    <div class="header-right">
      <el-dropdown class="avatar-container">
        <div class="user-avatar">
          <el-avatar src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"/>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>用户信息</el-dropdown-item>
            <el-dropdown-item @click="doLogout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import SvgIcon from "@/components/SvgIcon/index.vue";
import {storeToRefs} from "pinia";
import useStore from "@/stores";
import {useRoute} from "vue-router";
import router from "@/router";
import {ElMessage, ElMessageBox} from "element-plus";


const route = useRoute();
const matched = route.matched;

const iconName = ref('Fold')
const {app, user} = useStore();
const {collapse} = storeToRefs(app);
const toggleClick = () => {
  app.changeCollapseState()

  if (collapse.value) {
    iconName.value = 'Expand';
  } else {
    iconName.value = 'Fold'
  }
}
const doLogout = () => {
  ElMessageBox.confirm('确认注销登录么?', '提示', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: 'info',
  })
      .then(() => {
        user.logout()
            .then(() => {
              router.push('/login')
            })
      })
      .catch(() => {
        ElMessage({
          type: 'info',
          message: '取消登出',
        })
      })

}
</script>

<style lang="less" scoped>
@import url('@/styles/variables.module.less');


.header-wrapper {
  height: @headerHeight;

  .header-left {
    .hamburger {
      width: 50px;
      height: 50px;
    }

    .header-breadcrumb.el-breadcrumb {
      line-height: @headerHeight;
    }
  }

  .header-right {
    .avatar-container {
      margin-right: 25px;
    }
  }
}


</style>
