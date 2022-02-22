import React from "react";
import Character from "./character";
import Quote from "./quote";
import Image from "./image";
import Delete from "./delete";
import "../App.css";
import { connect } from "react-redux";

class Holder extends React.Component {
  loop = () => {
    const data = this.props.filtered
      ? this.props.filtered
      : this.props.simpsons;
    return data.map((char, index) => {
      return (
        <div key={index} className="holder">
          <Character name={char.character} />
          <Quote quote={char.quote} />
          <Image
            img={char.image}
            direction={char.characterDirection}
            name={char.character}
          />
          <Delete index={index} direction={char.characterDirection} />
        </div>
      );
    });
  };
  render() {
    return <>{this.loop()}</>;
  }
}

function mapStateToProps(state) {
  return { simpsons: state.simpsons, filtered: state.filtered };
}

export default connect(mapStateToProps)(Holder);
