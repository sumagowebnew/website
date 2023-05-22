import React, { Component } from "react";
import Card from "./Card";
import photo1 from "./image/SUMAGO.PNG";

class Wheel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      radius: 250,
      cards: [],
      theta: 0.0,
    };
    this.temp_theta = 0.0;
    this.anim_id = null;
  }

  componentDidMount() {
    const wheelElement = this.Wheel;
    const wheelStyle = getComputedStyle(wheelElement);
    const center_of_wheel = {
      x: parseFloat(wheelStyle.width) / 2.0,
      y: parseFloat(wheelStyle.height) / 2.0,
    };

    let new_cards = [];
    for (let i = 0; i < 10; i++) { // Update the loop to generate only 4 cards
      new_cards.push(
        <Card
          key={i} // Add a unique key prop to avoid React warning
          theta={(Math.PI / 5.0) * i}
          radius={this.state.radius}
          center={center_of_wheel}
        />
      );
    }

    this.setState({ cards: new_cards });
  }

  handle_scroll = (event) => {
    clearTimeout(this.anim_id);
    this.temp_theta = event.deltaY;

    this.Wheel.style.transform = `translate(-50%, -50%) rotate(${this.temp_theta * 0.07}deg)`;
    this.setState({ theta: this.temp_theta });
    this.anim_id = setTimeout(() => {
      this.setState({ theta: this.temp_theta });
    }, 150);

    // Set the background image for the red circle based on the isOuter flag
    const backgroundImage = this.state.theta === 0 ? `url(${photo1})` : '';
    this.Wheel.style.backgroundImage = backgroundImage;
  };

  render() {
    return (
      <div
        onWheel={this.handle_scroll}
        ref={(ref_id) => (this.Wheel = ref_id)}
        style={styles.Wheel}
      >
        {this.state.cards}
      </div>
    );
  }
}

const styles = {
  Wheel: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    height: "300px",
    width: "300px",
    backgroundColor: "transparent",
    borderRadius: "150px",
  },
};

export default Wheel;
