import { ACTIONS } from "./utils/constants";

const DigitButton = ({ digit, dispatch }) => {
  return (
    <button
      onClick={() => {
        dispatch({
          type: ACTIONS.ADD_DIGIT,
          payload: digit,
        });
      }}
    >
      {digit}
    </button>
  );
};
export default DigitButton;
