import React from "react"
import "./style.css"

const OptionButtons = ({ tasks, hideDoneTasks }) => (
  <div className=" optionButtonsContainer">
    {tasks.length > 0 && (
      <React.Fragment>
        <button
          className="optionButton"
          disabled={!tasks.some(({ done }) => done)}
        >
          {hideDoneTasks ? "Pokaż ukończone" : "Ukryj ukończone"}
        </button>
        <button
          className="optionButton"
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </button>
      </React.Fragment>
    )}
  </div>

);

export default OptionButtons;