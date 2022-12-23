# Redux Practices on Vanilla & React
```
redux란? 
JS 라이브러리로 상태관리 라이브러리이다.
React-Redux로 유명하지만 React뿐 아니라 Vue, angular에서도 사용 가능하다.(다 사용가능함.)

setting
npx create-react-app (folder name) => 프로젝트 생성
```

1. Chapter1 - Vanilla &  Redux
```
1) Vanilla

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

let count = 0;

number.innerText = count;

const updateText = () =>{
    number.innerText = count;
 }

const handleAdd = () => {
    count = count + 1;
    updateText()
}

const handleminus = () => {
    count = count - 1;
    updateText()
}

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleminus);

2) Redux

import { createStore } from 'redux';

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const handleAdd = () => {
  countStore.dispatch({type:"ADD"})
}

const handleminus = () => {
  countStore.dispatch({type:"MINUS"})
}

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
  number.innerText = countStore.getState();
}
countStore.subscribe(onChange)

add.addEventListener("click", () => handleAdd())
minus.addEventListener("click", () => handleminus())

console.log(countStore.getState())
```
2. Chapter2 - ToDo (Vanilla & Redux)
```
1) Vanilla
단점 : 데이터 관리가 안됨.

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

 const createToDo = toDo => {
   const li = document.createElement("li");
   li.innerText = toDo;
   ul.appendChild(li);
 };

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
   createToDo(toDo);
}

form.addEventListener("submit", onSubmit);


2) Redux
import { createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO"
const DELETE_TODO = "DELETE_TODO"

const reducer = (state=[], action) => {
 switch(action.type){
    case ADD_TODO:
      // mutate state => state를 직접 변경하는것
      // return state.concat(action.text); // 이러한 방식이 mutation state로 좋지 않음.
      // return [...state, {text:action.text, id: Date.now()}] // 항상 새로운 array를 return 해야함. 
      // return [{text:action.text, id: Date.now()}, ...state] // 순서변경도 가능
      const newToDoObj = {text:action.text, id: Date.now()};
      return [newToDoObj, ...state]

    case DELETE_TODO:
      // return state.filter(toDo => toDo.id !== parseInt(action.id));
      const cleanArray = state.filter(toDo => toDo.id !== parseInt(action.id));
      return cleanArray
    default:
      return state

 } 
}
const store = createStore(reducer)

// store.subscribe(() => console.log(store.getState()))

const addToDo = (text) =>{
  return {type: ADD_TODO, text}
}

const deleteToDo = (id) => {
  return {type:DELETE_TODO, id}
}

const dispatchaddToDo = text =>{
  store.dispatch(addToDo(text));
}

const dispatchdeleteToDo = (e) =>{
  // console.log(e.target.parentNode.id)
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteToDo(id))
  // paintToDos()

}

const paintToDos = () =>{
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach(toDo => {
    const li = document.createElement("li");

    const btn = document.createElement("button");
    btn.innerText = "DEL"
    btn.addEventListener("click", dispatchdeleteToDo)

    li.id = toDo.id
    li.innerText = toDo.text;

    li.appendChild(btn);
    ul.appendChild(li)
  })
}

store.subscribe(paintToDos);

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  // store.dispatch({type: ADD_TODO, text: toDo});
  dispatchaddToDo(toDo);
  console.log(store.getState())
}

form.addEventListener("submit", onSubmit);


```
3. Chapter3 - React & Redux
```
index.js => App.js => Home.js 참조.
```
4. Chapter4 - Redux ToolKit
```
url : https://redux-toolkit.js.org/
```