import React, { Component } from "react";
import Circles from "./components/Circles";
import Buttons from "./components/Buttons";
import Popup from "./components/Popup";
import "./index.css";

class App extends Component {
  render() {
    return (
      <div>
        <section>
          <h1>Catch me! If you can...</h1>
          <div class="game">
            <h2>
              Your score is: <span id="score">0</span>
            </h2>
            <Circles />
            <Buttons />
            <Popup />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
