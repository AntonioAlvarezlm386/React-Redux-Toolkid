import {configureStore} from '@reduxjs/toolkit'
import taskReducer from '../features/task/taskSlice'


//Nos agrupa los diferentes arhivos donde se guardan los estados
export const store = configureStore({
    reducer: {
        tasks: taskReducer
    }
})