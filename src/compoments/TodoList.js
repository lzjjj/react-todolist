import React, { Component } from 'react';

class TodoList extends Component {
  checkItem=(event,itemId)=>{
    this.props.todoList.find(i=>i.id==itemId).isComplete = event.target.checked
    this.props.checkItem(this.props.todoList)
  }
  render() {
    return (
      <div >
        <ol>
          {
            this.props.todoList.map(i=>{
              return (<li className={i.isComplete?"checked":""} key={i.id}>
              <input name="done-todo"  type="checkbox" className="done-todo" onChange={(event,id)=>this.checkItem(event,i.id)}/>
              {i.content}
               </li>)
            })
          }
        </ol>
      </div>
    );
  }
}

export default TodoList;