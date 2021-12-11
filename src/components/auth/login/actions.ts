import axios, { AxiosError } from 'axios';
import { Dispatch } from 'react';
import http from '../../../http_common';
import jwt from 'jsonwebtoken';
import { AuthAction, AuthActionTypes, ILoginModel, ILoginResponse, ILoginServerError, IUser } from './types';

export const LoginUser = (data: ILoginModel) => async (dispatch: Dispatch<AuthAction>) => {
    try {
        const response = await http.post<ILoginResponse>("api/auth/login", data);
        const {access_token} = response.data;
        const user = jwt.decode(access_token) as IUser;
        dispatch({
            type: AuthActionTypes.LOGIN_AUTH,
            payload: user
        });
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