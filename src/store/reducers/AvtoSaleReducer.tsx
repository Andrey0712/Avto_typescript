
import { AvtoList, AvtoSaleTypes, GetAvtoState } from "../../types/AvtoList";

const initialState : GetAvtoState = 
{
    getAvto: [],
}

export const avtoSaleReducer = (state = initialState, action:AvtoList) : GetAvtoState => 
{
    switch(action.type) 
    {
        case AvtoSaleTypes.GET_avto: 
        {
            return {
                getAvto: [...action.payload]
            }
        }
        default : 
        {
            return state;
        }
    }
}