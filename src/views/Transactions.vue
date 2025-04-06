<script lang="ts" setup>
import { userStore } from '@/main';
import router from '@/router';
import { useTransactionStore, useEdditStore } from '@/stores/transactions';
import { ref, computed } from 'vue';
const transactionStore = ref(useTransactionStore())
const edditStore = ref(useEdditStore())
console.log(transactionStore.value.transactions[0]);


interface Transaction {
    id: number;
    title: String;
    amount: number;
    type: String;
    category: String;
    date: Date;
  }



const transactions = computed(()=>{
  return transactionStore.value.transactions
})


function newTransaction(){
  edditStore.value.createNewTransactionObject
  router.push('/EdditTransaction')
}

function edditTransaction(obj:Transaction){
  edditStore.value.cloneNewObject(obj)
  router.push('/EdditTransaction')
}



const searchQuerry = ref('');
const selectedFilter = ref('');
const filterTasks = computed(()=>{
        if(selectedFilter.value == "") return transactionStore.value
        if(selectedFilter.value == 'showExpenses') return transactionStore.value.transactions.filter((t) => t.type == "expense")
        if(selectedFilter.value == 'showIncome') return transactionStore.value.transactions.filter((t) => t.type =="income")
    })

function updateFilter ():Transaction[] {
        if(selectedFilter.value == "") return transactionStore.value.transactions
        if(selectedFilter.value == 'showExpenses') return transactionStore.value.transactions.filter((t) => t.type == "expense")
        if(selectedFilter.value == 'showIncome') return transactionStore.value.transactions.filter((t) => t.type =="income")
  return transactionStore.value.transactions
}


// const querryTasks = computed(()=>{
//   if(searchQuerry.value == ""){
//     console.log("hi");
    
//     return filterTasks.value
//   }
//   else{
//     return filterTasks.value.filter((t)=> checkName(t))
//   }
// })
function test(){
  console.log(filterTasks, selectedFilter.value == "", transactionStore.value.transactions);
  
}

function checkName(p:Transaction):boolean{
  let name = p.title
  return name.toLowerCase().includes(searchQuerry.value.toLowerCase());
}
   
</script>

<script lang="ts">
export default {
  name: "Transactions",
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
      <li class="position" v-for="(pos, index) in transactions" :key="index" :class="{expense:pos.type == 'expense', income:pos.type == 'income'}">
        {{ pos.title }}    
        {{ pos.amount }}€
        <button type="button" v-on:click="edditTransaction(pos)">Eddit</button>
        <hr>
      </li>
    </ol>
  </div>
  <div>
    <button type="button" v-on:click="newTransaction">newPosition</button>
    <button type="button" v-on:click="test">TEST</button>
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
