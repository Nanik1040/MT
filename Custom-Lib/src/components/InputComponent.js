import React from "react";

const InputComponent = ({ value, onChange }) => {
  return (
    <>
      <h1>Input Component</h1>
      <input type="text" value={value} onChange={onChange} />;
    </>
  );
};

export default InputComponent;
