export type State = {
  currentPage: "start" | "result";
};

const initialState: State = {
  currentPage: "start",
};

export default initialState;
