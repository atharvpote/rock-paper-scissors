import { ButtonObject } from "../App";

export type State = {
  currentPage: "start" | "result";
  userPick: ButtonObject | null;
  score: number;
};

const initialState: State = {
  currentPage: "start",
  userPick: null,
  score: 0,
};

export default initialState;
