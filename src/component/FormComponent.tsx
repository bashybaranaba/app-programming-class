import React, { useState } from "react";

export const FormComponent = () => {
  const [fistName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(fistName, lastName);
    alert(`Hello ${fistName} ${lastName}`);
  };

  return (
    <form>
      <input
        type="text"
        value={fistName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <button onClick={submitForm}>Submit</button>
    </form>
  );
};
