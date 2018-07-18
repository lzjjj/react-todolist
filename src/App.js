import React, { Component } from 'react';
import './App.css';
import TodoList from "./compoments/TodoList"
import AddItem from './compoments/AddItem';

class App extends Component {
  constructor(){
    super()
    this.state={
      todoList : []
    }
  }
  addToDoList=(e)=>{
    let todoList = this.state.todoList
    todoList.push({isComplete:false,content:e})
    this.setState({
      todoList
    })
    console.log(todoList)
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
          <AddItem addToDoList={(e)=>this.addToDoList(e)}/>
          <TodoList todoList={this.state.todoList}/>

        </div>

      </div>
    );
  }
}

export default App;
