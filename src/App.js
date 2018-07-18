import React, { Component } from 'react';
import './App.css';
import TodoList from "./compoments/TodoList"
import AddItem from './compoments/AddItem';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todoList: []
    }
  }
  generateUUID = () => {
    /*jshint bitwise:false */
    var i,
      random;
    var uuid = '';

    for (i = 0; i < 32; i++) {
      random = Math.random() * 16 | 0;
      if (i === 8 || i === 12 || i === 16 || i === 20) {
        uuid += '-';
      }
      uuid += (i === 12
        ? 4
        : (i === 16
          ? (random & 3 | 8)
          : random)).toString(16);
    }
    return uuid;
  }
  addToDoList = (e) => {
    let todoList = this.state.todoList
    todoList.push({ isComplete: false, content: e, id:this.generateUUID()})
    this.setState({
      todoList
    })
    console.log(todoList)
  }
  checkItem=(e)=>{
    this.setState({
      todoList:e
    })
    
  }
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
          <AddItem addToDoList={(e) => this.addToDoList(e)} />
          <TodoList todoList={this.state.todoList} checkItem={(e)=>this.checkItem(e)}/>

        </div>

      </div>
    );
  }
}

export default App;
