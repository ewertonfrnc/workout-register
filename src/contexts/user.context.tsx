import { useState, createContext, FC, ReactNode } from "react";

export type UserContext = {
  currentUser: null;
  setCurrentUser: React.Dispatch<React.SetStateAction<null>>;
};

export type UserProviderProps = {
  children: ReactNode;
};

export const UserContext = createContext<UserContext>({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider: FC<UserProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
