import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from "./counterSlice";
import "./Counter.css";

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  return (
    <>
       <div className="container">
        <div className="row">

          <div className="col-lg-12">
            <h1>Counter in Redux - Concept</h1>
            <button className="button" onClick={() => dispatch(decrement())}>-</button>
            <span className="value">{count}</span>
            <button className="button"   onClick={() => dispatch(increment())} >+</button>
            
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-12">
          <input
          className="textbox"
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
             className="button"
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button
          className="asyncButton"
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>
          </div>
        </div>
      </div>
    <div>
    </div>
    </>
    
  );
}
