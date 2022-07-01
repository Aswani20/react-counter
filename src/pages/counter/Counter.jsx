import Increase from "../../component/increase";
import Decrease from "../../component/decrease";
// import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { increamentCounter,decreamentCounter } from "../../redux/features/counter";

const Counter = () => {
    // const [counter,setcounter]=useState(0);
    const counter =useSelector(state => state.counter.counter)
    const dispatch =useDispatch()

    const increaseNum=()=>{
        // setcounter(counter+1);
        dispatch(increamentCounter())
        
    }
    const decreaseNum=()=>{
        if(counter >0){
            // setcounter(counter-1);
            dispatch(decreamentCounter())
         
            
        }
        
    }

    return (
        <div className="text-center ">
            <h1>Counter</h1>
            <Increase  increase={increaseNum}/>
            <p>{counter}</p>
            <Decrease decrease={decreaseNum}/>
        </div>
    )
}
export default Counter;