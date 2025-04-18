<script lang="ts" setup>


import { userStore } from "@/main";
import router from "@/router";
import { useTransactionStore, useEdditStore } from "@/stores/transactions";
import { ref, computed, onMounted } from "vue";
const transactionStore = ref(useTransactionStore());
const edditStore = ref(useEdditStore());
console.log(transactionStore.value.transactions[0]);








interface Transaction {
  id: number;
  title: String;
  amount: number;
  type: String;
  category: String;
  date: Date;
}

//Transaction mennagement

const transactions = computed(() => {
  return transactionStore.value.transactions;
});

function newTransaction() {
  edditStore.value.createNewTransactionObject();
  router.push("/EdditTransaction");
}

function edditTransaction(obj: Transaction) {
  edditStore.value.cloneNewObject(obj);
  router.push("/EdditTransaction");
}


//Search Logic

const searchQuerry = ref("");
const selectedFilter = ref("");
const selectedSort = ref("");
const filteredAndSearchedTransactions = computed(() => {
  let filtered = transactionStore.value.transactions;
  filtered = []

  transactionStore.value.transactions.forEach(obj => {
  const clone = JSON.parse(JSON.stringify(obj));
  clone.date = new Date(clone.date); // Convert back to Date
  filtered.push(clone as typeof obj);
});


  if (selectedFilter.value === "showExpenses") {
    filtered = filtered.filter((t) => t.type === "expense");
  } else if (selectedFilter.value === "showIncome") {
    filtered = filtered.filter((t) => t.type === "income");
  }

  if (searchQuerry.value.trim() !== "") {
    filtered = filtered.filter((t) =>
      t.title.toLowerCase().includes(searchQuerry.value.toLowerCase())
    );
  }
  console.log(filtered[0].date);
  
  if (selectedSort.value == "byValue") {
    filtered.sort((n1, n2) => {
      if (n1.amount > n2.amount) {
        return 1;
      }
      if (n1.amount < n2.amount) {
        return -1;
      }
      return 0;
    });
  }
  if (selectedSort.value == "byDate") {
    filtered.sort((n1, n2) => {
      if (n1.date.getTime() > n2.date.getTime()) {
        return 1;
      }
      if (n1.date.getTime() < n2.date.getTime()) {
        return -1;
      }
      return 0;
    });
  }
  return filtered;
});



function test() {
  console.log(filteredAndSearchedTransactions.value);
}




</script>

<script lang="ts">
export default {
  name: "Transactions",
};
</script>

<template>
  <div class="settings">
    <!-- Filter Select -->
    <p>Filter:</p>
    <select name="Hi" id="filterSelected" v-model="selectedFilter">
      <option value="">none</option>
      <option value="showExpenses">showExpenses</option>
      <option value="showIncome">showIncome</option>
    </select>
    <p>Search:</p>
    <input type="text" name="" id="" v-model="searchQuerry" />
    <p>Sort: </p>
    <select name="Hi" id="filterSelected" v-model="selectedSort">
      <option value="">none</option>
      <option value="byValue">byValue</option>
      <option value="byDate">byDate</option>
    </select>
  </div>
  <div class="umsatz">

    <!-- Show Positions -->

    <ol>
      <li
      class="position"
        v-for="(pos, index) in filteredAndSearchedTransactions"
        :key="index"
        :class="{
          expense: pos.type == 'expense',
          income: pos.type == 'income',
        }"
      >
        {{ pos.title }}
        {{ pos.amount }}€
        <button type="button" v-on:click="edditTransaction(pos)">Eddit</button>
        <button @click="" class="bg-red-500 text-white px-4 py-2 rounded-lg">
      Delete Something
    </button>
        <hr />
    </li>
    </ol>

    
  </div>
  <div class="stats">
    {{ transactionStore.total }}
  </div>
  <div>
    <button type="button" v-on:click="newTransaction">newPosition</button>
    <button type="button" v-on:click="">TEST</button>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: sans-serif;
}

.settings {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid #ccc;
  background-color: #f9f9f9;
}

.settings > * {
  flex: 1 1 120px;
  min-width: 100px;
}

.umsatz {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 1rem;
  width: 100%;
  max-width: 800px;
  margin: auto;
  gap: 0.5rem;
}

ol {
  list-style: none;
  padding: 0;
  margin: 0;
}

.position {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-bottom: 0.5rem;
  border-radius: 1rem;
  background-color: #f0f0f0;
  color: #000;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  flex-wrap: wrap;
}

.position button {
  margin-left: 1rem;
  padding: 0.4rem 0.8rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  background-color: #007bff;
  color: white;
}

.expense {
  background-color: #ffe5e5;
  border-left: 6px solid red;
}

.income {
  background-color: #e6ffea;
  border-left: 6px solid green;
}

.stats {
  text-align: center;
  font-size: 1.2rem;
  margin: 1rem auto;
}

button {
  padding: 0.6rem 1.2rem;
  margin: 0.5rem;
  border: none;
  border-radius: 0.6rem;
  background-color: #28a745;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

button:hover {
  opacity: 0.9;
}

@media (max-width: 600px) {
  .position {
    flex-direction: column;
    align-items: flex-start;
  }

  .settings {
    flex-direction: column;
    align-items: flex-start;
  }

  .settings > * {
    width: 100%;
  }
}

</style>
