import { State } from "./initialState";
import { ButtonObject } from "../App";

type ActionTypes =
  | "switchToStart"
  | "switchToResult"
  | "userPick"
  | "housePick"
  | "incrementScore"
  | "decrementScore";
export type Action = {
  type: ActionTypes;
  payload?: { value: string | ButtonObject | void };
};

export default function reducer(state: State, action: Action): State {
  if (action.type === "switchToStart")
    return { ...state, currentPage: "start" };

  if (action.type === "switchToResult")
    return { ...state, currentPage: "result" };

  if (action.type === "userPick")
    if (action.payload && typeof action.payload.value == "object")
      return { ...state, userPick: action.payload.value };

  if (action.type === "housePick")
    if (action.payload && typeof action.payload.value == "object")
      return { ...state, housePick: action.payload.value };

  if (action.type === "incrementScore")
    return { ...state, score: state.score++ };

  if (action.type === "decrementScore")
    return { ...state, score: state.score <= 0 ? 0 : state.score-- };

  return state;
}
