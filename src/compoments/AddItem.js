import React, { Component } from 'react';

class AddItem extends Component {
    constructor(){
        super();
        this.state={
            inputValue:""
        }
    }
    addItem=()=>{
        if(this.state.inputValue){
            this.props.addToDoList(this.state.inputValue)
            this.setState({
                inputValue:""
            })
        } else{
            alert("添加todo不能为空")
        }
        
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
        <input className="input-text" type="text" value={this.state.inputValue} onChange={(e)=>this.changeInputValue(e)} />
        <div className="button" onClick={()=>this.addItem()}>Add</div>
      </div>
    );
  }
}

export default AddItem;