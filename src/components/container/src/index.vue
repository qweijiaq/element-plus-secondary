<template>
  <el-container>
    <el-aside width="auto">
      <NavSider :isCollapse="isCollapse" />
    </el-aside>
    <el-container>
      <el-header>
        <NavHeader :isCollapse="isCollapse" @toggle="onClickToggle" />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import NavHeader from "./navHeader/index.vue";
import NavSider from "./navSider/index.vue";

const isCollapse = ref(false);

const onClickToggle = () => {
  isCollapse.value = !isCollapse.value;
};
</script>

<style lang="scss" scoped>
.el-header {
  padding: 0;
  border: 1px solid #eee;
}
</style>
