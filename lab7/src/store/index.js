import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import counterReducer from "./reducers/counterReducer";
import usersReducer from "./reducers/usersReducer";


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        users: usersReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk),
})