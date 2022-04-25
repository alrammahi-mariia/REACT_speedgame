import React from "react";

const Gameover = (props) => {
  return (
    <div>
      <section id="popup_box">
        <div className="score_text">
          <p>Game over!</p>
          <p id="result">Your score is: {props.score}</p>
          <p id="message">{props.message}</p>
          <button type="button" id="close" onClick={props.click}>
            Close
          </button>
        </div>
      </section>
    </div>
  );
};

export default Gameover;
