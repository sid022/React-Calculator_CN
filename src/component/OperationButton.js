import { ACTIONS } from "./utils/constants";

const OperationButton = ({ operator, dispatch }) => {
  return (
    <button
      onClick={() => {
        dispatch({ type: ACTIONS.OPERATION, payload: operator });
      }}
    >
      {operator}
    </button>
  );
};
export default OperationButton;
