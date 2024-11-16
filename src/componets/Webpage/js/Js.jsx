import React, { useState } from 'react';
import './script.js';

export default function Js() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const getSum = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult('Please enter valid numbers');
    } else {
      const sum = n1 + n2;
      setResult('Sum: ' + sum);
    }
  };

  return (
    <>
      <div id="container">
        <header><h1>ADD TWO NUMBERS</h1></header>
        <div id="op_cont">
          <input
            type="number"
            id="num1"
            placeholder="Enter first number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            required
          />
          <div className="plus">+</div>
          <input
            type="number"
            id="num2"
            placeholder="Enter second number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            required
          />
          <button onClick={getSum}>Add</button>
          <p id="result">{result}</p>
        </div>
      </div>
    </>
  );
}
