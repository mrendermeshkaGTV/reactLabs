import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../store/actions/users";
import {addUserActionHandler, removeUserActionHandler} from "../store/reducers/usersReducer";
import {increaseCounterActionHandler, decreaseCounterActionHandler} from "../store/reducers/counterReducer"
import bcrypt from 'bcryptjs'
const Lesson10 = () => {
    const dispatch = useDispatch();
    const counter = useSelector(e => e.counter.counterValue);
    const lections = useSelector(e => e.counter.lesson.lections);
    const topic = useSelector(e => e.counter.lesson.topic);
    const users = useSelector(e => e.users.users);

    const increase = () => {
        dispatch(increaseCounterActionHandler(10))
    }
    const decrease = () => {
        dispatch(decreaseCounterActionHandler(10))
    }
    const addUser = () => {
        const salt = bcrypt.genSaltSync(20)
        const user = {
            name: `User with id ${salt}`,
            id: salt
        }
        dispatch(addUserActionHandler(user));
    }
    const removeUser = (id) => {
        dispatch(removeUserActionHandler(id));
    }
    return (
        <div>
            <div>
                Lesson: #{lections} - {topic}
                <br/>
                Counter: {counter}
                <button onClick={increase}>+ counter</button>
                <button onClick={decrease}>- counter</button>
            </div>
            <div>
                <button onClick={addUser}>Додай юзера</button>
                <button onClick={() => dispatch(fetchUsers())}>Додай юзера з фейкАПИ</button>
                {users.length ?
                    <div>
                        <h3>Users</h3>
                        {users.map(user =><div id={user.id} key={user.id + bcrypt.genSaltSync(10)} onClick={() => removeUser(user.id)}>{user.name}</div>)}</div>:<div>Нікого немає вдома</div>
                }
            </div>
        </div>
    )
}
export {Lesson10}