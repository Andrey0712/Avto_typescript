export enum ActionTypes {

    
    ADD_SUCCESS = "ADD_SUCCESS",
   
}

export interface IAddNewFoto {
    
    urlImage:string
   
}
export interface AddSuccessFotoAction {
    type: ActionTypes.ADD_SUCCESS;
    payloads: string |number;
}

export type FotoAction =
AddSuccessFotoAction;