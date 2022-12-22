
import { createStore } from 'redux';

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// let count = 0;

// // number.innerText = count;

// const updateText = () =>{
//   number.innerText = count;
// }

const handleAdd = () => {
  // count = count + 1;
  countStore.dispatch({type:"ADD"})
  // updateText()
}

const handleminus = () => {
  // count = count - 1;
  countStore.dispatch({type:"MINUS"})

  // updateText()
}

// add.addEventListener("click", handleAdd);
// minus.addEventListener("click", handleminus);

const ADD = "ADD";
const MINUS = "MINUS";


const countModifier = (count = 0, action) => {
  
  // if (action.type ==="ADD"){
  //   return count + 1;
  // } else if(action.type === "MINUS"){
  //   return count - 1;
  // } else {
  //   return 0;
  // }
  // if 문도 사용해도 되지만 switch문을 선호
  switch(action.type){
    case ADD : // "ADD" 처럼 문자열을 쓰면 오타 등 문제때문에 변수화 해놓는게 좋음.
      return count + 1
    case MINUS:
      return count - 1;
    default:
      return 0;
  }

  return count
};

const countStore = createStore(countModifier);

const onChange = () => {
  // console.log(countStore.getState())
  number.innerText = countStore.getState();
}
countStore.subscribe(onChange)
// countStore.dispatch({type: "MINUS"})
// countStore.dispatch({type: "MINUS"})
// countStore.dispatch({type: "MINUS"})
// countStore.dispatch({type: "MINUS"})

add.addEventListener("click", () => handleAdd())
minus.addEventListener("click", () => handleminus())

console.log(countStore.getState())

