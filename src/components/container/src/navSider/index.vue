<template>
  <el-menu
    :collapse="props.isCollapse"
    default-active="2"
    class="el-menu-vertical-demo"
  >
    <el-menu-item index="1">
      <el-icon><el-icon-menu /></el-icon>
      <span>首页</span>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon><el-icon-menu /></el-icon>
      <span>图标选择器</span>
    </el-menu-item>
    <el-menu-item index="3">
      <el-icon><el-icon-menu /></el-icon>
      <span>导航3</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
const props = defineProps({
  isCollapse: {
    type: Boolean,
  },
});
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
