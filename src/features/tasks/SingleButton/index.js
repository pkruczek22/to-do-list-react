import { useDispatch } from "react-redux";
import ButtonBase from "../ButtonBase";
import { fetchExampleTasks } from "../tasksSlice";


const SingleButton = () => {
    const dispatch = useDispatch()

    return (
        <ButtonBase onClick={() => dispatch(fetchExampleTasks())}>
            Pobierz przykładowe zadania
        </ButtonBase>)

}

export default SingleButton