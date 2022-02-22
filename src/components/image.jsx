import React from "react";

class Image extends React.Component {
  render() {
    return (
      <>
        <img
          src={this.props.img}
          className={this.props.direction.toLowerCase()}
          alt={this.props.name}
        />
      </>
    );
  }
}

export default Image;
