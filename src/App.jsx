import { useState } from 'react'
import Todolist from './Components/Todolist'
import './App.css'
import {v4 as uuidv4} from 'uuid'
function App() {
  
  const [input, setInput] = useState("")
  const [items, setItems] = useState([])



  const  handelSubmit = (e) => {

    e.preventDefault()
    
    
    setItems([...items, {id:uuidv4(), name:input}])
    
  }
  console.log(items);

const handelChange = (e) => {
  setInput(e.target.value)
}


  return (
    <div className='app'>
      
      <h1 >TO-DO_LIST</h1>
      <form onSubmit={handelSubmit}>
      <input value={input}  type='text' onChange={handelChange} placeholder='Enter a task' />
      <button className='btn'>Add</button>
     
      </form>
      <Todolist todos={items}
      setTodos={setItems} />
      </div> 

    
  )
}

export default App
