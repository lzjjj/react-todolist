import React, { Component } from 'react';

class TodoList extends Component {
  render() {
    return (
      <div >
        <ol>
          {
            this.props.todoList.map(i=>{
              return (<li className={i.isComplete?"checked":""}>
              <input name="done-todo"  type="checkbox" className="done-todo" />
              {i.content}
               </li>)
            })
          }
          {/* <li className="checked">
            <input name="done-todo"  type="checkbox" className="done-todo" />
            FDGDJFKLGJ
             </li>
             <li className="checked">
            <input name="done-todo"  type="checkbox" className="done-todo" />
            FDGDJFKLGJ
             </li>
             <li className="checked">
            <input name="done-todo"  type="checkbox" className="done-todo" />
            FDGDJFKLGJ
             </li> */}
        </ol>
      </div>
    );
  }
}

export default TodoList;