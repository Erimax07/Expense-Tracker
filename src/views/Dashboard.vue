<script lang="ts" setup>
import { userStore } from '@/main';
import router from '@/router';
import { usePositionsStore } from '@/stores/counter';
import { ref } from 'vue';
const storePositions = ref(usePositionsStore())
console.log(storePositions.value.positions[0]);

function newPosition () {
  storePositions.value.setLocalNull()
  router.push('/EdditPosition')
}
function edditPosition () {
  storePositions.value.setLocalNull()
  router.push('/EdditPosition')
}

   
</script>

<script lang="ts">
export default {
  name: "Dashboard",
};
</script>

<template>
  <div class="umsatz">
    <ol>
      <li class="position" v-for="(pos, index) in storePositions.positions" :key="index" :class="{expense:pos.type == 'expense', income:pos.type == 'income'}">
        {{ pos.title }}    
        {{ pos.amount }}€
        <button type="button" >Eddit</button>
        <hr>
      </li>
    </ol>
  </div>
  <div>
    <button type="button" v-on:click="newPosition()">newPosition</button>
  </div>
</template>

<style>
ol{
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
}
.umsatz{
  width: fit-content;
  border: 2px black solid;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
  .position{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    margin: 0.3rem;
    border: 1px solid black;
    border-radius: 1rem;
  }
  .expense{
    background-color: red;
  }
  .income{
    background-color: green;
  }
</style>
