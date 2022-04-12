import React, { Component } from "react";
import Circle from "./components/Circle";
import Button from "./components/Button";
import { circles } from "./components/circles";
import Gameover from "./components/Gameover";
import "./index.css";

const getRndInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}; //function to get a random integer

class App extends Component {
  state = {
    score: 0,
    current: 0,
  };

  timer = undefined; // set global variable for setTimeout

  clickHandler = () => {
    console.log("clickHandler, circle number:", i);
    this.setState({
      score: this.state.score + 1,
    });
  };

  nextCircle = () => {
    // loop to check for new state calling current, to compare what numbers we have and what is the next one, one number cannot be there twice
    let nextActive;
    do {
      nextActive = getRndInt(0, 3); // because we use indexes now
    } while (nextActive === this.state.current); //until next active is not equal current, it will be looking for next one
    this.setState({
      current: nextActive,
    });
    console.log("active circle is:", this.state.current);

    this.timer = setTimeout(this.nextCircle, 1000);
  };

  startHandler = () => {
    this.nextCircle();
  };

  stopHandler = () => {
    clearTimeout(this.timer);
  };

  render() {
    return (
      <div>
        <section>
          <h1>Catch me! If you can...</h1>
          <div className="game">
            <h2>Your score is: {this.state.score}</h2>
            <div className="circles">
              {circles.map((_, i) => (
                <Circle key={i} id={i} click={() => this.clickHandler(i)} />
              ))}
            </div>
            <div>
              <Button click={this.startHandler}>Start</Button>
              <Button click={this.stopHandler}>Stop</Button>
            </div>
            <Gameover />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
