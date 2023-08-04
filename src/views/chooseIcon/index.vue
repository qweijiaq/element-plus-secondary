<template>
  <ChooseIcon title="选择图标" v-model:visible="visible">选择图标</ChooseIcon>
</template>

<script lang="ts" setup>
import ChooseIcon from "../../components/chooseIcon/src/index.vue";
import { ref } from "vue";

let visible = ref<boolean>(false);

// const updateVisible = () => {
//   visible.value = !visible.value;
// };
</script>

<style lang="scss" scoped></style>
