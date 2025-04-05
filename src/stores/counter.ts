import { ref, computed } from "vue";
import { defineStore } from "pinia";
import type { RefSymbol } from "@vue/reactivity";
import router from "@/router";
import type { forEachChild } from "typescript";

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

  const localPosition = ref<Position>(setLocalNull());

  function setLocalNull (): Position {
    return createPosition(-1, "", 0, "income", "")
  }
  function pushNewToPositions () {
    localPosition.value.id = findBiggestIdInPositions()+1
    positions.value[positions.value.length] = localPosition.value
    resetlocal()
  }

  function findBiggestIdInPositions (): number {
    let biggestId = -1;
    positions.value.forEach(element => {
      if(biggestId < element.id){
        biggestId = element.id
      } 
    });
    return biggestId
  }
    
  function resetlocal(){
    localPosition.value = setLocalNull();
  }


  function pushToId(id:number) {
    let index:number = -1
    index = positions.value.findIndex((pos:Position) => {
      return pos.id == id
    }
      );

      if(index == -1) return
      if (true) {
        console.log(index);
        
        positions.value[index] = localPosition.value;
        resetlocal()
        router.push("/");
      } else {
        console.warn("Position not found for ID:", index);
      }

  }

  
  function setEdditData(id:number){

    const found = positions.value.find((pos) => pos.id === id);
  if (found) {
    localPosition.value = found;
    router.push('/EdditPosition')
  } else {
    console.warn("Position not found for ID:", id);
  }
  }

  
console.log(positions);



  return { positions, localPosition, pushNewToPositions, setLocalNull, setEdditData, pushToId, resetlocal };
});
