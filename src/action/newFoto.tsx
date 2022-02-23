
import {
    ActionTypes,
    IAddNewFoto,
    FotoAction
} from "../components/admin/CropperPage/types";
import { Dispatch } from "react";
import http from "../http_common";

export const AddFoto =
(data: IAddNewFoto) => async (dispatch: Dispatch<FotoAction>) => {
    try {
        const response = await http.post<IAddNewFoto>("/add", data);
        console.log(response.status);
        dispatch({
            type: ActionTypes.ADD_SUCCESS,
            payloads: response.status
        });

        return Promise.resolve();

    } catch (error) {
        console.log("Error add new animal:", error);
        return Promise.reject();
    }

}