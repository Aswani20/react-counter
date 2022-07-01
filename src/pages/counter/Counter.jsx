import Increase from "../../component/increase";
import Decrease from "../../component/decrease";
// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increamentCounter,
  decreamentCounter,
} from "../../redux/features/counter";

const Counter = () => {
  // const [counter,setcounter]=useState(0);
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();

  const increaseNum = () => {
    // setcounter(counter+1);
    dispatch(increamentCounter());
  };
  const decreaseNum = () => {
    if (counter > 0) {
      // setcounter(counter-1);
      dispatch(decreamentCounter());
    }
  };

  return (
    <div className="text-center m-5 border border-dark border-1 rounded">
      <div className="m-5">
        <h1>Counter</h1>
        <div className="m-5">
          <p>{counter}</p>
          <div className="d-flex justify-content-center">
            <Increase increase={increaseNum} />
            <Decrease decrease={decreaseNum} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Counter;
