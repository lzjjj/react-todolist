import React, { Component } from 'react';
import './App.css';
import TodoList from "./compoments/TodoList"

class App extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <h2>Jquery To Do List</h2>
          <p>
            <em>Simple Todo List with adding and filter by diff status.</em>
          </p>
        </div>
        <div >
          <div>
            <input class="input-text" type="text" name="ListItem" />
            <div className="button" onclick="addItem()">Add</div>
          </div>
          <TodoList />

        </div>

      </div>
    );
  }
}

export default App;
