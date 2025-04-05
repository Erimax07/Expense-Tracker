<script lang="ts" setup>
import { userStore } from '@/main';
import router from '@/router';
import { usePositionsStore } from '@/stores/counter';
import { ref, computed } from 'vue';
const storePositions = ref(usePositionsStore())
console.log(storePositions.value.positions[0]);


interface Position {
    id: number;
    title: String;
    amount: number;
    type: String;
    category: String;
    date: Date;
  }
function newPosition () {
  storePositions.value.setLocalNull()
  router.push('/EdditPosition')
}
function edditPosition () {
  storePositions.value.setLocalNull()
  router.push('/EdditPosition')
}

const searchQuerry = ref('');
const selectedFilter = ref('');
const filterTasks = computed(()=>{
        if(selectedFilter.value == "") return storePositions.value.positions
        if(selectedFilter.value == 'showExpenses') return storePositions.value.positions.filter((t) => t.type == "expense")
        if(selectedFilter.value == 'showIncome') return storePositions.value.positions.filter((t) => t.type =="income")
    })

const querryTasks = computed(()=>{
  if(searchQuerry.value == ""){
    console.log("hi");
    
    return filterTasks.value
  }
  else{
    return filterTasks.value?.filter((t)=> checkName(t))
  }
})


function checkName(p:Position):boolean{
  let name = p.title
  return name.toLowerCase().includes(searchQuerry.value.toLowerCase());
}
   
</script>

<script lang="ts">
export default {
  name: "Dashboard",
};
</script>

<template>
  <div class="settings">
    <p>Filter: </p>
    <select name="Hi" id="filterSelected" v-model="selectedFilter">
      <option value="">none</option>
      <option value="showExpenses">showExpenses</option>
      <option value="showIncome">showIncome</option>
    </select>
    <p>Search: </p> <input type="text" name="" id="" v-model="searchQuerry">
  </div>
  <div class="umsatz">
    <ol>
      <li class="position" v-for="(pos, index) in querryTasks" :key="index" :class="{expense:pos.type == 'expense', income:pos.type == 'income'}">
        {{ pos.title }}    
        {{ pos.amount }}€
        <button type="button" v-on:click="storePositions.setEdditData(pos.id)">Eddit</button>
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
  .settings{
    display: flex;
    flex-direction: row;
    padding: 3px;
  }
  .settings > *{
    max-width: fit-content;
    padding: 3px;
    max-height: fit-content;
  }
</style>
