import React from "react";

export function HelloWorld() {
    let name = <strong> KharchenkoVitalii </strong>;
    let heading = <h1>Hello, {name}</h1>;
    return (<div id="result-hello-world">{heading}</div>);
}
