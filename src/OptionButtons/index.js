import "./style.css"

const OptionButtons = ({ tasks, hideDone }) => (
  <div className=" optionButtonsContainer">
    {tasks.length > 0 && (
      <>
        <button
          className="optionButton"
          disabled={!tasks.some(({ done }) => done)}
        >
          {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
        </button>
        <button
          className="optionButton"
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </button>
      </>
    )}
  </div>
);

export default OptionButtons;