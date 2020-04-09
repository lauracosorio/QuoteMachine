import React from "react";
import "../Styles.css/QuoteMachine.css";

const QuoteBox = ({ quote, author }) => {
  return (
    <>
      <div id="text">
        <span>
          <p className="quote">
            {" "}
            <i className="fas fa-angle-double-left fa-2x"></i>
            {quote}
          </p>
        </span>
      </div>
      <div id="author">
        <h5 className="author">{author}</h5>
      </div>
    </>
  );
};

export default QuoteBox;
