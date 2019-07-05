//create component that represents one box

//statefull.\
import React, { Component } from "react";
import axios from "axios";
import "./listObject.css";

class ListObject extends Component {
  constructor(props) {
    super(props);

    this.state = {
     
    };
  }


  render() {
    let {id, selectItem, side, deleteItem} = this.props
    return (

        <div className='left-bar-object'>
        <img width="100%" src={this.props.obj.img} />
        <section className='product-name'>{this.props.obj.name}</section>
        <button className='delete-button' onClick={() => {deleteItem(id)}}>Delete</button>
        <button className='switch-out-button' onClick={() => {selectItem(id, side)}}>Compare</button>
        {/* onClick needs to fire a function which updates state on App.js for selectedItem*/}
        </div>
    )
  }
}

export default ListObject;
