import React from "react";

const Button = ({ disabled, text, className }) => {
  return (
    <button disabled={disabled} className={className}>
      {text}
    </button>
  );
};

export default Button;
