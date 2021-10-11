import React, { useState } from "react";
import InputBox from "./InputBox";

const Calculator = () => {

  const [operand1, setOperand1] = useState('')
  const [operand2, setOperand2] = useState('')
  const [operator, setOperator] = useState('+')
  const [result, setResult] = useState('')
  const [errMsg, setErrMsg] = useState('')



  const calculate = (operator, x, y) => {
    x = Number(x)
    y = Number(y)
    if (isNaN(x) || isNaN(y)) {
      return setErrMsg('Please provide a valid number for both operands.')
    }
    setErrMsg('')
    switch (operator) {
      case '+':
        return x + y;
      case '-':
        return x - y;
      case '*':
        return x * y;
      case '/':
        return x / y;
      default:
        return 'Please enter valid numbers'
    }
  }

  return (
    <>
      <div className="calculator-container">
        <InputBox value={operand1} setFunction={setOperand1} isDisabled={false} />
        <select name="operator" id="operator" value={operator} onChange={event => setOperator(event.target.value)}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <InputBox value={operand2} setFunction={setOperand2} isDisabled={false} />
        <button className="equals" onClick={e => setResult(calculate(operator, operand1, operand2))}>=</button>
        <InputBox value={result} isDisabled={true} />
      </div>
      <div className="error-message">{errMsg}</div>
    </>
  )
}

export default Calculator;