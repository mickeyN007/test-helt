import React from "react";
import "./FormInput.css";

export default function FormInput(props) {
  const { label, placeholder, errorMessage, handleChange, ...inputAttributes } =
    props;

  //default state for focused
  const [focused, setFocused] = React.useState(false);

  //stringlify focused
  const FocusStr = focused.toString();

  function handleFocus(e) {
    setFocused(true);
  }
  return (
    <div className="form-input">
      <label htmlFor="">{label}</label>
      <input
        placeholder={placeholder}
        {...inputAttributes}
        onChange={handleChange}
        onBlur={handleFocus}
        focused={FocusStr}
      />
      <small className="errMsg">{errorMessage}</small>
    </div>
  );
}
