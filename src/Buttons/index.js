import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
    <div className="buttonsContainer">
        {tasks.length > 0 && (
            <>
                <button
                    className="optionButton"
                    disabled={tasks.every(({ done }) => !done)}>
                    {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
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