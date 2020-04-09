import React from 'react';
import "../Styles.css/QuoteMachine.css";

const Button = ({onClick, title}) => {

   return (
      <button className="button" onClick={onClick} id="new-quote">
      {title}
    </button>
   )
}

export default Button;