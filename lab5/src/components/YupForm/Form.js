import {useForm, FormProvider} from "react-hook-form";
import {Box, Typography} from "@mui/material";
import {useState} from "react";
import * as yup from "yup";
import Position from "./Position";
import CityList from "./CityList";

const schema = yup.object().shape({
    sender: yup.string().required("Вкажіть місто відправлення").label("Місто-відправник"),
    receiver: yup.string().required("Вкажіть місто одержання").label("Місто-одержувач"),
    type: yup.string().required("Вкажіть вид відправлення").label("Вид відправлення"),
    positions: yup.array().when("type", {
        is: "palette",
        then: yup.array().of(
            yup.object().shape({
                type: yup.string().required("Вкажіть тип палети").test(
                    'is-not-empty',
                    'Вкажіть тип палети',
                    (value) => value !== ""
                ).label("Тип палети"),
                cost: yup.string()
                    .test(
                        "is-positive-number",
                        "Вкажіть кількість > 0",
                        (value) => value > 0
                    )
                    .required("Вкажіть вартість").label("Вартість").typeError("Вкажіть вартість"),
                count: yup.number().min(1, "Мінімальна кількість 1")
                    .required("Вкажіть кількість").label("Кількість").typeError("Вкажіть кількість"),
            })
        )
    }).when("type", {
        is: "cargo",
        then: yup.array().of(
            yup.object().shape({
                count: yup.number().min(1, "Мінімальна кількість 1")
                    .required("Вкажіть кількість").label("Кількість").typeError("Вкажіть кількість"),
                cost: yup.string()
                    .test(
                        "is-positive-number",
                        "Вкажіть кількість > 0",
                        (value) => value > 0
                    )
                    .required("Вкажіть вартість").label("Вартість").typeError("Вкажіть вартість"),
                weight: yup.string().test(
                    "is-positive-number",
                    "Вкажіть кількість > 0",
                    (value) => value > 0
                ).required("Вкажіть вагу").label("Вага").typeError("Вкажіть вагу"),
                length: yup.number().min(0, "Вкажіть довжину > 0")
                    .required("Вкажіть довжину").label("Довжина").typeError("Вкажіть довжину"),
                width: yup.number().min(0, "Вкажіть ширину > 0")
                    .required("Вкажіть ширину").label("Ширина").typeError("Вкажіть ширину"),
                height: yup.number().min(0, "Вкажіть висоту > 0")
                    .required("Вкажіть висоту").label("Висота").typeError("Вкажіть висоту"),
            })
        )
    }),
    packaging: yup.boolean().label("Вид пакування").default(false),
    packagingType: yup.string().when("packaging", {
        is: true,
        then: yup.string()
            .test(
                'is-not-empty',
                'Вкажіть вид пакування',
                (value) => value !== ""
            ).required("Вкажіть вид пакування")
    }),
    lift: yup.boolean().label("Підйом на поверх").default(false),
    liftFloors: yup.number().when("lift", {
        is: true,
        then: yup.number().min(1, "Кількість поверхів не може бути меншою 1").typeError("Вкажіть номер поверху")
    }),
    lifUpElevator: yup.boolean().label("Ліфт").default(false),
    return: yup.boolean().label("Зворотня доставка").default(false),
    returnType: yup.string().when("return", {
        is: true,
        then: yup.string().required("Вкажіть вид зворотньої доставки")
    }),
    palletizing: yup.boolean().label("Палетування").default(false),
});

const useYupValidationResolver = (schema) => {
    return async (data) => {
        try {
            await schema.validate(data, {abortEarly: false});
            return {values: data, errors: {}};
        } catch (e) {
            console.log({
                values: {},
                errors: e.inner.reduce((allErrors, currentError) => {
                    return {
                        ...allErrors,
                        [currentError.path]: {
                            type: currentError.type,
                            message: currentError.message,
                        },
                    };
                }, {}),
            });

            return {
                values: {},
                errors: e.inner.reduce((allErrors, currentError) => {
                    return {
                        ...allErrors,
                        [currentError.path]: {
                            type: currentError.type,
                            message: currentError.message,
                        },
                    };
                }, {}),
            };
        }
    };
}

