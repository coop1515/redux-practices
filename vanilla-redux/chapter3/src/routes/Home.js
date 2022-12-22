import React, { useState } from "react";
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from "react-redux";

function reducer(currentState, action){
    if(currentState === undefined){
        return {
            number:1
        };
    }
    const newState = {...currentState};
    if(action.type === 'PLUS'){
        newState.number++;
    }
    return newState
}

const store = createStore(reducer);

export default function Home(){
    const [number,setNumber] = useState(1);
    
    // const reduxNumber = useSelector(number)

    return (
        <>
        <div>
            <h1>Root : {number}</h1>
            <Provider store= {store}> redux적용이 필요한 부분을 설정하는게 Provider
            <Left1 number={number}></Left1>
            <Right1 onIncrease={()=>{
                setNumber(number+1)
            }}></Right1>
            </Provider>
        </div>
        </>
    )
}

function Left1(props){
    return(
        <div>
            <h1>Left1 : {props.number}</h1>
            <Left2 number = {props.number}></Left2>
        </div>
    )
}

function Left2(props){
    return(
        <div>
            <h1>Left2 : {props.number}</h1>
            <Left3 number = {props.number}></Left3>
        </div>
    )
}
function Left3(props){
    return(
        <div>
            <h1>Left3 : {props.number}</h1>
        </div>
    )
}

function Right1(props){

    const number = useSelector((state) => state.number); //useSelector는 함수를 인자값을 받음.
   
    return(
        <div>
            <h1>Right1 : {number}</h1>
            <Right2 onIncrease = {props.onIncrease}></Right2>
        </div>
    )
}

function Right2(props){
    const number = useSelector((state) => state.number);
    return(
        <div>
            <h1>Right2 : {number}</h1>
            <Right3 number = {props.number} onIncrease = {props.onIncrease}></Right3>
        </div>
    )
}


function Right3(props){
    const number = useSelector((state) => state.number);

    const dispatch = useDispatch();
    return(
        <div>
            <h1>Right3 : {number}
                <button onClick={() => {
                        props.onIncrease()
                        }
                }>
                +
                </button>
                <button onClick={()=>{
                    dispatch({type:"PLUS"})
                }}>
                redux +     
                </button>
            </h1>
            
        </div>
    )
}



