import { BrowserRouter, NavLink, Redirect, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import Author from "./features/author/AuthorPage";

const App = () => (
  <BrowserRouter basename="/to-do-list-react">
    <nav>
      <ul>
        <li><NavLink to="/zadania" >Zadania</NavLink></li>
        <li><NavLink to="/o-autorze">O autorze</NavLink></li>
      </ul>
    </nav>
    <Switch>
      <Route path="/zadania/:id" >
        <TaskPage />
      </Route>
      <Route path="/zadania" >
        <TasksPage />
      </Route>
      <Route path="/o-autorze">
        <Author />
      </Route>
      <Route path="/">
        <Redirect to="/zadania" />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;