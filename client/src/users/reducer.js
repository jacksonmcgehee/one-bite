import {  } from './actions'

const initialState = {
    signedIn: false,
    email: '',
    password: '',
    password_confirmation: ''
}

export default function (state = initialState, action) {
    const { type, data } = action
    switch(type) {
        case AUTH_USER:
            return {
                ...state,

            }
        default:
            return state
    }
}