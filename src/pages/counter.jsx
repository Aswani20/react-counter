import Increase from "../component/increase";
import Decrease from "../component/decrease";
import { useState } from "react";
const Counter = () => {
    const [counter,setcounter]=useState(0);
    const increaseNum=()=>{
        setcounter(counter+1);
    }
    const decreaseNum=()=>{
        if(counter >0){
            setcounter(counter-1);
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