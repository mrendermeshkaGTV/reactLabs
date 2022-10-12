import React, {useRef, useState} from "react";
import Table from 'react-bootstrap/Table';
import MyCounter from "./counter";
import {Button} from "react-bootstrap";

export default function Cart(product) {
    return <Table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
        </tr>
        </thead>
        <tbody>
        {product.map(el => {
            const [count, setCount] = useState(1)
            const [total, setTotal] = useState(el.price)
            const changeCountPlusCart = () => {
                setCount(count + 1)
                increaseTotal()
            }
            const increaseTotal = () => {
                setTotal(count*el.price)
            }
            const changeCountMinusCart = () => {
                if(count-1 > 0){
                    setCount(count-1)
                    increaseTotal()
                }
            }
            return (<tr>
                    <td>
                        {el.name}
                    </td>
                    <td>
                        {el.price}
                    </td>
                    <td>
                        <div className={"d-flex justify-content-around"}>
                            <Button variant="primary" onClick={changeCountPlusCart}> + </Button>
                            <span>{count}</span>
                            <Button variant="secondary" onClick={changeCountMinusCart}> - </Button>
                        </div>
                    </td>
                    <td>
                        {total}
                    </td>
                </tr>
            )
        })}
        </tbody>
    </Table>
}