import {useFormContext} from "react-hook-form";

export default function CityList(props) {
    const {cities, type} = props;
    const {register, errors} = useFormContext();

    return(
        <div>
            <label htmlFor="sender">{type === "from" ? "Місто-відправник" : "Місто-одержувач"}</label>
            <select defaultValue="" id="sender" {...register(type === "from" ? "sender" : "receiver")}>
                <option value="" disabled hidden>---оберіть місто---</option>
                {cities.map(city => <option key={city.id} value={city.name}>{city.name}</option>)}
            </select>
            <span className="error">{errors[type === "from" ? "sender" : "receiver"]?.message}</span>
        </div>
    )
}
