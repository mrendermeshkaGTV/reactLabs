import React, {useState} from "react";
class City extends React.Component{
    render() {
        return <option value={this.props.image}>{this.props.city.name}</option>
    }
}
export function List(cities){
        const [city, setCity] = useState("licensed-image.jpg")

        return (
            <div>
            <select onChange={(e)=>{
                const selectedCity = e.target.value;
                setCity(selectedCity)
            }}>
                {cities.map((city)=><City key={city.id} city={city} image={city.image}></City>)}
            </select>
                <img src={city} alt="" width="50" height="50"/>
            </div>
        )
}
export default List