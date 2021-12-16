import { combineReducers } from "redux";
import { authReducer } from "../../components/auth/login/reducer";
import { avtoSaleReducer } from "./AvtoSaleReducer";
import { registerReducer } from "../../components/auth/Register/reduser";
import { productsReducer } from "../../components/products/reducer";


export const rootReducer = combineReducers({
    auth: authReducer,
    regist:registerReducer,
    avtoSale : avtoSaleReducer,
    products: productsReducer
});

export type RootState = ReturnType<typeof rootReducer>;