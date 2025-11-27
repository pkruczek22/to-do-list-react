import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: getTasksFromLocalStorage(),
        hideDone: false,
        fetchExampleTasksState: undefined
    },
    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            if (task.content) tasks.push(task);
        },
        removeTask: (state, { payload: taskId }) => {
            const index = state.tasks.findIndex(task => task.id === taskId);
            state.tasks.splice(index, 1);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: (state, { payload: taskId }) => {
            const index = state.tasks.findIndex(task => task.id === taskId);
            state.tasks[index].done = !state.tasks[index].done;
        },
        setAllDone: (state) => {
            state.tasks.map(task => task.done = true);
        },
        fetchExampleTasks: () => { },
        setFetchExempleTasksState: (state, { payload: newState }) => {
            state.fetchExampleTasksState = newState;
        },
        setTasks: (state, { payload: tasks }) => {
            state.tasks = tasks;
        }
    }
}
);

export const {
    addTask,
    removeTask,
    toggleHideDone,
    toggleTaskDone,
    setAllDone,
    fetchExampleTasks,
    setFetchExempleTasksState,
    setTasks } = tasksSlice.actions;
export const selectTasksState = ({ tasks }) => tasks;

export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectIsTasksEmpty = state => selectTasks(state).length === 0;
export const selectIsEveryTaskDone = state => selectTasks(state).every(task => task.done);
export const selectIsAnyTaskDone = state => selectTasks(state).some(task => task.done);
export const selectFetchExampleTasksState = state => selectTasksState(state).fetchExampleTasksState;

export const getTaskById = (state, taskId) =>
    selectTasks(state).find(task => task.id === taskId);

export const selectTasksByQuery = (state, query) => {
    const tasks = selectTasks(state);

    if ( !query || query.trim() === "") {
        return tasks;
    };

    return tasks.filter(task => task.content.toLowerCase().includes(query.trim().toLowerCase()));
}

export default tasksSlice.reducer;