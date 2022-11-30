import React from 'react'
import '../App.css'
function Todolist({todos, setTodos}) {
    const handelDelete = ({id}) => {
        console.log(id);
        setTodos(todos.filter((todo) => todo.id !== id))
    }
  return (
    <div className='todolist'>
        <ul>
            <li>{todos.map((item,index)=>(
                <div className='todos' key={index}>

                    {item.name}
                    <button className='btn-submit' onClick={()=>handelDelete(item)}>Done</button>
                    
                </div>
            ))}</li>

            {/* }}</li> */}
        </ul>
        
    </div>
  )
}

export default Todolist