import { call, delay, put, select, takeEvery, takeLatest } from "redux-saga/effects";
import { fetchExampleTasks, selectTasks, setFetchExempleTasksState, setTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";


function* fetchExampleTasksHandler () {
    try {
        yield put(setFetchExempleTasksState("loading"));
        const exampleTasks = yield call(getExampleTasks);
        yield delay(2000);
        yield put(setTasks(exampleTasks));
        yield put(setFetchExempleTasksState("success"));
        yield delay (2000);
        yield put(setFetchExempleTasksState("done"))
    } catch (error) {
        yield put(setFetchExempleTasksState("error"))
    };
};

function* saveTasksInLocalStorageHandler () {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
}


export default function* tasksSaga () {
    console.log("Saga jest podłączona!")
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
};