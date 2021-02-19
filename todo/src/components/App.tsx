import React from "react";
import TodoContext from "../contexts/TodoContext";
import NavBar from "./NavBar";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <TodoContext>
      <Router>
        <NavBar></NavBar>
        <br />
        <div className="uk-container">
          <Switch>
            <Route path="/create">
              <AddTodo></AddTodo>
            </Route>
            <Route path="/">
              <TodoList></TodoList>
            </Route>
          </Switch>
        </div>
      </Router>
    </TodoContext>
  );
};

export default App;
