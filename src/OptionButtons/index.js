import "./style.css"

const OptionButtons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  <div className=" optionButtonsContainer">
    {tasks.length > 0 && (
      <>
        <button
          className="optionButton"
          disabled={!tasks.some(({ done }) => done)}
          onClick={toggleHideDone}
        >
          {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
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
);

export default OptionButtons;