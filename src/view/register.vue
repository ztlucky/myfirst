<template>
<div style="display: flex;flex-direction: column; align-items: center;"> 
<div style="display: flex;flex-direction: column; align-items: center;width: 1080px;">
 <User :userName="myname" :age="myage" @sendDataToReigister="receiveData"></User>
 <h1 v-if="getmyvalue>0">接收到数据是{{ getmyvalue }}</h1>
 <h1 :class="titleClass">Make me red</h1>
 <button @click="increment">count is {{ count }} </button>
 <input v-model="text"  placeholder="请输入文字"> 
 <!-- 表单 -->
 <el-form :model="formModel" :rules="formrule"
 label-width="120px" label-position="top" style="width: 400px;">
   <el-form-item label="Activity name" prop="name">
    <el-input v-model="formModel.name" placeholder="请输入姓名"></el-input>
   </el-form-item>
   <el-form-item label="Activity  zone">
    <el-select v-model="formModel.region" placeholder="请选择区域">
      <el-option label="Beijing" :value=" 1"></el-option>
      <el-option label="Shanghai" :value=" 2"></el-option>
    </el-select>
</el-form-item>
    <el-form-item label="Activity time">
        <el-col :span="11"  >
            <el-date-picker v-model="formModel.startDate" type="date" placeholder="请选择时间" style="width: 100%;"></el-date-picker>
        </el-col>
       <el-col :span="2"><span>-</span> </el-col>
       <el-col :span="11">
        <el-time-picker v-model="formModel.time" placeholder="请选择时间" style="width: 100%;"></el-time-picker>
        </el-col>
        
    </el-form-item>  
  

   <el-form-item label="Instant delivery">
    <el-switch v-model="formModel.switchValue"  size="large"></el-switch>
   </el-form-item>
   <el-form-item label="Activity type">
     <el-checkbox-group v-model="formModel.type">
       <el-checkbox label="Online activities" name="type"></el-checkbox>
       <el-checkbox label="1" name="type"></el-checkbox>
       <el-checkbox label="Online " name="type"></el-checkbox>
     </el-checkbox-group>
  </el-form-item>
  <el-form-item label="Resources">
    <el-radio-group v-model="formModel.redioType">
      <el-radio label="type1"></el-radio>
      <el-radio label="type2"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="Activity form">
    <el-input v-model="formModel.detail" type="textarea"></el-input>
  </el-form-item>
   <el-form-item label="">
    <el-button type="primary" @click="submit">Create</el-button>
    <el-button >Cancel</el-button>
   </el-form-item>
 </el-form>
 <!-- 行内表单 -->
 <el-form :model="formModel" :inline="true" >
   <el-form-item label="Approved by">
    <el-input v-model="formModel.name" placeholder="Approved by"></el-input>
   </el-form-item>
   <el-form-item label="Activity zone">
    <el-select v-model="formModel.type" placeholder="Activity zone">
      <el-option :label="Beijing" :value="1"></el-option>
    </el-select>
   </el-form-item>
    <el-form-item label="Activity time">
        <el-date-picker v-model="formModel.startDate" placeholder="pick a date"></el-date-picker>
    </el-form-item>
    <el-form-item label="">
        <el-button type="primary">Query</el-button>
    </el-form-item>
  
 </el-form>
 <p>{{ text }}</p>
</div>
</div>
</template>
<script setup>
import User from '@/components/User.vue'

import { ref ,reactive} from 'vue';
//引入类型
// import type { FormInstance,FormRules } from 'element-plus';
// const ruleFormRef = ref(<FormInstance>)()
const myname = ref('章三')
const myage = ref(12)
const getmyvalue= ref(0)
function receiveData(e){
    getmyvalue.value = e.value
    console.log(e)
}
const titleClass = ref('title')
const count = ref(0)
function increment(){
    count.value ++
}

const text = ref('123')
const formModel = reactive({
    name:'',
    region:'',
    startDate:'',
    time:'',
    switchValue:false,
    type:[],
    redioType:'',
    detail:''
})

// 表单校验规则
const formrule = reactive({
  name:[{
    required: true,
    message:'请输入姓名',
    trigger:'submmit'   
  }]
})
function submit(){
 console.log(formModel)
}
</script>
<style>
.title{
    color: red;
}
 .el-input {
  --el-input-width: 320px;
}

.el-select {
  --el-select-width:320px;
}
</style>
