<script setup lang="ts">
import router from "@/router";
import { onMounted, reactive } from "vue";
import { useEdditStore } from "@/stores/transactions";
import { useTransactionStore } from "@/stores/transactions";

const edditStore = useEdditStore();
const tStore = useTransactionStore();
const selectedTransaction = reactive(edditStore.selectedTransaction)

onMounted(() => {
  if (!edditStore.selectedTransaction) {
    edditStore.createNewTransactionObject(); // <-- make sure this is called
  }
});

function submitForm() {
  console.log();
  
  const transaction = edditStore.selectedTransaction;
  if (!transaction) return;

  if (transaction.id === -1) {
    transaction.date = new Date()
    tStore.puchNewToLast(transaction);
  } else {
    tStore.pushToId(transaction.id, transaction);
  }

  edditStore.createNewTransactionObject();
  console.log(tStore.transactions);
  
  router.push("/Transactions");
}

</script>

<script lang="ts">
export default {
  name: "edditTransaction",
};
</script>
<template>
  <div class="island-container">
    <form @submit.prevent="submitForm" class="floating-island">
      <h2 class="form-title">Edit Transaction</h2>

      <div class="form-group">
        <label for="title">Title</label>
        <input
          v-model="selectedTransaction.title"
          type="text"
          id="title"
          required
        />
      </div>

      <div class="form-group">
        <label for="amount">Amount</label>
        <input
          v-model.number="selectedTransaction.amount"
          type="number"
          id="amount"
          required
        />
      </div>

      <div class="form-group">
        <label for="type">Type</label>
        <select
          v-model="selectedTransaction.type"
          id="type"
          required
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>
      </div>

      <div class="form-group">
        <label for="category">Category</label>
        <input
          v-model="selectedTransaction.category"
          type="text"
          id="category"
          required
        />
      </div>
      {{ selectedTransaction.date }}

      <button type="submit" class="submit-btn" v-on:click="submitForm">Save</button>
    </form>
  </div>
</template>

<style>
.island-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to top right, #e0f7fa, #f1f8e9);
  overflow: hidden;
}

.floating-island {
  background: #fff;
  border-radius: 2rem;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 320px;
  animation: float 4s ease-in-out infinite;
  transform: translateY(0);
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.form-title {
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #2e7d32;
}

.form-group {
  margin-bottom: 1.2rem;
}

.island-container label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.3rem;
  color: #37474f;
}

.island-container input,
.island-container select {
  width: 100%;
  padding: 0.6rem;
  border: 1px solid #cfd8dc;
  border-radius: 0.75rem;
  font-size: 1rem;
  outline: none;
  transition: border 0.3s ease;
}

.island-container input:focus,
.island-container select:focus {
  border-color: #26a69a;
}

.submit-btn {
  width: 100%;
  padding: 0.8rem;
  background-color: #26a69a;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #2bbbad;
}
</style>