export default function ValidatingForm(props) {
    const {cities, palettes, packages, returnTypes} = props;

    const resolver = useYupValidationResolver(schema);
    const {register, handleSubmit, formState: {errors}} = useForm({resolver});

    const [type, setType] = useState("");
    const [positions, setPositions] = useState([]);
    const [isPackaging, setIsPackaging] = useState(false);
    const [isReturn, setIsReturn] = useState(false);
    const [isLifted, setIsLifted] = useState(false);
    const [count, setCount] = useState(0);

    const addPosition = (position = {}) => {
        position["type"] = type;
        setPositions([...positions, position]);
        setCount(count + 1);
    }
    const removePosition = (index) => {
        setPositions(positions.filter((_, i) => i !== index));
        setCount(count - 1);
    }

    const handleTypeChange = (e) => {
        setType(e.target.value);

        if (e.target.value === "cargo") {
            setPositions([{count: 1, cost: 0, weight: 0, length: 0, width: 0, height: 0}]);
        } else if (e.target.value === "palette") {
            setPositions([{count: 1, cost: 0, type: ""}]);
        }
        setCount(1);
    }
    const onSubmit = (data) => {
        console.log(data);
    }
    const onReset = () => {
        setType("");
        setPositions([]);
        setIsPackaging(false);
        setIsReturn(false);
        setIsLifted(false);
        setCount(0);
    }

    return (
        <Box>
            <h2>Вартість доставки</h2>
            <FormProvider {...{register, handleSubmit, errors}}>
                <form onSubmit={handleSubmit(onSubmit)} onReset={onReset} className="container">
                    <div>
                        <CityList cities={cities} type="from"/>
                        <CityList cities={cities} type="to"/>
                    </div>

                    <div>
                        <label htmlFor="type">Вид відправлення</label>
                        <select defaultValue="" id="type" {...register("type")} onChange={handleTypeChange}>
                            <option value="" disabled hidden>Вкажіть вид відправлення</option>
                            <option value="palette">Палети</option>
                            <option value="cargo">Вантажі</option>
                        </select>
                        <span className="error">{errors.type?.message}</span>
                    </div>

                    {positions.length > 0 &&
                        <div>
                            {positions.map((position, index) => (
                                <Position key={"position" + index.toString()} index={index} type={type}
                                          removePosition={removePosition}
                                          palettes={palettes}/>
                            ))}
                            <button type="button" disabled={positions.length > 1} onClick={addPosition}>Додати місце</button>
                        </div>
                    }


                    <div>
                        <div>
                            <input id="packaging" type="checkbox" {...register(`packaging`)}
                                   onChange={() => setIsPackaging(!isPackaging)}/>
                            <label htmlFor="packaging">Послуга "Пакування"</label>
                        </div>
                        {isPackaging && (
                            <>
                                <div className="container-horizontal">
                                    <select defaultValue="" id="packagingType" {...register(`packagingType`)}>
                                        <option value="" disabled hidden>---вкажіть вид пакування---</option>
                                        {packages.map((pack, index) => (
                                            <option key={"package" + index.toString()}
                                                    value={pack.id}>{pack.label}</option>
                                        ))}
                                    </select>
                                    <span className="error">{errors.packagingType?.message}</span>
                                </div>
                                <span>Кількість: {count}</span>
                            </>
                        )}
                    </div>


                    <div>
                        <div>
                            <input id="lift" type="checkbox" {...register(`lift`)}
                                   onChange={() => setIsLifted(!isLifted)}/>
                            <label htmlFor="lift">Послуга "Підйом на поверх"</label>
                        </div>
                        {isLifted && (
                            <>
                                <div>
                                    <label htmlFor="liftFloors">Поверх</label>
                                    <input id="liftFloors" type="number" {...register(`liftFloors`)}/>
                                    <span className="error">{errors.liftFloors?.message}</span>
                                </div>
                                <div>
                                    <input id="liftElevator" type="checkbox" {...register(`liftElevator`)}/>
                                    <label htmlFor="liftElevator">Ліфт</label>
                                </div>
                            </>
                        )}
                    </div>

                    <div>
                        <div>
                            <input id="return" type="checkbox" {...register(`return`)}
                                   onChange={() => setIsReturn(!isReturn)}/>
                            <label htmlFor="return">Послуга "Зворотна доставка"</label>
                        </div>
                        {isReturn &&
                            <div>
                                <label htmlFor="returnType">Тип повернення</label>
                                <select defaultValue="" id="returnType" {...register(`returnType`)}>
                                    <option value="" disabled hidden>---вид зворотної доставки---</option>
                                    {returnTypes.map((type, index) => (
                                        <option key={"returnType" + index.toString()}
                                                value={type.id}>{type.label}</option>
                                    ))}
                                </select>
                                <span className="error">{errors.returnType?.message}</span>
                            </div>
                        }
                    </div>
                    {type === "palette" &&
                        <div>
                            <input id="palletizing" type="checkbox" {...register(`palletizing`)}/>
                            <label htmlFor="palletizing">Палетування</label>
                        </div>
                    }
                    <div>
                        <input type="submit"/>
                        <input type="reset"/>
                    </div>
                </form>
            </FormProvider>
        </Box>
    );
}
