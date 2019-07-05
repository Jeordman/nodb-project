import React, { Component } from "react";
import axios from 'axios'
import "./create.css";

class Create extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
      name: '',
      img: ''
    };

  }

  componentDidMount() {
    axios
      .get("/api/list")
      .then(res => {
        this.setState({ list: res.data });
        console.log("hit");
        console.log(this.state.list)
      })
      .catch(err => {
        console.log("error", err);
      });
  }

  handleInputs = (e) => {
    let { name, value } =  e.target
    this.setState({[name] : value})
    console.log(value)
  }

  buttonPress = () =>{
    const {name, img} = this.state
    console.log(name,img)
    axios.post("/api/list", {name, img}).then(res => {
      this.props.updateList(res.data)
    })
  }
  render() {
    const { name, img } = this.state
    return (
      <div>
        <section className="create-box">
        <head className='create-box-header'>ADD TO LIST</head>
          <input placeholder='...name' className='name-input' name='name' value={name} onChange={(e) => this.handleInputs(e)}/>
          <input placeholder='...img url' className='image-url-input' name='img' value={img} onChange={(e) => this.handleInputs(e)}/>
          <button className='add-button' onClick={this.buttonPress}>Add</button>
        </section>
      </div>
    );
  }
}

export default Create;
