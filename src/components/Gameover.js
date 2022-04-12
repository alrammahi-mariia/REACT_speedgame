import React from "react";

const Gameover = () => {
  return (
    <div>
      <section id="popup_box">
        <div className="score_text">
          <p>Game over!</p>
          <p id="result"></p>
          <button type="button" id="close">
            Close
          </button>
        </div>
      </section>
    </div>
  );
};

export default Gameover;
