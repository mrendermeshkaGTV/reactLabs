import {useFormContext} from "react-hook-form";
import {Button} from "@mui/material";

export default function Position(props) {
    const {register, errors} = useFormContext();
    const {index, type, removePosition, palettes} = props;

    return (
        <div>
            {type === "palette" && (
                <>
                    <span>Палети</span>
                    <div className="container-horizontal">

                        <div>
                            <label htmlFor={`positions[${index}].type`}>Тип палети</label>
                            <select defaultValue=""
                                    id={`positions[${index}].type`} {...register(`positions[${index}].type`)}>
                                <option value="" disabled hidden>---оберіть тип палети---</option>
                                {palettes.map(palette => <option key={palette.id.toString()}
                                                                 value={palette.value}>{palette.label}</option>)}
                            </select>
                            <span className="error">{errors[`positions[${index}].type`]?.message}</span>
                        </div>

                        <div>
                            <label htmlFor={`positions[${index}].cost`}>Оголошена вартість, грн</label>
                            <input type="text" id={`positions[${index}].cost`}
                                   {...register(`positions[${index}].cost`)}/>
                            <span className="error">{errors[`positions[${index}].cost`]?.message}</span>
                        </div>

                        <div>
                            <label htmlFor={`positions[${index}].count`}>Кількість</label>
                            <input type="number" id={`positions[${index}].count`}
                                   {...register(`positions[${index}].count`)}/>
                            <span className="error">{errors[`positions[${index}].count`]?.message}</span>
                        </div>
                        {index > 0 && (<Button className="close-button" onClick={() => removePosition(index)}>вилучити</Button>)}
                    </div>
                </>
            )}

            {type === "cargo" && (
                <>
                    <span>Характеристика місць</span>
                    <div className="container-horizontal">
                        <div>
                            <label htmlFor={`positions[${index}].count`}>Кількість</label>
                            <input type="number" id={`positions[${index}].count`}
                                   {...register(`positions[${index}].count`)}/>
                            <span className="error">{errors[`positions[${index}].count`]?.message}</span>
                        </div>
                        <div>
                            <label htmlFor={`positions[${index}].cost`}>Оголошена вартість, грн</label>
                            <input type="text"
                                   id={`positions[${index}].cost`} {...register(`positions[${index}].cost`)}/>
                            <span className="error">{errors[`positions[${index}].cost`]?.message}</span>
                        </div>
                        <div>
                            <label htmlFor={`positions[${index}].weight`}>Вага, кг</label>
                            <input type="text" id={`positions[${index}].weight`}
                                   {...register(`positions[${index}].weight`)}/>
                            <span className="error">{errors[`positions[${index}].weight`]?.message}</span>
                        </div>
                        <div>
                            <label htmlFor={`positions[${index}].length`}>Довжина, см</label>
                            <input type="number" id={`positions[${index}].length`}
                                   {...register(`positions[${index}].length`)}/>
                            <span className="error">{errors[`positions[${index}].length`]?.message}</span>
                        </div>
                        <div>
                            <label htmlFor={`positions[${index}].width`}>Ширина, см</label>
                            <input type="number" id={`positions[${index}].width`}
                                   {...register(`positions[${index}].width`)}/>
                            <span className="error">{errors[`positions[${index}].width`]?.message}</span>
                        </div>
                        <div>
                            <label htmlFor={`positions[${index}].height`}>Висота, см</label>
                            <input type="number" id={`positions[${index}].height`}
                                   {...register(`positions[${index}].height`)}/>
                            <span className="error">{errors[`positions[${index}].height`]?.message}</span>
                        </div>
                        {index > 0 && (<Button className="close-button" onClick={() => removePosition(index)}>вилучити</Button>)}
                    </div>
                </>
            )}

        </div>
    )
}
