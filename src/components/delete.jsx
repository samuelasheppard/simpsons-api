import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css";

class Delete extends Component {
  render() {
    return (
      <button
        className={this.props.direction}
        onClick={() =>
          this.props.dispatch({ type: "DELETE", index: this.props.index })
        }
      >
        X
      </button>
    );
  }
}

function mapsStateToProps(state) {
  return { simpsons: state.simpsons };
}

export default connect(mapsStateToProps)(Delete);
