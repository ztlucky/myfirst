<template>
    <img alt="Vue logo" src="../assets/logo.png" title="这是logo">
    
    <h1>一级标题</h1>
    <router-link to="/register"><h2>跳转注册页面</h2></router-link>
    
    <h3>我是三级标题</h3>
    <h4>我是四级标题</h4>
    <h5>我是五级标题</h5>
    <h6>我是六级标题</h6>
    <el-row  style="justify-content: center;">
      <el-button>Default</el-button>
      <el-button type="primary">primary</el-button>
      <el-button type="success">success</el-button>
      <el-button type="info">info</el-button>
      <el-button type="warning">warning</el-button>
      <el-button type="danger">Danger</el-button>
  
    </el-row>
    <el-row style="margin-top: 1rem;justify-content: center;">
      <el-button plain>plain</el-button>
      <el-button plain type="primary">primary</el-button>
      <el-button plain type="success">success</el-button>
      <el-button plain type="info">Info</el-button>
      <el-button plain type="warning">warning</el-button>
      <el-button plain type="danger">Danger</el-button>
  
    </el-row>
    <el-row style="margin-top: 1rem;justify-content: center;">
      <el-button round>round</el-button>
      <el-button  round type="primary">primary</el-button>
      <el-button round  type="success">success</el-button>
      <el-button round type="info">info</el-button>
      <el-button round type="warning">warning</el-button>
      <el-button round type="danger">Danger</el-button>
    </el-row>
    <el-row style="margin-top: 1rem; background-color: aliceblue;justify-content: center;">
      <el-button round>round</el-button>
      <el-button round plain type="primary">primary</el-button>
      <el-button round plain type="success">success</el-button>
      <el-button round plain type="info">Info</el-button>
      <el-button round plain type="warning">warning</el-button>
      <el-button round plain type="danger">danger</el-button>
    </el-row>
    <el-row style="margin-top: 1rem; justify-content: center;">
    <el-button :icon="Search" circle></el-button>
     
    <el-button :icon="Delete" circle></el-button>
    <el-button :icon="Check" circle></el-button>
    <el-button :icon="Edit" circle></el-button>
    <el-button :icon="Coin" circle></el-button>
    <el-button :icon="Message" circle color="#fff000"></el-button>
  </el-row>
  <h2>禁用状态</h2>
  <el-row style="justify-content: center;">
    <el-button type="success" disabled> success</el-button>
    <el-button plain type="success" disabled>success</el-button>
    <el-button round type="success" disabled>success</el-button>
    <el-button circle :icon="Message" disabled></el-button>
  </el-row>
  <h2>链接按钮</h2>
  <el-row style="justify-content: center;">
    <el-button link type="success" key="success">success</el-button>
  </el-row>
  <h2>图标按钮</h2>
  <el-row style="justify-content: center;">
    <el-button :icon="Search" round >搜索</el-button>
    <el-button type="primary">Unpload<el-icon><Upload/></el-icon></el-button>
  </el-row>
  
  <h2>按钮组</h2>
  <el-button-group>
    <el-button type="primary" :icon="ArrowLeft" round>Previous Page</el-button>
    <el-button type="primary" plain round> Next Page<el-icon class="el-icon--right"><ArrowRight></ArrowRight></el-icon> </el-button>
  </el-button-group>
  <el-button-group>
    <el-button type="primary" :icon="Delete"></el-button>
    <el-button type="primary" :icon="Edit"></el-button>
    <el-button type="primary" :icon="Message"></el-button>
  </el-button-group>
  <h2>加载状态按钮</h2>
  <el-row style="justify-content: center;">
    <el-button type="primary" :loading="isloading" :loading-icon="Loading">loding</el-button>
    <el-button type="primary" :loading-icon="Eleme" loading>Loading</el-button>
  
  </el-row>
  <h2>自定义颜色</h2>
  <el-row style="justify-content: center;">
   
    <el-button  color="#626aef" ><router-link to="/login">跳转</router-link> </el-button>
    <el-button plain color="#626aef" @click="buttonAction">Plain</el-button>
  
  </el-row>
  <h2>border 边框</h2>
  <div class="border1">普通边框</div>
  <div class="border2">虚线边框</div>
  
  
  
   </template>
  <script  setup>
  import {
    Search,
    Delete,
    Check,
    Edit,
    Message,
    Coin,
    Upload,
    ArrowLeft,
    ArrowRight,
    Loading,
    Eleme,
  }from '@element-plus/icons-vue'
   import { RouterLink } from 'vue-router'
  
  var isloading = true
  function buttonAction(){
    alert('点击了按钮')
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
  .border1{
    border: 1px solid #ff0000;
    width: 50%;
  }
  .border2{
    /* border: 1px dashed #ff0000; */
    width: 50%;
    height: 50px;
    box-shadow: var(--el-box-shadow-dark)
   
  ;
  }
  </style>
  