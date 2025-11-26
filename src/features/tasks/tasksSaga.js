import { call, put, select, takeEvery, takeLatest } from "redux-saga/effects";
import { fetchExampleTasks, selectTasks, setTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler () {
    try {
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
    } catch (error) {
        yield call(alert, "Coś poszło nie tak");
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