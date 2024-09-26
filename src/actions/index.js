const ADD_ONE = "ADD_ONE";

const APPLY_NUMBER = "APPLY_NUMBER";
const CHANGE_OPERATION = "CHANGE_OPERATION";
const CLEAR_DISPLAY = "CLEAR_DISPLAY";
const MEMORY_ADD = "MEMORY_ADD";
const MEMORY_RECALL = "MEMORY_RECALL";
const MEMORY_CLEAR = "MEMORY_CLEAR";

const addOne = () => {
  return { type: ADD_ONE };
};

const applyNumber = (number) => {
  return { type: APPLY_NUMBER, payload: number };
};

const changeOperation = (operation) => {
  return { type: CHANGE_OPERATION, payload: operation };
};

const clearDisplay = () => {
  return { type: CLEAR_DISPLAY };
};

const memoryAdd = () => {
  return { type: MEMORY_ADD };
};

const memoryRecall = (memory) => {
  return { type: MEMORY_RECALL, payload: memory };
};

const memoryClear = () => {
  return { type: MEMORY_CLEAR };
};

export {
  ADD_ONE,
  APPLY_NUMBER,
  CHANGE_OPERATION,
  CLEAR_DISPLAY,
  MEMORY_ADD,
  MEMORY_RECALL,
  MEMORY_CLEAR,
  addOne,
  applyNumber,
  changeOperation,
  clearDisplay,
  memoryAdd,
  memoryRecall,
  memoryClear,
};
