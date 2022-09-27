import React, {useState} from "react";

export function Colors(props){
    const {textColor, text} = props;
    const [color, setColor] = useState(['red']);

    const style = {
        backgroundColor:color,
        color: textColor
    }
    return (
        <div><div style={style}>I'm {color} and content {textColor}</div>
            <select name="" id="" onChange={(e)=>{
                const selectedColor = e.target.value;
                setColor(selectedColor)
            }}>
                <option value="red">red</option>
                <option value="green">green</option>
                <option value="blue">blue</option>
            </select>
    </div>
    )
}