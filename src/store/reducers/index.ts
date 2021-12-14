import { combineReducers } from "redux";
import { authReducer } from "../../components/auth/login/reducer";
import { avtoSaleReducer } from "./AvtoSaleReducer";
import { registerReducer } from "../../components/auth/Register/reduser";

export const rootReducer = combineReducers({
    auth: authReducer,
    regist:registerReducer,
    avtoSale : avtoSaleReducer
});

export type RootState = ReturnType<typeof rootReducer>;