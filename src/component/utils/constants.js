// action type for reducer
export const ACTIONS = {
    ADD_DIGIT: "add-digit",
    CLEAR: "clear",
    OPERATION: "operation",
    EVALUATE: "evaluate",
    SIGN: "sign"
  };
  
  // initial state for reducer
  export const INITIAL_STATE = {
    previousOperand: "",
    currentOperand: "0",
    operator: "",
    sign: ""
  };
  