<script setup lang="ts"></script>

<template>
  <RouterView />
</template>

<style lang="scss">
@import url("./styles/ui.scss");

* {
  margin: 0;
  padding: 0;
}

svg {
  width: 1em;
  height: 1em;
}

html,
body,
#app,
.el-container,
.el-menu {
  height: 100%;
}
</style>
