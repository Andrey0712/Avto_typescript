import { combineReducers } from "redux";
import { authReducer } from "./auth-reducer";
import { avtoSaleReducer } from "./AvtoSaleReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    avtoSale : avtoSaleReducer
});

export type RootState = ReturnType<typeof rootReducer>;