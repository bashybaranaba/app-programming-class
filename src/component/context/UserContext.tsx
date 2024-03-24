import React, { createContext, useContext, ReactNode, useState } from "react";

interface IUserContext {
  user: User;
  setUser: (user: User) => void;
}

const defaultState = {
  user: {
    id: "",
    name: "",
    email: "",
    age: 0,
  },
  setUser: () => {},
};

const UserContext = createContext<IUserContext>(defaultState);

export function useUser() {
  return useContext(UserContext);
}

// UserProvider component
interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>(defaultState.user);

  const value = { user, setUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
