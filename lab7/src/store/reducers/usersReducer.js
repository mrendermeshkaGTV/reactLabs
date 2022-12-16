import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
    users: []
}

const usersSlice = createSlice({
    name: 'users',
    initialState: defaultState,
    reducers: {
        addUserActionHandler: (state, action) => {
            state.users.push(action.payload);
        },

        addUsersActionHandler: (state, action) => {
            state.users.push(...action.payload);
        },

        removeUserActionHandler: (state, action) => {
            state.users = state.users.filter(
                (user) => user.id !== action.payload);
        }
    }
})

export const { addUserActionHandler, addUsersActionHandler, removeUserActionHandler } = usersSlice.actions;
export default usersSlice.reducer;