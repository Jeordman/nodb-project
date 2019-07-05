import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import List from "./components/List";
import Create from "./components/Create";
import CompareWindow from "./components/CompareWindow";
import ProsCons from "./components/ProsCons";

class App extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
      // add selectedItem1 and selectedItem2
      compareItemLeft: [],
      compareItemRight: [],
      currentItemRight: {},
      currentItemLeft: {}
      
    };

    this.putRequest = this.putRequest.bind(this);
  }
  componentDidMount() {
    axios
      .get("/api/list")
      .then(res => {
        this.setState({ list: res.data });
      })
      .catch(err => {
        console.log("error", err);
      });
  }

  putRequest(id, lr, data, pc) {
    if (lr === "left") {
    
      if (pc === "pro") {
        axios.put(`/api/list/pro/${id}`, { data }).then(res => {
          this.setState({
            list: res.data.list,
            currentItemLeft: res.data.item
          });
        });
      } else if (pc === "con") {
        axios.put(`/api/list/con/${id}`, { data }).then(res => {
          this.setState({
            list: res.data.list,
            currentItemLeft: res.data.item
          });
        });
      }
    }

    if (lr === "right") {
      console.log("eyyyyy", id, lr, data, pc);
      if (pc === "pro") {
        axios.put(`/api/list/pro/${id}`, { data }).then(res => {
          this.setState({
            list: res.data.list,
            currentItemRight: res.data.item
          });
        });
      } else if (pc === "con") {
        axios.put(`/api/list/con/${id}`, { data }).then(res => {
          this.setState({
            list: res.data.list,
            currentItemRight: res.data.item
          });
        });
      }
    }
  }

  updateList = newList => {
    this.setState({ list: newList });
  };

  selectItem = (id, side) => {
    console.log("hit selectItem function id:", id, "currentSide:", side);
    let currentObject = this.state.list.find(obj => obj.id === +id);
    this.setState({
      [side]: currentObject
    });
  };

  deleteItem = id => {
    axios
      .delete(`/api/list/${id}`)
      .then(res => {
        this.setState({ list: res.data });
      })
      .catch(err => console.log(`brkn`));
  };

  render() {
    return (
      <div className="App">
        <List
          listProp={this.state.list}
          selectItem={this.selectItem}
          deleteItem={this.deleteItem}
        />
        {/* pass props to list of selectedItem1 and selectedItem2 */}

        <div>
          <Create updateList={this.updateList} />
          <CompareWindow
            listProp={this.state.list}
            currentItemLeft={this.state.currentItemLeft}
            currentItemRight={this.state.currentItemRight}
            putRequest={this.putRequest}
          />
        </div>
      </div>
    );
  }
}

export default App;
