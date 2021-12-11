export enum AuthActionTypes {
    LOGIN_AUTH = "LOGIN_AUTH"
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


export type AuthAction = LoginAuthAction;