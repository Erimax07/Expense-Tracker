<script setup lang="ts">
    import { ref } from 'vue';
    import { useTransactionStore } from '@/stores/transactions';
    const transactionStore = ref(useTransactionStore())
    const currency = "€";
    
    
</script>

<script lang="ts">
export default {
  name: "MainInfos",
};

</script>

<template>
    <div class="financial-container">
      <!-- Income Card -->
      <div class="card income">
        <h3>Total Income</h3>
        <p>{{ transactionStore.totalIncome }} {{ currency }}</p>
      </div>
  
      <!-- Expense Card -->
      <div class="card expense">
          <h3>Total Expense</h3>
          <p>-{{ transactionStore.totalExpenses  }} {{ currency }}</p>
      </div>
  
      <!-- Net Balance Section -->
      <div class="balance">
        <h3>Net Balance</h3>
        <!-- Conditional class based on net balance -->
        <p :class="{'income': transactionStore.total >= 0, 'expense': transactionStore.total < 0}">
          {{ transactionStore.total  }} {{ currency }}
        </p>
      </div>
    </div>
  </template>
  

  
  <style scoped>
  .financial-container {
    max-width: 600px;
    margin: 2rem auto;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    background-color: #fff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
  }
  
  /* Card styling for Income and Expense */
  .card {
    flex: 1;
    min-width: 200px;
    padding: 1.5rem;
    border-radius: 5px;
    text-align: center;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.08);
  }
  
  .income {
    background-color: #e6f9e6;  /* Light green background */
    border: 1px solid #a2d5a2;
    color: green;
  }
  
  .expense {
    background-color: #ffe6e6;  /* Light red background */
    border: 1px solid #ffa2a2;
    color: red;
  }
  
  /* Net Balance styling */
  .balance {
    flex-basis: 100%;
    text-align: center;
    margin-top: 1rem;
    padding: 1rem;
    border-top: 1px solid #ececec;
  }
  
  .balance h3 {
    margin-bottom: 0.5rem;
  }
  
  .balance p {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
  }
  
  /* Ensuring net balance inherits the appropriate color */
  .balance p.income {
    color: green;
  }
  .balance p.expense {
    color: red;
  }
  
  h3 {
    margin-bottom: 0.5rem;
  }
  
  p {
    margin: 0;
  }
  </style>
  