import React, { useState } from 'react';
import { Form} from "react-bootstrap";
import {useDispatch} from 'react-redux';
import {AddTodos} from '../Redux/TodoSlice';


const Addtask = () => {
  const [newTask,setNewTask] =useState('')
    const dispatch= useDispatch ()

    const Adding =() =>{
        dispatch(AddTodos({id:Math.random(),
        task: newTask,
        isDone:false
        }))
        setNewTask ('')
    }
  return (
    <div style= {{display:'flex' ,justifyContent:'center' , gap:'15px' , margin:'20px 0px'}}>
        <Form.Control
        value={newTask}
        onChange={(e)=> setNewTask(e.target.value)}
        style={{width:'300px'}}
        type="text"
        aria-describedby="textHelpBlock"
        />
        <button onClick ={Adding} variant="success">ADD</button>
    </div>
  )
}

export default Addtask