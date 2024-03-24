import React from "react";
import { useUser } from "../context/UserContext";

const UserProfile: React.FC = () => {
  const { user, setUser } = useUser();

  const changeName = (name: string) => {
    setUser({ ...user, name });
  };

  return (
    <div>
      <h2>User Profile</h2>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>

      <button onClick={() => changeName("New Name")}>Change Name</button>
    </div>
  );
};

export default UserProfile;
