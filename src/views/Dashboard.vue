<script lang="ts">
export default {
  name: "Dashboard",
};
</script>

<script setup lang="ts">
import MainInfos from '@/components/mainInfos.vue';
import { computed } from 'vue';
import { createTypedChart } from 'vue-chartjs';


  const dashbordElements = computed(()=>{
    let arr = []
    if(true) arr.push(["Total:",  ])

    })
</script>

<template>
  <div>
    <div class="mainstats">
      <MainInfos />
    </div>
    
  </div>
</template>