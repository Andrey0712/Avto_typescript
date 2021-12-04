export enum AvtoSaleTypes {
    GET_avto = 'GET_avto'
}

export interface Avto {
    id: number;
    name:string;
    price: number;
}

export interface GetAvtoState {   
    getAvto : Avto [];
}


interface GetAvtoAction {
    type: AvtoSaleTypes.GET_avto;
    payload : Avto [];    
}

export type AvtoList = GetAvtoAction;