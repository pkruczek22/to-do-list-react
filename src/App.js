import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import Author from "./features/author/AuthorPage";
import { Nav, NavList, StyledNavLink } from "./styled";

const App = () => (
  <BrowserRouter basename="/to-do-list-react">
    <Nav>
      <NavList>
        <li><StyledNavLink to="/zadania" >Zadania</StyledNavLink></li>
        <li><StyledNavLink to="/o-autorze">O autorze</StyledNavLink></li>
      </NavList>
    </Nav>
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