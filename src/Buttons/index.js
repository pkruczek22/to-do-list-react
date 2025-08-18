import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    <div className="buttonsContainer">
        {tasks.length > 0 && (
            <>
                <button
                    onClick={toggleHideDone}
                    className="optionButton"
                    disabled={tasks.every(({ done }) => !done)}
                >
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </button>
                <button
                    className="optionButton"
                    disabled={tasks.every(({ done }) => done)}
                    onClick={setAllDone}
                >
                    Ukończ wszystkie
                </button>
            </>
        )}
    </div>
)

export default Buttons;