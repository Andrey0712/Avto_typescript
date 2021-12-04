import { Dispatch } from 'redux';
import { AvtoSaleTypes, AvtoList } from "../types/AvtoList";

export const GetlistAvto = () => async (dispatch: Dispatch<AvtoList>) => {
    dispatch({
        type: AvtoSaleTypes.GET_avto, payload: [
            {
                id: 1,
                name:'Audi',
                price: 10000
            },
            {
                id: 2,
                name:'BMW',
                price: 9000
            }
            
        ]
    });
}