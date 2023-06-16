import { createReducer } from "@reduxjs/toolkit";
import userLogin_action from '../actions/userLogin_action'
const { SaveUserLogin } = userLogin_action

let initial_state = {
    token: '',
    user: {}
}

const reducer = createReducer(
    initial_state,
    (builder)=> builder
    .addCase(
        SaveUserLogin,
        (state, action) => {
            const new_state = {
                ...state,
                token: action.payload.token,
                user: action.payload.user
            }
            return new_state
        }
        
    )
)
export default reducer