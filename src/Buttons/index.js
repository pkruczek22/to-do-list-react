import { ButtonsContainer, Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    <ButtonsContainer>
        {tasks.length > 0 && (
            <>
                <Button
                    onClick={toggleHideDone}
                    disabled={tasks.every(({ done }) => !done)}
                >
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </Button>
                <Button
                    disabled={tasks.every(({ done }) => done)}
                    onClick={setAllDone}
                >
                    Ukończ wszystkie
                </Button>
            </>
        )}
    </ButtonsContainer>
)

export default Buttons;