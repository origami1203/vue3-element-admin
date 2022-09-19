<template>
  <div class="welcome">
    <div class="content">
      <div class="sub-title">欢迎使用</div>
      <div class="title">vue-element后台管理系统</div>
      <div class="desc">Vue3.0+Element-Plus打造通用后台管理系统</div>
    </div>
    <div class="img"></div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.welcome {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;

  .content {
    position: relative;
    right: 50px;

    .sub-title {
      font-size: 30px;
      line-height: 42px;
      color: #333;
    }

    .title {
      font-size: 40px;
      line-height: 62px;
      color: #409eff;
    }

    .desc {
      font-size: 14px;
      line-height: 40px;
    }
  }

  .img {
    background-image: url('@/assets/welcome.png');
    width: 400px;
    height: 400px;
    background-size: cover;
  }
}

</style>