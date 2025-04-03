<script lang="ts">
export default {
  name: "EdditPosition",
};


</script>

<script setup lang="ts">
    import router from '@/router';
import { usePositionsStore } from '@/stores/counter';
    import { ref } from 'vue';
    const storePositions = ref(usePositionsStore())
    console.log(storePositions.value.localPosition.date);
    
    let submitted = false
    function setDate (){
        storePositions.value.localPosition.date = new Date()
    }

    function submitForm() {
        storePositions.value.pushToPositions()
        router.push("/")
        
        
    }
</script>

<template>

    <div id="app">
        <form @submit.prevent="submitForm">
            <label>Title:
                <input type="text" v-model="storePositions.localPosition.title" required>
            </label>

            <label>Amount:
                <input type="number" v-model.number="storePositions.localPosition.amount" required>
            </label>

            <label>Type:
                <select v-model="storePositions.localPosition.type" required>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
            </label>

            <label>Category:
                <input type="text" v-model="storePositions.localPosition.category" required>
            </label>

            <label>Date: <br>
                
                {{ storePositions.localPosition.date }}
                <button type="button" v-on:click="setDate()">Set Date</button>
            </label>
            
            <button type="submit">Submit</button>
        </form>
        <div>
            <h3>Submitted Transaction:</h3>
            <p><strong>Title:</strong> {{ storePositions.localPosition.title }}</p>
            <p><strong>Amount:</strong> {{ storePositions.localPosition.amount }}</p>
            <p><strong>Type:</strong> {{ storePositions.localPosition.type }}</p>
            <p><strong>Category:</strong> {{ storePositions.localPosition.category }}</p>
            <p><strong>Date:</strong> {{ storePositions.localPosition.date }}</p>
        </div>
    </div>




</template>

<style>

.app {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 300px;
}

form {
    display: flex;
    flex-direction: column;
}

label {
    margin-bottom: 10px;
}

input, select {
    width: 100%;
    padding: 8px;
    margin-top: 4px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    background-color: #28a745;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #218838;
}

h3 {
    margin-top: 20px;
    color: #333;
}

</style>

