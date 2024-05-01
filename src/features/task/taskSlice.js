import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: "1",
        title: "task1",
        description: "task1 desc"
    },
    {
        id: "2",
        title: "task2",
        description: "task2 desc"
    }
]

export const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload)
        },
        deleteTask: (state, action) => {
            const foundTask = state.find(task => task.id === action.payload)
            if(foundTask) {
                state.splice(state.indexOf(foundTask, 1))
            }
        }
    }
})

export const {addTask, deleteTask} = taskSlice.actions

//exportamos los reducers
export default taskSlice.reducer