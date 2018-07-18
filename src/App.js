import React, { Component } from 'react';
import './App.css';
import TodoList from "./compoments/TodoList"
import AddItem from './compoments/AddItem';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todoList: [],
      status: "all"
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
    todoList.push({ isComplete: false, content: e, id: this.generateUUID() })
    this.setState({
      todoList
    })
    console.log(todoList)
  }
  checkItem = (e) => {
    this.setState({
      todoList: e
    })

  }
  showTodoList = (statusType) => {
    let list = this.state.todoList
    let type = this.state.status
    if (statusType) {
      type = statusType
    }
    if (type === "complete") {
      list = list.filter(i => i.isComplete == true)
    } else if (type === "active") {
      list = list.filter(i => i.isComplete == false)
    }
    return list
  }
  changeStatus = (type) => {
    this.setState({
      status: type
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
          <TodoList todoList={this.showTodoList(this.state.status)} checkItem={(e) => this.checkItem(e)} />
          <div>
            <ul className="filters">
              <li>
                <a href="#" data-filter="all" className="selected"
                  onClick={()=>this.changeStatus('all')}>ALL</a>
              </li>
              <li>
                <a href="#" data-filter="active" className="selected"
                  onClick={()=>this.changeStatus('active')}>Active</a>
              </li>
              <li>
                <a href="#" data-filter="complete" className="selected"
                  onClick={()=>this.changeStatus('complete')}>Complete</a>
              </li>
            </ul>
          </div >
        </div >

      </div >
    );
  }
}

export default App;
