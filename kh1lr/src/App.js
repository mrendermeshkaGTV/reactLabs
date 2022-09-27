import logo from './logo.svg';
import './App.css';
import Table from "./table";
import {HelloWorld} from "./hello world";
import {PropsFunction} from "./propsFunction";
import React from "react";
import rozetka from "./rozetka";
import List from "./city";
import {Colors} from "./Colors";

let x = {
    name: "Vitalii Kharchenko",
    groupName: "IPZ-19-1"
}
let y = {
    todayDate: new Date().getDate(),

}

let list = {
    items: [{
        id: 1,
        title: 'Ноутбук Acer Aspire 7 A715-42G-R0VS',
        img: 'https://content.rozetka.com.ua/goods/images/big/163386254.jpg',
        category: 'laptop',
        price: 18470
        },
        {
            id: 2,
            title: 'Ноутбук Acer Aspire 7 A715-42G-R0VS',
            img: 'https://content.rozetka.com.ua/goods/images/big/163386254.jpg',
            category: 'laptop',
            price: 18470
        },
        {
            id: 3,
            title: 'Ноутбук Acer Aspire 7 A715-42G-R0VS',
            img: 'https://content.rozetka.com.ua/goods/images/big/163386254.jpg',
            category: 'laptop',
            price: 18470
        },
        {
            id: 4,
            title: 'Ноутбук Acer Aspire 7 A715-42G-R0VS',
            img: 'https://content.rozetka.com.ua/goods/images/big/163386254.jpg',
            category: 'laptop',
            price: 18470
        }]
}
let cities = [
    {id: 1, name:"Chicago", image:"licensed-image.jpg"},
    {id: 2, name:"los angeles", image:"losang.jpg"},
    {id: 3, name:"Chicago", image:"new-york-city.jpg"}
]


function App() {


    return (
        <div className="App">
            {HelloWorld()}
            <Table/>
            {PropsFunction(x, y)}
            <div>
                {rozetka(list)}
            </div>
            {List(cities)}
            <Colors textColor="yellow" text="abcdefg"></Colors>
        </div>
    );
}

export default App;
