import { createContext, useState } from "react";

const initialState = {};

export const RecentSearchesContext = createContext(initialState);

export const RecentSearchesProvider = ({ children }) => {
  const [searches, setSearches] = useState({});

  return (
    <RecentSearchesContext.Provider value={{ searches, setSearches }}>
      {children}
    </RecentSearchesContext.Provider>
  );
};
