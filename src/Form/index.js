import "./style.css";

const Form = () => (
  <form className="form js-form">
    <input type="text"
      className="form__taskInput"
      placeholder="Co jest do zrobienia?"
    />
    <button className="form__button">Dodaj zadanie</button>
  </form>
)

export default Form;