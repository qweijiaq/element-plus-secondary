<template>
  <div class="header">
    <span @click="onClick">
      <el-icon-expand v-if="props.isCollapse" style="margin-right: 10px" />
      <el-icon-fold v-else style="margin-right: 10px" />
    </span>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  isCollapse: {
    type: Boolean,
  },
});

const emits = defineEmits(["toggle"]);

const onClick = () => [emits("toggle")];
</script>

<style lang="scss" scoped>
.header {
  height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;
}
</style>
