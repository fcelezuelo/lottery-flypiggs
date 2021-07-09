import { Dispatch, SetStateAction, createContext, ReactNode, useState } from 'react';

type AuthContext = {
  auth: boolean;
  setAuth: Dispatch<SetStateAction<boolean>>;
}

type AuthContextProviderProps = {
  children: ReactNode;
}

// export const AuthContext = createContext({} as AuthContext);
export const AuthContext = createContext({} as AuthContext);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  // const [state, setState] = useState({} as Sort);
  const [auth, setAuth] = useState(false);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}