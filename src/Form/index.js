import "./style.css"

const Form = (props) => (
    <form className="form">
    <input className="form__newTask" placeholder="Co jest do zrobienia?" required autoFocus />
    <button className="form__button">Dodaj zadanie</button>
 </form>
);

export default Form;