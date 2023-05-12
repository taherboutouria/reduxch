import React, {useState} from 'react'
import { useDispatch } from "react-redux";
import { DeleteTodo, ToggleTodo, UpdateTodo } from "../Redux/TodoSlice";


  const Todo = ({todo} ) => {
  const [isEdited, setIsEdited] = useState (false);
   const dispatch = useDispatch();
  const [updatedtask, setUpdatedTask] = useState ("");
  return ( 
  <div key={todo.id} style = {{display :"flex" ,  gap: "15px" , alignItems:"space-around"}}> 
  {isEdited ?( 
  <input onChange= {(e)=> setUpdatedTask(e.target.value)}  />) : (
     <h3 style={{width:"300px" ,textDecoration: todo.isDone ? "line-through" : "" }}> {todo.task} </h3>
  )}
     
     <button onClick={()=> dispatch(DeleteTodo(todo.id))} style={{margin: '10px'}}  variant="danger">Delete</button>
     <button onClick={()=> dispatch(ToggleTodo(todo.id))} style={{margin: '10px'}} variant="dark">UnDone</button>
     <button onClick={()=> {setIsEdited(!isEdited);
     setUpdatedTask(todo.task);
     isEdited && dispatch(UpdateTodo({id:todo.id,task: updatedtask}))
  }} 
     style={{margin: '10px'}}
      variant="primary">UpDate</button>
      <hr/>
 
  </div> )
   }
    

export default Todo