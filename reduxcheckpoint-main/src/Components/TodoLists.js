import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";


const TodoLists = () => {
    
    const todos = useSelector (state => state.todoReducer.todos);
    const Filter =useSelector(state=> state.todoReducer.Filter)
    
    return ( 
        <div>{(
            ((Filter=='Done')? todos.filter(todo =>todo.isDone == true):(Filter == 'unDone'))? todos.filter(todo=>todo.isDone == false) :
                todos).map(todo => <Todo todo={todo} key={todo.id} />)}
        </div>
    ) 
}
export default TodoLists