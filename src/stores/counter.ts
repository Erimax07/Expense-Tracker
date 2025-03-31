import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const usePositionsStore = defineStore("positions", () => {
  interface Position {
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
  ): Position => {
    return {
      id: tid,
      title: title,
      amount: amount,
      type: type,
      category: category,
      date: new Date(), // Initializes with the current date
    };
  };
  let idCount = 6;
  const positions = ref<Position[]>([
    createPosition(1, "Software Engineer", 5000, "income", "Tech"),
    createPosition(2, "Project Manager", 7000, "income", "Management"),
    createPosition(3, "UX Designer", 4500, "expense", "Design"),
    createPosition(4, "Data Scientist", 6000, "income", "Analytics"),
    createPosition(5, "Marketing Specialist", 4000, "expense", "Marketing"),
  ]);
  
console.log(positions);

  function addPosition(
    title: string,
    amount: number,
    type: "expense"| "income",
    category: string
  ){
    positions.value[positions.value.length] = createPosition(idCount, title, amount, type, category)
    idCount++
  }

  return { positions };
});
