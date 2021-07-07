import { createContext, ReactNode, useState } from 'react';

type Sort = {
  name?: string;
  participants?: string;
}

type SortContext = [Sort, React.Dispatch<React.SetStateAction<Sort>>]

type SortContextProviderProps = {
  children: ReactNode;
}

// export const SortContext = createContext<SortContext>([{} as Sort, () => { }]);
export const SortContext = createContext<SortContext>([{}, () => { }]);

export function SortContextProvider({ children }: SortContextProviderProps) {
  // const [state, setState] = useState({} as Sort);
  const [state, setState] = useState({});

  return (
    <SortContext.Provider value={[state, setState]}>
      {children}
    </SortContext.Provider>
  );
}