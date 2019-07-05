import React, { Component } from "react";

import "./prosCons.css";

class ProsCons extends Component {
  constructor() {
    super();

    this.state = {
      proLeft: '',
      conLeft: '',
      proRight: '',
      conRight: ''
    };
  }

  handleInputs = (e) => {
    let { name, value } = e.target
    this.setState({[name] : value})
  }

  handleButton = (id, lr, data, pc) => {
    console.log('handle button' ,id,lr,data,pc)
    this.props.putRequest(id, lr, data, pc)
  }



  render() {
    console.log(this.props.currentItemLeft)
    let {proLeft, conLeft, proRight, conRight} = this.state
    let { currentItemLeft, currentItemRight } = this.props;
    console.log("this is in proscons", currentItemLeft, currentItemRight);
    return (
      <article className="full-pros-cons">
        <section className="left-pros-cons">
          <section className="left-pros">
            {"Pros"}
            {currentItemLeft.pros &&
              currentItemLeft.pros.map(obj => {
                return <li className="all-lists">{obj.description}</li>;
              })}
          </section>
          <section className="left-cons">
          {"Cons"}
            {currentItemLeft.cons &&
              currentItemLeft.cons.map(obj => {
                return <li className="all-lists">{obj.description}</li>;
              })}
          </section>
        </section>

        <section className="right-pros-cons">
          <ul className="right-pros">
            {"Pros"}
            
            {currentItemRight.pros &&
              currentItemRight.pros.map(obj => {
                return <li className="all-lists">{obj.description}</li>;
              })}
          </ul>
          <ul className="right-cons">
          {"Cons"}
            {currentItemRight.cons &&
              currentItemRight.cons.map(obj => {
                return <li className="all-lists">{obj.description}</li>;
              })}
          </ul>
        </section>

        <div className="left-foot">
          <input placeholder="...pro" name='proLeft' className='add-pro-input-left' onChange={this.handleInputs}/> 
          <button className='add-pro-left-button' onClick={() => this.handleButton(currentItemLeft.id, 'left', proLeft, 'pro')}  > Add</button>
          <input placeholder="...con" name='conLeft' className='add-pro-input-right' onChange={this.handleInputs}/> 
          <button className='add-pro-right-button' onClick={() => this.handleButton(currentItemLeft.id, 'left', conLeft, 'con')}> Add</button>
        </div>
        <div className="right-foot">
        <input placeholder="...pro" name='proRight' className='add-pro-input-left-2' onChange={this.handleInputs}/> 
          <button className='add-pro-left-button-2' onClick={() => this.handleButton(currentItemRight.id, 'right', proRight, 'pro')}> Add</button>

          <input placeholder="...con" name='conRight' className='add-pro-input-right-2' onChange={this.handleInputs}/> 
          <button className='add-pro-right-button-2' onClick={() => this.handleButton(currentItemRight.id, 'right', conRight, 'con')}> Add</button>
        </div>
      </article>
    );
  }
}

export default ProsCons;
