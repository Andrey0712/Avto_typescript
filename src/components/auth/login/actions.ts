import axios, { AxiosError } from 'axios';
import { Dispatch } from 'react';
import http from '../../../http_common';
import jwt from 'jsonwebtoken';
import { AuthAction, AuthActionTypes, ILoginModel, ILoginResponse, ILoginServerError, IUser,Logout_auth,LoginAuthAction } from './types';

export const LoginUser = (data: ILoginModel) => async (dispatch: Dispatch<LoginAuthAction>) => {
    try {
        const response = await http.post<ILoginResponse>("api/auth/login", data);
        const {access_token} = response.data;
        const user = jwt.decode(access_token) as IUser;
        dispatch({
            type: AuthActionTypes.LOGIN_AUTH,
            payload: user
        });
        localStorage.setItem('access_token', access_token);
        return Promise.resolve();
    }
    catch(ex) {
        if(axios.isAxiosError(ex))
        {
            const serverError : AxiosError<ILoginServerError> = ex;
            if(serverError && serverError.response)
            {
                const {data} = serverError.response;
                return Promise.reject(data);
            }
        }
        return Promise.reject(ex);
    }
}

export const LogoutUser = () => async (dispatch: Dispatch<Logout_auth>) => {
    console.log("выход");
    dispatch({ type: AuthActionTypes.LOGOUT });
    localStorage.removeItem('access_token');
}
