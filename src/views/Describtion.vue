<script lang="ts">
export default {
  name: "Describtion",
};

</script>

<template>
  <div id="container">
    <div class="des">
      
      <h2>Expense Tracker</h2>
      <p>
        The Expense Tracker is a user-friendly tool designed to help you manage
        your finances effortlessly. It allows you to track your income and
        expenses,
        categorize transactions, and gain insights into your spending habits.
        With a clean and intuitive interface, you can quickly add new expenses,
        view your transaction history, and analyze your budget through detailed
        summaries and charts. Key features include: <br>✔ Real-time expense tracking
        <br>✔ Categorized transactions (e.g., food, rent, entertainment) <br>✔ Visual
        spending insights with charts and graphs <br>✔ Simple and intuitive design
        for easy navigation Stay in control of your finances and make informed
        financial decisions with the Expense Tracker! 💰📊
      </p>
    </div>
  </div>
</template>

<style>
#container{
    display: flex;
    align-items: center;
    justify-content: center;

}
.des {
    margin: 5rem;
  padding: 20px;
  line-height: 1.6;
  max-width: 50%;
  background-color: rgb(200, 194, 194);
  border: 2px solid rgb(151, 137, 137);
  border-radius: 2rem;
}

h1 {
  color: black;
}

p {
  margin-bottom: 15px;
}
</style>
