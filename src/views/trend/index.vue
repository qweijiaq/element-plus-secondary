<template>
  <div>
    <el-divider>正常趋势</el-divider>
    <div class="flex">
      <div>
        <wj-trend text="营业额"></wj-trend>
      </div>
      <div>
        <wj-trend text="销售额" type="down"></wj-trend>
      </div>
    </div>
    <br />
    <el-divider>颜色翻转</el-divider>
    <div class="flex">
      <div><wj-trend text="销售额" reverseColor></wj-trend></div>
      <div><wj-trend text="营业额" type="down" reverseColor></wj-trend></div>
    </div>
    <br />
    <el-divider>自定义图标颜色</el-divider>
    <div class="flex">
      <div>
        <wj-trend text="营业额" upIconColor="blue"></wj-trend>
      </div>
      <div>
        <wj-trend text="销售额" type="down" downIconColor="#123456"></wj-trend>
      </div>
    </div>

    <br />
    <el-divider>自定义文字颜色</el-divider>
    <div class="flex">
      <div><wj-trend text="营业额" upTextColor="blue"></wj-trend></div>
      <div>
        <wj-trend text="销售额" type="down" downTextColor="purple"></wj-trend>
      </div>
    </div>
    <br />
    <el-divider>自定义图标</el-divider>
    <div class="flex">
      <div><wj-trend upIcon="CaretTop">营业额</wj-trend></div>
      <div><wj-trend type="down" downIcon="CaretBottom">销售额</wj-trend></div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.flex {
  display: flex;
  div {
    margin-right: 10px;
  }
}
</style>
