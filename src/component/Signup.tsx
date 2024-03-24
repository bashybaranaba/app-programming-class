import React, { useState } from "react";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const initialFormState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const Signup = () => {
  const [formState, setFormState] = useState<FormState>(initialFormState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signing up with:", formState);
    alert(
      `Signing up with: ${formState.firstName} and ${formState.email} and ${formState.password}`
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          name="firstName"
          type="text"
          value={formState.firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          name="lastName"
          type="text"
          value={formState.lastName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          name="password"
          type="password"
          value={formState.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Signup</button>
    </form>
  );
};

export default Signup;
