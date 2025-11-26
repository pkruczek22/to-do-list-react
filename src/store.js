import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./features/tasks/tasksSlice";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./features/tasks/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware]

const store = configureStore({
    reducer: {
        tasks: tasksReducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(middleware)
});

sagaMiddleware.run(rootSaga);

export default store;