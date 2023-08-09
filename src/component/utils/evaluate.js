export const evaluate = ({ previousOperand, currentOperand, operator }) => {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);

  let result = "";

  switch (operator) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      result = prev / current;
      break;
    case "%":
      result = (prev / 100) * current;
      console.log(result);
      break;
    default:
      result = 0;
  }
  return result.toString();
};
