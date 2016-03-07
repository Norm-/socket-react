import React, { Component } from "react";
import FA from "./FA";
import Live from "./Live";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: null,
      stats: null,
    };
  }

  componentDidMount() {
    const socket = io.connect(this.props.url);
    // socket.on("stats", this.setState.bind(this));
    socket.on("stats", this.setState.bind(this));
    // socket.on("inc", this.setState.bind(this));
  }

  render() {
    return (
    <div>
      <FA />
      <Live stats={this.state.stats}/>
    </div>
    );
  }
}

export default App;
