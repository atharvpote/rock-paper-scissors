import React, { useReducer } from "react";
import GlobalContext from "./GlobalContext";
import initialState from "./initialState";
import reducer from "./reducer";

export default function GlobalContextProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
