import React, { Component } from "react";
import axios from "axios";
import "./compareWindow.css";
import ProsCons from "./ProsCons";

class CompareWindow extends Component {
  

  render() {
    console.log('hit pros cons window', this.props)

    let { listProp, currentItemLeft, currentItemRight } = this.props
    
    return (
      <div>
        <section className="compare-window-holder">
          <section className="compare-left">
            <img className='img-all' width="70%" src={currentItemLeft.img} />
            <section className='name-title' >{currentItemLeft.name} </section>
          </section>
          <section className="compare-right">
            {" "}
            <img className='img-all' width="70%" src={currentItemRight.img} />
            <article className='name-title' >{currentItemRight.name}</article>
          </section>
        </section>

        <ProsCons currentItemLeft={currentItemLeft} currentItemRight={currentItemRight} putRequest={this.props.putRequest}/>
      </div>
    );
  }
}

export default CompareWindow;
