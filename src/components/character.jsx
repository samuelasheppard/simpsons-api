import React from "react";

class Character extends React.Component {
  render() {
    return <h3>{this.props.name}</h3>;
  }
}

export default Character;
