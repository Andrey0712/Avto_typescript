import { AuthAction, AuthActionTypes, AuthState } from './types';

const inialState : AuthState = {
    user: null,
    isAuth: false,
}

export const authReducer = (state=inialState, action: AuthAction) : AuthState => {
    switch(action.type) {
        case AuthActionTypes.LOGIN_AUTH: {
            return {
                ...state, isAuth: true, user: action.payload
            };
        }
        case AuthActionTypes.LOGOUT: {
            return { isAuth: false,
                user: {
                email: '',
                image: ''
              }
            };
        }
        
        default:
            return state;
    }
}