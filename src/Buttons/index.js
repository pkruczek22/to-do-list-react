import "./style.css";

const Buttons = ({ tasks, hideDone }) => (
    <div className="buttonsContainer">
        {tasks.length > 0 && (
            <>
                <button
                    className="optionButton"
                    disabled={tasks.every(({ done }) => !done)}>
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </button>
                <button
                    className="optionButton"
                    disabled={tasks.every(({ done }) => done)}>
                    Ukończ wszystkie
                </button>
            </>
        )}
    </div>
)

export default Buttons;