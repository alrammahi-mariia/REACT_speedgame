import React from "react";

const Popup = () => {
  return (
    <div>
      <section id="popup_box">
        <div class="score_text">
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

export default Popup;
