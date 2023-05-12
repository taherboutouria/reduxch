import { createSlice }  from "@reduxjs/toolkit";


const TodoSlice = createSlice ({
    name: 'todo',
    initialState:{
        todos : [{
            id:Math.random (),
            task: 'Learn React',
            isDone: false
        }],
        Filter:'All'
    },
    reducers: {
        AddTodos :(state,action)=> {
            state.todos.push(action.payload)
        },
        DeleteTodo : (state,action) => {
            state.todos = state.todos.filter(el=> el.id !== action.payload)
        },
        ToggleTodo :(state,{type,payload}) => {
         state.todos.map(el=> (el.id == payload)? el.isDone = !el.isDone : el.isDone)
        },
        UpdateTodo :(state,{type,payload})=> {
            state.todos.map(el=>(el.id == payload.id)? el.task = payload.task : el )
        },
        FilterbyDone:(state)=>{ state.Filter='Done'

        },
        FilterbyunDone:(state)=>{ state.Filter='unDone'
        },
        FilterbyAll:(state)=>{ state.Filter='All'
        }
    }
})
export default TodoSlice.reducer
export const {AddTodos,DeleteTodo,ToggleTodo,UpdateTodo,FilterbyDone,FilterbyAll,FilterbyunDone } = TodoSlice.actions