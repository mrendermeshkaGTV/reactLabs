import React, {useState} from "react"
import {Button} from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';


export default function Game() {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    const [randomNumber, setRandomNumber] = useState(getRandomInt(100))
    let generateRandomNumber = () => {

        setRandomNumber(getRandomInt(100))
        setTrys(0)
        setuserGuess("")
    }

    const [trys, setTrys] = useState(0)
    let result = ""
    const [userGuess, setuserGuess] = useState("")
    const handlerValueChanger = (e) => {
        let current = e.target.value;
        setuserGuess(current)
    }
    const submit_hendler = () => {

            setTrys(trys + 1)
            if (userGuess == randomNumber) {
                alert("You Win")
                generateRandomNumber()
            }else {
                if(userGuess < randomNumber){
                    alert(`bigger than ${userGuess}`)
                }
                else {
                    alert(`less than ${userGuess}`)
                }
            }
    }
    return <div
        style={{display: "flex", flexDirection:"column" , alignItems: "center", justifyContent: "center", width: "100vw", height: "100vh"}}>
        <Button variant="primary" onClick={generateRandomNumber}>Generate</Button>{' '}
        <InputGroup className={"my-5"}>
            <InputGroup.Text>Number</InputGroup.Text>
            <Form.Control as="textarea" aria-label="Number" value={userGuess} onChange={handlerValueChanger}/>
        </InputGroup>
        <Button variant="primary" onClick={submit_hendler}>Вгадати</Button>{' '}
        <h3>Attempts {trys}</h3>
        <h3>Result: {result}</h3>
    </div>
}