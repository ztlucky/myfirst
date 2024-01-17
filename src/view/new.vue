 <template>
    <div style="display: flex;flex-direction: column;justify-content: center;">
        <img class="testImage"/>
    </div>
</template>
<script setup> 
 import { GetVersion } from '/src/http/api.js'
import { onMounted } from 'vue';
onMounted(()=>{
    console.log(document.documentElement.style.fontSize) 
    GetVersion(1).then((res)=>{
        console.log(res)
    })
}) 
</script>
<style>
.testImage{
    width: 19.2rem;
    height: 0.47rem;
    background: red;
}
</style>