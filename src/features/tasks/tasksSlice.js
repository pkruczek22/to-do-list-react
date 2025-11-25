import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [],
        hideDone: false
    },
    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            if (task.content) tasks.push(task);
        },
        removeTask: (state, {payload : taskId}) => {
            const index = state.tasks.findIndex(task => task.id === taskId);
            state.tasks.splice(index, 1);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: (state, {payload: taskId}) => {
            const index = state.tasks.findIndex(task => task.id === taskId);
            state.tasks[index].done = !state.tasks[index].done;
        },
        setAllDone: (state) => {
            state.tasks.map(task => task.done = true);
        }
    }
}
);

export const { addTask, removeTask, toggleHideDone, toggleTaskDone, setAllDone } = tasksSlice.actions;
export const selectTasksState = ({ tasks }) => tasks;

export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectIsTasksEmpty = state => selectTasks(state).length === 0;
export const selectIsEveryTaskDone = state => selectTasks(state).every(task => task.done);
export const selectIsAnyTaskDone = state => selectTasks(state).some(task => task.done)
export default tasksSlice.reducer;