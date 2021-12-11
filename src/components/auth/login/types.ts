export enum AuthActionTypes {
    LOGIN_AUTH = "LOGIN_AUTH",
    LOGOUT="LOGOUT"
}

//Модель для входу на сайт
export interface ILoginModel {
    email: string,
    password: string
}
//Модель для входу на сайт возврат good
export interface ILoginResponse {
    access_token: string,
    user: IUser
}
//Модель для входу на сайт возврат с err
export interface ILoginServerError {
    email: Array<string>
    password: Array<string>,
    error: string
} 

export interface IUser {
    email: string,
    image: string
}

export interface AuthState {
    user: null|IUser,
    isAuth: boolean,
}

export interface LoginAuthAction {
    type: AuthActionTypes.LOGIN_AUTH,
    payload: IUser
}
export interface Logout_auth 
{
    type: AuthActionTypes.LOGOUT
}

export type AuthAction = LoginAuthAction|Logout_auth;