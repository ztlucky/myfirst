<template>
    <el-container class="layout-container-demo" style="height: 200px;">
      <el-aside width="200px" style="background-color: aqua;"></el-aside>
     
      <el-container>
        <el-header height="20px" style="background-color: aquamarine;"></el-header>
        <el-main style="background-color: black;"></el-main>
        <el-footer height="20px" style="background-color: aquamarine;"></el-footer>
      </el-container>
     

    </el-container>
    <el-icon :size="40" color="#ff0000"> <Edit/></el-icon>
    <el-icon :size="40"  > <SwitchFilled/></el-icon>
    <el-row>
      <el-col :span="24"><div style="background-color: aliceblue;">123456</div></el-col>
    </el-row>
    <el-row>
      <el-col :span="12"><div style="background-color: aliceblue;">123456</div></el-col>
      <el-col :span="12"><div style="background-color: #ff0000;">123456</div></el-col>
    </el-row>
    <el-row>
      <el-col :span="8"><div style="background-color: aliceblue;">123456</div></el-col>
      <el-col :span="8"><div style="background-color: #ff0000;">123456</div></el-col>
      <el-col :span="8"><div style="background-color: #524d4d;">123456</div></el-col>
    </el-row>
    <el-row>
      <el-col :span="6"><div style="background-color: aliceblue;">123456</div></el-col>
      <el-col :span="6"><div style="background-color: #ff0000;">123456</div></el-col>
      <el-col :span="6"><div style="background-color: #524d4d;">123456</div></el-col>
      <el-col :span="6"><div style="background-color: #d89a9a;">123456</div></el-col>
    </el-row>
    <el-link href="/register">注册</el-link>
    <el-link href="/register" :underline="false">{{property}}</el-link>
    <div>
      <!-- 省略号 -->
       <el-text truncated  tag="ins" style="width: 150px;">Self element set width 100px</el-text>
       <!-- 行数 -->
       <el-text   truncated 
       line-clamp="2" style="width: 150px;"> The -webkit-line-clamp CSS property allows limiting of the contents of  a block to the specified number of lines.</el-text>
    </div>
    <!-- 滚动条 纵向 -->
    <el-scrollbar height="400px" @scroll="scroll">
      <h1 v-for="item in 20" :key="item">{{ item }}</h1>
    </el-scrollbar>
    <!-- 手动设置滚动条 -->
    <el-slider v-model="value" :format-tooltip="formatTooltip"></el-slider>

    <!-- 滚动条横向 -->
    <div style="justify-content: center;display: flex;flex-direction: column;align-items: center;">
      <el-scrollbar style="width: 400px;">
      <div style="display: flex;flex-direction: row;padding-bottom: 20px;">
        <el-button type="success" v-for="item in 30" :key="item"> button+{{ item }}</el-button>
      </div>
    </el-scrollbar></div>
    <!-- 滚动条 -->
    <div style="display: flex;flex-direction: row;justify-content: center;align-items: center;">
      <span >default value</span>
      <div style="width: 400px;margin-left: 20px;">
        <el-slider v-model="value" placement="right"></el-slider>
      </div>
     
    </div>
    <div style="display: flex;flex-direction: row;justify-content: center;align-items: center;">
      <span >default value</span>
      <div style="width: 400px;margin-left: 20px;">
        <el-slider v-model="value2" placement="left" ></el-slider>
      </div>
     
    </div>
    <div style="display: flex;flex-direction: row;justify-content: center;align-items: center;">
      <span >hideshowtootip value</span>
      <div style="width: 400px;margin-left: 20px;">
        <el-slider v-model="value3" :show-tooltip="false"></el-slider>
        
      </div>
      <span>{{ value3 }}</span>
    </div>
    <div style="display: flex;flex-direction: row;justify-content: center;align-items: center;">
      <span >formatTooltip value</span>
      <div style="width: 400px;margin-left: 20px;">
        <el-slider v-model="value4"  :format-tooltip="formatTooltip"></el-slider>
        
      </div>
       
    </div>

    <div style="display: flex;flex-direction: row;justify-content: center;align-items: center;">
      <span >step value</span>
      <div style="width: 400px;margin-left: 20px;">
        <el-slider v-model="value5" :step="10" :show-stops ='true'></el-slider>
        
      </div>
       
    </div>
    <div style="display: flex;flex-direction: row;justify-content: center;align-items: center;">
      <span >input slider </span>
      <div style="width: 400px;margin-left: 20px;">
        <el-slider v-model="value6" :step="10" :show-stops ='true' show-input size="small"></el-slider>
        
      </div>
      <div style="width: 400px;margin-left: 20px;">
        <el-slider v-model="value6" :step="10" :show-stops ='true' show-input size="large"></el-slider>
        
      </div>
      <div style="width: 400px;margin-left: 20px;">
        <el-slider v-model="value6" :step="10" :show-stops ='true' show-input  ></el-slider>
        
      </div>
    </div>
    <!-- 范围选择 slider -->
    <div style="width: 400px;margin-left: 20px;">
        <el-slider v-model="rangeValue" :step="10" range  placement="right"></el-slider>      
    </div>
    <!-- 垂直模式，必须设置height -->
    <el-slider v-model="value7" :step="10" vertical height="200px" :min="20" :max="120"></el-slider> 
    <!-- 显示标记 -->
    <div style="width: 400px;margin-left: 20px;">
    <el-slider v-model="rangeValue" range :marks="marks"></el-slider>
  </div>
  <!-- direction="vertical" -->
  <el-space wrap  :size="value2">
    <el-card v-for="i in 3" :key="i" class="box-card" style="width: 200px">
      <template #header>
        <div class="card-header">
          <span>Card name</span>
          <el-button class="button" text>Operation button</el-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ 'List item ' + o }}
      </div>
    </el-card>
  </el-space>
   </template>

  <script setup >
import { ref } from 'vue'
  // import {RouterLink} from 'vue-router'
  const value = ref(0)
  const value2 = ref(20)
  const value3 = ref(0)
  const value4 = ref(0)
  const value5 = ref(0)
  const value6 = ref(0)
  const rangeValue = ref([20,60])
  const value7 = ref(0)
  function formatTooltip(val){
        return val+'px'
  }
  function scroll(e){
         console.log(e)
         value.value= e.scrollTop
      }
</script>
<script>
  export default {
      data() {
      return {
        property: '测试',
        marks:{ 0:'0°C',
                20:'20°C',
                40:'40°C',
                80:{
                  label:'80°C',
                  style:{
                    color: '#1989FA',
                  }
                }
                 
      }
      };
     },
     methods: {
      
     },
     
  }
  </script>
  
  <style scoped>
  .layout-container-demo{
     background-color: aliceblue;
  }
  .el-row{
    margin-bottom: 1rem;
  }
  .el-col{
    border-radius: 4px;
    border: 1px solid #ff0000;
  }
  </style>
  