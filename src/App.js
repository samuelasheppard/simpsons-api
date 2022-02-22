import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import Loader from "./components/loader";
import Holder from "./components/holder";
import axios from "axios";
import logo from "./assets/simpsonLogo.png";

class App extends Component {
  componentDidMount() {
    this.getApi();
  }

  async getApi() {
    try {
      const url = "https://thesimpsonsquoteapi.glitch.me/quotes?count=10";
      const results = await axios.get(url);
      this.props.dispatch({ type: "STOREDATA", payload: results.data });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <>
        <header className="header">
          <img src={logo} />
          <h2>Using React Redux</h2>
          <input
            type="text"
            placeholder="Filter characters by name here..."
            onInput={(e) =>
              this.props.dispatch({ type: "GETINPUT", data: e.target.value })
            }
          />
        </header>

        <div>{this.props.simpsons === undefined ? <Loader /> : <Holder />}</div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    simpsons: state.simpsons,
    input: state.input,
  };
}

export default connect(mapStateToProps)(App);
