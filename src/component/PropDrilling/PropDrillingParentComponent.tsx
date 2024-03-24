import React from "react";
import FirstChildComponent from "./FirstChildComponent";

const userProfile: User = {
  user: {
    id: "1",
    name: "Jane Doe",
    email: "jane.doe@example.com",
    age: 28,
  },
};

const PropDrillingParentComponent: React.FC = () => {
  return <FirstChildComponent user={userProfile.user} />;
};

export default PropDrillingParentComponent;
