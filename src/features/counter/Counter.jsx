import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByAmount } from "./counterSlice";

export const Counter = () => {
  const [value, setValue] = useState(1);

  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()
  return (
    <div className="h-screen flex items-center">
      <div className="ring-2 max-w-sm mx-auto space-y-4 p-4">
        <div className="space-x-4">
          <button className="btn" onClick={()=>dispatch(increment())}>Increment</button>
          <span className="font-bold text-lg">{count}</span>
          <button className="btn" onClick={()=>dispatch(decrement())}>Decrement</button>
        </div>
        <div className="space-x-4 flex justify-center">
          <input
            className="w-16 ring-2 p-2"
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="btn" onClick={()=>dispatch(incrementByAmount(Number(value)))}>Increment By {value}</button>
        </div>
      </div>
    </div>
  );
};
