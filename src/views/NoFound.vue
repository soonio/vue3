<template>
  <div class="wrap">
    <span>404...</span>
    <el-link type="primary" href="/">返回首页</el-link>
  </div>
</template>

<script>
export default {
  name: 'NoFound'
}
</script>

<style lang="scss" scoped>
.wrap {
  margin-top: 30px;
  span {
    display: block;
    color: #F56C6C;
    font-size: 50px;
  }
  text-align: center;
}
</style>
