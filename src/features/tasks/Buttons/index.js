import { ButtonsContainer} from "./styled";
import { useDispatch, useSelector } from "react-redux";
import ButtonBase from "../ButtonBase";
import {
    selectIsTasksEmpty,
    selectIsEveryTaskDone,
    setAllDone, toggleHideDone,
    selectHideDone,
    selectIsAnyTaskDone
} from "../tasksSlice";

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
                    <ButtonBase
                        onClick={() => dispatch(toggleHideDone())}
                        disabled={!isAnyTaskDone}
                    >
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </ButtonBase>
                    <ButtonBase
                        disabled={isEveryTaskDone}
                        onClick={() => dispatch(setAllDone())}
                    >
                        Ukończ wszystkie
                    </ButtonBase>
                </>
            )}
        </ButtonsContainer>
    )
}

export default Buttons;