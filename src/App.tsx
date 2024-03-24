import React from "react";
import "./App.css";
import { Counter } from "./component/Counter";
import PropDrilling from "./component/PropDrilling";
import Context from "./component/Context";
import { FormComponent } from "./component/FormComponent";
import UserProfile from "./component/context/UserProfile";
import { UserProvider } from "./component/context/UserContext";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Counter initialCount={5} />
        <PropDrilling />
        <Context />
        <FormComponent />
        <UserProfile />
      </div>
    </UserProvider>
  );
}

export default App;
