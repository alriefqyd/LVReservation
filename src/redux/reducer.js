import { combineReducers } from "redux";

const initialState = {
    name : 'Al'
}

const registerState = {
    text : "Please fill all the form to register your account",
    name : "Al Riefqy"
}

const registerReducer = (state = registerState, action) => {
    return state;
}

const loginState = {
    text : "Please fill all the form to login your account",
    id : "alriefqyd"
}

const loginReducer = (state = loginState, action) => {
    return state;
}


const reducer = combineReducers({
    registerReducer,
    loginReducer
})

export default reducer;