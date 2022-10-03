export type Chip = "paper" | "scissors" | "rock";
export type State = {
  currentPage: "start" | "result";
  selectedChip: Chip | null;
};

const initialState: State = {
  currentPage: "start",
  selectedChip: null,
};

export default initialState;
