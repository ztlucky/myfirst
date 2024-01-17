<template>
    <div>
        <h1>我的User组件</h1>
         <div>我的名字是{{userName}}</div>
         <div>我的年龄是{{age}}</div>
         <el-button @click="clickHandle">向父组件传递数据</el-button>
    </div>
</template>
<script setup>
//定义属性，用于父组件向子组件传递数据时使用
// eslint-disable-next-line no-undef
defineProps({
    userName:{
        type:String,
        default:'Hello'
    },
    age:{
        type:Number,
        default:0
    }
});
//定义函数
// eslint-disable-next-line no-undef
let  emits = defineEmits(['sendDataToReigister'])
 
function clickHandle(){
    emits('sendDataToReigister',{'value':900})
}
</script>
<style scoped>

</style>