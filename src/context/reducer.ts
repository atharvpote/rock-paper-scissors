import { State } from "./initialState";

type ActionTypes = "switchToStart" | "switchToResult";
export type Action = { type: ActionTypes; payload?: { value: string } };

export default function reducer(state: State, action: Action): State {
  if (action.type === "switchToStart")
    return { ...state, currentPage: "start" };

  if (action.type === "switchToResult")
    return { ...state, currentPage: "result" };

  return state;
}
