import React, { useReducer, useState} from 'react'
import { Reducer } from './UseReducer';
import './App.css'

const initialState = [];


function App() {
 const [todo, dispatch] = useReducer(Reducer, initialState);
 
console.log(todo);

 
  return (
    <>
      <div>
      <h2>Todo List {todo.length}</h2>
      Add New Task: 
      <input type="text" onBlur={(e) => dispatch({type : "ADD_NAME", payload: e.target.value})} />

      <hr />
      {todo.map(todos => <li>{todos.name}</li>)}
       </div>
       
    </>
  )
}

export default App
