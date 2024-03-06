import { combineReducers } from "redux";

const initialState = {
    name : 'Al'
}

// Redux for Register
const registerState = { // disini kita inisialisasi semua state apa yang akan digunakan atau diubah ubah
    text : "Please fill all the form to register your account",
    name : "Al Riefqy",
    form : {
        fullName : '',
        badgeNumber : '',
        password:''
    }
}

const registerReducer = (state = registerState, action) => { // disini kita set state yag ada di registerState
    if(action.type === 'SET_TITLE'){ // action type dan props lain diambil dari dispatch di register js
        return {
            ...state, // ini kita soft delete state yang ada atau copy state yang ada terus di hapus yang lama
            text : "New Text" // terus ubah ini, maka jadilah state object baru
        } 
    }

    if(action.type === 'SET_FORM'){
        return {
            ...state, //sama diatas
            form : { // karena form bentuknya juga object maka perlakuannya sama, pakai soft delete
                ...state.form,
                [action.inputType] : action.inputValue
            }
            
        }
        
      }
    return state;
}

// Redux for Login
const loginState = {
    text : "Please fill all the form to login to your account",
    form : {
        badgeNumber : '',
        password : ''
    }
}

const loginReducer = (state = loginState, action) => {
    if(action.type === 'SET_FORM'){
        return {
            ...state,
            form : {
                ...state.form,
                [action.inputType] : action.inputValue
            }
        }
    }
    return state;
}


const reducer = combineReducers({ // untuk melakukan combine reducer
    registerReducer,
    loginReducer
})

export default reducer;