import { Chip, State } from "./initialState";

type ActionTypes = "switchToStart" | "switchToResult" | "selectChip";
export type Action = { type: ActionTypes; payload?: { value: Chip } };

export default function reducer(state: State, action: Action): State {
  if (action.type === "switchToStart")
    return { ...state, currentPage: "start" };

  if (action.type === "switchToResult")
    return { ...state, currentPage: "result" };

  if (action.type === "selectChip") {
    console.log("triggered");

    if (action.payload) return { ...state, selectedChip: action.payload.value };
  }

  return state;
}
