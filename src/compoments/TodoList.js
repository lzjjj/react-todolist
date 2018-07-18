import React, { Component } from 'react';

class TodoList extends Component {
  checkItem = (event, itemId) => {
    this.props.todoList.find(i => i.id == itemId).isComplete = event.target.checked
    this.props.checkItem(this.props.todoList)
  }
  editItem = (event) => {
    event.target.setAttribute("contentEditable", true);
    event.target.focus()
  }
  handOnKeyPress = (event, itemId) => {
    var keycode = (event.keyCode
      ? event.keyCode
      : event.which);
    if (keycode == '13') {
      event.target.setAttribute("contentEditable", false);
      this.props.todoList.find(element => element.id === itemId).content = event.target.innerText;
      this.props.checkItem(this.props.todoList)
    }
  }
  render() {
    return (
      <div >
        <ol>
          {
            this.props.todoList.map(i => {
              return (<li className={i.isComplete ? "checked" : ""} key={i.id} onDoubleClick={(e) => this.editItem(e)} onKeyPress={(e, itemId) => this.handOnKeyPress(e, i.id)}>
                <input name="done-todo" type="checkbox" className="done-todo" onChange={(event, id) => this.checkItem(event, i.id)} checked={i.isComplete?true:false}/>
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