<template>
  <wj-choose-icon title="选择图标" v-model:visible="visible"
    >选择图标</wj-choose-icon
  >
</template>

<script lang="ts" setup>
import { ref } from "vue";

let visible = ref<boolean>(false);
</script>

<style lang="scss" scoped></style>
