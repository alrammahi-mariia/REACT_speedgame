import React, { Component } from "react";
import Circle from "./components/Circle";
import Button from "./components/Button";
import { circles } from "./components/circles";
import Gameover from "./components/Gameover";
import "./index.css";

import startMusic from "./assets/sounds/space_cats.mp3";
import stopMusic from "./assets/sounds/16 - Game Over.mp3";
import click from "./assets/sounds/click.wav";

const clickSound = new Audio(click);
const startSound = new Audio(startMusic);
const stopSound = new Audio(stopMusic);

//function to get a random integer
const getRndInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

class App extends Component {
  state = {
    score: 0,
    current: -1,
    showGameOver: false,
    pace: 1500,
    rounds: 0,
    gameOn: false,
  };

  // set global variable for setTimeout
  timer = undefined;

  clickPlay = () => {
    if (clickSound.paused) {
      clickSound.play();
    } else {
      clickSound.currentTime = 0;
    }
  };

  clickHandler = (i) => {
    this.clickPlay();
    if (this.state.current !== i) {
      this.stopHandler();
      return;
    }
    // console.log("clickHandler, circle number:", i);
    this.setState({
      score: this.state.score + 10,
      rounds: this.state.rounds - 1,
    });
  };

  nextCircle = () => {
    if (this.state.rounds >= 1) {
      this.stopHandler();
      return;
    }

    // loop to check for new state calling current, to compare what numbers we have and what is the next one, one number cannot be there twice

    let nextActive;

    do {
      nextActive = getRndInt(0, 3); // because we use indexes now
    } while (nextActive === this.state.current); //until next active is not equal current, it will be looking for next one
    this.setState({
      current: nextActive,
      pace: this.state.pace * 0.95,
      rounds: this.state.rounds + 1,
    });
    // console.log("rounds", this.state.rounds);

    this.timer = setTimeout(this.nextCircle, this.state.pace); //JS method setTimeout, read up in the MDN, clearTimeout
  };

  startHandler = () => {
    startSound.play();
    startSound.loop = true;
    this.nextCircle();
    this.setState({ gameOn: true });
  };

  stopHandler = () => {
    startSound.pause();
    stopSound.play();
    clearTimeout(this.timer);
    this.setState({ showGameOver: true, gameOn: false });
  };

  closeHandler = () => {
    window.location.reload();
    //or can do:
    // this.setState({
    //   showGameOver: false,
    //   score: 0,
    //   current: -1,
    // });
  };

  render() {
    let message = "";

    if (this.state.score <= 50) {
      message = "Let's try again!";
    } else if (this.state.score >= 51 && this.state.score <= 100) {
      message = "Look at you, getting the hang of it!";
    } else {
      message = "Way to go, you are rocking it!";
    }

    return (
      <div>
        <h1>Catch me! If you can...</h1>
        <div className="game">
          <h2>Your score is: {this.state.score}</h2>
          <div className="circles">
            {circles.map((_, i) => (
              <Circle
                key={i}
                id={i}
                click={() => this.clickHandler(i)}
                active={this.state.current === i}
                disabled={this.state.gameOn}
              />
            ))}
          </div>
          <div>
            {!this.state.gameOn && (
              <Button click={this.startHandler}>Start</Button>
            )}
            {this.state.gameOn && (
              <Button click={this.stopHandler}>Stop</Button>
            )}
          </div>
          {this.state.showGameOver && (
            <Gameover
              click={this.closeHandler}
              score={this.state.score}
              message={message}
            />
          )}
        </div>
      </div>
    );
  }
}
export default App;
