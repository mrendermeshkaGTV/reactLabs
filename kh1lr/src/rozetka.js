import React from 'react';

export function Rozetka(item) {

    return (
        <div>
        <div className="Container">
            {item.items.map(el => (
                <div className="Card">
                    <div>
                        <img src="{el.link}" alt={el.title}/>
                        <div className="cardDesc">
                            <h3 className="cardTitle">{el.title}</h3>
                            <h4 className="cardCategory">{el.category}</h4>
                            <h4 className="cardPrice">{el.price}</h4>
                        </div>
                    </div>
                </div>
            ))}
        </div>
            <div className="Container">
                <div></div>
                <div><button>Показати ще</button></div>
            </div>
        </div>
    );
}

export default Rozetka;