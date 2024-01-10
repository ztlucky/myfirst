<template>
  <img alt="Vue logo" src="./assets/logo.png" title="这是logo">
  <!-- <HelloWorld msg="Welcome to Your Vue.js App myfirst 第一个项目"/> -->
  <title>标题</title>
  <h1>一级标题</h1>
  <h2>我是二级标题</h2>
  <h3>我是三级标题</h3>
  <h4>我是四级标题</h4>
  <h5>我是五级标题</h5>
  <h6>我是六级标题</h6>
  <el-row >
    <el-button>Default</el-button>
    <el-button type="primary">primary</el-button>
    <el-button type="success">success</el-button>
  </el-row>
  <!-- <el-button color="#ff0000" >我是button</el-button> -->
</template>

<script>
  export default {
  name: 'App',
  components: {
   // HelloWorld
   }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
