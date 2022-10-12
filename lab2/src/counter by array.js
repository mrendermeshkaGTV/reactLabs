import React from "react";
import MyCounter from "./counter";

export default function fewCounter(counters) {
    return <div className={"d-flex flex-column"}>
        {counters.map(el => {
            return MyCounter(el.initial,el.min, el.max)
        })}
    </div>
}