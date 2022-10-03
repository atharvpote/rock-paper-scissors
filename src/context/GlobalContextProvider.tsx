import React, { useReducer } from "react";
import GlobalContext from "./GlobalContext";
import initialState from "./initialState";
import reducer from "./reducer";

export type Children = {
  children: React.ReactNode;
};

export default function GlobalContextProvider(props: Children): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {props.children}
    </GlobalContext.Provider>
  );
}
