import React, { useState } from "react";
import "./App.css"

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

const handleClick = (value) => {
    setInput((prev) => prev + value)
}

  const handleClear = () => {
    setResult("");
    setInput("")
  };

  const calculate = () => {
    try {
      const evalResult = eval(input);
      if(input.includes('0/0') && !evalResult){
        setResult('NaN')
      } else if(input.includes('/0') && !evalResult){
        setResult("Infinity")
      } else if(isNaN(evalResult)){
        setResult('Error')
      } else{
        setResult(evalResult.toString())
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div>
      <input value={input} readOnly type="text" />
      <p className="result">{result}</p>
      <div>
        <button name="7" onClick={()=>handleClick("7")}>
          7
        </button>
        <button name="8" onClick={()=>handleClick("8")}>
          8
        </button>
        <button name="9" onClick={()=>handleClick("9")}>
          9
        </button>
        <button name="+" onClick={()=>handleClick("+")}>
          +
        </button>
      </div>
      <div>
        <button name="4" onClick={()=>handleClick("4")}>
          4
        </button>
        <button name="5" onClick={()=>handleClick("5")}>
          5
        </button>
        <button name="6" onClick={()=>handleClick("6")}>
          6
        </button>
        <button name="-" onClick={()=>handleClick("-")}>
          -
        </button>
      </div>
      <div>
        <button name="1" onClick={()=>handleClick("1")}>
          1
        </button>
        <button name="2" onClick={()=>handleClick("2")}>
          2
        </button>
        <button name="3" onClick={()=>handleClick("3")}>
          3
        </button>
        <button name="*" onClick={()=>handleClick("*")}>
          *
        </button>
      </div>
      <div>
        <button onClick={()=>handleClear()}>
          C
        </button>
        <button name="0" onClick={()=>handleClick("0")}>
          0
        </button>
        <button onClick={calculate}>
          =
        </button>
        <button name="/" onClick={()=>handleClick("/")}>
          /
        </button>
      </div>
    </div>
  );
};

export default Calculator;
