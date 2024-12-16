import React, { useReducer} from 'react'
import { Reducer } from './UseReducer';
import './App.css'

const initialState = [];


function App() {
  const [todo, dispatch] = useReducer(Reducer, initialState);
 
// console.log(todo);
const handleDelete = (id) => {
  
  dispatch({type: 'DELETE_NAME', payload: id})
}

  return (
    <>
      <div>
      <h2>Todo List {todo.length}</h2>
      Add New Task: 
      <input type="text" onBlur={(e) => dispatch({type : "ADD_NAME", payload: e.target.value})} />

      <hr />
      {todo.map(todos => <li key={todos.id}>{todos.name} <button onClick={()=> dispatch({type: "DELETE_NAME", payload:todos.id})}>Delete</button></li>)}
       </div>
       
    </>
  )
}

export default App
