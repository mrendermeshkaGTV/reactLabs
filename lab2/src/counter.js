import React, {useState} from "react";
import {Button} from "react-bootstrap";

export default function MyCounter(countStandart = 0, min = -10, max = 10) {
    let [count, setCount] = useState(countStandart)
    const changeCountPlus = ()=>{
        if(max >= count + 1) {
            setCount(count + 1)
        } else {
            alert(`Max is ${max}`)
        }
    }
    const changeCountMinus = () =>{
        if(min <= count - 1) {
            setCount(count - 1)
        } else {
            alert(`Min is ${min}`)
        }
    }
    const  resetCounter = () =>{
        setCount(0)
    }

    return <div className={"d-flex justify-content-around"} style={{maxWidth: "20vw"}}>
        <span>поточний рахунок {count}</span> <Button variant="primary" onClick={changeCountPlus}> + </Button> <Button
        variant="secondary" onClick={changeCountMinus}> - </Button> <Button
        variant="danger" onClick={resetCounter}> reset </Button>
    </div>
}