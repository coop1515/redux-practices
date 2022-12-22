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
// const createToDo = toDo => {
//   const li = document.createElement("li");
//   li.innerText = toDo;
//   ul.appendChild(li);
// };

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
  // createToDo(toDo);
  // store.dispatch({type: ADD_TODO, text: toDo});
  dispatchaddToDo(toDo);
  // paintToDos();
  console.log(store.getState())
}

form.addEventListener("submit", onSubmit);

