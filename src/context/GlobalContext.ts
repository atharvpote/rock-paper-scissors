import { createContext } from "react";
import { State } from "./initialState";
import { Action } from "./reducer";

export type ContextValue = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

const GlobalContext = createContext<ContextValue | null>(null);

export default GlobalContext;
