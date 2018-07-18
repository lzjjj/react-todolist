import React, { Component } from 'react';

class AddItem extends Component {
    constructor(){
        super();
        this.state={
            inputValue:""
        }
    }
    addItem=()=>{
        this.props.addToDoList(this.state.inputValue)
    }
    changeInputValue=(e)=>{
        let inputValue = e.target.value;
        this.setState({
            inputValue
        })
        
    }
  render() {
   
    return (
        <div>
        <input className="input-text" type="text" onChange={(e)=>this.changeInputValue(e)} />
        <div className="button" onClick={()=>this.addItem()}>Add</div>
      </div>
    );
  }
}

export default AddItem;