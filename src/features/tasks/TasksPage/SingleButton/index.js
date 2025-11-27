import { useDispatch, useSelector } from "react-redux";
import ButtonBase from "../ButtonBase";
import { fetchExampleTasks, selectFetchExampleTasksState } from "../../tasksSlice";


const SingleButton = () => {
    const fetchExampleTasksState = useSelector(selectFetchExampleTasksState);
    const disabled = fetchExampleTasksState === "success" || fetchExampleTasksState === "error"

    const dispatch = useDispatch()

    return (
        <ButtonBase
            onClick={() => dispatch(fetchExampleTasks())}
            disabled={disabled}
        >
            {!fetchExampleTasksState && "Pobierz przykładowe zadania"}
            {fetchExampleTasksState === "loading" && "Pobieranie..."}
            {fetchExampleTasksState === "success" && "Pobrano przykładowe zadania ✔"}
            {fetchExampleTasksState === "done" && "Odśwież przykładowe zadania"}
            {fetchExampleTasksState === "error" && "Przykładowe zadania niedostępne"}
        </ButtonBase>
    )
};

export default SingleButton