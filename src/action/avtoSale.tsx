import { Dispatch } from 'redux';
import { AvtoSaleTypes, AvtoList } from "../types/AvtoList";

export const GetlistAvto = () => async (dispatch: Dispatch<AvtoList>) => {
    dispatch({
        type: AvtoSaleTypes.GET_avto, payload: [
            {
                id: 1,
                name:'Сало',
                price: 150
            },
            {
                id: 2,
                name:'Мясо',
                price: 180
            }
            
        ]
    });
}
