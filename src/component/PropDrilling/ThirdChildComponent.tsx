import React from "react";

const ThirdChildComponent = ({ id, name, email, age }: User) => {
  return (
    <div>
      <h2>User Profile</h2>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default ThirdChildComponent;
