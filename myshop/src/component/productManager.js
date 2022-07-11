import React, { useState } from "react";
const ProducManager = () => {
  const [showOrHide, setShowOrHide] = useState(true);
  const onShow = () => {
    setShowOrHide(true);
  };
  const onHide = () => {
    setShowOrHide(false);
  };
  return (
    <div>
      <h1>APPLICATION</h1>
      <button onClick={() => onShow()}>SHOW</button>
      <button onClick={() => onHide()}>HIDE</button>
      {showOrHide == true} ? {<p>Hello, My name is Hung</p>} : {<p></p>}
    </div>
  );
};
export default ProducManager;
