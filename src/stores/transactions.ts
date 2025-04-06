import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type { RefSymbol } from "@vue/reactivity";
import router from "@/router";
import type { forEachChild } from "typescript";

export const useTransactionStore = defineStore("positions", () => {
  interface Transaction {
    id: number;
    title: String;
    amount: number;
    type: String;
    category: String;
    date: Date;
  }
  const createPosition = (
    tid: number,
    title: string,
    amount: number,
    type: "expense"| "income",
    category: string
  ): Transaction => {
    return {
      id: tid,
      title: title,
      amount: amount,
      type: type,
      category: category,
      date: new Date(), // Initializes with the current date
    };
  };


  const transactions = [
    createPosition(1, "Software Engineer", 5000, "income", "Tech"),
    createPosition(2, "Project Manager", 7000, "income", "Management"),
    createPosition(3, "UX Designer", 4500, "expense", "Design"),
    createPosition(4, "Data Scientist", 6000, "income", "Analytics"),
    createPosition(5, "Marketing Specialist", 4000, "expense", "Marketing"),
  ];


  

  function findBiggestIdInPositions (): number {
    let biggestId = -1;
    transactions.forEach(element => {
      if(biggestId < element.id){
        biggestId = element.id
      } 
    });
    return biggestId
  }
    
  function puchNewToLast (trans:Transaction) {
    trans.id = findBiggestIdInPositions()+1
    transactions.push({ ...trans})
  }

  function pushToId(id:number, pos:Transaction) {
    let index:number = -1
    index = transactions.findIndex((pos:Transaction) => {
      return pos.id == id
    }
      );
      if(index == -1) return
      
        console.log(index);
        
        transactions[index] = { ...pos };
        
        router.push("/");
      

  }

  return { transactions, findBiggestIdInPositions, pushToId, puchNewToLast};
});

export const useEdditStore = defineStore("eddit", ()=>{
  interface Transaction {
    id: number;
    title: String;
    amount: number;
    type: String;
    category: String;
    date: Date;
  }
  const createPosition = (
    tid: number,
    title: string,
    amount: number,
    type: "expense"| "income",
    category: string
  ): Transaction => {
    return {
      id: tid,
      title: title,
      amount: amount,
      type: type,
      category: category,
      date: new Date(), // Initializes with the current date
    };
  };

  const selectedTransaction = ref<Transaction>(createPosition(-1, '', 0, "expense", ""))
  createNewTransactionObject()
  function createNewTransactionObject () {
    selectedTransaction.value = createPosition(-1, '', 0, "expense", "")
  }
  function cloneNewObject (trans:Transaction) {
    selectedTransaction.value = { ...trans }
  }
  return {selectedTransaction, createNewTransactionObject, cloneNewObject}
})
