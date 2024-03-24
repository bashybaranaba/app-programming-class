import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Counter } from "./component/Counter";
import PropDrilling from "./component/PropDrilling";
import Context from "./component/Context";
import { FormComponent } from "./component/FormComponent";
import PropDrillingParentComponent from "./component/PropDrilling/PropDrillingParentComponent";

function App() {
  return (
    <div className="App">
      Hello world
      <Counter initialCount={5} />
      <PropDrilling />
      <Context />
      <FormComponent />
      <PropDrillingParentComponent />
    </div>
  );
}

export default App;
