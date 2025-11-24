import { selectTasks, setAllDone, toggleHideDone } from "../tasksSlice";
import { ButtonsContainer, Button } from "./styled";
import { useDispatch, useSelector } from "react-redux";

const Buttons = () => {
    const { tasks, hideDone } = useSelector(selectTasks);

    const dispatch = useDispatch();

    return (
        <ButtonsContainer>
            {tasks.length > 0 && (
                <>
                    <Button
                        onClick={() => dispatch(toggleHideDone())}
                        disabled={tasks.every(({ done }) => !done)}
                    >
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </Button>
                    <Button
                        disabled={tasks.every(({ done }) => done)}
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