export enum RegisterActionTypes {
    REGISTER = "REGISTER",

}

export interface RegisterState {
    data: string,
    isRegisterd: boolean,
}

export interface RegisterStartAction {
    type: RegisterActionTypes.REGISTER;
    payload: string;
}

export interface IRegister {
    name?: string;
    email?: string;
    photo?: FileList[];
    password?: string;

}

export type RegisterError = {
    email: Array<string>,
    password: Array<string>,

};

export type RegisterErrors = {
    errors: RegisterError,
    status: number,
};

export type RegisterAction = RegisterStartAction;
