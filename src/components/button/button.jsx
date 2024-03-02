/* eslint-disable react/prop-types */
import "./button.css";

function Button({ value, className }) {
  return (
    <>
      <button className={className}>{value}</button>
    </>
  );
}

export default Button;
