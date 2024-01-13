<template>
<div>
 <User :userName="myname" :age="myage"></User>
</div>
</template>
<script setup>
import { ref } from 'vue';
import User from '@/components/User.vue'
const myname = ref('章三')
const myage = ref(12)
</script>
<style>


</style>
