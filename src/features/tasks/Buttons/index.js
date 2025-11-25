import { selectIsTasksEmpty, selectIsEveryTaskDone, setAllDone, toggleHideDone, selectHideDone, selectIsAnyTaskDone } from "../tasksSlice";
import { ButtonsContainer, Button } from "./styled";
import { useDispatch, useSelector } from "react-redux";

const Buttons = () => {
    const hideDone = useSelector(selectHideDone);
    const isTasksEmpty = useSelector(selectIsTasksEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const isAnyTaskDone = useSelector(selectIsAnyTaskDone);

    const dispatch = useDispatch();

    return (
        <ButtonsContainer>
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