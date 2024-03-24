import React from "react";
import FirstChildComponent from "./FirstChildComponent";

const user: User = {
  id: "1",
  name: "Jane Doe",
  email: "jane.doe@example.com",
  age: 28,
};

const PropDrillingParentComponent = () => {
  return (
    <FirstChildComponent
      id={user.id}
      name={user.name}
      email={user.email}
      age={user.age}
    />
  );
};

export default PropDrillingParentComponent;
