<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'


</script>

<template>
  

    <nav>
      <h1>Expense Tracker</h1>
      <div class="buttons">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/Describtion">Describtion</RouterLink>
        <RouterLink to="/">Home</RouterLink>

      </div>
    </nav>
    <RouterView></RouterView>

    
  
</template>

<style>
  nav{
    background-color: antiquewhite;
    padding: 0;
    width:100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: black;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  h1{
    margin: 1.5rem;
  }
  .buttons{
    flex:none;
    margin: 0.5rem;
    display: flex;

  }
  .buttons > *{
    margin: 1rem;
    font-size: large;
    color: black;
    text-decoration: none;
  }
</style>
