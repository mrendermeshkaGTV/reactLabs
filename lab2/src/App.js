import logo from './logo.svg';
import './App.css';
import Game from "./game";
import MyCounter from "./counter"
import fewCounter from "./counter by array"
import React from "react"
import Cart from "./cart";




function App() {
    const counters = [
        {id: 1, initial:6, min: -5, max:10},
        {id: 2, initial:5},
        {id: 3}
    ]

    const carts = [
        {id:1, name:"Lenovo Legion G4", price:118, min: 0},
        {id:2, name:"Lenovo Legion G5", price:150, min: 0},
        {id:3, name:"Lenovo Legion G6", price:260, min: 0},
        {id:4, name:"Lenovo Legion G7", price:480, min: 0},
    ]

    let x = "";

    return (
        <div className="App">
            {fewCounter(counters)}
            {Game()}
            {MyCounter()}
            {Cart(carts)}
        </div>
    );
}

export default App;
