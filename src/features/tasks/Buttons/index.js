import { ButtonsContainer, Button } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import {
    selectIsTasksEmpty,
    selectIsEveryTaskDone,
    setAllDone, toggleHideDone,
    selectHideDone,
    selectIsAnyTaskDone,
    fetchExampleTasks
} from "../tasksSlice";

const Buttons = () => {
    const hideDone = useSelector(selectHideDone);
    const isTasksEmpty = useSelector(selectIsTasksEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const isAnyTaskDone = useSelector(selectIsAnyTaskDone);

    const dispatch = useDispatch();

    return (
        <ButtonsContainer>
            <Button onClick={() => dispatch(fetchExampleTasks())}>
                Pobierz przykładowe zadania
            </Button>
            {!isTasksEmpty && (
                <>
                    <Button
                        onClick={() => dispatch(toggleHideDone())}
                        disabled={!isAnyTaskDone}
                    >
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </Button>
                    <Button
                        disabled={isEveryTaskDone}
                        onClick={() => dispatch(setAllDone())}
                    >
                        Ukończ wszystkie
                    </Button>
                </>
            )}
        </ButtonsContainer>
    )
}

export default Buttons;