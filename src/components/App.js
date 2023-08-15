
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [text,setText] = useState("");
  function handleChange(e){
    setText(e.target.value);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <div className="parent">
          <h1>Parent Component</h1>
          {text}
            <div className="child">
              <h2>Child Component</h2>
              <input type="text" onChange={handleChange} />
            </div>
        </div>
    </div>
  )
}

export default App
