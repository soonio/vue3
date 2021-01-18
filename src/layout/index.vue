<template>
  <el-container>
    <el-header>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="home">个人中心</el-menu-item>
        <el-menu-item index="mode">分类</el-menu-item>
        <el-menu-item index="template">模版</el-menu-item>
        <el-menu-item index="article">文章</el-menu-item>
        <el-menu-item index="login">登陆</el-menu-item>
        <el-menu-item style="float: right">
          <div class="avatar-wrapper">
            <img :src="user.img" class="user-avatar">
            <span>{{ user.name }}</span>
          </div>
        </el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'Layout',
  data () {
    return {
      user: {
        name: '清流',
        img: 'https://unify.guyinmedia.com/upload/file/202009/28-35f96ea0255214bbbffc4d16bd3c65d4.png'
      },
      activeIndex: 'home'
    }
  },
  methods: {
    handleSelect (key) {
      if (key) {
        this.activeIndex = key
        this.$router.push(`${key}`)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.avatar-wrapper {
  position: relative;
  height: 50px;
  cursor: pointer;
  .user-avatar {
    width: 30px;
    height: 30px;
    border-radius: 10px;
    //margin-top: 12px;
  }
  span {
    margin: 0 10px;
    height: 50px;
    line-height: 50px;
    display: inline-block;
  }
}
</style>
