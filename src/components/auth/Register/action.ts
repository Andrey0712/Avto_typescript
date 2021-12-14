import axios, { AxiosError } from 'axios';
import { Dispatch } from 'react';
import http from '../../../http_common';
import { RegisterAction, RegisterActionTypes, RegisterErrors } from './types';
import { AuthUser } from '../login/actions';

export const RegisterUser = (data: FormData) => {
    return async (dispatch: Dispatch<RegisterAction>) => {
      try {
        const response = await http.post("api/auth/register", data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        const token = await response.data.token;
        dispatch({
          type: RegisterActionTypes.REGISTER,
          payload: token,
        });
        AuthUser(token, dispatch);
        return Promise.resolve( token );
  
      } catch (err: any) {
        if (axios.isAxiosError(err)) {
          const serverError = err as AxiosError<RegisterErrors>;
          if (serverError && serverError.response) {
            const { errors } = serverError.response.data;
            return Promise.reject(errors);
          }
        }
      }
    };
  };