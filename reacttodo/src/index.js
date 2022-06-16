import React from "react";
import ReactDOM from "react-dom";
import "./components/App.css";

const App = () => {
  return (
    <div className="container">
      <div className="input">
        <h2>All Tasks</h2>
        <form id="input" action="#">
          <input id="inputsearchbox" type="text" placeholder="Add a new task" />
          <button id="addbtn">Add</button>
        </form>
      </div>
      <div className="outputcontainer" id="outputcontainer">
        <h2 id="quote">Seems like a quiet day</h2>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
